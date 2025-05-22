import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
          <span className="terminal-title">ivan@portfolio:~</span>
        </div>
        
        <div className="terminal-body">
          <p className="command">$ cat sobre_mi.txt</p>
          <h2>Construyendo el Futuro Digital</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                Como estudiante de Ingeniería en Sistemas, me especializo en desarrollar soluciones tecnológicas innovadoras 
                con enfoque en seguridad y eficiencia.
              </p>
              
              <div className="expertise">
                <h3>Áreas de Enfoque:</h3>
                <ul>
                  <li><span>>_</span> Desarrollo Full-Stack (MERN Stack)</li>
                  <li><span>>_</span> Seguridad Ofensiva (Pentesting básico)</li>
                  <li><span>>_</span> Automatización con Python</li>
                  <li><span>>_</span> Arquitectura Cloud (AWS Fundamentals)</li>
                </ul>
              </div>
            </div>
            
            <div className="stats">
              <div className="stat-box">
                <div className="stat-number">15+</div>
                <div className="stat-label">Proyectos completados</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">5+</div>
                <div className="stat-label">Certificaciones</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">100%</div>
                <div className="stat-label">Autodidacta</div>
              </div>
            </div>
          </div>
          
          <p className="command">$ iniciando_desarrollo --último_proyecto</p>
          <p className="typing-animation">> Compilando código...</p>
          <p className="typing-animation">> Optimizando rendimiento...</p>
          <p className="typing-animation">> Desplegando solución...</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;