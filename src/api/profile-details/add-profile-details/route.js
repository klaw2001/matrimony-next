import ProfileDetails from "@/models/profileDetailsModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export default async function POST(req, res) {
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

  try {
    const newprofieDetails = await new ProfileDetails({
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
    }).save();

    if (newprofieDetails) {
      return res.status(201).json({
        data: blogData,
        message: "Profile Details Added Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
    console.log(err);
  }
}
