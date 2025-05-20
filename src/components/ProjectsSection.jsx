import React, { useState } from 'react';
import '../styles/ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "MRI TumorDetector AI",
      artist: "Python, Tensorflow & FastAPI",
      description: "Detección de tumores cerebrales con IA: React, FastAPI, Docker y ngrok. ",
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

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHoveringCover, setIsHoveringCover] = useState(false);

  const handleCardMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleCardMouseLeave = () => {
    setIsPlaying(false);
  };

  const handleCoverMouseEnter = () => {
    setIsHoveringCover(true);
  };

  const handleCoverMouseLeave = () => {
    setIsHoveringCover(false);
  };

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
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
                <img src={project.coverGif} alt={project.title} />
              </div>
            </div>
          </div>
        </div>
        <div className={`equalizer-bars ${isPlaying ? 'animate' : ''}`}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="equalizer-bar"
              style={{ animationDelay: `${i * 0.12}s` }}
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
};

export default ProjectsSection;