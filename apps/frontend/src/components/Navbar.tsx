import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/mood-tracker', label: 'Mood Tracker' },
    { path: '/ai-counselor', label: 'AI Counselor' },
    { path: '/community', label: 'Community' },
    { path: '/blog', label: 'Resources' },
    { path: '/progress', label: 'Progress' },
  ];

  const isHomePage = location.pathname === '/';

  if (isHomePage) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-dark-800/90 backdrop-blur-md border-b border-primary-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-white">SafeSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/crisis"
              className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Crisis Help</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-primary-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-medium rounded-md ${
                  location.pathname === item.path
                    ? 'bg-dark-700 text-primary-400'
                    : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/crisis"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-1 bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <Shield className="h-4 w-4" />
              <span>Crisis Help</span>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;