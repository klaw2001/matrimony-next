import ProfileDetails from "@/models/profileDetailsModel.js";
import { connect } from "@/dbConfig/dbConfig.js";

connect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const profileDetailsId = req.query.profileId;
      const profileDetailsData = await ProfileDetails.findOne({
        _id: profileDetailsId,
      });

      if (profileDetailsData) {
        return res.status(200).json({
          data: profileDetailsData,
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
      const profileDetailsId = req.query.profileId;

      const removeData = await ProfileDetails.deleteOne({
        _id: profileDetailsId,
      });
      if (removeData.acknowledged) {
        return res.status(200).json({
          data: removeData,
          message: "Profile Details Deleted Successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: error.msg,
      });
    }
  } else if (req.method === "PUT" || req.method === "PATCH") {
    try {
      const profileDetailsId = req.query.profileId;

      const {
        name,
        city,
        age,
        height,
        job,
        about,
        images,
        phone,
        email,
        address,
        infoName,
        fathersName,
        familyName,
        infoAge,
        infoHeight,
        weight,
        degree,
        religion,
        profession,
        company,
        position,
        salary,
        hobbies,
      } = req.body;

      const updatedData = await ProfileDetails.updateOne(
        { _id: profileDetailsId },
        {
          $set: {
            name,
            city,
            age,
            height,
            job,
            about,
            images,
            phone,
            email,
            address,
            infoName,
            fathersName,
            familyName,
            infoAge,
            infoHeight,
            weight,
            degree,
            religion,
            profession,
            company,
            position,
            salary,
            hobbies,
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
          message: "Profile Details Updated Successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
