import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block">
              <div className="bg-white/10 p-4 rounded-full">
                <MessageSquare className="w-8 h-8 text-purple-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing Together</h1>
            <p className="text-lg md:text-xl text-purple-200 mb-8">
              Whether you have a project in mind or just want to explore possibilities, we're here to help transform your digital vision into reality. Our team typically responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}