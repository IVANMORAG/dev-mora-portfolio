import React, { useState, useMemo, useCallback, useEffect } from 'react';
import '../styles/ProjectsSection.css';

// Datos de proyectos (mantenidos fuera del componente para evitar recreaciones)
const projectsData = [
  {
    id: 1,
    title: "Brain Tumor Detection App",
    artist: "Python, TensorFlow, FastAPI & React",
    description: "Aplicación de IA para detectar tumores cerebrales en imágenes MRI, mostrando segmentación y superposición visual. Incluye modelos de clasificación (ResNet-50) y segmentación (ResUNet), con despliegue Dockerizado usando Nginx y exposición pública mediante ngrok.",
    icon: "🧠",
    coverGif: "https://raw.githubusercontent.com/IVANMORAG/MRITumorDetectorAI/main/recursos/MRI-Detector.gif",
    tools: "React, FastAPI, TensorFlow, Docker, Nginx, ngrok, OpenCV, NumPy",
    link: "https://github.com/IVANMORAG/MRITumorDetectorAI",
    features: [
      "Subida de imágenes MRI (PNG, JPG, TIFF)",
      "Clasificación de tumores con ResNet-50",
      "Segmentación con ResUNet",
      "Visualización de máscara y superposición",
      "Despliegue con Docker Compose",
      "Exposición pública con ngrok"
    ],
    architecture: {
      frontend: "React + Nginx",
      backend: "FastAPI + TensorFlow",
      infrastructure: "Docker (frontend, backend, ngrok)"
    }
  },
  {
    id: 2,
    title: "Reconocimiento Facial Avanzado",
    artist: "Python, Flask, TensorFlow & OpenCV",
    description: "Aplicación web que detecta rostros, puntos faciales y emociones, con capacidades de transformación de imágenes (rotación, volteo, ajuste de brillo). Incluye historial de imágenes procesadas y despliegue público mediante ngrok.",
    icon: "👁️",
    coverGif: "https://raw.githubusercontent.com/IVANMORAG/FaceAnalyzer-API/main/recursos/Facial-Point-detector.gif",
    tools: "Flask, TensorFlow/Keras, OpenCV, PIL, JavaScript, HTML5&CC3, ngrok",
    link: "https://github.com/IVANMORAG/FaceAnalyzer-API",
    features: [
      "Detección de rostros y puntos faciales",
      "Reconocimiento de emociones (7 categorías)",
      "Transformaciones de imagen (rotación, volteo, brillo)",
      "Alineación facial automática",
      "Historial de imágenes procesadas",
      "Interfaz web responsive con notificaciones"
    ],
    architecture: {
      backend: "Flask (Python)",
      processing: "OpenCV + TensorFlow/Keras",
      frontend: "HTML/CSS/JavaScript",
      deployment: "ngrok para exposición pública"
    },
    models: [
      "Modelo de keypoints faciales (weights_keypoint.hdf5)",
      "Modelo de detección de emociones (weights_emotions.hdf5)"
    ]
  },
  {
    id: 3,
    title: "IA en Marketing - Análisis Predictivo",
    artist: "Python, Scikit-learn & TensorFlow",
    description: "Sistema de análisis de ventas que aplica clustering (K-Means) y reducción de dimensionalidad (PCA, Autoencoders) para segmentación de clientes y predicción de patrones de compra, con API para consulta de resultados y visualizaciones interactivas.",
    icon: "📈",
    coverGif: "https://raw.githubusercontent.com/IVANMORAG/Marketing-IA/main/recursos/Marketing-IA.gif",
    tools: "Pandas, Scikit-learn, TensorFlow/Keras, Plotly, Matplotlib, Flask",
    link: "https://github.com/IVANMORAG/Marketing-IA",
    features: [
      "Clustering de clientes con K-Means",
      "Reducción dimensional con PCA y Autoencoders",
      "API REST para consulta de resultados",
      "Visualizaciones interactivas 3D",
      "Procesamiento de datasets de ventas",
      "Análisis predictivo de comportamiento"
    ],
    techniques: {
      ml: "K-Means Clustering",
      dl: "Autoencoders neuronales",
      stats: "Análisis PCA",
      viz: "Gráficos Plotly 3D interactivos"
    },
    dataflow: [
      "1. Carga y limpieza de datos",
      "2. Preprocesamiento con StandardScaler",
      "3. Clustering con K-Means (optimización elbow method)",
      "4. Reducción dimensional para visualización",
      "5. Exposición de resultados via API"
    ]
  },
  {
    id: 4,
    title: "ChatApp - Arquitectura de Microservicios",
    artist: "Node.js, Docker & MongoDB",
    description: "Sistema distribuido de chat en tiempo real con autenticación JWT, gestión de salas y mensajería, implementado con microservicios independientes (Auth, Rooms, Chat), API Gateway y balanceo de carga con Nginx. Todo contenerizado con Docker y protegido contra DDoS.",
    icon: "💬",
    coverGif: "https://raw.githubusercontent.com/IVANMORAG/Chat-Project/main/recursos/ChatApp.gif",
    tools: "Node.js, Express, Socket.IO, MongoDB, Docker, Nginx, JWT",
    link: "https://github.com/IVANMORAG/Chat-Project",
    architecture: {
      components: [
        "API Gateway (punto único de entrada)",
        "Auth Service (JWT authentication)",
        "Rooms Service (gestión de salas)",
        "Chat Service (WebSockets en tiempo real)",
        "MongoDB ReplicaSets (alta disponibilidad)",
        "Nginx (balanceador de carga)"
      ],
      patterns: [
        "Circuit Breaker",
        "Rate Limiting",
        "ReplicaSet DBs",
        "Load Balancing"
      ]
    },
    features: [
      "Autenticación JWT segura",
      "Salas de chat públicas/privadas",
      "Mensajería en tiempo real con Socket.IO",
      "Protección multi-nivel contra DDoS",
      "Despliegue escalable con Docker",
      "Frontend React interactivo"
    ],
    security: {
      ddosProtection: [
        "Rate limiting por IP (Nginx)",
        "Circuit breaker en API Gateway",
        "Validación estricta de inputs",
        "Limitación de tamaño de requests"
      ],
      dataProtection: [
        "ReplicaSets con MongoDB",
        "Tokens JWT firmados",
        "Encriptación de credenciales"
      ]
    }
  },
];

// Componente de tarjeta de proyecto optimizado
const ProjectCard = React.memo(({ project, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHoveringCover, setIsHoveringCover] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Gestión optimizada de eventos
  const handleCardMouseEnter = useCallback(() => {
    setIsPlaying(true);
    setIsHoveringCover(true);
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setIsPlaying(false);
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
      <div 
        className="project-cover-wrapper"
        onMouseEnter={() => setIsHoveringCover(true)}
        onMouseLeave={() => setIsHoveringCover(false)}
      >
        <div className={`project-cover ${isHoveringCover ? 'flip' : ''}`}>
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