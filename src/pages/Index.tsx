import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reassurance from "@/components/Reassurance";
import Massages from "@/components/Massages";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import Quiz from "@/components/Quiz";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Reassurance />
      <Massages />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
      <FloatingCTAs />
      <Quiz />
    </div>
  );
};

export default Index;
