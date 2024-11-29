import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Testimonials() {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped visionary businesses across Uganda achieve digital excellence and unprecedented growth.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Quote className="w-12 h-12 text-indigo-600 mb-6" />
                <p className="text-gray-600 mb-6 text-lg">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}