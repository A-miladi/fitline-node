const { getDb } = require("./database");

const specialists = [
  {
    id: 1,
    name: "دکتر مهسا عسگری",
    title: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
    experience: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
    education: "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه اصفهان",
    specialization: "بازتوانی دردهای اسکلتی-عضلانی، اصلاح ناهنجاری‌های قامتی",
    description:
      "نائب رئیس کمیته حرکات اصلاحی و تندرستی استان مرکزی و جزو استعدادهای درخشان دانشگاه. متخصص در بازتوانی دردهای اسکلتی عضلانی مانند کمردرد، دیسک گردن، آرتروز زانو، روماتیسم مفصلی، بهبود دردهای سیاتیک و گرفتگی‌های عضلانی، و حرکات اصلاحی برای اصلاح گودی کمر، گودپشتی، زانوی پرانتزی و ضربدری، و کف پای صاف.",
  },
  {
    id: 2,
    name: "دکتر حسین حیدری نیک",
    title: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
    experience: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
    education: "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه تهران",
    specialization: "پیشگیری و توانبخشی آسیب‌های اسکلتی-عضلانی",
    description:
      "رئیس کمیته حرکات اصلاحی و تندرستی استان مرکزی، مولف، پژوهشگر و مدرس دانشگاه. متخصص در مشاوره، ارزیابی و تجویز برنامه تمرینی، پیشگیری و اصلاح ناهنجاری‌های بدنی، پیشگیری و توانبخشی دردهای اسکلتی عضلانی (کمردرد، آرتروز، دردهای شانه و ...)، و بازگشت به ورزش.",
  },
];

async function seedDoctors() {
  try {
    const db = await getDb();

    console.log("🔄 در حال بازسازی جدول دکترها...");

    // حذف جدول اگر وجود داشته باشد
    await db.run("DROP TABLE IF EXISTS doctors");
    console.log("✅ جدول doctors حذف شد");

    // ایجاد جدول جدید با ستون‌های مورد نظر (بدون image)
    await db.exec(`
            CREATE TABLE doctors (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                title TEXT,
                experience TEXT,
                education TEXT,
                specialization TEXT,
                description TEXT
            )
        `);
    console.log("✅ جدول doctors با ساختار جدید ساخته شد");

    // اضافه کردن دکترها
    for (const doc of specialists) {
      await db.run(
        `
                INSERT INTO doctors (
                    id, name, title, experience, education, 
                    specialization, description
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
            `,
        [
          doc.id,
          doc.name,
          doc.title,
          doc.experience,
          doc.education,
          doc.specialization,
          doc.description,
        ],
      );
    }
    console.log(`✅ ${specialists.length} دکتر با موفقیت اضافه شدند`);

    // نمایش لیست دکترها برای تایید
    const doctors = await db.all("SELECT * FROM doctors");
    console.log("📋 لیست دکترها:");
    console.table(doctors);

    // نمایش ستون‌های جدول برای تایید
    const columns = await db.all("PRAGMA table_info(doctors)");
    console.log("📋 ستون‌های جدول doctors:");
    console.table(columns.map((c) => ({ name: c.name, type: c.type })));
  } catch (error) {
    console.error("❌ خطا:", error);
  }

  process.exit(0);
}

seedDoctors();
