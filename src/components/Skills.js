import React from 'react';
import {
  FaAws,
  FaCode,
  FaCubes,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLink,
  FaNodeJs,
  FaObjectGroup,
  FaPython,
  FaReact,
  FaSitemap
} from 'react-icons/fa';
import { SiAlgorand, SiFirebase, SiFlutter, SiPython } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "Java", icon: <FaJava />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 85 },
        { name: "HTML/CSS", icon: <FaHtml5 />, level: 80 }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "Flutter", icon: <SiFlutter />, level: 88 },
        { name: "React.js", icon: <FaReact />, level: 82 },
        { name: "Node.js", icon: <FaNodeJs />, level: 75 },
        { name: "Tkinter", icon: <SiPython />, level: 85 }
      ]
    },
    {
      name: "Backend & Databases",
      skills: [
        { name: "Firebase", icon: <SiFirebase />, level: 85 },
        { name: "REST APIs", icon: <FaLink />, level: 80 },
        { name: "MongoDB", icon: <FaDatabase />, level: 75 }
      ]
    },
    {
      name: "Blockchain & Emerging Tech",
      skills: [
        { name: "Blockchain", icon: <FaCubes />, level: 85 },
        { name: "Algorand", icon: <SiAlgorand />, level: 80 },
        { name: "Smart Contracts", icon: <FaCode />, level: 78 }
      ]
    },
    {
      name: "Core Concepts",
      skills: [
        { name: "OOP", icon: <FaObjectGroup />, level: 90 },
        { name: "Data Structures", icon: <FaSitemap />, level: 85 },
        { name: "Algorithms", icon: <FaCode />, level: 80 }
      ]
    },
    {
      name: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85 },
        { name: "Docker", icon: <FaDocker />, level: 70 },
        { name: "AWS", icon: <FaAws />, level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Skills & Technologies</h2>
          <p>My technical expertise and proficiency levels</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category" data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item" data-aos="zoom-in" data-aos-delay={skillIndex * 50}>
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary" data-aos="fade-up">
          <h3>What I Bring to the Table</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <h4>Full-Stack Development</h4>
              <p>End-to-end application development from frontend to backend</p>
            </div>
            <div className="summary-item">
              <h4>Mobile Development</h4>
              <p>Cross-platform mobile applications using Flutter</p>
            </div>
            <div className="summary-item">
              <h4>Blockchain Solutions</h4>
              <p>Smart contracts and decentralized applications</p>
            </div>
            <div className="summary-item">
              <h4>Problem Solving</h4>
              <p>Strong algorithmic thinking and data structure knowledge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 