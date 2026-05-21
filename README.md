# Portfolio — Mostofa Kamal Joy

An animated, modern portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Deployed automatically to GitHub Pages.

🔗 **Live:** https://mostofa89.github.io/Portfolio/

---

## Features

- ⚡ Vite + React 18 + Tailwind CSS
- 🎨 Framer Motion animations (page entrance, scroll reveal, hover, marquee)
- 🌈 Animated gradient orbs and grid background
- 🎯 Cursor spotlight effect
- ⌨️ Typewriter hero text
- 📱 Fully responsive (mobile menu, adaptive layouts)
- 🚀 GitHub Actions auto-deploy

---

## Local Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build → ./docs
npm run preview      # preview the production build
```

---

## Deployment

This repo auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. The Vite build writes production files to `docs/` so GitHub Pages can also publish the built site from the `main` branch `/docs` folder.

### One-time setup

1. Push the code to **`https://github.com/<your-user>/Portfolio`**
2. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** or publish from branch `main` with folder `/docs`
3. Push to `main` — the workflow builds and deploys automatically

Do not publish from the `main` branch root. Branch publishing from `/` serves the Vite source `index.html`, which points at `/src/main.jsx` instead of the production bundle and leaves GitHub Pages with a blank app screen.

If the page is blank after a workflow run, switch the Pages source to **GitHub Actions** or branch `main` folder `/docs`, then rerun **Deploy portfolio to GitHub Pages** from the Actions tab.

> ⚠️ The repo name **must** be `Portfolio` (capital P), or update `base` in `vite.config.js` to match your repo name.

---

## Project Structure

```
src/
├── App.jsx                   # Layout + active section observer
├── main.jsx                  # Entry
├── index.css                 # Tailwind + custom styles
├── data/
│   └── portfolio.js          # All content (edit me!)
└── components/
    ├── Navbar.jsx
    ├── AnimatedBackground.jsx
    ├── CursorSpotlight.jsx
    ├── Hero.jsx
    ├── Marquee.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Timeline.jsx
    ├── Contact.jsx
    └── Footer.jsx
public/
├── joy.jpg                   # profile photo
└── Mostofa_Kamal_Joy_Improved_CV.pdf
```

---

## Editing Your Content

Open `src/data/portfolio.js` — everything (projects, skills, education, contact links, hero text) lives in that one file.
