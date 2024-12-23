import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import SkillsGrid from './SkillsGrid';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <p className="text-gray-600 mb-6">
      I'm a Full Stack Developer specializing in AI and Blockchain technologies with 
      7+ years of experience. My expertise spans developing smart contracts, 
      building decentralized applications, and integrating AI solutions into 
      enterprise-level systems.
    </p>
    <p className="text-gray-600 mb-8">
      I'm passionate about pushing the boundaries of what's possible with Web3 
      and AI technologies. Currently focused on developing innovative DeFi solutions 
      and implementing AI-powered blockchain analytics tools.
    </p>
    <Button variant="primary">Download CV</Button>
  </motion.div>
);

export default About;