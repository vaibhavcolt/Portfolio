import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">VA</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div className="active-indicator" layoutId="activeNav" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <motion.span
              key={isDark ? "moon" : "sun"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? "☀️" : "🌙"}
            </motion.span>
          </button>

          <a href="#contact" className="navbar-cta">
            Let's Talk
          </a>

          <button
            className={`hamburger ${mobileOpen ? "hamburger--active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`mobile-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
                onClick={handleLinkClick}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <button className="theme-toggle-mobile" onClick={toggleTheme}>
              {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
