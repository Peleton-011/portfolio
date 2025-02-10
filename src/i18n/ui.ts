import AstroIcon from "../components/icons/AstroIcon.astro";
import ClerkIcon from "../components/icons/ClerkIcon.astro";
import CSSIcon from "../components/icons/CSSIcon.astro";
import HTMLIcon from "../components/icons/HTMLIcon.astro";
import JSIcon from "../components/icons/JSIcon.astro";
import MongoIcon from "../components/icons/MongoIcon.astro";
import NextIcon from "../components/icons/NextIcon.astro";
import NodeIcon from "../components/icons/NodeIcon.astro";
import NuxtIcon from "../components/icons/NuxtIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TSIcon from "../components/icons/TSIcon.astro";
import ViteIcon from "../components/icons/ViteIcon.astro";
import VueIcon from "../components/icons/VueIcon.astro";

export const TAGS = {
	ASTRO: {
		name: "Astro",
		class: "bg-[#FF5A00] text-white",
		icon: AstroIcon,
	},
	CLERK: {
		name: "Clerk",
		class: "bg-black text-white",
		icon: ClerkIcon,
	},
	CSS: {
		name: "CSS",
		class: "bg-[#1572B6] text-white",
		icon: CSSIcon,
	},
    CSSMODULES: {
        name: "CSS Modules",
        class: "bg-[#1572B6] text-white",
        icon: CSSIcon,
    },
	HTML: {
		name: "HTML",
		class: "bg-[#E34C26] text-white",
		icon: HTMLIcon,
	},
	JS: {
		name: "JavaScript",
		class: "bg-[#F7DF1E] text-black",
		icon: JSIcon,
	},
	MONGODB: {
		name: "MongoDB",
		class: "bg-[#47A248] text-white",
		icon: MongoIcon,
	},
	NEXT: {
		name: "Next.js",
		class: "bg-black text-white",
		icon: NextIcon,
	},
	NODE: {
		name: "Node.js",
		class: "bg-[#339933] text-white",
		icon: NodeIcon,
	},
	NUXT: {
		name: "Nuxt.js",
		class: "bg-[#00DC82] text-black",
		icon: NuxtIcon,
	},
	REACT: {
		name: "React",
		class: "bg-[#61DAFB] text-black",
		icon: ReactIcon,
	},
	TAILWIND: {
		name: "Tailwind CSS",
		class: "bg-[#003159] text-white",
		icon: TailwindIcon,
	},
	TS: {
		name: "TypeScript",
		class: "bg-[#007ACC] text-white",
		icon: TSIcon,
	},
	VITE: {
		name: "Vite",
		class: "bg-[#41B3A3] text-white",
		icon: ViteIcon,
	},
	VUE: {
		name: "Vue",
		class: "bg-[#41B883] text-white",
		icon: VueIcon,
	},
};

export const languages = {
	en: "English",
	es: "Español",
};

export const defaultLang = "es";

export const ui = {
	en: {
		"page.title": "Nico's Portfolio - Web Developer and Programmer",
		"page.description":
			"Hire Nico to create your own web application or mobile app. Web Developer and Programmer in Barcelona. Proficient in creating unique web applications.",

		"nav.home": "Home",
		"nav.about": "About",
		"nav.contact": "Contact",
		"nav.projects": "Projects",
		"nav.experience": "Experience",

		"sections.experience.title": "Work experience",
		"sections.projects.title": "Projects",
		"sections.about.title": "About me",

		"hero.title": "Hey, I'm Nico",
		"hero.available": "Disponible para trabajar",
		"hero.experience": "+3 años de experiencia en Desarrollo Web.",
		"hero.location": "De Barcelona, España 🇪🇸.",
		"hero.description":
			"Especializado en crear aplicaciones web únicas con tecnologías de vanguardia.",

		"projects.links.preview": "Preview",
		"projects.links.github": "Code",

		projects: [
			{
				title: "Bowlly Eats",
				description: `
Bowlly Eats is a modern and high-performance recipe web app built with Nuxt 3 and Vue 3, designed for speed, responsiveness, and flexibility. It features dynamic ingredient customization, allowing users to swap out ingredients easily. The app integrates with an external API to fetch recipes efficiently while maintaining a smooth user experience with server-side rendering (SSR) and optimized asset loading. Its mobile-friendly, responsive design ensures a seamless experience across devices, while Tailwind CSS provides a clean and maintainable UI.
                `,
				link: "https://bowlly-eats.vercel.app",
				github: "https://github.com/Peleton-011/bowlly-eats",
				image: "/website.webp",
				tags: [TAGS.NUXT, TAGS.VUE, TAGS.TS, TAGS.TAILWIND],
			},
			{
				title: "Chat-GPT prompt splitter",
				description: `
                ChatGPT Prompt Splitter is a fast, responsive web tool designed to intelligently break down large texts for seamless AI processing. Built with modern web technologies, it features automatic language detection, efficient text segmentation, and a sleek UI. The project prioritizes performance, maintainability, and smooth API integration to enhance usability across different languages and contexts.
                `,
				link: "https://chat-gpt-prompt-splitter-alpha.vercel.app/",
				github: "https://github.com/Peleton-011/chatGPT-prompt-splitter",
				image: "/website.webp",
				tags: [TAGS.NEXT, TAGS.TS, TAGS.VITE],
			},
			{
				title: "Snap Quest",
				description: `
SnapQuest is an interactive photo scavenger hunt game designed for speed, performance, and seamless user experience. Built with Next.js and React, it features API integration for dynamic prompts, a responsive and adaptive UI, and efficient exports via PDF and ZIP. The sleek, maintainable codebase ensures scalability while supporting multiple languages and a visually engaging mosaic grid layout.                `,
				link: "https://snap-quest-pink.vercel.app/",
				github: "https://github.com/Peleton-011/snap-quest/",
				image: "/website.webp",
				tags: [TAGS.NEXT, TAGS.REACT, TAGS.TS, TAGS.MONGODB],
			},
			{
				title: "Etch a Sketch",
				description: `
Etch-a-Sketch Playground is a modern, high-performance web-based drawing tool that brings the classic pixelated sketching experience to life. Built with a sleek and maintainable codebase, it features responsive design, smooth interactions, and extended tools like custom color selection, opacity control, and grid customization. With optimized JavaScript for fast rendering and potential API integrations for expanded functionality, this project offers a fun and engaging experience for all users.
                `,
				link: "https://peleton-011.github.io/etch-a-sketch-project/",
				github: "https://github.com/Peleton-011/etch-a-sketch-project",
				image: "/website.webp",
				tags: [TAGS.HTML, TAGS.CSS, TAGS.JS],
			},
			{
				title: "HouseHold Hero",
				description: `
                Household Hero is a high-performance, responsive task management platform designed for households and individuals. Built with Next.js, it integrates robust APIs for seamless task coordination, notifications, and authentication. With a sleek UI, multi-device support, and upcoming task-trading features, it streamlines household management effortlessly.
                `,
				link: "",
				github: "https://github.com/Peleton-011/chore-tracker/",
				image: "/website.webp",
				tags: [TAGS.NEXT, TAGS.TS, TAGS.TAILWIND, TAGS.NODE, TAGS.MONGODB, TAGS.CLERK],
			},
			{
				title: "Minesweeper",
				description: `
A sleek and high-performance Minesweeper game built with React, featuring custom board configurations, advanced gameplay mechanics, and responsive design. Optimized for speed and smooth interactions, it includes API integration for enhanced functionality, a no-guess mode for strategic play, and a dark mode for better accessibility.
                `,
				link: "https://minesweeper-lake-six.vercel.app/",
				github: "https://github.com/Peleton-011/minesweeper",
				image: "/website.webp",
				tags: [TAGS.REACT, TAGS.CSSMODULES, TAGS.VITE],
			},

			{
				title: "Portfolio",
				description: `
                Nico's portfolio is a high-performance, multilingual web portfolio built with Astro, Tailwind CSS, and TypeScript. It emphasizes speed, maintainability, and modern design while ensuring an optimal user experience across devices. The site integrates dynamic content management, supports light/dark mode, and features SEO optimization for better visibility.
                `,
				link: "",
				github: "https://github.com/Peleton-011/portfolio",
				image: "/website.webp",
				tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.TS],
			},
		],

		experience: [
			{
				date: "Actualmente ...",
				title: "Desarrollador Web y Programador Freelance",
				description: `Responsable de la creación y mantenimiento de sitios web y aplicaciones web.
                Gestión de proyectos existentes y colaboración con clientes.`,
			},
			{
				date: "2024",
				title: "Desarrollador Principal — Spoloom",
				description: `Responsable de la plataforma, componentes y utilidades para la página de e-commerce y de aprendizaje digital de Spoloom. 
                    Implementación de cero de una página custom de e-commerce integrada con Stripe y conectada a la API de Shopify Oxygen como Sistema de Manejo de Contenido. 
                    Implementación de cero de un sistema de aprendizaje digital con seguimiento de progreso en los distintos niveles incluyendo un reproductor de vídeo custom. 
                    Mejora de un 60% en la velocidad de carga.`,
				// link: "#",
				//repo: "#"
			},
		],
	},
	es: {
		"page.title": "Porfolio de Nico - Desarrollador y Programador Web",
		"page.description":
			"Contrata a Nico para crear tu aplicación web o móvil. Desarrollador Web y Programador en Barcelona. Especializado en crear aplicaciones web únicas.",

		"nav.home": "Inicio",
		"nav.about": "Sobre mí",
		"nav.contact": "Contacto",
		"nav.projects": "Proyectos",
		"nav.experience": "Experiencia",

		"sections.experience.title": "Experiencia laboral",
		"sections.projects.title": "Proyectos",
		"sections.about.title": "Sobre mí",

		"hero.title": "Hey, soy Nico",
		"hero.available": "Disponible para trabajar",
		"hero.experience": "+3 años de experiencia en Desarrollo Web.",
		"hero.location": "De Barcelona, España 🇪🇸.",
		"hero.description":
			"Especializado en crear aplicaciones web únicas con tecnologías de vanguardia.",

		"projects.links.preview": "Preview",
		"projects.links.github": "Code",

		projects: [
			{
				title: "Proyecto 1",
				description: `
                Este es un proyecto de ejemplo. Desarrollado con Next.js y Tailwind CSS. Sus características son:
                - Desarrollado con Next.js
                - Desarrollado con Tailwind CSS
                - Desarrollado con Next.js
                - Desarrollado con Tailwind CSS
                Además de eso podrás ver una captura de pantalla del proyecto. 
                `,
				link: "",
				github: "",
				image: "/website.webp",
				tags: [TAGS.NEXT, TAGS.TAILWIND],
			},
			{
				title: "Proyecto 2",
				description: `
                Este es un proyecto de ejemplo. Desarrollado con Next.js y Tailwind CSS. Sus características son:
                - Desarrollado con Next.js
                - Desarrollado con Tailwind CSS
                - Desarrollado con Next.js
                - Desarrollado con Tailwind CSS
                Además de eso podrás ver una captura de pantalla del proyecto. 
                `,
				link: "",
				github: "",
				image: "/website.webp",
				tags: [TAGS.NEXT, TAGS.TAILWIND],
			},
		],

		experience: [
			{
				date: "Actualmente ...",
				title: "Desarrollador Web y Programador Freelance",
				description: `Responsable de la creación y mantenimiento de sitios web y aplicaciones web.
                Gestión de proyectos existentes y colaboración con clientes.`,
			},
			{
				date: "2024",
				title: "Desarrollador Principal — Spoloom",
				description: `Responsable de la plataforma, componentes y utilidades para la página de e-commerce y de aprendizaje digital de Spoloom. 
                    Implementación de cero de una página custom de e-commerce integrada con Stripe y conectada a la API de Shopify Oxygen como Sistema de Manejo de Contenido. 
                    Implementación de cero de un sistema de aprendizaje digital con seguimiento de progreso en los distintos niveles incluyendo un reproductor de vídeo custom. 
                    Mejora de un 60% en la velocidad de carga.`,
				// link: "#",
				//repo: "#"
			},
		],

		about: [
			[
				{
					type: "normal",
					text: "Me llamo Nico pero mis amigos me llaman Pingore. Empecé en la programación con un ordenatione, tenía 10 años. Actualmente estoy ",
				},
				{
					type: "strong",
					text: "rascándome los mocos ",
				},
				{
					type: "normal",
					text: ".",
				},
			],
			[
				{
					type: "normal",
					text: "Algunos de mis éxitos incluyen ",
				},
				{
					type: "strong",
					text: "colaborar con tu mama para crear tu dignidad ",
				},
				{
					type: "normal",
					text: ". Aunque hoy está desaparecida fue un gran avance en el mundo del desarrollo web.",
				},
			],
			[
				{
					type: "normal",
					text: "Como creador de cacas, ",
				},
				{
					type: "strong",
					text: "cuento con el vater más grande del mundo en la categoría de ",
				},
				{
					type: "highlight",
					text: "Pro Caguing ",
				},
				{
					type: "strong",
					text: "en Twitch",
				},
				{
					type: "normal",
					text: ". Mi objetivo es mejorar la caca de la gente y el acceso a caca de calidad.",
				},
			],
		],
	},
} as const;
