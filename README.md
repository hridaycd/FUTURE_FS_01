# FUTURE_FS_01 – Full‑Stack Portfolio Application

A modern, production‑ready portfolio application built with a performant React frontend and a Node/Express backend foundation. The frontend is already implemented with Vite + Tailwind + Framer Motion. The backend section below documents a recommended structure and setup so you (or future contributors) can add APIs, persistence, and auth when ready.

## 🔍 Overview

- Responsive, accessible UI to showcase profile, projects, and contact
- Animations and smooth transitions for a polished experience
- Ready to evolve into a full stack app with APIs (projects, contact, auth)

## ✨ Features

- Responsive layout and navigation
- Animated sections (Framer Motion)
- Project showcase, About, Contact
- Clean component architecture
- Production build via Vite

## 🏗️ Architecture

- Frontend (client): React 18, Vite, Tailwind CSS, Framer Motion, React Router
- Backend (server): Node.js (Express) – scaffold recommended; see below
- Database: MongoDB (recommended) – replace with your choice
- Auth: JWT‑based (recommended) – replace with your choice

```
FUTURE_FS_01/
├─ client/                      # current source (this repo’s src/ is the client)
│  ├─ src/
│  │  ├─ components/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ index.css
│  ├─ index.html
│  ├─ package.json
│  └─ vite.config.js
└─ server/                      # suggested backend layout (to be added)
   ├─ src/
   │  ├─ app.ts / app.js        # Express app
   │  ├─ routes/                # Route modules
   │  ├─ controllers/           # Request handlers
   │  ├─ models/                # Mongoose or ORM models
   │  ├─ middleware/            # Auth, validation, error handling
   │  └─ config/                # Env, DB connection
   ├─ package.json
   └─ tsconfig.json / jsconfig.json
```

## 🧰 Tech Stack

- Frontend: React 18, React Router, Tailwind CSS, Framer Motion, Vite
- Backend (planned): Node.js, Express, MongoDB (Mongoose), Zod/Validator, JWT
- Tooling: ESLint, PostCSS, Autoprefixer, npm

## 🚀 Getting Started (Frontend)

### Prerequisites
- Node.js ≥ 16
- npm

### Install & Run
```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```
The app runs by default at http://localhost:3000 or the port printed by Vite.

## 🗄️ Backend (Planned Implementation)

Add a `server/` folder alongside the frontend when you’re ready.

1) Initialize backend
```bash
mkdir server && cd server
npm init -y
npm install express cors dotenv mongoose jsonwebtoken bcrypt zod
npm install -D nodemon typescript ts-node @types/node @types/express @types/jsonwebtoken @types/bcrypt
```

2) Scripts (server/package.json)
```json
{
  "scripts": {
    "dev": "nodemon src/app.ts",
    "build": "tsc",
    "start": "node dist/app.js"
  }
}
```

3) Env (server/.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=replace_with_strong_secret
```

4) Minimal Express app (server/src/app.ts)
```ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API listening on :${port}`));
```

5) Example routes to add later
- GET /api/projects – list portfolio projects
- POST /api/contact – submit contact form (with basic rate‑limit and spam checks)
- POST /api/auth/login – JWT login (optional)

## 🧪 Scripts
- Frontend
  - `npm run dev` – start Vite dev server
  - `npm run build` – build production assets
  - `npm run preview` – preview built assets
  - `npm run lint` – run ESLint
- Backend (once added under `server/`)
  - `npm run dev` – run Express with nodemon
  - `npm run build` – compile TypeScript (if used)
  - `npm start` – run compiled server

## 🔐 Environment Variables

Frontend (optional): create `.env` for Vite variables prefixed with `VITE_`, e.g. `VITE_API_BASE_URL`.

Backend: see the `server/.env` example above. Never commit real secrets.

## 📦 Deployment

- Frontend: Vercel, Netlify, or GitHub Pages (static build in `dist/`)
- Backend: Render, Railway, Fly.io, or a VPS (Docker recommended)
- Configure CORS and environment variables for production

## 📄 License
MIT

## 🙌 Acknowledgements
- React, Vite, Tailwind CSS, Framer Motion
- Express, MongoDB (planned)

---

If you want, I can scaffold the `server/` directory and starter files in this repo in a follow‑up edit.
