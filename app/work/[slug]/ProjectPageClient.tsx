'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import Navigation from '@/components/Navigation';

interface ProjectPageClientProps {
  project: Project;
  nextProject: Project;
}

export default function ProjectPageClient({ project, nextProject }: ProjectPageClientProps) {
  return (
    <>
      <Navigation theme="light" />

      <main className="min-h-screen bg-white pt-32">
        {/* Back Link */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8">
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <section className="px-6 md:px-12 py-16 border-b border-gray-100">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            {/* Metadata Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200"
            >
              {project.year && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">YEAR</p>
                  <p className="text-lg font-medium">{project.year}</p>
                </div>
              )}
              {project.location && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">LOCATION</p>
                  <p className="text-lg font-medium">{project.location}</p>
                </div>
              )}
              {project.services && project.services.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">SERVICES</p>
                  <div className="space-y-1">
                    {project.services.slice(0, 2).map((service, i) => (
                      <p key={i} className="text-sm">{service}</p>
                    ))}
                  </div>
                </div>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Project Image */}
        <section className="px-6 md:px-12 py-16">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[1400px] mx-auto"
          >
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Project Screenshot</p>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        {/* Project Details */}
        <section className="px-6 md:px-12 py-16 border-t border-gray-100">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[1400px] mx-auto"
          >
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-medium mb-6">About This Project</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                This project showcases the intersection of AI technology and practical application.
                By focusing on user needs and technical excellence, it delivers a solution that
                truly upgrades human capabilities from 1 to <span className="text-red-600 font-medium">10x</span>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built with modern tools and best practices, the system is designed to scale
                while maintaining performance and reliability. Every feature is crafted to remove
                friction and amplify productivity.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <section className="px-6 md:px-12 py-16 border-t border-gray-100">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-[1400px] mx-auto"
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-6">
                TECHNOLOGIES USED
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-3 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Next Project Navigation */}
        <section className="px-6 md:px-12 py-32 border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-[1400px] mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <Link
                href="/work"
                className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Projects
              </Link>

              <Link
                href={`/work/${nextProject.slug}`}
                className="group"
              >
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">NEXT PROJECT</p>
                <p className="text-2xl md:text-3xl font-light group-hover:opacity-60 transition-opacity">
                  {nextProject.title} →
                </p>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#2b2b2b] text-white px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
