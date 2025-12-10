import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  PaintBrushIcon,
  UserGroupIcon,
  CommandLineIcon, 
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

// Enhanced skill interface with category and level
interface Skill {
  name: string;
  icon: React.ElementType;
  description: string;
  proficiency: number;
  category: 'technical' | 'design' | 'soft';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

// Animations configuration
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.03, transition: { duration: 0.2 } }
};

// Progress bar color based on proficiency
const getProgressColor = (proficiency: number): string => {
  if (proficiency >= 90) return 'bg-green-600';
  if (proficiency >= 75) return 'bg-blue-600';
  if (proficiency >= 60) return 'bg-yellow-600';
  return 'bg-red-600';
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
  >
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
        <skill.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}
        </span>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 min-h-[60px]">
      {skill.description}
    </p>
    <div className="mt-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-500 dark:text-gray-400">Proficiency</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className={`h-2 rounded-full ${getProgressColor(skill.proficiency)}`}
        />
      </div>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: 'Frontend Development',
      icon: CodeBracketIcon,
      description: 'React, TypeScript, Tailwind CSS, Next.js',
      proficiency: 95,
      category: 'technical',
      level: 'Expert'
    },
    { 
      name: 'UI/UX Design', 
      icon: PaintBrushIcon,  
      description: 'Figma, Wireframing, Prototyping, Usability Testing',
      proficiency: 99,
      category: 'design',
      level: 'Advanced'
    },
    { 
      name: 'Backend Development', 
      icon: CommandLineIcon,
      description: 'Node.js, Django',
      proficiency: 80,
      category: 'technical',
      level: 'Advanced'
    },
    { 
      name: 'Mobile Development', 
      icon: DevicePhoneMobileIcon,
      description: 'React Native',
      proficiency: 75,
      category: 'technical',
      level: 'Intermediate'
    },
    { 
      name: 'Database Management', 
      icon: CircleStackIcon,
      description: 'MongoDB, MySQL',
      proficiency: 70,
      category: 'technical',
      level: 'Intermediate'
    },
    { 
      name: 'Cloud Services', 
      icon: CloudIcon,
      description: 'Azure, Firebase',
      proficiency: 65,
      category: 'technical',
      level: 'Beginner'
    },
    { 
      name: 'Soft Skills', 
      icon: UserGroupIcon,
      description: 'Problem Solving, Team Collaboration, Analytical Thinking, Time Management',
      proficiency: 98,
      category: 'soft',
      level: 'Expert'
    },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, design capabilities, and soft skills
          </p>
        </motion.div>

        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 capitalize">
              {category} Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorySkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;