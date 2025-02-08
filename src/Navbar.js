import React, { useState } from "react";
import "./Navbar.css";
import ScrambleText from "./ScrambleText";

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { id: "home", text: "Home" },
    { id: "projects", text: "Projects" },
    { id: "connect", text: "Get in touch" }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onMouseEnter={() => setHoveredLink(text)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {hoveredLink === text ? <ScrambleText>{text}</ScrambleText> : text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;