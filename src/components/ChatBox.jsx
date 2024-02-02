import React, { useState } from "react";
import Message from "./Message";
import axios from "axios";

const ChatBox = ({ showChatbox, closeBox, friend, messages, userID , currentChat , currentFriend}) => {
  const [newMessage, setNewMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: userID,
      text: newMessage,
      conversation: currentChat._id,
    };

    try {
      const res = await axios.post("/api/chat/addMessage", message);
      setAllMessages([...messages, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };
//   const chatfriendId = friend?._id === currentChat?._id
//   console.log(chatfriendId)


  return (
    <div className="chatbox" style={{ right: showChatbox ? "0" : "-500px" }}>
      <span className="comm-msg-pop-clo">
        <i className="fa fa-times" aria-hidden="true" onClick={closeBox}></i>
      </span>

      <div className="inn">
        <form name="new_chat_form" method="post">
          <div className="s1">
            <img src="images/user/2.jpg" className="intephoto2" alt="" />
            <h4>
              <b className="intename2">
              {friend?._id === currentChat?.members[1] ? friend?.name : "Friend's Name"}
                </b>,
            </h4>
            <span className="avlsta avilyes text-white">Available online</span>
          </div>
          <div className="s2 chat-box-messages">
            {/* <span className="chat-wel">Start a new chat!!! now</span> */}
            <div className="chat-con">
              {/* <div className="chat-lhs">Hi</div>
        <div className="chat-rhs">Hi</div> */}
              {messages?.map((m) => (
                <Message message={m} own={m.sender === userID} key={m._id} />
              ))}
            </div>
            {/* <span>Start A New Chat!!! Now</span> */}
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
            <button
              id="chat_send1"
              name="chat_send"
              type="submit"
              onClick={handleSubmit}
            >
              Send <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
