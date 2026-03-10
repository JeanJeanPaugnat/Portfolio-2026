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
  images: string[];
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
    slug: "portfolio-2026",
    title: "Portfolio Personnel 2026",
    category: "Web Design",
    date: "Janvier 2026",
    shortDescription:
      "Une application web pour présenter mes compétences et projets",
    about:
      "Ce portfolio a été conçu pour mettre en valeur mon parcours et mes réalisations en tant que développeur web créatif. Utilisant les dernières technologies comme Next.js 15 et Tailwind CSS, il offre une expérience utilisateur fluide et moderne.\n\nL'objectif était de créer une vitrine personnelle qui reflète mon approche du développement : clean, performante et créative. Chaque détail a été pensé pour offrir la meilleure expérience possible.",
    contentSections: [
      {
        title: "Architecture et Performance",
        content:
          "Le site est construit avec Next.js App Router, utilisant le rendu statique (SSG) pour des performances optimales. Les images sont optimisées automatiquement et le code est divisé en chunks pour un chargement rapide.\n\nJ'ai mis en place une architecture de composants modulaire, permettant une maintenance facile et une réutilisation efficace du code.",
        images: [
          "/projects/portfolio-arch-1.jpg",
          "/projects/portfolio-arch-2.jpg",
          "/projects/portfolio-arch-3.jpg",
        ],
      },
      {
        title: "Design System",
        content:
          "J'ai développé un design system complet avec des composants réutilisables : boutons, cartes, navigation. Les typographies Funnel Display et Crimson Text apportent une identité visuelle forte et cohérente sur l'ensemble du site.",
        images: [
          "/projects/portfolio-design-1.jpg",
          "/projects/portfolio-design-2.jpg",
        ],
      },
    ],
    thumbnail: "/projects/portfolio-thumb.jpg",
    images: [
      "/projects/portfolio-1.jpg",
      "/projects/portfolio-2.jpg",
      "/projects/portfolio-3.jpg",
    ],
    skills: [
      { category: "Langages", items: ["HTML", "CSS", "TypeScript"] },
      { category: "Frameworks", items: ["Next.js", "React", "Tailwind CSS"] },
      { category: "Outils", items: ["Git", "Figma", "Vercel"] },
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
    category: "Full-Stack",
    date: "Octobre 2025",
    shortDescription:
      "Une solution e-commerce complète avec panier et paiement",
    about:
      "Développement d'une plateforme e-commerce full-stack avec gestion des produits, panier d'achat, système de paiement Stripe et tableau de bord administrateur.\n\nCe projet m'a permis de travailler sur l'ensemble de la chaîne technique, du frontend au backend, en passant par la base de données et les intégrations tierces.",
    contentSections: [
      {
        title: "Système de Paiement",
        content:
          "Intégration complète de Stripe pour la gestion des paiements sécurisés. Le système gère les webhooks, les remboursements et les factures automatiquement.\n\nJ'ai également mis en place un système de panier persistant avec gestion du stock en temps réel pour éviter les conflits.",
        images: [
          "/projects/ecommerce-stripe-1.jpg",
          "/projects/ecommerce-stripe-2.jpg",
          "/projects/ecommerce-stripe-3.jpg",
        ],
      },
      {
        title: "Dashboard Administrateur",
        content:
          "Le tableau de bord permet la gestion complète du catalogue, le suivi des commandes et l'analyse des ventes. Les données sont visualisées avec des graphiques interactifs pour une prise de décision rapide.",
        images: [
          "/projects/ecommerce-dash-1.jpg",
          "/projects/ecommerce-dash-2.jpg",
        ],
      },
    ],
    thumbnail: "/projects/ecommerce-thumb.jpg",
    images: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
    skills: [
      {
        category: "Langages",
        items: ["TypeScript", "SQL"],
      },
      {
        category: "Frameworks",
        items: ["Next.js", "Prisma", "Tailwind CSS"],
      },
      { category: "Outils", items: ["Stripe", "PostgreSQL", "Vercel"] },
    ],
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    year: 2025,
    liveUrl: "https://shop-demo.jeanpaugnat.dev",
    githubUrl: "https://github.com/jeanpaugnat/ecommerce-platform",
    collaborators: ["Nathan", "Margaux"],
    featured: true,
  },
  {
    id: "3",
    slug: "task-management-app",
    title: "Application de Gestion de Tâches",
    category: "Web App",
    date: "Juin 2025",
    shortDescription:
      "Une app collaborative pour gérer les projets en équipe",
    about:
      "Application de gestion de tâches en temps réel permettant aux équipes de collaborer efficacement. Fonctionnalités incluant le drag-and-drop, les notifications en temps réel et l'intégration avec des outils tiers.\n\nLe défi principal était de garantir la synchronisation en temps réel entre tous les utilisateurs connectés.",
    contentSections: [
      {
        title: "Temps Réel et Collaboration",
        content:
          "Socket.io assure la communication bidirectionnelle entre le serveur et les clients. Chaque modification est propagée instantanément à tous les membres de l'équipe.\n\nUn système de résolution de conflits a été implémenté pour gérer les modifications simultanées sur une même tâche.",
        images: [
          "/projects/taskapp-collab-1.jpg",
          "/projects/taskapp-collab-2.jpg",
          "/projects/taskapp-collab-3.jpg",
        ],
      },
    ],
    thumbnail: "/projects/taskapp-thumb.jpg",
    images: ["/projects/taskapp-1.jpg", "/projects/taskapp-2.jpg"],
    skills: [
      { category: "Langages", items: ["JavaScript", "HTML", "CSS"] },
      { category: "Frameworks", items: ["React", "Node.js", "Express"] },
      { category: "Outils", items: ["Socket.io", "MongoDB", "Git"] },
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    year: 2025,
    githubUrl: "https://github.com/jeanpaugnat/task-management",
    collaborators: ["Gabriel", "Nathan"],
    featured: true,
  },
  {
    id: "4",
    slug: "weather-dashboard",
    title: "Dashboard Météo",
    category: "Data Viz",
    date: "Mars 2024",
    shortDescription:
      "Visualisation des données météorologiques en temps réel",
    about:
      "Dashboard interactif affichant les données météo avec des graphiques dynamiques, prévisions sur 7 jours et alertes météo personnalisées.\n\nCe projet explore la visualisation de données avec D3.js et l'intégration d'APIs externes.",
    contentSections: [
      {
        title: "Visualisation de Données",
        content:
          "Les graphiques sont générés dynamiquement avec D3.js, offrant des animations fluides et des interactions intuitives. Les données sont mises à jour automatiquement toutes les 15 minutes via l'API OpenWeather.",
        images: [
          "/projects/weather-viz-1.jpg",
          "/projects/weather-viz-2.jpg",
        ],
      },
    ],
    thumbnail: "/projects/weather-thumb.jpg",
    images: ["/projects/weather-1.jpg"],
    skills: [
      { category: "Langages", items: ["JavaScript", "HTML", "CSS"] },
      { category: "Frameworks", items: ["Vue.js", "D3.js"] },
      { category: "Outils", items: ["OpenWeather API", "Git"] },
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
    category: "JAMStack",
    date: "Janvier 2024",
    shortDescription: "CMS headless avec éditeur markdown avancé",
    about:
      "Création d'une plateforme de blog moderne avec un éditeur markdown riche, système de commentaires, et optimisation SEO automatique.\n\nLe projet utilise Astro pour le rendu statique et MDX pour combiner Markdown et composants React.",
    contentSections: [
      {
        title: "SEO et Performance",
        content:
          "Chaque article est optimisé automatiquement pour le SEO : meta tags, sitemap, structured data. Le site obtient un score Lighthouse parfait grâce au rendu statique d'Astro.",
        images: [
          "/projects/blog-seo-1.jpg",
          "/projects/blog-seo-2.jpg",
        ],
      },
    ],
    thumbnail: "/projects/blog-thumb.jpg",
    images: ["/projects/blog-1.jpg", "/projects/blog-2.jpg"],
    skills: [
      { category: "Langages", items: ["TypeScript", "MDX"] },
      { category: "Frameworks", items: ["Astro", "Tailwind CSS"] },
      { category: "Outils", items: ["Vercel", "Git"] },
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
    category: "Mobile",
    date: "Septembre 2024",
    shortDescription:
      "Application mobile de suivi d'activité sportive",
    about:
      "Application mobile cross-platform pour le suivi des activités sportives, avec GPS, statistiques détaillées et défis communautaires.\n\nCe projet m'a permis de découvrir le développement mobile avec React Native et d'explorer les APIs natives des smartphones.",
    contentSections: [
      {
        title: "Tracking GPS et Cartographie",
        content:
          "L'application utilise MapBox pour afficher les parcours en temps réel. Le tracking GPS permet de mesurer la distance, la vitesse et l'altitude avec précision.\n\nLes données sont synchronisées avec Firebase pour un accès multi-appareils.",
        images: [
          "/projects/fitness-gps-1.jpg",
          "/projects/fitness-gps-2.jpg",
          "/projects/fitness-gps-3.jpg",
        ],
      },
    ],
    thumbnail: "/projects/fitness-thumb.jpg",
    images: ["/projects/fitness-1.jpg", "/projects/fitness-2.jpg"],
    skills: [
      { category: "Langages", items: ["JavaScript", "TypeScript"] },
      { category: "Frameworks", items: ["React Native", "Expo"] },
      { category: "Outils", items: ["Firebase", "MapBox", "Git"] },
    ],
    technologies: ["React Native", "Expo", "Firebase", "MapBox"],
    year: 2024,
    collaborators: ["Margaux"],
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
