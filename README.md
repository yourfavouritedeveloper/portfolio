# Nihad Mammadov — Portfolio

> Personal portfolio website built with React + Vite, showcasing my experience as a Backend Developer.

**Live site:** https://yourfavouritedeveloper.github.io/portfolio/

---

## Tech Stack

- **React 19** — component-based UI
- **Framer Motion** — scroll animations and transitions
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility styling
- **Google Fonts** — Bebas Neue, Space Mono, DM Serif Display
- **Canvas API** — animated particle network on hero section
- **GitHub Pages** — deployment via `gh-pages`

---

## Features

- Animated particle network with canvas
- Glitch text effect on hero
- Typewriter cycling through roles
- Custom CSS cursor with trailing ring
- Scroll-triggered animations on every section
- Interactive experience panel (tab-style company switcher)
- Skill progress bars
- Project rows with hover states
- Fully responsive layout
- Keyboard-accessible navigation

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, typewriter role, particle canvas, nav links |
| 02 | **About** | Bio, skill bars, tech tag cloud |
| 03 | **Experience** | Alievs Space MMC, Kapital Bank, C4IR, BHOS SYP, Institute of Control Systems |
| 04 | **Projects** | CloudNest, TechStore, Transactional Bank System |
| 05 | **Contact** | Email, LinkedIn, GitHub, WhatsApp, Facebook |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/yourfavouritedeveloper/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The `deploy` script runs `vite build` then pushes the `dist/` folder to the `gh-pages` branch.

---

## Project Structure

```
src/
├── Cursor/         # Custom cursor component
├── Nav/            # Fixed navigation bar
├── Hero/           # Landing section with particle canvas
├── About/          # Bio, skill bars, tech tags
├── Experience/     # Work history tab panel
├── Projects/       # Project rows
├── Contact/        # Contact links
├── index.css       # Global styles and CSS variables
├── App.jsx
└── main.jsx
```

---

## Contact

- **Email:** nihad.mammadov.16@gmail.com
- **LinkedIn:** [nihad-mammadov-025548325](https://www.linkedin.com/in/nihad-mammadov-025548325/)
- **GitHub:** [yourfavouritedeveloper](https://github.com/yourfavouritedeveloper)
- **WhatsApp:** +994 50 851 45 36
