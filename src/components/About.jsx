import React, { useState } from "react";
import "../styles/About.css";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import headshot from '../assets/momo-picnic.jpg'; // Import the image

function About() {

  const one = (
    <p className="ut-dialogue-1 muted-white">
      I am a recent Chemical and Energy Engineering graduate from
      <span className="university-name"> The University of Leeds </span>  
      with a keen interest in software development. 

    </p>
  );

  const two = (
    <p className="ut-dialogue-1 muted-white">
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
            <Bounce left duration={1000}>
              <div className="section-left">
                <span className="section-subtitle">who am I?</span>
                <span className="ut-heading">about me</span>
              </div>
            </Bounce>
            <Bounce right duration={1000}>
              <div className="section-right">
              <span className="section-number">01</span>
            </div>
            
            </Bounce>
          </div>
        
        <div className="about-content">
      <Fade bottom distance="75px" duration = {3000}>
            <div className="about-description ">
              {one}
              {/* <div className="about-description-techs ut-dialogue"> */}
              {/* {"Here are some technologies I have been working with recently:"} */}

              {/* </div> */}
              {/* <ul className="tech-stack ut-dialogue-1">
                {tech_stack.map((tech_item, i) => (
                  <li key={i}>{tech_item}</li>
                ))}
              </ul> */}
              <div className="about-para-2">
                {two}
              </div>
            </div>

            <div className="about-image">
              <img src={headshot} alt="A picture of me in my graduation gown" />
          </div>
      </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;

