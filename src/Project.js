import React from "react";
import './styles.css'; 
import './Project.css';
import { Link } from "react-router-dom";

const projects = [
  { 
      title: "Designs",  
      image: "/assets/figmai.png",
      link: "/design",
      size: { width: '500px', height: '400px' },
      marginBottom: '0px'
  },
  { 
      title: "WebDev",  
      image: "/assets/REACT.png",
      link: "/webdev",
      size: { width: '400px', height: '350px' },
      marginBottom: '40px'
  },
];
function Projects() {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <Link to={project.link}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
                style={{ 
                  width: project.size.width, 
                  height: project.size.height,
                  marginBottom: project.marginBottom // Set margin bottom dynamically
                }} 
              />
              <h2 className={project.className}>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
