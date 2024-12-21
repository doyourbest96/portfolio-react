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
      I'm a passionate frontend developer with 5 years of experience building
      modern web applications. I specialize in creating responsive, user-friendly
      interfaces that provide exceptional user experiences.
    </p>
    <p className="text-gray-600 mb-8">
      When I'm not coding, you can find me exploring new technologies,
      contributing to open-source projects, or sharing my knowledge through
      technical blog posts.
    </p>
    <Button variant="primary">Download CV</Button>
  </motion.div>
);

export default About;