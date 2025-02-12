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
Bowlly Eats is a modern and high-performance recipe web app built with Nuxt 3 and Vue 3, designed for speed, responsiveness, and flexibility. It features dynamic ingredient customization, allowing users to swap out ingredients easily. The app integrates with an external API to fetch recipes efficiently while maintaining a smooth user experience with server-side rendering (SSR) and optimized asset loading. Its mobile-friendly, responsive design ensures a seamless experience across devices, while Tailwind CSS provides a clean and maintainable UI.
                `,
			es: `

            `,
		},
		link: "https://bowlly-eats.vercel.app",
		github: "https://github.com/Peleton-011/bowlly-eats",
		image: "/website.webp",
		tags: [TAGS.NUXT, TAGS.VUE, TAGS.TS, TAGS.TAILWIND],
		order: 2,
	},
	{
		title: "Chat-GPT prompt splitter",
		description: {
			en: `
                ChatGPT Prompt Splitter is a fast, responsive web tool designed to intelligently break down large texts for seamless AI processing. Built with modern web technologies, it features automatic language detection, efficient text segmentation, and a sleek UI. The project prioritizes performance, maintainability, and smooth API integration to enhance usability across different languages and contexts.
                `,
			es: ``,
		},
		link: "https://chat-gpt-prompt-splitter-alpha.vercel.app/",
		github: "https://github.com/Peleton-011/chatGPT-prompt-splitter",
		image: "/website.webp",
		tags: [TAGS.NEXT, TAGS.TS, TAGS.VITE],
		order: 3,
	},
	{
		title: "Snap Quest",
		description: {
			en: `
SnapQuest is an interactive photo scavenger hunt game designed for speed, performance, and seamless user experience. Built with Next.js and React, it features API integration for dynamic prompts, a responsive and adaptive UI, and efficient exports via PDF and ZIP. The sleek, maintainable codebase ensures scalability while supporting multiple languages and a visually engaging mosaic grid layout.                `,
			es: ``,
		},
		link: "https://snap-quest-pink.vercel.app/",
		github: "https://github.com/Peleton-011/snap-quest/",
		image: "/website.webp",
		tags: [TAGS.NEXT, TAGS.REACT, TAGS.TS, TAGS.MONGODB],
		order: 4,
	},
	{
		title: "Etch a Sketch",
		description: {
			en: `
Etch-a-Sketch Playground is a modern, high-performance web-based drawing tool that brings the classic pixelated sketching experience to life. Built with a sleek and maintainable codebase, it features responsive design, smooth interactions, and extended tools like custom color selection, opacity control, and grid customization. With optimized JavaScript for fast rendering and potential API integrations for expanded functionality, this project offers a fun and engaging experience for all users.
                `,
			es: ``,
		},
		link: "https://peleton-011.github.io/etch-a-sketch-project/",
		github: "https://github.com/Peleton-011/etch-a-sketch-project",
		image: "/website.webp",
		tags: [TAGS.HTML, TAGS.CSS, TAGS.JS],
		order: 5,
	},
	{
		title: "HouseHold Hero",
		description: {
			en: `
                Household Hero is a high-performance, responsive task management platform designed for households and individuals. Built with Next.js, it integrates robust APIs for seamless task coordination, notifications, and authentication. With a sleek UI, multi-device support, and upcoming task-trading features, it streamlines household management effortlessly.
                `,
			es: ``,
		},
		link: "",
		github: "https://github.com/Peleton-011/chore-tracker/",
		image: "/website.webp",
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
			es: ``,
		},
		link: "https://minesweeper-lake-six.vercel.app/",
		github: "https://github.com/Peleton-011/minesweeper",
		image: "/website.webp",
		tags: [TAGS.REACT, TAGS.CSSMODULES, TAGS.VITE],
		order: 1,
	},

	{
		title: "Portfolio",
		description: {
			en: `
                Nico's portfolio is a high-performance, multilingual web portfolio built with Astro, Tailwind CSS, and TypeScript. It emphasizes speed, maintainability, and modern design while ensuring an optimal user experience across devices. The site integrates dynamic content management, supports light/dark mode, and features SEO optimization for better visibility.
                `,
			es: ``,
		},
		link: "",
		github: "https://github.com/Peleton-011/portfolio",
		image: "/website.webp",
		tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.TS],
		order: 7,
	},
];

export const T_PROJECTS = (lang: string) => {
    return PROJECTS.map((project) => ({
        ...project,
        description: project.description[lang],
    })).sort((a, b) => a.order - b.order)
}