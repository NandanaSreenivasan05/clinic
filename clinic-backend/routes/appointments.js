const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Import your Mongoose model

// Create appointment route
router.post('/', async (req, res) => {
  try {
    const { patientName, email, phone, date, time, message, gender, createdAt } = req.body;
    const newAppointment = new Appointment({ patientName, email, phone, date, time, message, gender, createdAt });
    await newAppointment.save();
    // Set up Nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: 'Gmail', // or use your email provider
          auth: {
            user: 'nandanasreenivasan05@gmail.com', // Replace with your email
            pass: 'afshzfstjmrdvmke', // Replace with your email password or app-specific password
          },
        });

        const mailOptions = {
          from: 'your-email@gmail.com', // Sender address
          to: email, // Recipient address (from the form)
          subject: 'Your Appointment Confirmation with DentArena',
          html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              text-align: center;
              background-color: #4CAF50;
              color: white;
              padding: 10px 0;
              font-size: 20px;
              border-radius: 8px 8px 0 0;
            }
            .content {
              margin: 20px 0;
            }
            .content p {
              margin: 10px 0;
            }
            .details {
              background: #f1f1f1;
              padding: 10px;
              border-radius: 8px;
            }
            .details p {
              margin: 5px 0;
            }
            .footer {
              text-align: center;
              font-size: 14px;
              color: #777;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              Appointment Confirmation
            </div>
            <div class="content">
              <p>Hi <strong>${patientName}</strong>,</p>
              <p>Thank you for choosing <strong>DentArena</strong> for your dental care needs! Below are the details of your appointment:</p>
              <div class="details">
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Location:</strong></p>
                <p>1st Floor, KR Building, Plot 355<br>
                Tirumudivakkam Main Rd, Chennai<br>
                Thirumudivakkam, Tamil Nadu 600044</p>
              </div>
              <p><strong>Important Information:</strong></p>
              <ul>
                <li>Please arrive at least 10 minutes before your scheduled time.</li>
                <li>If you need to reschedule, kindly inform us 24 hours in advance.</li>
              </ul>
              <p>We’re here to make your visit as comfortable as possible. If you have any questions, feel free to contact us at <strong>your-email@gmail.com</strong>.</p>
              <p>We look forward to seeing you!</p>
            </div>
            <div class="footer">
              Warm regards,<br>
              <strong>The DentArena Team</strong>
            </div>
          </div>
        </body>
        </html>
        `,
        };
        

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment.", error });
  }
});

module.exports = router;

