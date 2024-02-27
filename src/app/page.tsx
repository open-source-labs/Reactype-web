import Content from "./components/TestCar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import TestmonialCards from "./components/TestimonialCards";
import Hero from "./components/Hero";
import Computer from "./components/Computer";
import StarCards from "./components/StarCards";

const Home = () => {
  return (
    <div className="relative z-0">
      <div className="bg-no-repeat bg-black bg-center section-border-gradient">
        <Hero />
        <div className="mt-10">
          <Computer isCompInMiddle={false} />
        </div>
      </div>
      <section className="bg-black border-t-4 section-border-gradient">
        <Content />
      </section>
      <section className="bg-black hero-bg border-t-4 section-border-gradient">
        <Features />
        <div className="mt-36">
          <TestmonialCards />
        </div>
      </section>
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
