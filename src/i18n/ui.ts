export const LANGUAGES = [
	{
		name: "Español",
        code: "es",
		location: "España",
		icon: "ESSpanishIcon",
	},
	{
		name: "English",
        code: "en",
		location: "US",
		icon: "USEnglishIcon",
	},
    {
        name: "Català",
        code: "ca",
        location: "Catalunya",
        icon: "CatalanIcon",
    }
]

export const languages = {
	en: "English",
	es: "Español",
	ca: "Català",
};

export const defaultLang = "es";

export const ui = {
	en: {
		"nav.home": "Home",
		"nav.about": "About",
		"nav.contact": "Contact",
		"nav.projects": "Projects",
		"nav.experience": "Experience",
	},
	es: {
		"nav.home": "Inicio",
		"nav.about": "Sobre mí",
		"nav.contact": "Contacto",
		"nav.projects": "Proyectos",
		"nav.experience": "Experiencia",
	},
} as const;
