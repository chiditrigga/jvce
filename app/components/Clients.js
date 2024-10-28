"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import homeownersImg from './image/homeowners.png';
import rentersImg from './image/renters.png';
import businessesImg from './image/businesses.png';
import propertyManagersImg from './image/property-managers.png';
import geo from './image/geo.png';

const ClientsWeServe = () => {
  return (
    <div>
      <div>
        <h2 className="md:text-5xl text-3xl my-7 font-bold text-[#121212] uppercase text-center md:my-24">
          Geographic Coverage
        </h2>
        <Image className="mx-auto" src={geo} alt="Geographic Coverage" />
      </div>

      <div className="flex flex-col items-center bg-white py-12 px-4">
        {/* Title Section */}
        <h2 className="md:text-5xl text-3xl font-bold text-[#535558] uppercase text-center">Clients We Serve</h2>
        <p className="text-2xl text-[#121212] font-semibold mt-2 mb-10 text-center">Our Services Cater To</p>

        {/* Cards Section */}
        <div className="max-w-6xl w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {[
              { img: homeownersImg, title: "Homeowners", desc: "Whether moving across town or to a new state, we help homeowners transition smoothly." },
              { img: rentersImg, title: "Renters", desc: "We assist renters with their moves, ensuring they leave their rental properties clean and in good condition." },
              { img: businessesImg, title: "Businesses", desc: "Our commercial moving services help businesses relocate with minimal disruption." },
              { img: propertyManagersImg, title: "Property Managers", desc: "We partner with property managers to offer seamless moving services for their tenants." }
            ].map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ margin:'-200px' }}
                  className="bg-[#F4F4F4] p-6 rounded-lg flex flex-col w-70 h-72"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#121212]">{card.title}</h3>
                  <div className="w-16 h-16 mb-4 relative">
                    <Image src={card.img} alt={card.title} layout="fill" objectFit="contain" />
                  </div>
                  <p className="text-[#121212] font-normal">{card.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsWeServe;
