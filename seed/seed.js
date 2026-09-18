const mongoose = require("mongoose");
const Doctor = require("../src/models/Doctor");
require("dotenv").config();

async function seed() {
  const MONGODB_URI = process.env.MONGODB_URI;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB for seeding");

    const doctors = [
      {
          name: "دکتر مهسا عسگری",
          title: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
          experience: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
          education: "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه اصفهان",
          specialization: "بازتوانی دردهای اسکلتی-عضلانی، اصلاح ناهنجاری‌های قامتی",
          description:
            "نائب رئیس کمیته حرکات اصلاحی و تندرستی استان مرکزی و جزو استعدادهای درخشان دانشگاه. متخصص در بازتوانی دردهای اسکلتی عضلانی مانند کمردرد، دیسک گردن، آرتروز زانو، روماتیسم مفصلی، بهبود دردهای سیاتیک و گرفتگی‌های عضلانی، و حرکات اصلاحی برای اصلاح گودی کمر، گودپشتی، زانوی پرانتزی و ضربدری، و کف پای صاف.",
        },
        {
          name: "دکتر حسین حیدری نیک",
          title: "متخصص حرکات اصلاحی و آسیب شناسی ورزشی",
          experience: "عضو انجمن آسیب شناسی ورزشی و حرکات اصلاحی ایران",
          education: "دکتری تخصصی آسیب شناسی ورزشی و حرکات اصلاحی - دانشگاه تهران",
          specialization: "پیشگیری و توانبخشی آسیب‌های اسکلتی-عضلانی",
          description:
            "رئیس کمیته حرکات اصلاحی و تندرستی استان مرکزی، مولف، پژوهشگر و مدرس دانشگاه. متخصص در مشاوره، ارزیابی و تجویز برنامه تمرینی، پیشگیری و اصلاح ناهنجاری‌های بدنی، پیشگیری و توانبخشی دردهای اسکلتی عضلانی (کمردرد، آرتروز، دردهای شانه و ...)، و بازگشت به ورزش.",
        },
    ];

    for (const doctor of doctors) {
      await Doctor.findOneAndUpdate(
        { name: doctor.name },
        doctor,
        { upsert: true, new: true }
      );
    }

    console.log("Seed data inserted successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();