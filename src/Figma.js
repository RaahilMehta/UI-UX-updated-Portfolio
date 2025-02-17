import React from "react";
import '../Styles/Figma.css'; // Ensure this file exists for styling

const designs = [
  { 
    title: "CompoundX", 
    description: "CompoundX - A perpetual dex platform", 
    image: "/assets/compoundX.png",
    link: "https://www.figma.com/proto/tIgjM8JOEdKHfXVO4HW8J7/UI-Design-a-Dark-Mode-NFT-app-(Community)?page-id=60%3A543&node-id=249-4035&node-type=FRAME&viewport=45%2C130%2C0.51&t=NHlDmeQWYv5eHXh9-1&scaling=scale-down-width&content-scaling=fixed",
    className: "compoundx"
  },
  { 
    title: "NFT Marketplace", 
    description: "Created a cover page for NFT marketplace.", 
    image: "/assets/Frame831.png",
    link: "https://www.figma.com/proto/tIgjM8JOEdKHfXVO4HW8J7/UI-Design-a-Dark-Mode-NFT-app-(Community)?page-id=60%3A543&node-id=249-4035&node-type=FRAME&viewport=45%2C130%2C0.51&t=NHlDmeQWYv5eHXh9-1&scaling=scale-down-width&content-scaling=fixed",
    className: "nft-marketplace"
  },
  { 
    title: "Habitual", 
    description: "Wireframing, prototyping, and designing of an E-commerce platform", 
    image: "/assets/Frame830.png",
    link: "https://uxfol.io/p/463dad24/02854874",
    className: "habitual"
  },
  { 
    title: "Modern Website", 
    description: "for a music streaming platform for Gen-Z", 
    image: "/assets/Frame829.png",
    link: "https://www.figma.com/proto/BfqT7jDI1gCqPwzCDkZsBw/odyssey?page-id=0%3A1&node-id=7-4&node-type=frame&viewport=204%2C365%2C0.05&t=QYPMP24xYS9ARqX5-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=7%3A4",
    className: "modern-website"
  },
  { 
    title: "3D Carousel Animation", 
    description: "Applying new animation on my designs.", 
    image: "/assets/Frame832.png",
    link: "https://www.figma.com/proto/vfIMdAkfQ0neIIbpH4l2cC/3D-Interactive-Animation?page-id=0%3A1&node-id=5-22&scaling=scale-down&content-scaling=fixed&t=YyXdYNk5wzPFSSdP-1",
    className: "carousel-animation"
  },
];

function Figma() {
  return (
    <section id="figma-projects">
      <h1>My Figma Designs</h1>
      <div className="designs-grid">
        {designs.map((design, index) => (
          <div key={index} className="design-card">
            <a href={design.link} target="_blank" rel="noopener noreferrer">
              <img src={design.image} alt={design.title} className="design-image" />
              <h2 className={design.className}>{design.title}</h2>
            </a>
            <p>{design.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Figma;