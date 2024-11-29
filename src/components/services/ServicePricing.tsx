import React from 'react';
import { Check } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ServicePricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible packages designed to meet the needs of businesses at every stage
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-indigo-600">
                    {index === 0 ? 'UGX 2M' : index === 1 ? 'UGX 5M' : 'Custom'}
                  </span>
                  {index !== 2 && <span className="text-gray-600">/project</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Responsive Design',
                    'SEO Optimization',
                    'Content Management',
                    index >= 1 && 'Custom Features',
                    index >= 1 && 'Priority Support',
                    index === 2 && 'Enterprise Integration',
                  ]
                    .filter(Boolean)
                    .map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-indigo-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}