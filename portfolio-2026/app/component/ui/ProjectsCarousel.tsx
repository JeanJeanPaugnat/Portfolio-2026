"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type MotionValue,
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/app/data/projects";

const CARD_W = 380;
const GAP = 24;
const STEP = CARD_W + GAP;

/* ─── Per-card component ──────────────────────────────────────────────────── */

interface CarouselItemProps {
  project: Project;
  index: number;
  dragX: MotionValue<number>;
  containerWidthMV: MotionValue<number>;
}

function CarouselItem({
  project,
  index,
  dragX,
  containerWidthMV,
}: CarouselItemProps) {
  /* distance from this card's center to the viewport center */
  const dist = useTransform(
    [dragX, containerWidthMV] as MotionValue<number>[],
    ([v, w]: number[]) => {
      const cardCenter = index * STEP + CARD_W / 2;
      const viewCenter = -v + w / 2;
      return cardCenter - viewCenter;
    }
  );

  const scale = useTransform(dist, [-STEP * 1.5, 0, STEP * 1.5], [0.82, 1, 0.82]);
  const opacity = useTransform(dist, [-STEP * 2.5, 0, STEP * 2.5], [0.38, 1, 0.38]);
  const rotateY = useTransform(dist, [-STEP * 2, 0, STEP * 2], [14, 0, -14]);
  const imgScale = useTransform(dist, [-STEP, 0, STEP], [1.08, 1, 1.08]);

  return (
    <motion.div
      style={{
        width: CARD_W,
        flexShrink: 0,
        scale,
        opacity,
        rotateY,
        transformPerspective: 900,
      }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block rounded-2xl border border-[#e0e0e0] overflow-hidden shadow-sm"
        onClick={(e) => {
          /* prevent navigation if the user was dragging */
          if (Math.abs(dragX.getVelocity()) > 50) e.preventDefault();
        }}
      >
        {/* Thumbnail */}
        <div className="relative h-70 md:h-90 bg-[#e9e9e9] overflow-hidden">
          {project.thumbnail ? (
            <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-[#e9e9e9]" />
          )}
        </div>

        {/* Card body */}
        <div className="p-6 bg-white">
          <p className="font-[Funnel_Display] text-xs text-[#717171] uppercase tracking-widest mb-1">
            {project.category} · {project.year}
          </p>
          <h3 className="font-[Funnel_Display] font-semibold text-xl text-black uppercase leading-tight">
            {project.title}
          </h3>
          <p className="font-[Funnel_Display] mt-2 text-sm text-[#717171] line-clamp-2">
            {project.shortDescription}
          </p>
          <div className="mt-4 font-[Funnel_Display] text-sm text-[#0059ff] flex items-center gap-1">
            Voir le projet <span aria-hidden="true">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Carousel ─────────────────────────────────────────────────────────────── */

export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerWidthMV = useMotionValue(800);
  const x = useMotionValue(0);

  /* maxX = position when card 0 is centered; minX = card (n-1) centered */
  const maxX = containerWidth / 2 - CARD_W / 2;
  const minX = maxX - (projects.length - 1) * STEP;

  /* measure container and set initial x */
  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.offsetWidth ?? 800;
      setContainerWidth(w);
      containerWidthMV.set(w);
      x.set(w / 2 - CARD_W / 2); // center card 0
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [containerWidthMV, x]);

  /* keep active dot in sync while dragging */
  useEffect(() => {
    return x.on("change", (v) => {
      const w = containerWidthMV.get();
      const offset = -(v - (w / 2 - CARD_W / 2));
      const nearest = Math.round(offset / STEP);
      const clamped = Math.max(0, Math.min(projects.length - 1, nearest));
      setActiveIndex(clamped);
    });
  }, [x, containerWidthMV, projects.length]);

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(projects.length - 1, i));
    setActiveIndex(clamped);
    const w = containerWidthMV.get();
    const target = w / 2 - CARD_W / 2 - clamped * STEP;
    animate(x, target, { type: "spring", stiffness: 220, damping: 28 });
  }

  function handleDragEnd() {
    const w = containerWidthMV.get();
    const offset = -(x.get() - (w / 2 - CARD_W / 2));
    goTo(Math.round(offset / STEP));
  }

  return (
    <div className="relative select-none">
      {/* Track */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        style={{ perspective: 1200 }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: minX, right: maxX }}
          dragElastic={0.07}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          style={{ x, display: "flex", gap: GAP, cursor: "grab" }}
          whileDrag={{ cursor: "grabbing" }}
        >
          {projects.map((project, i) => (
            <CarouselItem
              key={project.id}
              project={project}
              index={i}
              dragX={x}
              containerWidthMV={containerWidthMV}
            />
          ))}
        </motion.div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-8 px-6 md:px-24">
        {/* Animated counter */}
        <p className="font-[Funnel_Display] text-sm text-[#717171] tabular-nums w-16">
          <motion.span
            key={activeIndex}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </motion.span>
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </p>

        {/* Pill dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className="h-2 rounded-full bg-black origin-left"
              animate={{
                width: i === activeIndex ? 24 : 8,
                opacity: i === activeIndex ? 1 : 0.28,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex gap-2">
          <motion.button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Projet précédent"
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black disabled:opacity-20"
            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === projects.length - 1}
            aria-label="Projet suivant"
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-black disabled:opacity-20"
            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            →
          </motion.button>
        </div>
      </div>
    </div>
  );
}
