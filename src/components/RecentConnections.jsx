import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import Message from "./Message";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
const RecentConnections = ({
  sender,
  users,
  conversations,
  setConversations,
}) => {
  const [friend, setFriend] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState(null);

  const handleClick = async (reciever , e) => {
    e.preventDefault()
    console.log(sender, reciever)
    try {
      
      const res = await axios.post("/api/chat/addConversation", {sender, reciever});
      toast.success("Conversation Added");
      setConversations([...conversations, res.data.data]);
    } catch (error) {
      toast.error(error || "Something Went Wrong");
    }
  };
  const acceptedUsers = users?.filter((user) => user.status === "accepted");
  console.log(acceptedUsers)

  return (
    <>
      {/* <div class="db-pro-stat"> */}
      <br />
      <hr />
      <br />
      <h2 className="db-tit">Recent Connections</h2>

      <div class="db-chat">
        <ul>
          {acceptedUsers?.map((elem) => (
            <li
              className="db-chat-trig"
              // onClick={handleClick}
              key={elem?._id}
            >
              <div className="db-chat-pro">
                {" "}
                <img src={elem.requester?.images} alt="" />{" "}
              </div>
              <div className="db-chat-bio">
                <h5>{elem?.requester?.name}</h5>
                <span>Tap To Chat</span>
              </div>
              <div className="" style={{ float: "right" }}>
                <button
                  className="cta-dark"
                  onClick={(e) => handleClick(elem?.requester?._id, e)}
                >
                  Add Conversation
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </>
  );
};

export default RecentConnections;
