import React from 'react';
import './Projects.css';
import profilePic from "/src/assets/my profile photo.jpg"; 
import car_rental from "/src/assets/Car Rental Website photo.jpeg";


const projects = [
  {
    title: 'Car Rental System',
    description: "",
    image: car_rental,
    features: [
      "•	Feature to authenticate users.",
      "•  User can select location, data, and fule type and book there car accordingly.",
      "•	Tech Stack: Java, Spring Boot, Spring Security, Hibernate, React.js."],
    github: 'https://github.com/vaibhavcolt/Car-Rental-System-Full-Stack',
    live: '#',
    tech: ['React', 'Java', 'Spring Boot', 'MySQL', "REST API"],
  },
  {
    title: 'Online  Exam System',
    description: "",
    image: "",
    features: [
      '•	Feature to enable users to take tests.',
      '•	Feature to capture test completion time.',
      '•	Feature to enable text to voice in real time.',
    ],
    github: '#',
    live: '#',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST API', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Data Visualizer ',
    description: "",
    image: "",
    features: [
      ' •	Enable user to upload CSV/Excel files and visualize data dynamically',
      '•	Support bar chart, line graph and pie charts.',
      '•	Feature help non-technical users to understand data trend.',
      '•	Tech Stack: HTML, CSS, JavaScript.',
    ],
    github: null,
    live: null,
    tech: ['JavaScript', 'HTML', 'CSSs'],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="projects-image-container">
              <img src={project.image} alt="Projects Banner" className="projects-image" />
            </div>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={console.log("Hello, World!")}>
                <button >GitHub</button>
              </a>

              {/* {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <button>Live</button>
                </a>
              )} */}

            </div>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="tech-tag" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
