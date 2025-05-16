import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Carga perezosa solo del componente existente
const CircuitoPresentacion = lazy(() => import('./components/CircuitoPresentacion'));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Suspense fallback={
          <div className="loading-container">
            <div className="loading-text">Cargando portfolio...</div>
          </div>
        }>
          <section id="home">
            <CircuitoPresentacion />
          </section>
          
          {/* Secciones temporales vacías */}
          <section id="about" className="section-placeholder">
            <h2>Sobre mí</h2>
            <p>Próximamente...</p>
          </section>
          
          <section id="projects" className="section-placeholder">
            <h2>Proyectos</h2>
            <p>Próximamente...</p>
          </section>
          
          <section id="skills" className="section-placeholder">
            <h2>Habilidades</h2>
            <p>Próximamente...</p>
          </section>
          
          <section id="contact" className="section-placeholder">
            <h2>Contacto</h2>
            <p>Próximamente...</p>
          </section>
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;