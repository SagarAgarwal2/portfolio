import React from 'react';
import { FaArrowUp, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/sagaragarwal'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/sagaragarwal'
    },
    {
      name: 'LeetCode',
      icon: <FaCode />,
      url: 'https://leetcode.com/sagaragarwal'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sagar Agarwal</h3>
            <p>Blockchain & Safety App Developer</p>
            <p>Passionate about creating innovative solutions that make a difference.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: tnbtsper30@gmail.com</p>
            <p>Location: Jaipur, Rajasthan, India</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2024 Sagar Agarwal. All rights reserved.</p>
            <p>Built with React.js and ❤️</p>
          </div>
          
          <button className="back-to-top" onClick={scrollToTop} title="Back to top">
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 