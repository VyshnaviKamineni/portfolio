import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, skills, and projects</p>
      </div>
    </header>
  );
}

export default Header;
