'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Next Image
import Timings from '@/components/Timings';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div>
      {/* Background Section */}
      <div className="w-screen h-screen relative">
        {/* ✅ Use Next.js Image with fill */}
        <Image
          src="/background.avif"
          alt="gym background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#090909ad] bg-opacity-50"></div>
      </div>

      {/* Animated Foreground Content */}
      <div className="flex absolute top-0 flex-col justify-center h-screen w-screen">
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute text-white px-8 md:px-24 py-20"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
              READY TO TRAIN <br />
              <span className="text-red-600">YOUR BODY</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg">
              Gym training is a structured and disciplined approach to physical exercise that focuses on strength&apos; endurance and overall fitness improvement.
            </p>

            <Link href="/pricing">
              <button className="border-2 border-red-600 text-red-600 px-6 py-2 font-semibold uppercase hover:bg-red-600 hover:text-white transition">
                LET&apos;S JOIN NOW
              </button>
            </Link>

            <div className="grid grid-cols-3 gap-4 text-center pt-6">
              <div>
                <p className="text-2xl font-bold text-red-600">4+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">9k+</p>
                <p className="text-sm">Members Join</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">8k+</p>
                <p className="text-sm">Happy Members</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Timings />
      <Testimonials />
      <Gallery />
      <div className='bg-black'>
        <Footer />
      </div>
    </div>
  );
}
