"use client";

import { motion } from "motion/react";
import { projects, type Project } from "@/app/data/projects";
import ProjectsCarousel from "../ui/ProjectsCarousel";
import Link from "next/link";

interface ProjectsSectionProps {
  showAll?: boolean;
  maxProjects?: number;
}

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const TITLE = "Projets".split("");

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
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 md:mb-16">
          {/* Letter-by-letter title reveal */}
          <motion.h2
            className="font-[Crimson_Text] italic text-6xl md:text-8xl lg:text-[128px] text-black uppercase leading-none flex overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.055 } },
            }}
          >
            {TITLE.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { y: "110%", opacity: 0 },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    transition: { duration: 0.65, ease: EASE },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description fade-up */}
          <motion.p
            className="font-[Crimson_Text] text-xl text-black max-w-md md:pt-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
          >
            Retrouve ici l&apos;ensemble de mes projets. Je developpe des
            solutions web alliant design et fonctionnalite.
          </motion.p>
        </div>
      </div>

      {/* Carousel — full-bleed (no horizontal padding) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
      >
        <ProjectsCarousel projects={displayProjects} />
      </motion.div>

      {/* View All Link */}
      {!showAll && maxProjects && (
        <div className="container mx-auto px-6 md:px-24 mt-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-[Funnel_Display] text-lg text-black hover:text-[#0059ff] transition-colors"
            >
              Voir tous les projets
              <motion.span
                aria-hidden="true"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
}
