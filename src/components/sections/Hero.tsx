"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { OpenToWorkBadge } from "@/components/ui/OpenToWorkBadge";
import { ArrowForwardIcon } from "@/components/ui/Icons";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 py-16 md:py-0">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="space-y6 md:space-y-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative glass rounded-3xl p-6 md:p-8 aspect-square flex items-center justify-center border border-accent/20 overflow-hidden shadow-xl shadow-accent/5">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl bg-gray-700 dark:bg-slate-900/70 p-0 border border-white/10 shadow-2xl overflow-hidden">
                {/* Window title bar */}
                <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/10 bg-slate-800  dark:bg-slate-900/80">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-red-500/80 dark:bg-red-500/60" />
                    <span className="size-2.5 rounded-full bg-amber-500/80 dark:bg-amber-500/60" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80 dark:bg-emerald-500/60" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 tabular-nums">
                    profile.ts
                  </span>
                  <div className="w-14" />
                </div>
                {/* Code + line numbers */}
                <div className="flex flex-col font-mono text-xs sm:text-sm">
                  {/* Type definition block */}
                  <div className="flex">
                    <div className="select-none shrink-0 w-8 py-3 pl-2 pr-2 text-right text-slate-500 dark:text-slate-500 border-r border-white/5 bg-slate-900/50 dark:bg-slate-950/50 tabular-nums">
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <div key={n} className="leading-[1.85]">
                          {n}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 min-w-0 py-3 pl-3 pr-4 space-y-0.5">
                      <div className="text-accent dark:text-accent/90 leading-[1.85]">
                        type DeveloperType = &#123;
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        name: <span className="text-emerald-400">string</span>
                        ,{" "}
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        skills:{" "}
                        <span className="text-emerald-400">string[]</span>,{" "}
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        experience:{" "}
                        <span className="text-emerald-400">string</span>,{" "}
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        passion:{" "}
                        <span className="text-emerald-400">string</span>;{" "}
                      </div>
                      <div className="text-accent dark:text-accent/90 leading-[1.85]">
                        &#125;;
                      </div>
                    </div>
                  </div>
                  {/* Const block */}
                  <div className="flex border-t border-white/5">
                    <div className="select-none shrink-0 w-8 py-3 pl-2 pr-2 text-right text-slate-500 dark:text-slate-500 border-r border-white/5 bg-slate-900/50 dark:bg-slate-950/50 tabular-nums">
                      {[9, 10, 11, 12, 13, 14, 15].map((n) => (
                        <div key={n} className="leading-[1.85]">
                          {n}
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 min-w-0 py-3 pl-3 pr-4 space-y-0.5">
                      <div className="text-accent dark:text-accent/90 leading-[1.85]">
                        const developer: DeveloperType = &#123;
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        name:{" "}
                        <span className="text-emerald-400">
                          &apos;{site.name}&apos;
                        </span>
                        ,
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        skills: [
                        <span className="text-amber-400">
                          &apos;React&apos;
                        </span>
                        ,{" "}
                        <span className="text-amber-400">
                          &apos;Next.js&apos;
                        </span>
                        ,{" "}
                        <span className="text-amber-400">&apos;Node&apos;</span>
                        ],
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        experience:{" "}
                        <span className="text-amber-400">
                          &apos;Senior&apos;
                        </span>
                        ,
                      </div>
                      <div className="pl-4 text-slate-400 dark:text-slate-300 leading-[1.85]">
                        passion:{" "}
                        <span className="text-emerald-400">
                          &apos;Building scalable UI&apos;
                        </span>
                      </div>
                      <div className="text-accent dark:text-accent/90 leading-[1.85] inline-flex items-baseline">
                        &#125;;
                        <span
                          className="ml-0.5 inline-block w-0.5 h-4 bg-emerald-400 animate-cursor-blink align-middle"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Stack badge */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-gray-700 dark:bg-slate-800/80 border border-white/5 text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                  TypeScript
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 right-10 size-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
