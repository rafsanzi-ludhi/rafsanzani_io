import React, { useState } from "react";
import "../styles/About.css";



function About() {


  const one = (
    <p className="ut-dialogue-1">
      I am currently a Chemicals and Energy Engineering graduate from
      <span className="university-name"> The University of Leeds</span>  
      and have a keen interest in Software Development.

    </p>
  );

  const two = (
    <p className="ut-dialogue-1">
      Outside of my studies, I'm fascinated by Physics and space,
      I love to play video games, hit the gym and watch movies.

    </p>
  );

  const tech_stack = [
    "Javascript ES6+",
    "Python",
    "React.js",
    "Java",
    "Node.js",
    "HTML & CSS",
  ];

  return (
    <div id="about">
      <div>
          <div className="ut-dialogue section-header">
              <div className="section-left">
                <span className="section-subtitle">who am I?</span>
                <span className="ut-heading">about me</span>
              </div>
              <div className="section-right">
              <span className="section-number">01</span>
            </div>
            
          </div>
        
        <div className="about-content">
            <div className="about-description ">
              {one}
              <div className="about-para-2">
                {two}
              </div>
            </div>

          <div className="about-image">
            <img src={headshot} alt="headshot"/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

