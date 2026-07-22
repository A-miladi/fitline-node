class Appointment {
  constructor({
    id,
    full_name,
    phone,
    date,
    description,
    doctor_id,
    created_at,
  }) {
    this.id = id;
    this.fullName = full_name;
    this.phoneNumber = phone;
    this.date = date;
    this.description = description;
    this.doctorId = doctor_id;
    this.createdAt = created_at;
  }
}

module.exports = Appointment;
