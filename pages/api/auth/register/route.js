import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connectDB()
// POST route (Create a new user inside the DB)
export async function POST(request) {
  try {
    // grab data from body
    const reqBody = await request.json();

    // destructure the incoming variables
    const { name, email, password , phone } = reqBody;

    // REMOVE IN PRODUCTION

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: 'This user already exists',
        },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create a new user
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // save it inside the DB
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: 'User created!',
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
