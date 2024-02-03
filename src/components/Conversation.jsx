import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import Message from "./Message";
import { io } from "socket.io-client";
const Conversation = ({
  conversation,
  userID,
  handleClick,
  showChatbox,
  closeBox,
  messages,
  currentChat,
}) => {
  const [friend, setFriend] = useState(null);
  const [allMessages, setAllMessages] = useState(null);

  useEffect(() => {
    setAllMessages(messages);
  }, [messages]);
  const friendId = conversation.members?.find((m) => m !== userID);
  useEffect(() => {
    const getFriend = async () => {
      try {
        const res = await axios.get(`/api/auth/singleuser/${friendId}`);
        setFriend(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, [currentChat]);

  return (
    <>
      <li
        className="db-chat-trig"
        onClick={handleClick}
        key={conversation?._id}
      >
        <div className="db-chat-pro">
          {" "}
          <img src="images/profiles/1.jpg" alt="" />{" "}
        </div>
        <div className="db-chat-bio">
          <h5>{friend?.name}</h5>
          <span>Tap To Chat</span>
        </div>
        <div className="db-chat-info">
          
        </div>
      </li>

      {friend?._id === currentChat?.members[1] && (
        <ChatBox
          showChatbox={showChatbox}
          closeBox={closeBox}
          friend={friend}
          messages={allMessages}
          setAllMessages={setAllMessages}
          userID={userID}
          currentChat={currentChat}
        />
      )}
    </>
  );
};

export default Conversation;
