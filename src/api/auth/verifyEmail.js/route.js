import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/userModel.js";

connect();

export async function POST(req, res) {
  try {
    const { token } = req.body;
    console.log(token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.json({ error: "Invalid token" }, { status: 400 });
    }
    console.log(user);

    user.isVerfied = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return res.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error) {
    return res.json({ error: error.message }, { status: 500 });
  }
}
