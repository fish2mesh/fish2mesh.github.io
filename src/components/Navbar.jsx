// components/Navbar.jsx
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <nav>
        <a href="#about" className="title_navbar">Fish2Mesh</a>
        
        {/* Hamburger menu icon */}
        <div className="menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#abstract" onClick={toggleMenu}>Abstract</a></li>
          <li><a href="#overview" onClick={toggleMenu}>Summary</a></li>
          <li><a href="#results" onClick={toggleMenu}>Results</a></li>
          <li><a href="#demos" onClick={toggleMenu}>Demos</a></li>
          <li><a href="#introduction" onClick={toggleMenu}>Overview</a></li>
          {/* <li><a href="#acknowledgement" onClick={toggleMenu}>Acknowledgement</a></li>
          <li><a href="#citations" onClick={toggleMenu}>Citations</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
