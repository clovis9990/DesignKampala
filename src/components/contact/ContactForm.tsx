import React from 'react';
import { AnimatedSection } from '../ui/AnimatedSection';
import { Send } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { FormStatus } from '../ui/FormStatus';

export function ContactForm() {
  const {
    formData,
    formState,
    handleChange,
    handleSubmit
  } = useForm({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-white order-first lg:order-none">
      <AnimatedSection className="max-w-xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Project</h2>
          <p className="text-gray-600">
            Share your vision with us, and we'll help bring it to life. Your project deserves the best, and we're here to deliver excellence.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit} 
          data-static-form-name="contact" 
          className="space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white"
                placeholder="John Doe"
                required
                disabled={formState.loading}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white"
                placeholder="john@example.com"
                required
                disabled={formState.loading}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white"
              placeholder="What's your project about?"
              required
              disabled={formState.loading}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-white"
              placeholder="Tell us about your project, goals, and timeline..."
              required
              disabled={formState.loading}
              onClick={(e) => e.stopPropagation()}
            ></textarea>
          </div>

          <FormStatus {...formState} />

          <button
            type="submit"
            disabled={formState.loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={(e) => e.stopPropagation()}
          >
            {formState.loading ? (
              <Send className="w-5 h-5 animate-pulse" />
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </button>
        </form>
      </AnimatedSection>
    </section>
  );
}