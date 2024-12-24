import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Full Stack AI & <br />
            Blockchain Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Building the future with AI, Blockchain, and Web3 technologies. 
            Specializing in smart contracts, decentralized applications, and AI integration.
          </p>
          <div className="flex gap-4 justify-center">
            <Button>View Projects</Button>
            <Button variant="secondary">Read Blog</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;