import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  LinkIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: CodeBracketIcon,
      url: 'https://github.com/Osamv',
    },
    {
      name: 'LinkedIn',
      icon: LinkIcon,
      url: 'https://linkedin.com/in/osama1421',
    },

    {
      name: 'ChatBubbleLeftIcon',
      icon: ChatBubbleLeftIcon,
      url: 'https://linkedin.com/in/osama1421',
    },

    
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold mb-4">Osama Alsahafi</h3>
            <p className="text-gray-400">
              Developer & UI/UX Designer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>

                <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Academic Projects
                </a>
              </li>
              
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h3 className="text-xl font-semibold mb-4 ">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 ">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Osama Alsahafi. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 