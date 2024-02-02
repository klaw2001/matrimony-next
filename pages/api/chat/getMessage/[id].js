import connectDB from "@/dbConfig/dbConfig";
import messageModel from "@/models/messageModel";
connectDB();

export default async function handler (req, res) {
    try {
      const conversation = req.query.id;
      const messages = await messageModel.find({ conversation })
    //   .populate('User');
      if (conversation) {
        return res.status(200).json({ data: messages });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };