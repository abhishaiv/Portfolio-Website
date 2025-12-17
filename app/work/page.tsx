'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { allProjects } from '@/lib/projects';
import Navigation from '@/components/Navigation';

export default function WorkPage() {
  // Filter to show only 5 featured projects as per Figma
  const featuredProjectSlugs = ['recall', 'tailr-ai', 'f1-pitwall', 'kathy', 'apartment-fix'];
  const featuredProjects = allProjects.filter(p => p.slug && featuredProjectSlugs.includes(p.slug));

  return (
    <>
      <Navigation theme="light" />

      {/* Main Content */}
      <main className="min-h-screen bg-white pt-32 px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-medium mb-4">Products I Built</h1>
            <p className="text-xl text-gray-500">Night Mode Activated</p>
          </motion.div>

          {/* Table */}
          <div className="mb-16">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-6 pb-6 border-b border-gray-200 text-sm uppercase tracking-wider text-gray-500">
              <div className="col-span-6">NAME</div>
              <div className="col-span-4">CATEGORY</div>
              <div className="col-span-2 text-right">YEAR</div>
            </div>

            {/* Table Rows */}
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="grid grid-cols-12 gap-6 py-8 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="col-span-6">
                      <h3 className="text-3xl md:text-4xl font-light">{project.title}</h3>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <p className="text-base text-gray-600">
                        {project.category === 'productivity' ? 'Productivity' :
                         project.category === 'sports-intelligence' ? 'Sports Intelligence' :
                         project.category === 'health-tech' ? 'Health Tech' :
                         project.category === 'service-orchestration' ? 'Service Orchestration' :
                         project.category === 'both' ? 'Design & Development' :
                         project.category === 'design' ? 'Design' :
                         project.category === 'development' ? 'Development' :
                         'Other'}
                      </p>
                    </div>
                    <div className="col-span-2 flex items-center justify-end">
                      <p className="text-base text-gray-600">{project.year || '2025'}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* About Projects Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/about"
              className="inline-block px-8 py-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              About Projects
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#2b2b2b] text-white px-16 py-[72px] relative">
        <div className="max-w-[1400px] mx-auto">
          {/* CTA Circle - Positioned absolutely for dominance */}
          <Link href="/contact">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-16 top-10 w-[140px] h-[140px] rounded-full bg-blue-500 flex items-center justify-center text-lg font-medium cursor-pointer hover:bg-blue-600 transition-colors shadow-xl z-10"
            >
              Get in touch
            </motion.div>
          </Link>

          {/* Main content */}
          <div className="mb-16 pr-40 md:pr-48">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/portfolio/profile.jpg"
                    alt="Abhishai Vardhan"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-lg">
                Let's build<br/>something cooler
              </h2>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <a
                href="mailto:abhishaivardhan21@gmail.com"
                className="block text-base text-gray-300 hover:text-white transition-colors"
              >
                abhishaivardhan21@gmail.com
              </a>
              <a
                href="tel:+918919451220"
                className="block text-base text-gray-300 hover:text-white transition-colors"
              >
                +91 8919451220
              </a>
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
