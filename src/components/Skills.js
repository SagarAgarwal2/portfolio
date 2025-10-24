import {
  FaAws,
  FaCode,
  FaCubes,
  FaDatabase,
  FaDocker,
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
import { SiAlgorand, SiFirebase, SiFlutter } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const allSkills = [
    // Programming Languages
    { name: "Python", icon: <FaPython />, category: "Language" },
    { name: "Java", icon: <FaJava />, category: "Language" },
    { name: "JavaScript", icon: <FaJs />, category: "Language" },
    { name: "HTML/CSS", icon: <FaHtml5 />, category: "Language" },

    // Frameworks & Libraries
    { name: "Flutter", icon: <SiFlutter />, category: "Framework" },
    { name: "React.js", icon: <FaReact />, category: "Framework" },
    { name: "Node.js", icon: <FaNodeJs />, category: "Framework" },

    // Backend & Databases
    { name: "Firebase", icon: <SiFirebase />, category: "Backend" },
    { name: "REST APIs", icon: <FaLink />, category: "Backend" },
    { name: "MongoDB", icon: <FaDatabase />, category: "Database" },

    // Blockchain
    { name: "Blockchain", icon: <FaCubes />, category: "Blockchain" },
    { name: "Algorand", icon: <SiAlgorand />, category: "Blockchain" },
    { name: "Smart Contracts", icon: <FaCode />, category: "Blockchain" },

    // Core Concepts
    { name: "OOP", icon: <FaObjectGroup />, category: "Core" },
    { name: "Data Structures", icon: <FaSitemap />, category: "Core" },
    { name: "Algorithms", icon: <FaCode />, category: "Core" },

    // Tools
    { name: "Docker", icon: <FaDocker />, category: "Tool" },
    { name: "AWS", icon: <FaAws />, category: "Cloud" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Skills & Technologies</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-content">
          <div className="unified-skills-grid" data-aos="fade-up">
            {allSkills.map((skill, index) => (
              <div key={index} className="skill-item" data-aos="zoom-in" data-aos-delay={index * 30}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
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