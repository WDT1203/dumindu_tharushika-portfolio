import React from 'react';

function Projects() {
  const projects = [
    {
      id: '1',
      title: 'Contract Shield – AI Legal Assistant',
      technologies: ['Python', 'React', 'PostgreSQL', 'Google Gemini API'],
      summary: 'AI-powered document analyzer that extracts structured data from legal contracts, performing quantitative risk assessment and generating professional PDF reports. Features secure authentication, rate limiting, and PostgreSQL database for analysis history.',
      github: 'https://github.com/WDT1203/contract-shield',
      demo: 'https://contract-shield-dz6hj9e6q-dumindu-tharushikas-projects.vercel.app/',
      highlights: [
        '98% accuracy in clause extraction from complex documents',
        'Automated risk scoring (0-100) using custom algorithms',
        'Reduced contract review time by 80%'
      ]
    },
    {
      id: '2',
      title: 'Survival and Mortality Prediction System',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      summary: 'Advanced ML system for clinical decision support, achieving 87% accuracy through ensemble methods. Processes 12+ medical features with rigorous validation and transparent documentation of assumptions and limitations.',
      github: 'https://github.com/WDT1203/Survival_MortalityPredictionSystem',
      highlights: [
        '87% classification accuracy with 0.87 AUC-ROC',
        '12% performance improvement through ensemble voting',
        'Comprehensive data preprocessing and validation'
      ]
    },
    {
      id: '3',
      title: 'Detoxium – Drug Addiction Prevention App',
      technologies: ['Flutter', 'Python', 'Firebase', 'BeautifulSoup'],
      summary: 'Full-stack recovery assistant with custom knowledge base built from 50+ web sources. Implemented data cleaning pipelines reducing errors by 40%, with real-time synchronization and structured JSON data management.',
      github: 'https://github.com/WDT1203/AI-chatbot',
      highlights: [
        'Cleaned 10,000+ records from unstructured sources',
        '40% improvement in data quality',
        'Real-time Firebase data synchronization'
      ]
    },
    {
      id: '4',
      title: 'Real-Time Event Ticketing System',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
      summary: 'Concurrent ticketing platform with optimized database schema and RESTful APIs. Handles simultaneous booking requests through thread-safe operations and systematic performance analysis.',
      github: 'https://github.com/WDT1203/Event-Ticketing-System',
      highlights: [
        'Thread-safe concurrent operations',
        'Producer-Consumer design pattern',
        'Comprehensive API testing and documentation'
      ]
    },
    {
      id: '5',
      title: 'UN SDGs Awareness Website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      summary: 'Responsive environmental awareness platform for UN\'s Life on Land goal. Led team of 4 developers, managing timelines to deliver project 1 week ahead of schedule with interactive UI components.',
      github: 'https://github.com/WDT1203/SDGWebsite',
      highlights: [
        'Team leadership and project management',
        'Delivered 1 week ahead of schedule',
        'Interactive data-driven components'
      ]
    },
  ];

  // Updated project images
  const projectImages = [
    'https://img.icons8.com/color/96/000000/document.png',        // Contract Shield
    'https://img.icons8.com/color/96/000000/medical-doctor.png',  // Survival Prediction
    'https://img.icons8.com/color/96/000000/bot.png',             // Detoxium
    'https://img.icons8.com/color/96/000000/ticket.png',          // Ticketing System
    'https://img.icons8.com/color/96/000000/earth-planet.png',    // UN SDGs
  ];

  return (
    <section id="projects" className="min-vh-100 py-5 position-relative">
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, var(--bs-body-bg), var(--bs-card-bg))',
          transform: 'skewY(1deg)',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <h2 className="display-4 fw-bold text-center mb-5">Projects</h2>
        <div className="row justify-content-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm hover-shadow transition-all">
                <div
                  className="bg-light d-flex justify-content-center align-items-center"
                  style={{ height: '160px' }}
                >
                  <img
                    src={projectImages[index]}
                    alt={project.title}
                    style={{ height: 96, width: 96, objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">
                    {project.title}
                  </h5>
                  <div className="mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge bg-primary me-2 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="card-text text-muted mb-3">{project.summary}</p>
                  
                  {/* Key Highlights */}
                  {project.highlights && (
                    <div className="mb-3">
                      <small className="text-muted fw-bold d-block mb-2">Key Highlights:</small>
                      <ul className="small text-muted ps-3 mb-0">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm flex-grow-1"
                    >
                      <i className="bi bi-github me-1"></i>
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm flex-grow-1"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}

export default Projects;