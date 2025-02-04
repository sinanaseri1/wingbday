'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold">Serena Lam</h1>
            <p className="text-lg text-muted-foreground">
              Contemporary artist based in New York, specializing in abstract expressionism
              and mixed media installations. With over a decade of experience, my work
              explores the intersection of emotion and form through bold colors and
              dynamic compositions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&q=80"
              alt="Sarah Anderson"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}