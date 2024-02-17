import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import  jwt  from 'jsonwebtoken';

connectDB()

// POST route (Login)
export default async function POST(req,res) {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json(
        {
          error: 'User not found',
        }
      );
    }

    // compare passwords
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json(
        {
          error: 'Invalid password',
        }
      );
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );


    return res.status(200).json({
      message: 'Login successful!',
      success: true,
      token,
      user: user
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
