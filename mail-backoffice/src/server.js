import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import ExcelJS from "exceljs";
import path from "path";
import { fileURLToPath } from "url";

import { openDb, initDb, run, get, all } from "./db.js";
import { signToken, setAuthCookie, clearAuthCookie, requireAuth } from "./auth.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const DATA_DIR = path.join(ROOT, "data");
const EXCEL_PATH = path.join(DATA_DIR, "mails_gearforge.xlsx");

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change_me";

const db = openDb();
await initDb(db);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(PUBLIC_DIR));

function nowIso() {
  return new Date().toISOString();
}

async function rebuildExcelFile() {
  const mails = await all(
    db,
    `SELECT id, name, email, telephone, subject, message, status, is_starred, is_archived, created_at, updated_at
     FROM mails
     ORDER BY datetime(created_at) DESC`
  );

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Mails Gearforge");

  sheet.columns = [
    { header: "ID", key: "id", width: 8 },
    { header: "Nom", key: "name", width: 24 },
    { header: "Email", key: "email", width: 30 },
    { header: "Téléphone", key: "telephone", width: 18 },
    { header: "Sujet", key: "subject", width: 30 },
    { header: "Message", key: "message", width: 50 },
    { header: "Statut", key: "status", width: 12 },
    { header: "Important", key: "is_starred", width: 12 },
    { header: "Archivé", key: "is_archived", width: 12 },
    { header: "Créé le", key: "created_at", width: 22 },
    { header: "Mis à jour le", key: "updated_at", width: 22 },
  ];

  mails.forEach((mail) => {
    sheet.addRow({
      ...mail,
      is_starred: mail.is_starred ? "Oui" : "Non",
      is_archived: mail.is_archived ? "Oui" : "Non",
    });
  });

  sheet.getRow(1).font = { bold: true };
  sheet.views = [{ state: "frozen", ySplit: 1 }];

  await workbook.xlsx.writeFile(EXCEL_PATH);
}

/* CORS DEV — Live Server -> API Node*/
app.use((req, res, next) => {
  const origin = req.headers.origin;

  const allowed = new Set([
    "http://127.0.0.1:5500",
    "http://localhost:5500",
  ]);

  if (origin && allowed.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  }

  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// SMTP
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: { user, pass },
  });
}

async function seedAdminIfEmpty() {
  const userCount = await get(db, "SELECT COUNT(*) as c FROM users");
  if ((userCount?.c || 0) > 0) return;

  const email = process.env.ADMIN_EMAIL || "admin@local.test";
  const password = process.env.ADMIN_PASSWORD || "Admin123!";
  const hash = await bcrypt.hash(password, 10);

  await run(
    db,
    "INSERT INTO users(email, password_hash, role, created_at) VALUES(?,?,?,?)",
    [email, hash, "admin", nowIso()]
  );

  console.log("✅ Admin seed created:", email, "(password in .env)");
}

await seedAdminIfEmpty();
await rebuildExcelFile();

/* ROUTES PUBLIC*/
app.post("/api/contact", async (req, res) => {
  try {
    const body = req.body || {};

    const nom = String(body.nom || "").trim();
    const prenom = String(body.prenom || "").trim();
    const telephone = String(body.telephone || "").trim();

    const name =
      String(body.name || "").trim() ||
      `${prenom} ${nom}`.trim() ||
      nom ||
      prenom ||
      "—";

    const email = String(body.email || "").trim();
    const subject =
      String(body.subject || body.sujet || "").trim() ||
      `Contact Gearforge`;

    const message = String(body.message || "").trim();

    if (!email || !message || !subject || !name) {
      return res.status(400).json({ ok: false, error: "MISSING_FIELDS" });
    }

    const ts = nowIso();

    const ins = await run(
      db,
      `INSERT INTO mails(
        name, email, telephone, subject, message,
        status, is_starred, is_archived, created_at, updated_at
      )
       VALUES(?,?,?,?,?, 'unread', 0, 0, ?, ?)`,
      [name, email, telephone, subject, message, ts, ts]
    );

    // ✅ On répond tout de suite au front
    res.json({ ok: true, id: ins.lastID });

    // ✅ Ensuite seulement on lance le reste en arrière-plan
    rebuildExcelFile().catch((e) => {
      console.warn("Excel rebuild failed:", e?.message || e);
    });

    const transporter = getTransporter();
    if (transporter) {
      const from = process.env.MAIL_FROM || "noreply@example.com";
      const adminTo = process.env.ADMIN_EMAIL || "admin@local.test";

      transporter.sendMail({
        from,
        to: adminTo,
        subject: `[CONTACT] ${subject}`,
        text:
          `Nouveau message:\n\n` +
          `Nom: ${name}\n` +
          `Email: ${email}\n` +
          `Téléphone: ${telephone || "—"}\n\n` +
          `${message}\n\n` +
          `ID: ${ins.lastID}`,
      }).catch((e) => {
        console.warn("SMTP send failed:", e?.message || e);
      });
    }
  } catch (e) {
    console.error("POST /api/contact failed:", e);
    return res.status(500).json({ ok: false, error: "SERVER_ERROR" });
  }
});

/* AUTH ADMIN*/
app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ ok: false, error: "MISSING_FIELDS" });
  }

  const user = await get(db, "SELECT * FROM users WHERE email = ?", [String(email).trim()]);
  if (!user) return res.status(401).json({ ok: false, error: "INVALID_CREDENTIALS" });

  const ok = await bcrypt.compare(String(password), user.password_hash);
  if (!ok) return res.status(401).json({ ok: false, error: "INVALID_CREDENTIALS" });

  const token = signToken({ id: user.id, email: user.email, role: user.role }, JWT_SECRET);
  setAuthCookie(res, token);

  return res.json({
    ok: true,
    user: { id: user.id, email: user.email, role: user.role },
  });
});

app.post("/api/admin/logout", (req, res) => {
  clearAuthCookie(res);
  res.json({ ok: true });
});

app.get("/api/admin/me", requireAuth(JWT_SECRET), (req, res) => {
  res.json({ ok: true, user: req.user });
});

app.post("/api/newsletter", async (req, res) => {
  try {
    const email = String(req.body?.email || "").trim().toLowerCase();

    if (!email) {
      return res.status(400).json({ ok: false, error: "MISSING_EMAIL" });
    }

    const exists = await get(
      db,
      "SELECT id FROM newsletter_subscribers WHERE email = ?",
      [email]
    );

    if (exists) {
      return res.json({ ok: true, message: "ALREADY_SUBSCRIBED" });
    }

    await run(
      db,
      "INSERT INTO newsletter_subscribers(email, created_at) VALUES(?, ?)",
      [email, nowIso()]
    );

    return res.json({ ok: true, message: "SUBSCRIBED" });
  } catch (e) {
    console.error("POST /api/newsletter failed:", e);
    return res.status(500).json({ ok: false, error: "SERVER_ERROR" });
  }
});

app.get("/api/admin/newsletter", requireAuth(JWT_SECRET), async (req, res) => {
  const rows = await all(
    db,
    "SELECT * FROM newsletter_subscribers ORDER BY datetime(created_at) DESC"
  );

  res.json({ ok: true, rows });
});

app.post("/api/admin/newsletter/delete", requireAuth(JWT_SECRET), async (req, res) => {
  try {
    const email = String(req.body?.email || "").trim().toLowerCase();

    if (!email) {
      return res.status(400).json({ ok: false, error: "EMAIL_REQUIRED" });
    }

    await run(
      db,
      "DELETE FROM newsletter_subscribers WHERE email = ?",
      [email]
    );

    return res.json({ ok: true });
  } catch (err) {
    console.error("DELETE NEWSLETTER ERROR:", err);
    return res.status(500).json({ ok: false, error: "DELETE_FAILED" });
  }
});

/* BACKOFFICE API*/
app.get("/api/admin/mails", requireAuth(JWT_SECRET), async (req, res) => {
  const q = String(req.query.q || "").trim();
  const status = String(req.query.status || "all");
  const starred = String(req.query.starred || "all");
  const archived = String(req.query.archived || "0");
  const page = Math.max(1, Number(req.query.page || 1));
  const pageSize = Math.min(50, Math.max(5, Number(req.query.pageSize || 12)));
  const offset = (page - 1) * pageSize;

  const where = [];
  const params = [];

  where.push("is_archived = ?");
  params.push(archived === "1" ? 1 : 0);

  if (status !== "all") {
    where.push("status = ?");
    params.push(status);
  }
  if (starred !== "all") {
    where.push("is_starred = ?");
    params.push(starred === "1" ? 1 : 0);
  }
  if (q) {
    where.push("(name LIKE ? OR email LIKE ? OR telephone LIKE ? OR subject LIKE ? OR message LIKE ?)");
    params.push(`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`);
  }

  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const totalRow = await get(db, `SELECT COUNT(*) as c FROM mails ${whereSql}`, params);
  const total = totalRow?.c || 0;

  const rows = await all(
    db,
    `SELECT id, name, email, telephone, subject, status, is_starred, is_archived, created_at, updated_at
     FROM mails
     ${whereSql}
     ORDER BY datetime(created_at) DESC
     LIMIT ? OFFSET ?`,
    [...params, pageSize, offset]
  );

  res.json({
    ok: true,
    page,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
    rows,
  });
});

app.get("/api/admin/mails/:id", requireAuth(JWT_SECRET), async (req, res) => {
  const id = Number(req.params.id);
  const mail = await get(db, "SELECT * FROM mails WHERE id = ?", [id]);
  if (!mail) return res.status(404).json({ ok: false, error: "NOT_FOUND" });

  const replies = await all(
    db,
    "SELECT * FROM mail_replies WHERE mail_id = ? ORDER BY id DESC",
    [id]
  );

  res.json({ ok: true, mail, replies });
});

app.patch("/api/admin/mails/:id", requireAuth(JWT_SECRET), async (req, res) => {
  const id = Number(req.params.id);
  const mail = await get(db, "SELECT * FROM mails WHERE id = ?", [id]);
  if (!mail) return res.status(404).json({ ok: false, error: "NOT_FOUND" });

  const patch = req.body || {};
  const fields = [];
  const params = [];

  if (patch.status === "read" || patch.status === "unread") {
    fields.push("status = ?");
    params.push(patch.status);
  }
  if (typeof patch.is_starred === "boolean") {
    fields.push("is_starred = ?");
    params.push(patch.is_starred ? 1 : 0);
  }
  if (typeof patch.is_archived === "boolean") {
    fields.push("is_archived = ?");
    params.push(patch.is_archived ? 1 : 0);
  }

  if (!fields.length) {
    return res.status(400).json({ ok: false, error: "NO_FIELDS" });
  }

  fields.push("updated_at = ?");
  params.push(nowIso());

  await run(db, `UPDATE mails SET ${fields.join(", ")} WHERE id = ?`, [...params, id]);
  const updated = await get(db, "SELECT * FROM mails WHERE id = ?", [id]);

  await rebuildExcelFile();

  res.json({ ok: true, mail: updated });
});

app.delete("/api/admin/mails/:id", requireAuth(JWT_SECRET), async (req, res) => {
  const id = Number(req.params.id);
  await run(db, "DELETE FROM mails WHERE id = ?", [id]);

  await rebuildExcelFile();

  res.json({ ok: true });
});

app.post("/api/admin/mails/:id/reply", requireAuth(JWT_SECRET), async (req, res) => {
  const id = Number(req.params.id);
  const { subject, body } = req.body || {};

  const mail = await get(db, "SELECT * FROM mails WHERE id = ?", [id]);
  if (!mail) return res.status(404).json({ ok: false, error: "NOT_FOUND" });
  if (!subject || !body) {
    return res.status(400).json({ ok: false, error: "MISSING_FIELDS" });
  }

  const transporter = getTransporter();
  let sentOk = 0;

  if (transporter) {
    try {
      const from = process.env.MAIL_FROM || "noreply@example.com";
      await transporter.sendMail({
        from,
        to: mail.email,
        subject: String(subject),
        text: String(body),
      });
      sentOk = 1;
    } catch (e) {
      sentOk = 0;
      console.warn("SMTP reply failed:", e?.message || e);
    }
  }

  await run(
    db,
    `INSERT INTO mail_replies(mail_id, to_email, subject, body, sent_ok, created_at)
     VALUES(?,?,?,?,?,?)`,
    [id, mail.email, String(subject), String(body), sentOk, nowIso()]
  );

  res.json({
    ok: true,
    sentOk,
    note: transporter ? undefined : "SMTP_NOT_CONFIGURED",
  });
});

/* EXPORT EXCEL*/
app.get("/api/admin/export-excel", requireAuth(JWT_SECRET), (req, res) => {
  res.download(EXCEL_PATH, "mails_gearforge.xlsx");
});

/* PAGES*/
app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});