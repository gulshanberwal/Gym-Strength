'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Strength</span>
            <span className="text-red-600">Blast</span>
          </h2>
          <p className="text-sm text-gray-400">
            Your ultimate destination for transforming fitness goals into reality. Join us and feel the blast!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-red-600 transition">Services</Link></li>
            <li><Link href="/trainers" className="hover:text-red-600 transition">Trainers</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-600 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-red-600 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} StrengthBlast. All rights reserved.
      </div>
    </footer>
  );
}
