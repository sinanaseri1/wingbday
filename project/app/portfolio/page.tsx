'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';

const artworks = [
  {
    id: 1,
    title: 'Abstract Harmony',
    category: 'Painting',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Urban Dreams',
    category: 'Mixed Media',
    image: 'https://www.mark-rothko.org/assets/img/paintings/untitled-1952.jpg',
  },
  {
    id: 3,
    title: 'Ethereal Dance',
    category: 'Installation',
    image: 'https://blog.displate.com/wp-content/uploads/2021/10/Kandinsky_Yellow_Red_Blue.jpg',
  },
  // Add more artworks as needed
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Portfolio
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
          ))}
        </div>
      </main>
    </div>
  );
}

function ArtworkCard({ artwork, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative aspect-square overflow-hidden rounded-lg"
    >
      <img
        src={artwork.image}
        alt={artwork.title}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-white text-xl font-semibold">{artwork.title}</h3>
          <p className="text-white/80 mt-2">{artwork.category}</p>
        </div>
      </div>
    </motion.div>
  );
}