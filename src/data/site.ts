import type {
  ExperienceEntry,
  Project,
  StatCard,
  SocialLink,
  NavLink,
  Testimonial,
  CaseStudyData,
  ResumeData,
  BlogPostTeaser,
} from "@/types";

export const site = {
  name: "John Adeoye",
  title: "Frontend Engineer",
  tagline: "Available for new projects",
  heroSubtitle: "3+ years building enterprise systems for government & fintech",
  openToWorkBanner: "Open to full-time & remote roles · March 2026",
  email: "johnfixit293@gmail.com",
  phone: "+234 808 715 4982",
  location: "Lagos, Nigeria | Open to Remote",
  portfolioUrl: "https://fixit.name.ng",
  cvUrl: "/John_Adeoye_CV.pdf",
  description:
    "Frontend Engineer with 3+ years of experience building secure, workflow-driven enterprise applications across government and fintech sectors. Experienced in designing complex role-based interfaces, multi-level approval systems, and scalable component architectures.",
  roles: ["Frontend Engineer", "Full-Stack Developer", "React Specialist"],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "JavaScript",
  "Tailwind",
  "Redux",
  "Zustand",
  "REST APIs",
  "Git",
  "Agile",
];

export const stats: StatCard[] = [
  { value: "3+", label: "Years Experience" },
  { value: "5+", label: "Production Systems" },
  { value: "10+", label: "Projects Contributed To" },
  { value: "Now", label: "Currently at Clan Africa / NCAA" },
];

export const experience: ExperienceEntry[] = [
  {
    id: "clan-africa-ncaa",
    company: "Clan Africa Tech Innovation (NCAA Enterprise Systems)",
    role: "Frontend Engineer",
    period: "2023 – Present",
    isPresent: true,
    description:
      "Contributed to enterprise-grade internal systems supporting aviation operations, including HR workflows, procurement processes, case tracking, and inventory management. Also contributed as a frontend developer to Lyncs (a unified transportation booking app) and Statisense (frontend features in the Immortal BI module for real-time business intelligence insights).",
    tags: ["React", "Next.js", "TypeScript", "Zustand", "REST APIs", "Agile"],
    icon: "work",
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Freelance Frontend Developer (Remote)",
    period: "2024 – Present",
    isPresent: true,
    description:
      "Architected and implemented frontend systems for a credit-commerce platform supporting installment purchases, bill payments, and fuel services. Built secure onboarding and dashboard experiences for a digital loan platform. Designed mobile-first UI architecture optimized for performance and accessibility.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "REST APIs"],
    icon: "work",
  },
  {
    id: "sqi-internship",
    company: "SQI College of ICT / LAUTECH",
    role: "Web Developer",
    period: "2021 – 2023",
    description:
      "Designed and implemented interactive web interfaces using HTML, CSS, and JavaScript. Improved user engagement through modern UI patterns and clean layouts. Gained hands-on experience working on real-world web applications in team environments.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: "history",
  },
];

export const caseStudyNCAA: CaseStudyData = {
  projectTitle: "Enterprise Government Systems",
  client: "Nigerian Civil Aviation Authority (NCAA)",
  duration: "2024 – Present",
  role: "Frontend Engineer",
  team: "3 Frontend Engineers (HRIS) . 3 Frontend developers(Legal Case Management) . Sole Developer (other Sub systems)",
  overview:
    "Contributed to internal enterprise systems supporting HR management, procurement workflows, legal case tracking, executive document routing, and requisition and inventory operations. Delivered role-aware interfaces, multi-level approval UIs, and scalable frontend architecture for confidential government use. Sole developer for the procurement, requisition/store, and executive e-document workflow platforms.",
  problem: {
    title: "Problem",
    description:
      "NCAA required a unified set of internal systems to support HR operations, procurement, legal case management, executive document routing, and inventory—each with strict role-based access and multi-level approval workflows for a national regulatory authority.",
    icon: "problem",
  },
  approach: {
    title: "Approach",
    description:
      "Built role-aware dashboards and staff interfaces; sole frontend developer for Procurement, Requisition/Store, and Executive E-Document workflow platforms. Designed multi-level approval interfaces with dynamic state transitions and audit-aware UI patterns. Developed reusable component architecture shared across multiple enterprise applications and integrated with REST APIs for secure, performant data exchange.",
    icon: "approach",
  },
  impact: {
    title: "Impact",
    description:
      "Delivered production systems used across multiple departments within a national regulatory authority. Reduced UI duplication via shared component libraries. Improved workflow clarity and approval traceability through structured interface design. Maintained high-performance standards across complex data-heavy interfaces.",
    icon: "impact",
  },
  impactStats: [
    "Production systems serving internal operations",
    "Multi-step workflow and approval complexity",
    "Role-based permissions and access control",
    "5 sub-systems (HR, Procurement, Legal, Executive E-Doc, Requisition & Store)",
    "Maintainable, scalable frontend architecture",
  ],
  techStack: [
    "React",
    "TypeScript",
    "Zustand",
    "REST APIs",
    "Role-based UI",
    "Responsive design",
  ],
  contributions: [
    {
      title: "HR Management System",
      items: [
        "Contributed to frontend development",
        "Built role-aware dashboards and staff interfaces",
        "Currently sole frontend maintainer",
      ],
    },
    {
      title: "Procurement Workflow System",
      items: [
        "Sole frontend developer",
        "Built multi-level approval workflow UI",
        "Implemented dynamic forms and status tracking",
      ],
    },
    {
      title: "Requisition & Store Management",
      items: [
        "Designed and built inventory and requisition interfaces",
        "Implemented lifecycle tracking and fulfillment workflows",
      ],
    },
    {
      title: "Executive E-Document Routing",
      items: [
        "Built document routing interface for executive approvals",
        "Implemented role-based visibility and action controls",
        "Designed traceability and history views",
      ],
    },
    {
      title: "Legal Case Management",
      items: [
        "Collaborated on frontend implementation",
        "Built case tracking and document indexing interfaces",
      ],
    },
  ],
};

export const techStack = [
  "REACT",
  "TYPESCRIPT",
  "NEXT.JS",
  "NODE.JS",
  "ZUSTAND",
  "TAILWIND",
  "REST APIs",
  "GIT",
  "AGILE",
];

/** Number of projects shown in the featured bento grid before "View Archive" expands. */
export const FEATURED_PROJECTS_COUNT = 5;

/**
 * Project images: add an `image` URL (string) to each project when you have one.
 * Recommended: landing page hero or main app screen, 16:9 or 4:3, ~800–1200px wide.
 * Host on a CDN or in /public and use the path. Until then, a gradient + initial is shown.
 */
export const projects: Project[] = [
  {
    id: "mewizo",
    image: "/projects/mewizo-home.png",
    title: "Mewizo",
    description:
      "Event reminder and gifting app: connect friends, set event dates and custom wishes, and send automated messages. Includes a shopping layer so users can attach gifts to wishes. Built the frontend end-to-end.",
    tags: ["NEXT.JS", "TYPESCRIPT", "ZUSTAND", "TAILWIND", "HERO UI"],
    layout: "large",
    objectShape: "object-contain",
    link: "https://www.mewizo.com",
    repo: "",
  },
  {
    id: "enlace",
    title: "Enlace",
    description:
      "Digital loan platform with secure onboarding and dashboard experiences. Built mobile-first UI architecture optimized for performance and accessibility, supporting borrowers through a clear, compliant flow.",
    tags: ["REACT", "ZUSTAND", "TAILWIND", "ANT DESIGN", "MONO"],
    layout: "small",
    link: "",
    repo: "",
  },
  {
    id: "enlace-group-lending",
    title: "Enlace Group Lending",
    description:
      "Group-based lending product where users form groups and apply for loans collectively. Engineered the full frontend—forms, state, and flows—with type safety and accessibility in mind. Ongoing.",
    tags: [
      "REACT",
      "ZUSTAND",
      "TYPESCRIPT",
      "TAILWIND",
      "REACT HOOK FORM",
      "HERO UI",
      "MONO",
    ],
    image: "/projects/enlace-group.png",
    objectShape: "object-cover",
    layout: "small",
    link: "",
    repo: "",
    progress: 85,
    progressLabel: "In progress",
  },
  {
    id: "vouch",
    title: "Vouch",
    image: "/projects/vouch.png",
    description:
      "Credit-commerce platform enabling installment purchases, bill payments, and fuel services. Led frontend development—implemented core UI systems, state management, and payment flows with a focus on reliability and scale.",
    tags: ["REACT", "REDUX", "TAILWIND", "MONO"],
    layout: "wide",
    link: "https://vouch.ng", // Add live demo URL when available
    repo: "", // Repo lives in collaborator's account; add link here if you have permission to share
  },
  {
    id: "lyncs",
    title: "Lyncs",
    description:
      "Internal module at Clan: unified transportation booking app consolidating flights, rides, bus, and transit services. Contributed as a frontend developer across booking flows and in-app payments for ongoing rides.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "REST APIs"],
    layout: "small",
    link: "",
    repo: "",
  },
  {
    id: "statisense",
    title: "Statisense",
    description:
      "Internal module at Clan: data analytics application delivering real-time business intelligence insights. Contributed as a frontend developer to the Immortal BI module.",
    tags: ["REACT", "TYPESCRIPT", "DASHBOARDS", "BI"],
    layout: "small",
    link: "",
    repo: "",
  },
  // Internal / company projects — no demo or repo; only in archive when "View Archive" is clicked
  {
    id: "hr",
    title: "HR",
    description:
      "Human resources platform for employee lifecycle, leave, and performance. Built internal tools and dashboards for the team.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    layout: "small",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "procurement",
    title: "Procurement",
    description:
      "Procurement and vendor management system with approvals and workflows. Implemented multi-level approval flows and reporting.",
    tags: ["REACT", "ZUSTAND", "TAILWIND"],
    layout: "small",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7b4f?w=800&q=80",
  },
  {
    id: "e-document",
    title: "E-Document",
    description:
      "Electronic document management: upload, versioning, and secure access. Delivered search and document viewer with role-based permissions.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    layout: "small",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: "case-management",
    title: "Case Management",
    description:
      "Case and matter management for tracking and workflows. Built forms, status flows, and audit trails for compliance.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    layout: "small",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "requisition",
    title: "Requisition",
    description:
      "Requisition and approval system for internal requests. Implemented request forms, routing rules, and approval history.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    layout: "small",
    image:
      "https://images.unsplash.com/photo-1554224311-beee460201c0?w=800&q=80",
  },
  {
    id: "store",
    title: "Store",
    description:
      "Store and inventory management for internal assets. Built catalog, stock levels, and issue/return flows.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND"],
    layout: "small",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "John delivered a robust frontend architecture that scaled with our regulatory requirements. His attention to workflow clarity and role-based access was exceptional.",
    name: "Team Lead",
    role: "Engineering",
    company: "Clan Africa",
  },
  {
    id: "2",
    quote:
      "Working with John on Vouch was seamless. He built scalable frontend systems for credit-based transactions and ensured smooth, reliable user experiences across payments and billing flows",
    name: "Product Owner",
    role: "Operations",
    company: "Vouch",
  },
  {
    id: "3",
    quote:
      "Clean code, on-time delivery, and great communication. Would hire again for frontend-heavy projects.",
    name: "Client",
    role: "Fintech",
    company: "Freelance",
  },
  {
    id: "4",
    quote:
      "John led frontend execution on Vouch’s credit-commerce platform, delivering robust UI architecture and reliable payment flows. His focus on state management and performance was critical to the product’s stability at scale",
    name: "Engineering Lead",
    role: "Engineering",
    company: "Vouch",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adeoye-john-413b67229",
    icon: "linkedin",
  },
  { name: "GitHub", href: "https://github.com/John-Fixit", icon: "github" },
  { name: "Email", href: `mailto:${site.email}`, icon: "mail" },
];

export const footerLinks = [
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Medium", href: "#" },
];

export const resumeData: ResumeData = {
  contact: {
    phone: site.phone,
    email: site.email,
    location: site.location,
    portfolio: site.portfolioUrl,
    linkedin: "https://www.linkedin.com/in/adeoye-john-413b67229",
    github: "https://github.com/John-Fixit",
  },
  summary:
    "Frontend Engineer with 3+ years of experience building secure, workflow-driven enterprise applications across government and fintech sectors. Experienced in designing complex role-based interfaces, multi-level approval systems, and scalable component architectures. Currently leading frontend maintenance for mission-critical regulatory systems. Seeking opportunities where system design and performance matter.",
  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
      ],
    },
    { category: "State Management", items: ["Redux", "Zustand"] },
    {
      category: "Styling & UI",
      items: ["TailwindCSS", "Responsive Design", "Accessibility"],
    },
    { category: "APIs & Integration", items: ["REST APIs", "Axios"] },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "Agile/Scrum", "CI/CD"],
    },
    {
      category: "Core Strengths",
      items: [
        "Component Architecture",
        "Role-Based Systems",
        "Workflow UI Design",
        "Performance Optimization",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Ladoke Akintola University of Technology (LAUTECH)",
      period: "2023 – 2026 (Expected)",
    },
    {
      degree: "Diploma, Software Engineering",
      institution: "SQI College of ICT, Ogbomoso",
      period: "2021 – 2023",
    },
  ],
  experience,
  availability: "Immediate (2-week notice)",
  language: "English (Fluent)",
};

export const blogTeasers: BlogPostTeaser[] = [
  {
    id: "1",
    title: "Building role-based UIs at scale",
    category: "Frontend",
    comingSoon: true,
  },
  {
    id: "2",
    title: "Multi-level approval workflows in React",
    category: "Architecture",
    comingSoon: true,
  },
  {
    id: "3",
    title: "Enterprise component libraries that stick",
    category: "Engineering",
    comingSoon: true,
  },
];
