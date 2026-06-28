import React from "react";
import logo from "../assets/lf-logo.svg";
import "./NavBar.css"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Leapfrog"
        className="logo"
      />
    </nav>
  );
};

export default Navbar;