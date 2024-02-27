import React from "react";
import Solutions from "./Solutions";
import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

const SolutionsPage = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-black">
        <Solutions />
      </section>
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default SolutionsPage;
