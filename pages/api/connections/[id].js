import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import mongoose from "mongoose";

connectDB();

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const userId = req.query.id;
    // Assuming you are passing userId as a query parameter

    if (!mongoose.isValidObjectId(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Find the user by their ID and populate the connectionRequests field
    const user = await User.findById(userId).populate(
      "connectionRequests.requester"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const connectionRequests = user.connectionRequests;

    res.status(200).json({ connectionRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
