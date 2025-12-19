import React, { useEffect, useRef } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const particlesRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "ETF Value Pro",
      url: "www.etfvaluepro.com",
      link: "https://www.etfvaluepro.com",
      description: "A powerful ETF analysis and valuation tool helping investors make informed decisions with comprehensive market data and insights.",
      screenshot: "/screenshots/etfvaluepro.png",
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
      screenshot: "/screenshots/eggyeggs.png",
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
      screenshot: "/screenshots/fsrslearn.png",
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
      screenshot: "/screenshots/sringlish.png",
      icon: <span style={{fontSize: '1.8rem', fontWeight: '700', color: 'white'}}>අ</span>,
      screenshotIcon: <span style={{fontSize: '4rem', fontWeight: '700'}}>අ</span>
    },
    {
      id: 5,
      title: "Suzanne De Silva",
      url: "www.suzannedesilva.com",
      link: "https://www.suzannedesilva.com",
      description: "A professional portfolio website showcasing creative work and achievements with elegant design and seamless user experience.",
      screenshot: "/screenshots/suzannedesilva.png",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    }
  ];

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
      <div className="particles" ref={particlesRef}></div>
      
      <div className="container">
        <header>
          <h1>Michael Perera</h1>
          <p className="subtitle">Showcasing my latest web development projects</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card" 
              onClick={() => handleCardClick(project.link)}
            >
              <div className="gradient-border"></div>
              <div className="inner-glow"></div>
              <div className="project-screenshot">
                <img 
                  src={project.screenshot} 
                  alt={`${project.title} website screenshot`}
                  loading="lazy"
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
      </div>
    </div>
  );
};

export default Portfolio;
