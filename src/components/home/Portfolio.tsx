import React from 'react';
import { projects } from '../../data/projects';
import { AnimatedSection } from '../ui/AnimatedSection';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Witness how we've empowered leading Ugandan businesses to thrive in the digital age through transformative web solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index}>
              <div className="group relative overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-sm text-indigo-300 mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}