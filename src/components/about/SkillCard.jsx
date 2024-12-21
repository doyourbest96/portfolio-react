import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => (
  <motion.div
    key={skill}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="bg-white p-4 rounded-lg shadow-sm"
  >
    {skill}
  </motion.div>
);

export default SkillCard;