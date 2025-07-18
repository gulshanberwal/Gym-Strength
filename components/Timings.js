'use client';

import { motion } from 'framer-motion';

const timings = [
  { day: 'Monday', time: '6 AM - 10 PM', class: 'Strength & Cardio', instructor: 'John D.' },
  { day: 'Tuesday', time: '6 AM - 10 PM', class: 'HIIT & Core', instructor: 'Emily R.' },
  { day: 'Wednesday', time: '6 AM - 10 PM', class: 'Yoga & Stretch', instructor: 'Amit K.' },
  { day: 'Thursday', time: '6 AM - 10 PM', class: 'Full Body Burn', instructor: 'Sara T.' },
  { day: 'Friday', time: '6 AM - 10 PM', class: 'Boxing & Strength', instructor: 'Mark Z.' },
  { day: 'Saturday', time: '7 AM - 9 PM', class: 'Zumba & Cardio', instructor: 'Nina P.' },
  { day: 'Sunday', time: '8 AM - 2 PM', class: 'Open Gym / Stretching', instructor: 'Rotation' },
];

export default function Timings() {
  return (
    <section className="min-h-[80vh] bg-black text-white px-6 py-20 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-red-600 uppercase mb-12 tracking-wide">
          Weekly Class Timings
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {timings.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`bg-[#111] border border-red-600 p-6 rounded-xl shadow-md hover:shadow-red-600 transition duration-300 ${
                index === timings.length - 1 ? 'sm:col-span-2 md:col-span-1 md:col-start-2' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{slot.day}</h3>
              <p className="text-red-500 font-semibold mb-1">{slot.time}</p>
              <p className="text-sm text-gray-300 mb-1">{slot.class}</p>
              <p className="text-xs text-gray-500">Instructor: {slot.instructor}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-sm text-gray-500 mt-12"
        >
          * Please arrive 10 minutes early and bring your water bottle & towel.
        </motion.p>
      </motion.div>
    </section>
  );
}
