const { getDb } = require("../config/database");

async function getAllDoctors(req, res, next) {
  try {
    const db = await getDb();
    const doctors = await db.all("SELECT * FROM doctors ORDER BY id");
    res.json(doctors);
  } catch (error) {
    next(error);
  }
}

async function getDoctorById(req, res, next) {
  try {
    const { id } = req.params;
    const db = await getDb();
    const doctor = await db.get("SELECT * FROM doctors WHERE id = ?", id);

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    res.json(doctor);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllDoctors, getDoctorById };
