import React from 'react';
import './Footer.css';
import {FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-title">Tirumala Sri Lakshmi Vyshnavi Devi Priya Kamineni</h3>

        <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/vyshnavikamineni" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/VyshnaviKamineni" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <p className="footer-text">© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
