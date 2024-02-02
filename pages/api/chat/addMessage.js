import connectDB from "@/dbConfig/dbConfig";
import messageModel from "@/models/messageModel";
connectDB();

export default async function handler(req, res) {
  try {
    const newMessage = req.body;
    const messageData = new messageModel(newMessage);
    await messageData.save();
    if (messageData) {
      return res.status(201).json({
        data: messageData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
