import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  });

  const chatModel =
  mongoose.models.chat || mongoose.model("chat", chatSchema);
export default chatModel;