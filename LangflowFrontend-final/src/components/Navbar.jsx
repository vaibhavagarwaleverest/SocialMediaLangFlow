import React from 'react';
import LOGOA from "../assets/LOGOA.png"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* Placeholder for the logo */}
        <img src={LOGOA} alt="Logo" className="logo" />
        <span className="app-name">InsightSphere</span>
      </div>
    </div>
  );
};

export default Navbar;
