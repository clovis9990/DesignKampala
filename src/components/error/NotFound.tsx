import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-white mb-4">404</h1>
            <div className="h-2 w-24 bg-purple-500 mx-auto rounded-full mb-8" />
            <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-300 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Go Back
            </button>
            <Link
              to="/"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}