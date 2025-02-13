import { TAGS } from "./tags";

interface project {
	title: string;
	description: {
		[lang: string]: string;
	};
	link?: string;
	github?: string;
	image: string;
	tags: {
		name: string;
		class: string;
		icon: any;
	}[];
	order: number;
}

export const PROJECTS: project[] = [
	{
		title: "Bowlly Eats",
		description: {
			en: `
Bowlly Eats is a modern and high-performance recipe web app built with Nuxt 3 and Vue 3, designed for speed, responsiveness, and flexibility. It features dynamic ingredient customization, allowing users to swap out some ingredients easily. The app integrates with an external API to fetch recipes efficiently while maintaining a smooth user experience with server-side rendering (SSR) and optimized asset loading. Its mobile-friendly, responsive design ensures a seamless experience across devices, while Tailwind CSS provides a clean and maintainable UI.
                `,
			es: `
            Bowlly Eats es una aplicación web de recetas moderna y de alto rendimiento, creada con Nuxt 3 y Vue 3, diseñada para ofrecer velocidad, capacidad de respuesta y flexibilidad. Cuenta con personalización dinámica de algunos ingredientes, permitiendo a los usuarios intercambiarlos fácilmente. La app se integra con una API externa para obtener recetas de manera eficiente, manteniendo una experiencia fluida gracias al server-side rendering (SSR) y la carga optimizada de assets. Su diseño responsive y mobile-friendly garantiza una experiencia perfecta en todos los dispositivos, mientras que Tailwind CSS proporciona una interfaz limpia y fácil de mantener.
            `,
		},
		link: "https://bowlly-eats.vercel.app",
		github: "https://github.com/Peleton-011/bowlly-eats",
		image: "/projects/bowlly_bg.webp",
		tags: [TAGS.NUXT, TAGS.VUE, TAGS.TS, TAGS.TAILWIND],
		order: 2,
	},
	{
		title: "Chat-GPT prompt splitter",
		description: {
			en: `
                ChatGPT Prompt Splitter is a fast, responsive web tool designed to intelligently break down large texts for seamless AI processing. Built with modern web technologies, it features automatic language detection, efficient text segmentation, and a sleek UI. The project prioritizes performance, maintainability, and smooth API integration to enhance usability across different languages and contexts.
                `,
			es: `
            ChatGPT Prompt Splitter es una herramienta web rápida y responsive diseñada para dividir inteligentemente textos largos y facilitar su procesamiento por IA. Construida con tecnologías web modernas, cuenta con detección automática de idioma, segmentación eficiente de texto y una interfaz elegante. El proyecto prioriza el rendimiento, la mantenibilidad y una integración fluida con APIs para mejorar la usabilidad en diferentes idiomas y contextos.
            `,
		},
		link: "https://chat-gpt-prompt-splitter-alpha.vercel.app/",
		github: "https://github.com/Peleton-011/chatGPT-prompt-splitter",
		image: "/projects/chat_bg.webp",
		tags: [TAGS.NEXT, TAGS.TS, TAGS.VITE],
		order: 3,
	},
	{
		title: "Snap Quest",
		description: {
			en: `
SnapQuest is an interactive photo scavenger hunt game designed for speed, performance, and seamless user experience. Built with Next.js and React, it features API integration for dynamic prompts, a responsive and adaptive UI, and efficient exports via PDF and ZIP. The sleek, maintainable codebase ensures scalability while supporting multiple languages and a visually engaging mosaic grid layout.                `,
			es: `
            SnapQuest es un juego interactivo de búsqueda fotográfica basado en retos, diseñado para ofrecer velocidad, alto rendimiento y una experiencia de usuario fluida. Desarrollado con Next.js y React, incorpora integración con APIs para objetivos dinámicos, una interfaz responsive y adaptable, y la posibilidad the exportar las fotos en PDF y ZIP. Su código limpio y escalable permite compatibilidad con múltiples idiomas y presenta un atractivo diseño en forma de mosaico.
            `,
		},
		link: "https://snap-quest-pink.vercel.app/",
		github: "https://github.com/Peleton-011/snap-quest/",
		image: "/projects/snapquest_bg.webp",
		tags: [TAGS.NEXT, TAGS.REACT, TAGS.TS, TAGS.MONGODB],
		order: 4,
	},
	{
		title: "Etch a Sketch",
		description: {
			en: `
Etch-a-Sketch Playground is a modern, high-performance web-based drawing tool that brings the classic pixelated sketching experience to life. Built with a sleek and maintainable codebase, it features responsive design, smooth interactions, and extended tools like custom color selection, opacity control, and grid customization. With optimized JavaScript for fast rendering and potential API integrations for expanded functionality, this project offers a fun and engaging experience for all users.
                `,
			es: `
            Etch-a-Sketch Playground es una herramienta de dibujo web moderna y de alto rendimiento que recrea la clásica experiencia de dibujar a píxeles. Con un código limpio y fácil de mantener, ofrece un diseño responsive, interacciones fluidas y herramientas avanzadas como selección de color personalizada, control de opacidad y personalización de la cuadrícula. Con JavaScript puro optimizado para renderizado rápido y posibles integraciones con APIs para ampliar funcionalidades, este proyecto proporciona una experiencia divertida e inmersiva para todos los usuarios.
            `,
		},
		link: "https://peleton-011.github.io/etch-a-sketch-project/",
		github: "https://github.com/Peleton-011/etch-a-sketch-project",
		image: "/projects/etch_bg.webp",
		tags: [TAGS.HTML, TAGS.CSS, TAGS.JS],
		order: 5,
	},
	{
		title: "HouseHold Hero",
		description: {
			en: `
                Household Hero is a WIP high-performance, responsive task management platform designed for households and individuals. Built with Next.js, it integrates robust APIs for seamless task coordination, notifications, and authentication. With a sleek UI, multi-device support, and upcoming task-trading features, it streamlines household management effortlessly.
                `,
			es: `
            Household Hero es una plataforma de gestión de tareas WIP de alto rendimiento y responsive, diseñada para hogares e individuos. Desarrollada con Next.js, integra APIs robustas para una coordinación de tareas fluida, notificaciones y autenticación. Con una interfaz elegante, compatibilidad multidispositivo y futuras funciones de intercambio de tareas, simplifica la gestión del hogar sin esfuerzo.
            `,
		},
		link: "",
		github: "https://github.com/Peleton-011/chore-tracker/",
		image: "/projects/chores_bg.webp",
		tags: [
			TAGS.NEXT,
			TAGS.TS,
			TAGS.TAILWIND,
			TAGS.NODE,
			TAGS.MONGODB,
			TAGS.CLERK,
		],
		order: 6,
	},
	{
		title: "Minesweeper",
		description: {
			en: `
A sleek and high-performance Minesweeper game built with React, featuring custom board configurations, advanced gameplay mechanics, and responsive design. Optimized for speed and smooth interactions, it includes API integration for enhanced functionality, a no-guess mode for strategic play, and a dark mode for better accessibility.
                `,
			es: `
            Un Buscaminas elegante y de alto rendimiento, desarrollado con React. Incluye configuraciones personalizadas de tablero, mecánicas avanzadas de juego y diseño responsive. Optimizado para velocidad e interacciones fluidas, incorpora integración con APIs para funcionalidades mejoradas, un modo sin situaciones ambiguas para un juego más estratégico y un modo oscuro para mayor accesibilidad.
            `,
		},
		link: "https://minesweeper-lake-six.vercel.app/",
		github: "https://github.com/Peleton-011/minesweeper",
		image: "/projects/mines_bg.webp",
		tags: [TAGS.REACT, TAGS.CSSMODULES, TAGS.VITE],
		order: 1,
	},

	{
		title: "Portfolio",
		description: {
			en: `
                This portfolio is a high-performance, multilingual web portfolio built with Astro, Tailwind CSS, and TypeScript. It emphasizes speed, maintainability, and modern design while ensuring an optimal user experience across devices. The site integrates dynamic content management, supports light/dark mode, and features SEO optimization for better visibility.
                `,
			es: `
            Este portfolio es un portafolio web multilingüe de alto rendimiento, construido con Astro, Tailwind CSS y TypeScript. Se centra en la velocidad, la mantenibilidad y un diseño moderno, garantizando una experiencia de usuario óptima en todos los dispositivos. El sitio incorpora gestión dinámica de contenido, soporte para light/dark mode y optimización SEO para una mayor visibilidad.
            `,
		},
		link: "",
		github: "https://github.com/Peleton-011/portfolio",
		image: "/website.webp",
		tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.TS],
		order: 7,
	},
];

export const TRANSLATE_PROJECTS = (lang: string) => {
	return PROJECTS.map((project) => ({
		...project,
		description: project.description[lang],
	})).sort((a, b) => a.order - b.order);
};
