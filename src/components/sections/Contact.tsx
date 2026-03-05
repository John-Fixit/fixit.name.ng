"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { site, socialLinks } from "@/data/site";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/ui/Icons";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  mail: MailIcon,
};

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6">
      <ScrollReveal className="max-w-4xl mx-auto">
        <div className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          <div className="relative z-10 space-y-6 md:space-y-8">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-text-primary">
              Let&apos;s build something{" "}
              <span className="text-accent italic">extraordinary</span> together.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-text-muted max-w-2xl mx-auto leading-relaxed">
              Currently open to full-time senior roles and high-impact freelance
              opportunities. Let&apos;s discuss your next big idea.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto hover:shadow-accent-glow"
                asChild
              >
                <a href={`mailto:${site.email}`}>Hire Me Now</a>
              </Button>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => {
                  const Icon = icons[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="size-12 md:size-14 glass flex items-center justify-center rounded-xl md:rounded-2xl hover:text-accent transition-all text-slate-600 dark:text-text-muted"
                      aria-label={social.name}
                    >
                      {Icon && <Icon className="size-6 md:size-7" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 size-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-24 -right-24 size-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </ScrollReveal>
    </section>
  );
}
