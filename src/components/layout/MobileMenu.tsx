import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const links = [
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <motion.div
      className="fixed inset-0 top-[73px] z-50 bg-gray-900/95 backdrop-blur-md md:hidden"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <motion.nav className="h-full flex flex-col p-6">
        <div className="space-y-4">
          {links.map((link) => (
            <motion.div key={link.to} variants={itemVariants}>
              <Link
                to={link.to}
                className={`block py-3 text-center text-lg ${
                  location.pathname === link.to
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300 hover:text-purple-400'
                } transition-colors duration-200`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </motion.div>
  );
}