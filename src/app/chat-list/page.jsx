"use client";
import ChatBox from "@/components/ChatBox";
import Conversation from "@/components/Conversation";
import RecentConnections from "@/components/RecentConnections";
import Layout from "@/components/layouts/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { io } from "../../../pages/api/socket";
import { Socket, io } from "socket.io-client";

const ChatListPage = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [user, setUser] = useState([]);

  const userID = localStorage.getItem("loggedinUser");

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/api/chat/singleConversation/" + userID);
        setConversations(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, []);

  useEffect(() => {
    axios
      .get(`/api/connections/${userID}`)
      .then((res) => {
        setUser(res.data.connectionRequests);
      })
      .catch((err) => console.log(err));
  }, [userID]);

  const handleClick = (elem) => {
    if (currentChat?._id !== elem?._id) {
      setShowChatbox(true);
      setCurrentChat(elem);
    }
  };

  const closeBox = () => {
    setShowChatbox(false);
  };
  // console.log(currentChat)

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`/api/chat/getMessage/${currentChat?._id}`);
        setMessages(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <Layout>
      {/* <!-- LOGIN --> */}
      <section>
        <div className="db">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-md-12 db-sec-com">
                    <div className="row align-items-center">
                      <div className="col-6 text-start">
                        <h2 className="db-tit">Chat list</h2>
                      </div>
                     
                    </div>
                    <div className="db-pro-stat mt-2">
                      <div className="db-chat">
                        <ul>
                          {conversations.map((elem) => (
                            <Conversation
                              key={elem._id}
                              conversation={elem}
                              userID={userID}
                              handleClick={() => handleClick(elem)}
                              showChatbox={showChatbox}
                              closeBox={closeBox}
                              messages={messages}
                              currentChat={currentChat}
                            />
                          ))}
                        </ul>
                      </div>
                      <RecentConnections sender={userID} users={user} conversations={conversations} setConversations={conversations}/>
                      {/* <div className="db-chat">
                        <ul>
                          {user.map((elem) => (
                            <Conversation
                              key={elem._id}
                              conversation={elem}
                              userID={userID}
                              handleClick={() => handleClick(elem)}
                              showChatbox={showChatbox}
                              closeBox={closeBox}
                              messages={messages}
                              currentChat={currentChat}
                            />
                          ))}
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <ChatBox showChatbox={showChatbox} closeBox={closeBox} mes/> */}

      {/* <!-- END --> */}
    </Layout>
  );
};

export default ChatListPage;
