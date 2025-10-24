import { FaCode, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = ({ currentTheme }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/SagarAgarwal2',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/sagar-agarwal-212930283/',
      color: '#0077b5'
    },
    {
      name: 'LeetCode',
      icon: <FaCode />,
      url: 'https://leetcode.com/u/tnbtsper30/',
      color: '#ffa116'
    }
  ];

  return (
    <section id="home" className={`home theme-${currentTheme}`}>
      <div className="home-container">
        <div className="hero-content">
          <div className="hero-left" data-aos="fade-right">
            <div className="profile-image-container">
              <img 
                src="/sagar-agarwal.jpg" 
                alt="Sagar Agarwal" 
                className="profile-image"
                onError={(e) => {
                  e.target.src = '/sagar.jpg.jpg';
                }}
              />
              <div className="profile-glow"></div>
            </div>
          </div>
          <div className="hero-right" data-aos="fade-left">
            <h1 className="hero-title">
              Hello. I'm <span className="highlight">Sagar</span>
            </h1>
            <h2 className="hero-subtitle">Software Developer</h2>
            <p className="hero-description">
              CS undergraduate at BIT Mesra. I build secure, scalable apps with a passion for full-stack and mobile development. Let's create something impactful together!
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Got a project?
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.open('/Sagar-Agarwal-Resume.pdf', '_blank')}
              >
                <FaDownload /> My resume
              </button>
            </div>
            <div className="hero-skills">
              <h3 className="skills-title">Skills</h3>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>
            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': link.color }}
                  title={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 