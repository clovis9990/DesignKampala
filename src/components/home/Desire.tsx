import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { projects } from '../../data/projects';
import { testimonials } from '../../data/testimonials';
import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export function Desire() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-600 font-semibold mb-2 block">Success Stories</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Businesses Across Uganda</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped leading organizations achieve digital excellence and unprecedented growth.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-20">
          {inView && projects.map((project, index) => (
            <AnimatedSection key={index}>
              <div className="group relative overflow-hidden rounded-xl bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {inView && (
                  <img 
                    src={`${project.image}?auto=format&fit=crop&w=600&q=60`}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-indigo-400 font-semibold mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <div className="p-8 rounded-xl bg-gray-50 border border-gray-100">
                <Quote className="w-12 h-12 text-indigo-600 mb-6" />
                <p className="text-gray-600 text-lg mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  {inView && (
                    <img 
                      src={`${testimonial.image}?auto=format&fit=crop&w=100&h=100&q=60`}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                  )}
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