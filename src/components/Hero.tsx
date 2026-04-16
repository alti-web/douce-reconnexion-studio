import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-studio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Intérieur du cabinet Fondamental Massage à Saint-Privat"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/80 text-sm md:text-base font-medium tracking-widest uppercase mb-6"
        >
          Institut de massages pour femmes à Saint-Privat (Aubenas)
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6 text-balance"
        >
          Un espace propice au Lâcher-Prise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Pour les femmes en surcharge mentale et émotionnelle qui veulent vivre un relâchement profond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#massages"
            className="hidden lg:flex bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Trouver mon massage
          </a>
          <a
            href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Je réserve mon moment détente
          </a>
          {/* Quiz button - mobile & tablet only */}
          <button
            onClick={() => {
              const event = new CustomEvent('openQuiz');
              window.dispatchEvent(event);
            }}
            className="lg:hidden border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Quel massage pour moi ?
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
