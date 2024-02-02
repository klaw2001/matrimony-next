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
  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState(null);
  
  useEffect(() => {
    setAllMessages(messages);
  },[messages]);
  useEffect(() => {
    const friendId = conversation.members?.find((m) => m !== userID);

    const getFriend = async () => {
      try {
        const res = await axios.get(`/api/auth/singleuser/${friendId}`);
        setFriend(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, [conversation, userID]);

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

  return (
    <>
      <li className="db-chat-trig" onClick={()=>handleClick(friend)} key={friend?._id}>
        <div className="db-chat-pro">
          {" "}
          <img src="images/profiles/1.jpg" alt="" />{" "}
        </div>
        <div className="db-chat-bio">
          <h5>{friend?.name}</h5>
          <span>Tap To Chat</span>
        </div>
        <div className="db-chat-info">
          <div className="time new">
            <span className="timer">9:00 PM</span>
            <span className="cont">3</span>
          </div>
        </div>
      </li>

      <div class="chatbox" style={{ right: showChatbox ? "0" : "-500px" }}>
        <span class="comm-msg-pop-clo">
          <i class="fa fa-times" aria-hidden="true" onClick={closeBox}></i>
        </span>

        <div class="inn">
          <form name="new_chat_form" method="post">
            <div class="s1">
              <img src="images/user/2.jpg" class="intephoto2" alt="" />
              <h4>
                
                <b class="intename2">{friend?.name || "No Name"}</b>,
              </h4>
              <span class="avlsta avilyes text-white">Available online</span>
            </div>
            <div class="s2 chat-box-messages">
              {/* <span class="chat-wel">Start a new chat!!! now</span> */}
              <div class="chat-con">
                {/* <div class="chat-lhs">Hi</div>
            <div class="chat-rhs">Hi</div> */}
                {allMessages?.map((m) => (
                  <Message message={m} own={m.sender === userID} />
                ))}
              </div>
              {/* <span>Start A New Chat!!! Now</span> */}
            </div>
            <div class="s3">
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
                Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Conversation;
