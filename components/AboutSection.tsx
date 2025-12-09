export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">
              Let's work together.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              I'm a freelance designer and developer passionate about creating digital experiences
              that stand out. With a focus on clean design and smooth interactions, I help brands
              establish their presence in the digital world.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              Whether you need a complete website, a web application, or just want to discuss
              your project, I'm here to help bring your vision to life.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm text-muted uppercase mb-4">Contact</h3>
              <div className="space-y-2">
                <a
                  href="mailto:your.email@example.com"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  your.email@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="block text-lg hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
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
