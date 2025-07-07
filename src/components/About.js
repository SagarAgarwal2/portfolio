import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaUniversity } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Birla Institute of Technology, Mesra",
    location: "Off Campus - Jaipur",
    duration: "2023 - 2027"
  };

  const experience = [
    {
      title: "Full-Stack Development",
      description: "Hands-on experience building complete web applications with modern technologies"
    },
    {
      title: "Flutter Development",
      description: "Mobile app development using Flutter framework for cross-platform solutions"
    },
    {
      title: "Blockchain Development",
      description: "Smart contract development and DApp creation using blockchain technologies"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Computer Science undergraduate at Birla Institute of Technology, 
              Mesra, with a strong foundation in software development and 
              a keen interest in emerging technologies.
            </p>
            <p>
              My journey in technology began with a curiosity to solve real-world problems 
              through innovative software solutions. I specialize in full-stack development, 
              Flutter mobile applications, and blockchain technology, with a particular focus 
              on safety applications and decentralized systems.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest industry 
              trends. My goal is to create impactful applications that make a difference in 
              people's lives while contributing to the advancement of technology.
            </p>
          </div>

          <div className="about-details" data-aos="fade-left">
            <div className="education-card">
              <div className="card-header">
                <FaGraduationCap className="card-icon" />
                <h4>Education</h4>
              </div>
              <div className="card-content">
                <h5>{education.degree}</h5>
                <p className="institution">
                  <FaUniversity className="icon" />
                  {education.institution}
                </p>
                <p className="location">{education.location}</p>
                <p className="duration">{education.duration}</p>
              </div>
            </div>

            <div className="experience-section">
              <h4>Areas of Expertise</h4>
              <div className="experience-items">
                {experience.map((item, index) => (
                  <div key={index} className="experience-item">
                    <FaLaptopCode className="experience-icon" />
                    <div className="experience-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 