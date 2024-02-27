import React from "react";
import Team from "./TeamCards";
import Navbar from "../components/Navbar";
import Footer from "@/app/components/Footer";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <Team />
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default TeamPage;
