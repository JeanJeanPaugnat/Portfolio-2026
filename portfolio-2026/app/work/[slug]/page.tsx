import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projects,
} from "@/app/data/projects";
import NavBar from "@/app/component/ui/NavBar";
import Button from "@/app/component/ui/Button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet non trouvé | Jean Paugnat",
    };
  }

  return {
    title: `${project.title} | Jean Paugnat`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 md:p-6">
        <NavBar />
      </header>

      <main className="container mx-auto px-6 md:px-24 py-12 md:py-20">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-[Funnel_Display] text-black hover:text-[#0059ff] transition-colors mb-8"
        >
          <span aria-hidden="true">←</span>
          Retour aux projets
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <p className="font-[Funnel_Display] text-[#717171] text-lg mb-4">
            {project.year}
          </p>
          <h1 className="font-[Crimson_Text] italic text-4xl md:text-6xl lg:text-7xl text-black uppercase leading-tight mb-6">
            {project.title}
          </h1>
          <p className="font-[Funnel_Display] text-xl md:text-2xl text-[#717171] max-w-3xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Main Image */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] bg-[#e9e9e9] mb-12">
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="font-[Funnel_Display] font-semibold text-2xl text-black uppercase mb-6">
              À propos du projet
            </h2>
            <p className="font-[Funnel_Display] text-lg text-[#333] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div>
              <h3 className="font-[Funnel_Display] font-semibold text-lg text-black uppercase mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#f5f5f5] text-sm font-[Funnel_Display] text-black rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="primary"
                  className="w-full justify-center"
                >
                  Voir le site
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="outline"
                  className="w-full justify-center !text-black !border-black hover:!bg-black hover:!text-white"
                >
                  Code source
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        {project.images.length > 0 && (
          <section className="mb-16">
            <h2 className="font-[Funnel_Display] font-semibold text-2xl text-black uppercase mb-8">
              Galerie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-[250px] md:h-[350px] bg-[#e9e9e9]"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <nav className="border-t border-[#e5e5e5] pt-8">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex flex-col"
              >
                <span className="font-[Funnel_Display] text-sm text-[#717171] mb-1">
                  ← Projet précédent
                </span>
                <span className="font-[Crimson_Text] italic text-lg text-black group-hover:text-[#0059ff] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col text-right"
              >
                <span className="font-[Funnel_Display] text-sm text-[#717171] mb-1">
                  Projet suivant →
                </span>
                <span className="font-[Crimson_Text] italic text-lg text-black group-hover:text-[#0059ff] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : null}
          </div>
        </nav>
      </main>
    </div>
  );
}
