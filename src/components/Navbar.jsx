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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
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
            <a onClick={() => scrollTo('home')}>Inicio</a>
          </li>
          <li>
            <a onClick={() => scrollTo('about')}>Sobre mí</a>
          </li>
          <li>
            <a onClick={() => scrollTo('projects')}>Proyectos</a>
          </li>
          <li>
            <a onClick={() => scrollTo('skills')}>Habilidades</a>
          </li>
          <li>
            <a onClick={() => scrollTo('contact')}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;