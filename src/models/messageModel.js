import mongoose from "mongoose";
import User from "./userModel";

const Schema = mongoose.Schema;

const messageModel = new Schema(
  {
    conversation: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      // ref:User,
    },
    text: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    // User:{
    //   type:Schema.Types.ObjectId,
    //   ref:User
    // }
  },
  { timestamps: true }
);

export default mongoose.models.message || mongoose.model("message", messageModel);

