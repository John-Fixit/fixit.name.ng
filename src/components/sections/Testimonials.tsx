"use client";

import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-100/50 dark:bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-10 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-text-primary">
            What people say
          </h2>
        </ScrollReveal>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 md:grid md:grid-cols-3 md:overflow-visible md:gap-6"
        >
          {testimonials.map((t) => (
            <ScrollReveal key={t.id} className="min-w-[280px] md:min-w-0 shrink-0 snap-center">
              <GlassCard className="p-6 md:p-8 h-full flex flex-col">
                <p className="text-slate-600 dark:text-text-muted leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-text-primary">
                    {t.name}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-text-muted">
                    {t.role} · {t.company}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
