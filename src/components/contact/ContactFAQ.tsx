import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical website project takes 4-8 weeks from concept to launch. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide comprehensive support and maintenance packages to ensure your digital presence remains optimal. Our team is available during business hours for immediate assistance."
  },
  {
    question: "What makes DesignKampala different from other agencies?",
    answer: "We combine deep local market knowledge with international design standards. Our solutions are specifically optimized for East African businesses and infrastructure challenges."
  },
  {
    question: "What are your payment terms?",
    answer: "We offer flexible payment plans, typically structured as 50% upfront and 50% upon completion. We accept various payment methods including mobile money and bank transfers."
  }
];

export function ContactFAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about working with us. Can't find what you're looking for? Reach out to our team.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}