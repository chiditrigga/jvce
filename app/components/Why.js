import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import backImage from './image/back.png';
import ex from './image/ex.svg';
import pri from './image/pri.svg';
import gpss from './image/gps.svg';
import ser from './image/ser.svg';

const animations = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  // Create refs for the section and feature items
  const ref = React.useRef(null);
  const inView = useInView(ref, { margin: '-200px' });

  return (
    <section
      className="relative py-11 md:py-32 px-8 md:px-16 lg:px-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backImage.src})` }}
      ref={ref}
    >
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side - Text Content */}
        <motion.div
          className="lg:w-1/2 space-y-6 text-center lg:text-left"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animations}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#535558]">WHY CHOOSE US</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-[#121212]">
            YOUR PERSONALIZED MOVING SOLUTION
          </h3>
          <p className="text-[#121212] leading-relaxed">
            Our mission is to provide stress-free, efficient, and courteous moving and cleaning services, ensuring seamless transitions for both residential and commercial clients. Explore our services and see how we can make your next move effortless.
          </p>
          <button className="bg-[#FF0000] text-white py-3 px-8 font-semibold">
            Learn More
          </button>
        </motion.div>

        {/* Right Side - Features Grid */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Items */}
          {[{ icon: ex, title: "EXCEPTIONAL CUSTOMER SERVICE", description: "We prioritize customer satisfaction by offering friendly, professional service. Our team is dedicated to making your moving experience as stress-free as possible." },
            { icon: pri, title: "COMPETITIVE PRICING", description: "We offer competitive rates for our services without compromising on quality. Get a high-value service at a price that fits your budget." },
            { icon: gpss, title: "GPS TRACKING", description: "We provide real-time tracking of your belongings, giving you peace of mind during the moving process." },
            { icon: ser, title: "COMPREHENSIVE SERVICES", description: "In addition to moving, we provide cleaning services to ensure your new space is spotless and ready for you to move in." }]
            .map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animations}
                transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered effect
              >
                <div className="flex items-center space-x-2">
                  <Image src={feature.icon} alt={`${feature.title} Icon`} />
                  <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                </div>
                <p className="text-gray-600 mt-2">{feature.description}</p>
                <hr className="border-t border-gray-300 mt-4 w-full" />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
