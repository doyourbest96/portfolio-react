import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I create beautiful and functional web experiences with modern technologies
          </p>
          <Button>View My Work</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;