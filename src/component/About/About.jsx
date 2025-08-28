import React from "react";
import "./About.css";
import profilePic from "/src/assets/my profile photo.jpg"; // Ensure the path is correct
import resume from "/src/assets/Vaibhav Anand C.pdf"; // Ensure the path is correct
const About = () => {
  return (
    <section className="about" >
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Vaibhav, a full-stack developer passionate about building scalable,
          secure, and user-friendly applications. I specialize in Spring Boot and React,
          with a knack for solving complex problems.
        </p>
        <a href={resume} className="download-btn">
          Download Resume
        </a>
      </div>
      <div className="about-image">
        {/* <img src={profilePic} alt="Vaibhav" /> */}
        <img
         src={profilePic}
         alt="Vaibhav" />
      </div>
    </section>
  );
};

export default About;
