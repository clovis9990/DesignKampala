import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';

export function AboutSetting() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-indigo-900 to-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1621274283140-e4450435bf76?auto=format&fit=crop&w=1920&q=75"
          alt="Kampala cityscape"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-gray-900/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.span
              className="inline-block text-indigo-400 text-lg font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Your Digital Transformation Journey
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              From Vision to Digital Victory
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Every success story starts with a challenge. Since 2018, we've helped over 200 businesses overcome their digital hurdles and emerge as market leaders. Your transformation begins here.
            </motion.p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}