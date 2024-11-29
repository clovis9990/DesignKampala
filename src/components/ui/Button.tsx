import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  to?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  href,
  to,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-indigo-900 hover:shadow-lg',
    outline: 'border-2 border-white text-white hover:bg-white/10',
    ghost: 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <motion.span className="mr-2" whileHover={{ x: -2 }}>
          {icon}
        </motion.span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <motion.span className="ml-2" whileHover={{ x: 2 }}>
          {icon}
        </motion.span>
      )}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {buttonContent}
      </a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}