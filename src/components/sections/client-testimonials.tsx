"use client";

const AVATAR_COLORS = [
  "bg-accent text-white",
  "bg-emerald-500 text-white",
  "bg-amber-500 text-white",
  "bg-blue-500 text-white",
  "bg-rose-500 text-white",
  "bg-teal-500 text-white",
  "bg-violet-500 text-white",
  "bg-sky-500 text-white",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function InitialsAvatar({
  name,
  colorIndex,
}: {
  name: string;
  colorIndex: number;
}) {
  const initials = getInitials(name);
  const colorClass = AVATAR_COLORS[colorIndex % AVATAR_COLORS.length];
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${colorClass}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}

interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  colorIndex: number;
}

const testimonials: TestimonialItem[] = [
  {
    text: "John delivered our HR and procurement UIs on time. Clean code, clear communication, and the approval workflows he built are solid in production.",
    name: "Enoch Taiwo",
    role: "Tech Lead, Clan Africa",
    colorIndex: 0,
  },
  {
    text: "Working with John on the NCAA systems was smooth. He owns the frontend and keeps things maintainable. Would work with him again.",
    name: "Stephen Olusegun",
    role: "Frontend Developer",
    colorIndex: 1,
  },
  {
    text: "Working alongside John, I’ve seen his ability to break down complex frontend problems and turn them into intuitive user experiences. He communicates clearly, aligns quickly, and makes collaboration effortless",
    name: "Beboss",
    role: "Frontend Developer",
    colorIndex: 1,
  },
  {
    text: "John is the kind of developer who thinks beyond the ticket. He suggested better UX for our approval flows and we shipped it. Great collaboration.",
    name: "Adedotun Adegbola",
    role: "Product Manager",
    colorIndex: 2,
  },
  {
    text: "We needed someone who could handle role-based UIs and complex state. John stepped in, understood the domain fast, and delivered. Recommended.",
    name: "Godwin",
    role: "Full Stack Developer",
    colorIndex: 3,
  },
  {
    text: "His React and TypeScript work is top-notch. Our dashboard performance improved after his optimizations. Professional and easy to work with.",
    name: "Daniel Joseph",
    role: "Frontend Engineer",
    colorIndex: 4,
  },
  {
    text: "John helped us ship the credit-commerce frontend on a tight timeline. Mobile-first, accessible, and the codebase is easy to extend.",
    name: "David Adewale",
    role: "Startup Founder",
    colorIndex: 5,
  },
  {
    text: "Clear documentation and reusable components. He made our legal case management UI feel consistent with the rest of the product. Solid engineer.",
    name: "Akanji Samson",
    role: "Software Engineer",
    colorIndex: 6,
  },
  {
    text: "John brings both speed and quality. He integrated our APIs cleanly and the UI stayed responsive even with large datasets. A reliable partner.",
    name: "Chioma Okeke",
    role: "Backend Lead",
    colorIndex: 7,
  },
];

const rows = [
  { start: 0, end: 4, className: "animate-scroll" },
  { start: 4, end: 8, className: "animate-scroll-reverse" },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

const ClientTestimonials = () => {
  const renderCard = (testimonial: TestimonialItem, index: number) => (
    <div
      key={`${testimonial.name}-${index}`}
      className="shrink-0 w-[350px] rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-surface/80 p-5 hover:border-slate-300 dark:hover:border-white/20 transition-colors"
    >
      <div className="flex gap-0.5 mb-4">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} className="text-slate-300 dark:text-slate-600" />
          ))}
      </div>
      <p className="text-slate-700 dark:text-text-muted text-sm leading-relaxed mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <InitialsAvatar
          name={testimonial.name}
          colorIndex={testimonial.colorIndex}
        />
        <div>
          <p className="font-semibold text-slate-900 dark:text-text-primary text-sm">
            {testimonial.name}
          </p>
          <p className="text-slate-500 dark:text-text-muted text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 35s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scrollReverse 35s linear infinite;
          }
        `}
      </style>
      <section className="bg-slate-100/50 dark:bg-surface/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-1.5 mb-4">
              <span className="text-xs font-medium text-slate-600 dark:text-text-muted">
                Loved by clients &amp; teammates
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-text-primary mb-3">
              What people are saying
            </h2>
            <p className="text-slate-600 dark:text-text-muted text-sm max-w-md mx-auto">
              Real feedback from developers, leads, and founders I&apos;ve
              worked with on enterprise and product teams.
            </p>
          </div>

          <div className="space-y-6">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-28 bg-gradient-to-r from-slate-100 dark:from-surface/30 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-28 bg-gradient-to-l from-slate-100 dark:from-surface/30 to-transparent z-10 pointer-events-none" />

                <div className={`flex gap-6 ${row.className}`}>
                  {[
                    ...testimonials.slice(row.start, row.end),
                    ...testimonials.slice(row.start, row.end),
                  ].map((testimonial, index) => renderCard(testimonial, index))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonials;
