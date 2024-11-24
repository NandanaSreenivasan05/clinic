const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Import your Mongoose model

// Create appointment route
router.post('/', async (req, res) => {
  try {
    const { patientName, email, phone, date, time, message, createdAt } = req.body;
    const newAppointment = new Appointment({ patientName, email, phone, date, time, message, createdAt });
    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment.", error });
  }
});

module.exports = router;

