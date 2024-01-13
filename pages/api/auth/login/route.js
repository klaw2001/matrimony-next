import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import  jwt  from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

connectDB()

// POST route (Login)
export async function POST(request) {
  try {
    // grab data from body
    const reqBody = await request.json();

    // destructure the incoming variables
    const { email, password } = reqBody;

    // REMOVE IN PRODUCTION
    console.log(reqBody);

    // check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: 'User not found',
        },
        { status: 404 }
      );
    }

    // compare passwords
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          error: 'Invalid password',
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "mysecretkey",
      { expiresIn: "1h" }
    );


    return NextResponse.json({
      message: 'Login successful!',
      success: true,
      token,
      user: user
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
