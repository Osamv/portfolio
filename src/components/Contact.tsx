import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

// Define interfaces for better type safety
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  content: string;
  link: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call - Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear status when user starts typing again
    if (formStatus.type) {
      setFormStatus({ type: null, message: '' });
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'OsamaAlsahafi@outlook.com',
      link: 'mailto:OsamaAlsahafi@outlook.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+966556599580',
      link: 'tel:+966556599580'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      content: 'Jeddah, Saudi Arabia',
      link: '#'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full px-6 py-3 rounded-lg transition-all duration-200 
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                  }
                  text-white font-medium
                `}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>

            {formStatus.type && (
              <motion.div
                key="status-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`
                  mt-4 p-4 rounded-lg flex items-center space-x-2
                  ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                `}
              >
                {formStatus.type === 'success' ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <ExclamationCircleIcon className="w-5 h-5" />
                )}
                <span>{formStatus.message}</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;