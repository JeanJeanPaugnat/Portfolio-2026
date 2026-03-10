import { projects, Project } from "@/app/data/projects";
import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";

interface ProjectsSectionProps {
  showAll?: boolean;
  maxProjects?: number;
}

export default function ProjectsSection({
  showAll = false,
  maxProjects,
}: ProjectsSectionProps) {
  const displayProjects: Project[] = showAll
    ? projects
    : maxProjects
      ? projects.slice(0, maxProjects)
      : projects;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 md:mb-16">
          <h2 className="font-[Crimson_Text] italic text-6xl md:text-8xl lg:text-[128px] text-black uppercase leading-none">
            Projects
          </h2>
          <p className="font-[Crimson_Text] text-base text-black max-w-md md:pt-8">
            Retrouve ici l&apos;ensemble de mes projets. Chaque réalisation
            traduit une intention différente, entre direction artistique,
            expérimentation technique et production web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Link */}
        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-[Funnel_Display] text-lg text-black hover:text-[#0059ff] transition-colors"
            >
              Voir tous les projets
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
