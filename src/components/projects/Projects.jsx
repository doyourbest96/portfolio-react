import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';
import Button from '../shared/Button';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll 
    ? projectsData 
    : projectsData.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exploring the intersection of AI and blockchain through innovative solutions
            and cutting-edge technology integrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="secondary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View More Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;