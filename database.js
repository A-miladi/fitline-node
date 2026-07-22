// server.js
const express = require("express");
const cors = require("cors");
const { getDb } = require("./database");
require("dotenv").config();

// اضافه کردن Swagger
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware ها
app.use(cors());
app.use(express.json());

// ============================================
// تنظیمات Swagger
// ============================================

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API نوبت دهی",
      version: "1.0.0",
      description: "API مدیریت نوبت‌های دکتر",
      contact: {
        name: "پشتیبانی",
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "سرور توسعه",
      },
    ],
    components: {
      schemas: {
        Appointment: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            fullName: { type: "string", example: "علی محمدی" },
            phoneNumber: { type: "string", example: "09123456789" },
            date: { type: "string", example: "1403/05/20" },
            description: { type: "string", example: "درد کمر" },
            doctor_id: { type: "integer", example: 1 },
          },
        },
        Doctor: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            name: { type: "string", example: "دکتر مهسا عسگری" },
            title: {
              type: "string",
              example: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
            },
            experience: {
              type: "string",
              example: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
            },
            education: {
              type: "string",
              example:
                "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه اصفهان",
            },
            specialization: {
              type: "string",
              example:
                "بازتوانی دردهای اسکلتی-عضلانی، اصلاح ناهنجاری‌های قامتی",
            },
            description: { type: "string", example: "توضیحات کامل دکتر..." },
          },
        },
      },
    },
  },
  apis: ["./server.js"], // مسیر فایل‌های حاوی مستندات
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

async function getDb() {
  if (!db) {
    const DB_PATH =
      process.env.DB_PATH || process.env.DB_PATH || "./appointments.db";

    db = await open({
      filename: DB_PATH,
      driver: sqlite3.Database,
    });

    // ایجاد جدول نوبت‌ها
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

    // ایجاد جدول دکترها با فیلدهای جدید
    await db.exec(`
            CREATE TABLE IF NOT EXISTS doctors (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                title TEXT,
                experience TEXT,
                education TEXT,
                specialization TEXT,
                description TEXT
            )
        `);

    console.log("✅ دیتابیس آماده شد");
  }
  return db;
}

module.exports = { getDb };
