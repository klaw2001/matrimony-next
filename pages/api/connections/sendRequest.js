
import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connectDB()

export default async function POST(req,res){
    const { requesterId, requestedUserId } = req.body;

  try {
    // Add the connection request to the requested user's profile
    await User.findByIdAndUpdate(requestedUserId, {
      $push: {
        connectionRequests: {
          requester: requesterId,
          status: 'pending',
        },
      },
    });

    res.status(200).json({ success: true, message: 'Connection request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending connection request' });
  }
}