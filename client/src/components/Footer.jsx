import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohit-kurade',
      icon: '💼',
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rohitkurade',
      icon: '⚫',
      color: '#ffffff',
    },
    {
      name: 'Email',
      url: 'mailto:rohitkurade.dev@gmail.com',
      icon: '📧',
      color: '#EA4335',
    },
  ];

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

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-8 flex-wrap"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: `0 0 20px ${link.color}80`,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-gray-700 hover:border-code-purple transition-all"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm text-gray-300 hover:text-code-cyan transition-colors">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <p className="text-gray-600 text-sm mt-8">
            © {currentYear} <span className="text-code-blue font-bold">Rohit Kurade</span>. All rights reserved.
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
