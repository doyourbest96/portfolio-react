import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const SkillsGrid = () => {
  const skills = [
    "Solidity", "Smart Contracts", "Ethereum", "Web3.js",
    "Python", "TensorFlow", "PyTorch", "Natural Language Processing",
    "React", "Node.js", "TypeScript", "GraphQL",
    "IPFS", "DeFi", "NFTs", "Machine Learning"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 p-8 rounded-lg"
    >
      <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;