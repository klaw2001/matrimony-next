import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connectDB();

export default async function POST(req, res) {
  const { requesterId, requestedUserId } = req.body;

  try {
    // Check if requesterId and requestedUserId are the same
    if (requesterId === requestedUserId) {
      return res.status(400).json({ message: "Cannot send connection request to yourself" });
    }

    const existingRequest = await User.findOne({
      _id: requestedUserId,
      "connectionRequests.requester": requesterId,
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Connection request already sent to this user" });
    }

    await User.findByIdAndUpdate(requestedUserId, {
      $push: {
        connectionRequests: {
          requester: requesterId,
          status: "pending",
        },
      },
    });

    res.status(200).json({ success: true, message: "Connection request sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending connection request" });
  }
}
