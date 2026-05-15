import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-name">VA</span>
              <span className="logo-bracket"> /&gt;</span>
            </span>
            <p className="footer-tagline">
              Building scalable backend systems and clean user experiences.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <a href="https://github.com/vaibhavcolt" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/vaibhav-anand" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:anandvaibhav208@gmail.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Vaibhav Anand. Crafted with care.</p>
          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
