import React from 'react';
import { FaCar, FaCertificate, FaCreditCard, FaShieldAlt } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Ford EV Simulation",
      description: "Comprehensive training in electric vehicle simulation and modeling techniques, understanding EV systems and performance optimization.",
      issuer: "Ford Motor Company",
      category: "Automotive Technology",
      icon: <FaCar />,
      year: "2024",
      verified: true
    },
    {
      id: 2,
      title: "AIG Shields Up Cybersecurity",
      description: "Advanced cybersecurity training covering threat detection, incident response, and security best practices for enterprise environments.",
      issuer: "AIG",
      category: "Cybersecurity",
      icon: <FaShieldAlt />,
      year: "2024",
      verified: true
    },
    {
      id: 3,
      title: "Mastercard Cybersecurity",
      description: "Specialized cybersecurity program focused on financial services security, payment systems protection, and fraud prevention.",
      issuer: "Mastercard (Forage)",
      category: "Financial Security",
      icon: <FaCreditCard />,
      year: "2024",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Certifications</h2>
          <p>Professional certifications and specialized training</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certification-card"
              data-aos="fade-up" 
              data-aos-delay={index * 200}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  {cert.icon}
                </div>
                <div className="certification-badge">
                  <FaCertificate />
                </div>
              </div>

              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-details">
                  <div className="detail-item">
                    <span className="label">Issuer:</span>
                    <span className="value">{cert.issuer}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Category:</span>
                    <span className="value">{cert.category}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Year:</span>
                    <span className="value">{cert.year}</span>
                  </div>
                </div>

                {cert.verified && (
                  <div className="verification-badge">
                    <span>✓ Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-summary" data-aos="fade-up">
          <h3>Continuous Learning</h3>
          <p>
            I believe in staying updated with the latest industry trends and technologies. 
            These certifications demonstrate my commitment to professional development and 
            expertise in emerging fields like cybersecurity and automotive technology.
          </p>
          <div className="learning-areas">
            <div className="area">
              <FaShieldAlt />
              <span>Cybersecurity</span>
            </div>
            <div className="area">
              <FaCar />
              <span>Automotive Tech</span>
            </div>
            <div className="area">
              <FaCreditCard />
              <span>Financial Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 