import connectDB from "@/dbConfig/dbConfig";
import conversationModel from "@/models/conversationModel";
connectDB()

export default function handler (req, res){
    try {
      const { sender, reciever } = req.body;
      const newConvo = new conversationModel({
        members: [sender, reciever],
      });
      newConvo.save();
      return res.status(200).json({
        data: newConvo,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  };