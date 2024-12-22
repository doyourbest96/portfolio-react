import React from 'react';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          </motion.div>
          <Navigation />
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;