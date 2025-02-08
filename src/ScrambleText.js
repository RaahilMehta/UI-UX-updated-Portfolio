"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 30;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const ScrambleText = ({ children, className }) => {
  const intervalRef = useRef(null);
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  useEffect(() => {
    // Start the scramble effect immediately
    scramble();

    // Start the scramble effect every 10 seconds
    const interval = setInterval(() => {
      scramble();
    }, 10000); // 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span className={className}>{text}</span> {/* Apply className here */}
      </div>
    </motion.div>
  );
};

export default ScrambleText;