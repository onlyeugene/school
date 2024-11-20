'use client';
import { motion, useSpring, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 500, label: "Students", suffix: "+" },
  { value: 50, label: "Teachers", suffix: "+" },
  { value: 30, label: "Programs", suffix: "+" },
  { value: 95, label: "Success Rate", suffix: "%" }
];

export default function StatsSection() {
  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const [counts, setCounts] = useState(stats.map(() => 0));
  
  // Create springs at the component level
  const springs = stats.map(() => useSpring(0, { duration: 2000 }));

  // Add ref and inView
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        springs[index].set(stat.value);
      });
    } else {
      // Reset springs when out of view
      stats.forEach((stat, index) => {
        springs[index].set(0);
      });
    }
  }, [isInView]); 

  
  useEffect(() => {
    stats.forEach((stat, index) => {
      springs[index].onChange((latest) => {
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.round(latest);
          return newCounts;
        });
      });
      springs[index].set(stat.value);
    });
  }, []);// Animation will re-trigger when isInView changes

  return (
    <motion.div 
      ref={ref}
      className="grid md:grid-cols-4 gap-8 text-center mb-16"
      variants={staggerContainer}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={scaleIn}
          whileHover={{ scale: 1.1 }}
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {counts[index]}{stat.suffix}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
} 