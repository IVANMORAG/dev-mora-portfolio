import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              ¡Hola! Soy Iván Mora, estudiante de Ingeniería en Sistemas Computacionales apasionado por el desarrollo de software y la inteligencia artificial.
            </p>
            <p>
              Mi enfoque actual está en construir soluciones tecnológicas innovadoras que combinen desarrollo web, machine learning y buenas prácticas de seguridad informática.
            </p>
            <p>
              Como estudiante, he desarrollado proyectos prácticos que aplican conceptos avanzados de programación, arquitectura de software y análisis de datos.
            </p>
            <div className="education">
              <h3>Formación Académica</h3>
              <ul>
                <li>Ingeniería en Sistemas Computacionales - Actual</li>
                <li>Certificaciones en Desarrollo Web y Machine Learning</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="image-frame">
              {/* Reemplaza con tu imagen personal */}
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;