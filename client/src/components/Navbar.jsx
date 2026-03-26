import { motion } from 'framer-motion';
import { useState } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

export const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sections = [
    { id: 'hero', label: '0 // home' },
    { id: 'skills', label: '1 // expertise' },
    { id: 'projects', label: '2 // work' },
    { id: 'experience', label: '3 // experience' },
    { id: 'contact', label: '4 // contact' },
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-code-purple font-mono text-lg md:text-xl font-bold"
        >
          &lt;RK /&gt;
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ 
                scale: 1.1, 
                textShadow: "0 0 10px rgba(198, 120, 221, 0.6)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`font-mono text-xs lg:text-sm transition-all duration-300 relative ${
                activeSection === section.id
                  ? 'text-code-purple'
                  : 'text-gray-400 hover:text-code-cyan'
              }`}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-code-purple"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {activeSection !== section.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-code-cyan opacity-0"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-code-cyan text-2xl transition-all"
          whileTap={{ scale: 0.95 }}
        >
          <span className="block">
            {isMenuOpen ? '✕' : '☰'}
          </span>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${isMenuOpen ? 'visible' : 'invisible'}`}
      >
        <div className="px-6 py-4 flex flex-col gap-3 border-t border-gray-700">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              whileTap={{ scale: 0.95 }}
              className={`text-left font-mono text-sm py-2 px-3 rounded transition-all ${
                activeSection === section.id
                  ? 'text-code-purple bg-code-purple bg-opacity-10'
                  : 'text-gray-400 hover:text-code-cyan hover:bg-gray-800 hover:bg-opacity-20'
              }`}
            >
              {section.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
