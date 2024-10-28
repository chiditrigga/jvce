import Image from 'next/image';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import moversImage from './image/wha.jpg'; 

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="relative flex items-center justify-center w-full h-[80vh] bg-gray-100 top-40-small md:w-3/4 lg:w-2/3">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-10">
          <Image
            src={moversImage}
            alt="Movers"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="opacity-90"
          />
        </div>

        {/* Animated Text Container */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start invisible and to the right
          whileInView={{ opacity: 1, x: 0 }}    // Fade in and slide to position
          transition={{ duration: 0.8, ease: 'easeOut' }} // Smooth transition
          className="relative z-20 p-6 bg-[#3B3B3B] text-white w-11/12 text-center md:w-3/4 lg:w-[85%] max-w-2xl bottom-40-small md:right-[-35%]"
        >
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            WHAT WE REPRESENT
          </h1>
          <h2 className="text-lg font-semibold md:text-xl lg:text-2xl mt-2">
            STRESS-FREE MOVES, PERFECT CLEAN
          </h2>
          <p className="mt-4 text-sm md:text-base lg:text-lg">
            JVEC MOVERS is dedicated to providing top-notch moving and cleaning services. 
            Based in Johnson City, Tennessee, we cater to both local and long-distance relocations, 
            including moves to Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and 
            Washington DC. We specialize in making your moving experience as smooth and stress-free 
            as possible, from packing and transportation to cleaning your new home or office.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }} // Slight scale-up on hover
            className="mt-6 px-6 py-2 bg-[#FF0000] text-white font-semibold hover:bg-red-700 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
