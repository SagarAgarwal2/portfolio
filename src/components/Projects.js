import React from 'react';
import {
    FaBell,
    FaCubes,
    FaExternalLinkAlt,
    FaGithub,
    FaLeaf,
    FaMapMarkerAlt,
    FaMobile,
    FaUsers
} from 'react-icons/fa';
import { SiAlgorand, SiFirebase, SiFlutter, SiReact } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SheShield",
      subtitle: "Women's Safety App",
      description: "A comprehensive women's safety application with SOS alerts, real-time location tracking, and emergency contact management. Built with Flutter and Firebase backend, serving 100+ active users.",
      features: [
        "SOS Emergency Alerts",
        "Real-time Location Tracking",
        "Emergency Contact Management",
        "Firebase Backend Integration",
        "100+ Active Users"
      ],
      techStack: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Dart", icon: <FaMobile /> },
        { name: "Google Maps", icon: <FaMapMarkerAlt /> }
      ],
      github: "https://github.com/sagaragarwal/sheshield",
      live: null,
      image: "sheshield-preview.jpg",
      category: "Mobile App"
    },
    {
      id: 2,
      title: "Solar-Chain",
      subtitle: "Peer-to-Peer Energy Trading",
      description: "A decentralized application for peer-to-peer energy trading using Algorand blockchain. Smart contracts enable secure energy transactions between producers and consumers. Finalist in 3rd round hackathon.",
      features: [
        "Algorand Smart Contracts",
        "Peer-to-Peer Trading",
        "Blockchain-based DApp",
        "Energy Transaction Management",
        "Hackathon Finalist"
      ],
      techStack: [
        { name: "Algorand", icon: <SiAlgorand /> },
        { name: "React", icon: <SiReact /> },
        { name: "Blockchain", icon: <FaCubes /> },
        { name: "Smart Contracts", icon: <FaLeaf /> }
      ],
      github: "https://github.com/sagaragarwal/solar-chain",
      live: null,
      image: "solar-chain-preview.jpg",
      category: "Blockchain DApp"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Featured Projects</h2>
          <p>Some of my recent work and innovations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card" 
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="View on GitHub"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h5>Key Features:</h5>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  <h5>Tech Stack:</h5>
                  <div className="tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <div key={techIndex} className="tech-item" title={tech.name}>
                        <span className="tech-icon">{tech.icon}</span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <div className="project-stats">
                  {project.id === 1 && (
                    <div className="stat">
                      <FaUsers />
                      <span>100+ Users</span>
                    </div>
                  )}
                  {project.id === 2 && (
                    <div className="stat">
                      <FaBell />
                      <span>Hackathon Finalist</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta" data-aos="fade-up">
          <p>Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/sagaragarwal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 