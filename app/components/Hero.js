"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import moversImage from './image/moverss.png'; 
import { TypewriterEffectSmooth } from "./typewriter-effect";

export default function HeroSection() {
 
      const words = [
        {
          text: "Professional ",
          className: " text-white font-bold",
        },
        {
          text: "and",
          className: " text-white font-bold",
        },
        {
          text: " affordable.",
          className: " text-white font-bold",
        },
        {
          text: "Fully ",

          className: " text-white font-bold",
        },
        {
          text: "insured.",
          className: " text-white font-bold",
          
        },
      ];
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-[#282B2E] text-white my-0 md:py-0  md:px-0">
      {/* Left Text Column with Animation */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0 px-3 md:px-10 xl:px-16 my-10 md:my-0"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-[#FF0000]">MOVE WITH</span> <span>CONFIDENCE:</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-4">Smooth Moves Start Here</p>
        <p className="text-[#FFFFFF] text-base md:text-lg lg:text-xl mb-8">
        <TypewriterEffectSmooth  words={words}/>
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF0000] hover:bg-red-600 text-white font-semibold py-3 px-8"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Image Column with Animation and No Padding/Border Radius */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full h-full flex justify-center lg:justify-end overflow-hidden"
      >
        <Image
          src={moversImage}
          alt="Movers with boxes"
          layout="responsive"
          objectFit="cover" 
          className="rounded-none" 
        />
      </motion.div>
    </section>
  );
}
