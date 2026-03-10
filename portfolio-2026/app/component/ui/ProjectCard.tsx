import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-[#717171] flex flex-col overflow-hidden group">
      {/* Thumbnail */}
      <div className="relative h-[280px] md:h-[369px] bg-[#e9e9e9] overflow-hidden">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[#e9e9e9]" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 md:px-8 md:py-6 h-[160px] md:h-[192px]">
        <h3 className="font-[Funnel_Display] font-semibold text-lg md:text-2xl text-black uppercase leading-tight">
          {project.title}
        </h3>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-[#717171] hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span className="font-[Crimson_Text] italic text-sm md:text-base uppercase">
            Open the project
          </span>
        </Link>
      </div>
    </article>
  );
}
