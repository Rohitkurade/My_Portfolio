import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-8 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="code-block inline-block mb-4">
            <span className="text-code-green">const</span>
            <span className="text-code-cyan ml-2">contact</span>
            <span className="text-code-orange ml-2">=</span>
            <span className="text-code-orange ml-2">{'{'}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            <span className="text-code-purple">4 // </span>
            <span className="text-white">Get In Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Interested in internships, frontend roles, or collaboration opportunities.
            <br />
            Feel free to reach out — I'd be happy to connect.
          </p>
        </motion.div>

        {/* Contact Form - Styled like JSON */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-8 rounded-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Opening brace */}
            <motion.div variants={itemVariants} className="code-block inline-block">
              <span className="text-code-orange">{'{'}</span>
            </motion.div>

            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="font-mono text-code-purple">
                "name":
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full mt-2 bg-gray-900 border border-code-cyan rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-code-purple transition-all hover:border-code-purple"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="font-mono text-code-purple">
                "email":
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full mt-2 bg-gray-900 border border-code-purple rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-code-cyan focus:box-shadow focus:shadow-lg transition-all hover:border-code-cyan"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <label className="font-mono text-code-purple">
                "subject":
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Title"
                className="w-full mt-2 bg-gray-900 border border-code-cyan rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-code-purple transition-all hover:border-code-purple"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="font-mono text-code-purple">
                "message":
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
                className="w-full mt-2 bg-gray-900 border border-code-cyan rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-code-purple transition-all resize-none hover:border-code-purple"
              />
            </motion.div>

            {/* Closing brace */}
            <motion.div variants={itemVariants} className="code-block inline-block">
              <span className="text-code-orange">{'}'}</span>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 0 30px rgba(152, 195, 121, 0.5)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.92 }}
                className="w-full py-3 px-6 font-mono border-2 border-code-green text-code-green bg-code-green bg-opacity-10 rounded hover:bg-opacity-30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Sending...
                  </motion.span>
                ) : (
                  '$ send.message()'
                )}
              </motion.button>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded bg-code-green bg-opacity-20 border border-code-green text-code-green font-mono text-sm"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded bg-code-red bg-opacity-20 border border-code-red text-code-red font-mono text-sm"
              >
                ✗ Error sending message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 font-mono mb-6">Or reach me on:</p>
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { icon: '💼', label: 'LinkedIn', url: '#' },
              { icon: '🐙', label: 'GitHub', url: '#' },
              { icon: '𝕏', label: 'Twitter', url: '#' },
              { icon: '✉️', label: 'Email', url: 'mailto:your@email.com' },
            ].map(social => (
              <motion.a
                key={social.label}
                href={social.url}
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 flex items-center justify-center rounded-lg glass border border-code-purple hover:border-code-cyan transition-all text-xl"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
