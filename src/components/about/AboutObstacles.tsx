import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Shield, Zap, Wifi } from 'lucide-react';

const challenges = [
  {
    icon: Wifi,
    title: "The Speed Promise",
    solution: "Lightning Fast",
    description: "Your customers won't wait. While others struggle with 5-second load times, our sites deliver content in under 2 seconds, even on 3G networks. The result? 35% higher engagement rates."
  },
  {
    icon: Shield,
    title: "The Security Guarantee",
    solution: "Bank-Grade Protection",
    description: "Your data is your business. We implement the same security measures used by African banking institutions, maintaining a perfect security record since our inception."
  },
  {
    icon: Zap,
    title: "The Reliability Pledge",
    solution: "Always Online",
    description: "Power outages? Network issues? Not your problem. Our infrastructure ensures 99.99% uptime, keeping your business running 24/7, even during local infrastructure challenges."
  }
];

export function AboutObstacles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-indigo-600 font-semibold mb-2 block">Our Commitments</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Promises We Keep</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a region where digital challenges are real, we don't just make promises – we deliver guarantees backed by data and proven results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <AnimatedSection key={index}>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{challenge.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-4">{challenge.solution}</p>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}