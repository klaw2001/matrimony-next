
import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connectDB();
export async function POST(request) {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body ,name, email, phone, password);

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
    console.log(savedUser);

    console.log(savedUser, res);

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

     res.status(201).json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  
  }
}
