import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import { projectGroups } from './projectsData';
import DarkPoolMatchingEngine from './DarkPoolMatchingEngine';
import VarCvar from './VarCvar';
import MonolithToMicroservice from './MonolithToMicroservice';
import IonGroup from './IonGroup';

const Portfolio = () => {
  const particlesRef = useRef(null);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pendingProject, setPendingProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "ETF Value Pro",
      url: "www.etfvaluepro.com",
      link: "https://www.etfvaluepro.com",
      description: "A powerful ETF analysis and valuation tool helping investors make informed decisions with comprehensive market data and insights.",
      screenshot: `${process.env.PUBLIC_URL}/screenshots/etfvaluepro.png`,
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Eggy Eggs",
      url: "www.eggyeggs.com",
      link: "https://www.eggyeggs.com",
      description: "An interactive learning platform for mastering Python and Java programming, featuring hands-on tutorials, coding challenges, and practical projects.",
      screenshot: `${process.env.PUBLIC_URL}/screenshots/eggyeggs.png`,
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <ellipse cx="12" cy="13" rx="7" ry="9" strokeWidth="2"></ellipse>
        </svg>
      )
    },
    {
      id: 3,
      title: "FSRS Learn",
      url: "www.fsrslearn.com",
      link: "https://www.fsrslearn.com",
      description: "An innovative learning platform designed to help students master concepts through spaced repetition and active recall techniques.",
      screenshot: `${process.env.PUBLIC_URL}/screenshots/fsrslearn.png`,
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Sringlish",
      url: "www.sringlish.com",
      link: "https://www.sringlish.com",
      description: "A comprehensive platform for learning Sinhala, offering interactive lessons, vocabulary tools, and cultural insights for language learners.",
      screenshot: `${process.env.PUBLIC_URL}/screenshots/sringlish.png`,
      icon: <span style={{fontSize: '1.8rem', fontWeight: '700', color: 'white'}}>අ</span>,
      screenshotIcon: <span style={{fontSize: '4rem', fontWeight: '700'}}>අ</span>
    },
    {
      id: 5,
      title: "Suzanne De Silva",
      url: "www.suzannedesilva.com",
      link: "https://www.suzannedesilva.com",
      description: "A professional portfolio website showcasing creative work and achievements with elegant design and seamless user experience.",
      screenshot: `${process.env.PUBLIC_URL}/screenshots/suzannedesilva.png`,
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
    setSelectedProject(null);
  };
  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
    setPasswordInput('');
    setPasswordError(false);
    setPendingProject(null);
  };
  const handleProjectClick = (projectName) => {
    if (isAuthenticated) {
      setSelectedProject(projectName);
    } else {
      setPendingProject(projectName);
      setIsPasswordModalOpen(true);
    }
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'abc123') {
      setIsPasswordModalOpen(false);
      setIsAuthenticated(true);
      setSelectedProject(pendingProject);
      setPendingProject(null);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // Handle escape key and body scroll lock for modals
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isPasswordModalOpen) closePasswordModal();
        if (isResumeModalOpen) closeResumeModal();
      }
    };

    if (isResumeModalOpen || isPasswordModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isResumeModalOpen, isPasswordModalOpen]);

  useEffect(() => {
    // Generate floating particles
    const particlesContainer = particlesRef.current;
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 20 + 20}s`;
      
      particlesContainer.appendChild(particle);
    }

    // Mouse glow effect on cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });

    // Cleanup
    return () => {
      particlesContainer.innerHTML = '';
    };
  }, []);

  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  const handleLinkClick = (e, link) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <div className="portfolio-wrapper">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="particles" ref={particlesRef}></div>

      <div className="header-controls">
        <button className="resume-button" onClick={openResumeModal} aria-label="View Resume Projects">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="resume-label">Resume</span>
        </button>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <div className="toggle-track">
            <div className="toggle-thumb">
              {theme === 'dark' ? (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </div>
          </div>
          <span className="toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>

      <main id="main-content" className="container">
        <header>
          <h1>Michael Perera</h1>
          <p className="subtitle">Backend Engineer | Java | Fintech & Trading Systems</p>
        </header>

        <a href="#contact" className="scroll-indicator" aria-label="Scroll to contact">
          <span>Get in touch</span>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>

        <section id="projects" aria-label="Projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleCardClick(project.link)}
                role="article"
              >
                <div className="gradient-border"></div>
                <div className="inner-glow"></div>
                <div className="project-screenshot">
                  <img
                    src={project.screenshot}
                    alt={`${project.title} website screenshot`}
                    loading="lazy"
                    onLoad={(e) => e.target.classList.add('loaded')}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.opacity = '1';
                    }}
                  />
                  <div className="screenshot-fallback">
                    <div className="fallback-icon">
                      {project.screenshotIcon || project.icon}
                    </div>
                    <h3>{project.title}</h3>
                    <p>Visit {project.url}</p>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-url">{project.url}</p>
                  <p className="project-description">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => handleLinkClick(e, project.link)}
                  >
                    Visit Site
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section" aria-label="About">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a backend engineer specializing in high-performance Java systems
                for the financial services industry. With deep expertise in building
                scalable, low-latency trading platforms and risk management systems,
                I focus on delivering robust solutions that handle millions of transactions.
              </p>
              <p>
                My experience spans developing dark pool matching engines, real-time
                market data pipelines, and enterprise risk analytics platforms. I'm
                passionate about fintech innovation, from algorithmic trading systems
                to regulatory compliance solutions like MiFID II reporting.
              </p>
              <div className="skills-container">
                <h3>Technologies I work with:</h3>
                <div className="skills-grid">
                  {['Java', 'Spring Boot', 'Python', 'Kafka', 'PostgreSQL', 'Redis', 'Microservices', 'REST APIs', 'FIX Protocol', 'Docker', 'Kubernetes', 'AWS', 'Low-Latency Systems', 'Financial APIs'].map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-label="Contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Interested in working together? Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:admin@mikeperera.com" className="contact-link" aria-label="Email">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email</span>
            </a>
            <a href="https://github.com/MJP32" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/michael-perera-94b813a/" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Michael Perera. All rights reserved.</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>

      {isPasswordModalOpen && (
        <div className="password-modal-overlay" onClick={closePasswordModal}>
          <div className="password-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="resume-modal-close" onClick={closePasswordModal} aria-label="Close modal">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="password-content">
              <div className="password-icon">🔒</div>
              <h2>Protected Content</h2>
              <p className="password-description">
                These work projects contain proprietary implementation details,
                system architectures, and confidential business logic from enterprise
                fintech systems. Access is restricted to authorized viewers only.
              </p>
              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Enter password"
                  className={`password-input ${passwordError ? 'error' : ''}`}
                  autoFocus
                />
                {passwordError && <span className="password-error">Incorrect password</span>}
                <button type="submit" className="password-submit">
                  Unlock
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {isResumeModalOpen && (
        <div className="resume-modal-overlay" onClick={closeResumeModal}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
            <button className="resume-modal-close" onClick={closeResumeModal} aria-label="Close modal">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {selectedProject === 'Dark Pool Matching Engine' ? (
              <DarkPoolMatchingEngine onBack={() => setSelectedProject(null)} />
            ) : selectedProject === 'Var/CVar' ? (
              <VarCvar onBack={() => setSelectedProject(null)} />
            ) : selectedProject === 'Monolith to Microservice' ? (
              <MonolithToMicroservice onBack={() => setSelectedProject(null)} />
            ) : selectedProject === 'OpenLink Derivatives' ? (
              <IonGroup onBack={() => setSelectedProject(null)} />
            ) : (
              <>
                <h2 id="resume-modal-title" className="resume-modal-header">Work Projects</h2>
                <div className="resume-modal-content">
                  {projectGroups.map((group) => (
                    <div key={group.title} className="resume-group">
                      <div className="resume-group-header" style={{ borderLeftColor: group.color }}>
                        <span className="resume-group-icon">{group.icon}</span>
                        <h3 style={{ color: group.color }}>{group.title}</h3>
                        <span className="resume-group-count">{group.projects.length} projects</span>
                      </div>
                      <div className="resume-projects-grid">
                        {group.projects.map((project) => {
                          const hasDetails = ['Dark Pool Matching Engine', 'Var/CVar', 'Monolith to Microservice', 'OpenLink Derivatives'].includes(project.id);
                          return (
                            <div
                              key={project.id}
                              className="resume-project-card"
                              style={{ borderColor: project.color, cursor: hasDetails ? 'pointer' : 'default' }}
                              onClick={() => {
                                if (hasDetails) {
                                  handleProjectClick(project.id);
                                }
                              }}
                            >
                              <div className="resume-project-header">
                                <span className="resume-project-icon">{project.icon}</span>
                                <h4>{project.name}</h4>
                              </div>
                              <p className="resume-project-description">{project.description}</p>
                              {hasDetails && (
                                <span style={{ fontSize: '0.75rem', color: '#3b82f6', marginTop: '0.5rem', display: 'block' }}>Click to view details →</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
