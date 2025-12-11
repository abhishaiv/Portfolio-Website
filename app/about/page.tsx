'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TopNav from '@/components/TopNav';

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-background text-foreground pt-32">
        {/* Hero Section: Large Headline + Photo */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Headline + Blue Globe Button */}
            <div className="relative mb-16">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-display font-light max-w-5xl mb-8"
              >
                Helping brands thrive in the digital world
              </motion.h1>

              {/* Blue circular globe icon button */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                className="absolute top-0 right-0 hidden lg:block"
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700"
                >
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>

            {/* Two-column layout: Text left, Photo right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Text Content */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-lg leading-relaxed">
                  <p className="mb-6">
                    I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
                  </p>
                  <p className="text-muted">
                    Always exploring...
                  </p>
                </div>
              </motion.div>

              {/* Right: Full-height Photo */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="aspect-[3/4] bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <p className="text-white/40 text-xl">[Your Photo Here]</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-light mb-20"
            >
              I can help you with ...
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* 01 Design */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="text-xs text-muted mb-4">01</div>
                <h3 className="text-3xl font-light mb-6">Design</h3>
                <p className="text-sm leading-relaxed text-muted">
                  With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)
                </p>
              </motion.div>

              {/* 02 Development */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="text-xs text-muted mb-4">02</div>
                <h3 className="text-3xl font-light mb-6">Development</h3>
                <p className="text-sm leading-relaxed text-muted">
                  I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Building with Webflow (or Kirby CMS).
                </p>
              </motion.div>

              {/* 03 The full package */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="text-xs text-muted mb-4">03</div>
                <h3 className="text-3xl font-light mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  The full package
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="px-6 md:px-12 lg:px-24 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Photo */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <p className="text-white/40 text-xl">[Your Photo Here]</p>
              </motion.div>

              {/* Right: Text + Logo */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Circular logo placeholder */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="w-24 h-24 rounded-full border border-border flex items-center justify-center text-2xl font-light"
                >
                  AV
                </motion.div>

                <div>
                  <h2 className="text-4xl md:text-5xl font-light mb-6">
                    AI Builder & Developer
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">
                    I am passionate about creating innovative digital experiences. With expertise in AI development and web technologies, I build products that make a difference. Every project is an opportunity to push boundaries and create something exceptional.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dark Footer - Let's work together */}
        <section className="bg-[#1a1a1a] text-white px-6 md:px-12 lg:px-24 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 flex items-center gap-8"
              >
                <div className="w-24 h-24 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light">
                  Let's work<br/>together
                </h2>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-6 flex flex-col items-start lg:items-end gap-8"
              >
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:abhishaivardhan21@gmail.com" className="badge-pill bg-white/10 text-white hover:bg-white/20 transition-colors">
                    abhishaivardhan21@gmail.com
                  </a>
                  <a href="tel:+918919451220" className="badge-pill bg-white/10 text-white hover:bg-white/20 transition-colors">
                    +91 89194 51220
                  </a>
                </div>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-48 h-48 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-xl font-light"
                  >
                    Get in touch
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Footer Details */}
            <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between gap-8 text-sm">
              <div>
                <p className="text-white/40 mb-2">VERSION</p>
                <p>2024 © Edition</p>
              </div>
              <div>
                <p className="text-white/40 mb-2">LOCAL TIME</p>
                <p>IST</p>
              </div>
              <div>
                <p className="text-white/40 mb-2">SOCIALS</p>
                <div className="flex gap-6">
                  <a href="https://linkedin.com/in/abhishaivardhan" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    Twitter
                  </a>
                  <a href="https://github.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
