import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutYou() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Write Your Success Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              The next chapter in East Africa's digital transformation could be yours. Don't let another day of opportunities pass by.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Begin Your Journey</h3>
                <p className="text-gray-600 mb-6">
                  Limited spots available. Lock in your transformation with a free strategy session (valued at $500) and join our success stories.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-indigo-600 font-semibold group"
                >
                  Claim Your Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Shape the Future</h3>
                <p className="text-gray-600 mb-6">
                  Passionate about digital transformation? Join our team and help write the next chapter of East Africa's digital revolution.
                </p>
                <Link 
                  to="/careers"
                  className="inline-flex items-center text-indigo-600 font-semibold group"
                >
                  Explore Opportunities
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}