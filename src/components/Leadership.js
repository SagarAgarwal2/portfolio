import React from 'react';
import { FaCalendarAlt, FaChalkboardTeacher, FaHandshake, FaUsers } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';
import './Leadership.css';

const Leadership = () => {
  const leadershipRoles = [
    {
      id: 1,
      title: "Cyber Security Lead",
      organization: "Google Developer Group",
      duration: "2023 - Present",
      description: "Leading and coordinating Google Developer Group activities, organizing tech events, workshops, and community building initiatives.",
      responsibilities: [
        "Organize monthly tech meetups and workshops",
        "Coordinate with Google Developer Relations team",
        "Mentor junior developers and students",
        "Plan and execute hackathons and coding competitions"
      ],
      impact: "2000+ students engaged",
      icon: <SiGoogle />
    },
    {
      id: 2,
      title: "Event Organizer & Community Builder",
      organization: "Tech Community",
      duration: "2022 - Present",
      description: "Successfully organized multiple large-scale tech events, hackathons, and workshops reaching thousands of students.",
      responsibilities: [
        "Plan and execute tech conferences and workshops",
        "Manage event logistics and participant coordination",
        "Build partnerships with industry professionals",
        "Create engaging content and learning materials"
      ],
      impact: "2000+ students reached",
      icon: <FaCalendarAlt />
    }
  ];

  const skills = [
    {
      name: "Team Leadership",
      description: "Leading diverse teams and coordinating group activities"
    },
    {
      name: "Event Management",
      description: "Planning and executing large-scale tech events"
    },
    {
      name: "Public Speaking",
      description: "Presenting technical content to large audiences"
    },
    {
      name: "Community Building",
      description: "Building and nurturing tech communities"
    }
  ];

  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Leadership & Community</h2>
          <p>Making an impact through community leadership and event organization</p>
        </div>

        <div className="leadership-content">
          <div className="leadership-roles">
            {leadershipRoles.map((role, index) => (
              <div 
                key={role.id} 
                className="leadership-card"
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="role-header">
                  <div className="role-icon">
                    {role.icon}
                  </div>
                  <div className="role-info">
                    <h3>{role.title}</h3>
                    <p className="organization">{role.organization}</p>
                    <span className="duration">{role.duration}</span>
                  </div>
                </div>

                <div className="role-content">
                  <p className="role-description">{role.description}</p>
                  
                  <div className="responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {role.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="impact-metric">
                    <FaUsers />
                    <span>{role.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="leadership-skills" data-aos="fade-up">
            <h3>Leadership Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">
                    {skill.name === "Team Leadership" && <FaUsers />}
                    {skill.name === "Event Management" && <FaCalendarAlt />}
                    {skill.name === "Public Speaking" && <FaChalkboardTeacher />}
                    {skill.name === "Community Building" && <FaHandshake />}
                  </div>
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="leadership-impact" data-aos="fade-up">
            <h3>Community Impact</h3>
            <div className="impact-stats">
              <div className="stat">
                <h4>2000+</h4>
                <p>Students Engaged</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Events Organized</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Workshops Conducted</p>
              </div>
              <div className="stat">
                <h4>100+</h4>
                <p>Students Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership; 