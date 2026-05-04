import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const massages = [
  {
    title: "\u201CJe lâche-prise\u201D",
    hook: "Vivez bien plus qu'un simple moment de détente, une véritable reconnexion à soi.",
    duration: "60 / 75 / 90 min",
    price: "À partir de 60 €",
    link: "/massages#massages-corps",
  },
  {
    title: "Les massages visage",
    hook: "Une source de détente insoupçonnée.",
    duration: "30 / 45 / 60 min",
    price: "À partir de 35 €",
    link: "/massages#massages-visage",
  },
  {
    title: "Corps & Visage",
    hook: "Un voyage sensoriel complet pour vivre une véritable expérience bien-être.",
    duration: "1h30 à 2h",
    price: "À partir de 85 €",
    link: "/massages#massages-corps-visage",
  },
  {
    title: "Massages Duo",
    hook: "Partagez un moment de relaxation à deux, entre amies ou en couple.",
    duration: "60 / 75 / 90 min",
    price: "À partir de 65 € / pers",
    link: "/massages#massages-duo",
  },
];

const Massages = () => {
  return (
    <section id="massages" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          Nos prestations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-3xl md:text-4xl tracking-tight mb-16"
        >
          Trouvez le massage qu'il vous faut
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {massages.map((massage, i) => (
            <motion.div
              key={massage.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card/60 backdrop-blur-sm p-8 rounded-[2rem] border border-transparent hover:border-border transition-all duration-300 shadow-soft group"
            >
              <h3 className="text-xl tracking-tight mb-2">{massage.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {massage.hook}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm tabular-nums">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {massage.duration}
                  </span>
                  <span className="font-medium text-foreground">{massage.price}</span>
                </div>
                <Link
                  to={massage.link}
                  className="flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200"
                >
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="tel:0666428919"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Réserver ma séance
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Massages;
