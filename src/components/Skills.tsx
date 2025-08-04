import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  PaintBrushIcon,
  UserGroupIcon,
  CommandLineIcon, 
  DevicePhoneMobileIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

const Skills: React.FC = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: CodeBracketIcon,
      description: 'React, TypeScript, Tailwind CSS, Next.js'
    },

    { 
      name: 'UI/UX Design', 
      icon: PaintBrushIcon,  
      description: 'Figma, Wireframing, Prototyping, Usability Testing'
    },

    { 
      name: 'Backend Development', 
      icon: CommandLineIcon,
      description: 'Node.js, Django'
    },
    { 
      name: 'Mobile Development', 
      icon: DevicePhoneMobileIcon,
      description: 'React Native'
    },

    { 
      name: 'Database Management', 
      icon: CircleStackIcon,
      description: 'MongoDB, MySQL'
    },
    { 
      name: 'Cloud Services', 
      icon: CloudIcon,
      description: 'Azure, Firebase'
    },

    { 
      name: 'Soft Skills', 
      icon: UserGroupIcon,
      description: 'Problem Solving, Team Collaboration, Analytical Thinking, Time Management'
    },


    
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                  <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 