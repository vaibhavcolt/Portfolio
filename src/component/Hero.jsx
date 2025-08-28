import React from "react";
import "./Hero.css";
import profilePic from "/src/assets/my profile photo.jpg"; // Ensure the path is correct


const Hero = () => {
  return (
    <div className="hero">
      <h3>Hello, This is</h3>
      <h1>Ayan Khan</h1>

      <div className="hero-img">
         <img src={profilePic} alt="Vaibhav" />
        <div className="hero-content">
          <p>
            I am working as a freelance web designer and developer for 4 years.
            I love to design and make new web experiences for the people.
          </p>
          <button>see my works</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
