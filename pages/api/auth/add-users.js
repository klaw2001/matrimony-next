import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

connectDB()
// POST route (Create a new user inside the DB)
export default async function POST(req,res) {
  try {
    // grab data from body

    // destructure the incoming variables
    const {
      name,
      email,
      password,
  
      interests,
      city,
      age,
      height,
      job,
      about,
      images,
      contactInfo,
      personalInfo,
      hobbies,
    } = req.body;

    // REMOVE IN PRODUCTION

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json(
        {
          error: 'This user already exists',
        },
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // create a new user
    const newUser = new User({
      name,
      email,
      password : hashedPassword,
      interests,
      city,
      age,
      height,
      job,
      about,
      images,
      contactInfo,
      personalInfo,
      hobbies,
    });

     newUser.save();

    return res.status(201).json({
      message: 'User created!',
      success: true,
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
