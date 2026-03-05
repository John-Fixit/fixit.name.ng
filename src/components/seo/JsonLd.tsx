const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://johnadeoye.dev";

export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "John Adeoye",
    alternateName: ["Adeoye John", "Fixit", "John Fixit"],
    jobTitle: "Frontend Engineer",
    description:
      "Frontend Developer with 3+ years building enterprise systems. React, TypeScript, Node.js. Lagos, Nigeria.",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    email: "johnfixit293@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.linkedin.com/in/adeoye-john-413b67229",
      "https://github.com/John-Fixit",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Frontend Development",
      "Web Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Clan Africa Tech Innovation",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "John Adeoye — Frontend Developer",
    url: SITE_URL,
    description:
      "Portfolio of John Adeoye, Frontend Developer and React engineer in Lagos, Nigeria.",
    author: {
      "@type": "Person",
      name: "John Adeoye",
    },
    inLanguage: "en-US",
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "John Adeoye",
      jobTitle: "Frontend Engineer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  );
}
