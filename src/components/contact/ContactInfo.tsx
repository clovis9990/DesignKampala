import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+256 700 123456",
      subInfo: "Monday to Friday, 9am - 6pm EAT"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@designkampala.com",
      subInfo: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Plot 45, Kampala Road",
      subInfo: "Kampala, Uganda"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      subInfo: "Weekend: By Appointment"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <AnimatedSection className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
        
        <div className="space-y-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-gray-700">{method.info}</p>
                  <p className="text-sm text-gray-500">{method.subInfo}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-gray-600 hover:text-indigo-600 transition-colors duration-200" />
                </a>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}