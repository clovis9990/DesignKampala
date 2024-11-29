import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Code2, Users, Globe } from 'lucide-react';

const missions = [
  {
    icon: Code2,
    title: "The Challenge",
    description: "You're losing market share to competitors with stronger digital presence. Your website isn't converting visitors into customers, and your team is frustrated with outdated systems."
  },
  {
    icon: Users,
    title: "The Journey",
    description: "Together, we'll transform your digital presence. Our proven process combines local market expertise with global best practices to create solutions that resonate with your audience."
  },
  {
    icon: Globe,
    title: "The Victory",
    description: "Watch as your business transforms. Our clients see an average 156% revenue increase in year one, with some achieving up to 10x ROI through improved digital presence."
  }
];

export function AboutTask() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-600 font-semibold mb-2 block">Your Path to Success</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Transformation Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every business has its unique challenges. Here's how we turn those challenges into opportunities for extraordinary growth.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <AnimatedSection key={index}>
                <div className="p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{mission.title}</h3>
                  <p className="text-gray-600">{mission.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}