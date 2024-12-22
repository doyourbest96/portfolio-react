import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const ContactForm = () => {
  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <FormField label="Name" type="text" />
      <FormField label="Email" type="email" />
      <FormField label="Message" type="textarea" />
      <Button variant="primary" className="w-full">Send Message</Button>
    </motion.form>
  );
};

const FormField = ({ label, type }) => (
  <div>
    <label className="block text-gray-700 mb-2">{label}</label>
    {type === 'textarea' ? (
      <textarea
        rows="4"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    ) : (
      <input
        type={type}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    )}
  </div>
);

export default ContactForm;