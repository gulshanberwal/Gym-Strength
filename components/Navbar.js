'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/trainers', label: 'TRAINERS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="absolute z-50 text-white px-6 py-4 flex justify-between items-center w-full"
    >
      {/* Logo */}
      <Link href={'/'}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-white">Strength</span>
          <span className="text-red-600">Blast</span>
        </motion.div>
      </Link>

      {/* Desktop Nav */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mediaquery space-x-6 font-semibold"
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition ${
              pathname === href
                ? 'text-red-600'
                : 'text-white hover:text-red-600'
            }`}
          >
            {label}
          </Link>
        ))}
      </motion.div>

      {/* Right Side: Start Now + Hamburger */}
      <div className="flex items-center gap-4">
        {/* START NOW (Always Visible) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/pricing"
            className="mediaquery bg-red-600 hover:bg-red-700 text-white px-5 py-2 font-semibold rounded-sm transition"
          >
            START NOW
          </Link>
        </motion.div>

        {/* Hamburger Button (Visible on Mobile) */}
        <div className="under900">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 space-y-4 md:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-semibold ${
                pathname === href
                  ? 'text-red-600'
                  : 'text-white hover:text-red-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
