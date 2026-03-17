import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import elodiePortrait from "@/assets/elodie-portrait.jpg";

const About = () => {
  return (
    <section id="a-propos" className="py-24 md:py-32 bg-accent/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
              <img
                src={elodiePortrait}
                alt="Élodie Valdès, praticienne en bien-être féminin"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Qui suis-je
            </p>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-2">
              Élodie Valdès
            </h2>
            <p className="text-primary font-medium mb-6">
              Praticienne en bien-être féminin
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Infirmière pendant plus de 10 ans, j'ai choisi de mettre mon expérience du soin
                au service du massage. Un jour, lors d'une séance, j'ai pris conscience que
                le toucher est un véritable langage : un moyen simple mais profond d'apaiser
                le corps et de calmer le mental.
              </p>
              <p>
                Depuis 2024, j'accueille les femmes dans mon espace à Saint-Privat,
                près d'Aubenas, pour leur offrir un vrai moment de reconnexion à soi.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-2 border-primary italic text-foreground/80 font-display text-lg">
              "Le toucher est un langage."
            </blockquote>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
            >
              En savoir plus sur mon parcours
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
