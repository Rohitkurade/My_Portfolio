import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EXPERIENCES } from '../utils/constants';

export const Timeline = () => {
  const [experiences, setExperiences] = useState(EXPERIENCES);

  useEffect(() => {
    // Fetch from backend in production
    // fetch('/api/experiences')
    //   .then(res => res.json())
    //   .then(data => setExperiences(data))
    //   .catch(err => console.error(err));
  }, []);

  return (
    <section id="experience" className="relative py-8 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
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
            <span className="text-code-cyan ml-2">timeline</span>
            <span className="text-code-orange ml-2">=</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-code-purple">3 // </span>
            <span className="text-white">Learning Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-code-purple to-code-cyan"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02, 
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <motion.div 
                  className="flex-1"
                  whileHover={{ y: -8 }}
                >
                  <div className="glass p-6 rounded-lg transition-all hover:shadow-lg hover:shadow-code-purple/30">
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-code-purple rounded-full border-4 border-dark-bg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.3 }}
                      viewport={{ once: true }}
                      style={{ top: '24px' }}
                    />

                    <div className="mb-3">
                      <motion.h3 
                        className="text-2xl font-bold text-code-cyan transition-colors"
                        whileHover={{ color: "#61afef" }}
                      >
                        {exp.position}
                      </motion.h3>
                      <motion.p 
                        className="text-code-orange font-mono text-sm transition-colors"
                        whileHover={{ color: "#c678dd" }}
                      >
                        {exp.company}
                      </motion.p>
                    </div>

                    <p className="text-gray-400 text-sm mb-3">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies?.map(tech => (
                        <motion.span
                          key={tech}
                          className="code-block text-xs py-1 px-2 bg-code-purple bg-opacity-20 text-code-purple cursor-pointer transition-all"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(97, 175, 239, 0.3)",
                            color: "#61afef"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 font-mono">
                        {new Date(exp.startDate).toLocaleDateString('en-US', {
                          month: 'short',
                          year: 'numeric',
                        })}
                        {' - '}
                        {exp.currentlyWorking
                          ? 'Present'
                          : new Date(exp.endDate).toLocaleDateString('en-US', {
                              month: 'short',
                              year: 'numeric',
                            })}
                      </span>
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-code-cyan hover:text-code-blue transition-colors"
                        >
                          Visit
                        </a>
                      )}
                    </div>

                    {exp.currentlyWorking && (
                      <motion.div
                        animate={{ opacity: [0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="mt-3 inline-block px-3 py-1 bg-code-green bg-opacity-20 text-code-green rounded text-xs font-mono"
                      >
                        Currently Working
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternate layout */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
