import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel.js";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer.js";

connect();
console.log(connect());

export async function POST(req, res) {
  try {
    const { name, email, phone, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return res.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return res.json({ error: error.message }, { status: 500 });
  }
}
