import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Camille U.",
    text: "Merci Elodie pour ce moment vraiment hors du temps. J'ai essayé pour la première fois le massage facial japonais dans son institut à Saint-Privat à côté d'Aubenas. C'est une expérience que je recommande fortement. 1h de pur plaisir. Ma peau est plus rebondie, mes traits détendus et mes petites ridules adoucies. Vivement la prochaine séance. Merci encore ✨️🙏",
    stars: 5,
  },
  {
    name: "Clémence R.",
    text: "Passer la porte du salon d'Élodie, c'est pénétrer dans une faille spatio-temporelle : on ne sait plus où on est, ni quelle heure il est ! Et on accepte alors d'être transportée dans une profonde relaxation.. J'ai reçu en cadeau un massage corps d'une heure qui m'a vraiment fait lâcher prise et un soin visage d'une demi heure qui est venu parfaire ce moment de détente intense ! Un massage avec Élodie c'est une expérience truffée de détails qui font toute la différence !",
    stars: 5,
  },
  {
    name: "C Yu.",
    text: "J'ai passé un merveilleux moment de lâcher prise entres les mains expertes d'Élodie. Elle est à l'écoute, bienveillante et d'une infinie douceur. Vous pouvez choisir en amont l'intensité du massage et les zones du corps à éviter ou au contraire, à favoriser. Le massage est personnalisé dans une ambiance propice à la déconnexion et à la détente. J'ai été tellement satisfaite que j'ai offert une séance de massage à une amie pour son anniversaire. Vous pouvez y aller les yeux fermés ! Personnellement, je sais que j'y retournerai dès que possible !",
    stars: 5,
  },
];

const swipeThreshold = 50;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((c) => {
      if (newDirection === 1) return c === testimonials.length - 1 ? 0 : c + 1;
      return c === 0 ? testimonials.length - 1 : c - 1;
    });
  }, []);

  const handleDragEnd = useCallback((_: any, info: PanInfo) => {
    if (info.offset.x < -swipeThreshold) {
      paginate(1);
    } else if (info.offset.x > swipeThreshold) {
      paginate(-1);
    }
  }, [paginate]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

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
          Vous en parlez mieux que quiconque
        </motion.h2>

        <div className="relative overflow-hidden touch-pan-y">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={handleDragEnd}
              className="text-center px-4 cursor-grab active:cursor-grabbing select-none"
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
              onClick={() => paginate(-1)}
              className="p-3 rounded-full border border-border hover:bg-accent transition-colors duration-200"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
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
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
                aria-label={`Voir l'avis ${i + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint on mobile */}
          <p className="text-center text-xs text-muted-foreground/60 mt-4 md:hidden">
            ← Glissez pour naviguer →
          </p>
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
