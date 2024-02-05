import Content from "./components/Content";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Team from "./pages/Team";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div id="smooth-content" className="relative z-0">
      <div className="bg-grid-slate-900/[0.04] bg-no-repeat bg-center border-b-4 bg-[#f1efea] section-border-gradient">
        <Hero />
      </div>
      <section className="blue-gradient-bg border-t-4 section-border-gradient">
        <Content />
      </section>
      <section className="bg-[#f1efea] border-t-4 section-border-gradient">
        <Features />
        <Testimonial />
      </section>
      <section className="bg-[#f1efea] border-t-4 section-border-gradient">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
