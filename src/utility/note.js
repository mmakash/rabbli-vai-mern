// npm install nodemailer

// after that

const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-password' // Your Gmail password or an application-specific password
  }
});

// Email content
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Hello from Nodemailer',
  text: 'This is a test email sent using Nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error occurred:', error.message);
  }
  console.log('Message sent successfully!');
  console.log('Message details:', info);
});


