'use client';
import { motion } from 'framer-motion';

const features = [
  {
    icon: "📚",
    title: "Excellence in Learning",
    description: "Comprehensive curriculum designed to inspire and challenge students."
  },
  {
    icon: "🎯",
    title: "Skilled Faculty",
    description: "Expert teachers dedicated to nurturing every student's potential."
  },
  {
    icon: "🌟",
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure for an optimal learning environment."
  }
];

export default function FeaturesGrid() {
  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-8 mb-16"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
} 