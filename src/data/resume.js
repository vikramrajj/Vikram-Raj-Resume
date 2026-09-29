/**
 * Portfolio Data Model for Vikram Rajpurohit
 * LLM Engineer & Agentic AI Specialist
 */

export const resumeData = {
  name: "Vikram Rajpurohit",
  title: "LLM Engineer | Agentic AI Specialist",
  tagline: "Engineering autonomous multi-agent systems, privacy-first offline LLMs, and intelligent automation for complex enterprise challenges.",
  status: "Open to UK & Remote Opportunities",
  
  contact: {
    location: "Mumbai, India",
    ukPhone: "+44 7554 509946",
    inPhone: "+91 89766 74161",
    email: "vikramraj95@live.com",
    linkedin: "vikram-rajpurohit-a486b17a",
    linkedinUrl: "https://linkedin.com/in/vikram-rajpurohit-a486b17a",
    twitter: "@imvikramraj",
    twitterUrl: "https://twitter.com/imvikramraj",
    github: "vikramrajj",
    githubUrl: "https://github.com/vikramrajj",
    substack: "@imvikramraj",
    substackUrl: "https://substack.com/@imvikramraj"
  },

  stats: [
    { value: "5+ Years", label: "Enterprise IT & Automation" },
    { value: "MSc AI", label: "Aston University (2025 — 2026)" },
    { value: "Offline & Edge", label: "Ollama & Local Agent Stacks" },
    { value: "15+", label: "GitHub Repositories & Tools" }
  ],

  objective: "Dedicated LLM Engineer and Master of Science in AI graduate specialized in designing autonomous multi-agent architectures, reinforcement distillation for local models, persistent AI context engines, and end-to-end browser agent pipelines. Combining 5+ years of enterprise IT problem-solving with cutting-edge agentic frameworks to build dependable, self-healing, and tool-augmented AI systems.",

  skills: [
    {
      category: "Agentic AI & LLMs",
      description: "Autonomous reasoning, tool-calling, and local model orchestration",
      items: [
        { name: "Multi-Agent Orchestration", level: "Expert" },
        { name: "Offline LLM Deployment (Ollama / llama.cpp)", level: "Advanced" },
        { name: "LLM Distillation & Fine-Tuning", level: "Advanced" },
        { name: "LangChain & LangGraph", level: "Advanced" },
        { name: "Autonomous Web Agents (Playwright)", level: "Advanced" },
        { name: "RAG & Vector Search (FAISS, Chroma)", level: "Advanced" },
        { name: "Persistent IDE Memory & Context Management", level: "Advanced" }
      ]
    },
    {
      category: "Machine Learning & Data Science",
      description: "Statistical modeling, predictive analytics, and natural language",
      items: [
        { name: "Natural Language Processing (NLP)", level: "Advanced" },
        { name: "Supervised & Unsupervised ML", level: "Advanced" },
        { name: "PyTorch & Scikit-Learn", level: "Proficient" },
        { name: "Vector Databases & Embeddings", level: "Proficient" },
        { name: "Data Analysis & EDA (Pandas, NumPy)", level: "Advanced" },
        { name: "Recommendation Systems", level: "Proficient" }
      ]
    },
    {
      category: "Enterprise Cloud & DevOps",
      description: "Identity management, ITSM workflows, and systems admin",
      items: [
        { name: "Azure Active Directory (Azure AD)", level: "Advanced" },
        { name: "ServiceNow ITSM & Workflows", level: "Advanced" },
        { name: "DNS Architecture & Network Filtering", level: "Advanced" },
        { name: "Git & GitHub Workflows", level: "Advanced" },
        { name: "Linux & Windows Systems Administration", level: "Advanced" },
        { name: "Root Cause Analysis (RCA)", level: "Expert" }
      ]
    }
  ],

  projects: [
    // --- 1. Agentic AI & LLMs ---
    {
      id: "rag-agent",
      title: "RAG-Agent: Local Multi-Agent LLM Model",
      category: "Agentic AI & LLMs",
      filterGroup: "ai",
      status: "Featured / Open Source",
      featured: true,
      description: "Confidential, 100% offline multi-agent architecture built to run entirely on local hardware. Eliminates cloud API dependencies while autonomously orchestrating diagnostic workflows and enterprise knowledge retrieval.",
      architecture: "Orchestrated using local Ollama model instances, LangChain agent loops, dynamic tool-use reflection, and deterministic verification gates.",
      highlights: [
        "Zero-cloud leakage: guarantees data confidentiality for enterprise operations",
        "Autonomous multi-step diagnostic reasoning and remediation action triggers",
        "Configured for high-throughput local CPU/GPU inference"
      ],
      tech: ["Ollama", "LangChain", "Python", "Local LLMs", "RAG", "Multi-Agent"],
      github: "https://github.com/vikramrajj/RAG-Agent",
      live: null
    },
    {
      id: "llm-distill",
      title: "LLM-distill: Reinforcement Distillation for Local Agents",
      category: "Agentic AI & LLMs",
      filterGroup: "ai",
      status: "Featured / Research",
      featured: true,
      description: "A framework for building lightweight, agentic AI models that learn from environmental feedback. Uses knowledge distillation and reinforcement learning techniques to enable consumer hardware to execute complex agentic workflows.",
      architecture: "Teacher-student distillation pipeline transferring multi-step reasoning from large frontier models to compact 3B–7B parameter models.",
      highlights: [
        "Enables low-latency agent reasoning on edge devices and standard developer laptops",
        "Environment reward modeling for task completion feedback loops",
        "Explores policy optimization and fine-tuning for structured tool calling"
      ],
      tech: ["PyTorch", "Jupyter", "LLM Distillation", "Reinforcement Learning", "Python"],
      github: "https://github.com/vikramrajj/LLM-distill",
      live: null
    },
    {
      id: "north-star",
      title: "North Star: Persistent Memory Extension for VS Code",
      category: "Agentic AI & LLMs",
      filterGroup: "ai",
      status: "Developer Tool",
      featured: true,
      description: "VS Code extension providing persistent cognitive memory for AI coding assistants. Seamlessly preserves project context across AI model switches, session disconnects, and IDE restarts.",
      architecture: "Local vector embedding cache combined with VS Code Extension API and AST parsing to retain developer context without reloading massive prompts.",
      highlights: [
        "Prevents 'context amnesia' when toggling between Claude, Gemini, or local models",
        "Intelligent session serialization and diff tracking across code workspaces",
        "Minimizes context token costs and redundant prompt setup"
      ],
      tech: ["TypeScript", "VS Code Extension API", "Vector Context", "Node.js"],
      github: "https://github.com/vikramrajj/north-star",
      live: null
    },
    {
      id: "scrapper-ai",
      title: "ScrapeChat AI: Local-First Web Scraping Agent",
      category: "Agentic AI & LLMs",
      filterGroup: "ai",
      status: "Open Source",
      featured: false,
      description: "Local-first AI web extraction assistant combining ScrapeGraphAI with llama.cpp. Converts raw web pages and complex DOMs into structured, queryable data through natural language conversations.",
      architecture: "Headless Chromium web parser piped into local llama.cpp quantized model instances with interactive Streamlit/UI dashboard.",
      highlights: [
        "Zero-API-cost web scraping using local quantized LLM inference",
        "Intelligent DOM schema extraction avoiding brittle CSS selector changes",
        "Conversational query interface for unstructured page analysis"
      ],
      tech: ["Python", "ScrapeGraphAI", "llama.cpp", "Playwright", "Web Scraping"],
      github: "https://github.com/vikramrajj/Scrapper",
      live: null
    },
    {
      id: "muvrec",
      title: "MuVRec: Taste & Nuance-Aware Movie Recommendation",
      category: "Agentic AI & LLMs",
      filterGroup: "ai",
      status: "Open Source",
      featured: false,
      description: "Intelligent movie recommendation engine leveraging Large Language Models to interpret nuanced user tastes, thematic moods, and contextual plot elements beyond simple genre tags.",
      architecture: "Semantic embedding similarity over cinematic plot synopses and character arcs paired with LLM prompt re-ranking.",
      highlights: [
        "Semantic matching for nuanced prompts (e.g., 'existential sci-fi with quiet optimism')",
        "Vectorized catalog indexing for low-latency recommendation candidate generation",
        "Explainable recommendation rationale generated on-the-fly"
      ],
      tech: ["Python", "LLMs", "Vector Embeddings", "Recommender Systems"],
      github: "https://github.com/vikramrajj/MuVRec",
      live: null
    },
    {
      id: "ai-training-plan",
      title: "aitrainingplan.app: AI Workout & Form Platform",
      category: "Agentic AI & LLMs",
      filterGroup: "ai",
      status: "Production Live",
      featured: false,
      description: "AI-assisted gym coaching and muscle targeting web application providing personalized workout structures, biomechanical form cues, and photo-based progress logs.",
      architecture: "Responsive frontend built with Vite and React, deployed globally on Vercel with structured exercise taxonomy and routine generators.",
      highlights: [
        "Custom biomechanical targeting cues without requiring expensive personal coaches",
        "Visual progress logs and adaptive routine splitting",
        "Ultra-fast mobile-optimized client deployed on Vercel"
      ],
      tech: ["React", "JavaScript", "Vite", "Tailwind/CSS", "Vercel"],
      github: "https://github.com/vikramrajj/-aitrainingplan.app",
      live: "https://aitrainingplan-app.vercel.app"
    },

    // --- 2. Systems, Infrastructure & Developer Tools ---
    {
      id: "nexus-cli",
      title: "NexusCLI: AI-Native Terminal Workspace & Cleaner",
      category: "Systems & DevTools",
      filterGroup: "systems",
      status: "Open Source / Rust",
      featured: true,
      description: "High-performance AI-native terminal workspace engineered in Rust for rapid code exploration, intelligent indexing, and assistance — packaged alongside 'Burrow', an automated Linux system cleaner.",
      architecture: "Compiled native binary using Rust async runtime (Tokio) for sub-millisecond command dispatch, tree-sitter AST queries, and automated disk cleanup routines.",
      highlights: [
        "Blazing-fast native execution with minimal memory footprint",
        "Integrated Linux disk optimization and cache pruning subroutines",
        "Interactive CLI workspace optimized for developer workflows"
      ],
      tech: ["Rust", "Systems Programming", "CLI", "Linux Tooling", "Tokio"],
      github: "https://github.com/vikramrajj/NexusCLI",
      live: null
    },
    {
      id: "gully-map",
      title: "GullyMap: Micro-Navigation & 3D WebGL Engine",
      category: "Systems & DevTools",
      filterGroup: "systems",
      status: "Featured / Open Source",
      featured: true,
      description: "Scene-aware 3D micro-navigation engine designed to resolve dense urban last-mile delivery navigation in narrow lanes ('gullies') where conventional GPS satellites lose accuracy.",
      architecture: "Custom 3D WebGL rendering engine with spatial geometry partitioning and micro-waypoint routing written in TypeScript.",
      highlights: [
        "Addresses real-world delivery latency in dense Asian and European urban alleys",
        "Hardware-accelerated 3D WebGL spatial rendering with scene-aware orientation",
        "Optimized graph routing algorithm for non-standard pedestrian pathways"
      ],
      tech: ["TypeScript", "3D WebGL", "Spatial Algorithms", "GIS", "Vite"],
      github: "https://github.com/vikramrajj/GullyMap",
      live: null
    },
    {
      id: "price-discovery",
      title: "PriceScout: Multi-Platform E-Commerce Meta-Search",
      category: "Systems & DevTools",
      filterGroup: "systems",
      status: "Open Source",
      featured: false,
      description: "Aggregated price discovery and historical tracker scanning Amazon, Flipkart, Myntra, Meesho, and Tata Cliq with a self-hosted backend and SearXNG-style meta-search comparison.",
      architecture: "Concurrent web scrapers coordinated via TypeScript, storing price-point telemetry over time to identify true discounts versus artificial inflation.",
      highlights: [
        "Cross-platform concurrent price comparison across 5 major e-commerce platforms",
        "Self-hosted privacy-focused price history time-series database",
        "Automated notification triggers when products breach price drop thresholds"
      ],
      tech: ["TypeScript", "Node.js", "Web Scraping", "Data Extraction", "REST APIs"],
      github: "https://github.com/vikramrajj/Price-Discovery",
      live: null
    },
    {
      id: "ad-dns",
      title: "Private-DNS: High-Throughput Linux DNS Sinkhole",
      category: "Systems & DevTools",
      filterGroup: "systems",
      status: "Open Source",
      featured: false,
      description: "Local ad-blocking and anti-tracking DNS sinkhole built for Linux workstations (Pi-hole style policy). Enforces network-level privacy without browser plugin overhead.",
      architecture: "Custom Python DNS server daemon featuring fast memory blocklist lookups, domain suffix matching, and upstream resolver failover.",
      highlights: [
        "Zero-latency memory-mapped blocklist filtering for millions of tracking domains",
        "Whitelist override logic ensuring zero false-positive service disruption",
        "Network-wide protection spanning all browsers, background apps, and telemetry"
      ],
      tech: ["Python", "DNS Protocol", "Network Security", "Linux Admin", "Sockets"],
      github: "https://github.com/vikramrajj/AD-DNS",
      live: null
    },
    {
      id: "windows-cleaner",
      title: "Windows System Cleaner: CLI & GUI Optimization",
      category: "Systems & DevTools",
      filterGroup: "systems",
      status: "Desktop Utility",
      featured: false,
      description: "A dual CLI and GUI system maintenance tool that scans deep cache, orphaned log paths, and temporary system directories on Windows to safely reclaim storage space.",
      architecture: "Python engine with Win32 API integration, interactive disk Tree Map visualization, and safety-verified file cleanup lists.",
      highlights: [
        "Interactive Tree Map disk visualization to pinpoint space hogs instantly",
        "Safe-target heuristics preventing accidental deletion of active system dependencies",
        "Streamlines routine enterprise Windows IT workstation maintenance"
      ],
      tech: ["Python", "Windows Administration", "GUI", "Win32 APIs", "IT Support"],
      github: "https://github.com/vikramrajj/Windows-Cleaner",
      live: null
    },

    // --- 3. Interactive Web & Creative Applications ---
    {
      id: "weather-skylux",
      title: "SkyLux Weather: Live Atmospheric & Sky Simulation",
      category: "Interactive & 3D Web",
      filterGroup: "web",
      status: "Open Source",
      featured: true,
      description: "An atmospheric weather station that goes far beyond temperature and standard icons — featuring real-time sky simulations, solar lux calculations, air germ index, pollen forecasts, UV skin exposure timers, and night-sky planet visibility.",
      architecture: "Canvas WebGL shader pipeline powered by keyless Open-Meteo astronomical APIs, calculating celestial ephemeris and solar irradiance in real-time.",
      highlights: [
        "Live celestial simulation: accurate sun arc, night-sky constellations, and planetary positions",
        "Health & environmental metrics: air germ index, pollen breakdown, and UV skin burn times",
        "Zero-key, privacy-respecting client utilizing free open-source meteorological APIs"
      ],
      tech: ["JavaScript", "Canvas/WebGL", "Open-Meteo APIs", "Astronomical Math", "CSS3"],
      github: "https://github.com/vikramrajj/Weather",
      live: null
    },
    {
      id: "cosmic-explorer",
      title: "3D Solar System | Cosmic Explorer",
      category: "Interactive & 3D Web",
      filterGroup: "web",
      status: "Production Live",
      featured: true,
      description: "An immersive, photorealistic 3D celestial simulator built with Three.js. Allows users to traverse our solar system with real-world orbital trajectories, dynamic planetary shaders, and interactive astronomical dossiers.",
      architecture: "Optimized WebGL rendering pipeline with custom shaders, dynamic lighting models, and physics-based orbital calculations packaged via Vite.",
      highlights: [
        "Interactive orbital mechanics and smooth 60fps celestial camera transitions",
        "Detailed planetary telemetry and high-resolution texture mapping",
        "Zero-dependency lightweight client bundle deployed globally on Vercel"
      ],
      tech: ["Three.js", "WebGL", "Vite", "JavaScript", "GLSL Shaders"],
      github: "https://github.com/vikramrajj/3d-solar-system",
      live: "https://3d-solar-system-snowy.vercel.app/"
    },
    {
      id: "hangout-social",
      title: "Hangout: Real-Life Spontaneous Social Map",
      category: "Interactive & 3D Web",
      filterGroup: "web",
      status: "Open Source",
      featured: false,
      description: "A counter-culture location-based social app designed to facilitate spontaneous real-world meetups — intentionally eliminating infinite feeds, like counts, and vanity metrics.",
      architecture: "Interactive geospatial map interface matching nearby active events and coffee/study hangouts within walking radius.",
      highlights: [
        "Radical focus on real-world face-to-face interaction over algorithmic screen time",
        "Privacy-preserving temporary location beacons that expire automatically",
        "Lightweight responsive map rendering without heavy commercial tracking SDKs"
      ],
      tech: ["JavaScript", "Leaflet / Maps API", "Geolocation", "Responsive UI"],
      github: "https://github.com/vikramrajj/Hangout",
      live: null
    },
    {
      id: "medisch-nederlands",
      title: "Medisch Nederlands | Clinical Language Trainer",
      category: "Interactive & 3D Web",
      filterGroup: "web",
      status: "Production Live",
      featured: false,
      description: "Gamified language learning platform tailored for healthcare professionals preparing for medical Dutch certifications (A2–B2 CEFR levels).",
      architecture: "Built with React and Node.js with spaced-repetition flashcards, clinical diagnostic scenarios, and instant pronunciation feedback loops.",
      highlights: [
        "Specialized clinical taxonomy for doctor-patient consultations and nursing terms",
        "Interactive flashcards with smooth CSS state animations and score tracking",
        "Engineered for high engagement with responsive mobile-first UI"
      ],
      tech: ["React", "CSS Animation", "Node.js", "EdTech", "Vercel"],
      github: "https://github.com/vikramrajj/dutchlearningmedical",
      live: "https://dutchlearningmedical.vercel.app/"
    },
    {
      id: "cricket-nerd",
      title: "Cricket Nerd: Interactive Cricket Analytics",
      category: "Interactive & 3D Web",
      filterGroup: "web",
      status: "Production Live",
      featured: false,
      description: "Gamified cricket learning hub and live analytics platform featuring interactive rule tutorials, historical trivia simulations, and responsive glassmorphism aesthetic.",
      architecture: "Modern responsive web app with custom SVG visualizations, match telemetry cards, and stateful trivia engine.",
      highlights: [
        "Interactive visualizations explaining complex cricket fielding positions and bowling variations",
        "High-performance glassmorphism UI styled for desktop and mobile screens",
        "Deployed with instant global CDN caching on Vercel"
      ],
      tech: ["JavaScript", "Vite", "Modern CSS", "SVG Graphics", "Vercel"],
      github: "https://github.com/vikramrajj/Cricket-Nerd",
      live: "https://cricketnerd.vercel.app"
    },
    {
      id: "pacman-store",
      title: "Pacman-Store | Retro Arcade E-Commerce",
      category: "Interactive & 3D Web",
      filterGroup: "web",
      status: "Production Live",
      featured: false,
      description: "A nostalgic retro arcade-themed e-commerce experience blending classic 80s gaming aesthetics with modern checkout and inventory mechanics.",
      architecture: "Pure Vanilla JavaScript with custom state machine, audio synthesizer effects, and responsive CSS grid arcade cabinet styling.",
      highlights: [
        "Custom arcade sound effects and pixelated retro typography",
        "Real-time cart state management without heavyweight frameworks",
        "Flawless cross-browser performance and fluid retro animations"
      ],
      tech: ["Vanilla JS", "Retro UI", "HTML5 Canvas", "State Machine"],
      github: "https://github.com/vikramrajj/Pacman-Store.",
      live: "https://pacmanstore.vercel.app/"
    }
  ],

  experience: [
    {
      year: "2021 — 2024",
      period: "Jan 2021 — Dec 2024",
      role: "IT Support Analyst (LLM & Automation Focused)",
      company: "ZS Associates",
      location: "Pune, India",
      domain: "zs.com",
      accent: "#0066cc",
      summary: "Operational incident analysis across 10,000+ users & autonomous AI agentic workflows.",
      details: [
        "Analyzed operational incident data across 10,000+ enterprise users and prototyped autonomous AI agentic workflows to resolve high-frequency Outlook and Office 365 issues.",
        "Managed enterprise identity, role-based access control (RBAC), and security posture using Azure Active Directory and ServiceNow ITSM platform.",
        "Conducted quarterly support telemetry and service desk data analysis, identifying system bottlenecks and driving automated remediation protocols.",
        "Authored technical runbooks and mentored cross-functional analyst teams on automation scripting and ITIL service standards."
      ],
      skills: ["Azure AD", "ServiceNow", "Process Automation", "Telemetry Analysis", "Python"]
    },
    {
      year: "2019",
      period: "Jul 2019 — Dec 2019",
      role: "IT Analyst (Healthcare Systems)",
      company: "Wipro",
      location: "Pune, India",
      domain: "wipro.com",
      accent: "#e05a47",
      summary: "Real-time healthcare SLA incident resolution & core configuration pilot team.",
      details: [
        "Delivered critical real-time incident resolution for healthcare enterprise clients under stringent SLA constraints.",
        "Selected as an instrumental Core Pilot Team member responsible for establishing baseline system configurations, incident triaging SOPs, and knowledge base documentation.",
        "Liaised with client-side engineering teams to diagnose recurring data sync and application connectivity exceptions."
      ],
      skills: ["Healthcare IT", "SLA Management", "SOP Documentation", "Incident Triaging"]
    },
    {
      year: "2018 — 2019",
      period: "Sep 2018 — Apr 2019",
      role: "IT Support Analyst",
      company: "Tech Mahindra",
      location: "Pune, India",
      domain: "techmahindra.com",
      accent: "#ff0033",
      summary: "Silicon Valley client operations, infrastructure provisioning & tier-1 latency reduction.",
      details: [
        "Deployed on the dedicated Pilot Team supporting Katerra (Silicon Valley construction technology startup) for international technical operations.",
        "Managed client-facing infrastructure provisioning, account onboarding, and cross-platform technical support across multiple international offices.",
        "Optimized tier-1 escalation workflows, cutting ticket transfer latency by 25%."
      ],
      skills: ["Cross-border Support", "User Provisioning", "Ticket Escalation", "System Onboarding"]
    },
    {
      year: "2018",
      period: "Jan 2018 — Sep 2018",
      role: "Research Assistant & IT Testing",
      company: "Ultra Skills (Soulfit Startup)",
      location: "India",
      domain: "soulfit.io",
      accent: "#2ecc71",
      summary: "Wearable IoT Bluetooth regression testing, EVT cycles & competitor analysis.",
      details: [
        "Conducted in-depth market research and competitor technical analysis for Soulfit's innovative Bluetooth health bands and wearable devices.",
        "Led hardware-software integration quality assurance, regression testing, and technical validation across device prototypes.",
        "Supported the end-to-end product lifecycle from engineering validation tests (EVT) through e-commerce catalog launches."
      ],
      skills: ["IoT/Wearables Testing", "Competitive Research", "QA Validation", "Product Launch"]
    },
    {
      year: "2016 — 2017",
      period: "Nov 2016 — Dec 2017",
      role: "Internal IT Engineer",
      company: "Tata Consultancy Services (TCS)",
      location: "Kolkata, India",
      domain: "tcs.com",
      accent: "#1e3799",
      summary: "Enterprise Windows Server environments, Active Directory GPO & security audits.",
      details: [
        "Administered enterprise Windows Server environments, Active Directory group policies (GPO), and internal workstation fleets.",
        "Ensured compliance with corporate security audits, patch deployment schedules, and network access policies."
      ],
      skills: ["Windows Server", "Active Directory", "Enterprise Security", "Patch Management"]
    }
  ],

  education: [
    {
      year: "2025 — 2026",
      period: "Jan 2025 — May 2026",
      degree: "MSc in Artificial Intelligence",
      institution: "Aston University",
      location: "Birmingham, United Kingdom",
      domain: "aston.ac.uk",
      accent: "#6c5ce7",
      summary: "Post-graduate AI research in multi-agent systems, local LLMs & NLP architectures.",
      description: "Advanced post-graduate specialization in Natural Language Processing, Machine Learning Theory, Autonomous Agentic Systems, and Deep Learning.",
      highlight: "Multi-Agent Based Tech Support Solution: Architected an autonomous multi-agent triage system utilizing local LLMs and LangChain to troubleshoot enterprise IT issues, drastically reducing mean-time-to-resolution (MTTR) while preserving local privacy.",
      skills: ["Multi-Agent AI", "Natural Language Processing", "LangChain", "Offline LLMs", "Python"]
    },
    {
      year: "2020 — 2021",
      period: "Feb 2020 — Jan 2021",
      degree: "Certification in Data Science",
      institution: "Board Infinity Institute",
      location: "Mumbai, India",
      domain: "boardinfinity.com",
      accent: "#fd79a8",
      summary: "Statistical inference, exploratory data analysis & predictive ML pipelines.",
      description: "Comprehensive program covering statistical inference, exploratory data analysis, machine learning algorithms, and predictive data pipelines.",
      highlight: null,
      skills: ["Data Science", "Machine Learning", "Statistical Modeling", "Python"]
    },
    {
      year: "2013 — 2016",
      period: "2013 — 2016",
      degree: "B.E. in Computer Engineering",
      institution: "Fr. CRCE, Mumbai University",
      location: "Mumbai, India",
      domain: "frcrce.ac.in",
      accent: "#0984e3",
      summary: "Undergraduate degree in distributed systems, algorithms & computer networks.",
      description: "Four-year undergraduate degree in Computer Engineering covering Distributed Systems, Relational Database Management Systems, Data Structures & Algorithms, and Computer Networks.",
      highlight: null,
      skills: ["Computer Engineering", "Distributed Systems", "Algorithms", "Databases"]
    },
    {
      year: "2010 — 2013",
      period: "2010 — 2013",
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Mumbai",
      location: "Mumbai, India",
      domain: "gpmumbai.ac.in",
      accent: "#00b894",
      summary: "Premier state diploma in C/C++ systems programming, OS internals & microprocessors.",
      description: "Premier autonomous state institution. Grounded foundations in C/C++ systems programming, microprocessor architecture, operating system internals, and networking fundamentals.",
      highlight: null,
      skills: ["C/C++", "System Architecture", "Networking", "OS Internals"]
    }
  ],

  // Interactive Agent Simulator presets
  agentPresets: [
    {
      command: "agent run troubleshoot-outlook",
      label: "Troubleshoot Outlook Sync Issue",
      steps: [
        { type: "plan", text: "Initializing Autonomous Agent loop with model 'qwen2.5:7b-instruct' via Ollama..." },
        { type: "think", text: "Objective: Diagnose Outlook error 0x8004010F (Sync folder failure) for user." },
        { type: "tool", text: "Dispatching tool: `inspect_ost_corrupt_status(user='corp\\jdoe')`" },
        { type: "result", text: "-> Status: OST file header truncated; sync conflict detected in 'Inbox'." },
        { type: "tool", text: "Dispatching tool: `safe_rebuild_outlook_profile(preserve_cache=True)`" },
        { type: "success", text: "Success: New profile generated; MAPI connection verified. Resolution completed in 1.4s." }
      ]
    },
    {
      command: "agent run browse-amazon-cart",
      label: "Autonomous Playwright Web Cart",
      steps: [
        { type: "plan", text: "Launching Playwright headless Chromium agent session..." },
        { type: "think", text: "Goal: Search 'Mechanical Keyboard Wireless', filter rating > 4.5, add top pick to cart." },
        { type: "tool", text: "Tool Call: `browser.navigate('https://amazon.co.uk')` -> HTTP 200 OK" },
        { type: "tool", text: "Tool Call: `browser.fill_and_submit('input#twotabsearchtextbox', 'Mechanical Keyboard')`" },
        { type: "tool", text: "Tool Call: `browser.evaluate_dom_extract(criteria='rating >= 4.5 & prime_eligible')`" },
        { type: "result", text: "-> Selected item: Keychron K2 Wireless (4.6 stars, 2.4k reviews, £79.99)" },
        { type: "tool", text: "Tool Call: `browser.click('#add-to-cart-button')`" },
        { type: "success", text: "Success: Cart updated. Subtotal verified: £79.99. Agent terminated cleanly." }
      ]
    },
    {
      command: "agent inspect-stack",
      label: "Inspect Core Agentic Stack",
      steps: [
        { type: "plan", text: "Scanning engineer profile capabilities for Vikram Rajpurohit..." },
        { type: "result", text: "Agentic Frameworks: LangChain, Multi-Agent Orchestration, Tool Calling, Playwright" },
        { type: "result", text: "Inference Engines: Ollama (Offline / Private Edge), Hugging Face, llama.cpp" },
        { type: "result", text: "Languages & Core: Python (FastAPI, PyTorch), Rust (NexusCLI), TypeScript (North Star)" },
        { type: "success", text: "Status: 100% Ready for LLM Engineering, Multi-Agent, and AI Automation roles." }
      ]
    }
  ]
};
