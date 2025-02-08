import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function HomePage({ children }) {
  return (
    <>
      <Navbar />
      <div className="header-avatar-container">
        
        <img src="/assets/12.png" alt="Avatar" className="avatar-image" />
        <Header />

      </div>
      {/* <img src="/assets/Frame824.png" alt="Description of image" className="header-image" /> */}
      {children}
      <Footer />
    </>
  );
}

export default HomePage;
