import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Frontend Developer', 'React.js Enthusiast', 'Computer Engineering Student'];
  const { displayedText } = useTypewriter(roles[currentRole], 50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        {/* Terminal-style greeting */}
        <motion.div variants={itemVariants} className="code-block mb-8 inline-block">
          <span className="text-code-green">$</span>
          <span className="text-code-cyan ml-2">portfolio init</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold mb-4">
          <span className="text-code-cyan">Rohit</span>
          <span className="text-code-purple"> Kurade</span>
        </motion.h1>

        {/* Role with typing animation */}
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-mono text-code-blue mb-6">
          <span className="text-code-purple">&gt;</span> {displayedText}
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="text-code-green"
          >
            _
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          I am a Computer Engineering student with a strong focus on frontend development and React.js. I enjoy building responsive, user-centric web applications and continuously improving my problem-solving skills through real-world projects and hands-on learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-6 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="glass px-8 py-3 font-mono border border-code-purple text-code-purple hover:bg-code-purple hover:text-dark-bg transition-all"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="glass px-8 py-3 font-mono border border-code-cyan text-code-cyan hover:bg-code-cyan hover:text-dark-bg transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-code-cyan font-mono">↓</div>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-10 w-80 h-80 bg-code-purple rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-code-cyan rounded-full blur-3xl opacity-10"
      />
    </section>
  );
};
