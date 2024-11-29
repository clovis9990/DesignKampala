import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function ServicesAttention() {
  const scrollToServices = () => {
    document.getElementById('services-interest')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent animate-pulse" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-indigo-400 text-lg font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Expert Web Solutions in Uganda
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Elevate Your Digital Presence with World-Class Services
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            From stunning web designs to powerful e-commerce solutions, we deliver digital excellence tailored to the East African market.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={scrollToServices}
            >
              Explore Our Services
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              fullWidth
              icon={<ArrowRight />}
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToServices}
      >
        <ChevronDown className="w-8 h-8 text-white/80" />
      </motion.div>
    </section>
  );
}