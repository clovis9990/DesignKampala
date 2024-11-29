import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { useInView } from 'react-intersection-observer';

export function Interest() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="interest" className="py-24 bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-400 font-semibold mb-2 block">Why Choose Us</span>
          <h2 className="text-4xl font-bold mb-4">Local Expertise, Global Standards</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We understand the unique challenges and opportunities of the East African market, delivering solutions that work seamlessly in local conditions.
          </p>
        </AnimatedSection>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inView && services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index}>
                <motion.div 
                  className="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="h-1 w-12 bg-indigo-400/30 rounded-full" />
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}