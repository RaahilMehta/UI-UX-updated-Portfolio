import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Projects from "./Project";
import Design from "./Design";
import "./styles.css"; // Add this if it's not there
import WebDev from "./WebDev";

function App() {
  useEffect(() => {
    // JavaScript logic for cursor animation
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
      "#DBA6F0"
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Adding cursor circles */}
        {Array(22).fill(0).map((_, idx) => (
          <div key={idx} className="circle"></div>
        ))}
        <Routes>
          <Route path="/" element={<HomePage><Projects /></HomePage>} />
          <Route path="/design" element={<Design />} />
          <Route path="/WebDev" element={<WebDev/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
