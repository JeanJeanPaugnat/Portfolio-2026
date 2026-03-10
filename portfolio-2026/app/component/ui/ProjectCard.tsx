import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
        href={`/work/${project.slug}`}
     className="rounded-[16px] border border-[#717171] flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
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
        <p className="font-[Funnel_Display] mt-3 text-base text-[#717171]">
          {project.shortDescription}
        </p>

      </div>
    </Link>
  );
}
