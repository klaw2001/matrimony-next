import React, { use, useEffect, useState } from "react";
import Message from "./Message";
import axios from "axios";
import io from "socket.io-client";
import MySpinner from "./MySpinner";

const ChatBox = ({
  showChatbox,
  closeBox,
  friendID,
  messages,
  userID,
  currentChat,
  setAllMessages,
}) => {
  const [newMessage, setNewMessage] = useState("");
  const [friend, setFriend] = useState({});
  const [socket, setSocket] = useState(null); // State to hold the socket instance
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    if(messages){
      setLoading(false)
    }
  },[messages])

  useEffect(() => {
    async function socketInitializer() {
      await fetch("/api/socket");

      const newSocket = io(); // Create a new socket instance
      newSocket.on("receive-message", (data) => {
        setAllMessages((pre) => [...pre, data]);
      });
      setSocket(newSocket); // Set the socket instance in the state
    }

    if (!socket) {
      socketInitializer();
    }

    return () => {
      if (socket) {
        socket.disconnect(); // Disconnect the socket if it exists
      }
    };
  }, [socket]); // Dependency array to run the effect only when `socket` changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userID,
      text: newMessage,
      conversation: currentChat._id,
    };

    try {
      const res = await axios.post("/api/chat/addMessage", message);
      if (res.status === 201 && socket) {
        socket.emit("send-message", message); // Emit message through socket if it exists
        setNewMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getFriend() {
      try {
        const response = await fetch(`/api/auth/singleuser/${friendID}`, {
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
      } catch (err) {
        console.error("Error fetching friend data:", err);
      }
    }
    getFriend();
  }, []);

  return (
    <div className="chatbox" style={{ right: showChatbox ? "0" : "-500px" }}>
      <span className="comm-msg-pop-clo">
        <i className="fa fa-times" aria-hidden="true" onClick={closeBox}></i>
      </span>

      <div className="inn">
        <form name="new_chat_form" method="post" onSubmit={handleSubmit}>
          <div className="s1">
            <img src={friend?.images} className="intephoto2" alt="" />
            <h4>
              <b className="intename2">{friend?.name}</b>,
            </h4>
            <span className="avlsta avilyes text-white">Available online</span>
          </div>
          <div className="s2 chat-box-messages">
            {loading ? (
              <div className="d-flex justify-content-center align-items-start w-100 h-100">
                <MySpinner />
              </div>
            ) : (
              <div className="chat-con">
                {messages?.map((m) => (
                  <Message message={m} own={m.sender === userID} key={m._id} />
                ))}
              </div>
            )}
          </div>
          <div className="s3">
            <input
              type="text"
              name="chat_message"
              placeholder="Type a message here.."
              required=""
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />
            <button id="chat_send1" name="chat_send" type="submit">
              Send <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
