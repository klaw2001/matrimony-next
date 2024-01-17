import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connectDB()
export default async function POST(req,res){

    const { userId, requesterId, status } = req.body;
    
    try {
        // Update the status of the connection request in the user's profile
        await User.updateOne(
            {
                _id: userId,
                'connectionRequests.requester': requesterId,
            },
            {
                $set: {
                    'connectionRequests.$.status': status,
                },
            }
            );
            
            res.status(200).json({ success: true, message: 'Connection request responded successfully' });
        } catch (error) {
            console.error(error);
    res.status(500).json({ success: false, message: 'Error responding to connection request' });
  }
        }