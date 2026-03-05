"use client";

import { techStack } from "@/data/site";

export function TechMarquee() {
  return (
    <section className="py-12 md:py-16 overflow-hidden border-y border-slate-200 dark:border-white/5">
      <div className="marquee">
        <div className="marquee-content animate-marquee flex items-center gap-8 md:gap-12 whitespace-nowrap">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-2xl md:text-3xl font-bold text-slate-400 dark:text-slate-600 hover:text-accent transition-colors cursor-default font-display"
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="marquee-content animate-marquee flex items-center gap-8 md:gap-12 whitespace-nowrap"
        >
          {techStack.map((tech) => (
            <span
              key={`dup-${tech}`}
              className="text-2xl md:text-3xl font-bold text-slate-400 dark:text-slate-600 hover:text-accent transition-colors cursor-default font-display"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
