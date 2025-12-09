export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">
              Let's build something cooler.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              I like working with people who enjoy solving real problems — the kind that require thinking, not templates.
              If you're building something in AI, market intelligence, productivity, or just want to talk systems that think — I'd love to hear from you.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether it's collaboration, consulting, or a crazy idea you want to test, I usually reply faster than expected.
              A simple email can start something surprisingly good.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-muted uppercase mb-4">Contact</h3>
              <div className="space-y-2">
                <a
                  href="mailto:abhishaivardhan21@gmail.com"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  abhishaivardhan21@gmail.com
                </a>
                <a
                  href="tel:+918919451220"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  +91 89194 51220
                </a>
                <p className="text-lg text-muted">
                  Based in India 🇮🇳
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm text-muted uppercase mb-4">Socials</h3>
              <div className="space-y-2">
                <a
                  href="https://github.com/abhishaiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/abhishaivardhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/abhishaiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com/abhishaiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
