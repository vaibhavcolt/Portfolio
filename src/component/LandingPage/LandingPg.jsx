import React from 'react'
import About from '../About/About'
import Navbar from '../NavBar/Navbar'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Projects from '../Project/Projects'
import Education from '../Education/Education'
import Hero from '../Hero'


const LandingPg = () => {
  return (
    <div className='Landing-wrapper'>
      <Navbar />
      <div className="content-container">
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
      {/* <Hero /> */}
      </div>
    </div>
  )
}

export default LandingPg
