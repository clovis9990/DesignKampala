import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">DesignKampala</h3>
            <p className="text-gray-400 mb-6">
              Creating innovative digital solutions for businesses across East Africa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-indigo-400 mr-3" />
                <p className="text-gray-400">Plot 45, Kampala Road, Kampala, Uganda</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                <p className="text-gray-400">+256 700 123456</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                <p className="text-gray-400">hello@designkampala.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors duration-200">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors duration-200">
                  Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors duration-200">
                  Digital Branding
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors duration-200">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-indigo-400 transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-indigo-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Follow us for the latest updates and insights into digital innovation in East Africa.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DesignKampala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}