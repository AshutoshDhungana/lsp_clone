import React, { useState } from "react";
import "./Footer.css"
import logoWhite from "../assets/lf-logo-white.svg";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed with:", email);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="newsletter">
        {/* Left: Text */}
        <div className="newsletter-text" >
          <h3 className="newsletter-h3">
            Join our newsletter
          </h3>
          <p className="newsletter-p">
            Sign up to stay updated with the latest insights,
            <br />
            news, and more.
          </p>
        </div>

        <div className="input_box">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <button
            onClick={handleSubscribe}
            className="handleSubscribe"
                 >
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"/>

      {/* Bottom Row */}
      <div className="bottom-row">
        {/* Left: Copyright + Links */}
        <div className="">
          <span className="copyright_text">
            Copyright 2022 Leapfrog Technology Inc. All rights reserved.
          </span>
          <a
            href="#"
            className="policy_link"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="policy_link"
          >
            Data Subject Policy
          </a>
        </div>

        {/* Right: Logo */}
        <img
          src= {logoWhite}
          alt="Leapfrog"
          className="logo-white"
        />
      </div>
    </footer>
  );
};

export default Footer;
