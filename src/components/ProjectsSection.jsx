import React, { useState, useMemo, useCallback, useEffect } from 'react';
import '../styles/ProjectsSection.css';

// Datos de proyectos (mantenidos fuera del componente para evitar recreaciones)
const projectsData = [
  {
    id: 1,
    title: "MRI TumorDetector AI",
    artist: "Python, Tensorflow & FastAPI",
    description: "Detección de tumores cerebrales con IA: React, FastAPI, Docker y ngrok.",
    icon: "🌐",
    coverGif: "https://raw.githubusercontent.com/IVANMORAG/MRITumorDetectorAI/main/recursos/MRI-Detector.gif",
    tools: "React, TailwindCSS, Framer Motion",
    link: "https://example.com/portfolio"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    artist: "React & Node.js",
    description: "Panel de administración para tiendas online con análisis de datos",
    icon: "📊",
    coverGif: "https://media.giphy.com/media/3ohs7HdhQA4ffttvrO/giphy.gif",
    tools: "React, Node.js, MongoDB, Express",
    link: "https://example.com/dashboard"
  },
  {
    id: 3,
    title: "App de Gestión de Tareas",
    artist: "React Native",
    description: "Aplicación móvil para organizar tareas con recordatorios",
    icon: "📋",
    coverGif: "https://media.giphy.com/media/l41lJ8ywG1ncm9FXW/giphy.gif",
    tools: "React Native, Firebase, Redux",
    link: "https://example.com/taskapp"
  },
  {
    id: 4,
    title: "Blog de Tecnología",
    artist: "Next.js & GraphQL",
    description: "Blog con artículos sobre programación y tecnología",
    icon: "📝",
    coverGif: "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
    tools: "Next.js, GraphQL, Prisma",
    link: "https://example.com/blog"
  }
];

// Componente de tarjeta de proyecto optimizado
const ProjectCard = React.memo(({ project, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHoveringCover, setIsHoveringCover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Gestión optimizada de eventos
  const handleCardMouseEnter = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handleCoverMouseEnter = useCallback(() => {
    setIsHoveringCover(true);
  }, []);

  const handleCoverMouseLeave = useCallback(() => {
    setIsHoveringCover(false);
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Precarga de la imagen solo cuando la tarjeta es visible
  useEffect(() => {
    if (isVisible && !imageLoaded) {
      const img = new Image();
      img.src = project.coverGif;
      img.onload = handleImageLoad;
    }
  }, [isVisible, imageLoaded, project.coverGif, handleImageLoad]);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${isVisible ? 'visible' : ''}`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <div className="project-cover-wrapper">
        <div
          className={`project-cover ${isHoveringCover ? 'flip' : ''}`}
          onMouseEnter={handleCoverMouseEnter}
          onMouseLeave={handleCoverMouseLeave}
        >
          <div className="cover-inner">
            <div className="cover-front">
              <div className="project-icon neon-effect">{project.icon}</div>
            </div>
            <div className="cover-back">
              <div className="cover-gif">
                {isVisible && (
                  <img 
                    src={project.coverGif} 
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    onLoad={handleImageLoad}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`equalizer-bars ${isPlaying ? 'animate' : ''}`}>
          {/* Reducimos el número de barras para mejorar rendimiento */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="equalizer-bar"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-artist">{project.artist}</p>
        <p className="project-description">{project.description}</p>
        <div className="tools">
          <span>Tecnologías:</span>
          <div className="tools-tags">
            {project.tools.split(', ').map((tool, index) => (
              <span key={index} className="tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={`play-indicator ${isPlaying ? 'active' : ''}`}></div>
    </a>
  );
});

// Componente principal de proyectos
const ProjectsSection = () => {
  const projects = useMemo(() => projectsData, []);
  const [visibleProjects, setVisibleProjects] = useState([]);
  
  // Optimización: usar referencia para observación de intersección
  const sectionRef = React.useRef(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Cargar proyectos progresivamente para mejor rendimiento
          const timer = setTimeout(() => {
            setVisibleProjects(projects.map(p => p.id));
          }, 100);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [projects]);

  return (
    <div className="section-content projects-section" ref={sectionRef}>
      <div className="projects-container">
        <h2 className="projects-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isVisible={visibleProjects.includes(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;