import React from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const active = location.pathname;
  
  return (
    <nav id="navbar">
      <div className="nav-link">
        <a href="/about" id="about" className={active === "/about" || active === "/" ? 'active' : ''}>About</a>
      </div>
      <div className="nav-link">
        <a href="/projects" id="projects" className={active === "/projects" ? 'active' : ''}>Projects</a>
      </div>
      <div className="nav-link">
        <a href="/skills" id="skills" className={active === "/skills" ? 'active' : ''}>Skills</a>
      </div>
      <div className="nav-link">
        <a href="/services" id="services" className={active === "/services" ? 'active' : ''}>Services</a>
      </div>
      <div className="nav-link">
        <a href="/setup" id="setup" className={active === "/setup" ? 'active' : ''}>Setup</a>
      </div>
    </nav>
  );
}

export default NavBar;