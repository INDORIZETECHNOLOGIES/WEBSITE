# IndorseTech — React (Vite) version

This is a 1:1 React conversion of the original static site (`../index.html`,
`../style.css`, `../animation.css`, `../script.js`). **Nothing about the design,
markup, styles, or behavior was changed** — the HTML was translated to JSX,
split into components, and the original `script.js` logic runs unchanged after
mount.

## What maps to what

| Original            | React version                          |
| ------------------- | -------------------------------------- |
| `index.html` (head) | `index.html` (SEO/meta/fonts/EmailJS)  |
| `index.html` (body) | `src/App.jsx` + `src/components/*.jsx`  |
| `style.css`         | `src/styles/style.css` (copied as-is)  |
| `animation.css`     | `src/styles/animation.css` (as-is)     |
| `script.js`         | `src/siteScript.js` (ported verbatim)  |
| `hero_bg.png`       | `public/hero_bg.png`                   |
| `vercel.json`       | `vercel.json` (copied as-is)           |

The original `script.js` was wrapped in `DOMContentLoaded`; here the exact same
code runs from a `useEffect(() => initSite(), [])` in `App.jsx`, after React has
rendered the identical DOM. All `getElementById` / `querySelector` lookups
resolve to the same elements.

> Note: the app is intentionally **not** wrapped in `<React.StrictMode>` so the
> DOM-driven animation loops (canvas particles, custom cursor, listeners) run
> exactly once, matching the original vanilla behavior.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Notes

- EmailJS is still loaded from the CDN in `index.html`. Its credentials are read
  from Vite env vars (`VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` /
  `VITE_EMAILJS_PUBLIC_KEY`) at the top of `src/siteScript.js`, falling back to
  the original `YOUR_*` placeholders when unset. Copy `.env.example` to `.env`
  and fill them in to enable email sending; without a `.env` the behavior is
  identical to the original static site (mailto fallback).
- `viewer.html` from the original project was a local video-frame debug tool
  (not part of the website), so it was not converted.
