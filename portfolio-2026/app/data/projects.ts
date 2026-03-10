export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  technologies: string[];
  year: number;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "portfolio-2026",
    title: "Portfolio Personnel 2026",
    shortDescription:
      "Une application web pour présenter mes compétences et projets",
    fullDescription:
      "Ce portfolio a été conçu pour mettre en valeur mon parcours et mes réalisations en tant que développeur web créatif. Utilisant les dernières technologies comme Next.js 15 et Tailwind CSS, il offre une expérience utilisateur fluide et moderne.",
    thumbnail: "/projects/portfolio-thumb.jpg",
    images: [
      "/projects/portfolio-1.jpg",
      "/projects/portfolio-2.jpg",
      "/projects/portfolio-3.jpg",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: 2026,
    liveUrl: "https://jeanpaugnat.dev",
    githubUrl: "https://github.com/jeanpaugnat/portfolio-2026",
    featured: true,
  },
  {
    id: "2",
    slug: "e-commerce-platform",
    title: "Plateforme E-commerce",
    shortDescription:
      "Une solution e-commerce complète avec panier et paiement",
    fullDescription:
      "Développement d'une plateforme e-commerce full-stack avec gestion des produits, panier d'achat, système de paiement Stripe et tableau de bord administrateur.",
    thumbnail: "/projects/ecommerce-thumb.jpg",
    images: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    year: 2025,
    liveUrl: "https://shop-demo.jeanpaugnat.dev",
    githubUrl: "https://github.com/jeanpaugnat/ecommerce-platform",
    featured: true,
  },
  {
    id: "3",
    slug: "task-management-app",
    title: "Application de Gestion de Tâches",
    shortDescription:
      "Une app collaborative pour gérer les projets en équipe",
    fullDescription:
      "Application de gestion de tâches en temps réel permettant aux équipes de collaborer efficacement. Fonctionnalités incluant le drag-and-drop, les notifications en temps réel et l'intégration avec des outils tiers.",
    thumbnail: "/projects/taskapp-thumb.jpg",
    images: [
      "/projects/taskapp-1.jpg",
      "/projects/taskapp-2.jpg",
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    year: 2025,
    githubUrl: "https://github.com/jeanpaugnat/task-management",
    featured: true,
  },
  {
    id: "4",
    slug: "weather-dashboard",
    title: "Dashboard Météo",
    shortDescription:
      "Visualisation des données météorologiques en temps réel",
    fullDescription:
      "Dashboard interactif affichant les données météo avec des graphiques dynamiques, prévisions sur 7 jours et alertes météo personnalisées.",
    thumbnail: "/projects/weather-thumb.jpg",
    images: [
      "/projects/weather-1.jpg",
    ],
    technologies: ["Vue.js", "D3.js", "OpenWeather API"],
    year: 2024,
    liveUrl: "https://weather.jeanpaugnat.dev",
    featured: false,
  },
  {
    id: "5",
    slug: "blog-platform",
    title: "Plateforme de Blog",
    shortDescription:
      "CMS headless avec éditeur markdown avancé",
    fullDescription:
      "Création d'une plateforme de blog moderne avec un éditeur markdown riche, système de commentaires, et optimisation SEO automatique.",
    thumbnail: "/projects/blog-thumb.jpg",
    images: [
      "/projects/blog-1.jpg",
      "/projects/blog-2.jpg",
    ],
    technologies: ["Astro", "MDX", "Tailwind CSS", "Vercel"],
    year: 2024,
    githubUrl: "https://github.com/jeanpaugnat/blog-platform",
    featured: false,
  },
  {
    id: "6",
    slug: "fitness-tracker",
    title: "Fitness Tracker Mobile",
    shortDescription:
      "Application mobile de suivi d'activité sportive",
    fullDescription:
      "Application mobile cross-platform pour le suivi des activités sportives, avec GPS, statistiques détaillées et défis communautaires.",
    thumbnail: "/projects/fitness-thumb.jpg",
    images: [
      "/projects/fitness-1.jpg",
      "/projects/fitness-2.jpg",
    ],
    technologies: ["React Native", "Expo", "Firebase", "MapBox"],
    year: 2024,
    featured: false,
  },
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
