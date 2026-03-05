"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/data/site";
import { LinkIcon, CodeIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function Projects() {
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
              A selection of my best work across different industries.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <Link
              href="#"
              className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base"
            >
              View Archive <ArrowRightIcon className="size-5" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto md:auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const isLarge = project.layout === "large";
  const isWide = project.layout === "wide";

  return (
    <ScrollReveal
      className={
        isLarge
          ? "md:col-span-8 md:row-span-2"
          : isWide
            ? "md:col-span-8"
            : "md:col-span-4"
      }
    >
      <GlassCard
        className={`overflow-hidden flex flex-col h-full ${
          isWide ? "md:flex-row" : ""
        }`}
      >
        {project.image && (isLarge || !isWide) && (
          <div
            className={`relative bg-slate-200 dark:bg-slate-800 overflow-hidden ${
              isLarge ? "h-64 md:h-2/3 min-h-[200px]" : "h-48"
            } ${isWide ? "md:w-1/2 md:h-auto" : ""}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={
                isLarge
                  ? "(max-width: 768px) 100vw, 66vw"
                  : isWide
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 100vw, 33vw"
              }
            />
            {isLarge && (
              <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-background to-transparent" />
            )}
            {project.layout === "small" && project.id === "ens-dashboard" && (
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
            )}
          </div>
        )}

        <div
          className={`p-6 flex flex-col justify-center ${
            isLarge ? "grow" : ""
          } ${isWide && project.image ? "md:w-1/2 md:order-1" : ""}`}
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
          <p className="text-sm text-slate-600 dark:text-text-muted mb-4 flex-1">
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
          {(project.link || project.repo) && (
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  className="text-slate-500 dark:text-slate-300 hover:text-accent transition-colors"
                  aria-label="View project"
                >
                  <LinkIcon className="size-5" />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  className="text-slate-500 dark:text-slate-300 hover:text-accent transition-colors"
                  aria-label="View code"
                >
                  <CodeIcon className="size-5" />
                </a>
              )}
            </div>
          )}
        </div>

        {isWide && project.image && (
          <div className="relative h-48 md:h-auto md:w-1/2 md:min-h-[200px] bg-slate-200 dark:bg-slate-800 overflow-hidden md:order-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </GlassCard>
    </ScrollReveal>
  );
}
