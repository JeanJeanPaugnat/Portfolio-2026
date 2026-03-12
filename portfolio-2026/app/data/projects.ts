export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ContentSection {
  title: string;
  content: string;
  images?: string[]; // Images displayed after this section (2-3 = row, 4+ = carousel)
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  shortDescription: string;
  about: string;
  contentSections: ContentSection[];
  thumbnail: string;
  skills: SkillCategory[];
  technologies: string[];
  year: number;
  liveUrl?: string;
  githubUrl?: string;
  collaborators?: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "sketchshop",
    title: "SketchShop",
    category: "Open Source",
    date: "2025",
    shortDescription:
      "Une solution de PAO open source construite avec p5.js, orientee performance, experimentation et creation graphique.",
    about:
      "Passionne par la photocomposition et l'ecosysteme Photoshop, j'ai decide de concevoir ma propre solution de PAO en mode open source. L'objectif etait de pousser la bibliotheque p5.js dans ses retranchements pour creer une application web complete.\n\nJ'ai pense cette plateforme comme une alternative personnelle et flexible, avec gestion des filtres, pinceaux dynamiques, import et export de documents. Ce projet m'a permis d'adopter une vraie posture de product designer en fabriquant moi-meme les outils que j'utilise.",
    contentSections: [
      {
        title: "Rendu Graphique et Optimisation",
        content:
          "Pour garantir une experience fluide, j'ai realise un travail approfondi sur le rendu graphique et l'optimisation des performances via createGraphics. J'ai notamment developpe des pinceaux proceduraux qui reagissent dynamiquement au trace.\n\nJe travaille aussi sur l'implementation de Fragment Shaders via WebGL pour deporter les calculs de rendu sur le GPU et produire des effets visuels complexes en temps reel.",
      },
      {
        title: "Innovation et Intelligence Artificielle",
        content:
          "Toujours dans une logique d'evolution, j'explore l'integration de l'intelligence artificielle dans SketchShop. J'utilise TensorFlow.js pour experimenter des fonctionnalites d'assistance au dessin et de retouche intelligente.\n\nL'objectif est de transformer l'application en laboratoire creatif melant standards de la PAO, machine learning et technologies web modernes.",
      },
    ],
    thumbnail: "/thumbnail/sketchshop.png",
    skills: [   
      { category: "Langages", items: ["HTML", "CSS", "JavaScript"] },
      {
        category: "Frameworks",
        items: ["Vite", "p5.js", "TensorFlow.js", "WebGL"],
      },
      { category: "Outils", items: ["Git", "GitHub"] },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite",
      "p5.js",
      "TensorFlow.js",
      "WebGL",
      "GitHub",
    ],
    year: 2025,
    liveUrl: "https://jeanjeanpaugnat.github.io/SketchShop-P5/#/",
    githubUrl: "https://github.com/JeanJeanPaugnat/SketchShop-P5",
    featured: true,
  },

  {
    id: "2",
    slug: "holobarista",
    title: "HoloBarista",
    category: "WebXR",
    date: "2025",
    shortDescription:
      "Un simulateur de cafe en realite mixte pense pour Meta Quest 3 et developpe en WebXR.",
    about:
      "Dans le cadre de ce projet universitaire, j'ai concu une experience de realite mixte intitulee HoloBarista, developpee integralement en anglais. Le principe etait de transformer l'environnement reel de l'utilisateur en cafe interactif grace au casque Meta Quest 3.\n\nLe projet s'appuie sur le hit-test, le passthrough et la mesh occlusion pour superposer comptoir, machines et commandes sur des surfaces reelles et produire une vraie sensation de fusion entre jeu et environnement physique.",
    contentSections: [
      {
        title: "Technologies Immersives et WebXR",
        content:
          "Pour realiser ce dispositif, j'ai utilise l'API WebXR avec A-Frame et Three.js. Cela m'a permis de concevoir un jeu accessible directement depuis le navigateur du casque, sans installation.\n\nJ'ai travaille la gestion des interactions spatiales, la detection des surfaces et l'integration de modeles 3D afin que les objets virtuels reagissent de maniere naturelle au mobilier reel.",
      },
      {
        title: "Game Design et Gestion de Donnees",
        content:
          "Le gameplay repose sur une difficulte progressive, des commandes variees, un inventaire d'ingredients a debloquer et un systeme de score.\n\nPour la persistance et le suivi des profils, j'ai utilise Supabase avec PostgreSQL, tandis que Vercel prenait en charge l'hebergement et le deploiement continu du projet.",
      },
    ],
    thumbnail: "/thumbnail/holo-barista.png",
    skills: [
      { category: "Langages", items: ["HTML", "CSS", "JavaScript"] },
      {
        category: "Frameworks",
        items: ["WebXR", "A-Frame", "Three.js"],
      },
      {
        category: "Outils",
        items: ["Supabase", "Vercel", "Meta Quest 3", "PostgreSQL"],
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "WebXR",
      "A-Frame",
      "Three.js",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Meta Quest 3",
    ],
    year: 2025,
    liveUrl:
      "https://coffee-maker-sae-402-2m2ljb23t-poprixindustrie-9599s-projects.vercel.app/",
    githubUrl: "https://github.com/JeanJeanPaugnat/CoffeeMakerSAE402",
    collaborators: ["Wahel", "Manon"],
    featured: true,
  },

  {
    id: "3",
    slug: "click-collect-louis-vuitton",
    title: "Click & Collect LV",
    category: "Full Stack",
    date: "2024",
    shortDescription:
      "Une experience Click & Collect inspiree de Louis Vuitton, concue en full stack avec UX, API REST et back-office.",
    about:
      "Dans le cadre d'un projet universitaire, j'ai concu et developpe une application de Click & Collect. L'enjeu principal etait de construire une architecture full stack robuste capable de gerer des parcours utilisateurs complexes au sein d'un systeme d'information, tout en respectant les codes esthetiques du luxe.\n\nLe projet m'a permis de relier analyse des besoins, conception d'interface, structuration des donnees et mise en place d'une logique metier complete cote client et cote administration.",
    contentSections: [
      {
        title: "Analyse et Conception UX/UI",
        content:
          "Avant le developpement, j'ai defini les fonctionnalites prioritaires via des user stories afin d'encadrer le MVP pour la partie client comme pour le back-office.\n\nJ'ai ensuite analyse et retranscrit la charte graphique de Louis Vuitton avant de concevoir l'ensemble des interfaces sous Figma avec une attention particuliere a l'experience utilisateur.",
        images: ["/collection/collect-click/paysage-1.jpg", "/collection/collect-click/paysage-2.jpg"],
        },
      {
        title: "Developpement Full Stack",
        content:
          "Le projet repose sur un front-end en Vite et Tailwind CSS afin d'obtenir une interface reactive et fidele aux maquettes. Cote back-end, j'ai approfondi PHP avec une gestion avancee des cookies de session pour maintenir l'etat utilisateur.\n\nJ'ai egalement structure une architecture API REST pour gerer dynamiquement le catalogue, les filtres, le panier et les commandes, ainsi que la base de donnees MySQL via phpMyAdmin.",
      images: ["/collection/collect-click/profil-1.jpg", "/collection/collect-click/profil-2.jpg", "/collection/collect-click/profil-3.jpg"],
        },
    ],
    thumbnail: "/thumbnail/click-collect.png",
    skills: [
      {
        category: "Langages",
        items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      },
      {
        category: "Frameworks",
        items: ["Vite", "Tailwind CSS", "API REST"],
      },
      { category: "Outils", items: ["phpMyAdmin", "Figma", "Git"] },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Vite",
      "Tailwind CSS",
      "API REST",
      "phpMyAdmin",
      "Figma",
    ],
    year: 2024,
    liveUrl:
      "https://sae-301-2adoq6tem-poprixindustrie-9599s-projects.vercel.app/",
    githubUrl: "https://github.com/JeanJeanPaugnat/Click-Collect-Louis-Vuitton",
    featured: true,
  },

  {
    id: "4",
    slug: "astro-skills",
    title: "AstroSkills",
    category: "Data Visualisation",
    date: "2024",
    shortDescription:
      "Une data visualisation interactive qui transforme le referentiel BUT MMI en systeme solaire navigable.",
    about:
      "J'ai realise ce projet universitaire avec l'objectif de transformer des donnees academiques complexes en experience visuelle et interactive. La problematique etait de permettre aux etudiants de BUT MMI de visualiser leur progression parmi les nombreuses competences et apprentissages critiques du programme.\n\nJ'ai mene une reflexion UX pour proposer une navigation intuitive au sein des donnees, en m'inspirant des arbres de competences issus de l'univers du jeu video.",
    contentSections: [
      {
        title: "Une Metaphore Spatiale Animee",
        content:
          "Dans cette interface, les cinq competences majeures du BUT sont representees par des planetes et les apprentissages critiques gravitent autour d'elles sous forme de satellites.\n\nJ'ai imagine un systeme dynamique ou les elements s'eclairent progressivement selon la validation des competences, afin que l'utilisateur puisse explorer son parcours de formation de maniere intuitive.",
      },
      {
        title: "Technologies et Interactivite",
        content:
          "Sur le plan technique, je me suis appuye sur SVG pour structurer le systeme visuel et GSAP pour produire des rotations fluides, des animations et des transitions lors des interactions.\n\nCe projet m'a permis de demontrer ma capacite a extraire l'essentiel d'un jeu de donnees et a le traduire en visualisation utile, lisible et creative.",
      },
    ],
    thumbnail: "/thumbnail/astroskills.png",
    skills: [
      {
        category: "Langages",
        items: ["SVG", "HTML", "CSS", "JavaScript"],
      },
      { category: "Frameworks", items: ["GSAP", "Tailwind CSS"] },
      {
        category: "Outils",
        items: ["Git", "GitHub", "Figma", "MCP Server"],
      },
    ],
    technologies: [
      "SVG",
      "GSAP",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Figma",
      "MCP Server",
    ],
    year: 2024,
    liveUrl: "https://but-mmi-skills.vercel.app/",
    githubUrl: "https://github.com/JeanJeanPaugnat/Solar-Skill-System",
    featured: true,
  },

  {
    id: "5",
    slug: "nuit-mmi",
    title: "Nuit MMI",
    category: "Interactive Experience",
    date: "2024",
    shortDescription:
      "Le projet gagnant d'un challenge de 24h, melant mini-jeux, tracking corporel et interaction physique.",
    about:
      "J'ai eu l'opportunite de participer a la Nuit MMI, un concours intensif de 24 heures durant lequel j'ai travaille au sein d'une equipe de cinq personnes. Le theme portait sur la sedentarite chez les professionnels du numerique et notre mission etait de concevoir un dispositif interactif incitant les utilisateurs a l'activite physique par le jeu.\n\nFace a neuf autres equipes, nous avons remporte la premiere place avec une plateforme web regroupant plusieurs mini-jeux immersifs melant reconnaissance visuelle et interaction physique.",
    contentSections: [
      {
        title: "Conception et Technologies",
        content:
          "Pour repondre a ce defi technique, j'ai utilise ML5.js afin d'integrer des modeles de machine learning capables de reconnaitre les positions du corps et les mouvements des mains via la webcam.\n\nPour la logique de jeu et les animations, je me suis appuye sur p5.play, et nous avons egalement exploite le kit Makey Makey pour transformer des objets du quotidien en interfaces tactiles.",
      },
      {
        title: "Les Mini-jeux",
        content:
          "L'experience s'articulait autour de quatre concepts developpes en un temps record : Move & React, Cowboy du Duel, Color Lines et Plumber Puzzle.\n\nCe projet m'a permis de prouver ma capacite a livrer un produit fonctionnel, creatif et techniquement ambitieux dans un delai extremement court.",
      },
    ],
    thumbnail: "/thumbnail/nuit-mmi.png",
    skills: [
      { category: "Langages", items: ["HTML", "CSS", "JavaScript"] },
      { category: "Frameworks", items: ["ML5.js", "p5.play.js"] },
      {
        category: "Outils",
        items: ["Makey Makey", "Webcam Detection", "Vercel"],
      },
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "ML5.js",
      "p5.play.js",
      "Makey Makey",
      "Webcam Detection",
      "Vercel",
    ],
    year: 2024,
    liveUrl: "https://nuit-mmi.vercel.app/game.html",
    githubUrl: "https://github.com/JeanJeanPaugnat/Nuit-MMI",
    collaborators: ["Owen", "Nina", "Enguerran", "Nathan"],
    featured: true,
  },

  {
    id: "6",
    slug: "la-cinetek",
    title: "LaCinetek",
    category: "Full Stack",
    date: "2023",
    shortDescription:
      "Une plateforme de streaming de bandes-annonces avec back-office, base de donnees et injection dynamique de contenu.",
    about:
      "J'ai realise ce projet universitaire afin de concevoir un site s'appuyant sur une source de donnees. L'objectif etait de mobiliser l'ensemble de mes competences en developpement web et en gestion de bases de donnees, tout en decouvrant l'administration d'un hebergement web, la mise en ligne d'un projet et la securisation des donnees.\n\nJ'ai developpe une plateforme permettant de visionner des bandes-annonces issues d'une base de donnees en priorisant la gestion des films, des utilisateurs, des favoris, des commentaires et des notes.",
    contentSections: [
      {
        title: "Un Back-office Dedie",
        content:
          "En parallele, j'ai concu une interface d'administration permettant de piloter le site client. Cet outil sert a ajouter des films, gerer les profils et moderer les commentaires avant publication.\n\nCe travail m'a permis de maitriser les operations CRUD, indispensables a toute application connectee a des donnees structurees.",
        images: [
          "/test1.jpg",
          "/test2.jpg",
        ],
        },
      
      {
        title: "Une Refonte Globale et Fidele",
        content:
          "Au cours du projet, j'ai du respecter le design system de LaCinetek, plateforme de VOD dediee aux films de patrimoine. L'enjeu etait de retranscrire fidelement cette charte graphique tout en adaptant l'UI et l'UX lorsque cela etait pertinent.\n\nCe projet m'a aussi fait progresser sur l'automatisation de la production de pages grace a l'injection dynamique de donnees JSON plutot qu'au code en dur.",
        },
    ],
    thumbnail: "/thumbnail/lacinetek.png",
    skills: [
      {
        category: "Langages",
        items: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      },
      { category: "Frameworks", items: ["JSON", "CRUD"] },
      { category: "Outils", items: ["phpMyAdmin", "GitHub"] },
    ],
    technologies: [
      "PHP",
      "MySQL",
      "phpMyAdmin",
      "HTML",
      "CSS",
      "JavaScript",
      "JSON",
      "GitHub",
    ],
    year: 2023,
    liveUrl: "https://jeanjeanpaugnat.github.io/Cinetek/203-finished/client/",
    githubUrl: "https://github.com/JeanJeanPaugnat/Cinetek",
    featured: true,
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
