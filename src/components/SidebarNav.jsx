import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { Sidenav, Nav } from 'rsuite';

import "../styles/SidebarNav.css";

const SidebarNav = () => {
  const links = [
    { name: "home", to: "intro" },
    { name: "about me", to: "about" },
    { name: "latest projects", to: "projects" },
    { name: "toolkit", to: "toolkit" },
  ];

  return (
    <div style={{ width: 240 }}>
        <Sidenav.Body className="sidebar-nav">
          <Nav activeKey="1" className="sidebar-links ut-dialogue">
            {links.map((link, i) => (
              <Fade bottom distance="75px" key={i} duration={(i + 1) * 1000}>
                <div key={i}>
                  <Link 
                    activeClass="active"
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={50}
                  >
                    {link.name}
                  </Link>
                </div>
              </Fade>
            ))}
          </Nav>

          <div className="sidebar-logos" href="/">
            <a href="mailto:gazi.jarin@mail.utoronto.ca">
              <EmailIcon style={{ fontSize: 24 }} />
            </a>
            <a href="https://github.com/gazijarin">
              <GitHubIcon style={{ fontSize: 21 }} />
            </a>
            <a href="https://www.linkedin.com/in/gazi-jarin-3644b0172/">
              <LinkedInIcon style={{ fontSize: 24 }} />
            </a>
          </div>
        </Sidenav.Body>
    </div>
  );
};

export default SidebarNav;
