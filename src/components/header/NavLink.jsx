import React from 'react';
import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default NavLink;