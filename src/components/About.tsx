import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import elodiePortrait from "@/assets/elodie-portrait.jpg";
import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";
import studio4 from "@/assets/studio-4.jpg";
import studio5 from "@/assets/studio-5.jpg";

const studioPhotos = [
  { src: studio1, alt: "Espace de massage chaleureux et apaisant" },
  { src: studio2, alt: "Cabine de soin avec ambiance lumineuse douce" },
  { src: studio3, alt: "Détail décoration de l'institut Fondamental Massage" },
  { src: studio4, alt: "Coin détente du cabinet de massage à Saint-Privat" },
  { src: studio5, alt: "Ambiance cocon de l'espace bien-être" },
];

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
                D'abord infirmière pendant plus de dix ans, j'ai exercé en hôpital, en libéral à Marseille, puis en laboratoire d'analyses médicales en Ardèche.
              </p>
              <p>
                En 2022, en quête d'une approche plus respectueuse du contact humain et du bien-être dans mon travail, j'ai exercé en tant qu'auxiliaire de vie pendant 3 ans.
              </p>
              <p>
                Lors d'un massage, j'ai pris conscience que depuis plusieurs années, à toujours être dans le "devoir faire", je m'étais totalement coupée de mes ressentis. Ce moment m'a permis de réaliser combien le toucher est un véritable langage : un moyen simple mais profond d'apaiser le corps, calmer le mental et d'apporter réconfort et reconnexion à soi.
              </p>
              <p>
                Animée par l'envie d'accompagner les femmes de cette façon, j'ai suivi depuis fin 2023 une dizaine de formations certifiantes auprès de professionnel(le)s aussi expert(e)s que passionné(e)s.
              </p>
              <p>
                Je vous accueille depuis juin 2024 dans mon espace bien-être pensé pour votre détente, au sein d'un local partagé, sur la commune de Saint-Privat (à quelques minutes d'Aubenas) en Ardèche.
              </p>
            </div>

            <blockquote className="mt-8 pl-6 border-l-2 border-primary italic text-foreground/80 font-display text-lg">
              "Le massage est pour moi une autre manière de prendre soin et laisser s'exprimer ma sensibilité et mon empathie."
            </blockquote>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
            >
              Me contacter
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
