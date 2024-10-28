import Image from 'next/image';
import Line from './image/line.png';
import logo from './image/logo.png';
import whatsapp from './image/whatsapp.svg';
import facebook from './image/facebook.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-medium py-10 text-center md:text-left relative z-10">
      <div className="container mx-auto px-6">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
          {/* Logo & Quote Button */}
          <div>
            <Image src={logo} alt="JVEC Movers Logo" />
            <p className="mb-3">
              Copyright © 2024<br />
              JVEC Movers. All Rights Reserved.
            </p>
            <p className="mb-5 text-[#6F7173]">Book Now - Schedule Your Move</p>
            <a
              href="#"
              className="bg-[#FF0000] text-white px-6 py-2  hover:bg-red-700 transition"
            >
              Free Quote
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#FF0000] text-lg font-bold mb-4">SERVICES</h3>
            <ul className="space-y-2 text-sm">
              <li className='text-[#6F7173]'>Residential Moving</li>
              <li>Complete Packing</li>
              <li>Loading and Unloading</li>
              <li>Transportation</li>
              <li>Unpacking Services</li>
              <li>Commercial Moving</li>
              <li>Office and Business Relocations</li>
              <li>Packing and Transportation</li>
              <li className='text-[#6F7173]'>Setup Services</li>
              <li>Delicate Items</li>
              <li>Heavy Furniture</li>
              <li>Cleaning Services</li>
              <li>Post-Move Cleaning</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FF0000] text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>SiteMaps</li>
            </ul>
          </div>

          {/* Contact Us & Follow Us */}
          <div>
            <h3 className="text-[#FF0000] text-lg font-bold mb-4">CONTACT US</h3>
            <p>12 Rev. Oguniyi Street, off Oba Akinjobi, Ikeja GRA, Lagos, Nigeria.</p>
            <p>
              Phone: <a href="tel:+23408140979054" className="text-[#FF0000]">+234-0814-097-9054</a>
            </p>
            <p>
              Email: <a href="mailto:hello@jvecmovers.com" className="text-[#FF0000]">hello@jvecmovers.com</a>
            </p>

            <h3 className="text-[#FF0000] text-lg font-bold mt-6 mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="flex items-center space-x-2">
                <Image src={whatsapp}  alt="WhatsApp" />
                <span>WhatsApp</span>
              </a>
              <a href="#" className="flex items-center space-x-2">
                <Image src={facebook}  alt="Facebook" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Line Image Directly Below Footer Text, Full Width, and Moved Up */}
      <Image
        src={Line}
        alt="Line"
        className="w-full 2xl:-mt-[45rem] xl:-mt-[35rem] lg:-mt-[25rem] md:-mt-[15rem] -mt-[5rem] z-0 relative"
      />
    </footer>
  );
};

export default Footer;
