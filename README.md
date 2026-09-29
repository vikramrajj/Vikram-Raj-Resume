# Vikram Rajpurohit — AI Portfolio & Resume

A modern, high-performance, and responsive portfolio engineered to showcase deep expertise in **Agentic AI**, **Large Language Models (LLMs)**, and **Full-Stack Systems**.

Designed with Swiss precision typography, ambient glassmorphism, fluid micro-interactions, an interactive **Agent CLI Sandbox**, and dark/light mode toggle.

---

## 🚀 Live Demo & Repository
* **Repository:** [https://github.com/vikramrajj/Vikram-Raj-Resume](https://github.com/vikramrajj/Vikram-Raj-Resume)
* **Deployed Site:** *(Vercel / GitHub Pages)*

---

## ✨ Key Features & Architectural Enhancements

* **🌓 Ambient Dual Theme (Dark / Light Mode):**
  * Auto-detects system preferences (`prefers-color-scheme`) with persistent `localStorage` memory and zero flash of unstyled content (FOUC).
* **⚡ Interactive Autonomous Agent CLI Simulator:**
  * Hands-on in-browser terminal widget simulating autonomous agent loops (`PLAN`, `THINK`, `TOOL`, `RESULT`, `SUCCESS`).
  * Features interactive preset action chips and a working command prompt (`help`, `run`, `skills`, `contact`, `clear`).
* **📊 Categorized Technical Competency Matrix:**
  * Grouped into *Agentic AI & LLMs*, *Machine Learning & NLP*, *Full-Stack & Systems*, and *Enterprise Cloud & DevOps*.
* **🗓️ Filterable Chronological Timeline:**
  * Segment career milestones with instant filter pills: **All Milestones**, **Work Experience**, and **Academic Degrees**.
  * Dynamic company logo loader with guaranteed monogram fallbacks (no broken image gaps).
  * Quantified STAR-format achievement bullets highlighting automation, Azure AD, ServiceNow, and ITIL experience.
* **🚀 Rich Project Showcase:**
  * Displays architecture notes, key metrics, tech stack tags, and direct dual CTAs (**Live Demo** and **Source Code**).
* **📋 Frictionless Contact Channels:**
  * One-click copy-to-clipboard for Email and UK Phone with instant tooltip feedback, direct mailto CTA, and social links.
* **🎯 Progressive Interactive Cursor:**
  * Hardware-accelerated dual cursor (center dot + outer trailing ring) enabled on mouse devices and disabled on touchscreens.

---

## 🛠️ Built With

* **Vite `^7.3.x`:** Ultra-fast bundling, instant HMR, and tree-shaken production builds.
* **Modern JavaScript (ES6+):** Modular architecture with clean separation between data and view.
* **CSS3 Design System:** Modern CSS Grid, Flexbox, CSS Custom Properties, and responsive media queries.
* **No Heavy Framework Bloat:** Entire application bundle is under 15 kB gzipped for instantaneous load times and 100/100 Lighthouse performance.

---

## 📁 Project Structure

```text
Vikram-Raj-Resume/
├── index.html              # Entry HTML with SEO metadata, JSON-LD & theme script
├── package.json            # Scripts & Vite configuration
├── public/                 # Static assets (favicons, icons)
└── src/
    ├── data/
    │   └── resume.js       # Centralized, sanitized portfolio data model
    ├── style.css           # Design tokens, themes, layout, terminal & responsive styles
    └── main.js             # View rendering, theme switching & interactive terminal
```

---

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vikramrajj/Vikram-Raj-Resume.git
   cd Vikram-Raj-Resume
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📄 Updating Resume Data

All content is managed in [`src/data/resume.js`](src/data/resume.js). Modifying the exported `resumeData` object immediately reflects across the entire website.

---

## 📜 License
Available under the [MIT License](LICENSE).
