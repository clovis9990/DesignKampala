import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Where Ugandan Innovation Meets Digital Excellence
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your business with web solutions that combine local authenticity with world-class design. Experience the perfect blend of East African creativity and cutting-edge technology.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all duration-200 group"
            >
              Transform Your Business
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link 
              to="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold transition-all duration-200"
            >
              Explore Our Success Stories
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollToServices}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </motion.div>
    </div>
  );
}