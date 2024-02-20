"use client";

import Content from "./components/TestCar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import TestBackground from "./components/TestBackground";
import { heroBackgroundImage } from "./assets";
import TestCar from "./components/TestCar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="smooth-content" className="relative z-0">
      <div className="bg-no-repeat bg-center section-border-gradient">
        <TestBackground />
        {/* <Hero /> */}
      </div>

      <section className="bg-black border-t-4 section-border-gradient">
        <Content />
      </section>
      <section className="bg-black hero-bg border-t-4 section-border-gradient">
        <Features />
        <Testimonial />
      </section>
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
