import User from "@/models/userModel.js";
import bcrypt from "bcrypt";
import { sendEmail } from "@/helpers/mailer.js";
import connectDB from "@/dbConfig/dbConfig";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });


export async function POST(req, res) {
  try {
    const { name, email, phone, password } = req.body;
    console.log(req.body ,name, email, phone, password);

    const user = await User.findOne({ email });

    // if (user) {
    //   return res.status(400).json({ error: "User already exists" });
    // }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    console.log(savedUser, res);

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

     res.status(201).json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  
  }
};
