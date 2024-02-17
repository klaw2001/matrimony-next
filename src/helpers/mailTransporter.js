import nodemailer from 'nodemailer';

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bdb2f33329eed3",
      pass: "d7bbc2cf9e9c38"
    }
});

// Function to send the reset password email
export default async function sendResetPasswordEmail(email, resetToken) {
  try {
    // Compose email
    const mailOptions = {
      from: 'info@quickmatch', // Sender email address
      to: email,
      subject: 'Reset Your Password',
      text: `Click the following link to reset your password: http://localhost:3000/reset-password/${resetToken}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    // console.log('Email sent: ', info.messageId);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}
