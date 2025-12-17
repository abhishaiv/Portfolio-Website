'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { featuredProjects } from '@/lib/projects';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navigation theme="light" />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Professional Photo Background */}
        <Image
          src="/images/portfolio/hero.jpg"
          alt="Abhishai Vardhan - AI Builder"
          fill
          priority
          className="object-cover object-center"
          quality={95}
          sizes="100vw"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* Located in India Badge */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="bg-black/90 text-white py-4 px-8 rounded-r-full flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" strokeWidth="1.5"/>
                <path d="M3 12h18M12 3c2.5 2.5 3 5.5 3 9s-.5 6.5-3 9M12 3c-2.5 2.5-3 5.5-3 9s.5 6.5 3 9" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="text-sm leading-tight">
              Located in<br/>India
            </div>
          </div>
        </motion.div>

        {/* AI Builder Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="absolute right-12 md:right-20 top-[40%] text-right text-white z-10"
        >
          <p className="text-base md:text-lg font-light">AI Builder</p>
          <p className="text-base md:text-lg font-light">& Market Intelligence</p>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.1, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute bottom-12 md:bottom-16 left-6 md:left-12 z-10"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-white leading-none">
            Abhishai Vardhan
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
          transition={{
            delay: 1.8,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          className="absolute bottom-12 right-12 text-white z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="bg-white">
        {/* Headline Section with 10x in RED */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Headline */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-7"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Building AI-fuelled systems that upgrade humans from 1 to <span className="text-red-600">10x</span>
              </h2>
            </motion.div>

            {/* Right: Description + Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:col-span-5 space-y-8"
            >
              <p className="text-base leading-relaxed text-gray-600">
                By day, I decode global markets. By night, I turn ideas into products that think on their own. I don't just engineer code, I engineer systems that remove incrementally smarter. No nonsense, always on the cutting edge.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  About me
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Recent Work */}
        <section className="py-24 px-6 md:px-12 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-gray-400 mb-12"
            >
              RECENT WORK
            </motion.p>

            <div className="space-y-0">
              {featuredProjects.slice(0, 5).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="block py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-3xl md:text-4xl font-light">{project.title}</h3>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Link
                href="/work"
                className="inline-block px-8 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              >
                More work
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Project Showcase Cards */}
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40">
                        Project Screenshot
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#2b2b2b] text-white px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/portfolio/profile.jpg"
                  alt="Abhishai Vardhan"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
                Let's build<br/>something cooler
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:items-end gap-6"
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:abhishaivardhan21@gmail.com"
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  abhishaivardhan21@gmail.com
                </a>
                <a
                  href="tel:+918919451220"
                  className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  +91 8919451220
                </a>
              </div>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-48 h-48 rounded-full bg-blue-500 flex items-center justify-center text-xl cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  Get in touch
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">SOCIALS</p>
            <div className="flex gap-8 text-sm">
              <a href="https://linkedin.com/in/abhishaivardhan" className="hover:text-gray-300 transition-colors">Linkedin</a>
              <a href="https://github.com/abhishaiv" className="hover:text-gray-300 transition-colors">Github</a>
              <a href="https://twitter.com/abhishaiv" className="hover:text-gray-300 transition-colors">Twitter</a>
              <a href="https://instagram.com/abhishaiv" className="hover:text-gray-300 transition-colors">Instagram</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
