import React from 'react';
import { services } from '../../data/services';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ServiceDetails() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index} className="flex flex-col">
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Custom-tailored solutions for your business
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Expert team with local market knowledge
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}