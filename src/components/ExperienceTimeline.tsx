import React from 'react';

const experiences = [
  {
    title: 'Real Time Analysis - RTA',
    company: 'upsource by solutions',
    period: 'Jun 24 – Present',
    description: 'Monitored agent activities in real-time to ensure compliance and resolve issues promptly; delivered focused training sessions on company systems, escalation procedures, and SLA tracking for smooth operations.',
  },
  {
    title: 'Maintenance Engineer',
    company: 'University of Jeddah',
    period: 'Jul 23 – Feb 24',
    description: 'Maintained and monitored lab IT systems, resolved technical and network issues, developed simple automation tools for daily tasks, and collaborated with staff to improve the learning environment.',
  },
  {
    title: 'Summer Intern – Software Solutions Development',
    company: 'University of Jeddah ',
    period: 'May 22 – Jul 22',
    description: 'Completed an internship focused on digital transformation, performance efficiency, and ticket system optimization. Learned ASP.NET basics, developed small applications with C# and SQL Server, and supported digital transformation initiatives aligned with Vision 2030.',
  },
  // أضف أو عدل المزيد حسب حاجتك
];




const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="py-24 bg-gradient-to-t from-gray-200 to-gray-50 dark:from-gray-900 dark:to-gray-800">


<div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
  <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
</div>

    <div className="relative border-l-4 border-blue-700 max-w-3xl mx-auto">
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-9 ml-8 relative">
          {/* دائرة النقطة على الخط */}
          <span className="absolute -left-9 top-14 w-1 h-10 bg-blue-800 border-4 border-blue-300 rounded-full shadow"></span>
          {/* البطاقة */}
          <div className="bg-gray-800 rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/5 mb-2 md:mb-0 flex-shrink-0">
              <span className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-[11px] font-semibold mr-4  whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <div className="md:w-4/5">
              <div className="text-lg font-bold text-blue-400">{exp.title}</div>
              <div className="text-gray-300 text-md mb-2">{exp.company}</div>
              <div className="text-gray-400 text-sm">{exp.description}</div>
            </div>
          </div>
        </div>
      ))}
      {/* نهاية الخط */}
      <div className="absolute w-6 h-6 -left-9 bg-blue-700 rounded-full shadow top-full"></div>
    </div>
    
  </section>
);

export default ExperienceTimeline;
