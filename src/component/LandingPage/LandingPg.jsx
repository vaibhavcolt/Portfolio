import Navbar from '../NavBar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Project/Projects';
import Education from '../education/Education';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './LandingPg.css';

const LandingPg = () => {
  return (
    <div className="landing-wrapper">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPg;
