import React from "react";
import './styles.css'; 
import './Project.css';

const designProjects = [
  { 
    title: "CompoundX", 
    description: "CompoundX - A perpetual dex platform", 
    image: "/assets/compoundX.png",  // Make sure the image is in the public/assets directory
    link: "https://www.figma.com/proto/7w5iLdnIUAXMceuVmPrRVi/CompundX?page-id=0%3A1&node-id=9-66&node-type=frame&viewport=-146%2C1297%2C0.19&t=7ShLPyxOESbw1oPb-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6%3A58",
    className: "compoundx"
  },
  { 
      title: "NFT Marketplace", 
      description: "Created a cover page for NFT marketplace.", 
      image: "/assets/Frame 831.png",
      link: "https://www.figma.com/proto/tIgjM8JOEdKHfXVO4HW8J7/UI-Design-a-Dark-Mode-NFT-app-(Community)?page-id=60%3A543&node-id=249-4035&node-type=FRAME&viewport=45%2C130%2C0.51&t=NHlDmeQWYv5eHXh9-1&scaling=scale-down-width&content-scaling=fixed", 
      className: "nft-marketplace"
  },
  { 
      title: "Habitual", 
      description: "Wireframing, prototyping and designing of an E-commerce platform", 
      image: "/assets/Frame 830.png",
      link: "https://uxfol.io/p/463dad24/02854874", 
      className: "habitual"
  },
  { 
    title: "Modern Website", 
    description: "for a music streaming platform for Gen-Z", 
    image: "/assets/Frame 829.png",
    link: "https://www.figma.com/proto/BfqT7jDI1gCqPwzCDkZsBw/odyssey?page-id=0%3A1&node-id=7-4&node-type=frame&viewport=204%2C365%2C0.05&t=QYPMP24xYS9ARqX5-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=7%3A4", 
    className: "modern-website"
  },
  { 
    title: "3D Carousel animation", 
    description: "applying new animation on my designs.", 
    image: "/assets/Frame 832.png",
    link: "https://www.figma.com/proto/vfIMdAkfQ0neIIbpH4l2cC/3D-Interactive-Animation?page-id=0%3A1&node-id=5-22&scaling=scale-down&content-scaling=fixed&t=YyXdYNk5wzPFSSdP-1", 
    className: "carousel-animation"
  },
];

function Design() {
  return (
    <section id="design-projects">
      <h1>Design Projects</h1>
      <div className="projects-grid">
        {designProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className={project.className}>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Design;
