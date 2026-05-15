import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Education.css';

const educationData = [
  {
    level: "Bachelor of Technology",
    field: "Computer Science",
    institute: "Shri Shankaracharya Technical Campus, Bhilai, Chhattisgarh",
    period: "Aug 2021 – May 2025",
    score: "CGPA: 8.7 / 10",
    icon: "🎓",
  },
  {
    level: "Higher Secondary (Class XII)",
    field: "Science",
    institute: "Ryan International School, Raipur, Chhattisgarh",
    period: "June 2019 – May 2021",
    score: "",
    icon: "📚",
  },
  {
    level: "Secondary Education (Class X)",
    field: "",
    institute: "St. Xavier's High School, Raipur, Chhattisgarh",
    period: "June 2018 – May 2019",
    score: "",
    icon: "🏫",
  },
];

const certifications = [
  { name: "Postman API Fundamentals Student Expert", org: "Postman" },
  { name: "Oracle Data Platform 2025 Certified Foundations Associate", org: "Oracle" },
  { name: "HackBio College Hackathon Winner", org: "HackBio" },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="education section-wrapper" id="education" ref={ref}>
      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Education & Certifications</h2>
        <p className="section-subtitle">My academic journey and achievements</p>
      </motion.div>

      <div className="edu-content-grid">
        <div className="edu-timeline">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              className="edu-card"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            >
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-info">
                <h3 className="edu-level">{edu.level}</h3>
                {edu.field && <p className="edu-field">{edu.field}</p>}
                <p className="edu-institute">{edu.institute}</p>
                <div className="edu-meta">
                  <span className="edu-period">{edu.period}</span>
                  {edu.score && <span className="edu-score">{edu.score}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cert-section"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="cert-title">Achievements & Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                <div className="cert-badge">✦</div>
                <div>
                  <p className="cert-name">{cert.name}</p>
                  <p className="cert-org">{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
