import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Developer & UI/UX Designer";
  const controls = useAnimation();

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };

    setTimeout(typeText, 1500);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-400/10 -top-20 -left-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-400/10 -bottom-20 -right-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
              Osama Alsahafi
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {text}
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            I create beautiful, functional, and user-friendly digital experiences.
            Passionate about building innovative solutions that make a difference.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2 font-medium"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Osama_Alsahafi_CV.pdf"
              download="Osama_Alsahafi_CV.pdf"
              className="border-2 border-green-500 text-green-500 px-8 py-4 rounded-lg hover:bg-green-500 hover:text-white transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Updated Scroll Indicator - Moved outside container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a 
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-3 group"
          whileHover={{ y: 5 }}
        >
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Scroll Down
          </span>
          <div className="w-5 h-8 border-2 border-gray-600 dark:border-gray-400 rounded-full relative group-hover:border-blue-600 dark:group-hover:border-blue-400 transition-colors">
            <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400 rounded-full absolute left-1/2 top-2 -translate-x-1/2 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 animate-scrollDown transition-colors"/>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;