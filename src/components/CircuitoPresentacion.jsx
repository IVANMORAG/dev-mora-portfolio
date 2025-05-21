import { useEffect, useRef, useState } from 'react';
import '../styles/CircuitoPresentacion.css';

const CircuitoPresentacion = () => {
  const energyFlowRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulamos la carga para la animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Ajustar tamaño del efecto de energía
  useEffect(() => {
    if (!isLoaded) return;
    
    const adjustSize = () => {
      if (energyFlowRef.current) {
        // Ajustamos a un tamaño fijo o basado en el viewport
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
        {/* Contenedor del circuito con fade-in */}
        <div className={`circuit-container ${isLoaded ? 'loaded' : ''}`}>
          {/* Eliminamos el img del SVG y mantenemos solo el efecto de energía */}
          <div className="energy-flow" ref={energyFlowRef}>
            <div className="energy-wave" style={{ animationDelay: '0s' }} />
            <div className="energy-wave" style={{ animationDelay: '4s' }} />
          </div>

          <div className="presentation-card">
            <h1>IVÁN MORA</h1>
            <span className="title">ESTUDIANTE ING EN SISTEMAS COMPUTACIONALES</span>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="social-icons-container">
          <a href="https://www.linkedin.com/in/ivan-morag/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img 
              src="https://raw.githubusercontent.com/gauravghongde/social-icons/master/SVG/White/LinkedIN_white.svg" 
              width="24" 
              height="24"
              alt="LinkedIn"
              loading="lazy"
            />
          </a>
          <a href="https://www.instagram.com/ivn_mg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img 
              src="https://cdn.simpleicons.org/instagram/white" 
              width="24" 
              height="24"
              alt="Instagram"
              loading="lazy"
            />
          </a>
          <a href="https://x.com/Ivn_moraG" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <img 
              src="https://cdn.simpleicons.org/x/white" 
              width="24" 
              height="24"
              alt="X (Twitter)"
              loading="lazy"
            />
          </a>
          <a href="https://www.tiktok.com/@ivan_morag" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img 
              src="https://cdn.simpleicons.org/tiktok/white" 
              width="24" 
              height="24"
              alt="TikTok"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CircuitoPresentacion;