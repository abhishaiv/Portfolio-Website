import Link from 'next/link';
import LocalTime from './LocalTime';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/abhishaiv' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/abhishaivardhan' },
    { name: 'Twitter', url: 'https://twitter.com/abhishaiv' },
    { name: 'Instagram', url: 'https://instagram.com/abhishaiv' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Version & Time */}
          <div>
            <p className="text-sm text-muted mb-2">
              {currentYear} © Edition
            </p>
            <LocalTime />
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-sm text-muted uppercase mb-4">Navigation</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Socials */}
          <div>
            <h3 className="text-sm text-muted uppercase mb-4">Socials</h3>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              © Code by Abhishai Vardhan
            </p>
            <p className="text-sm text-muted">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
