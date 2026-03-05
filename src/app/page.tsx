import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Contact } from "@/components/sections/Contact";
import { ResumeView } from "@/components/sections/ResumeView";
import { Footer } from "@/components/sections/Footer";
import ClientTestimonials from "@/components/sections/client-testimonials";

export const metadata: Metadata = {
  title: "John Adeoye | Frontend Developer & React Engineer — Lagos, Nigeria",
  description:
    "John Adeoye (Fixit) — Frontend Developer and Node.js engineer. 3+ years building enterprise systems with React, TypeScript, Next.js. Lagos, Nigeria. Open to full-time and remote developer roles.",
  openGraph: {
    title: "John Adeoye | Frontend Developer & React Engineer",
    description:
      "Frontend Developer with 3+ years in React, TypeScript, Node.js. Enterprise systems for government & fintech. Lagos, Nigeria.",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <ClientTestimonials />
        <TechMarquee />
        <BlogTeaser />
        <Contact />
        <section id="resume" className="scroll-mt-20">
          <ResumeView standalone={false} />
        </section>
      </main>
      <Footer />
    </>
  );
}
