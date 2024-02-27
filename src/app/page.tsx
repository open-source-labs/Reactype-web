import Content from "./components/TestCar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Computer from "./components/Computer";
import GoogleGeminiEffectDemo from "./components/MatrixBackground";
import TestmonialCards from "./components/TestimonialCards";

const Home = () => {
  return (
    <div className="relative z-0">
      <div className="bg-no-repeat bg-center section-border-gradient">
        <GoogleGeminiEffectDemo />
      </div>
      <section className="bg-black border-t-4 section-border-gradient">
        <Content />
      </section>
      <section className="bg-black hero-bg border-t-4 section-border-gradient">
        <Features />
        <Computer isCompInMiddle={false} />
        <TestmonialCards />
      </section>
      <section className="bg-[#252526] border-t-4 section-border-gradient w-full h-[50vh] pt-20">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
