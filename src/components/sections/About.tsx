"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillTag } from "@/components/ui/SkillTag";
import { skills, stats } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-100/50 dark:bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-text-primary">
              Building the future, one pixel at a time.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-text-muted leading-relaxed">
              I&apos;m a frontend developer based in Lagos, Nigeria. With 3+ years
              of experience, I&apos;ve built secure, workflow-driven enterprise
              applications for government and fintech. My approach combines
              technical rigor with a focus on role-based interfaces, multi-level
              approvals, and scalable component architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <GlassCard
                key={stat.label}
                className={`p-6 rounded-2xl space-y-2 ${stat.value === "Now" ? "md:col-span-2" : ""}`}
              >
                {stat.value === "Now" ? (
                  <p className="text-sm md:text-base text-slate-600 dark:text-text-muted font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                ) : (
                  <>
                    <span className="text-3xl md:text-4xl font-bold text-accent font-display">
                      {stat.value}
                    </span>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-text-muted font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </>
                )}
              </GlassCard>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
