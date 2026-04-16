"use client";

import { useRef, type MouseEvent } from "react";
import { resumeData } from "@/data/site";

interface ResumeViewProps {
  /** When false, resume is embedded on home page (hash #resume); show "Back to top" instead of "Back to portfolio" */
  standalone?: boolean;
}

export function ResumeView({ standalone = true }: ResumeViewProps) {
  const {
    contact,
    summary,
    skills,
    education,
    experience,
    availability,
    language,
  } = resumeData;
  const printableResumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const printableResume = printableResumeRef.current;
    if (!printableResume) return;

    const printWindow = window.open("", "_blank", "width=900,height=1200");
    if (!printWindow) return;

    const styles = `
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: #0f172a;
        background: #ffffff;
      }
      .resume-pdf {
        width: 210mm;
        min-height: 297mm;
        margin: 0 auto;
        padding: 16mm 14mm;
      }
      .resume-pdf__header {
        border-bottom: 2px solid #6c63ff;
        padding-bottom: 10px;
        margin-bottom: 14px;
      }
      .resume-pdf__name {
        margin: 0 0 4px;
        font-size: 26px;
        font-weight: 800;
        letter-spacing: 0.01em;
      }
      .resume-pdf__role {
        margin: 0 0 8px;
        color: #475569;
        font-size: 13px;
      }
      .resume-pdf__contact {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 14px;
        font-size: 11px;
        color: #334155;
      }
      .resume-pdf__grid {
        display: grid;
        grid-template-columns: 1.05fr 2fr;
        gap: 14px;
      }
      .resume-pdf__section {
        margin-bottom: 14px;
      }
      .resume-pdf__title {
        margin: 0 0 8px;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #6c63ff;
        font-weight: 700;
      }
      .resume-pdf__text {
        margin: 0;
        font-size: 11px;
        line-height: 1.55;
        color: #1e293b;
      }
      .resume-pdf__list {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .resume-pdf__list li {
        margin-bottom: 8px;
      }
      .resume-pdf__meta {
        margin: 0;
        font-size: 10px;
        color: #64748b;
      }
      .resume-pdf__pill-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 6px;
      }
      .resume-pdf__pill {
        font-size: 9px;
        color: #334155;
        border: 1px solid #cbd5e1;
        border-radius: 999px;
        padding: 2px 7px;
      }
      .resume-pdf__entry {
        border-left: 2px solid #c7d2fe;
        padding-left: 10px;
        margin-bottom: 12px;
      }
      .resume-pdf__entry-head {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        align-items: baseline;
      }
      .resume-pdf__entry-role {
        margin: 0;
        font-size: 12px;
        font-weight: 700;
        color: #0f172a;
      }
      .resume-pdf__entry-period {
        margin: 0;
        font-size: 10px;
        color: #64748b;
      }
      .resume-pdf__entry-company {
        margin: 3px 0 5px;
        color: #6c63ff;
        font-size: 11px;
        font-weight: 600;
      }
      a { color: inherit; text-decoration: none; }
      @page {
        size: A4;
        margin: 0;
      }
    `;

    printWindow.document.write(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>John-Adeoye-Resume</title>
          <style>${styles}</style>
        </head>
        <body>
          ${printableResume.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    window.setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 200);
  };

  return (
    <div className="resume-view max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 print:mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-text-primary">
          Resume
        </h1>
        <div className="flex gap-3 no-print">
          <a
            href="#"
            onClick={handleDownloadPdf}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-colors"
          >
            Download PDF
          </a>
          {standalone ? (
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg glass text-slate-700 dark:text-text-primary text-sm font-bold"
            >
              Back to portfolio
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg glass text-slate-700 dark:text-text-primary text-sm font-bold"
            >
              Back to top
            </a>
          )}
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

      <div
        aria-hidden
        className="pointer-events-none fixed -left-[9999px] top-0 w-[210mm] opacity-0"
      >
        <div ref={printableResumeRef}>
          <PrintableResumeTemplate />
        </div>
      </div>
    </div>
  );
}

function PrintableResumeTemplate() {
  const {
    contact,
    summary,
    skills,
    education,
    experience,
    availability,
    language,
  } = resumeData;

  return (
    <article className="resume-pdf">
      <header className="resume-pdf__header">
        <h1 className="resume-pdf__name">John Adeoye</h1>
        <p className="resume-pdf__role">Frontend Engineer</p>
        <div className="resume-pdf__contact">
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
          <span>{contact.location}</span>
          <span>{contact.portfolio.replace(/^https?:\/\//, "")}</span>
          <span>LinkedIn</span>
          <span>GitHub</span>
        </div>
      </header>

      <div className="resume-pdf__grid">
        <aside>
          <section className="resume-pdf__section">
            <h2 className="resume-pdf__title">Skills</h2>
            <ul className="resume-pdf__list">
              {skills.map((group) => (
                <li key={group.category}>
                  <p className="resume-pdf__text">
                    <strong>{group.category}:</strong> {group.items.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="resume-pdf__section">
            <h2 className="resume-pdf__title">Education</h2>
            <ul className="resume-pdf__list">
              {education.map((edu) => (
                <li key={edu.institution}>
                  <p className="resume-pdf__text">
                    <strong>{edu.degree}</strong>
                  </p>
                  <p className="resume-pdf__meta">{edu.institution}</p>
                  <p className="resume-pdf__meta">{edu.period}</p>
                </li>
              ))}
            </ul>
          </section>

          {(availability || language) && (
            <section className="resume-pdf__section">
              <h2 className="resume-pdf__title">Additional</h2>
              {availability && <p className="resume-pdf__text">{availability}</p>}
              {language && <p className="resume-pdf__text">{language}</p>}
            </section>
          )}
        </aside>

        <main>
          <section className="resume-pdf__section">
            <h2 className="resume-pdf__title">Professional Summary</h2>
            <p className="resume-pdf__text">{summary}</p>
          </section>

          <section className="resume-pdf__section">
            <h2 className="resume-pdf__title">Professional Experience</h2>
            <div>
              {experience.map((entry) => (
                <article key={entry.id} className="resume-pdf__entry">
                  <div className="resume-pdf__entry-head">
                    <p className="resume-pdf__entry-role">{entry.role}</p>
                    <p className="resume-pdf__entry-period">{entry.period}</p>
                  </div>
                  <p className="resume-pdf__entry-company">{entry.company}</p>
                  <p className="resume-pdf__text">{entry.description}</p>
                  <div className="resume-pdf__pill-wrap">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="resume-pdf__pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </article>
  );
}
