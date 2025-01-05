/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from "react";

const ChatMessages = ({ messages, loading }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat-message ${
            message.sender === "User" ? "user" : "ai"
          }`}
        >
          {message.text}
        </div>
      ))}
      {loading && (
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
