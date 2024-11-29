import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Action() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-900 via-indigo-800 to-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <AnimatedSection>
            <span className="text-indigo-400 font-semibold mb-2 block">Transform Your Vision</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Dominate the Digital Landscape?</h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              While your competitors struggle with outdated websites and poor user experiences, grow your market share with a digital presence that sets industry standards.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-12 bg-indigo-400" />
                <p className="text-gray-300 italic">Join East Africa's fastest-growing businesses</p>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  95% of our clients report increased customer engagement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  Average 2.5x increase in qualified leads
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                  7-day average project completion time
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20">
              <Link 
                to="/contact" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group cursor-pointer"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <p className="text-sm text-center text-gray-400 mt-4">
                Limited spots available for January 2025 projects
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}