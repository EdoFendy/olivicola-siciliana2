import Database from "better-sqlite3";
import path from "path";

const dbFilePath = path.join(process.cwd(), "data.sqlite");
const db = new Database(dbFilePath);

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
  CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
  CREATE INDEX IF NOT EXISTS idx_leads_name ON leads(first_name, last_name);
  CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
  CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
`);

export type Lead = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  message?: string | null;
  created_at: string;
};

export function insertLead(params: {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message?: string;
}): Lead {
  const stmt = db.prepare(
    `INSERT INTO leads (first_name, last_name, email, phone, message) VALUES (@first_name, @last_name, @email, @phone, @message)`
  );
  const info = stmt.run(params);
  const row = db.prepare(`SELECT * FROM leads WHERE id = ?`).get(info.lastInsertRowid as number) as Lead;
  return row;
}

export function listLeads(filters: {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  date_from?: string; // ISO date
  date_to?: string;   // ISO date
  limit?: number;
  offset?: number;
}): { rows: Lead[]; total: number } {
  const conditions: string[] = [];
  const params: Record<string, unknown> = {};

  if (filters.first_name) {
    conditions.push("first_name LIKE @first_name");
    params.first_name = `%${filters.first_name}%`;
  }
  if (filters.last_name) {
    conditions.push("last_name LIKE @last_name");
    params.last_name = `%${filters.last_name}%`;
  }
  if (filters.email) {
    conditions.push("email LIKE @email");
    params.email = `%${filters.email}%`;
  }
  if (filters.phone) {
    conditions.push("phone LIKE @phone");
    params.phone = `%${filters.phone}%`;
  }
  if (filters.date_from) {
    conditions.push("datetime(created_at) >= datetime(@date_from)");
    params.date_from = filters.date_from;
  }
  if (filters.date_to) {
    conditions.push("datetime(created_at) <= datetime(@date_to)");
    params.date_to = filters.date_to;
  }

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";

  const total = (db.prepare(`SELECT COUNT(*) as c FROM leads ${where}`).get(params) as { c: number }).c;

  const limit = Number.isFinite(filters.limit as number) ? (filters.limit as number) : 50;
  const offset = Number.isFinite(filters.offset as number) ? (filters.offset as number) : 0;
  const rows = db
    .prepare(`SELECT * FROM leads ${where} ORDER BY datetime(created_at) DESC LIMIT @limit OFFSET @offset`)
    .all({ ...params, limit, offset }) as Lead[];

  return { rows, total };
}

export function validateAdminCredentials(username: string, password: string): boolean {
  // Super simple: read from env if provided, else default
  const u = process.env.ADMIN_USER || "admin";
  const p = process.env.ADMIN_PASS || "password";
  return username === u && password === p;
}



