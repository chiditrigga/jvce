"use client"
import Image from 'next/image';
import Moveimage from './image/move.png';
import Play from './image/play.png';
import Ios from './image/ios.png';
import Movers from './image/movers.png';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
    const blogPosts = [
        {
          date: 'July 10, 2024',
          title: 'Settling into a new home: Strategies for an effortless movement, hassle-free',
          image: Movers, // Replace with the correct path to your image
        },
        {
            date: 'July 10, 2024',
            title: 'Settling into a new home: Strategies for an effortless movement, hassle-free',
            image: Movers, // Replace with the correct path to your image
          },
          {
            date: 'July 10, 2024',
            title: 'Settling into a new home: Strategies for an effortless movement, hassle-free',
            image: Movers, // Replace with the correct path to your image
          },
      ];


    
  return (
    <>


<section className="bg-[#282B2E] text-white py-16 ">
      <div className="text-center md:max-w-[70vw] xl:max-w-[45vw] md:mx-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-[#EAEAEA]">THE SMOOTH MOVE BLOG</h2>
        <p className="md:text-2xl text-xl mt-4 font-semibold">MOVING AND RELOCATION TIPS AND EVERYTHING IN BETWEEN</p>
        <p className="mt-6 md:text-xl text-lg px-5 font-normal">Check out our blog for helpful tips and guides on making your move as smooth as possible/. Topics include packing tips, moving checklists, and more</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 md:px-5 xl:px-16">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
           
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white text-black rounded-lg overflow-hidden border border-[#535558]"
          >
            <div className="relative w-full h-48">
              <Image 
                src={post.image} 
                alt={post.title} 
                layout="fill" 
                objectFit="cover" 
                quality={75} // Adjust quality as needed
              />
            </div>
            <div className="p-6 bg-[#282B2E]">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h3 className="font-bold text-lg mt-2 text-white">{post.title}</h3>
              <button className="bg-[#FF0000] text-white px-4 py-2 mt-4  hover:bg-red-600">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>







{/* ready */}


<div className="bg-[#101010] text-center md:text-start text-white md:grid md:grid-cols-2 xl:grid-cols-3 px-4 py-28 md:px-8 xl:px-16">
  {/* Left Section */}
  <div className="xl:col-span-1 md:col-span-1 flex flex-col justify-center">
    {/* Main Heading */}
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="md:text-5xl text-3xl font-bold"
    >
      Ready for a Stressless Move? Get your Free Quote
    </motion.h1>

    {/* Description text below the heading */}
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-4"
    >
      <p className="text-lg text-[#DEDEDE] font-medium">
        Fill out our online booking form to schedule your move with JVEC MOVERS. Provide details about your move, and we'll get back to you with a customized plan and quote.
      </p>
    </motion.div>
  </div>

  {/* Right Section */}
  <motion.div
  className="xl:col-span-2 md:col-span-1 flex justify-between items-center md:ps-24 xl:ps-28 relative"
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  {/* Text Section */}
  <div className="text-[#FF3333] xl:text-7xl md:text-5xl text-4xl font-bold mt-14 mb-5 flex items-center">
    <span className="pb-2">Free Quote</span>
  </div>

  {/* Arrow Icon */}
  <div className="flex items-center mt-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="xl:w-28 md:w-16 md:h-20 w-10 h-16 text-[#FF3333]"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>

  {/* Border line below both text and arrow */}
  <div className="absolute bottom-0 left-0 w-full md:w-[80%] xl:w-[90%] h-[1px] md:mx-20 xl:mx-28  bg-red-500"></div>
</motion.div>



</div>







 {/* app */}



  <section className="bg-black text-white flex flex-col md:flex-row justify-between items-center p-4 md:px-20 py-9">
  <h2 className="text-2xl md:text-3xl font-semibold  mb-4">DOWNLOAD THE APP</h2>
  <div className="flex flex-col gap-y-7 md:gap-y-0 md:flex-row justify-center items-center bg-black">
  <a
    href="#"
    className="flex items-center bg-black border border-white text-white w-48 px-4 py-2 rounded-lg hover:bg-gray-800"
  >
    <Image
      src={Ios}
      alt="App Store"
      className="md:mr-2"
    />
    <div className='ms-2'>
      <p className="text-xs">Download on the</p>
      <p className="text-sm font-semibold">App Store</p>
    </div>
  </a>

  <a
    href="#"
    className="flex items-center bg-black md:ms-4 text-white border border-white w-48 px-4 py-2 rounded-lg hover:bg-gray-800"
  >
    <Image
      src={Play}
      alt="Google Play"
      className="md:mr-2"
    />
    <div className='ms-2'>
      <p className="text-xs">GET IT ON</p>
      <p className="text-sm font-semibold">Google Play</p>
    </div>
  </a>
</div>

</section>





{/* we move */}

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col  md:flex-row items-center justify-between text-black my-20 p-6 md:p-14"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col text-center md:text-left max-w-4xl gap-y-5 md:gap-y-0"
      >
        <h1 className="text-2xl md:text-5xl text-[#535558] font-bold">WE MOVE AND CLEAN</h1>
        <p className="mt-2 text-sm md:text-3xl max-w-4xl text-[#121212] font-semibold">
          POWERED BY MD ENVIRONMENTAL SERVICES | PROFESSIONAL CLEANING SERVICES
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="mt-4 bg-[#FF0000] w-fit text-white py-2 px-7 mx-auto md:mx-0"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 md:mt-0"
      >
        <Image src={Moveimage} alt="Company Logo"  />
      </motion.div>
    </motion.div>
    </>
  );
}
