import React from 'react';
import { FaCode, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/sagaragarwal',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/sagaragarwal',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      icon: <FaCode />,
      url: 'https://leetcode.com/sagaragarwal',
      color: '#ffa116'
    }
  ];

  return (
    <section id="home" className="home dark-hero">
      <div className="home-container hero-flex">
        <div className="hero-left" data-aos="fade-right">
          <img src="/sagar-agarwal.jpg" alt="Sagar Agarwal" className="hero-photo" />
        </div>
        <div className="hero-right" data-aos="fade-left">
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Sagar Agarwal</span>
          </h1>
          <h2 className="home-subtitle">
            Blockchain & Safety App Developer
          </h2>
          <p className="home-description">
            CS undergraduate at BIT Mesra (Jaipur). I build secure, scalable apps with a passion for blockchain, full-stack, and mobile development. Let's create something impactful together!
          </p>
          <div className="home-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work
            </button>
          </div>
          <div className="home-social-row">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-row-link"
                style={{ '--hover-color': link.color }}
                title={link.name}
              >
                <span className="social-icon">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 