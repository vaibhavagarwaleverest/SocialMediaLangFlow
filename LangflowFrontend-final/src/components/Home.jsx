/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Home = ({ onProceed }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Insights to Fuel Your Strategy.</h1>
        <p className="home-description">
          Experience seamless conversations with our AI-powered chatbot.
        </p>
        <button className="proceed-button" onClick={onProceed}>
          Get Started  <FaArrowRight id="rightArrow"/>
        </button>
      </div>
    </div>
  );
};

export default Home;
