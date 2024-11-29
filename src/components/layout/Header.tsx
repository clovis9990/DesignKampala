import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useMenu } from '../../hooks/useMenu';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const location = useLocation();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <motion.header
      className="fixed w-full z-50"
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' && !isAtTop && !isOpen ? -100 : 0,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 30
        }
      }}
    >
      <div className={`w-full bg-gray-900/95 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        !isAtTop ? 'shadow-lg' : ''
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white group" 
              onClick={closeMenu}
            >
              <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-200">
                <span className="text-xl font-bold text-white">DK</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                DesignKampala
              </span>
            </Link>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? 
                  <X className="text-white w-6 h-6" /> : 
                  <Menu className="text-white w-6 h-6" />
                }
              </motion.div>
            </button>

            <div className="hidden md:flex space-x-8">
              {[
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${
                    location.pathname === link.to
                      ? 'text-purple-400 font-semibold'
                      : 'text-gray-300 hover:text-purple-400'
                  } transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </motion.header>
  );
}