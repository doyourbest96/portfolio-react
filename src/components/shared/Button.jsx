import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full text-lg font-semibold transition-colors";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;