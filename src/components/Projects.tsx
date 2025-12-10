import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;          // ✅ نوع الرابط
  details?: string;
  collaboratorName?: string;
  collaboratorUrl?: string;
}

// Simple LinkedIn SVG icon component (no extra libraries needed)
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.25H4.7V23H.22V8.25zM8.34 8.25h4.3v2.01h.06c.6-1.13 2.07-2.32 4.27-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.48v-7.19c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.87-2.77 3.8V23H8.34V8.25z"
      fill="currentColor"
    />
  </svg>
);

const projects: Project[] = [
  {
    title: 'Collaborative Project – Construction Company Website',
    description:
      'Collaboratively developed a modern and responsive website, focusing on clear service presentation, improved user experience, and a professional corporate design.',
    details:
      'Worked with a team to align design with business branding. Optimized user experience for both desktop and mobile.',
    image: '/almashal.png',
    tags: ['Responsive Design', 'UI/UX', 'Teamwork'],
    link: 'https://almashal-aldhahabiya.com/',
    collaboratorName: 'Maher Suliman',
    collaboratorUrl: 'https://www.linkedin.com/in/maher-shiha',
  },
  {
    title: 'Graduation Project',
    description:
      'AI-Powered Review Response Tool - An automated tool that analyzes app reviews and suggests smart responses.',
    details:
      'Proven to outperform manual replies by 31.77%. Implemented using machine learning algorithms and natural language processing techniques.',
    image: '/project1.jpg',
    tags: ['Python', 'Flask', 'SQLite', 'CSS', 'Selenium', 'Jupyter Notebook'],
    link: '#',
  },
  {
    title: 'Fast Job – Mobile Job Finder App',
    description: 'Helps users discover and hire local workers efficiently',
    image: '/FastJob.jpg',
    tags: ['Figma', 'Firebase', 'Android Studio'],
    link: '#',
  },
  {
    title: 'Smart Parking System',
    description:
      'Designed for smart campus parking with stakeholder analysis and cost estimation',
    image: '/SmartParkingSystem.jpg',
    tags: ['Database Integration', 'UI Design'],
    link: '#',
  },
  {
    title: 'Hotel Management System',
    description:
      'A system for hotel bookings, billing, and staff performance tracking',
    image: '/HotelManagementSystem.jpg',
    tags: ['ASP.NET', 'SQL Server', 'UML'],
    link: '#',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-t from-gray-800 to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of academic and collaborative projects showcasing my
            technical and teamwork skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm font-medium">
                    Click to view details
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                  {project.description}
                </p>

                {/* collaborator shown on card */}
                {project.collaboratorName && project.collaboratorUrl && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <LinkedInIcon className="w-4 h-4 text-blue-600" />
                    <a
                      href={project.collaboratorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // ما يفتح المودال لما تضغط الاسم
                      className="hover:underline hover:text-blue-400 transition"
                    >
                      {project.collaboratorName}
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* زر View Project داخل الكرت */}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:text-blue-400"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-w-2xl w-full"
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.details || selectedProject.description}
                </p>

                {/* collaborator in modal */}
                {selectedProject.collaboratorName &&
                  selectedProject.collaboratorUrl && (
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <LinkedInIcon className="w-5 h-5 text-blue-600" />
                      <span>
                        Collaboration with{' '}
                        <a
                          href={selectedProject.collaboratorUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {selectedProject.collaboratorName}
                        </a>
                      </span>
                    </div>
                  )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
