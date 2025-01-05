import React from "react";
import p1R from "../assets/p1R.jpg";
import P2R from "../assets/P2R.jpg";
import omkar from "../assets/omkar.jpg";
import { FaRegCopyright } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import p4 from "../assets/p4.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="copyright"><FaRegCopyright /> 2025 HackerCode. All rights reserved.</p>
        <p className="hackathon-message">This project was built for the SuperMind Hackathon 2025. Proudly developed by our team!</p>
        <div className="team">
          <h4>Meet the Team:</h4>
          <div className="team-members">
            <div className="member">
              <img src={omkar} alt="Member 1" className="member-image" />
              <p>Omkar</p>
              <div className="Purl">
                <a target="_blank" href="https://github.com/omkarjagtap2212" className="targetSpan" ><BsLinkedin /></a> <a target="_blank" href="https://github.com/omkarjagtap2212" ><FaGithub /></a>

              </div>
            </div>
            <div className="member">
              <img src={P2R} alt="Member 2" className="member-image" />
              <p>Vaibhav</p>
              <div className="Purl">
              <a target="_blank" href="https://github.com/omkarjagtap2212" className="targetSpan" ><BsLinkedin /></a> <a target="_blank" href="https://github.com/omkarjagtap2212" ><FaGithub /></a>
              </div>
            </div>
            <div className="member">
              <img src={p1R} alt="Member 3" className="member-image" />
              <p>Atharv</p>
              <div className="Purl">
              <a target="_blank" href="https://github.com/omkarjagtap2212" className="targetSpan" ><BsLinkedin /></a> <a target="_blank" href="https://github.com/omkarjagtap2212" ><FaGithub /></a>
              </div>
            </div>
            <div className="member">
              <img src={p4} alt="Member 4" className="member-image" />
              <p>Atif </p>
              <div className="Purl">
              <a target="_blank" href="https://github.com/omkarjagtap2212" className="targetSpan" ><BsLinkedin /></a> <a target="_blank" href="https://github.com/omkarjagtap2212" ><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
