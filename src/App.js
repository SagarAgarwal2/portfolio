import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import About from './components/About';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Leadership from './components/Leadership';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [currentTheme, setCurrentTheme] = useState('ocean'); // ocean, sunset, forest, galaxy, minimal

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const themes = {
    ocean: {
      name: 'Ocean Blue',
      className: 'theme-ocean'
    },
    sunset: {
      name: 'Sunset Orange',
      className: 'theme-sunset'
    },
    forest: {
      name: 'Forest Green',
      className: 'theme-forest'
    },
    galaxy: {
      name: 'Purple Galaxy',
      className: 'theme-galaxy'
    },
    minimal: {
      name: 'Minimal Light',
      className: 'theme-minimal'
    }
  };

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  return (
    <div className={`App ${themes[currentTheme].className}`}>
      <Navbar currentTheme={currentTheme} changeTheme={changeTheme} themes={themes} />
      <Home currentTheme={currentTheme} />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
