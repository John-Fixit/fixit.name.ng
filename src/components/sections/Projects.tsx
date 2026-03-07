"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects, FEATURED_PROJECTS_COUNT } from "@/data/site";
import { LinkIcon, CodeIcon, ArrowRightIcon } from "@/components/ui/Icons";

function ProjectImagePlaceholder({ title }: { title: string }) {
  const initial = title.charAt(0).toUpperCase();
  return (
    <div
      className="flex items-center justify-center w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 dark:from-accent/25 dark:to-accent/10 text-slate-400 dark:text-slate-500"
      aria-hidden
    >
      <span className="font-display text-4xl md:text-5xl font-bold tabular-nums">
        {initial}
      </span>
    </div>
  );
}

export function Projects() {
  const [showArchive, setShowArchive] = useState(false);
  const featured = projects.slice(0, FEATURED_PROJECTS_COUNT);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6 bg-slate-100/50 dark:bg-surface/30"
    >
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <ScrollReveal className="space-y-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-text-primary">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-text-muted">
              A selection of my best work across fintech, lending, and product.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <button
              type="button"
              onClick={() => setShowArchive((prev) => !prev)}
              className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
              aria-expanded={showArchive}
            >
              {showArchive ? "Show less" : "View Archive"}
              <motion.span
                animate={{ rotate: showArchive ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRightIcon className="size-5 rotate-90" />
              </motion.span>
            </button>
          </ScrollReveal>
        </div>

        {/* Featured bento grid - items-start so cards don't stretch and create empty space */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto items-start">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="featured"
            />
          ))}
        </div>

        {/* Archive: all projects (expanded) */}
        <AnimatePresence>
          {showArchive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-8 border-t border-slate-200 dark:border-white/10">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-text-primary mb-6">
                  All projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      variant="archive"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  variant,
}: {
  project: (typeof projects)[0];
  variant: "featured" | "archive";
}) {
  const isLarge = variant === "featured" && project.layout === "large";
  const isWide = variant === "featured" && project.layout === "wide";
  const isArchive = variant === "archive";

  const imageAreaClass = isLarge
    ? "h-44 md:min-h-52 md:flex-1 min-h-0"
    : isArchive
      ? "h-44"
      : "h-44";

  const showImageArea = isArchive || isLarge || !isWide;

  return (
    <ScrollReveal
      className={
        isArchive
          ? ""
          : isLarge
            ? "md:col-span-8 md:row-span-2 h-full"
            : isWide
              ? "md:col-span-8"
              : "md:col-span-4"
      }
    >
      <GlassCard
        className={`overflow-hidden flex flex-col ${
          isLarge ? "h-full" : ""
        } ${isWide && !isArchive ? "md:flex-row" : ""}`}
      >
        {showImageArea && (
          <div
            className={`relative bg-slate-200 dark:bg-slate-800 overflow-hidden ${imageAreaClass} ${
              isWide && !isArchive ? "md:w-1/2 md:h-auto" : ""
            }`}
          >
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    isLarge
                      ? "(max-width: 768px) 100vw, 66vw"
                      : isWide && !isArchive
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                {isLarge && (
                  <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-background to-transparent" />
                )}
              </>
            ) : (
              <ProjectImagePlaceholder title={project.title} />
            )}
          </div>
        )}

        <div
          className={`p-6 flex flex-col justify-center min-w-0 ${
            isWide && project.image && !isArchive ? "md:w-1/2 md:order-1" : ""
          }`}
        >
          {project.tags?.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/20 text-accent px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="font-display text-lg md:text-xl font-bold text-slate-900 dark:text-text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-text-muted mb-4 line-clamp-4 md:line-clamp-5">
            {project.description}
          </p>
          {project.progress !== undefined && (
            <div className="mb-4">
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <p className="mt-2 text-[10px] text-slate-500 dark:text-text-muted font-bold uppercase">
                {project.progressLabel}
              </p>
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent transition-colors"
                aria-label={`View ${project.title} demo`}
              >
                <LinkIcon className="size-4 shrink-0" />
                Demo
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-500 cursor-default"
                aria-label="Demo link coming soon"
              >
                <LinkIcon className="size-4 shrink-0" />
                Demo
              </span>
            )}
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <CodeIcon className="size-4 shrink-0" />
                GitHub
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-500 cursor-default"
                aria-label="GitHub link coming soon"
              >
                <CodeIcon className="size-4 shrink-0" />
                GitHub
              </span>
            )}
          </div>
        </div>

        {isWide && !isArchive && (
          <div className="relative h-48 md:h-auto md:w-1/2 md:min-h-[200px] bg-slate-200 dark:bg-slate-800 overflow-hidden md:order-2">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <ProjectImagePlaceholder title={project.title} />
            )}
          </div>
        )}
      </GlassCard>
    </ScrollReveal>
  );
}
