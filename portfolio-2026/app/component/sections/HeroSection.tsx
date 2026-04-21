"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Button from "../ui/Button";
import CanvasBackground from "../ui/CanvasBackground";
import SocialLinks from "../ui/SocialLinks";

const TITLE_WORDS = ["Creative", "web", "Developer"];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const wordReveal = {
  hidden: { y: "115%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const btnEntrance = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 18 },
  },
};

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { stiffness: 65, damping: 18 };
  const rotX = useSpring(
    useTransform(mouseY, [-500, 500], [2.5, -2.5]),
    springCfg
  );
  const rotY = useSpring(
    useTransform(mouseX, [-700, 700], [-2.5, 2.5]),
    springCfg
  );

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width / 2);
    mouseY.set(e.clientY - r.top - r.height / 2);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="px-8 py-8 bg-white">
      <motion.section
        className="relative min-h-screen bg-linear-to-b from-[#0059ff] to-[#19253b] text-white overflow-hidden rounded-3xl"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1400 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <CanvasBackground />

        {/* Content Container */}
        <motion.div
          className="container relative z-10 mx-auto px-6 md:px-24 pt-32 md:pt-48 pb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Location */}
          <motion.p
            className="font-[Funnel_Display] font-light text-lg md:text-xl capitalize mb-8 flex items-center gap-2"
            variants={fadeUp}
          >
            <motion.span
              className="inline-block w-2 h-2 rounded-full bg-white"
              animate={{ scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            Based in Limoges, FR
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="font-[Crimson_Text] italic text-5xl md:text-7xl lg:text-[76px] uppercase leading-[85%] max-w-lg mb-8"
            variants={stagger}
            aria-label="Creative web Developer"
          >
            {TITLE_WORDS.map((word) => (
              <span key={word} className="block overflow-hidden pb-[0.05em]">
                <motion.span
                  className="block"
                  variants={wordReveal}
                  whileHover={{
                    skewX: -5,
                    color: "#a8c4ff",
                    transition: { duration: 0.18 },
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Description */}
          <motion.p
            className="font-[Funnel_Display] font-light text-lg md:text-2xl max-w-3xl leading-relaxed mb-16"
            variants={fadeUp}
          >
            Salut, moi c&apos;est Jean Paugnat. Étudiant en BUT MMI et
            développeur. Je transforme des concepts créatifs en applications web
            performantes et interactives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-24"
            variants={stagger}
          >
            <motion.div
              variants={btnEntrance}
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.93, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button href="/work" variant="primary">
                View my work
              </Button>
            </motion.div>
            <motion.div
              variants={btnEntrance}
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.93, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button href="/cv.pdf" variant="outline" download>
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social Links - Bottom Right */}
        <motion.div
          className="absolute bottom-8 right-8 z-10 md:right-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SocialLinks />
        </motion.div>
      </motion.section>
    </div>
  );
}
