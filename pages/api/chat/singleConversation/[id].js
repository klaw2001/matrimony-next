import connectDB from "@/dbConfig/dbConfig";
import conversationModel from "@/models/conversationModel";
connectDB();
export default async function handler(req, res) {
  try {
    const userID = req.query.id;
    const conversation = await conversationModel.find({
      members: { $in: [userID] },
    });
    if (conversation) {
      return res.status(200).json({
        data: conversation,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
