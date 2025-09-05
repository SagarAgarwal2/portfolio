import React, { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes, FaPalette } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ currentTheme, changeTheme, themes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const handleThemeChange = (themeName) => {
    changeTheme(themeName);
    setIsThemeMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span onClick={() => scrollToSection('home')}>Sagar Agarwal</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <div
              key={item.id}
              className="nav-item"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="nav-actions">
          <div className="theme-selector">
            <button className="theme-toggle" onClick={toggleThemeMenu} title="Change Theme">
              <FaPalette />
            </button>
            
            {isThemeMenuOpen && (
              <div className="theme-menu">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                    onClick={() => handleThemeChange(key)}
                  >
                    {theme.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 