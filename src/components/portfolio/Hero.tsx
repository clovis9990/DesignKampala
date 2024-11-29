import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Sparkles, Zap, Globe, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-purple-400 font-semibold mb-4 block">Transforming Ideas into Digital Reality</span>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Visionary
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                {" "}Digital Craftsman{" "}
              </span>
              & Innovator
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Merging cutting-edge technology with artistic vision to create immersive digital experiences that captivate, engage, and inspire.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <IconBox icon={Code2} label="Full-Stack Development" description="Building robust, scalable solutions" />
              <IconBox icon={Palette} label="Creative Design" description="Crafting beautiful user experiences" />
              <IconBox icon={Sparkles} label="Innovation" description="Pushing digital boundaries" />
              <IconBox icon={Zap} label="Performance" description="Lightning-fast solutions" />
              <IconBox icon={Globe} label="Global Reach" description="Cross-cultural digital solutions" />
              <IconBox icon={Shield} label="Best Practices" description="Security & scalability focused" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IconBox({ icon: Icon, label, description }: { icon: any; label: string; description: string }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
      <span className="text-white font-medium block mb-2">{label}</span>
      <span className="text-gray-400 text-sm">{description}</span>
    </motion.div>
  );
}