// CircuitoPresentacion.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/CircuitoPresentacion.css';

const CircuitoPresentacion = () => {
  const svgRef = useRef(null);
  const energyFlowRef = useRef(null);
  const [circuitoSvg, setCircuitoSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carga diferida de la imagen SVG
  useEffect(() => {
    // Importamos el SVG de forma dinámica
    import('../assets/circuito.svg')
      .then(svgModule => {
        setCircuitoSvg(svgModule.default);
        
        // Simular un breve retraso antes de mostrar para evitar parpadeos
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
      })
      .catch(err => console.error('Error al cargar el SVG:', err));
  }, []);

  // Ajustar tamaño del efecto de energía
  useEffect(() => {
    if (!isLoaded) return;
    
    const adjustSize = () => {
      if (svgRef.current && energyFlowRef.current) {
        energyFlowRef.current.style.height = `${svgRef.current.offsetHeight}px`;
      }
    };

    // Ajustar después de carga y en cada resize
    adjustSize();
    
    // Debounce para el evento resize
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
          {circuitoSvg && (
            <>
              <img 
                ref={svgRef}
                src={circuitoSvg} 
                className="circuit-svg" 
                alt="Circuito electrónico" 
                loading="lazy"
              />
              
              <div className="energy-flow" ref={energyFlowRef}>
                {/* Reducimos a 2 ondas para mejorar rendimiento */}
                <div className="energy-wave" style={{ animationDelay: '0s' }} />
                <div className="energy-wave" style={{ animationDelay: '4s' }} />
              </div>
            </>
          )}

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