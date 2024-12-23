import React from 'react';

const TechTag = ({ tech }) => (
  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
    {tech}
  </span>
);

export default TechTag;