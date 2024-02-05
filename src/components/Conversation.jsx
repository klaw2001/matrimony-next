import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import Message from "./Message";
import { io } from "socket.io-client";
import MySpinner from "./MySpinner";
const Conversation = ({
  conversation,
  userID,
  handleClick,
  showChatbox,
  closeBox,
  messages,
  currentChat,
}) => {
  const [friend, setFriend] = useState({});
  const [allMessages, setAllMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAllMessages(messages);
  }, [messages]);
  const _id = conversation.members?.find((m) => m !== userID);

  useEffect(() => {
    async function getFriend() {
      try {
        const response = await fetch(`/api/auth/singleuser/${_id}`, {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
            "If-Modified-Since": "0",
          },
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        setFriend(data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching friend data:", err);
      }
    }
    getFriend();
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-start w-100 h-100">
          <MySpinner/>
        </div>
      ) : (
          <li className="db-chat-trig" onClick={handleClick} key={conversation._id}>
            <div className="db-chat-pro">
              {" "}
              <img src={friend.images} alt="" />{" "}
            </div>
            <div className="db-chat-bio">
              <h5>{friend?.name}</h5>
              <span>Tap To Chat</span>
            </div>
            <div className="db-chat-info"></div>
          </li>
      )}

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
