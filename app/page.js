"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Move from "./components/Move";
import TeamSection from "./components/Team";
import What from "./components/What";
import Navbar from "./components/Nav";
import ClientsWeServe from "./components/Clients";
import WhyChooseUs from "./components/Why";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    <Navbar />
     <Hero />
    <WhyChooseUs />  
  
    
    <TeamSection />
    <What />
    <ClientsWeServe />
    
      <Move />

      <Footer />
    </>
  
  );
}
