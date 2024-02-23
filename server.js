const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    console.log('Received request:', req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'amrambouskila@gmail.com',
            pass: 'ewbgvbksfqcpdoci',
        },
    });

    const mailOptions = {
        from: 'amrambouskila@gmail.com',
        to: 'amrambouskila@gmail.com',
        subject: subject,
        text: `
          Name: ${name}\n
          Email: ${email}\n
          Phone: ${phone}\n\n
          Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
