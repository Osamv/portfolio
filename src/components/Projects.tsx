import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const projects = [
    {
      title: ' Graduation Project',
      description: 'AI-Powered Review Response Tool - An automated tool that analyzes app reviews and suggests smart responses. Proven to outperform manual replies by 31.77%',
      image: '/project1.jpg',
      tags: ['Python Flask, SQLite, CSS, Selenium, Jupyter Notebook'],
      link: '#'
    },
    {
      title: 'Fast Job – Mobile Job Finder App',
      description: 'Helps users discover and hire local workers efficiently',
      image: '/FastJob.jpg',
      tags: ['Figma, Firebase, Android Studio'],
      link: '#'
    },
    {
      title: 'Smart Parking System',
      description: 'Designed for smart campus parking with stakeholder analysis and cost estimation',
      image: '/SmartParkingSystem.jpg',
      tags: ['Database Integration, UI Design'],
      link: '#'
    },

    {
      title: 'Hotel Management System',
      description: 'A system for hotel bookings, billing, and staff performance tracking',
      image: '/HotelManagementSystem.jpg',
      tags: ['ASP.NET, SQL Server, UML'],
      link: '#'
    },


  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-t from-gray-800 to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Academic Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  {/*   
                  > رابط المشاريع اللي تكون عليها في المشاريع اللي في الموقع
                  <a 
                    href={project.link}
                    className="text-white p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center"
                    aria-label={`View ${project.title}`}
                  > 
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a> */} 
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 