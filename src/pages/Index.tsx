import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reassurance from "@/components/Reassurance";
import Massages from "@/components/Massages";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import Quiz from "@/components/Quiz";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Reassurance />
      <Massages />
      <Testimonials />
      <About />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTAs />
      <Quiz />
    </div>
  );
};

export default Index;
