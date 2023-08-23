import React, { useState, useEffect } from 'react';
import "../styles/Projects.css";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
// import { Tilt } from 'react-tilt';
import { projects } from '../constants';


const Projects = () => (
  <div id="projects">
    <div className="section-header ut-dialogue">
      <Bounce left duration={1000}>
        <div className="section-left">
          <span className="section-subtitle">latest</span>
          <span className="ut-heading">projects</span>
        </div>
      </Bounce>
      <Bounce right duration={1000}>
        <div className="section-right">
          <span className="section-number">02</span>
        </div>
      </Bounce>
    </div>
    <Fade bottom distance="75px" duration={3000}>
      <div className="w-full flex" id="projects-intro">
        {/* <div className="mt-3 text-secondary text-23px max-w-3x1 leading-[30px] ut-dialogue-1">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </div> */}
      </div>
      
    </Fade>
  </div>
);

export default Projects;

