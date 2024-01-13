import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";


connectDB()
export async function GET(req, res) {
    try {
      const allUsers = await User.find();
      
      return NextResponse.json({
        data: allUsers,
        message: "All users retrieved successfully",
      });
    } catch (error) {
      return NextResponse.json({
        message: error.message,
      });
    }
  }