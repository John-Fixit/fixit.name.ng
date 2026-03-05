"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { OpenToWorkBadge } from "@/components/ui/OpenToWorkBadge";
import { ArrowForwardIcon } from "@/components/ui/Icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 py-16 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 dark:bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              {site.tagline}
            </span>
            <OpenToWorkBadge variant="banner" />
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={item}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter text-slate-900 dark:text-text-primary"
            >
              Hi, I&apos;m <span className="text-accent">{site.name}</span>
            </motion.h1>
            <motion.div variants={item}>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-500 dark:text-text-muted font-medium">
                {site.heroSubtitle}
              </p>
            </motion.div>
            <motion.p
              variants={item}
              className="max-w-lg text-base md:text-lg text-slate-600 dark:text-text-muted leading-relaxed"
            >
              {site.description}
            </motion.p>
          </div>

          <motion.div variants={item} className="flex flex-wrap gap-3 md:gap-4">
            <Button
              variant="primary"
              size="lg"
              className="hover:shadow-accent-glow flex items-center gap-2"
              asChild
            >
              <a href="#projects">
                View Work <ArrowForwardIcon className="size-4" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href={site.cvUrl} download>
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative group hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative glass rounded-3xl p-6 md:p-8 aspect-square flex items-center justify-center border border-accent/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-slate-800/50 dark:bg-slate-800/50 p-4 border border-white/10 shadow-2xl">
                <div className="flex gap-1.5 mb-4">
                  <span className="size-3 rounded-full bg-red-500/50" />
                  <span className="size-3 rounded-full bg-amber-500/50" />
                  <span className="size-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="space-y-3 font-mono text-xs sm:text-sm text-left">
                  <div className="text-accent/80">const developer = &#123;</div>
                  <div className="pl-4 text-slate-400 dark:text-slate-300">
                    name:{" "}
                    <span className="text-emerald-400">
                      &apos;{site.name}&apos;
                    </span>
                    ,
                  </div>
                  <div className="pl-4 text-slate-400 dark:text-slate-300">
                    skills: [
                    <span className="text-amber-400">&apos;React&apos;</span>,{" "}
                    <span className="text-amber-400">&apos;Next.js&apos;</span>,{" "}
                    <span className="text-amber-400">&apos;Node&apos;</span>],
                  </div>
                  <div className="pl-4 text-slate-400 dark:text-slate-300">
                    experience:{" "}
                    <span className="text-amber-400">&apos;Senior&apos;</span>,
                  </div>
                  <div className="pl-4 text-slate-400 dark:text-slate-300">
                    passion:{" "}
                    <span className="text-emerald-400">
                      &apos;Building scalable UI&apos;
                    </span>
                  </div>
                  <div className="text-accent/80">&#125;;</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 right-10 size-40 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
