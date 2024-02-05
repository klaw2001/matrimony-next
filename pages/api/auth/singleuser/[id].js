// Import necessary modules
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs"
connectDB();

// Combined handler for GET, PUT, and DELETE requests
export default async function handler(req, res) {
  const userId = req.query.id;
  
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ message: "Invalid user ID format" });
  }


  if (req.method === "GET") {
    try {
      const userData = await User.findOne({
        _id: userId,
      });

      if (userData) {
        return res.status(200).json({
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
  } else if (req.method === "PUT") {
    try {
      const userId = req.query.id;


      const {
        name,
        email,
        password,
        phone,
        images,
        gender,
        city,
        dob,
        age,
        height,
        weight,
        fathersName,
        familyName,
        religion,
        jobType,
        company,
        salary,
        position,
        degree,
        school,
        college,
        whatsapp,
        facebook,
        instagram,
        twitter,
        youtube,
        linkedin,
        about,
        hobbies,
      } = req.body;
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      const updatedData = await User.updateOne(
        { _id: userId },
        {
          $set: {
            name,
            email,
            password : hashedPassword,
            phone,
            images,
            gender,
            city,
            dob,
            age,
            height,
            weight,
            fathersName,
            familyName,
            religion,
            jobType,
            company,
            salary,
            position,
            degree,
            school,
            college,
            whatsapp,
            facebook,
            instagram,
            twitter,
            youtube,
            linkedin,
            about,
            hobbies,
          },
        }
      );

      if (updatedData.acknowledged) {
        return res.status(200).json({
          data: updatedData,
          message: "User Updated Successfully",
        });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const removeData = await User.deleteOne({
        _id: userId,
      });

      if (removeData.acknowledged) {
        return res.status(200).json({
          data: removeData,
          message: "User Deleted Successfully",
        });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
