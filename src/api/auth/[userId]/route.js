import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig.js";

connect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const userId = req.query.userId;
      const userData = await User.findOne({
        _id: userId,
      });

      if (userData) {
        return res.status(200).json({
          data: userData,
          message: "Success",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const userId = req.query.userId;

      const removeData = await User.deleteOne({
        _id: userId,
      });
      if (removeData.acknowledged) {
        return res.status(200).json({
          data: removeData,
          message: "User Deleted Successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: error.msg,
      });
    }
  } else if (req.method === "PUT" || req.method === "PATCH") {
    try {
      const userId = req.query.userId;

      const { name, email, phone } = req.body;

      const updatedData = await User.updateOne(
        { _id: userId },
        {
          $set: {
            name,
            email,
            phone,
          },
        }
      );

      const validationError = updatedData.validateSync();
      if (validationError) {
        return res.status(400).json({ message: validationError.message });
      }

      if (updatedData) {
        return res.status(200).json({
          data: updatedData,
          message: "User Updated Successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
