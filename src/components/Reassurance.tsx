import { motion } from "framer-motion";
import { Shield, Sparkles, Heart } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "100 % Féminin",
    description: "Un cocon pensé pour vous, où intimité et bienveillance sont les maîtres-mots.",
  },
  {
    icon: Sparkles,
    title: "Sur-mesure",
    description: "Chaque massage s'adapte à vos besoins, vos envies et vos zones de tension.",
  },
  {
    icon: Heart,
    title: "Expertise Soin",
    description: "Ex-infirmière avec plus de 10 ans dans le soin, Élodie allie technique et douceur.",
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
          Pourquoi Fondamental Massage
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

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
      </div>
    </section>
  );
};

export default Reassurance;
