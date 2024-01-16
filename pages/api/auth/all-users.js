import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";


connectDB()
export default async function handler(req, res) {
    try {
      const allUsers = await User.find();
      
      return res.status(200).json({
        data: allUsers,
        message: "All users retrieved successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }