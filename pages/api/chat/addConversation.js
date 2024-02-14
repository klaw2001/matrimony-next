import connectDB from "@/dbConfig/dbConfig";
import conversationModel from "@/models/conversationModel";
connectDB()

export default async function handler(req, res) {
    try {
        const { sender, receiver } = req.body;

        if (!sender || !receiver) {
            return res.status(400).json({
                message: "Sender and receiver are required.",
            });
        }

        const existingConversation = await conversationModel.findOne({
            members: { $all: [sender, receiver] },
        });

        if (existingConversation) {
            return res.status(400).json({
                message: "Conversation already exists.",
            });
        }

        const newConvo = new conversationModel({
            members: [sender, receiver],
        });
        await newConvo.save();

        return res.status(200).json({
            data: newConvo,
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
