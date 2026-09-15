# ⚡ Noor Ul Huda — Interactive Portfolio

An interactive developer portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and an interactive **Spline 3D** canvas. Designed to showcase applied machine learning pipelines, autonomous agents, and core systems engineering projects.

---

## 🚀 Live Demo

- **URL:** portfolio-omega-umber-46.vercel.app

---

## ✨ Features

- **Interactive 3D Avatar**: Real-time Spline 3D model embedded seamlessly with cursor interaction.
- **Hero & Identity**: Modern typographical hero section tailored for AI & Systems Engineering.
- **One-Click Actions**:
  - Direct clipboard interaction for instant email copying (`hudaraja1122@gmail.com`).
  - Native resume download trigger directly from static assets.
- **Project Showcase**: Clean UI cards highlighting core architecture tags, GitHub links, and domain problems solved.
- **Modern Performance**: Zero layout shifts, optimized static delivery, and responsive layouts across all device sizes.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Spline 3D
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📂 Project Structure

```text
my-portfolio/
├── app/
│   ├── layout.tsx         # Root HTML structure and metadata
│   ├── page.tsx           # Main landing page view
│   └── globals.css        # Tailwind directives and core variables
├── components/
│   ├── Hero.tsx           # Navigation, 3D Canvas, metrics, and primary CTAs
│   └── Projects.tsx       # Featured project grid and architecture tags
├── public/
│   └── resume.pdf         # Downloadable CV asset
├── package.json
└── tailwind.config.ts
