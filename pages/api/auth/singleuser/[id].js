// Import necessary modules
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

// GET method handler
export default async function GET(req,res) {
  const userId = req.query.id
  try {


    const userData = await User.findOne({
      _id: userId,
    });

    if (userData) {
      return res.status(201).json({
        data: userData,
        message: "Success",
      });
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
// DELETE method handler
// export async function DELETE(req, res) {
//   const userId = req.query.id;

//   try {
//     const removeData = await User.deleteOne({
//       _id: userId,
//     });

//     if (removeData.acknowledged) {
//       return res.status(200).json({
//         data: removeData,
//         message: "User Deleted Successfully",
//       });
//     } else {
//       return res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// }

// PUT/PATCH method handler
// export async function PUT(req, res) {
//   const userId = req.query.id;
//   const { name, email, phone } = req.body;

//   try {
//     const updatedData = await User.updateOne(
//       { _id: userId },
//       {
//         $set: {
//           name,
//           email,
//           phone,
//         },
//       }
//     );

//     const validationError = updatedData.validateSync();
//     if (validationError) {
//       return res.status(400).json({ message: validationError.message });
//     }

//     if (updatedData.nModified > 0) {
//       return res.status(200).json({
//         data: updatedData,
//         message: "User Updated Successfully",
//       });
//     } else {
//       return res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// }
