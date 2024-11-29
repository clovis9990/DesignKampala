import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { services } from '../../data/services';
import { motion } from 'framer-motion';

export function ServicesInterest() {
  return (
    <section id="services-interest" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-600 font-semibold mb-2 block">Our Expertise</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of digital services designed to help your business thrive in the modern digital landscape.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index}>
                <motion.div 
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute -inset-1 bg-indigo-100 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                    <div className="relative">
                      <Icon className="w-12 h-12 text-indigo-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                      Tailored for East African Market
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                      Expert Local Team
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                      Ongoing Support
                    </li>
                  </ul>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}