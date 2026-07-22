const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");
require("dotenv").config();

let db = null;

async function getDb() {
  if (!db) {
    const DB_PATH = process.env.DB_PATH || "./appointments.db";

    db = await open({
      filename: DB_PATH,
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        date TEXT NOT NULL,
        description TEXT,
        doctor_id INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await db.exec(`
      CREATE TABLE IF NOT EXISTS doctors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        title TEXT,
        experience TEXT,
        education TEXT,
        specialization TEXT,
        description TEXT
      )
    `);

    console.log("✅ Database initialized");
  }

  return db;
}

module.exports = { getDb };
