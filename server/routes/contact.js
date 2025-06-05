const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Verify environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Email configuration missing:', {
    user: process.env.EMAIL_USER ? 'Set' : 'Missing',
    pass: process.env.EMAIL_PASS ? 'Set' : 'Missing'
  });
}

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Contact form submission route
router.post('/send', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Log the request data
    console.log('Received contact form submission:', { name, email, phone, subject });
    console.log('Email configuration:', {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? 'Password is set' : 'Password is missing'
    });

    // Email content
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'nitinkapoor146@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Detailed error sending email:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command
    });
    res.status(500).json({ 
      message: 'Failed to send message',
      error: error.message 
    });
  }
});

module.exports = router; 