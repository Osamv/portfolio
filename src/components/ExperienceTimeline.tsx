import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

// Move experiences data to a separate file for better organization
interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  companyUrl: string;
}

const experiences: Experience[] = [
  {
    title: 'Software engineer',
    company: 'Future Horses',
    period: 'Nov 25 – Present',
    description:
      'Analyze user needs and design, develop, and test software solutions to meet those needs. Maintain, improve, and upgrade existing systems while ensuring all components work together efficiently. Document systems, create technical diagrams, and continuously fix bugs and address user feedback during maintenance.',
    companyUrl: 'https://futurehorses.com',
  },
  {
    title: 'Real Time Analysis - RTA',
    company: 'Upsource by solutions',
    period: 'Jun 24 – Oct 25',
    description:
      'Monitored agent activities in real-time to ensure compliance and resolve issues promptly; delivered focused training sessions on company systems, escalation procedures, and SLA tracking for smooth operations.',
    companyUrl: 'https://upsource.com.sa/ar/',
  },
  {
    title: 'Maintenance Engineer',
    company: 'University of Jeddah',
    period: 'Jul 23 – Feb 24',
    description:
      'Maintained and monitored lab IT systems, resolved technical and network issues, developed simple automation tools for daily tasks, and collaborated with staff to improve the learning environment.',
    companyUrl: 'https://www.uj.edu.sa/ar',
  },
  {
    title: 'Summer Intern – Software Solutions Development',
    company: 'University of Jeddah - DT and IT Department',
    period: 'May 22 – Jul 22',
    description:
      'Completed an internship focused on digital transformation, performance efficiency, and ticket system optimization. Learned ASP.NET basics, developed small applications with C# and SQL Server, and supported digital transformation initiatives aligned with Vision 2030.',
    companyUrl: 'https://it.uj.edu.sa/',
  },
  // اذا في خبرات اكثر بضيفها هنا
];

// Separate timeline card component for better reusability
const TimelineCard: React.FC<Experience & { index: number }> = ({
  title,
  company,
  companyUrl,
  period,
  description,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="mb-9 ml-8 relative"
  >
    <span className="absolute -left-9 top-14 w-1 h-10 bg-blue-800 border-4 border-blue-300 rounded-full shadow" />
    <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/5 mb-2 md:mb-0 flex-shrink-0">
        <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-[11px] font-semibold mr-4 whitespace-nowrap">
          {period}
        </span>
      </div>
      <div className="md:w-4/5">
        <div className="text-lg font-bold text-blue-400">{title}</div>

        {/* اسم الشركة كرابط */}
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-md mb-2 inline-block hover:text-blue-400 hover:underline transition-colors"
        >
          {company}
        </a>

        <div className="text-gray-400 text-sm">{description}</div>
      </div>
    </div>
  </motion.div>
);

const ExperienceTimeline: React.FC = () => (
  <section
    id="experience"
    className="py-24 bg-gradient-to-t from-gray-200 to-gray-50 dark:from-gray-900 dark:to-gray-800 relative"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Experience
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto" />
    </motion.div>

    <div className="relative border-l-4 border-blue-700 max-w-3xl mx-auto">
      {experiences.map((exp, idx) => (
        <TimelineCard key={`${exp.title}-${exp.period}`} {...exp} index={idx} />
      ))}
      <div className="absolute w-6 h-6 -left-9 bg-blue-700 rounded-full shadow top-full" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center"
    >
      <a
        href="#projects"
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-center"
        aria-label="Scroll to projects section"
      >
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </motion.div>
  </section>
);

export default ExperienceTimeline;
