import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowDown } from "lucide-react";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projects,
} from "@/app/data/projects";
import NavBar from "@/app/component/ui/NavBar";
import ImageGallery from "@/app/component/ui/ImageGallery";
import Footer from "@/app/component/sections/Footer";

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
      <header className="sticky top-0 z-50 p-4 md:p-6 bg-white">
        <NavBar />
      </header>

      <main>
        {/* Project Header */}
        <section className="px-6 md:px-24 pt-10 pb-8">
          {/* Category | Date */}
          <div className="flex items-center gap-4 mb-2">
            <span className="font-[Funnel_Display] text-2xl md:text-3xl text-black uppercase">
              {project.category}
            </span>
            <span className="text-black text-2xl">|</span>
            <span className="font-[Funnel_Display] text-2xl md:text-3xl text-black uppercase">
              {project.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-[Crimson_Text] italic text-6xl md:text-8xl lg:text-[128px] text-black uppercase leading-none mb-4">
            {project.title}
          </h1>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0059ff] px-5 py-2.5 rounded-lg font-[Funnel_Display] font-bold text-lg md:text-xl text-white uppercase hover:bg-[#0047cc] transition-colors"
              >
                Voir le site
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-[#1a1a1a] px-5 py-2.5 rounded-lg font-[Funnel_Display] font-bold text-lg md:text-xl text-[#1a1a1a] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors"
              >
                Code source
              </Link>
            )}
          </div>
        </section>

        {/* À propos */}
        <section className="px-6 md:px-24 py-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <h2 className="font-[Funnel_Display] text-2xl md:text-3xl text-black shrink-0">
              À propos
            </h2>
            <div className="font-[Funnel_Display] text-base text-black max-w-xl whitespace-pre-line leading-relaxed">
              {project.about}
            </div>
          </div>
        </section>

        {/* Main Image */}
        <div className="w-full h-96 md:h-[604px] bg-[#d9d9d9] relative">
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

        {/* Content Sections interleaved with Image Rows */}
        {project.contentSections.map((section, index) => (
          <div key={index}>
            <section className="px-6 md:px-24 py-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <h2 className="font-[Funnel_Display] text-2xl md:text-3xl text-black max-w-xs md:max-w-sm shrink-0">
                  {section.title}
                </h2>
                <div className="font-[Funnel_Display] text-base text-black max-w-xl whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </div>
            </section>

            {/* Image row / carousel after this section */}
            {section.images && section.images.length > 0 && (
              <ImageGallery images={section.images} alt={`${project.title} - ${section.title}`} />
            )}
          </div>
        ))}

        {/* Collaborators */}
        {project.collaborators && project.collaborators.length > 0 && (
          <section className="px-6 md:px-24 py-12">
            <h2 className="font-[Crimson_Text] italic text-3xl md:text-5xl text-black uppercase leading-tight">
              Work done with these people:
            </h2>
            <p className="font-[Funnel_Display] text-xl md:text-2xl text-black uppercase mt-1">
              {project.collaborators.join(", ")}
            </p>
          </section>
        )}

        {/* Skills Used */}
        {project.skills.length > 0 && (
          <section className="px-6 md:px-24 py-10">
            <div className="border-t border-black pt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8 uppercase">
              <h2 className="font-[Crimson_Text] italic font-bold text-xl md:text-2xl text-black shrink-0">
                Skills Used
              </h2>
              <div className="flex flex-wrap gap-16 md:gap-24">
                {project.skills.map((skill) => (
                  <div key={skill.category} className="flex flex-col gap-3">
                    <h3 className="font-[Funnel_Display] text-xl md:text-2xl text-black">
                      {skill.category}
                    </h3>
                    <ul className="flex flex-col gap-2 font-[Funnel_Display] font-medium text-lg md:text-xl text-[#919191]">
                      {skill.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Prev / Next Navigation */}
        <section className="px-6 md:px-24 py-8">
          <div className="flex justify-between items-start pt-10">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group flex flex-col"
              >
                <span className="font-[Funnel_Display] font-medium text-lg md:text-xl text-[#919191]">
                  ← Projet précédent
                </span>
                <span className="font-[Crimson_Text] italic capitalize text-3xl md:text-5xl text-black group-hover:text-[#0059ff] transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="font-[Funnel_Display] font-medium text-lg md:text-xl text-[#919191]">
                  Projet suivant →
                </span>
                <span className="font-[Crimson_Text] italic capitalize text-3xl md:text-5xl text-black group-hover:text-[#0059ff] transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : null}
          </div>
        </section>

        {/* Back to all projects */}
        <section className="py-12 flex flex-col items-center gap-2">
          <ArrowDown className="w-6 h-6 text-black" />
          <Link
            href="/work"
            className="font-[Crimson_Text] text-3xl md:text-5xl text-black uppercase hover:text-[#0059ff] transition-colors"
          >
            Back to Other Projects
          </Link>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
