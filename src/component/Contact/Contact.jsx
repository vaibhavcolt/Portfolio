import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_zp8u162", "template_3a55i59", formRef.current, {
        publicKey: "s_wfM8nA9PTQfeK1L",
      })
      .then(
        () => {
          setStatus("success");
          e.target.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="contact section-wrapper" id="contact" ref={sectionRef}>
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-intro">
            I'm currently available for full-time opportunities and freelance projects.
            Feel free to reach out if you want to build something together or just say hi!
          </p>

          <div className="contact-details">
            <a href="mailto:anandvaibhav208@gmail.com" className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <span className="contact-item-label">Email</span>
                <span className="contact-item-value">anandvaibhav208@gmail.com</span>
              </div>
            </a>

            <a href="tel:+917024355497" className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <span className="contact-item-label">Phone</span>
                <span className="contact-item-value">+91 7024355497</span>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span className="contact-item-label">Location</span>
                <span className="contact-item-value">Raipur, Chhattisgarh, India</span>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/vaibhavcolt" target="_blank" rel="noopener noreferrer" className="social-link social-github" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/vaibhav-anand" target="_blank" rel="noopener noreferrer" className="social-link social-linkedin" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="user_name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="user_email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project..." rows="5" required />
          </div>

          <button type="submit" className="btn-primary submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </>
            )}
          </button>

          {status === "success" && (
            <motion.div
              className="form-status form-success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              className="form-status form-error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Something went wrong. Please try again or email me directly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
