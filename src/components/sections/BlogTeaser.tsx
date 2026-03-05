"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogTeasers } from "@/data/site";

export function BlogTeaser() {
  return (
    <section
      id="blog"
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-100/50 dark:bg-surface/30"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-10 md:mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-text-primary">
            Thoughts &amp; Writing
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogTeasers.map((post) => (
            <ScrollReveal key={post.id}>
              <GlassCard className="p-6 h-full flex flex-col">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-slate-900 dark:text-text-primary mb-2">
                  {post.title}
                </h3>
                {post.comingSoon && (
                  <span className="mt-auto inline-flex w-fit px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-text-muted text-xs font-semibold">
                    Coming soon
                  </span>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
