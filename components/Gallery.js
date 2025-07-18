'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  // from image_query results
  '/gallery/gallery1.jpg',
  '/gallery/gallery2.jpg',
  '/gallery/gallery3.jpeg'
  
];

export default function Gallery() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 min-h-[60vh] relative">
      {/* White top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-red-600 uppercase mb-12 tracking-wide">
          Our Gym Pics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border-2 border-red-600 shadow-lg hover:shadow-red-600 transition"
            >
              <img
                src={src}
                alt={`Gym photo ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
