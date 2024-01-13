import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export default async function POST(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User does not exist" }, { status: 400 });
    }
    console.log("user already exists");

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return res.json({ error: "Invalid password" }, { status: 400 });
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = res.status(200).json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    return res.json({ error: error.message }, { status: 500 });
  }
}
