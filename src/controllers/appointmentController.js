const { getDb } = require("../config/database");

async function createAppointment(req, res, next) {
  try {
    const { full_name, phone, date, description, doctor_id } = req.body;
    const db = await getDb();

    const result = await db.run(
      "INSERT INTO appointments (full_name, phone, date, description, doctor_id) VALUES (?, ?, ?, ?, ?)",
      [full_name, phone, date, description, doctor_id],
    );

    res
      .status(201)
      .json({ id: result.lastID, message: "Appointment created successfully" });
  } catch (error) {
    next(error);
  }
}

async function getAllAppointments(req, res, next) {
  try {
    const db = await getDb();
    const appointments = await db.all(
      "SELECT * FROM appointments ORDER BY id DESC",
    );
    res.json(appointments);
  } catch (error) {
    next(error);
  }
}

async function updateAppointment(req, res, next) {
  try {
    const { id } = req.params;
    const { full_name, phone, date, description, doctor_id } = req.body;
    const db = await getDb();

    const result = await db.run(
      "UPDATE appointments SET full_name = ?, phone = ?, date = ?, description = ?, doctor_id = ? WHERE id = ?",
      [full_name, phone, date, description, doctor_id, id],
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json({ message: "Appointment updated successfully" });
  } catch (error) {
    next(error);
  }
}

async function deleteAppointment(req, res, next) {
  try {
    const { id } = req.params;
    const db = await getDb();

    const result = await db.run("DELETE FROM appointments WHERE id = ?", [id]);

    if (result.changes === 0) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createAppointment,
  getAllAppointments,
  updateAppointment,
  deleteAppointment,
};
