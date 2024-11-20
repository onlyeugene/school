'use client';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <motion.div 
      className="text-center bg-[#50bfff] text-white py-12 px-4 rounded-xl mb-16"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
      <p className="mb-8">Discover the possibilities that await at our school.</p>
      <motion.button 
        className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          y: -2
        }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 1
        }}
      >
        Schedule a Visit
      </motion.button>
    </motion.div>
  );
} 