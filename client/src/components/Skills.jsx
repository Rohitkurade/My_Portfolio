import { motion } from 'framer-motion';
import { SKILLS } from '../utils/constants';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
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
            <span className="text-code-cyan ml-2">skills</span>
            <span className="text-code-orange ml-2">=</span>
            <span className="text-code-orange ml-2">{'{'}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-code-purple">1 // </span>
            <span className="text-white">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(SKILLS).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="glass p-6 rounded-lg"
            >
              <h3 className="text-code-blue font-mono text-lg mb-6 flex items-center">
                <span className="text-code-green mr-2">{'>'}</span>
                {category}
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded bg-opacity-50 bg-gray-900 border border-opacity-20 border-code-purple cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-mono text-sm">{skill.name}</span>
                      </div>
                      <span className="text-code-green text-xs font-mono">{skill.proficiency}</span>
                    </div>
                  </motion.div>
                ))}
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
          <span className="text-code-orange">{'}'}</span>
        </motion.div>
      </div>
    </section>
  );
};
