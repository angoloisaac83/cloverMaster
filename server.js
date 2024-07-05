const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // For sending emails

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/api/invite', async (req, res) => {
  const { email, message } = req.body;

  // Replace with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'You have been invited!',
    text: message || 'Join us at our awesome platform!',
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Invite sent successfully!');
  } catch (error) {
    res.status(500).send('Failed to send invite.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
