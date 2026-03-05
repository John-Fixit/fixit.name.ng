"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { caseStudyNCAA } from "@/data/site";
import {
  ProblemIcon,
  ApproachIcon,
  ImpactIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  problem: ProblemIcon,
  approach: ApproachIcon,
  impact: ImpactIcon,
};

export function CaseStudy() {
  const [expanded, setExpanded] = useState(false);
  const data = caseStudyNCAA;

  return (
    <ScrollReveal className="mt-12 md:mt-16">
      <GlassCard className="overflow-hidden">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left hover:bg-white/5 dark:hover:bg-white/5 transition-colors"
        >
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 dark:text-text-primary">
              {data.projectTitle} — Case Study
            </h3>
            <p className="text-sm text-slate-500 dark:text-text-muted mt-1">
              {data.client} · {data.role}
            </p>
          </div>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 p-2 rounded-lg bg-white/5 dark:bg-white/5"
          >
            <ChevronDownIcon className="size-5 text-slate-600 dark:text-text-muted" />
          </motion.span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-white/5 dark:border-white/5 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                  <div className="text-xs text-slate-500 dark:text-text-muted space-y-1">
                    <p><strong className="text-slate-700 dark:text-text-primary">Client</strong> {data.client}</p>
                    <p><strong className="text-slate-700 dark:text-text-primary">Duration</strong> {data.duration}</p>
                    <p><strong className="text-slate-700 dark:text-text-primary">Team</strong> {data.team}</p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-text-muted leading-relaxed">
                  {data.overview}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { key: "problem", section: data.problem },
                    { key: "approach", section: data.approach },
                    { key: "impact", section: data.impact },
                  ].map(({ key, section }) => {
                    const Icon = sectionIcons[section.icon] ?? ProblemIcon;
                    return (
                      <div
                        key={key}
                        className="glass rounded-xl p-5 border border-white/5 dark:border-white/5"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="p-2 rounded-lg bg-accent/10 text-accent">
                            <Icon className="size-4" />
                          </span>
                          <h4 className="font-display font-bold text-slate-900 dark:text-text-primary">
                            {section.title}
                          </h4>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-text-primary mb-3">
                    Engineering impact
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.impactStats.map((stat) => (
                      <span
                        key={stat}
                        className="px-3 py-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-text-muted text-xs font-medium border border-slate-200 dark:border-white/5"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>

                {data.contributions && data.contributions.length > 0 && (
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-text-primary mb-3">
                      Project contributions
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {data.contributions.map((c) => (
                        <div
                          key={c.title}
                          className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-white/5"
                        >
                          <p className="font-semibold text-slate-900 dark:text-text-primary text-sm mb-2">
                            {c.title}
                          </p>
                          <ul className="text-xs text-slate-600 dark:text-text-muted space-y-1">
                            {c.items.map((item) => (
                              <li key={item} className="list-disc list-inside">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-display font-bold text-slate-900 dark:text-text-primary mb-3">
                    Tech stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </ScrollReveal>
  );
}
