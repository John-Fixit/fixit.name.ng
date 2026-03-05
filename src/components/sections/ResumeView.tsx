"use client";

import { resumeData } from "@/data/site";

export function ResumeView() {
  const { contact, summary, skills, education, experience, availability, language } =
    resumeData;

  return (
    <div className="resume-view max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 print:mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-text-primary">
          Resume
        </h1>
        <div className="flex gap-3 no-print">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.print();
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-colors"
          >
            Download PDF
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg glass text-slate-700 dark:text-text-primary text-sm font-bold"
          >
            Back to portfolio
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-12 print:grid-cols-[260px_1fr] print:gap-8">
        {/* Left sidebar */}
        <aside className="space-y-8 print:space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-3">
              Contact
            </h2>
            <ul className="space-y-1.5 text-sm text-slate-700 dark:text-text-primary">
              <li>{contact.phone}</li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent hover:underline"
                >
                  {contact.email}
                </a>
              </li>
              <li>{contact.location}</li>
              <li>
                <a
                  href={contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-all"
                >
                  {contact.portfolio.replace(/^https?:\/\//, "")}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-3">
              Skills
            </h2>
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.category}>
                  <p className="font-semibold text-slate-900 dark:text-text-primary text-sm mb-1">
                    {group.category}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-text-muted leading-relaxed">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-3">
              Education
            </h2>
            <ul className="space-y-4">
              {education.map((edu) => (
                <li key={edu.institution}>
                  <p className="font-semibold text-slate-900 dark:text-text-primary text-sm">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-text-muted">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-text-muted">
                    {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {availability && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-1">
                Availability
              </h2>
              <p className="text-sm text-slate-700 dark:text-text-primary">
                {availability}
              </p>
            </div>
          )}

          {language && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-1">
                Language
              </h2>
              <p className="text-sm text-slate-700 dark:text-text-primary">
                {language}
              </p>
            </div>
          )}
        </aside>

        {/* Right main */}
        <div className="space-y-8 print:space-y-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-700 dark:text-text-primary leading-relaxed">
              {summary}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-text-muted mb-4">
              Professional Experience
            </h2>
            <ul className="space-y-6 print:space-y-4">
              {experience.map((entry) => (
                  <li key={entry.id} className="border-l-2 border-accent/30 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <span className="font-bold text-slate-900 dark:text-text-primary">
                        {entry.role}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-text-muted">
                        {entry.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent mb-2">
                      {entry.company}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed mb-2">
                      {entry.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
