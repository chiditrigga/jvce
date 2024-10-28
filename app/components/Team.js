"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Car from './image/car.png';
import Shelf from './image/shelf.png';
import Box from './image/box.png';

const TeamSection = () => {
  const teamData = [
    {
      title: 'Moving Techniques',
      image: Car,
      alt: 'Moving Techniques Illustration',
    },
{
      title: 'Safety Protocols',
      image: Shelf,
      alt: 'Safety Protocols Illustration',
    },
    {
      title: 'Customer Service Standards',
      image: Box,
      alt: 'Customer Service Standards Illustration',
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#FF0000]">OUR TEAM</h2>
        <p className="text-xl mt-4 font-semibold">HIGHLY TRAINED PROFESSIONALS IN</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 px-4 md:px-16">
        {teamData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="relative w-96 h-48 md:w-72 md:h-64 mx-auto">
              <Image 
                src={item.image} 
                alt={item.alt} 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <p className="mt-4 font-bold">{item.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 max-w-4xl mx-auto px-4">
        <p className="text-lg font-medium">
          Our team comprises highly trained professionals who can handle moves of all sizes, 
          from small apartments to large commercial relocations. Led by our founder and CEO, 
          <span className="text-[#FF0000] font-bold"> Joshua</span>, we are committed to excellence in every move. Our staff undergoes rigorous training in 
          moving techniques, safety protocols, and customer service standards to ensure your 
          belongings are handled with the utmost care and professionalism.
        </p>
        <button className="bg-[#FF0000] text-white px-6 py-2 mt-8 rounded-md hover:bg-red-600">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default TeamSection;
