# FUTURE_FS_01 – Portfolio Application

## Task Description
Build a modern portfolio application with a React (Vite) frontend and a backend-ready structure. The app showcases profile, projects, and contact, with clean UI/UX, animations, and a production build. The repository is structured so a Node/Express API can be added later for dynamic content (projects, contact form, auth).

## Insights
- Keeping the UI responsive and accessible early reduces rework.
- Vite + Tailwind offers fast iteration and small production bundles.
- Separating concerns (components, routes, styles) keeps the codebase maintainable.
- Planning the backend routes and models up front clarifies future data flows.

## Skills Gained
- React component architecture and routing
- Tailwind CSS utility‑first styling and responsive design
- Animation fundamentals with Framer Motion
- Project structuring and environment setup with Vite
- Git/GitHub workflows (branching, merging, resolving conflicts)
- Backend planning (Express API design, env management, data modeling)

## Repository Structure
```
FUTURE_FS_01/
├─ src/                      # React frontend source
│  ├─ components/            # Navbar, Home, About, Projects, Contact, Footer
│  ├─ App.jsx                # App shell and routes
│  ├─ main.jsx               # React entry
│  └─ index.css              # Global styles (Tailwind)
├─ index.html                # HTML template
├─ package.json              # Frontend scripts and deps
├─ vite.config.js            # Vite config
├─ tailwind.config.js        # Tailwind config
└─ server/                   # (optional) backend to add later
   ├─ src/                   # Express app, routes, controllers, models
   └─ package.json           # Backend scripts and deps
```

## How to Use
1) Install and run (frontend)
```bash
npm install
npm run dev
```
2) Build & preview
```bash
npm run build
npm run preview
```
3) (Optional) Add backend later under `server/` and run it separately (e.g., Express on port 5000). Point the frontend to the API via environment variables like `VITE_API_BASE_URL`.

## Conclusion
This repository provides a polished React portfolio and a clear path to evolve into a full‑stack app. You can immediately deploy the frontend and progressively add backend APIs for projects, contact, and authentication as needed.
