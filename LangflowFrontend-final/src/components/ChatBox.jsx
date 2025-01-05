
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import InputContainer from "./InputContainer";

const ChatBox = ({ messages, inputValue, loading, error, handleInputChange, handleSubmit }) => {
  return (
    <div className="chat-box">
      <ChatHeader />
      <ChatMessages messages={messages} loading={loading} />
      {error && <div className="error-message">{error}</div>}
      <InputContainer
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default ChatBox;
