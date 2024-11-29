import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'Local Market Expertise',
    description: 'Deep understanding of East African business landscape and consumer behavior',
    benefits: [
      'Cultural relevance',
      'Market-specific optimization',
      'Local payment integration'
    ]
  },
  {
    title: 'Technical Excellence',
    description: 'Cutting-edge solutions optimized for local infrastructure',
    benefits: [
      'Fast loading times',
      'Offline capabilities',
      'Mobile-first approach'
    ]
  },
  {
    title: 'Ongoing Partnership',
    description: 'Long-term support and growth strategies',
    benefits: [
      '24/7 local support',
      'Regular updates',
      'Performance monitoring'
    ]
  }
];

export function ServicesDesire() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-600 font-semibold mb-2 block">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The DesignKampala Advantage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of local expertise and international standards that sets us apart.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-indigo-600 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}