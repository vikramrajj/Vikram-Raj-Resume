import './style.css'

const resumeData = {
  name: "Vikram Rajpurohit",
  title: "LLM Engineer | Agentic AI Specialist",
  contact: {
    address: "Birmingham, UK",
    ukPhone: "+447554509946",
    inPhone: "+918976674161",
    email: "vikramraj95@live.com",
    passport: "P1209832",
    linkedin: "vikram-rajpurohit-a486b17a",
    twitter: "@imvikramraj",
    github: "vikramrajj"
  },
  objective: "Aspiring LLM Engineer dedicated to building autonomous, agentic systems that solve complex real-world challenges. Specialized in Multi-Agent Orchestration, Offline LLM deployment (Ollama), and Browser-based Agentic capabilities.",

  education: [
    {
      year: "2025",
      degree: "MSc in Artificial Intelligence",
      institution: "Aston University, Birmingham",
      domain: "aston.ac.uk",
      description: "Focus: Advanced Machine Learning, Natural Language Processing, and Agentic Frameworks.",
      highlight: "Multi-Agent Based Tech Support Solution: Developed a system using conversational agents to autonomously troubleshoot end-user IT issues."
    },
    {
      year: "2020",
      degree: "Certification in Data Science",
      institution: "Board Infinity Institute, Mumbai",
      domain: "boardinfinity.com",
      description: "Comprehensive program covering statistical analysis, predictive modeling, and data visualization."
    },
    {
      year: "2013 — 2016",
      degree: "B.E in Computer Engineering",
      institution: "Fr CRCE (Father ConcieCao Rodrigues College of Engg), Mumbai University",
      domain: "frcrce.ac.in",
      description: "Core Computer Science, Distributed Systems, and Database Management."
    },
    {
      year: "2010 — 2013",
      degree: "Diploma in Comp Engg",
      institution: "Government Polythenic of Mumbai, Bandra. Autonomous College",
      domain: "gpmumbai.ac.in",
      description: "Foundational studies in Computer Engineering."
    }
  ],

  projects: [
    {
      title: "3D Solar System | Cosmic Explorer",
      description: "An immersive, interactive 3D simulation of our solar system built with Three.js and Vite. Features detailed planetary data and smooth celestial navigation.",
      link: "https://3d-solar-system-snowy.vercel.app/",
      tech: ["Three.js", "Vite", "JavaScript"]
    },
    {
      title: "Medisch Nederlands | Medical Flashcards",
      description: "A specialized language learning application for medical professionals. Features gamified flashcards and terminology drills for Dutch language learners (A2-B2 level).",
      link: "https://dutchlearningmedical.vercel.app/",
      tech: ["React", "CSS Animation", "Node.js"]
    },
    {
      title: "Pacman-Store | E-commerce Simulation",
      description: "A retro-themed e-commerce experience blending classic gaming aesthetics with modern shopping functionality.",
      link: "https://pacmanstore.vercel.app/",
      tech: ["Vanilla JS", "Retro UI", "HTML5"]
    },
    {
      title: "Agentic AI: Technical Troubleshooter",
      description: "Currently building an Offline Ollama-based LLM system. Uses Agentic AI to autonomously resolve common IT issues for Outlook and Office applications without cloud dependency.",
      link: "https://github.com/vikramrajj/RAG-Agent",
      tech: ["Ollama", "LangChain", "Python", "Agentic Workflows"]
    },
    {
      title: "Browser Agent Capabilities",
      description: "Developing agentic automation for web platforms. Capabilities include autonomous Amazon shopping (search to cart) and intelligent ticket searching across multiple platforms.",
      tech: ["Playwright", "LLM Function Calling", "Web Scraping"]
    }
  ],

  experience: [
    {
      year: "Jan 2021 — Dec 2024",
      role: "IT Support Analyst (LLM/Automation Focused)",
      company: "ZS Associates, Pune",
      domain: "zs.com",
      details: [
        "Identified repetitive end-user issues in Outlook/Office and prototyped automation logic using Agentic AI principles.",
        "Managed complex technical troubleshooting using Service Now and Azure AD.",
        "Conducted quarterly Support Data Analysis to drive process improvements via data-driven insights."
      ]
    },
    {
      year: "July 2019 — Dec 2019",
      role: "IT Analyst",
      company: "Wipro, Pune",
      domain: "wipro.com",
      details: [
        "Supported Healthcare Systems via client-facing chat support.",
        "Instrumental Pilot Team member for process documentation and initial system setup."
      ]
    },
    {
      year: "Sept 2018 — Apr 2019",
      role: "IT Support Analyst",
      company: "Tech Mahindra, Pune",
      domain: "techmahindra.com",
      details: [
        "Pilot Team to work with Kattera (US based Startup)",
        "Working on Client Facing IT Support & Process."
      ]
    },
    {
      year: "Jan 2018 — Sept 2018",
      role: "Research Assistant & IT Testing",
      company: "Ultra Skills Pvt Ltd (Soulfit Startup)",
      domain: "ibm.com", // Using a fallback visually if no domain exists, but standard clearbit failure handled in HTML
      details: [
        "Conducted market research for Soulfit—innovative Bluetooth health bands/earpieces.",
        "Identified key market segments and supported the product's journey from conception to E-commerce listing.",
        "Handled IT testing and technical validation."
      ]
    },
    {
      year: "Nov 2016 — Dec 2017",
      role: "Internal IT",
      company: "TCS (Tata Consultancy Services)",
      domain: "tcs.com",
      details: [
        "Windows Administration for Internal IT."
      ]
    }
  ]
};

const renderResume = () => {
  const app = document.querySelector('#app');

  const parseYear = (yearStr) => {
    const years = String(yearStr).match(/\d{4}/g);
    return years ? Math.max(...years.map(Number)) : 0;
  };

  const combinedTimeline = [
    ...resumeData.education.map(item => ({
      year: item.year,
      type: 'Education',
      title: item.degree,
      subtitle: item.institution,
      domain: item.domain,
      detailsHtml: `<p class="description">${item.description}</p>${item.highlight ? `<div class="ai-highlight"><strong>Project Focus:</strong> ${item.highlight}</div>` : ''}`
    })),
    ...resumeData.experience.map(item => ({
      year: item.year,
      type: 'Experience',
      title: item.role,
      subtitle: item.company,
      domain: item.domain,
      detailsHtml: `<ul>${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul>`
    }))
  ].sort((a, b) => parseYear(b.year) - parseYear(a.year));

  app.innerHTML = `
    <div class="cursor"></div>
    <div class="grid-overlay"></div>
    
    <nav class="top-nav fade-in">
      <div class="social-links">
        <a href="https://linkedin.com/in/${resumeData.contact.linkedin}" target="_blank" class="hover-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="https://twitter.com/${resumeData.contact.twitter.replace('@', '')}" target="_blank" class="hover-link" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="https://github.com/${resumeData.contact.github}" target="_blank" class="hover-link" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="social-icon"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </div>
    </nav>

    <header class="container">
      <div class="header-content reveal">
        <div class="brand">
          <h1 class="split-text">${resumeData.name}</h1>
          <div class="role-badges fade-in">
            <span class="badge">LLM Engineer</span>
            <span class="badge">Agent AI</span>
            <span class="badge">Data Science</span>
          </div>
          <p class="subtitle fade-in">${resumeData.title}</p>
        </div>
        <div class="contact-pill fade-in">
          <span>${resumeData.contact.email} | UK: ${resumeData.contact.ukPhone} | IN: ${resumeData.contact.inPhone} | Passport: ${resumeData.contact.passport}</span>
        </div>
      </div>
    </header>

    <main class="container">
      <section id="objective" class="reveal section-spacing">
        <h2 class="label">Mission</h2>
        <p class="objective-text">${resumeData.objective}</p>
      </section>

      <section id="timeline" class="section-spacing">
        <h2 class="label reveal">Academic Foundation & Professional Journey</h2>
        <div class="timeline">
          ${combinedTimeline.map((item, index) => `
            <div class="timeline-item ${index % 2 === 0 ? 'right-content' : 'left-content'} reveal">
              <div class="timeline-year">${item.year}</div>
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-header-with-logo">
                  ${item.domain ? `<img src="https://logo.clearbit.com/${item.domain}?size=64" class="company-logo" onerror="this.style.display='none'" alt="${item.subtitle} logo"/>` : ''}
                  <div>
                    <span class="timeline-type">${item.type}</span>
                    <h3>${item.title}</h3>
                    <p class="institution company">${item.subtitle}</p>
                  </div>
                </div>
                ${item.detailsHtml}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="projects" class="section-spacing">
        <h2 class="label reveal">Featured Agentic Work & Live Projects</h2>
        <div class="project-grid">
          ${resumeData.projects.map(project => `
            <div class="project-card reveal">
              <div class="project-header">
                <h3>${project.title}</h3>
                ${project.link
      ? `<a href="${project.link}" target="_blank" class="view-live">${project.link.includes('github.com') ? 'View Source ↗' : 'View Live ↗'}</a>`
      : ''}
              </div>
              <p>${project.description}</p>
              <div class="tech-tags">
                ${project.tech.map(t => `<span>${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </main>

    <footer class="container section-spacing">
      <div class="reveal">
        <h2 class="label">Connect</h2>
        <p class="address fade-in">${resumeData.contact.address}</p>
      </div>
    </footer>
  `;

  setupAnimations();
};

const setupAnimations = () => {
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal, .fade-in').forEach(el => observer.observe(el));

  document.querySelectorAll('a, .project-card, h3, .badge').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
};

document.addEventListener('DOMContentLoaded', renderResume);
renderResume();
