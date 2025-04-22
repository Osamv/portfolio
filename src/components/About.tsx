import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: CodeBracketIcon },
    { name: 'Backend Development', icon: CommandLineIcon },
    { name: 'Mobile Development', icon: DevicePhoneMobileIcon },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
              With years of experience in web development, I specialize in creating scalable and efficient solutions
              that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My journey in tech started with a curiosity about how things work on the internet.
              Since then, I've worked on numerous projects, from small business websites to complex
              enterprise applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900">
                  <skill.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 