"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { experience } from "@/data/site";
import { WorkIcon, HistoryIcon } from "@/components/ui/Icons";
import { CaseStudy } from "@/components/sections/CaseStudy";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  work: WorkIcon,
  history: HistoryIcon,
};

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <ScrollReveal className="text-center space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-text-primary">
            Professional Journey
          </h2>
          <p className="text-slate-600 dark:text-text-muted">
            Leading engineering teams and building high-impact products.
          </p>
        </ScrollReveal>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/50 before:to-transparent">
          {experience.map((entry, i) => {
            const Icon = icons[entry.icon] ?? WorkIcon;
            return (
              <ScrollReveal
                key={entry.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent bg-background dark:bg-background text-accent absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 glass group-hover:scale-110 transition-transform">
                  <Icon className="size-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] ml-12 md:ml-0">
                  <GlassCard className="p-6 rounded-2xl border-white/10 group-hover:border-accent/30 transition-all">
                    <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                      <div className="font-bold text-lg text-slate-900 dark:text-text-primary">
                        {entry.company}
                      </div>
                      <time
                        className={`text-xs font-bold px-2 py-1 rounded-full uppercase ${
                          entry.isPresent
                            ? "text-accent bg-accent/10"
                            : "text-slate-500 dark:text-text-muted bg-white/5 dark:bg-white/5"
                        }`}
                      >
                        {entry.period}
                      </time>
                    </div>
                    <div className="text-accent font-medium mb-3">{entry.role}</div>
                    <p className="text-slate-600 dark:text-text-muted text-sm leading-relaxed mb-4">
                      {entry.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-white/5 text-slate-600 dark:text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <CaseStudy />
      </div>
    </section>
  );
}
