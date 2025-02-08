import React from "react";
import './styles.css'; 
import './WebDev.css'; // Import the CSS file for WebDev

const webDevProjects = [
    {
        title: "Crptoverse",
        description: "A cryptocurrency react application with in depth data about currencies, markets etc using redux toolkit and fetch data using rapid API",
        link: "https://crypto-stats-three.vercel.app/",
        image: "/assets/Cryptocurrency.png"
      },
      {
        title: "LMS",
        description: "Created a Learning Management System as a Team project",
        // link: "https://your-portfolio-link.com",
        image: "/assets/lms.png"
      },
  // Add more projects as needed
];

function WebDev() {
  return (
    <section className="webdev-section">
      <h1>Web Development Projects</h1>
      <div className="projects-grid-webdev">
        {webDevProjects.map((project, index) => (
          <div key={index} className="project-card-webdev">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image-webdev" />
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WebDev;
