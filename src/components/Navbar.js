// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-title">My Portfolio</div>
      <nav className={`navbar-nav ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="navbar-burger" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
    </header>
  );
}

export default Navbar;
