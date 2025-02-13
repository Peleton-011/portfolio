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
		"hero.available": "Disponible para trabajar",
		"hero.experience": "+3 años de experiencia en Desarrollo Web.",
		"hero.location": "De Barcelona, España 🇪🇸.",
		"hero.description":
			"Especializado en crear aplicaciones web únicas con tecnologías de vanguardia.",

		"projects.links.preview": "Preview",
		"projects.links.github": "Code",

		projects: TRANSLATE_PROJECTS("en"),

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
		"hero.location": "De Barcelona, España 🇪🇸.",
		"hero.description":
			"Especializado en crear aplicaciones web únicas con tecnologías de vanguardia.",

		"projects.links.preview": "Preview",
		"projects.links.github": "Code",

		projects: TRANSLATE_PROJECTS("es"),

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
