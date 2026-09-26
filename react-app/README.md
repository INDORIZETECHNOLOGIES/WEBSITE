# Indorse Technologies Corporate Website

This is the official corporate website for **Indorse Technologies Pvt. Ltd.** It has been rebuilt from a static SPA into a modern, highly performant Next.js App Router application.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: Vanilla CSS (`globals.css`) with CSS variables and custom Vercel-style dark mode theme
- **Contact Form**: [EmailJS](https://www.emailjs.com/) integrated with an interactive Live Chat widget
- **Deployment**: Configured for seamless deployment on [Netlify](https://www.netlify.com/) (or Vercel)

## 📁 Project Structure

```text
├── src/
│   ├── app/                 # Next.js App Router (pages, layout, routing)
│   │   ├── company/         # /company route
│   │   ├── engineering/     # /engineering route
│   │   ├── globals.css      # Core CSS tokens and animations
│   │   ├── layout.tsx       # Root HTML layout and metadata
│   │   ├── page.tsx         # Homepage
│   │   └── not-found.tsx    # Custom 404 Error page
│   ├── components/          # Reusable UI components
│   │   ├── home/            # Homepage specific sections (Hero, Stack, Product)
│   │   ├── layout/          # Global layout elements (Navbar, Footer)
│   │   └── ui/              # Interactive elements (ChatWidget)
│   └── lib/                 # Utilities and SDK integrations (email.ts)
├── public/                  # Static assets (images, fonts, raw icons)
└── netlify.toml             # Custom build configuration for Netlify
```

## 🛠️ Local Development

First, ensure you have Node.js installed, then install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

## ✉️ EmailJS Setup

The contact forms and live chat widgets are configured to use EmailJS. To ensure emails are delivered successfully:
1. Ensure your EmailJS `Service ID`, `Template ID`, and `Public Key` are correctly set in `src/lib/email.ts`.
2. Do not expose private keys on the client.

## ☁️ Deployment

This project includes a `netlify.toml` configuration to ensure correct deployment via Netlify. 

To deploy manually, you can run:

```bash
npm run build
```

This will compile an optimized production build into the `.next` directory. Netlify will automatically detect the runtime via `@netlify/plugin-nextjs`.
