import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendResetPasswordEmail from '@/helpers/mailTransporter';
// import { sendEmail } from '@/helpers/mailer';

connectDB();

// POST route (Reset Password)
export default async function POST(req, res) {
  try {
    const { email } = req.body;

    // Check if the email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }

    // Generate reset token
    const resetToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Store reset token in the database (optional, you can also send the token directly)
    user.resetToken = resetToken;
    await user.save();
    
    const emailType = "RESET"

    // Send reset password email
    await sendResetPasswordEmail(email, user._id ,emailType);

    return res.status(200).json({
      message: 'Reset password email sent!',
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
