'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function EntryPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push('/about')}
        className="relative px-8 py-4 text-2xl font-light tracking-widest text-white border border-white/50 hover:bg-white/10 transition-colors"
      >
        ENTER
      </motion.button>
    </motion.div>
  );
}