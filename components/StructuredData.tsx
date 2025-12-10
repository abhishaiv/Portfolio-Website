export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abhishai Vardhan",
    "url": "https://abhishaivardhan.com",
    "image": "https://abhishaivardhan.com/og-image.jpg",
    "sameAs": [
      "https://github.com/abhishaiv",
      "https://linkedin.com/in/abhishaivardhan",
      "https://twitter.com/abhishaiv",
      "https://instagram.com/abhishaiv"
    ],
    "jobTitle": "AI Builder + Market Intelligence Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Cognizant"
    },
    "description": "Building AI-fuelled systems that upgrade humans. Market Intelligence at Cognizant by day, AI product builder by night.",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Market Intelligence",
      "AI Development",
      "Product Design",
      "Full-Stack Development"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Cognizant"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
