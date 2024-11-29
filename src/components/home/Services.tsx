import React from 'react';
import { services } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to the unique needs of businesses in East Africa and beyond.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index}>
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute -inset-1 bg-indigo-100 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                    <div className="relative">
                      <Icon className="w-12 h-12 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}