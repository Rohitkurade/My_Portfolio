import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PROJECTS } from '../utils/constants';

export const Projects = () => {
  const [projects, setProjects] = useState(PROJECTS);

  // Fetch from backend in production
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="relative py-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="code-block inline-block mb-4">
            <span className="text-code-green">const</span>
            <span className="text-code-cyan ml-2">projects</span>
            <span className="text-code-orange ml-2">=</span>
            <span className="text-code-orange ml-2">[</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-code-purple">2 // </span>
            <span className="text-white">Featured Work</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              whileHover="hover"
              className="glass rounded-lg overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {project.systemArchitecture && (
                    <span className="code-block text-xs py-1 px-3 bg-code-blue bg-opacity-20 text-code-blue">
                      🏗️ {project.systemArchitecture}
                    </span>
                  )}
                  <span className="code-block text-xs py-1 px-3 bg-code-purple bg-opacity-20 text-code-purple">
                    Featured
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tech Tags - Categorized */}
                <div className="space-y-3 mb-6">
                  {project.frontend?.length > 0 && (
                    <div>
                      <p className="text-code-cyan font-mono text-xs mb-2">Frontend:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.frontend.map(tech => (
                          <span
                            key={tech}
                            className="code-block text-xs py-1 px-2 bg-code-blue bg-opacity-20 text-code-blue"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.backend?.length > 0 && (
                    <div>
                      <p className="text-code-green font-mono text-xs mb-2">Backend:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.backend.map(tech => (
                          <span
                            key={tech}
                            className="code-block text-xs py-1 px-2 bg-code-green bg-opacity-20 text-code-green"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.database?.length > 0 && (
                    <div>
                      <p className="text-code-orange font-mono text-xs mb-2">Database:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.database.map(tech => (
                          <span
                            key={tech}
                            className="code-block text-xs py-1 px-2 bg-code-orange bg-opacity-20 text-code-orange"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 py-2 px-4 text-center font-mono text-sm bg-code-cyan bg-opacity-10 border border-code-cyan text-code-cyan rounded hover:bg-opacity-20 transition-all"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.backendCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 py-2 px-4 text-center font-mono text-sm bg-code-green bg-opacity-10 border border-code-green text-code-green rounded hover:bg-opacity-20 transition-all"
                  >
                    Backend Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing bracket */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="code-block inline-block mt-8"
        >
          <span className="text-code-orange">{']'}</span>
        </motion.div>
      </div>
    </section>
  );
};
