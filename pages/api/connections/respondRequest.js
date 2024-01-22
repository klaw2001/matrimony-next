import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connectDB();

export default async function POST(req, res) {
  const { requesterId, requestedUserId, response } = req.body;

  try {
    // Check if requesterId and requestedUserId are the same
    if (requesterId === requestedUserId) {
      return res.status(400).json({ message: "Cannot send connection request to yourself" });
    }

    // Check if a connection request already exists
    const existingRequest = await User.findOne({
      _id: requestedUserId,
      "connectionRequests.requester": requesterId,
    });

    if (!existingRequest) {
      return res.status(400).json({ message: "Connection request not found" });
    }

    // Check if the request has already been responded to
    const alreadyResponded = existingRequest.connectionRequests.find(
      (request) => request.requester.toString() === requesterId && request.status !== "pending"
    );

    if (alreadyResponded) {
      return res.status(400).json({ message: "Connection request already responded to" });
    }

    // Update the status of the connection request based on the response
    await User.findOneAndUpdate(
      {
        _id: requestedUserId,
        "connectionRequests.requester": requesterId,
      },
      {
        $set: {
          "connectionRequests.$.status": response,
        },
      }
    );

    res.status(200).json({ success: true, message: "Connection request responded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error responding to connection request" });
  }
}
