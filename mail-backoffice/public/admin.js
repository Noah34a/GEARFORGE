let state = {
  me: null,
  page: 1,
  pageSize: 12,
  totalPages: 1,
  rows: [],
  selectedId: null,
  selectedMail: null,
};

const $ = (id) => document.getElementById(id);

function setVisible(el, v) {
  if (!el) return;
  el.style.display = v ? "" : "none";
}

async function api(url, opts = {}) {
  const r = await fetch(url, opts);
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.ok) {
    const err = j.error || `HTTP_${r.status}`;
    throw new Error(err);
  }
  return j;
}

function fmtDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function badgeStatus(s) {
  return s === "unread"
    ? `<span class="badge yellow">Non lu</span>`
    : `<span class="badge green">Lu</span>`;
}

function badgeStar(b) {
  return b ? `<span class="badge red">Important</span>` : "";
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderList() {
  const list = $("list");
  if (!list) return;
  list.innerHTML = "";

  for (const m of state.rows) {
    const el = document.createElement("div");
    el.className = "item";
    el.dataset.id = m.id;

    const selected = Number(state.selectedId) === Number(m.id);
    if (selected) el.style.borderColor = "rgba(167,0,0,.6)";

    el.innerHTML = `
      <div class="row">
        <div style="font-weight:700">${escapeHtml(m.subject)}</div>
        <div class="small">${fmtDate(m.created_at)}</div>
      </div>
      <div class="row" style="margin-top:6px">
        <div class="small">${escapeHtml(m.name)} — ${escapeHtml(m.email)}</div>
        <div class="badges">
          ${badgeStatus(m.status)}
          ${badgeStar(m.is_starred)}
        </div>
      </div>
    `;

    el.addEventListener("click", () => selectMail(m.id));
    list.appendChild(el);
  }
}

function setDetailEnabled(v) {
  const ids = ["btnRead", "btnStar", "btnArch", "btnDel", "btnReply"];
  for (const id of ids) {
    const el = $(id);
    if (el) el.disabled = !v;
  }
}

function setDetail(mail, replies = []) {
  state.selectedMail = mail;

  if (!mail) {
    if ($("dTitle")) $("dTitle").textContent = "Sélectionne un mail";
    if ($("dSub")) $("dSub").textContent = "";
    if ($("detail")) $("detail").innerHTML = `<div class="small">Aucun mail sélectionné.</div>`;
    if ($("replies")) $("replies").innerHTML = "—";
    setDetailEnabled(false);
    return;
  }

  const tel = String(mail.telephone || "").trim();

  if ($("dTitle")) $("dTitle").textContent = mail.subject;
  if ($("dSub")) {
    $("dSub").textContent = `${mail.name} — ${mail.email}${tel ? " • " + tel : ""} • ${fmtDate(mail.created_at)}`;
  }

  if ($("detail")) {
    $("detail").innerHTML = `
      <div class="meta">
        <div class="panel" style="padding:12px;border:1px solid var(--line);background:#0f0f12">
          <div class="small">Nom</div>
          <div style="font-weight:700">${escapeHtml(mail.name)}</div>
        </div>

        <div class="panel" style="padding:12px;border:1px solid var(--line);background:#0f0f12">
          <div class="small">Email</div>
          <div style="font-weight:700">${escapeHtml(mail.email)}</div>
        </div>

        <div class="panel" style="padding:12px;border:1px solid var(--line);background:#0f0f12">
          <div class="small">Téléphone</div>
          <div style="font-weight:700">${tel ? escapeHtml(tel) : "—"}</div>
        </div>
      </div>

      <div class="panel" style="padding:12px;border:1px solid var(--line);background:#0f0f12">
        <div class="small">Message</div>
        <div style="white-space:pre-wrap;line-height:1.5;margin-top:6px">${escapeHtml(mail.message)}</div>
      </div>

      <div class="badges">
        ${badgeStatus(mail.status)}
        ${badgeStar(mail.is_starred)}
        ${mail.is_archived ? `<span class="badge">Archivé</span>` : ``}
      </div>
    `;
  }

  // Pré-remplir réponse
  if ($("replySubject")) $("replySubject").value = `Re: ${mail.subject}`;
  if ($("replyBody")) $("replyBody").value = "";

  // Replies
  if ($("replies")) {
    if (!replies.length) {
      $("replies").innerHTML = `<div class="small">Aucune réponse envoyée.</div>`;
    } else {
      $("replies").innerHTML = replies
        .map(
          (r) => `
        <div class="panel" style="padding:10px;border:1px solid var(--line);background:#0f0f12;margin-bottom:8px">
          <div class="row" style="display:flex;justify-content:space-between;gap:10px">
            <div style="font-weight:700">${escapeHtml(r.subject)}</div>
            <div class="small">${fmtDate(r.created_at)}</div>
          </div>
          <div class="small">to: ${escapeHtml(r.to_email)} • sent_ok: ${r.sent_ok ? "✅" : "❌"}</div>
          <div style="white-space:pre-wrap;margin-top:8px;line-height:1.5">${escapeHtml(r.body)}</div>
        </div>
      `
        )
        .join("");
    }
  }

  // Boutons
  if ($("btnRead")) $("btnRead").textContent = mail.status === "read" ? "Marquer non lu" : "Marquer lu";
  if ($("btnStar")) $("btnStar").textContent = mail.is_starred ? "Retirer important" : "Mettre important";
  if ($("btnArch")) $("btnArch").textContent = mail.is_archived ? "Désarchiver" : "Archiver";

  setDetailEnabled(true);
  if ($("kHint")) $("kHint").textContent = `#${mail.id}`;
}

async function loadMe() {
  try {
    const j = await api("/api/admin/me");
    state.me = j.user;
    if ($("meLine")) $("meLine").textContent = `Connecté: ${state.me.email}`;
    setVisible($("loginPanel"), false);
    setVisible($("app"), true);
    setVisible($("logoutBtn"), true);
    await refresh();
    await loadNewsletter();
  } catch {
    state.me = null;
    setVisible($("loginPanel"), true);
    setVisible($("app"), false);
    setVisible($("logoutBtn"), false);
  }
}

async function refresh() {
  const q = ($("q")?.value || "").trim();
  const status = $("status")?.value || "all";
  const starred = $("starred")?.value || "all";
  const archived = $("archived")?.value || "0";

  if ($("listOut")) $("listOut").textContent = "Chargement…";

  const url = new URL(location.origin + "/api/admin/mails");
  url.searchParams.set("page", String(state.page));
  url.searchParams.set("pageSize", String(state.pageSize));
  url.searchParams.set("q", q);
  url.searchParams.set("status", status);
  url.searchParams.set("starred", starred);
  url.searchParams.set("archived", archived);

  const j = await api(url.pathname + "?" + url.searchParams.toString());
  state.rows = j.rows;
  state.totalPages = j.totalPages;

  if ($("kTotal")) $("kTotal").textContent = String(j.total);
  if ($("kPage")) $("kPage").textContent = `${j.page}/${j.totalPages}`;
  if (!state.selectedMail && $("kHint")) $("kHint").textContent = "—";

  renderList();
  if ($("listOut")) $("listOut").textContent = `${j.rows.length} résultat(s) • page ${j.page}/${j.totalPages}`;

  const still = state.rows.some((r) => Number(r.id) === Number(state.selectedId));
  if (!still) {
    state.selectedId = null;
    setDetail(null);
  }
}

async function selectMail(id) {
  state.selectedId = id;
  const j = await api(`/api/admin/mails/${id}`);
  setDetail(j.mail, j.replies);
  renderList();
}

async function patchSelected(patch) {
  if (!state.selectedId) return;

  await api(`/api/admin/mails/${state.selectedId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });

  await refresh();
  const dj = await api(`/api/admin/mails/${state.selectedId}`);
  setDetail(dj.mail, dj.replies);
}

async function deleteSelected() {
  if (!state.selectedId) return;
  await api(`/api/admin/mails/${state.selectedId}`, { method: "DELETE" });
  state.selectedId = null;
  setDetail(null);
  await refresh();
}

async function replySelected() {
  if (!state.selectedId) return;
  if ($("replyOut")) $("replyOut").textContent = "Envoi…";

  const subject = ($("replySubject")?.value || "").trim();
  const body = ($("replyBody")?.value || "").trim();

  try {
    const j = await api(`/api/admin/mails/${state.selectedId}/reply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, body }),
    });

    if ($("replyOut")) {
      $("replyOut").textContent = j.sentOk
        ? "✅ Réponse envoyée"
        : "⚠ Réponse enregistrée mais pas envoyée (SMTP non configuré ou erreur)";
    }

    const dj = await api(`/api/admin/mails/${state.selectedId}`);
    setDetail(dj.mail, dj.replies);
  } catch (e) {
    if ($("replyOut")) $("replyOut").textContent = "Erreur: " + e.message;
  }
}

async function deleteNewsletter(email) {
  if (!email) return;
  if (!confirm(`Supprimer ${email} de la newsletter ?`)) return;

  const out = $("newsletterOut");

  try {
    if (out) out.textContent = "Suppression…";

    await api("/api/admin/newsletter/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    await loadNewsletter();
    if (out) out.textContent = "✅ Inscrit supprimé";
  } catch (e) {
    console.error(e);
    if (out) out.textContent = "Erreur: " + e.message;
  }
}


// Events
const loginForm = $("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if ($("loginOut")) $("loginOut").textContent = "Connexion…";

    const data = Object.fromEntries(new FormData(e.target).entries());

    try {
      await api("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if ($("loginOut")) $("loginOut").textContent = "✅ Connecté";
      await loadMe();
    } catch (err) {
      if ($("loginOut")) $("loginOut").textContent = "Erreur: " + err.message;
    }
  });
}

const logoutBtn = $("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    try {
      await api("/api/admin/logout", { method: "POST" });
    } catch {}
    location.reload();
  });
}

const refreshBtn = $("refresh");
if (refreshBtn) {
  refreshBtn.addEventListener("click", async () => {
    state.page = 1;
    await refresh();
  });
}

const prevBtn = $("prev");
if (prevBtn) {
  prevBtn.addEventListener("click", async () => {
    state.page = Math.max(1, state.page - 1);
    await refresh();
  });
}

const nextBtn = $("next");
if (nextBtn) {
  nextBtn.addEventListener("click", async () => {
    state.page = Math.min(state.totalPages, state.page + 1);
    await refresh();
  });
}

const btnRead = $("btnRead");
if (btnRead) {
  btnRead.addEventListener("click", async () => {
    if (!state.selectedMail) return;
    await patchSelected({ status: state.selectedMail.status === "read" ? "unread" : "read" });
  });
}

const btnStar = $("btnStar");
if (btnStar) {
  btnStar.addEventListener("click", async () => {
    if (!state.selectedMail) return;
    await patchSelected({ is_starred: !Boolean(state.selectedMail.is_starred) });
  });
}

const btnArch = $("btnArch");
if (btnArch) {
  btnArch.addEventListener("click", async () => {
    if (!state.selectedMail) return;
    await patchSelected({ is_archived: !Boolean(state.selectedMail.is_archived) });
  });
}

const btnDel = $("btnDel");
if (btnDel) {
  btnDel.addEventListener("click", async () => {
    if (!state.selectedId) return;
    if (!confirm("Supprimer ce mail ?")) return;
    await deleteSelected();
  });
}

const btnReply = $("btnReply");
if (btnReply) {
  btnReply.addEventListener("click", replySelected);
}

async function loadNewsletter() {
  const list = $("newsletterList");
  const out = $("newsletterOut");

  if (!list || !out) return;

  out.textContent = "Chargement…";
  list.innerHTML = "";

  try {
    const j = await api("/api/admin/newsletter");
    const rows = j.rows || [];

    if (!rows.length) {
      list.innerHTML = `<div class="small">Aucun inscrit pour le moment.</div>`;
      out.textContent = "0 inscrit";
      return;
    }

    list.innerHTML = rows.map((row) => `
      <div class="item">
        <div class="row">
          <div>
            <div style="font-weight:700">${escapeHtml(row.email)}</div>
            <div class="small">${fmtDate(row.created_at)}</div>
          </div>

          <button
            class="btn danger"
            type="button"
            data-email="${escapeHtml(row.email)}"
            onclick="deleteNewsletter(this.dataset.email)"
          >
            Supprimer
          </button>
        </div>
      </div>
    `).join("");

    out.textContent = `${rows.length} inscrit(s)`;
  } catch (e) {
    out.textContent = "Erreur: " + e.message;
  }
}


// init
loadMe();