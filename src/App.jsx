// App.jsx
import { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Carga diferida de componentes pesados
const CircuitoPresentacion = lazy(() => import('./components/CircuitoPresentacion'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({
    home: true,
    about: false,
    projects: false,
    skills: false,
    contact: false
  });

  // Simular tiempo de carga inicial - con cleanup para evitar problemas de memoria
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Observer para cargar secciones cuando sean visibles - simplificado para evitar problemas
  useEffect(() => {
    if (isLoading) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => ({
            ...prev,
            [sectionId]: true
          }));
          // Una vez que la sección es visible, dejamos de observarla
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todas las secciones excepto home que ya está visible
    const sections = document.querySelectorAll('section[id]:not(#home)');
    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, [isLoading]);

  return (
    <div className="app-container">
      <Navbar /> 
      
      <main className="main-content">
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">Cargando portfolio...</div>
          </div>
        ) : (
          <>
            <section id="home">
              <Suspense fallback={<div className="section-loading">Cargando...</div>}>
                <CircuitoPresentacion />
              </Suspense>
            </section>
            
            <section id="about" className="section-container">
              {visibleSections.about ? (
                <Suspense fallback={<div className="section-loading">Cargando...</div>}>
                  <AboutSection />
                </Suspense>
              ) : (
                <div className="section-placeholder">
                  <h2>Sobre mí</h2>
                  <p>Próximamente...</p>
                </div>
              )}
            </section>
            
            <section id="projects" className="section-container">
              {visibleSections.projects ? (
                <Suspense fallback={<div className="section-loading">Cargando...</div>}>
                  <ProjectsSection />
                </Suspense>
              ) : (
                <div className="section-placeholder">
                  <h2>Proyectos</h2>
                  <p>Próximamente...</p>
                </div>
              )}
            </section>
            
            <section id="skills" className="section-container">
              {visibleSections.skills ? (
                <Suspense fallback={<div className="section-loading">Cargando...</div>}>
                  <SkillsSection />
                </Suspense>
              ) : (
                <div className="section-placeholder">
                  <h2>Habilidades</h2>
                  <p>Próximamente...</p>
                </div>
              )}
            </section>
            
            <section id="contact" className="section-container">
              {visibleSections.contact ? (
                <Suspense fallback={<div className="section-loading">Cargando...</div>}>
                  <ContactSection />
                </Suspense>
              ) : (
                <div className="section-placeholder">
                  <h2>Contacto</h2>
                  <p>Próximamente...</p>
                </div>
              )}
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;