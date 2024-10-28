import React, { useState } from 'react';
import Image from 'next/image';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import logo from './image/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#282B2E] text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        
        <div className="flex items-center">
          <Image src={logo} alt="JVEC Movers Logo"  />
           {/* Desktop Navigation */}
          <nav className="hidden text-[#9C9D9F] md:flex items-center space-x-6 ms-20">
          <a href="#" className="hover:text-[#FFFFFF]">Home</a>
          <a href="#" className="hover:text-[#FFFFFF]">About</a>
          <a href="#" className="hover:text-[#FFFFFF]">Services</a>
          <a href="#" className="hover:text-[#FFFFFF]">More</a>
          <a href="#" className="hover:text-[#FFFFFF]">Contact</a>
        
          
        </nav>
        </div>

        
       
        <nav className="hidden md:flex items-center space-x-6">
        <div className="flex items-center space-x-2">
            <FiPhone />
            <span>0814-097-9054</span>
          </div>
          <button className="bg-[#FF0000] py-2 px-4 rounded hover:bg-red-700">Free Quote</button>
        </nav>

        {/* Mobile Menu Button and Free Quote */}
        <div className="md:hidden flex items-center space-x-4 bg-[#282B2E]">
          <button className="bg-[#FF0000] py-2 px-3 rounded hover:bg-red-700">
            Free Quote
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#282B2E] text-white p-4 space-y-4">
          <a href="#" className="block text-lg hover:text-red-500">Home</a>
          <a href="#" className="block text-lg hover:text-red-500">About</a>
          <a href="#" className="block text-lg hover:text-red-500">Services</a>
          <a href="#" className="block text-lg hover:text-red-500">More</a>
          <a href="#" className="block text-lg hover:text-red-500">Contact</a>
          <div className="flex items-center space-x-2 mt-4">
            <FiPhone />
            <span>0814-097-9054</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
