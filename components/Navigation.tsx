'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  theme?: 'light' | 'dark';
}

export default function Navigation({ theme = 'light' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === 'dark';

  return (
    <nav className={`fixed top-0 left-0 right-0 ${isDark ? 'bg-[#2b2b2b] border-white/10' : 'bg-white border-gray-100'} border-b z-50`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
        <Link href="/" className={`text-base font-medium ${isDark ? 'text-white' : 'text-black'}`}>
          Build with Abhishai
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/building"
            className={`text-sm hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
          >
            Building
          </Link>
          <Link
            href="/work"
            className={`text-sm hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`text-sm hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm px-6 py-2 border rounded-md transition-colors ${
              isDark
                ? 'border-white text-white hover:bg-white hover:text-black'
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 ${isDark ? 'text-white' : 'text-black'}`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${isDark ? 'bg-[#2b2b2b]' : 'bg-white'} border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <Link
                href="/building"
                onClick={() => setIsOpen(false)}
                className={`text-base hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
              >
                Building
              </Link>
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className={`text-base hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
              >
                Projects
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className={`text-base hover:opacity-60 transition-opacity ${isDark ? 'text-white' : 'text-black'}`}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-base px-6 py-3 border rounded-md text-center transition-colors ${
                  isDark
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
