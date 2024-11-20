"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../container";

export default function HeroSection() {
  return (
    <motion.div
      className="mb-16 flex items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     <Container>
     <div className="flex  items-center">
     <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to <br /> <span className="text-white">GoldenLand Schools 🎓</span>
        </h1>
        <p className="text-xl text-gray-600 mx-auto">
          Empowering minds, shaping futures, and creating tomorrow's leaders
          through  quality education.
        </p>
      </div>
      <div>
        <Image
          src="/hero.svg"
          alt="Interactive mascot"
          width={700}
          height={500}
          priority
        />
      </div>
     </div>
     </Container>
    </motion.div>
  );
}
