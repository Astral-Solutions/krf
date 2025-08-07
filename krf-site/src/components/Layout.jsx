// src/components/Layout.jsx
import React from 'react';
import ScrollToTop from './ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 text-black font-sans overflow-x-hidden">
      <ScrollToTop />

      {/* Enhanced Decorative background elements */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#c27700] to-[#e69500] rounded-full opacity-5 blur-3xl z-[-1]" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#c27700] to-yellow-400 rounded-full opacity-5 blur-3xl z-[-1]" />
      <div className="fixed top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-[#c27700] to-yellow-500 rounded-full opacity-3 blur-2xl z-[-1]" />

      {/* Geometric Design Elements */}
      <div className="fixed top-20 right-20 w-32 h-32 border-4 border-[#c27700] rounded-full opacity-10 animate-pulse z-[-1]" />
      <div className="fixed bottom-40 left-40 w-16 h-16 bg-[#c27700] rounded-full opacity-5 z-[-1]" />
      <div className="fixed top-1/3 left-10 w-2 h-24 bg-gradient-to-b from-[#c27700] to-transparent opacity-20 z-[-1]" />
      <div className="fixed bottom-1/3 right-20 w-24 h-2 bg-gradient-to-r from-[#c27700] to-transparent opacity-20 z-[-1]" />

      {/* Dotted pattern overlay */}
      <svg
        className="fixed top-0 left-0 w-full h-full opacity-5 z-[-1]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#c27700" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#dots)" />
      </svg>

      {/* Circular Lines Pattern */}
      <svg
        className="fixed top-10 right-10 w-64 h-64 opacity-10 z-[-1] animate-spin"
        style={{ animationDuration: '60s' }}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="#c27700" strokeWidth="0.5" fill="none" />
        <circle cx="50" cy="50" r="35" stroke="#c27700" strokeWidth="0.3" fill="none" />
        <circle cx="50" cy="50" r="25" stroke="#c27700" strokeWidth="0.2" fill="none" />
      </svg>

      {/* Additional line elements */}
      <div className="fixed top-1/4 right-1/4 w-1 h-20 bg-gradient-to-b from-[#c27700] to-transparent opacity-15 transform rotate-45 z-[-1]" />
      <div className="fixed bottom-1/4 left-1/4 w-20 h-1 bg-gradient-to-r from-[#c27700] to-transparent opacity-15 z-[-1]" />

      {/* Animate route transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;