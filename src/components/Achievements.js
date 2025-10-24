import React from 'react';
import { FaAward, FaMedal, FaStar, FaTrophy } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Algorand Hackathon - Top 3",
      description: "Achieved top 3 ranking in the Algorand blockchain hackathon, demonstrating expertise in blockchain development.",
      category: "Blockchain Competition",
      icon: <FaMedal />,
      year: "2024"
    },
    {
      id: 2,
      title: "Saviher",
      description: "Incubated at Bhamasha Techno Hub Jaipur",
      category: "Project Achievement",
      icon: <FaStar />,
      year: "2024"
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Achievements & Recognition</h2>
          <p>Milestones and accomplishments in my journey</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3>{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                
                <p className="achievement-description">{achievement.description}</p>
                
                <div className="achievement-category">
                  <span>{achievement.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-summary" data-aos="fade-up">
          <div className="summary-stats">
            <div className="stat-item">
              <h3>2+</h3>
              <p>Hackathon Finalist</p>
            </div>
            <div className="stat-item">
              <h3>Top 3%</h3>
              <p>Algorand Ranking</p>
            </div>
            <div className="stat-item">
              <h3>4+</h3>
              <p>Major Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 