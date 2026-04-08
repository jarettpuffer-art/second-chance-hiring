'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/why-it-matters', label: 'Why It Matters' },
  { href: '/business-case', label: 'Business Case' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/faq', label: 'Employer FAQ' },
  { href: '/utah-resources', label: 'Utah Resources' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: '#1C2B3A' }} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none no-underline">
          <span style={{ color: '#FFFFFF', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>
            Second-Chance Hiring
          </span>
          <span style={{ color: '#8FB8D4', fontSize: '0.7rem', fontWeight: 400 }}>
            A Resource for Utah Employers
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="no-underline px-3 py-1.5 rounded text-sm font-medium transition-colors"
              style={{
                color: pathname === l.href ? '#FFFFFF' : '#A8BFCF',
                background: pathname === l.href ? '#2C5F8A' : 'transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#243547' }} className="lg:hidden px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium no-underline border-b"
              style={{
                color: pathname === l.href ? '#FFFFFF' : '#A8BFCF',
                borderColor: '#2C3E50',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
