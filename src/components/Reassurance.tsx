import { motion } from "framer-motion";
import { Sunset, Hand, Ear, Baby, HeartPulse } from "lucide-react";

const pillars = [
  {
    icon: Sunset,
    title: "Couper du quotidien",
    description:
      "Un espace cocon où le temps s'arrête. Vous laissez derrière vous la charge mentale, les obligations, le bruit du monde. Ici, il n'y a que vous.",
  },
  {
    icon: Hand,
    title: "Lâcher-prise",
    description:
      "Chaque massage est pensé pour vous permettre de relâcher profondément les tensions du corps et de l'esprit. Pas de protocole figé : je m'adapte à ce dont vous avez besoin, à chaque séance.",
  },
  {
    icon: Ear,
    title: "Écouter son corps",
    description:
      "Dans notre quotidien, on oublie souvent de s'écouter. Le massage est une invitation à vous reconnecter à vos sensations, à accueillir ce que votre corps exprime.",
  },
];

const specificAccompaniments = [
  {
    icon: Baby,
    title: "Vivre sa grossesse autrement",
    description:
      "Un massage prénatal enveloppant, spécialement adapté aux femmes enceintes dès le 4ᵉ mois. Un moment de douceur pour soulager les tensions liées à la grossesse et se reconnecter à son corps en pleine transformation.",
  },
  {
    icon: HeartPulse,
    title: "Soutenir sa fertilité",
    description:
      "Un massage doux et ciblé pour accompagner les femmes en parcours de conception, qu'il soit naturel ou médicalement assisté. Un soin pensé pour relâcher les tensions du ventre, apaiser le mental et créer un espace de reconnexion à soi.",
  },
];

const Reassurance = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          Pourquoi venir
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-3xl md:text-4xl tracking-tight mb-16 max-w-lg mx-auto text-balance"
        >
          Un espace où chaque détail est pensé pour votre bien-être
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-2">
            Accompagnements spécifiques
          </p>
          <h3 className="text-2xl md:text-3xl tracking-tight text-balance max-w-md mx-auto">
            Mais aussi…
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
          {specificAccompaniments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl mb-3 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reassurance;
