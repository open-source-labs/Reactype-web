import Content from "./components/Content";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import TestBackground from "./components/TestBackground";
import { heroBackgroundImage } from "./assets";

const Home = () => {
  return (
    <div id="smooth-content" className="relative z-0">
      <div className="bg-no-repeat bg-center section-border-gradient">
        <TestBackground />
        {/* <Hero /> */}
      </div>
      <section className=" border-t-4 section-border-gradient">
        <Content />
      </section>
      <section
        className="hero-bg border-t-white"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        <Features />
        <Testimonial />
      </section>
      <section className="bg-[#f1efea] border-t-4 ">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
