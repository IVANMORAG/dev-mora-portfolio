import React from 'react';
import '../styles/SkillsSection.css';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'JavaScript', level: 80, icon: '📜' },
    { name: 'React', level: 75, icon: '⚛️' },
    { name: 'Node.js', level: 70, icon: '🟢' },
    { name: 'TensorFlow', level: 75, icon: '🧠' },
    { name: 'Docker', level: 70, icon: '🐳' },
    { name: 'MongoDB', level: 65, icon: '🍃' },
    { name: 'Git', level: 80, icon: '🔀' },
    { name: 'Linux', level: 75, icon: '🐧' },
    { name: 'Flask/FastAPI', level: 70, icon: '🚀' },
    { name: 'HTML/CSS', level: 85, icon: '🎨' },
    { name: 'SQL', level: 70, icon: '🗃️' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
                <span className="progress-text">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;