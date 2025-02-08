"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MarqueeText.css";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 60;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const skills = ["Actively looking for Opportunities! Contact me at raahilmehta77@gmail.com "];

const ScrambleText = ({ text, className }) => {
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    let pos = 0;
    const interval = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setScrambledText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        clearInterval(interval);
        setScrambledText(text);
      }
    }, SHUFFLE_TIME);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {scrambledText}
    </motion.span>
  );
};

const MarqueeText = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {skills.map((skill, index) => (
          <ScrambleText key={index} text={skill} className="marquee-item" />
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;