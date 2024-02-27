import React from "react";
import About from "./About";
import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default AboutPage;
