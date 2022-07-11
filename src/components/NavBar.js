import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const active = location.pathname;
  
  return (
    <nav id="navbar">
      <div className="nav-link">
        <Link to="/about" id="about" className={active === "/about" || active === "/" ? 'active' : ''}>About</Link>
      </div>
      <div className="nav-link">
        <Link to="/projects" id="projects" className={active === "/projects" ? 'active' : ''}>Projects</Link>
      </div>
      <div className="nav-link">
        <Link to="/skills" id="skills" className={active === "/skills" ? 'active' : ''}>Skills</Link>
      </div>
      <div className="nav-link">
        <Link to="/services" id="services" className={active === "/services" ? 'active' : ''}>Services</Link>
      </div>
      <div className="nav-link">
        <Link to="/setup" id="setup" className={active === "/setup" ? 'active' : ''}>Setup</Link>
      </div>
    </nav>
  );
}

export default NavBar;