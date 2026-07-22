class Doctor {
  constructor({
    id,
    name,
    title,
    experience,
    education,
    specialization,
    description,
  }) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.experience = experience;
    this.education = education;
    this.specialization = specialization;
    this.description = description;
  }
}

module.exports = Doctor;
