import React from "react";
import TeamCards from "./TeamCards";
import Navbar from "../app/components/Navbar";
import Footer from "@/app/components/Footer";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <TeamCards />
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default TeamPage;
