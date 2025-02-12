import { T_PROJECTS } from "./projects";

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

		projects: T_PROJECTS("en"),

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

		projects: T_PROJECTS("es"),

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
