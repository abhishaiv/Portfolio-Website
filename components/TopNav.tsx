'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-sm text-foreground hover:opacity-60 transition-opacity">
          © Code by Abhishai
        </Link>

        <div className="hidden md:flex gap-8">
          <Link
            href="/work"
            className={`text-sm transition-opacity ${
              isActive('/work') ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-sm transition-opacity ${
              isActive('/about') ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-sm transition-opacity ${
              isActive('/contact') ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
