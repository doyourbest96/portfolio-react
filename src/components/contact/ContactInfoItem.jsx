import React from 'react';
import { motion } from 'framer-motion';

const ContactInfoItem = ({ icon, title, content }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-4"
  >
    <div className="text-2xl text-indigo-600 dark:text-indigo-400">{icon}</div>
    <div>
      <h3 className="font-semibold dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </motion.div>
);

export default ContactInfoItem;