import { motion } from "framer-motion";
import { Clock, MessageCircle, Shirt, Sparkles, Heart, Phone, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const steps = [
  {
    icon: MessageCircle,
    title: "Échange avant la séance",
    description: "Un temps d'écoute pour comprendre vos besoins, vos attentes, vos éventuelles zones de tension ou d'inconfort.",
  },
  {
    icon: Shirt,
    title: "Installation",
    description: "Je sors de la pièce pour vous laisser l'intimité de vous changer et de vous installer confortablement.",
  },
  {
    icon: Sparkles,
    title: "Le massage",
    description: "Le cœur de la séance : un massage personnalisé, adapté à vos besoins, dans une ambiance propice à la déconnexion et à la détente.",
  },
  {
    icon: Heart,
    title: "Retour à soi & rhabillage",
    description: "Après le massage, prenez le temps de revenir à vous en douceur, de vous rhabiller et de vous recoiffer si besoin. Un peigne, du shampoing sec et un attache-bracelet sont mis à votre disposition. Quand vous êtes prête, vous me faites revenir dans la salle.",
  },
  {
    icon: MessageCircle,
    title: "Échange après la séance",
    description: "La séance se termine par un échange sur vos ressentis, vos préférences ou points d'amélioration si besoin, ainsi que d'éventuels conseils, autour d'une boisson fraîche.",
  },
];

const DeroulementPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/50">
        <div className="container text-center">
          <motion.h1 {...fadeIn} className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Comment se déroule une séance
          </motion.h1>
          <motion.p {...fadeIn} transition={{ duration: 0.4, delay: 0.1 }} className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Chaque rendez-vous est un moment complet, pensé pour votre confort de A à Z.
          </motion.p>
        </div>
      </section>

      {/* Inclus dans le tarif */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.div {...fadeIn} className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl tracking-tight">Tout est inclus dans le tarif</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
              Le temps d'échange avant et après la séance, le temps de déshabillage et rhabillage, ainsi que le temps nécessaire pour reprendre vos esprits et vivre un temps d'intégration de l'expérience vécue.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mt-1">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      Étape {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg tracking-tight mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Politique d'annulation */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-3xl">
          <motion.h2 {...fadeIn} className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-center">
            Réservation & Annulation
          </motion.h2>
          <motion.div {...fadeIn} className="h-px w-16 bg-primary mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg tracking-tight">Réservation</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Par téléphone ou en ligne via le site de réservation</span>
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg tracking-tight">Annulation / Report</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Toute séance peut être annulée ou reportée jusqu'à <strong className="text-foreground">48h avant</strong> le rendez-vous</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>En deçà de 48h, la séance ne pourra être ni annulée ni reportée</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="text-center mt-12">
            <a
              href="tel:0666428919"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Réserver ma séance
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeroulementPage;
