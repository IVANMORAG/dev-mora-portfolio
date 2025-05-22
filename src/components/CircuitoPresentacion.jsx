import { useEffect, useRef, useState } from 'react';
import '../styles/CircuitoPresentacion.css';

const CircuitoPresentacion = () => {
  const energyFlowRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    const adjustSize = () => {
      if (energyFlowRef.current) {
        energyFlowRef.current.style.height = `${window.innerHeight * 0.8}px`;
      }
    };

    adjustSize();
    
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(adjustSize, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [isLoaded]);

  return (
    <div className="main-wrapper">
      <div className="main-container">

        <div className={`circuit-container ${isLoaded ? 'loaded' : ''}`}>
          <div className="energy-flow" ref={energyFlowRef}>
            <div className="energy-wave" style={{ animationDelay: '0s' }} />
            <div className="energy-wave" style={{ animationDelay: '4s' }} />
          </div>

          <div className="presentation-card">
            <h1>IVÁN MORA</h1>
            <span className="title">ESTUDIANTE ING EN SISTEMAS COMPUTACIONALES</span>
          </div>
        </div>

        <div className="specialties-container">
          <div className="specialties-tags">
            <span className="specialty-tag">Desarrollo Web</span>
            <span className="specialty-tag">Machine Learning</span>
            <span className="specialty-tag">Seguridad Informática</span>
            <span className="specialty-tag">Bases de Datos</span>
            <span className="specialty-tag">DevOps</span>
          </div>
          
          {/* Botones de acción */}
          <div className="action-buttons">
            <a 
              href="/docs/MORA-IVAN-CV.pdf" 
              className="action-button"
              download="CV-Ivan-Mora.pdf"
            >
              Descargar CV
            </a>
            <a href="#skills" className="action-button">Mis Habilidades</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CircuitoPresentacion;