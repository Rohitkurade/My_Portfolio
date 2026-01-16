import { motion } from 'framer-motion';

export const Navbar = ({ activeSection }) => {
  const sections = [
    { id: 'hero', label: '0 // home' },
    { id: 'skills', label: '1 // expertise' },
    { id: 'projects', label: '2 // work' },
    { id: 'experience', label: '3 // experience' },
    { id: 'contact', label: '4 // contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          className="text-code-purple font-mono text-xl font-bold"
        >
          &lt;Portfolio /&gt;
        </motion.div>

        <div className="flex gap-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              onClick={() => scrollToSection(section.id)}
              className={`font-mono text-sm transition-all duration-300 relative ${
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
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
