import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import resumePdf from '../../assets/Vaibhav_Anand_Resume.pdf';
import './Home.css';

const roles = [
  "Backend Developer",
  "Full Stack Developer",
  "Java & Spring Boot Expert",
  "Python & Django Developer",
  "API Architect",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.slice(0, displayText.length - 1)
            : currentRole.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="home" id="home">
      <div className="home-bg-grid" />
      <div className="home-content">
        <motion.div
          className="home-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Hi, I'm{" "}
          <span className="accent-text">Vaibhav Anand</span>
        </motion.h1>

        <motion.div
          className="home-role"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="role-text">{displayText}</span>
          <span className="role-cursor">|</span>
        </motion.div>

        <motion.p
          className="home-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Backend-oriented Full-Stack Developer with experience building scalable APIs
          and real-world SaaS platforms. Skilled in Java, Spring Boot, Python, Django &
          FastAPI. Passionate about clean architecture, performance, and reliable system design.
        </motion.p>

        <motion.div
          className="home-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </motion.div>

        <motion.div
          className="home-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <div className="stat">
            <span className="stat-number">8+</span>
            <span className="stat-label">Months Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">APIs Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">85%</span>
            <span className="stat-label">Issues Resolved</span>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
          <span>Scroll down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
