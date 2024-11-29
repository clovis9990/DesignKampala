import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your business goals, target audience, and unique challenges in the East African market.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Our team develops a comprehensive digital strategy aligned with your objectives and local market dynamics.'
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'We create beautiful, functional solutions optimized for performance in challenging connectivity environments.'
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We ensure a smooth launch and provide ongoing support to help your business grow and evolve.'
  }
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to delivering exceptional digital solutions
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="text-4xl font-bold text-indigo-600 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}