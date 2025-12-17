'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  theme?: 'light' | 'dark';
}

export default function Navigation({ theme = 'light' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 right-6 z-50">
      <div className="max-w-[1400px] mx-auto bg-white backdrop-blur-md rounded-full shadow-lg">
        <div className="px-8 py-3.5 flex justify-between items-center">
          <Link href="/" className="text-base font-normal text-black">
            Build with Abhishai
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/building"
            className="text-sm text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
          >
            Building
          </Link>
          <Link
            href="/work"
            className="text-sm text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-sm text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
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
              className="md:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="px-6 py-6 flex flex-col gap-6">
              <Link
                href="/building"
                onClick={() => setIsOpen(false)}
                className="text-base text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
              >
                Building
              </Link>
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className="text-base text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
              >
                Projects
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-base text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-base text-black opacity-80 hover:opacity-100 transition-opacity font-normal"
              >
                Contact
              </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
