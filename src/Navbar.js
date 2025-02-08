import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#connect">Get in touch</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
