import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { FormStatus } from '../ui/FormStatus';

export function Contact() {
  const {
    formData,
    formState,
    handleChange,
    handleSubmit
  } = useForm({
    name: '',
    email: '',
    subject: 'Portfolio Contact',
    message: ''
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Twitter, href: '#', label: 'Twitter' },
              { Icon: Mail, href: '#', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </div>

          <motion.form 
            onSubmit={handleSubmit}
            data-static-form-name="portfolio-contact"
            className="bg-gray-800 p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                disabled={formState.loading}
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                disabled={formState.loading}
              />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
              required
              disabled={formState.loading}
            />

            <FormStatus {...formState} />

            <motion.button
              type="submit"
              disabled={formState.loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formState.loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}