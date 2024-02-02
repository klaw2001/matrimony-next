import mongoose from "mongoose";

const Schema = mongoose.Schema;

const conversataionModel = new Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    // },
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.models.conversation || mongoose.model("conversation", conversataionModel);
