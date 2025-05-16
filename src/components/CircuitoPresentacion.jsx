import { useEffect } from 'react';
import '../styles/CircuitoPresentacion.css';
import circuito from '../assets/circuito.svg';

const CircuitoPresentacion = () => {
  useEffect(() => {
    const adjustEffect = () => {
      const svg = document.querySelector('.circuit-svg');
      const energyFlow = document.querySelector('.energy-flow');
      if (svg && energyFlow) {
        energyFlow.style.height = `${svg.offsetHeight}px`;
      }
    };

    window.addEventListener('load', adjustEffect);
    window.addEventListener('resize', adjustEffect);

    return () => {
      window.removeEventListener('load', adjustEffect);
      window.removeEventListener('resize', adjustEffect);
    };
  }, []);

  return (
    <div className="container">
      {/* CAPA 1: SVG base */}
      <img src={circuito} className="circuit-svg" alt="Circuito electrónico" />

      {/* CAPA 2: Efecto de flujo */}
      <div className="energy-flow">
        <div className="energy-wave" style={{ animationDelay: '0s' }}></div>
        <div className="energy-wave" style={{ animationDelay: '2s' }}></div>
        <div className="energy-wave" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* CAPA 3: Tarjeta de presentación */}
      <div className="presentation-card">
        <h1>IVÁN MORA</h1>
        <span className="title">ESTUDIANTE INGENIERIA EN SISTEMAS</span>
      </div>
    </div>
  );
};

export default CircuitoPresentacion;