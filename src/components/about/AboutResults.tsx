import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

const achievements = [
  {
    number: "200+",
    label: "Success Stories",
    description: "Businesses transformed"
  },
  {
    number: "156%",
    label: "Average Growth",
    description: "First-year revenue increase"
  },
  {
    number: "35%",
    label: "Higher Engagement",
    description: "Visitor interaction rate"
  },
  {
    number: "100%",
    label: "Project Success",
    description: "Delivery satisfaction"
  }
];

export function AboutResults() {
  return (
    <section className="py-20 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-400 font-semibold mb-2 block">The Impact</span>
          <h2 className="text-4xl font-bold mb-4">Your Success in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These aren't just statistics – they're stories of businesses like yours that took the leap and transformed their digital presence.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index}>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{achievement.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-300">{achievement.label}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}