# akd74/web

A clean, modern, zero-build personal website built with semantic HTML5, CSS custom properties, and lightweight vanilla JavaScript.

## Features

- **Dark & Light Themes** — Respects system `prefers-color-scheme` with instant toggle and `localStorage` persistence (no flash on load).
- **Bilingual Support (中文 / EN)** — Built-in one-click language switch powered by `data-i18n`.
- **Complete Portfolio Structure** — Sticky glassmorphism navigation with scroll-spy, Hero + interactive profile card, About pillars, Skills, Featured Projects grid, and Contact card with one-click email copy.
- **Accessible & Responsive** — Semantic landmarks, keyboard focus rings, skip link, mobile navigation drawer, and `prefers-reduced-motion` support.
- **Zero Dependencies** — No bundler or framework required; works directly on GitHub Pages or any static host.

## Quick Start

```bash
git clone https://github.com/akd74/web.git
cd web

# Run a local server (Python 3)
python -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## Customization

- **Content & Copy**: Edit `index.html` and the `TRANSLATIONS` dictionary in `js/script.js`.
- **Theme Colors**: Adjust CSS custom properties under `:root` and `[data-theme="light"]` in `css/style.css`.
- **Projects & Links**: Update the `<article class="card project-card">` blocks and email/GitHub links in `index.html`.

## License

MIT
