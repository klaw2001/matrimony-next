// Import necessary modules
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connectDB();

// Combined handler for GET, PUT, and DELETE requests
export default async function handler(req, res) {
  const userId = req.query.id;

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

      const updateFields = {
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
        hobbies,
      };

      // if (password) {
      //   // Hash the password before updating
      //   // Ensure to use a secure hashing algorithm
      //   updateFields.password = hashPasswordFunction(password);
      // }

      if (contactInfo && contactInfo.length > 0) {
        // If contactInfo is provided, update the array or add new entries
        updateFields.contactInfo = contactInfo.map((contact) => ({
          phone: contact.phone || null,
          email: contact.email || null,
          address: contact.address || null,
        }));
      }

      if (personalInfo && personalInfo.length > 0) {
        // If personalInfo is provided, update the array or add new entries
        updateFields.personalInfo = personalInfo.map((info) => ({
          infoName: info.infoName || null,
          fathersName: info.fathersName || null,
          familyName: info.familyName || null,
          infoAge: info.infoAge || null,
          dob: info.dob || null,
          infoHeight: info.infoHeight || null,
          weight: info.weight || null,
          degree: info.degree || null,
          religion: info.religion || null,
          profession: info.profession || null,
          company: info.company || null,
          position: info.position || null,
          salary: info.salary || null,
        }));
      }

      const updatedData = await User.updateOne(
        { _id: userId },
        { $set: updateFields }
      );

      if (updatedData.nModified > 0) {
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
