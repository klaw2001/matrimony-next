import React from "react";
// import "@/app/mystyle.css";
const Message = ({ message, own }) => {
  const messageClass = own ? "chat-rhs" : "chat-lhs";

  return (
    <div
      className={`d-flex w-100 ${
        own ? "justify-content-end" : "justify-content-start"
      }`}
    >
      <div style={{ width: "fit-content" }} className={`mb-1 ${messageClass}`}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;
