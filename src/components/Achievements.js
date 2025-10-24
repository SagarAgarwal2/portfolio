import { FaMedal, FaStar, FaTrophy } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "SaviHer - Women's Safety App",
      description: "Successfully incubated at Bhamasha Techno Hub Jaipur with 100+ active users. Comprehensive safety application with real-time tracking and emergency features.",
      category: "Startup Incubation",
      icon: <FaStar />,
      year: "2024"
    },
    {
      id: 2,
      title: "Smart Product Pricing - ML Challenge",
      description: "Achieved 54% SMAPE ranking in top 2000 out of 7000+ teams in ML Challenge 2025. Built hybrid ensemble model with advanced feature engineering.",
      category: "Machine Learning Competition",
      icon: <FaTrophy />,
      year: "2025"
    },
    {
      id: 3,
      title: "Algorand Hackathon - Top 3",
      description: "Achieved top 3 ranking in the Algorand blockchain hackathon, demonstrating expertise in blockchain development with Solar-Chain project.",
      category: "Blockchain Competition",
      icon: <FaMedal />,
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
              <h3>100+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>Top 2000</h3>
              <p>ML Challenge Ranking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements; 