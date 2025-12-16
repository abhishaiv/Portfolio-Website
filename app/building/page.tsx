'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BuildingPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link href="/" className="text-base font-medium">
            Build with Abhishai
          </Link>
          <div className="flex gap-8 items-center">
            <Link href="/building" className="text-sm hover:opacity-60 transition-opacity">
              Building
            </Link>
            <Link href="/work" className="text-sm hover:opacity-60 transition-opacity">
              Projects
            </Link>
            <Link href="/about" className="text-sm hover:opacity-60 transition-opacity">
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen bg-black text-white pt-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          {/* Header with Logo */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-16 h-16 rounded-full bg-pink-400 flex items-center justify-center text-black text-2xl font-bold">
              N
            </div>
            <h1 className="text-4xl md:text-5xl font-medium">Nexaflow Studios</h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl space-y-6 mb-12"
          >
            <p className="text-xl md:text-2xl leading-relaxed">
              We build AI systems that make teams faster, sharper, and 10x more effective.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Nexaflow Studios is the small, obsessive AI team I run on the side.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              We help companies automate the work humans shouldn't be doing and amplify the work only humans can do.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl space-y-6 mb-12"
          >
            <h2 className="text-2xl font-medium">Our philosophy</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              AI should remove friction, not create more tools to manage.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              We design bespoke systems that think, adapt, and compound productivity at scale.
            </p>
          </motion.div>

          {/* Link */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg">
              To know more:{' '}
              <a
                href="https://nexaflowstudios.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                nexaflowstudios.in
              </a>
            </p>
          </motion.div>
        </div>
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
              <div className="w-20 h-20 rounded-full bg-gray-600 flex-shrink-0" />
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
