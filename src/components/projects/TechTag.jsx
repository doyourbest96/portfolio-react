import React from 'react';

const TechTag = ({ tech }) => (
  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm">
    {tech}
  </span>
);

export default TechTag;