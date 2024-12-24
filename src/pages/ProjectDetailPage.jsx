import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import Button from '../components/shared/Button';
import TechTag from '../components/projects/TechTag';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[parseInt(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Project not found</h2>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-32 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="secondary"
            className="mb-8"
            onClick={() => navigate('/')}
          >
            ← Back to Projects
          </Button>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4 dark:text-white">{project.title}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <TechTag key={index} tech={tech} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Feature 1 description</li>
                  <li>Feature 2 description</li>
                  <li>Feature 3 description</li>
                  <li>Feature 4 description</li>
                </ul>
              </div>

              <div className="space-x-4">
                <Button>View Live Demo</Button>
                <Button variant="secondary">View Source Code</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;