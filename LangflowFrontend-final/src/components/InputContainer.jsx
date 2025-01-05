/* eslint-disable react/prop-types */
import React from "react";

const InputContainer = ({
  inputValue,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type your Query"
        value={inputValue}
        onChange={handleInputChange}
        className="input-field"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="input-button"
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default InputContainer;
