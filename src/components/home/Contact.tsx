import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Create Something Extraordinary</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to elevate your digital presence? Partner with Uganda's leading web design agency to transform your vision into reality. Let's build something remarkable together.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-indigo-600 mr-4" />
                <p className="text-gray-600">Plot 45, Kampala Road, Kampala, Uganda</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-indigo-600 mr-4" />
                <p className="text-gray-600">+256 700 123456</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600 mr-4" />
                <p className="text-gray-600">hello@designkampala.com</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Vision</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your project and goals"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Digital Journey
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}