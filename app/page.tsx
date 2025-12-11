'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/lib/projects';
import StructuredData from '@/components/StructuredData';
import LocalTime from '@/components/LocalTime';

export default function Home() {
  return (
    <>
      <StructuredData />

      {/* Full-Screen Hero Section with Photo */}
      <section className="relative h-screen bg-gray-400 overflow-hidden">
        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center"
        >
          <p className="text-white/40 text-2xl">[Your Photo Here]</p>
        </motion.div>

        {/* Top Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute top-0 left-0 right-0 px-6 md:px-12 py-8 flex justify-between items-center"
        >
          <p className="text-white text-sm">© Code by Abhishai</p>
          <nav className="hidden md:flex gap-8 text-white">
            <Link href="/work" className="hover:opacity-60 transition-opacity">Work</Link>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
            <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
          </nav>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute left-0 top-1/2 -translate-y-1/2"
        >
          <div className="bg-black/80 text-white py-4 px-8 rounded-r-full flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1" fill="none"/>
              <path d="M10 2 L18 10 L10 18 L2 10 Z" fill="none" stroke="white" strokeWidth="1"/>
            </svg>
            <div className="text-left">
              <p className="text-xs">Located</p>
              <p className="text-xs">in</p>
              <p className="text-xs font-medium">India</p>
            </div>
          </div>
        </motion.div>

        {/* Role Text - Top Right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute right-12 top-1/3 text-right text-white"
        >
          <p className="text-xl md:text-2xl font-light mb-2">AI Builder &</p>
          <p className="text-xl md:text-2xl font-light">Market Intelligence</p>
          <p className="text-xl md:text-2xl font-light">Specialist</p>
        </motion.div>

        {/* Huge Name Overlay at Bottom */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
        >
          <h1 className="text-white font-light leading-none px-6 md:px-12 pb-8" style={{fontSize: 'clamp(3rem, 15vw, 12rem)'}}>
            Abhishai Vardhan
          </h1>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-32 right-12 text-white animate-bounce"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <main className="bg-background text-foreground">
        {/* Headline Section */}
        <section className="section-spacing px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Large Headline */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <h2 className="text-display font-light leading-tight">
                Building AI-fueled systems that upgrade humans. Market Intelligence at Cognizant by day, AI product builder by night.
              </h2>
            </motion.div>

            {/* About Me Circle + Extra Info */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted leading-relaxed">
                  The combination of my passion for AI, code & product design positions me in a unique place in the tech world.
                </p>
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-circle-large bg-foreground text-background hover:opacity-90 transition-opacity"
                  >
                    About me
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section className="section-spacing px-6 md:px-12 lg:px-24 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest text-muted mb-16"
            >
              RECENT WORK
            </motion.p>

            <div className="space-y-0">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="block border-t border-border"
                  >
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="py-12 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:opacity-60 transition-opacity"
                    >
                      <div className="md:col-span-6">
                        <h3 className="text-title font-light">{project.title}</h3>
                      </div>
                      <div className="md:col-span-6 flex justify-between items-center">
                        <span className="text-sm text-muted">
                          {project.services?.[0] || 'AI Development'}
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16"
            >
              <Link href="/work">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-circle bg-foreground text-background inline-flex"
                >
                  More work →
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Dark Footer / CTA Section */}
        <section className="bg-[#1a1a1a] text-white px-6 md:px-12 lg:px-24 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Photo + Text */}
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

              {/* Right: Contact Info + Button */}
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

            {/* Bottom Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-32 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-8 text-sm text-gray-400"
            >
              <div className="flex gap-12">
                <div>
                  <p className="text-xs uppercase mb-1">VERSION</p>
                  <p>2024 © Edition</p>
                </div>
                <div>
                  <p className="text-xs uppercase mb-1">LOCAL TIME</p>
                  <LocalTime />
                </div>
              </div>
              <div className="flex gap-6">
                <a href="https://linkedin.com/in/abhishaivardhan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="https://github.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="https://instagram.com/abhishaiv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
