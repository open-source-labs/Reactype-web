import React from "react";
import TeamCards from "./TeamCards";
import Navbar from "../app/components/Navbar";
import Footer from "@/app/components/Footer";

const TeamPage = () => {
  return (
    <div>
      <Navbar />
      <TeamCards />
      <section className="bg-[#f1efea] border-t-4 section-border-gradient">
        <Footer />
      </section>
    </div>
  );
};

export default TeamPage;
