import React from 'react';
import resume from '../assets/my resume.pdf';

const Navbar = ({ toggleMenu, menuOpen }) => {
  
  return (

    <nav className="navbar scrolled">
      <div className="logocircle"><span>P</span></div>
          {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      <ul className={`nav-links ${menuOpen ? "show" : ""}`} id="navLinks">
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#education" onClick={toggleMenu}>Education</a></li>
                <li><a href="#internship" onClick={toggleMenu}>Internship</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
       <li><a href={resume} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Resume</a></li>       
       </ul>
      <div className="hamburger" onClick={toggleMenu}>
         {menuOpen ? (
    // Cross icon
    <svg width="24" height="24" viewBox="0 0 24 24">
      <line x1="4" y1="4" x2="20" y2="20" stroke="#64ffda" strokeWidth="2"/>
      <line x1="20" y1="4" x2="4" y2="20" stroke="#64ffda" strokeWidth="2"/>
    </svg>
  ) : (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#64ffda">
          <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
  )}
        </div>

    </nav>
  );
};

export default Navbar;
