import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { FormStatus } from '../ui/FormStatus';

export function ServicesAction() {
  const {
    formData,
    formState,
    handleChange,
    handleSubmit
  } = useForm({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Digital Journey?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Uganda's leading businesses in creating exceptional digital experiences that drive growth and success.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <form onSubmit={handleSubmit} data-static-form-name="services" className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent placeholder-gray-400"
                    placeholder="Enter your full name"
                    required
                    disabled={formState.loading}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent placeholder-gray-400"
                    placeholder="Enter your email address"
                    required
                    disabled={formState.loading}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-gray-300"
                  required
                  disabled={formState.loading}
                >
                  <option value="">Select a service</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Development">Development</option>
                  <option value="Digital Branding">Digital Branding</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="E-commerce">E-commerce Solutions</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent placeholder-gray-400"
                  placeholder="Tell us about your project goals and requirements"
                  required
                  disabled={formState.loading}
                ></textarea>
              </div>

              <FormStatus {...formState} />

              <button
                type="submit"
                disabled={formState.loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState.loading ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}