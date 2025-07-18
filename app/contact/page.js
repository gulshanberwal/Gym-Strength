'use client';
import React from 'react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className='bg-gray-900'>
    <div className="min-h-screen  text-white px-6 py-20 md:px-24">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info and Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p>Sector 17, Gurugram, Haryana, India</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
            <p>
              <a href="mailto:gulshanberwal7665@gmail.com" className="text-red-500 hover:underline">
                rahulkumar2341@gmail.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Maps */}
        <div className="w-full h-64 md:h-full">
          <iframe
            className="w-full h-full rounded shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7010.54416610637!2d77.041036!3d28.4594976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ef472cb927%3A0x37c7b7f78a14c1d0!2sSector%2017%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1710634635016!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}
