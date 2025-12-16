'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function NotFound() {
  return (
    <>
      <Navigation theme="light" />

      <main className="min-h-screen bg-white pt-32 flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-9xl md:text-[12rem] lg:text-[16rem] font-light text-gray-200 leading-none"
            >
              404
            </motion.h1>

            {/* Error Message */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Looks like this page went from 1 to <span className="text-red-600 font-medium">0x</span>.
                <br />
                Let's get you back on track.
              </p>
            </motion.div>

            {/* Navigation Options */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link
                href="/"
                className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-base"
              >
                ← Back to Home
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 border border-black text-black rounded-lg hover:bg-gray-50 transition-colors text-base"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-16"
            >
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                QUICK LINKS
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                  About
                </Link>
                <Link href="/building" className="text-gray-600 hover:text-black transition-colors">
                  Building
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2b2b2b] text-white px-6 md:px-12 py-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-sm text-gray-400">
            Lost? Let's build something cooler together.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            Get in touch
          </Link>
        </div>
      </footer>
    </>
  );
}
