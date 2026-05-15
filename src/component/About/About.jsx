import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import resumePdf from '../../assets/Vaibhav_Anand_Resume.pdf';
import './About.css';

const skills = [
  { category: "Backend", items: ["Java", "Spring Boot", "Python", "Django", "FastAPI", "REST APIs"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Async & Systems", items: ["Redis", "Celery", "WebSockets", "Background Jobs"] },
  { category: "Auth & Security", items: ["JWT", "RBAC", "Spring Security"] },
  { category: "Frontend", items: ["React.js", "Vue.js", "HTML/CSS", "JavaScript"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Bitbucket", "AWS S3"] },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about section-wrapper" id="about" ref={ref}>
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Backend-oriented Full-Stack Developer with ~8 months of experience building
            scalable APIs and real-world SaaS platforms. I've worked on multi-tenant B2B
            platforms handling GST invoicing, creative platforms with auto-generated video
            templates, and enterprise backend services.
          </p>
          <p>
            My focus is on clean architecture, performance optimization, and reliable
            system design. I've reduced unwanted API calls by 40%, cleared ~85% of user
            issues, and built 10+ RESTful APIs with security best practices.
          </p>
          <p>
            I leverage AI-assisted development to improve development speed and code quality,
            and I'm passionate about solving real-world problems through technology.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <span className="highlight-icon">🎓</span>
              <div>
                <strong>B.Tech in Computer Science</strong>
                <span>CGPA: 8.7/10</span>
              </div>
            </div>
            <div className="highlight">
              <span className="highlight-icon">📍</span>
              <div>
                <strong>Raipur, Chhattisgarh</strong>
                <span>India</span>
              </div>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🏆</span>
              <div>
                <strong>HackBio Winner</strong>
                <span>College Hackathon</span>
              </div>
            </div>
          </div>

          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', marginTop: '24px' }}>
            Download Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
        </motion.div>

        <motion.div
          className="about-skills"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
            >
              <h4 className="skill-category">{group.category}</h4>
              <div className="skill-tags">
                {group.items.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
