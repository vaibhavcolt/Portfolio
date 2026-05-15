import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: "GimBooks — GST & Fintech SaaS",
    description: "Multi-tenant B2B SaaS platform supporting GST invoicing, accounting, and compliance workflows. Optimized APIs and reduced 40% unwanted frontend API calls.",
    tech: ["Django", "DRF", "Vue.js", "PostgreSQL", "Redis"],
    highlights: ["85% issues resolved", "40% API optimization", "Multi-tenant"],
    github: null,
    live: null,
    color: "#14B8A6",
  },
  {
    title: "Picsera — Creative Platform",
    description: "Platform for downloading templates and generating custom video templates. Full-stack build with payment integration and auto video generation.",
    tech: ["FastAPI", "MongoDB", "Beanie", "Razorpay", "Python"],
    highlights: ["Auto video generation", "Payment gateway", "Full-stack"],
    github: null,
    live: null,
    color: "#2DD4BF",
  },
  {
    title: "Car Rental System",
    description: "Full-stack car rental application with user authentication, authorization, and booking system. Users can select location, date, and fuel type to book cars.",
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "MySQL"],
    highlights: ["JWT Auth", "Role-based access", "Full CRUD"],
    github: "https://github.com/vaibhavcolt/Car-Rental-System-Full-Stack",
    live: null,
    color: "#0D9488",
  },
  {
    title: "Online Exam System",
    description: "Web-based exam platform enabling users to take tests with real-time text-to-voice and automatic test completion time tracking.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "JavaScript"],
    highlights: ["Text-to-voice", "Timer tracking", "REST APIs"],
    github: null,
    live: null,
    color: "#55efc4",
  },
  {
    title: "Data Visualizer",
    description: "Tool that enables non-technical users to upload CSV/Excel files and visualize data dynamically with bar charts, line graphs, and pie charts.",
    tech: ["JavaScript", "HTML", "CSS", "Chart.js"],
    highlights: ["CSV/Excel upload", "Dynamic charts", "User-friendly"],
    github: null,
    live: null,
    color: "#fd79a8",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="projects section-wrapper" id="projects" ref={ref}>
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built and worked on</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            whileHover={{ }}
          >
            <div className="project-color-bar" style={{ background: project.color }} />

            <div className="project-top">
              <div className="project-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                </svg>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-github-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-highlights">
              {project.highlights.map((h, j) => (
                <span key={j} className="project-highlight">{h}</span>
              ))}
            </div>

            <div className="project-tech-stack">
              {project.tech.map((t, j) => (
                <span key={j} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
