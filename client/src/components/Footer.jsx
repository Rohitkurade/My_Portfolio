import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="code-block inline-block mb-6">
            <span className="text-code-green">console</span>
            <span className="text-code-orange">.</span>
            <span className="text-code-cyan">log</span>
            <span className="text-code-orange">(</span>
            <span className="text-code-orange">'Thanks for visiting!'</span>
            <span className="text-code-orange">)</span>
          </div>

          <p className="text-gray-500 font-mono mt-6">
            Built with <span className="text-code-red">❤️</span> using React.js and modern web technologies
          </p>

          <p className="text-gray-600 text-sm mt-4">
            © {currentYear} Rohit Kurade. All rights reserved.
          </p>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="text-2xl mt-4"
          >
            ⚙️
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
