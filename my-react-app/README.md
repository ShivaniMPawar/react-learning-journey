# React + Vite

🚀 Tech Stack
React JS
React is a JavaScript library for building user interfaces. Instead of writing raw HTML for every page change, React lets you build small, reusable pieces called components — like a Navbar, a Footer, or a SocialLinks section — and compose them into full pages.
Key concepts used in this project:

Components — The UI is split into independent, reusable pieces (e.g. navigation links, social icons).
JSX — Write HTML-like syntax directly inside JavaScript files (.jsx).
Props & State — Pass data into components and manage dynamic values like user interactions.
React Router — Powers the Home, About, Contact, Features, and Connect with Us navigation links without full page reloads.

Vite
Vite is the build tool and development server that powers this project. It replaces older tools like Create React App and webpack with a much faster experience.

Why Vite?
Instant server start — Vite serves files on demand rather than bundling everything upfront, so the dev server starts in milliseconds.
Hot Module Replacement (HMR) — Changes you make in code appear in the browser instantly without losing application state.
Optimised production builds — Uses Rollup under the hood to produce small, efficient bundles for deployment.
Zero config — Works out of the box with React, TypeScript, and modern JavaScript.


📦 Getting Started
Prerequisites

Node.js v18 or higher
npm (comes with Node) or yarn

Installation
# 1. Clone the repository
git clone https://github.com/your-username/statementscan.git

# 2. Navigate into the project folder
cd statementscan

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
The app will be running at http://localhost:5173.
Build for Production
bashnpm run build
Output will be in the dist/ folder, ready to deploy.

📁 Project Structure
statementscan/
├── public/             # Static assets (favicon, etc.)
├── src/
│   ├── components/     # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/          # Page components (Home, About, Contact, Features)
│   ├── App.jsx         # Root component with routing
│   └── main.jsx        # Entry point — mounts React into index.html
├── index.html          # HTML shell
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts

<img width="960" height="386" alt="Image of project" src="https://github.com/user-attachments/assets/57918827-5f1f-4cb2-b298-e6e3a39d010a" />


