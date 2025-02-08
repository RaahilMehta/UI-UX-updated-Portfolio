import React, { useEffect, useState } from 'react';
import './Header.css';
import ScrambleText from './ScrambleText';
import MarqueeText from './MarqueeText';

function Header() {
  const [isGlitchActive, setIsGlitchActive] = useState(false); // Start with glitch inactive

  useEffect(() => {
    // Start glitch effect toggle after initial load
    const glitchTimeout = setTimeout(() => {
      setIsGlitchActive(true); // Activate glitch effect after initial animations
    }, 500); // Wait for the initial animations to complete

    const interval = setInterval(() => {
      setIsGlitchActive((prev) => !prev); // Toggle glitch effect
    }, 10000); // Toggle every 10 seconds

    return () => {
      clearTimeout(glitchTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <header id="home">
      <ScrambleText className="scramble-text">Hi. I'm Raahil Mehta.</ScrambleText>
      <p className={`fade-in ${isGlitchActive ? 'glitch' : ''}`}>
        Designer 🧑🏼‍🎨, developer 💻 and crypto enthusiast🚀.
      </p>
      <div className='marq'>
      <MarqueeText />
      </div>
    </header>
  );
}

export default Header;