import React, { useState, useEffect } from 'react';
import "../styles/Projects.css";



const Projects = () => (
  <div id="projects">
    <div className="section-header ut-dialogue">
        <div className="section-left">
          <span className="section-subtitle">latest</span>
          <span className="ut-heading">projects</span>
        </div>
        <div className="section-right">
          <span className="section-number">02</span>
        </div>
    </div>
      <div className="w-full flex" id="projects-intro">
        <div className="mt-3 text-secondary text-23px max-w-3x1 leading-[30px] ut-dialogue-1">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </div>
      </div>
     
  </div>
);

export default Projects;

