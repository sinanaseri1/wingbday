"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { Cake, Gift, Heart } from "lucide-react";
import Image from "next/image";

export default function Birthday() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  top: -20,
                  left: `${Math.random() * 100}%`,
                  scale: 0,
                }}
                animate={{
                  top: "100%",
                  scale: 1,
                  transition: {
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  },
                }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
                }}
              />
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8"
        >
          <motion.h1
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
          >
            Happy Birthday Serena!
          </motion.h1>

          <div className="flex justify-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} className="text-pink-500">
              <Cake size={48} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-purple-500">
              <Gift size={48} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-indigo-500">
              <Heart size={48} />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Happy Birthday! I hope you love this website. When you share your
            details here, I hope people see just how amazing you are and that
            every opportunity you dream of comes your way. Wishing you success,
            joy, and an incredible year ahead!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden flex items-center justify-center"
          >
            <img
              src="https://media1.giphy.com/media/gTfsqVWaGlZITd5FuA/giphy.gif?cid=6c09b9520t1rwsfcbspvhpxd3d0ct7twczvopr4vzmw877bf&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              alt="Birthday Artwork"
              className="block mx-auto"
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
