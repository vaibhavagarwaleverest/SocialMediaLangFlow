
import { useState, useEffect } from "react";
import axios from "axios";

export const useChat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const apiUrl = '/api/v1/socialMedia/getAllAnalysis';

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    if (!inputValue.trim()) return;
  
    const userMessage = { sender: "User", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);
    setError("");
  
    try {
      const { data } = await axios.post(apiUrl, {
        inputValue: userMessage.text,
        tweaks: {},
        stream: false,
      });
  
      // Check if the response contains the message field and handle it accordingly
      const aiMessageText = data?.message; // Update this line to extract the message text
  
      if (aiMessageText) {
        const aiMessage = { sender: "AI", text: aiMessageText };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        setError("No response from AI.");
      }
    } catch (error) {
      setError(`Error occurred while fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    const inputField = document.querySelector(".input-field");
    if (inputField) {
      inputField.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      if (inputField) {
        inputField.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [inputValue]);

  return {
    inputValue,
    messages,
    loading,
    error,
    darkMode,
    toggleDarkMode,
    handleInputChange,
    handleSubmit,
  };
};
