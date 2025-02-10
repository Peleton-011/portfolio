# 🚀 Nico's Portfolio

## Overview
Welcome to my personal portfolio! This project is a fast, sleek, and maintainable web portfolio built with **Astro**, **Tailwind CSS**, and a strong emphasis on performance and multilingual support. The goal is to showcase my work as a **web developer** while ensuring an optimal user experience.

## 🌟 Features
- **Blazing Fast Performance** – Optimized with Astro and Tailwind for lightning-fast page loads.
- **Multi-language Support** – Seamless language switching between **English** and **Spanish**.
- **Dark/Light Mode** – Toggle themes effortlessly for an enhanced browsing experience.
- **Modern Tech Stack** – Built with **Astro, Tailwind CSS, and TypeScript** for scalability and maintainability.
- **Clean & Maintainable Code** – Modular component-based architecture for easy updates and enhancements.
- **Dynamic Content** – Work experience and projects are dynamically populated for easier content management.
- **SEO Optimized** – Fully structured metadata for better search engine visibility.

## 📂 Tech Stack
- **Astro** – Static site generation for optimal performance.
- **Tailwind CSS** – Utility-first styling for a modern and responsive UI.
- **TypeScript** – Ensures robust and maintainable code.
- **i18n Support** – Supports multiple languages dynamically.

## 🔧 Setup & Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Peleton-011/your-repo-name.git
   cd your-repo-name
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run Development Server**
   ```sh
   npm run dev
   ```
   The project should be running at `http://localhost:3000`.

4. **Build for Production**
   ```sh
   npm run build
   ```
   The static files will be available in the `dist/` folder.

## 📸 Usage & Examples
### Experience Section
```astro
<ExperienceItem
  title="Lead Developer - Spoloom"
  date="2024"
  description="Built a custom e-commerce and learning platform with Stripe and Shopify Oxygen API. Increased load speed by 60%."
/>
```
### Adding a New Project
Modify `src/i18n/ui.ts` under the `projects` array:
```ts
{
  title: "New Project",
  description: "A modern web app built with Next.js and Tailwind CSS.",
  link: "https://your-project.com",
  github: "https://github.com/your-repo",
  image: "/path-to-image.webp",
  tags: [TAGS.NEXT, TAGS.TAILWIND]
},
```

## 🚀 Deployment
This project can be deployed easily on any static hosting provider like **Vercel, Netlify, or GitHub Pages**.
```sh
npm run build
vercel deploy
```

## 📞 Contact
If you're interested in working together, feel free to reach out!
- **LinkedIn**: [linkedin.com/in/nico-diaz](https://www.linkedin.com/in/nico-diaz-andreu-19b339279/)
- **GitHub**: [github.com/Peleton-011](https://github.com/Peleton-011)
- **Email**: [nicodiazan@gmail.com](mailto:nicodiazan@gmail.com)

---
**Built with ❤️ by Nico Diaz**
