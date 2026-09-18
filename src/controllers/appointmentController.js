const Appointment = require("../models/Appointment");

async function createAppointment(req, res, next) {
  try {
    const { full_name, phone, date, description, doctor_id } = req.body;

    const appointment = new Appointment({
      fullName: full_name,
      phoneNumber: phone,
      date,
      description,
      doctorId: doctor_id,
    });

    await appointment.save();

    res
      .status(201)
      .json({ id: appointment._id, message: "Appointment created successfully" });
  } catch (error) {
    next(error);
  }
}

async function getAllAppointments(req, res, next) {
  try {
    const appointments = await Appointment.find()
      .sort({ createdAt: -1 })
      .populate("doctorId", "name title");
    res.json(appointments);
  } catch (error) {
    next(error);
  }
}

async function updateAppointment(req, res, next) {
  try {
    const { id } = req.params;
    const { full_name, phone, date, description, doctor_id } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      {
        fullName: full_name,
        phoneNumber: phone,
        date,
        description,
        doctorId: doctor_id,
      },
      { new: true, runValidators: true }
    );

    if (!appointment) {
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

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
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