import React from 'react';
import '../styles/SkillsSection.css';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Tailwind', 'Redux'],
      description: 'Interfaces modernas con enfoque en performance y UX'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST'],
      description: 'APIs escalables y arquitecturas limpias'
    },
    {
      title: 'Bases de Datos',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL'],
      description: 'Modelado eficiente y consultas optimizadas'
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Kubernetes'],
      description: 'Despliegue y automatización en la nube'
    },
    {
      title: 'Data Science',
      skills: ['TensorFlow', 'Pandas', 'Numpy', 'Scikit-learn'],
      description: 'Análisis de datos y modelos predictivos'
    },
    {
      title: 'Seguridad',
      skills: ['OWASP', 'Pentesting', 'JWT', 'Criptografía'],
      description: 'Protección de sistemas y hardening'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="category-card">
              <h3>{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;