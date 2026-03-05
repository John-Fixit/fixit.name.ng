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
  phone: "+234 916 026 1836",
  location: "Lagos, Nigeria | Open to Remote",
  portfolioUrl: "https://fixit.name.ng",
  cvUrl: "#",
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
  { value: "10+", label: "Projects Delivered" },
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
      "Lead and contribute to the development of enterprise-grade internal systems for the Nigerian Civil Aviation Authority, supporting HR operations, procurement workflows, legal case tracking, executive approvals, and inventory management.",
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
    role: "Web Developer (Intern)",
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
  team: "3 Frontend Engineers (HRIS) · 2 Developers (Legal Case Management)",
  overview:
    "Contributed to internal enterprise systems supporting HR management, procurement workflows, legal case tracking, executive document routing, and requisition and inventory operations. Delivered role-aware interfaces, multi-level approval UIs, and scalable frontend architecture for confidential government use.",
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

export const projects: Project[] = [
  {
    id: "omnicommerce",
    title: "OmniCommerce Platform",
    description:
      "A full-scale headless commerce solution with real-time inventory and global payment integration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnGbp4XxhKadQ5CL9D3_k2_jn0N1MYZw65S--uFk_QUN-NlFKPBsBOTcuQZmyCmVJ7JQQ-cIQhzvOTVh86hWL9dRSufVGtFLQ18w7mC__Uvjfr1Tj-8REpAdOkmii4T-XaGnEtr5QEQ7yBsVKbiXgF94gGr-b-XwP6dFM28DuJv7lPNUJh-O4Uy0cbFNs6ookxLKy19wSu51imDfdEqBOywp3WsbF9DciYpuEiHx_SjHNYq9IKWHExGUrFZpr18NIEcpEg5Z9OXmEe",
    tags: ["NEXT.JS", "STRIPE"],
    layout: "large",
    link: "#",
    repo: "#",
  },
  {
    id: "ens-dashboard",
    title: "ENS Dashboard",
    description: "Web3 management tool for Ethereum Name Service domains.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUvrC5lh9c388LK2k8ZgHYSXinJJVBkqYSterqnLedh0tJHt72N2zkVpaGyc4YPuJBWQSlGhp5IamXpiLYFfNAzSgni4hDq8WJ7DR861LXK4shCCXKm-95jedSxhSpt6SMltX-mdHe0ou0D2pSThd8jQ0yiQScSvzktD4zERBbYI3utrYqXWZAstjioRe8Vb_Qu8Z2dDIIi-Vv9LbzAoTfOWheeniV_tBzZyodD5nYFLjNUzc5tR5i5dSe_p1DxLdDmIYHYg1SGhJd",
    tags: ["WEB3", "ETHERS.JS"],
    layout: "small",
  },
  {
    id: "procvv",
    title: "ProCV Generator",
    description:
      "Real-time PDF generation with custom themes and ATS optimization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcU0vcppWmo3_TLOoXyWUuCKJr9ic6xHWyWsrj5wuRIRDzJSevUYD0yosqcXFzhbIEJyqRLfbigjGK292U4wfOxZvjzpD08w3xlPypQ4b4_4y2b-YimAg-isi2IL06Tpyt46xmrH3_77UiWyr5j7UHgf2LLje-H96TcjN4q7bKM6TspX9n8RvvJK35I-8_PZsfFA0nLMejIkNSk8_r0VQIjMOpB0fOn-PcII_eo1rnKbOLWajLYntdEGDVMdfaRotO1oTmWLYTiwdQ",
    tags: ["PDFKIT", "REACT"],
    layout: "small",
  },
  {
    id: "fixchat",
    title: "FIXCHAT",
    description:
      "Real-time collaboration tool with end-to-end encryption for developer teams.",
    tags: ["SOCKET.IO", "REDIS"],
    layout: "small",
    progress: 75,
    progressLabel: "75% Core Logic Complete",
  },
  {
    id: "fixtech-erp",
    title: "FIXTECH ERP",
    description:
      "Enterprise resource planning specifically designed for tech hardware manufacturers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs1fM_UoUzPT3iapg_f114L-tlLT8C-WHbWQ2MroB1R6tUPQ2KrZVMnipe62qg2dDUvVIA7sDmS9ILKWXOQNQie__ZgqTkf3ISUe8bCuSoU_abAsmb_6y0vDoxLHkqNIiHcuW1efIlMAYgHEb4k5Q39jXDWbbK0YTqGNbPVtT0tHMAQGaJlmc8qby9VC2PJxjqGGQpa15bHd2m9pRWhcIAanxupPCP_EVoAs9YVSavgSD-hPiDEA6hy0ky5NJVSrZDyYWsy54lWa3Q",
    tags: ["NESTJS", "PRISMA", "REACT QUERY"],
    layout: "wide",
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
      "Working with John on the procurement system was smooth. He implemented complex multi-level approvals without compromising usability.",
    name: "Product Owner",
    role: "Operations",
    company: "NCAA Enterprise",
  },
  {
    id: "3",
    quote:
      "Clean code, on-time delivery, and great communication. Would hire again for frontend-heavy projects.",
    name: "Client",
    role: "Fintech",
    company: "Freelance",
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
