import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ServiceCTA() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center group hover:bg-indigo-50 transition-colors duration-200">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}