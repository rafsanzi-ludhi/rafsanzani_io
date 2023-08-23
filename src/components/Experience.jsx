import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';



const Experience = () => {
    
  return (
    <div id="experience">
          <div>
          <div className="section-header">
            <Bounce left duration={1000}>
              <div className="section-left">
              <span className="section-subtitle"></span>
              <span className="section-title">experience</span>
              </div>
            </Bounce>
            <Bounce right duration={1000}>
              <div className="section-right">
              <span className="section-number">04</span>
            </div>
            </Bounce>
          </div>
          <Fade bottom distance="75px" duration = {3000}>
            <JobList></JobList>
        </Fade>
         </div>
        </div>
    );
}


export default Experience;
