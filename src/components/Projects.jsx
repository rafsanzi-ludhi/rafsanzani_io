import React, { useState, useEffect } from 'react';
import "../styles/Projects.css";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import { Tilt } from 'react-tilt';
import { projects } from '../constants';

const ProjectCard = ({ name, description, tags, image }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768; // Assuming 768px as the breakpoint for mobile views

  if (isMobile) {
    return (
      <div className='self-stretch bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full text-23px cards'>
        {/* Content */}
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>
        <div className="mt-2">
          <h3 className="text-white font-bold text-23px">{name}</h3>  
          <p className="mt-2 text-secondary text-16px">{description}</p>
        </div>
        <div className="mt-7 flex gap-7">
          {tags.map(tag => <p key={tag.name} className={`text-16px mt--4 ${tag.color}`}>#{tag.name}</p>)}
        </div>
      </div>
    );
  }

  return (
    <Tilt  
      options={{  
        max: 45,
        scale: 1,
        speed: 450, 
      }}
      className='self-stretch bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full text-23px cards'
    >
      {/* Content */}
      <div className='relative w-full h-[230px]'>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
      </div>
      <div className="mt-2">
        <h3 className="text-white font-bold text-23px">{name}</h3>  
        <p className="mt-2 text-secondary text-16px">{description}</p>
      </div>
      <div className="mt-7 flex gap-7">
        {tags.map(tag => <p key={tag.name} className={`text-16px mt--4 ${tag.color}`}>#{tag.name}</p>)}
      </div>
    </Tilt>
  );
};

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
      <div className="flex justify-center flex-wrap items-stretch ut-dialogue-1">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </Fade>
  </div>
);

export default Projects;

