'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger-menu"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          style={{ animation: 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards' }}
        >
          <button
            className="hamburger-menu"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-6xl md:text-8xl font-light hover:opacity-60 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/work"
              onClick={() => setIsOpen(false)}
              className="text-6xl md:text-8xl font-light hover:opacity-60 transition-opacity"
            >
              Work
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-6xl md:text-8xl font-light hover:opacity-60 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-6xl md:text-8xl font-light hover:opacity-60 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          <div className="absolute bottom-12 left-12 text-sm text-muted">
            © Abhishai Vardhan
          </div>
        </div>
      )}
    </>
  );
}
