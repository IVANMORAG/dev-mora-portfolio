import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h3>IVÁN MORA</h3>
          <p className="subtitle">Estudiante de Ingeniería en Sistemas</p>
          
          <div className="contact-info">
            <p>ivan@ejemplo.com</p>
            <p>+52 123 456 7890</p>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/ivan-morag/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/linkedin/white" alt="LinkedIn"/>
          </a>
          <a href="https://www.instagram.com/ivn_mg/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/instagram/white" alt="Instagram"/>
          </a>
          <a href="https://x.com/Ivn_moraG" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/x/white" alt="X (Twitter)"/>
          </a>
          <a href="https://www.tiktok.com/@ivan_morag" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/tiktok/white" alt="TikTok"/>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Iván Mora</p>
      </div>
    </footer>
  );
};

export default Footer;