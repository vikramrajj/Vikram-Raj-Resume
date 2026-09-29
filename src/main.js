import './style.css';
import { resumeData } from './data/resume.js';

// Standardized Technical SVG Icons (1.75px stroke, Radix / Phosphor style)
const icons = {
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`,
  arrowUpRight: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  substack: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  grid: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  deck: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="5" y="2" rx="2"/><line x1="2" x2="2" y1="6" y2="18"/></svg>`,
  spade: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14a6 6 0 0 0 7 5.92V22h2v-2.08A6 6 0 0 0 20 14c0-5-5-7-8-12z"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  club: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 9.5a4.5 4.5 0 0 0-4.5-4.5 4.45 4.45 0 0 0-1.85.4A4.5 4.5 0 0 0 4.5 9.5a4.49 4.49 0 0 0 2.25 3.9v.05A4.5 4.5 0 0 0 11 17.92V22h2v-4.08a4.5 4.5 0 0 0 4.25-4.47v-.05a4.49 4.49 0 0 0 2.25-3.9z"/></svg>`,
  diamond: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
  graduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`
};

// Playing card rank & suit mapping for the spread deck (ending in King of Diamonds on top)
const getCardSuit = (idx) => {
  const suitsList = [
    { rank: 'A', suit: 'spade', isRed: false },
    { rank: 'K', suit: 'spade', isRed: false },
    { rank: '8', suit: 'spade', isRed: false },
    { rank: '5', suit: 'spade', isRed: false },
    { rank: '2', suit: 'spade', isRed: false },
    { rank: 'J', suit: 'heart', isRed: true },
    { rank: '9', suit: 'heart', isRed: true },
    { rank: '2', suit: 'heart', isRed: true },
    { rank: 'Q', suit: 'club', isRed: false },
    { rank: 'J', suit: 'club', isRed: false },
    { rank: '10', suit: 'club', isRed: false },
    { rank: '7', suit: 'club', isRed: false },
    { rank: '5', suit: 'club', isRed: false },
    { rank: '3', suit: 'club', isRed: false },
    { rank: 'A', suit: 'diamond', isRed: true },
    { rank: 'Q', suit: 'diamond', isRed: true },
    { rank: 'K', suit: 'diamond', isRed: true }
  ];
  return suitsList[idx % suitsList.length];
};

const skillCategoryIcons = {
  "Agentic AI & LLMs": icons.cpu,
  "Machine Learning & Data Science": icons.brain,
  "Enterprise Cloud & DevOps": icons.cloud
};

// Initial state
let currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

// Sort unified timeline items
const parseYear = (yearStr) => {
  const years = String(yearStr).match(/\d{4}/g);
  return years ? Math.max(...years.map(Number)) : 0;
};

const allTimelineItems = [
  ...resumeData.experience.map((item, idx) => ({
    ...item,
    id: `exp-${idx}`,
    type: 'Work Experience',
    title: item.role,
    subtitle: item.company,
    isExperience: true,
    categoryIcon: 'briefcase',
    summary: item.summary || item.details?.[0] || ''
  })),
  ...resumeData.education.map((item, idx) => ({
    ...item,
    id: `edu-${idx}`,
    type: 'Academic Degree',
    title: item.degree,
    subtitle: item.institution,
    isEducation: true,
    categoryIcon: 'graduationCap',
    summary: item.summary || item.description || ''
  }))
].sort((a, b) => parseYear(b.year) - parseYear(a.year));

// Render Timeline Detail Card (Matching the reference showcase panel)
const renderTimelineDetailCard = (item, activeIndex, totalCount) => {
  if (!item) return '';

  return `
    <div class="detail-card-inner">
      <!-- Honeycomb Geometric SVG Mesh Pattern -->
      <svg class="detail-hex-bg" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="detail-honeycomb-pattern" width="56" height="97" patternUnits="userSpaceOnUse">
            <path d="M28 0 L56 16.166 L56 48.5 L28 64.666 L0 48.5 L0 16.166 Z M28 64.666 L56 80.832 L56 113.166 L28 129.332 L0 113.166 L0 80.832 Z M0 32.333 L28 48.5 M56 32.333 L28 48.5 M0 96.999 L28 113.166 M56 96.999 L28 113.166" 
                  fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity="0.16" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#detail-honeycomb-pattern)" />
      </svg>

      <div class="detail-content-wrapper">
        <!-- Top Bar with Milestone Type & Prominent Circular Icon Badge -->
        <div class="detail-top-bar">
          <div class="detail-badge-group">
            <span class="detail-type-badge ${item.isExperience ? 'type-exp' : 'type-edu'}">
              ${item.type}
            </span>
            <span class="detail-counter-pill">Milestone ${activeIndex + 1} of ${totalCount}</span>
          </div>

          <!-- Circular Badge with Spot Pastel Accents -->
          <div class="detail-circle-icon ${item.isExperience ? 'type-exp' : 'type-edu'}" title="${item.type}">
            ${icons[item.categoryIcon] || icons.briefcase}
          </div>
        </div>

        <!-- Big Headline: Time Period (e.g. 2021 — 2024 / 2021 — Now) -->
        <div class="detail-headline-block">
          <h3 class="detail-period-title">${item.year}</h3>
          <div class="detail-exact-dates">${item.period || item.year} • ${item.location}</div>
        </div>

        <!-- Role / Title & Company / Institution -->
        <div class="detail-org-block">
          <h4 class="detail-role-title">${item.title}</h4>
          <div class="detail-company-line">
            <span class="detail-company-name">${item.subtitle}</span>
            ${item.domain ? `
              <a href="https://${item.domain}" target="_blank" rel="noopener noreferrer" class="detail-domain-badge" title="Visit ${item.domain}">
                <span>${item.domain}</span>
                ${icons.arrowUpRight}
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Lead Summary / Description -->
        ${item.description ? `<p class="detail-lead-desc">${item.description}</p>` : (item.summary ? `<p class="detail-lead-desc">${item.summary}</p>` : '')}

        <!-- Deep Bullet Points (Key Responsibilities & Operational Impact) -->
        ${item.details && item.details.length > 0 ? `
          <div class="detail-section-block">
            <div class="detail-section-header">
              <span>Operational Focus &amp; Impact</span>
            </div>
            <ul class="detail-bullet-list">
              ${item.details.map(bullet => `
                <li class="detail-bullet-item">
                  <span class="bullet-arrow" aria-hidden="true">→</span>
                  <span class="bullet-text">${bullet}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Academic Capstone / Special Highlight -->
        ${item.highlight ? `
          <div class="detail-capstone-card">
            <div class="capstone-tag">Capstone / Research Thesis</div>
            <p class="capstone-body">${item.highlight}</p>
          </div>
        ` : ''}

        <!-- Skills / Competencies Tags -->
        ${item.skills && item.skills.length > 0 ? `
          <div class="detail-section-block">
            <div class="detail-section-header">
              <span>Verified Competencies &amp; Stack</span>
            </div>
            <div class="detail-skills-wrap">
              ${item.skills.map(skill => `<span class="detail-skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Bottom Stepper / Navigation Bar -->
        <div class="detail-footer-stepper">
          <span class="detail-hover-hint">Hover or tap timeline milestones to inspect</span>
          <div class="detail-nav-btn-group">
            <button id="timelinePrevBtn" class="detail-stepper-btn" aria-label="Previous Milestone" title="Previous milestone">
              ${icons.chevronLeft}
              <span>Prev</span>
            </button>
            <button id="timelineNextBtn" class="detail-stepper-btn" aria-label="Next Milestone" title="Next milestone">
              <span>Next</span>
              ${icons.chevronRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Render Alternating Minimal Timeline Nodes (Spine + Left/Right alternating nodes)
const renderTimelineNodes = (items, activeIndex) => {
  return items.map((item, idx) => {
    const isRight = (idx % 2 === 0);
    const isActive = (idx === activeIndex);

    return `
      <div class="timeline-node-row ${isRight ? 'side-right' : 'side-left'} ${isActive ? 'is-active' : ''}" 
           data-milestone-idx="${idx}" 
           data-milestone-id="${item.id}"
           tabindex="0" 
           role="tab" 
           aria-selected="${isActive ? 'true' : 'false'}"
           aria-label="${item.year}: ${item.title} at ${item.subtitle}">
        
        ${isRight ? `
          <!-- Left 50% Spacer Half -->
          <div class="timeline-row-half spacer-half"></div>

          <!-- Central Spine Marker on 50% Axis -->
          <div class="timeline-spine-marker" aria-hidden="true">
            <span class="spine-marker-ring"></span>
            <span class="spine-marker-pulse"></span>
          </div>

          <!-- Right 50% Content Half -->
          <div class="timeline-row-half content-half">
            <div class="timeline-glance-card">
              <div class="glance-connector-line"></div>
              <div class="glance-card-top">
                <span class="glance-period">${item.year}</span>
                <span class="glance-type-badge ${item.isExperience ? 'type-exp' : 'type-edu'}">${item.isExperience ? 'Work' : 'Degree'}</span>
              </div>
              <h4 class="glance-role">${item.title}</h4>
              <div class="glance-org">${item.subtitle} • <span class="glance-location-text">${item.location}</span></div>
              <p class="glance-summary-text">${item.summary || ''}</p>
              <div class="glance-action-cue">
                <span>Inspect details</span>
                ${icons.chevronRight}
              </div>
            </div>
          </div>
        ` : `
          <!-- Left 50% Content Half -->
          <div class="timeline-row-half content-half">
            <div class="timeline-glance-card">
              <div class="glance-connector-line"></div>
              <div class="glance-card-top">
                <span class="glance-type-badge ${item.isExperience ? 'type-exp' : 'type-edu'}">${item.isExperience ? 'Work' : 'Degree'}</span>
                <span class="glance-period">${item.year}</span>
              </div>
              <h4 class="glance-role">${item.title}</h4>
              <div class="glance-org">${item.subtitle} • <span class="glance-location-text">${item.location}</span></div>
              <p class="glance-summary-text">${item.summary || ''}</p>
              <div class="glance-action-cue">
                ${icons.chevronLeft}
                <span>Inspect details</span>
              </div>
            </div>
          </div>

          <!-- Central Spine Marker on 50% Axis -->
          <div class="timeline-spine-marker" aria-hidden="true">
            <span class="spine-marker-ring"></span>
            <span class="spine-marker-pulse"></span>
          </div>

          <!-- Right 50% Spacer Half -->
          <div class="timeline-row-half spacer-half"></div>
        `}
      </div>
    `;
  }).join('');
};

// Render App
const renderApp = () => {
  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `
    <!-- Subtle Grid Overlay -->
    <div class="grid-overlay"></div>

    <!-- Minimalist Sticky Navigation -->
    <nav class="site-nav">
      <div class="nav-container">
        <a href="#about" class="nav-brand">
          <div class="brand-monogram">VR</div>
          <div class="brand-info">
            <span class="brand-name">${resumeData.name}</span>
            <span class="brand-status">
              <span class="status-dot"></span>
              <span>Available for Roles</span>
            </span>
          </div>
        </a>

        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Competencies</a></li>
          <li><a href="#timeline">Journey</a></li>
          <li><a href="#projects">Repositories</a></li>
          <li><a href="#terminal">Agent CLI</a></li>
          <li><a href="#contact">Social</a></li>
        </ul>

        <div class="nav-actions">
          <button id="themeToggleBtn" class="theme-toggle-btn" aria-label="Toggle light/dark mode">
            ${currentTheme === 'dark' ? icons.sun : icons.moon}
          </button>
          <a href="#terminal" class="btn-resume">
            ${icons.terminal}
            <span>Agent CLI</span>
          </a>
          <button id="mobileMenuBtn" class="mobile-menu-btn" aria-label="Open navigation menu">
            ${icons.menu}
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <div id="mobileDrawer" class="mobile-nav-drawer">
      <a href="#about" class="mobile-link">About</a>
      <a href="#skills" class="mobile-link">Competencies</a>
      <a href="#timeline" class="mobile-link">Journey</a>
      <a href="#projects" class="mobile-link">Repositories</a>
      <a href="#terminal" class="mobile-link">Agent CLI</a>
      <a href="#contact" class="mobile-link">Social</a>
    </div>

    <!-- Main Content Container (Constrained max-w-5xl) -->
    <main class="container">
      
      <!-- Hero Section with 2-Column Split & 1-Bit Monochrome Portrait -->
      <section id="about" class="hero-section">
        <div class="hero-grid reveal">
          <div class="hero-content">
            <div class="hero-badges">
              <span class="badge blue">LLM Engineer</span>
              <span class="badge green">Agentic AI Specialist</span>
              <span class="badge yellow">Mumbai, IN</span>
              <span class="badge">Offline &amp; Private AI</span>
            </div>

            <h1 class="hero-title editorial-serif">
              Architecting <em>Autonomous Agents</em> &amp; Offline LLM Systems.
            </h1>

            <p class="hero-subtitle">
              ${resumeData.title}
            </p>

            <p class="hero-tagline">
              ${resumeData.objective}
            </p>

            <div class="hero-actions">
              <a href="#projects" class="btn-primary">
                <span>View Repositories</span>
                ${icons.arrowUpRight}
              </a>
              <a href="#terminal" class="btn-terminal">
                ${icons.terminal}
                <span>Inspect Agent CLI</span>
              </a>
              <a href="#contact" class="btn-secondary">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <!-- 1-Bit Monochrome Portrait Card (Right Column) -->
          <div class="hero-portrait-frame">
            <div class="portrait-card">
              <div class="portrait-header">
                <span class="portrait-badge">
                  <span class="status-dot"></span>
                  <span>1-BIT BITMAP</span>
                </span>
                <span class="portrait-coord">19.0760° N, 72.8777° E</span>
              </div>
              <div class="portrait-image-wrapper">
                <img 
                  src="/images/vikram-bit-portrait.png" 
                  alt="Vikram Rajpurohit — 1-bit monochrome portrait" 
                  class="bit-portrait-img"
                  loading="eager"
                  width="320"
                  height="428"
                />
              </div>
              <div class="portrait-footer">
                <div class="portrait-footer-info">
                  <span class="portrait-name">VIKRAM RAJPUROHIT</span>
                  <span class="portrait-role">LLM ENGINEER // AGENTIC AI</span>
                </div>
                <div class="portrait-footer-tech">
                  <span class="portrait-tag">MUMBAI, IN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Ribbon (Bento Minimal Layout) -->
        <div class="stats-ribbon">
          ${resumeData.stats.map(stat => `
            <div class="stat-card">
              <div class="stat-value">${stat.value}</div>
              <div class="stat-label">${stat.label}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Technical Competencies Matrix -->
      <section id="skills" class="section-spacing">
        <div class="section-header reveal">
          <span class="section-eyebrow">Technical Competencies</span>
          <h2>Specialized Engineering Matrix</h2>
          <p>Autonomous agent frameworks, local inference runtimes, statistical analysis, and enterprise cloud operations.</p>
        </div>

        <div class="skills-grid">
          ${resumeData.skills.map(cat => `
            <div class="skill-category-card reveal">
              <div class="category-icon-box">
                ${skillCategoryIcons[cat.category] || icons.cpu}
              </div>
              <h3>${cat.category}</h3>
              <p class="category-desc">${cat.description}</p>
              <div class="skill-items-list">
                ${cat.items.map(skill => `
                  <div class="skill-pill" title="Proficiency: ${skill.level}">
                    <span class="skill-level-dot"></span>
                    <span>${skill.name}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Filterable Journey & Career Timeline -->
      <section id="timeline" class="section-spacing">
        <div class="section-header reveal">
          <span class="section-eyebrow">Professional Evolution</span>
          <h2>Work Experience &amp; Career Journey</h2>
          <p>Interactive chronological timeline. Shows minimal info at one glance — hover or tap any milestone to reveal detailed operational telemetry, technical impact, and stack.</p>
        </div>

        <!-- Filter Buttons -->
        <div class="timeline-filter-bar reveal">
          <button class="filter-btn active" data-filter="experience">Work Experience (${resumeData.experience.length})</button>
          <button class="filter-btn" data-filter="all">All Milestones (${allTimelineItems.length})</button>
          <button class="filter-btn" data-filter="education">Academic Degrees (${resumeData.education.length})</button>
        </div>

        <!-- Interactive Split Timeline Layout (Reference-Matched) -->
        <div class="timeline-interactive-container reveal">
          <!-- Left Column: Visual Alternating Timeline Track -->
          <div class="timeline-track-column">
            <div class="timeline-track-wrapper">
              <div class="timeline-spine" aria-hidden="true"></div>
              <div class="timeline-nodes-list" id="timelineNodesList" role="tablist" aria-label="Career Milestones">
                <!-- Dynamically populated by setupInteractiveTimeline() -->
              </div>
            </div>
          </div>

          <!-- Right Column: Sticky Detail Showcase Card -->
          <div class="timeline-detail-column">
            <div class="timeline-detail-card" id="timelineDetailCard" role="region" aria-live="polite" aria-label="Milestone Detail">
              <!-- Dynamically populated by setupInteractiveTimeline() -->
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section (Radial Playing-Card Fan) -->
      <section id="projects" class="section-spacing">
        <div class="section-header reveal">
          <span class="section-eyebrow">GitHub Repositories &amp; Systems</span>
          <h2>Open-Source Work &amp; Deployed Systems</h2>
          <p>Autonomous AI systems, local model distillation, systems tooling, and 3D WebGL applications.</p>
        </div>

        <!-- Deck Toolbar with Category Filters, Navigation & View Mode Toggle -->
        <div class="deck-toolbar reveal">
          <div class="projects-filter-bar" style="margin-bottom: 0;">
            <button class="filter-btn project-filter-btn active" data-project-filter="all">All Repositories (${resumeData.projects.length})</button>
            <button class="filter-btn project-filter-btn" data-project-filter="ai">Agentic AI (${resumeData.projects.filter(p => p.filterGroup === 'ai').length})</button>
            <button class="filter-btn project-filter-btn" data-project-filter="systems">Systems (${resumeData.projects.filter(p => p.filterGroup === 'systems').length})</button>
            <button class="filter-btn project-filter-btn" data-project-filter="web">Web &amp; 3D (${resumeData.projects.filter(p => p.filterGroup === 'web').length})</button>
          </div>

          <div class="deck-actions-bar">
            <button id="deckPrevBtn" class="deck-nav-btn" aria-label="Previous Card" title="Previous card">
              ${icons.chevronLeft}
              <span>Prev</span>
            </button>
            <button id="deckNextBtn" class="deck-nav-btn" aria-label="Next Card" title="Next card">
              <span>Next</span>
              ${icons.chevronRight}
            </button>
            <span style="color: var(--border-strong); margin: 0 2px;">|</span>
            <button id="deckModeToggle" class="deck-nav-btn" aria-label="Toggle Deck Fan or Grid view" title="Switch between Fan and Grid">
              ${icons.grid}
              <span id="deckModeLabel">Grid View</span>
            </button>
          </div>
        </div>

        <!-- Radial Playing-Card Fan Stage -->
        <div id="deckFanStage" class="deck-fan-stage reveal" role="region" aria-label="Fanned Deck of Project Cards">
          ${resumeData.projects.map((proj, idx) => {
            const statusClass = proj.status.includes('Featured') ? 'green' : (proj.status.includes('Live') ? 'blue' : 'neutral');
            const cardNum = String(idx + 1).padStart(2, '0');
            const cardMeta = getCardSuit(idx);
            const spineTitle = proj.title.split(':')[0].split('(')[0].trim();
            return `
              <div class="fan-card" data-project-group="${proj.filterGroup}" data-card-idx="${idx}" tabindex="0" role="article" aria-label="${proj.title}">
                <!-- Authentic Top-Left Playing Card Pip -->
                <div class="card-corner-pip top-left">
                  <span class="card-pip-rank">${cardMeta.rank}</span>
                  <span class="card-pip-suit ${cardMeta.isRed ? 'suit-red' : ''}">${icons[cardMeta.suit]}</span>
                  <span class="card-pip-num">#${cardNum}</span>
                </div>

                <!-- Top-Right GitHub Hyperlink (Prominently Pinned) -->
                ${proj.github ? `
                  <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="card-corner-github" title="Open ${proj.title} on GitHub" aria-label="Open GitHub Repository">
                    ${icons.github}
                    <span>GitHub</span>
                    ${icons.arrowUpRight}
                  </a>
                ` : ''}

                <!-- Left Spine Label (Aligned lower, within card boundaries) -->
                <div class="card-vertical-spine">
                  <span>${spineTitle}</span>
                </div>

                <!-- Scrollable Card Face Content -->
                <div class="card-content-wrapper">
                  <div class="card-header-row">
                    <div class="card-header-meta">
                      <span class="card-category-label">${proj.category}</span>
                      <span class="badge ${statusClass}">${proj.status}</span>
                    </div>
                  </div>

                  <div class="card-body-content">
                    <h3>${proj.title}</h3>
                    <p class="project-desc">${proj.description}</p>
                    
                    ${proj.architecture ? `
                      <div class="project-architecture">
                        <strong>Arch:</strong> ${proj.architecture}
                      </div>
                    ` : ''}

                    ${proj.highlights && proj.highlights.length ? `
                      <ul class="timeline-bullets">
                        ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                      </ul>
                    ` : ''}
                  </div>

                  <div class="card-footer-row">
                    <div class="project-tech-tags">
                      ${proj.tech.map(t => `<span>${t}</span>`).join('')}
                    </div>

                    ${proj.live ? `
                      <div class="project-links">
                        <a href="${proj.live}" target="_blank" rel="noopener noreferrer" class="project-btn-demo">
                          <span>Live Demo</span>
                          ${icons.arrowUpRight}
                        </a>
                      </div>
                    ` : ''}
                  </div>
                </div>

                <!-- Inverted Bottom-Right Corner Pip -->
                <div class="card-corner-pip bottom-right">
                  <span class="card-pip-rank">${cardMeta.rank}</span>
                  <span class="card-pip-suit ${cardMeta.isRed ? 'suit-red' : ''}">${icons[cardMeta.suit]}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="deck-keystroke-hint">
          <span>Hint: Hover any card in the fan to pop out &bull; Click to lock open &bull; Use <kbd>&larr;</kbd> / <kbd>&rarr;</kbd> arrow keys to browse</span>
        </div>
      </section>

      <!-- Interactive Agent CLI & Antigravity Terminal Section (At Bottom Before Contact) -->
      <section id="terminal" class="section-spacing">
        <div class="section-header reveal">
          <span class="section-eyebrow">Interactive Agent CLI</span>
          <h2>Developer Console &amp; Direct Discovery</h2>
          <p>Autonomous contact retrieval &amp; telemetry engine. Type <kbd>email</kbd>, <kbd>phone</kbd>, or select a preset to interact.</p>
        </div>

        <div class="terminal-window reveal">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="terminal-dot red"></span>
              <span class="terminal-dot yellow"></span>
              <span class="terminal-dot green"></span>
            </div>
            <span class="terminal-title">~</span>
            <span class="terminal-badge">
              <span class="status-dot"></span>
              <span>Antigravity Agent Ready</span>
            </span>
          </div>

          <div class="terminal-controls">
            <span class="terminal-controls-label">Presets:</span>
            <button class="terminal-chip" data-cmd="email">
              <span>email</span>
            </button>
            <button class="terminal-chip" data-cmd="phone">
              <span>phone</span>
            </button>
            <button class="terminal-chip" data-cmd="contact">
              <span>contact</span>
            </button>
            <button class="terminal-chip" data-cmd="skills">
              <span>skills</span>
            </button>
            <button class="terminal-chip" data-cmd="troubleshoot">
              <span>agent run</span>
            </button>
            <button class="terminal-chip" data-cmd="help">
              <span>help</span>
            </button>
            <button class="terminal-chip" data-cmd="clear">
              <span>clear</span>
            </button>
          </div>

          <!-- Canvas Layer with Antigravity Physics Particles & Foreground Text -->
          <div class="terminal-canvas-container">
            <canvas id="antigravityCanvas" class="antigravity-canvas"></canvas>
            <div id="terminalBody" class="terminal-body">
              <div class="terminal-line">
                <span class="terminal-tag tag-result">INFO</span>
                <span>Type <kbd>email</kbd> to retrieve primary contact, or click any preset chip above.</span>
              </div>
            </div>
          </div>

          <form id="terminalForm" class="terminal-prompt-bar">
            <span class="terminal-prompt-prefix">
              <span class="prompt-arrow">&rarr;</span>
              <span class="prompt-tilde">~</span>
            </span>
            <input 
              id="terminalInput" 
              type="text" 
              class="terminal-input" 
              placeholder="Type 'email', 'phone', 'contact', 'skills', or 'help'..." 
              autocomplete="off"
              spellcheck="false"
            />
          </form>
        </div>
      </section>

      <!-- Social Media Hyperlinks & Profiles Section -->
      <section id="contact" class="section-spacing social-section">
        <div class="social-container reveal">
          <div class="social-header">
            <span class="section-eyebrow" style="justify-content: center; margin-bottom: 0.75rem;">Social Profiles</span>
            <h2>Connect &amp; Follow</h2>
            <p>Direct hyperlinks and handles across technical networks, open source repositories, and AI publications.</p>
          </div>

          <div class="social-cards-grid">
            <a href="${resumeData.contact.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-card" aria-label="GitHub Profile @${resumeData.contact.github}">
              <div class="social-card-icon">${icons.github}</div>
              <div class="social-card-info">
                <span class="social-card-name">GitHub</span>
                <span class="social-card-id">@${resumeData.contact.github}</span>
              </div>
              <span class="social-card-action">${icons.arrowUpRight}</span>
            </a>

            <a href="${resumeData.contact.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-card" aria-label="LinkedIn Profile ${resumeData.contact.linkedin}">
              <div class="social-card-icon">${icons.linkedin}</div>
              <div class="social-card-info">
                <span class="social-card-name">LinkedIn</span>
                <span class="social-card-id">${resumeData.contact.linkedin}</span>
              </div>
              <span class="social-card-action">${icons.arrowUpRight}</span>
            </a>

            <a href="${resumeData.contact.twitterUrl}" target="_blank" rel="noopener noreferrer" class="social-card" aria-label="X Profile ${resumeData.contact.twitter}">
              <div class="social-card-icon">${icons.twitter}</div>
              <div class="social-card-info">
                <span class="social-card-name">X (Twitter)</span>
                <span class="social-card-id">${resumeData.contact.twitter}</span>
              </div>
              <span class="social-card-action">${icons.arrowUpRight}</span>
            </a>

            <a href="${resumeData.contact.substackUrl}" target="_blank" rel="noopener noreferrer" class="social-card" aria-label="Substack Profile ${resumeData.contact.substack}">
              <div class="social-card-icon">${icons.substack}</div>
              <div class="social-card-info">
                <span class="social-card-name">Substack</span>
                <span class="social-card-id">${resumeData.contact.substack}</span>
              </div>
              <span class="social-card-action">${icons.arrowUpRight}</span>
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container footer-container">
        <div>
          &copy; ${new Date().getFullYear()} ${resumeData.name} &mdash; Utilitarian Minimalist Portfolio.
        </div>
        <button id="backToTopBtn" class="back-to-top">
          <span>Back to Top &uarr;</span>
        </button>
      </div>
    </footer>
  `;

  // Attach interactive behavior
  setupInteractivity();
};

// Interactive Timeline with Alternating Spine & Dynamic Detail Showcase Card
const setupInteractiveTimeline = () => {
  const nodesList = document.querySelector('#timelineNodesList');
  const detailCard = document.querySelector('#timelineDetailCard');
  const filterBtns = document.querySelectorAll('.timeline-filter-bar .filter-btn');

  if (!nodesList || !detailCard) return;

  let currentFilter = 'experience'; // Default to Work Experience as requested
  let activeIndex = 0;

  const getFilteredItems = () => {
    if (currentFilter === 'experience') {
      return allTimelineItems.filter(item => item.isExperience);
    } else if (currentFilter === 'education') {
      return allTimelineItems.filter(item => item.isEducation);
    }
    return allTimelineItems;
  };

  const renderTimeline = (animate = true) => {
    const items = getFilteredItems();
    if (items.length === 0) return;

    if (activeIndex >= items.length) {
      activeIndex = 0;
    }

    nodesList.innerHTML = renderTimelineNodes(items, activeIndex);
    detailCard.innerHTML = renderTimelineDetailCard(items[activeIndex], activeIndex, items.length);

    if (animate) {
      detailCard.classList.remove('detail-anim-fade');
      void detailCard.offsetWidth;
      detailCard.classList.add('detail-anim-fade');
    }

    attachNodeEvents(items);
    attachStepperEvents(items);
  };

  const setActiveMilestone = (idx, scrollToCard = false) => {
    const items = getFilteredItems();
    if (idx < 0 || idx >= items.length || idx === activeIndex) return;

    activeIndex = idx;

    const rows = nodesList.querySelectorAll('.timeline-node-row');
    rows.forEach((row, i) => {
      const isCurrent = (i === activeIndex);
      row.classList.toggle('is-active', isCurrent);
      row.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    detailCard.innerHTML = renderTimelineDetailCard(items[activeIndex], activeIndex, items.length);
    detailCard.classList.remove('detail-anim-fade');
    void detailCard.offsetWidth;
    detailCard.classList.add('detail-anim-fade');

    attachStepperEvents(items);

    if (scrollToCard && window.innerWidth < 960) {
      detailCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const attachNodeEvents = (items) => {
    const rows = nodesList.querySelectorAll('.timeline-node-row');
    rows.forEach(row => {
      const idx = parseInt(row.getAttribute('data-milestone-idx'), 10);

      // Hover on timeline milestone updates detail showcase in real time
      row.addEventListener('mouseenter', () => {
        setActiveMilestone(idx, false);
      });

      // Click locks selection and ensures mobile visibility
      row.addEventListener('click', () => {
        setActiveMilestone(idx, true);
      });

      // Keyboard navigation
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActiveMilestone(idx, true);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const next = (idx + 1) % items.length;
          const nextRow = nodesList.querySelector(`[data-milestone-idx="${next}"]`);
          if (nextRow) nextRow.focus();
          setActiveMilestone(next, false);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = (idx - 1 + items.length) % items.length;
          const prevRow = nodesList.querySelector(`[data-milestone-idx="${prev}"]`);
          if (prevRow) prevRow.focus();
          setActiveMilestone(prev, false);
        }
      });
    });
  };

  const attachStepperEvents = (items) => {
    const prevBtn = detailCard.querySelector('#timelinePrevBtn');
    const nextBtn = detailCard.querySelector('#timelineNextBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prev = (activeIndex - 1 + items.length) % items.length;
        setActiveMilestone(prev, false);
        const targetRow = nodesList.querySelector(`[data-milestone-idx="${prev}"]`);
        if (targetRow) targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const next = (activeIndex + 1) % items.length;
        setActiveMilestone(next, false);
        const targetRow = nodesList.querySelector(`[data-milestone-idx="${next}"]`);
        if (targetRow) targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'experience';
      activeIndex = 0;
      renderTimeline(true);
    });
  });

  renderTimeline(false);
};

// Setup Interactivity & DOM Event Handlers
const setupInteractivity = () => {
  // 1. Theme Toggle
  const themeBtn = document.querySelector('#themeToggleBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('portfolio-theme', currentTheme);
      themeBtn.innerHTML = currentTheme === 'dark' ? icons.sun : icons.moon;
      
      const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
      if (metaColorScheme) {
        metaColorScheme.content = currentTheme;
      }
    });
  }

  // 2. Mobile Menu Toggle
  const mobileBtn = document.querySelector('#mobileMenuBtn');
  const drawer = document.querySelector('#mobileDrawer');
  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  // 3. Interactive Split Timeline with Alternating Spine & Showcase Card
  setupInteractiveTimeline();

  // 3b. Interactive Spread Card Deck & Filtering
  setupProjectsDeck();

  // 4. Interactive Agentic Terminal Simulator
  setupTerminalSandbox();

  // 5. One-Click Copy to Clipboard
  setupClipboardButtons();

  // 6. Back to Top Button
  const backToTop = document.querySelector('#backToTopBtn');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. Quiet Scroll Reveal via IntersectionObserver
  setupScrollReveal();
};

// Interactive Radial Playing-Card Fan Deck Logic
const setupProjectsDeck = () => {
  const stage = document.querySelector('#deckFanStage');
  const deckPrevBtn = document.querySelector('#deckPrevBtn');
  const deckNextBtn = document.querySelector('#deckNextBtn');
  const deckModeToggle = document.querySelector('#deckModeToggle');
  const deckModeLabel = document.querySelector('#deckModeLabel');
  const projectCards = document.querySelectorAll('.fan-card');
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');

  if (!stage) return;

  let activeIndex = -1;

  // Calculates smooth arc spread and rotation angles matching playing-card fan
  const layoutFanCards = () => {
    if (stage.classList.contains('grid-mode')) {
      projectCards.forEach(card => {
        card.style.removeProperty('--fan-x');
        card.style.removeProperty('--fan-y');
        card.style.removeProperty('--fan-angle');
        card.style.removeProperty('--fan-z');
      });
      return;
    }

    const visibleCards = Array.from(stage.querySelectorAll('.fan-card:not(.hidden)'));
    const N = visibleCards.length;
    if (N === 0) return;

    const stageWidth = stage.offsetWidth;
    const isMobile = stageWidth < 640;
    const isTablet = stageWidth < 900;

    let maxSpreadX;
    let maxAngle;
    let arcDrop;

    if (isMobile) {
      maxSpreadX = Math.max(40, Math.min(100, (stageWidth - 270) / 2));
      maxAngle = Math.min(16, N * 1.8);
      arcDrop = 20;
    } else if (isTablet) {
      maxSpreadX = Math.max(120, Math.min(230, (stageWidth - 320) / 2));
      maxAngle = Math.min(26, N * 2.4);
      arcDrop = 38;
    } else {
      maxSpreadX = Math.max(180, Math.min(330, (stageWidth - 340) / 2));
      maxAngle = Math.min(30, N * 2.8);
      arcDrop = 48;
    }

    visibleCards.forEach((card, i) => {
      // Normalized u from -1.0 (bottom-left) to +1.0 (top-right)
      const u = N === 1 ? 0 : (i - (N - 1) / 2) / ((N - 1) / 2);

      const x = Math.round(u * maxSpreadX);
      const y = Math.round(u * u * arcDrop);
      const angle = Number((u * maxAngle).toFixed(2));
      const z = i + 1;

      card.style.setProperty('--fan-x', `${x}px`);
      card.style.setProperty('--fan-y', `${y}px`);
      card.style.setProperty('--fan-angle', `${angle}deg`);
      card.style.setProperty('--fan-z', z);
    });
  };

  // Run layout
  layoutFanCards();
  window.addEventListener('resize', () => layoutFanCards());

  // Click card to lock popped-out state
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Allow clicking direct live demo or source links without toggling
      if (e.target.closest('a')) return;

      const isAlreadyActive = card.classList.contains('active-card');
      projectCards.forEach(c => c.classList.remove('active-card'));

      if (!isAlreadyActive) {
        card.classList.add('active-card');
        const visible = Array.from(stage.querySelectorAll('.fan-card:not(.hidden)'));
        activeIndex = visible.indexOf(card);
      } else {
        activeIndex = -1;
      }
    });
  });

  // Clicking outside stage clears active card
  document.addEventListener('click', (e) => {
    if (!stage.contains(e.target) && !e.target.closest('.deck-actions-bar')) {
      projectCards.forEach(c => c.classList.remove('active-card'));
      activeIndex = -1;
    }
  });

  // Cycle through cards via Prev / Next controls
  const cycleCard = (direction) => {
    const visible = Array.from(stage.querySelectorAll('.fan-card:not(.hidden)'));
    if (visible.length === 0) return;

    if (activeIndex === -1) {
      activeIndex = direction > 0 ? 0 : visible.length - 1;
    } else {
      activeIndex = (activeIndex + direction + visible.length) % visible.length;
    }

    visible.forEach(c => c.classList.remove('active-card'));
    const targetCard = visible[activeIndex];
    if (targetCard) {
      targetCard.classList.add('active-card');
      targetCard.focus();
    }
  };

  if (deckPrevBtn) {
    deckPrevBtn.addEventListener('click', () => cycleCard(-1));
  }

  if (deckNextBtn) {
    deckNextBtn.addEventListener('click', () => cycleCard(1));
  }

  // Keyboard navigation when not typing in inputs
  document.addEventListener('keydown', (e) => {
    if (stage.classList.contains('grid-mode')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowLeft') {
      cycleCard(-1);
    } else if (e.key === 'ArrowRight') {
      cycleCard(1);
    } else if (e.key === 'Escape') {
      projectCards.forEach(c => c.classList.remove('active-card'));
      activeIndex = -1;
    }
  });

  // Deck Fan vs Grid View Toggle
  if (deckModeToggle && deckModeLabel) {
    let isGrid = false;
    deckModeToggle.addEventListener('click', () => {
      isGrid = !isGrid;
      if (isGrid) {
        stage.classList.add('grid-mode');
        deckModeLabel.textContent = 'Fan View';
        deckModeToggle.classList.add('active');
        projectCards.forEach(c => c.classList.remove('active-card'));
      } else {
        stage.classList.remove('grid-mode');
        deckModeLabel.textContent = 'Grid View';
        deckModeToggle.classList.remove('active');
        layoutFanCards();
      }
    });
  }

  // Category Filtering
  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-project-filter');

      projectCards.forEach(card => {
        card.classList.remove('active-card');
        const group = card.getAttribute('data-project-group');
        if (filter === 'all' || filter === group) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      activeIndex = -1;
      layoutFanCards();
    });
  });
};

// Antigravity Particle Canvas Engine (macOS Terminal Demo Look)
const setupAntigravityCanvas = (terminalEl) => {
  const canvas = terminalEl.querySelector('#antigravityCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let isVisible = true;
  let width = 0, height = 0;

  const resize = () => {
    const parent = canvas.parentElement;
    if (!parent) return;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight || 300;
  };
  resize();
  window.addEventListener('resize', resize);

  const particleCount = 42;
  const particles = [];
  const maxDistance = 90;
  let mouse = { x: -1000, y: -1000 };

  terminalEl.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  terminalEl.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * (width || 600),
      y: Math.random() * (height || 300),
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.4 + 0.12), // Upward float (antigravity)
      radius: Math.random() * 1.4 + 0.8,
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  const render = () => {
    if (!isVisible) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Antigravity upward drift
      p.x += p.vx;
      p.y += p.vy;

      // Mouse repulsion / buoyancy
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 85 && dist > 0) {
        const force = ((85 - dist) / 85) * 0.7;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }

      // Wrap around bounds (float to top, reappear at bottom)
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(160, 210, 255, ${p.alpha * 0.75})`;
      ctx.fill();

      // Connect proximate particles with faint vector lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (lineDist < maxDistance) {
          const lineAlpha = (1 - lineDist / maxDistance) * 0.16;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(140, 200, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });
  }, { threshold: 0.05 });

  observer.observe(terminalEl);
  animationFrameId = requestAnimationFrame(render);
};

// Terminal Simulator Logic (Repurposed as Interactive Contact & Antigravity Discovery Console)
let isTerminalRunning = false;
const setupTerminalSandbox = () => {
  const terminalWindow = document.querySelector('.terminal-window');
  const terminalBody = document.querySelector('#terminalBody');
  const terminalForm = document.querySelector('#terminalForm');
  const terminalInput = document.querySelector('#terminalInput');
  const presetChips = document.querySelectorAll('.terminal-chip');

  if (!terminalBody || !terminalWindow) return;

  // Initialize Antigravity Particle Animation Canvas
  setupAntigravityCanvas(terminalWindow);

  const appendTerminalLine = (tag, tagClass, text) => {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `<span class="terminal-tag ${tagClass}">${tag}</span><span>${text}</span>`;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  };

  const appendTerminalLineHtml = (tag, tagClass, html) => {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `<span class="terminal-tag ${tagClass}">${tag}</span><div>${html}</div>`;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  };

  const executePreset = async (preset) => {
    if (isTerminalRunning) return;
    isTerminalRunning = true;

    appendTerminalLine('CMD', 'tag-cmd', preset.command);

    for (const step of preset.steps) {
      await new Promise(r => setTimeout(r, 550));
      const tagMap = {
        plan: { label: 'PLAN', cls: 'tag-plan' },
        think: { label: 'THINK', cls: 'tag-think' },
        tool: { label: 'TOOL', cls: 'tag-tool' },
        result: { label: 'RESULT', cls: 'tag-result' },
        success: { label: 'SUCCESS', cls: 'tag-success' }
      };
      const t = tagMap[step.type] || { label: 'LOG', cls: 'tag-result' };
      appendTerminalLine(t.label, t.cls, step.text);
    }

    isTerminalRunning = false;
  };

  const processCommand = async (cmdRaw) => {
    const val = cmdRaw.trim().toLowerCase();
    if (!val || isTerminalRunning) return;

    appendTerminalLine('INPUT', 'tag-cmd', val);

    if (val === 'clear' || val === 'cls') {
      terminalBody.innerHTML = '';
      appendTerminalLine('INFO', 'tag-result', 'Type email to retrieve primary contact, or click any preset chip.');
    } else if (val === 'email' || val === 'mail' || val === 'e-mail') {
      appendTerminalLine('PLAN', 'tag-plan', 'Resolving primary communication channel for Vikram Rajpurohit...');
      await new Promise(r => setTimeout(r, 220));
      appendTerminalLine('RESOLVE', 'tag-tool', 'Identity: Vikram Rajpurohit → Channel: Email');
      await new Promise(r => setTimeout(r, 220));
      const emailHtml = `
        <div style="margin: 0.2rem 0 0.35rem;">
          <span style="color: #ffffff; font-weight: 600; font-size: 0.95rem;">${resumeData.contact.email}</span>
        </div>
        <div class="terminal-inline-actions">
          <a href="mailto:${resumeData.contact.email}?subject=Inquiry%20via%20Agent%20CLI" class="terminal-inline-link">
            ${icons.arrowUpRight}
            <span>Send Email</span>
          </a>
          <button class="terminal-inline-copy copy-contact-btn" data-copy-val="${resumeData.contact.email}">
            ${icons.copy}
            <span>Copy Address</span>
            <span class="copy-tooltip">Copied</span>
          </button>
        </div>
      `;
      appendTerminalLineHtml('EMAIL', 'tag-success', emailHtml);
      setupClipboardButtons();
    } else if (val === 'phone' || val === 'call' || val === 'mobile' || val === 'tel') {
      appendTerminalLine('PLAN', 'tag-plan', 'Fetching verified direct telephone lines...');
      await new Promise(r => setTimeout(r, 220));
      const phoneHtml = `
        <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.25rem;">
          <div>• India (Direct): <strong>${resumeData.contact.inPhone}</strong> (Mumbai, IN)</div>
          <div>• United Kingdom: <strong>${resumeData.contact.ukPhone}</strong> (Birmingham, UK)</div>
        </div>
        <div class="terminal-inline-actions">
          <button class="terminal-inline-copy copy-contact-btn" data-copy-val="${resumeData.contact.inPhone}">
            ${icons.copy}
            <span>Copy India (+91)</span>
            <span class="copy-tooltip">Copied</span>
          </button>
          <button class="terminal-inline-copy copy-contact-btn" data-copy-val="${resumeData.contact.ukPhone}">
            ${icons.copy}
            <span>Copy UK (+44)</span>
            <span class="copy-tooltip">Copied</span>
          </button>
        </div>
      `;
      appendTerminalLineHtml('PHONE', 'tag-success', phoneHtml);
      setupClipboardButtons();
    } else if (val === 'contact' || val === 'all' || val === 'channels') {
      appendTerminalLine('PLAN', 'tag-plan', 'Aggregating complete contact matrix & verified profiles...');
      await new Promise(r => setTimeout(r, 220));
      const contactHtml = `
        <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.25rem;">
          <div>• Email: <a href="mailto:${resumeData.contact.email}" class="terminal-text-link">${resumeData.contact.email}</a></div>
          <div>• Phones: ${resumeData.contact.inPhone} (IN) | ${resumeData.contact.ukPhone} (UK)</div>
          <div>• Substack: <a href="${resumeData.contact.substackUrl}" target="_blank" rel="noopener noreferrer" class="terminal-text-link">${resumeData.contact.substackUrl}</a></div>
          <div>• LinkedIn: <a href="${resumeData.contact.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="terminal-text-link">${resumeData.contact.linkedinUrl}</a></div>
          <div>• GitHub: <a href="${resumeData.contact.githubUrl}" target="_blank" rel="noopener noreferrer" class="terminal-text-link">${resumeData.contact.githubUrl}</a></div>
        </div>
      `;
      appendTerminalLineHtml('CONTACT', 'tag-success', contactHtml);
    } else if (val === 'skills' || val === 'stack') {
      appendTerminalLine('STACK', 'tag-tool', 'Core: Multi-Agent Systems, Ollama, LangChain, Python, Local LLMs, PyTorch, Playwright, React, Three.js');
    } else if (val === 'whoami' || val === 'about') {
      appendTerminalLine('INFO', 'tag-success', `${resumeData.name} — LLM Engineer & Agentic AI Specialist (Mumbai, IN). Architecting Autonomous Multi-Agent Workflows & Offline LLMs.`);
    } else if (val === 'run' || val.includes('troubleshoot')) {
      executePreset(resumeData.agentPresets[0]);
    } else if (val === 'help') {
      appendTerminalLine('HELP', 'tag-plan', 'Available interactive commands:');
      appendTerminalLine('LIST', 'tag-result', '• email     - Retrieve Vikram\'s primary email with 1-click actions');
      appendTerminalLine('LIST', 'tag-result', '• phone     - Display verified telephone lines (India & UK)');
      appendTerminalLine('LIST', 'tag-result', '• contact   - Return complete communication channels');
      appendTerminalLine('LIST', 'tag-result', '• skills    - Output verified engineering competencies');
      appendTerminalLine('LIST', 'tag-result', '• run       - Execute multi-step autonomous troubleshooting agent');
      appendTerminalLine('LIST', 'tag-result', '• clear     - Clear the terminal console output');
    } else {
      appendTerminalLine('ERR', 'tag-result', `Command not recognized: '${val}'. Type 'email', 'phone', 'contact', 'skills', or 'help'.`);
    }
  };

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        processCommand(cmd);
      } else {
        const idx = Number(chip.getAttribute('data-preset-idx'));
        const preset = resumeData.agentPresets[idx];
        if (preset) executePreset(preset);
      }
    });
  });

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = '';
      processCommand(val);
    });
  }
};

// Clipboard copy helper
const setupClipboardButtons = () => {
  document.querySelectorAll('.copy-contact-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy-val');
      const tooltip = btn.querySelector('.copy-tooltip');

      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        if (tooltip) {
          tooltip.classList.add('show');
          setTimeout(() => tooltip.classList.remove('show'), 2000);
        }
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (tooltip) {
          tooltip.classList.add('show');
          setTimeout(() => tooltip.classList.remove('show'), 2000);
        }
      }
    });
  });
};

// Scroll Reveal via IntersectionObserver
const setupScrollReveal = () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
  );

  reveals.forEach(el => observer.observe(el));
};

// Initialize once
renderApp();
