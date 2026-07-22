const { getDb } = require("../src/config/database");

async function seed() {
  const db = await getDb();

  const doctors = [
    {
      name: "Dr. Sara Ahmadi",
      title: "Cardiologist",
      experience: "10 years of experience",
      education: "MD, Tehran University",
      specialization: "Heart disease treatment",
      description: "Specialist in preventive cardiology",
    },
    {
      name: "Dr. Mohsen Rahimi",
      title: "Dermatologist",
      experience: "8 years of experience",
      education: "MD, Shiraz University",
      specialization: "Skin and hair treatment",
      description: "Specialist in dermatology and cosmetic care",
    },
  ];

  for (const doctor of doctors) {
    await db.run(
      "INSERT OR IGNORE INTO doctors (name, title, experience, education, specialization, description) VALUES (?, ?, ?, ?, ?, ?)",
      [
        doctor.name,
        doctor.title,
        doctor.experience,
        doctor.education,
        doctor.specialization,
        doctor.description,
      ],
    );
  }

  console.log("Seed data inserted successfully");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
