import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>IVÁN MORA</h3>
            <p>Estudiante de Ingeniería en Sistemas Computacionales</p>
          </div>
          
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <ul>
              <li>Email: ivan@ejemplo.com</li>
              <li>Teléfono: +52 123 456 7890</li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Redes Sociales</h4>
            <div className="social-icons">
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
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iván Mora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;