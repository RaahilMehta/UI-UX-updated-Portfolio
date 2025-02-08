import React from 'react';
import './Header.css';
import ScrambleText from './ScrambleText';

function Header() {
  return (
    <header id="home">
      <ScrambleText className="scramble-text">Hi. I'm Raahil Mehta.</ScrambleText>
      <p>Designer 🧑🏼‍🎨, developer 💻 and crypto Enthusiast 🚀</p>
    </header>
  );
}

export default Header;