import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  CommandLineIcon, 
  PaintBrushIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline';

// Define interfaces for better type safety
interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
}

// Animation variants for consistent animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const About: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: 'Frontend Development', 
      icon: CodeBracketIcon,
      description: 'Building responsive web applications with React and TypeScript'
    },
    { 
      name: 'Data Analysis', 
      icon: CommandLineIcon,
      description: 'Processing and analyzing data using Python and SQL'
    },
    { 
      name: 'UI/UX Design', 
      icon: PaintBrushIcon,
      description: 'Creating user-centered designs with Figma'
    },
    { 
      name: 'Problem Solving', 
      icon: BeakerIcon,
      description: 'Analytical approach to solving complex challenges'
    },
    { 
      name: 'Communication', 
      icon: ChatBubbleLeftRightIcon,
      description: 'Clear and effective technical communication'
    },
    { 
      name: 'Innovation', 
      icon: LightBulbIcon,
      description: 'Creative solutions to technical problems'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate Software Engineer crafting user-centered solutions through code and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a multi-skilled Software Engineer with a strong background in front-end development, data analysis, and UI/UX design.
              I specialize in building user-centered, data-driven web solutions using technologies like Python, SQL, JavaScript, and Figma.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My tech journey began with a passion for analyzing systems and improving user experiences. Since then, 
              I've worked on real-time support systems, internal tools, 
              and smart applications — combining technical depth with design clarity to solve real-world challenges.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Let's Talk
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900">
                    <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;