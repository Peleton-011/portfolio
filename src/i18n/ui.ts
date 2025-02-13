import { TRANSLATE_PROJECTS } from "./projects";

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
		"hero.available": "Available for work",
		"hero.experience": "+3 years of experience in Web Development.",
		"hero.location": "From Barcelona, Spain.",
		"hero.description":
			"Proficient in creating unique web applications with cutting-edge technologies.",

		"projects.links.preview": "Preview",
		"projects.links.github": "Code",

		projects: TRANSLATE_PROJECTS("en"),

		experience: [
			{
				date: "Now ...",
				title: "Desarrollador Web y Programador Freelance",
				description: [
					[
						{
							type: "normal",
							text: `Responsible for the creation and maintenance of websites and web applications.
                                Management of existing projects and collaboration with clients.`,
						},
					],
					[
						{
							type: "normal",
							text: "Some of the technologies I work with include ",
						},
						{
							type: "strong",
							text: "Vue.js, Nuxt.js, React, Next.js, TypeScript, and Tailwind CSS",
						},
						{
							type: "normal",
							text: ", among others. I implement integrations with external APIs, server-side rendering (SSR), performance optimization, and responsive design, ensuring that each solution is modern and functional across different devices.",
						},
					],
				],
			},
			{
				date: "2024",
				title: "Lead Developer — Spoloom CZ",
				description: [
					[
						{
							type: "normal",
							text: `Responsible for the platform, components, and utilities for Spoloom's e-commerce and digital learning site. 
                                    Built from scratch a custom e-commerce page integrated with Stripe and connected to the Shopify Oxygen API as a Content Management System. 
                                    Developed from scratch a digital learning system with progress tracking across different levels, including a custom video player. 
                                    `,
						},
						{
							type: "strong",
							text: "Achieved a 60% improvement in loading speed.",
						},
					],
				],
				// link: "#",
				// repo: "#"
			},
			{
				date: "2022 - 2023",
				title: "Web Developer & Freelance Programmer",
				description: [
					[
						{
							type: "normal",
							text: "Responsible for designing and developing various web applications and interactive tools tailored to the specific needs of each client. My projects ranged from creating dynamic applications to automation tools, always prioritizing efficiency, scalability, and user experience.",
						},
					],
					[
						{
							type: "normal",
							text: "This experience allowed me to develop ",
						},
						{
							type: "strong",
							text: "key skills in software architecture, problem-solving, and project management",
						},
						{
							type: "normal",
							text: ", as well as strengthen my ability to work independently and effectively meet client requirements.",
						},
					],
				],
			},
		],

		about: [
			[
				{
					type: "normal",
					text: "Hi, my name is Nico, and I’m a ",
				},
				{
					type: "strong",
					text: "fullstack developer. ",
				},
				{
					type: "normal",
					text: "My passion for programming started when I tried to make a game at 12 years old. Currently, ",
				},
				{
					type: "strong",
					text: "I maintain projects I’ve participated in.",
				},
			],
			[
				{
					type: "normal",
					text: "I believe in the importance of writing ",
				},
				{
					type: "strong",
					text: "clean, scalable, and well-documented code. ",
				},
				{
					type: "normal",
					text: "I love learning new technologies and constantly improving my skills. ",
				},
			],
			[
				{
					type: "normal",
					text: "When I'm not coding, I enjoy writing and playing video games.",
				},
			],
		],

		"about.goodbye": [
			{
				type: "strong",
				text: "If you have an interesting project in mind or just want to chat about development, ",
			},
			{
				type: "highlight",
				text: "reach out to me!",
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
		"hero.location": "De Barcelona, España.",
		"hero.description":
			"Especializado en crear aplicaciones web únicas con tecnologías de vanguardia.",

		"projects.links.preview": "Preview",
		"projects.links.github": "Code",

		projects: TRANSLATE_PROJECTS("es"),

		experience: [
			{
				date: "Actualmente ...",
				title: "Desarrollador Web y Programador Freelance",
				description: [
					[
						{
							type: "normal",
							text: `Responsable de la creación y mantenimiento de sitios web y aplicaciones web.
                Gestión de proyectos existentes y colaboración con clientes.`,
						},
					],
					[
						{
							type: "normal",
							text: "Algunas de las tecnologías con las que trabajo incluyen ",
						},
						{
							type: "strong",
							text: "Vue.js, Nuxt.js, React, Next.js, TypeScript y Tailwind CSS",
						},
						{
							type: "normal",
							text: ", entre otras. Implemento integraciones con APIs externas, renderizado en servidor (SSR), optimización de rendimiento y diseño responsive, asegurando que cada solución sea moderna y funcional en distintos dispositivos.",
						},
					],
				],
			},
			{
				date: "2024",
				title: "Desarrollador Principal — Spoloom CZ",
				description: [
					[
						{
							type: "normal",
							text: `Responsable de la plataforma, componentes y utilidades para la página de e-commerce y de aprendizaje digital de Spoloom. 
                    Implementación de cero de una página custom de e-commerce integrada con Stripe y conectada a la API de Shopify Oxygen como Sistema de Manejo de Contenido. 
                    Implementación de cero de un sistema de aprendizaje digital con seguimiento de progreso en los distintos niveles incluyendo un reproductor de vídeo custom. 
                    `,
						},
						{
							type: "strong",
							text: "Mejora de un 60% en la velocidad de carga.",
						},
					],
				],
				// link: "#",
				//repo: "#"
			},
			{
				date: "2022 - 2023",
				title: "Desarrollador Web y Programador Freelance",
				description: [
					[
						{
							type: "normal",
							text: "Responsable del diseño y desarrollo de diversas aplicaciones web y herramientas interactivas, adaptadas a las necesidades específicas de cada cliente. Mis proyectos abarcaban desde la creación de aplicaciones dinámicas hasta herramientas de automatización, siempre priorizando la eficiencia, la escalabilidad y la experiencia del usuario.",
						},
					],
					[
						{
							type: "normal",
							text: "Esta experiencia me permitió desarrollar ",
						},
						{
							type: "strong",
							text: "habilidades clave en arquitectura de software, resolución de problemas y gestión de proyectos",
						},
						{
							type: "normal",
							text: ", además de consolidar mi capacidad para trabajar de manera autónoma y cumplir con los requisitos de cada cliente de manera efectiva.",
						},
					],
				],
			},
		],

		about: [
			[
				{
					type: "normal",
					text: "Hola, me llamo Nico y soy desarrollador ",
				},
				{
					type: "strong",
					text: "fullstack. ",
				},
				{
					type: "normal",
					text: "Mi pasión por la programación empezó intentando hacer un juego con 12 años. Actualmente ",
				},
				{
					type: "strong",
					text: "mantengo proyectos en los que he participado.",
				},
			],
			[
				{
					type: "normal",
					text: "Creo en la importancia de escribir código  ",
				},
				{
					type: "strong",
					text: "limpio, escalable y bien documentado. ",
				},
				{
					type: "normal",
					text: "Me encanta aprender nuevas tecnologías y mejorar constantemente mis habilidades. ",
				},
			],
			[
				{
					type: "normal",
					text: "Cuando no estoy programando, me gusta escribir y jugar a videojuegos.",
				},
			],
		],

		"about.goodbye": [
			{
				type: "strong",
				text: "Si tienes un proyecto interesante en mente o simplemente quieres charlar sobre desarrollo, ",
			},
			{
				type: "highlight",
				text: "¡escríbeme!",
			},
		],
	},
} as const;
