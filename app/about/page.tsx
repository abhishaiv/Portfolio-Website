import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Image + Text */}
      <section className="section-spacing px-6 md:px-12 lg:px-24 pt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Placeholder */}
          <div className="aspect-[3/4] bg-muted/20 rounded-lg overflow-hidden">
            {/* Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-muted">
              [Your Photo Here]
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-12">
            {/* Badge/Logo Placeholder */}
            <div className="w-24 h-24 rounded-full border-2 border-foreground flex items-center justify-center">
              <span className="text-2xl font-light">AV</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                AI Builder & Market Intelligence Specialist
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                I build AI systems that upgrade human capabilities. By day, I analyze global markets for Cognizant. By night, I create products like Tailr AI, Recall, and F1 Pitwall that help people work smarter.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-light mb-4">Experience</h2>
              <p className="text-muted leading-relaxed">
                With expertise in both AI development and strategic market intelligence, I bridge the gap between technical possibility and business value. Every project is an opportunity to push boundaries and create systems that actually work.
              </p>
            </div>

            {/* CTA */}
            <Link href="/contact">
              <div className="btn-circle bg-foreground text-background inline-flex">
                Get in touch →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills/Capabilities */}
      <section className="section-spacing px-6 md:px-12 lg:px-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted mb-16">
            WHAT I DO
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-light mb-4">01 — AI Development</h3>
              <p className="text-sm text-muted leading-relaxed">
                Building intelligent systems using cutting-edge AI. From conversational agents to computer vision, I create tools that amplify human capability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">02 — Market Intelligence</h3>
              <p className="text-sm text-muted leading-relaxed">
                Strategic analysis of global markets and competitive landscapes. Helping Fortune 500 companies make data-driven decisions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">03 — Product Design</h3>
              <p className="text-sm text-muted leading-relaxed">
                End-to-end product development from concept to deployment. Combining technical excellence with user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-muted">© 2024 Abhishai Vardhan</p>
            <p className="text-xs text-muted mt-1">Based in India</p>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/abhishaivardhan" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">
              LinkedIn
            </a>
            <a href="https://twitter.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">
              Twitter
            </a>
            <a href="https://github.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-60 transition-opacity">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
