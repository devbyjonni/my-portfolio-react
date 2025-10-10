# My Portfolio (React + Vite)

A modern, responsive developer portfolio built with React, Vite, and Bootstrap 5.
This is the React-based version of my original Bootstrap theme, now featuring component-based structure, smooth scrolling, and system dark mode.

Live Demo: https://devbyjonni.github.io/my-portfolio-react/

## 🚀 Features

- ⚛️ React + Vite for fast builds and hot reloads
- 🎨 Bootstrap 5 layout with custom theme tokens
- 🌗 System dark mode using CSS variables
- 🧭 Responsive navbar with mobile collapse
- 📜 Smooth scrolling to sections (#home, #about, etc.)
- 🧱 Component-based structure for easy extension
- 📦 Deployed via GitHub Pages

## 🗂 Folder Structure

```bash
my-portfolio-react/
├── public/
│   ├── 404.html
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ScrollToHashElement.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   ├── styles/
│   │   └── theme.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── vite.config.js
```

## 🧰 Development

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🧩 Tech Stack

| Category         | Technology                                  |
| ---------------- | ------------------------------------------- |
| Frontend         | React 19, JSX, Vite                         |
| Styling          | Bootstrap 5, Custom CSS (theme tokens)      |
| Icons            | Font Awesome 6                              |
| Deployment       | GitHub Pages (via gh-pages)                 |
| Routing & Scroll | React Router 7 + Custom ScrollToHashElement |
| Build Tools      | Vite 7, ESLint 9                            |

## 🏷 Version

v1.0.0 — React version with smooth scroll, responsive navbar, and full theme integration.

## 🧭 Next Steps

- 🔹 Convert ProjectDetail into a dynamic route (e.g., /project/:id)
- 🔹 Store project data in a JSON file and render it dynamically
- 🔹 Add an active link state in the navbar for better UX
- 🔹 Implement scroll-to-top on route change
- 🔹 Optimize image loading and replace placeholders with real assets
- 🔹 Extend with React Context for theme or layout state (optional)
