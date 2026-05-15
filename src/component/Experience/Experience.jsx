import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Gimbooks India",
    period: "Oct 2025 – Present",
    type: "Full-time",
    projects: [
      {
        name: "GimBooks — GST & Fintech SaaS Platform",
        description: "Multi-tenant B2B SaaS platform supporting GST invoicing, accounting, and compliance workflows.",
        points: [
          "Developed and maintained backend services using Django REST Framework & frontend using Vue.js",
          "Created end-to-end version-2 of delivery challan module, export invoice module, and prefix management",
          "Cleared ~85% user issues on the web platform",
          "Reduced 40% unwanted and multiple API calls in frontend through optimization",
          "Optimized download invoice API and lists API for better performance",
        ],
        tech: ["Django", "DRF", "Vue.js", "PostgreSQL", "REST APIs"],
      },
      {
        name: "Picsera — Creative Platform",
        description: "Platform where users can download templates and generate custom video templates.",
        points: [
          "Built FastAPI backend services for templates and auto-generated video",
          "Designed MongoDB schemas using Beanie ODM",
          "Integrated auto-generated video template pipeline",
          "Created Picsera web end-to-end with full API integration",
          "Integrated Razorpay payment gateway",
        ],
        tech: ["FastAPI", "MongoDB", "Beanie", "Razorpay", "Python"],
      },
    ],
  },
  {
    role: "Java Developer Intern",
    company: "EazyByts",
    period: "Internship",
    type: "Internship",
    projects: [
      {
        name: "Backend Development with Spring Boot",
        description: "Enterprise backend development focused on scalability and security.",
        points: [
          "Built 10+ RESTful APIs with Spring Boot",
          "Implemented JWT-based authentication, improving security by 30%",
          "Collaborated in SDLC workflows and participated in code reviews",
          "Applied modular design, unit testing, and best practices to reduce bugs by 30%",
        ],
        tech: ["Java", "Spring Boot", "JWT", "REST APIs", "Git"],
      },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="experience section-wrapper" id="experience" ref={ref}>
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Where I've worked and what I've built</p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="exp-item"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <div className="exp-timeline-marker">
              <div className="exp-dot" />
              {i < experiences.length - 1 && <div className="exp-line" />}
            </div>

            <div className="exp-content">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                </div>
              </div>

              {exp.projects.map((project, j) => (
                <div key={j} className="exp-project">
                  <h4 className="exp-project-name">{project.name}</h4>
                  <p className="exp-project-desc">{project.description}</p>
                  <ul className="exp-points">
                    {project.points.map((point, k) => (
                      <li key={k}>{point}</li>
                    ))}
                  </ul>
                  <div className="exp-tech-tags">
                    {project.tech.map(t => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
