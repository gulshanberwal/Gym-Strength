'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi S.',
    quote:
      'Joining StrengthBlast was the best decision I made this year. The trainers push me beyond my limits, and the vibe is just electrifying!',
    rating: 5,
  },
  {
    name: 'Meera D.',
    quote:
      'I love the variety of workouts here. Every session feels new and challenging. The energy in this gym is addictive!',
    rating: 4,
  },
  {
    name: 'Aman K.',
    quote:
      'From day one, I felt motivated and welcomed. This place has helped me transform my body and mind.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white px-6 py-20 md:px-20 min-h-[60vh] relative">
      {/* White top border line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-300" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-red-600 uppercase mb-12 tracking-wide">
          What Our Members Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-[#111] border border-red-600 p-6 rounded-xl shadow-md hover:shadow-red-600 transition duration-300"
            >
              <p className="text-gray-300 italic mb-4">“{t.quote}”</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-red-500 font-bold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
