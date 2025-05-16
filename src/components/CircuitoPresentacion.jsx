import { useEffect, useRef } from 'react';
import '../styles/CircuitoPresentacion.css';
import circuito from '../assets/circuito.svg';

const CircuitoPresentacion = () => {
  const svgRef = useRef(null);
  const energyFlowRef = useRef(null);

  useEffect(() => {
    const adjustSize = () => {
      if (svgRef.current && energyFlowRef.current) {
        energyFlowRef.current.style.height = `${svgRef.current.offsetHeight}px`;
      }
    };

    adjustSize();
    window.addEventListener('resize', adjustSize);

    return () => {
      window.removeEventListener('resize', adjustSize);
    };
  }, []);

  return (
    <div className="main-wrapper tight-container"> {/* Nuevo contenedor wrapper */}
      <div className="main-container">
        {/* Contenedor del circuito */}
        <div className="circuit-container">
          <img 
            ref={svgRef}
            src={circuito} 
            className="circuit-svg" 
            alt="Circuito electrónico" 
          />
          
          <div className="energy-flow" ref={energyFlowRef}>
            <div className="energy-wave" style={{ animationDelay: '0s' }} />
            <div className="energy-wave" style={{ animationDelay: '2s' }} />
            <div className="energy-wave" style={{ animationDelay: '4s' }} />
          </div>

          <div className="presentation-card">
            <h1>IVÁN MORA</h1>
            <span className="title">ESTUDIANTE ING EN SISTEMAS COMPUTACIONALES</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="social-icons-container">
          <a href="https://www.linkedin.com/in/ivan-morag/" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/White/LinkedIN_white.svg" width="24" alt="LinkedIn"/>
          </a>
          <a href="https://www.instagram.com/ivn_mg/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/instagram/white" width="24" alt="Instagram"/>
          </a>
          <a href="https://x.com/Ivn_moraG" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/x/white" width="24" alt="X (Twitter)"/>
          </a>
          <a href="https://www.tiktok.com/@ivan_morag" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/tiktok/white" width="24" alt="TikTok"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CircuitoPresentacion;