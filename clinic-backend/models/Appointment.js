const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true},
  date: { type: Date, required: true},
  time: { type: String, required: true},
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
