import sqlite3 from "sqlite3";

export function openDb() {
  return new sqlite3.Database("./data/mails.db");
}

export function run(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

export function get(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export function all(db, sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export async function initDb(db) {
  await run(
    db,
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at TEXT NOT NULL
    )`
  );

  await run(
    db,
    `CREATE TABLE IF NOT EXISTS mails (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'unread',   -- unread | read
      is_starred INTEGER NOT NULL DEFAULT 0,   -- 0/1
      is_archived INTEGER NOT NULL DEFAULT 0,  -- 0/1
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )`
  );

  const cols = await all(db, "PRAGMA table_info(mails)");
  const hasTelephone = cols.some((c) => c.name === "telephone");

  if (!hasTelephone) {
    await run(db, "ALTER TABLE mails ADD COLUMN telephone TEXT DEFAULT ''");
  }

  await run(
    db,
    `CREATE TABLE IF NOT EXISTS mail_replies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mail_id INTEGER NOT NULL,
      to_email TEXT NOT NULL,
      subject TEXT NOT NULL,
      body TEXT NOT NULL,
      sent_ok INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      FOREIGN KEY(mail_id) REFERENCES mails(id) ON DELETE CASCADE
    )`
  );

    await run(
    db,
    `CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      created_at TEXT NOT NULL
    )`
  );
}