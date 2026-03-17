import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Camille U.",
    text: "Merci Élodie pour ce moment vraiment hors du temps. J'ai essayé pour la première fois le massage facial japonais dans son institut à Saint-Privat. C'est une expérience que je recommande fortement. 1h de pur plaisir. Ma peau est plus rebondie, mes traits détendus et mes petites ridules adoucies.",
    stars: 5,
  },
  {
    name: "Clémence R.",
    text: "Passer la porte du salon d'Élodie, c'est pénétrer dans une faille spatio-temporelle : on ne sait plus où on est, ni quelle heure il est ! Un massage avec Élodie c'est une expérience truffée de détails qui font toute la différence !",
    stars: 5,
  },
  {
    name: "C Yu.",
    text: "J'ai passé un merveilleux moment de lâcher prise entre les mains expertes d'Élodie. Elle est à l'écoute, bienveillante et d'une infinie douceur. Le massage est personnalisé dans une ambiance propice à la déconnexion et à la détente. Vous pouvez y aller les yeux fermés !",
    stars: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="temoignages" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          Témoignages
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-3xl md:text-4xl tracking-tight mb-16"
        >
          Elles en parlent mieux que quiconque
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center px-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 italic font-display">
                "{testimonials[current].text}"
              </blockquote>

              <p className="text-sm font-medium text-muted-foreground">
                — {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:bg-accent transition-colors duration-200"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:bg-accent transition-colors duration-200"
              aria-label="Avis suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Voir l'avis ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=fondamental+massage+saint+privat+avis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Voir tous les avis Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
