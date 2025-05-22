import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CORREGIDO: Agregar preventDefault para evitar que se agregue el hash a la URL
  const scrollTo = (event, id) => {
    event.preventDefault(); // Esto previene el comportamiento por defecto del enlace
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadCV = (event) => {
    event.preventDefault(); // También aquí para consistencia
    window.open('/docs/MORA-IVAN-CV.pdf', '_blank');
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">IM</span>
          <span className="logo-circuit">⚡</span>
        </div>
        
        <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>
        
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            {/* CORREGIDO: Agregar href="#" y pasar event como parámetro */}
            <a href="#" onClick={(e) => scrollTo(e, 'home')}>Inicio</a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollTo(e, 'about')}>Sobre mí</a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollTo(e, 'projects')}>Proyectos</a>
          </li>
          <li>
            <a href="#" onClick={(e) => scrollTo(e, 'skills')}>Habilidades</a>
          </li>
          <li>
            <a href="#" onClick={handleDownloadCV}>Descargar CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;