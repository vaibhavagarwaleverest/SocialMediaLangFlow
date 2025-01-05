import React, { useState } from "react";
import ChatBox from "./components/ChatBox.jsx";
import { useChat } from "./hooks/useChat.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx"; // Import the Home component
import "./App.css";

function App() {
  const [hasProceeded, setHasProceeded] = useState(false); // State to check if user has proceeded
  const { inputValue, messages, loading, error, handleInputChange, handleSubmit } = useChat();

  const handleProceed = () => {
    setHasProceeded(true); // Set the state to true when user proceeds
  };

  return (
    <div className="app-container">
      <Navbar />
      {hasProceeded ? (
        // Main app content after proceeding
        <>
          <ChatBox
            messages={messages}
            inputValue={inputValue}
            loading={loading}
            error={error}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
          <Footer />
        </>
      ) : (
        // Render Home component initially
        <Home onProceed={handleProceed} />
      )}
    </div>
  );
}

export default App;
