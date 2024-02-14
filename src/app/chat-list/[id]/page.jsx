"use client";
import ChatBox from "@/components/ChatBox";
import Conversation from "@/components/Conversation";
import MySpinner from "@/components/MySpinner";
import Layout from "@/components/layouts/Layout";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ChatListPage = () => {
  const [showChatbox, setShowChatbox] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [userID, SetUserID] = useState(null);

  const config = {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      "If-Modified-Since": "0",
    },
  };

  const { id } = useParams();
  const userID = id;

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "/api/chat/singleConversation/" + userID,
          config
        );
        setConversations(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [userID]);

  useEffect(() => {
    axios
      .get(`/api/connections/${userID}`)
      .then((res) => {
        setUser(res.data.connectionRequests);
      })
      .catch((err) => console.log(err));
  }, [userID]);

  const handleClick = (elem) => {
    // if (currentChat?._id !== elem?._id) {
      setShowChatbox(true);
      setCurrentChat(elem);
    // }
  };

  const closeBox = () => {
    setShowChatbox(false);
  };
  // console.log(currentChat)

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `/api/chat/getMessage/${currentChat._id}`,
          config
        );
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
                    {loading ? (
                      <div className="d-flex justify-content-center align-items-start w-100 h-100">
                        <MySpinner />
                      </div>
                    ) : (
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
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentChat && (
        <ChatBox
          showChatbox={showChatbox}
          closeBox={closeBox}
          friendID={currentChat.members.find(member => member !== userID)} // Find friend's ID
          messages={messages}
          currentChat={currentChat}
          userID={userID}
          setAllMessages={setMessages}
        />
      )}

      {/* <!-- END --> */}
    </Layout>
  );
};

export default ChatListPage;
