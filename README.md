# Vikram Rajpurohit — AI Portfolio & Resume

A minimalist, sophisticated, and highly-performant web portfolio designed specifically to showcase skills in Agentic AI, Large Language Models (LLMs), and full-stack development. 

This portfolio implements a modern "Swiss Design" aesthetic and features smooth scrolling animations, an interactive custom cursor, and a dynamic timeline that auto-populates live clearbit logos for professional and academic experiences.

![Agentic Portfolio](public/vite.svg) *Replace with a screenshot*

## 🚀 Live Demo
*(Link to deployed site will go here—e.g., Vercel or GitHub Pages)*

## ✨ Key Features

- **Modern Aesthetic:** A sleek interface utilizing a `#fafafa` background against dark `#1a1a1a` typography, enhanced by subtle noise overlays and a delicate grid pattern for depth.
- **Dynamic Chronological Timeline:** Automatically sorts and renders Education and Experience objects by parsing their dates. Includes interactive red 'milestone' dots connected along a central track.
- **Intelligent API Integration:** Incorporates ClearBit Logo APIs to dynamically fetch and cleanly stylize official company logos from domain names (`wipro.com`, `tcs.com`, `zs.com`, etc.).
- **Interactive Custom Cursor:** A sleek, minimal cursor dot that dramatically grows to provide subtle hover feedback when floating across buttons, badges, and project cards.
- **Micro-Animations:** Employs IntersectionObservers to trigger cascading 'reveal' fades and splits on text layers as the user scrolls downwards.

## 🛠️ Built With

- **Vite:** Next Generation Frontend Tooling for blazing fast HMR and optimized builds.
- **Vanilla JavaScript:** Zero unneeded dependencies; pure DOM manipulation and JavaScript logic (`ES6+`).
- **CSS Grid/Flexbox:** Modern, responsive CSS layouts for scaling from Mobile to Desktop seamlessly.

## 💻 Running Locally

To get a local development server running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vikramrajj/Vikram-Raj-Resume.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd Vikram-Raj-Resume
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

## 📁 Data Structure

The entire application state is driven by a single manageable JavaScript Object inside `/src/main.js`. 
Modifying this object instantly re-renders the website.

```javascript
const resumeData = {
  name: "Vikram Rajpurohit",
  title: "LLM Engineer | Agentic AI Specialist",
  ...
}
```

## 📜 License
Available under the MIT license.
