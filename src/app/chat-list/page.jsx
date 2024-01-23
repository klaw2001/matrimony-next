"use client";
import Layout from "@/components/layouts/Layout";
import React, { useState } from "react";

const ChatListPage = () => {
  const [showChatbox, setShowChatbox] = useState(false);

  const handleClick = () => {
    setShowChatbox(!showChatbox);
  };

  const closeBox = () =>{
    setShowChatbox(false)
  }

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
                    <h2 className="db-tit">Chat list</h2>
                    <div className="db-pro-stat">
                      <div className="db-chat">
                        <ul>
                          <li className="db-chat-trig" onClick={handleClick}>
                            <div className="db-chat-pro">
                              {" "}
                              <img src="images/profiles/1.jpg" alt="" />{" "}
                            </div>
                            <div className="db-chat-bio">
                              <h5>Ashley emyy</h5>
                              <span>Hi Anna, How are you?</span>
                            </div>
                            <div className="db-chat-info">
                              <div className="time new">
                                <span className="timer">9:00 PM</span>
                                <span className="cont">3</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="chatbox" style={{ right: showChatbox ? "0" : "-500px" }}>
        <span class="comm-msg-pop-clo">
          <i class="fa fa-times" aria-hidden="true" onClick={closeBox}></i>
        </span>

        <div class="inn">
          <form name="new_chat_form" method="post">
            <div class="s1">
              <img src="images/user/2.jpg" class="intephoto2" alt="" />
              <h4>
                <b class="intename2">Julia</b>,
              </h4>
              <span class="avlsta avilyes">Available online</span>
            </div>
            <div class="s2 chat-box-messages">
              <span class="chat-wel">Start a new chat!!! now</span>
              <div class="chat-con">
                <div class="chat-lhs">Hi</div>
                <div class="chat-rhs">Hi</div>
              </div>
              <span>Start A New Chat!!! Now</span>
            </div>
            <div class="s3">
              <input
                type="text"
                name="chat_message"
                placeholder="Type a message here.."
                required=""
              />
              <button id="chat_send1" name="chat_send" type="submit">
                Send <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- END --> */}
    </Layout>
  );
};

export default ChatListPage;
