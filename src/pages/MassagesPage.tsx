import { motion } from "framer-motion";
import { Clock, ArrowRight, Phone, Baby, Heart, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const MassagesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/50">
        <div className="container text-center">
          <motion.h1 {...fadeIn} className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Nos massages
          </motion.h1>
          <motion.p {...fadeIn} transition={{ duration: 0.4, delay: 0.1 }} className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Chaque massage est personnalisé pour répondre à vos besoins. Découvrez l'ensemble de nos prestations.
          </motion.p>
        </div>
      </section>

      {/* Massages du Corps */}
      <section id="massages-corps" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeIn} className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-center">
            Massages du Corps
          </motion.h2>
          <motion.div {...fadeIn} className="h-px w-16 bg-primary mx-auto mb-12" />

          {/* Je lâche-prise */}
          <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10 mb-8">
            <h3 className="font-display text-2xl tracking-tight mb-2">"Je lâche-prise"</h3>
            <p className="text-primary font-medium text-sm mb-4 italic">
              Vivez bien plus qu'un simple moment de détente, une véritable reconnexion à soi.
            </p>
            <div className="space-y-3 text-muted-foreground leading-relaxed mb-6">
              <p>
                Ce massage vous transporte vers l'apaisement et le lâcher-prise par des manœuvres enveloppantes, une variation de rythme et d'intensité.
              </p>
              <p>
                Peu à peu, vos tensions s'apaisent, vos épaules se relâchent, le stress diminue, votre respiration devient plus ample, le mental se met sur pause, vous vous abandonnez totalement à l'instant présent et au calme intérieur.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-accent/60 px-4 py-2 rounded-xl text-sm">
                <Clock className="w-4 h-4 text-primary" />
                60 / 75 / 90 min
              </div>
              <div className="font-medium text-foreground bg-accent/60 px-4 py-2 rounded-xl text-sm">
                À partir de 60 €
              </div>
            </div>

            <a
              href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              Réserver cette prestation
            </a>

            {/* Abonnements */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm font-medium mb-2">Ancrer votre rituel bien-être :</p>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                Engagez-vous sur un rythme régulier d'un massage par mois et bénéficiez d'un tarif préférentiel. L'abonnement vous garantit un créneau privilégié chaque mois.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-accent/40 rounded-xl p-4 text-sm">
                  <p className="font-medium">Abonnement 3 mois</p>
                  <p className="text-muted-foreground">1 massage d'1h/mois — <span className="text-primary font-medium">55 €/séance</span></p>
                </div>
                <div className="bg-accent/40 rounded-xl p-4 text-sm">
                  <p className="font-medium">Abonnement 6 mois</p>
                  <p className="text-muted-foreground">1 massage d'1h/mois — <span className="text-primary font-medium">50 €/séance</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Massages Spécifiques */}
      <section id="massages-specifiques" className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-4xl">
          <motion.div {...fadeIn} className="flex items-center gap-3 justify-center mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              Massages Spécifiques
            </h2>
          </motion.div>
          <motion.div {...fadeIn} className="h-px w-16 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Massage Fertilité */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl tracking-tight">Massage Énergétique Pré-conception</h3>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> 60 min
                </span>
                <span className="text-sm font-medium">60 €</span>
              </div>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-4">
                <p>Vous rencontrez des difficultés à concevoir ?</p>
                <p>
                  Ce massage est une invitation à ralentir, à vous recentrer et à relâcher les tensions accumulées. Il vous aide à revenir pleinement dans votre corps et accueillir votre projet de maternité avec plus de sérénité.
                </p>
                <p>
                  Au fil du massage, le mental s'apaise, la respiration devient plus profonde, les émotions se déposent. Vous vous sentez apaisée, plus ancrée, plus alignée, enveloppée d'un sentiment d'équilibre et de calme intérieur.
                </p>
                <p>
                  Il prépare le corps et l'esprit à accueillir un projet bébé, harmonise et relance l'énergie du bassin et invite à une reconnexion à votre féminin, votre ventre et votre utérus.
                </p>
              </div>
              <p className="text-xs text-muted-foreground italic mb-6">
                Se réalise en première partie de cycle menstruel : juste après les règles et/ou juste avant l'ovulation / la date d'IA ou transfert d'embryon. Ce massage ne remplace pas un suivi médical mais vient en complément.
              </p>
              <a
                href="tel:0666428919"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
              >
                Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Massage Femme Enceinte */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <div className="flex items-center gap-2 mb-3">
                <Baby className="w-5 h-5 text-primary" />
                <h3 className="font-display text-xl tracking-tight">Massage Femme Enceinte</h3>
              </div>
              <p className="text-sm font-medium text-primary mb-4">À partir de 16SA</p>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-6">
                <p>
                  La grossesse est un chamboulement dans la vie et le corps d'une femme et s'accompagne au fil des mois de fatigue, d'inconfort et de tensions.
                </p>
                <p>
                  Ce massage vous offre un véritable moment de détente et de relâchement pour respirer, s'offrir un moment plein de douceur, enveloppant et bienveillant, en connexion avec votre bébé.
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-2.5 text-sm">
                  <span className="text-muted-foreground">Focus Dos (chaise de massage)</span>
                  <span className="font-medium">30 min — 35 €</span>
                </div>
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-2.5 text-sm">
                  <span className="text-muted-foreground">Corps entier</span>
                  <span className="font-medium">60 min — 65 €</span>
                </div>
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-2.5 text-sm">
                  <span className="text-muted-foreground">Corps entier</span>
                  <span className="font-medium">75 min — 80 €</span>
                </div>
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-2.5 text-sm">
                  <span className="text-muted-foreground">Corps entier</span>
                  <span className="font-medium">90 min — 90 €</span>
                </div>
              </div>

              <a
                href="https://www.fresha.com/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200"
              >
                Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Massages du Visage */}
      <section id="massages-visage" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeIn} className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-center">
            Massages du Visage
          </motion.h2>
          <motion.div {...fadeIn} className="h-px w-16 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Doux Éclat */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <h3 className="font-display text-xl tracking-tight mb-2">Doux Éclat</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Une parenthèse de 30 minutes pour prendre une pause tout en ravivant l'éclat naturel de votre peau.
              </p>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 30 min</span>
                <span className="font-medium">35 €</span>
              </div>
              <a href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200">
                Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Shinzu The Face */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <h3 className="font-display text-xl tracking-tight mb-2">Shinzu The Face</h3>
              <p className="text-primary text-sm italic mb-4">Une vague de lenteur qui enveloppe bien plus que le visage.</p>
              <div className="space-y-2 text-muted-foreground text-sm leading-relaxed mb-4">
                <p>
                  La baguette de Kansa glisse du crâne vers le dos, puis sur le visage par des mouvements lents et circulaires. Elle diffuse d'abord une sensation de fraîcheur, puis délicatement réchauffée, elle offre un effet infiniment apaisant.
                </p>
                <p>
                  Peu à peu, comme si tout devenait plus silencieux à l'intérieur, vous décrochez et vous vous laissez porter dans un véritable lâcher-prise.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 45/60 min</span>
                <span className="font-medium">À partir de 50 €</span>
              </div>
              <a href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200">
                Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Massage Facial Japonais */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8">
              <h3 className="font-display text-xl tracking-tight mb-2">Massage Facial Japonais</h3>
              <p className="text-primary text-sm italic mb-4">Quand la relaxation se lit sur votre visage.</p>
              <div className="space-y-2 text-muted-foreground text-sm leading-relaxed mb-4">
                <p>
                  Inspiré du Kobido, art traditionnel japonais, ce massage alterne gestes légers, rapides, profonds et lents pour détendre les muscles du visage et libérer les tensions accumulées. Peu à peu le visage se relâche et une vague de détente se diffuse dans tout le corps.
                </p>
                <p>
                  La peau est repulpée, les traits adoucis, le teint lumineux et le visage visiblement reposé.
                </p>
                <p className="text-xs italic">Proposé en cure à tarif préférentiel pour des résultats visibles et durables.</p>
              </div>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 60 min</span>
                <span className="font-medium">65 €</span>
              </div>
              <a href="https://www.fresha.com/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&oiid=sv:25701901&share=true&pId=2663592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-200">
                Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Massages Corps & Visage */}
      <section id="massages-corps-visage" className="py-20 md:py-28 bg-secondary/50">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeIn} className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-center">
            Massages Corps & Visage
          </motion.h2>
          <motion.div {...fadeIn} className="h-px w-16 bg-primary mx-auto mb-12" />

          <div className="space-y-8">
            {/* Je LP & Shinzu */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10">
              <h3 className="font-display text-xl tracking-tight mb-2">"Je lâche-prise" & Shinzu The Face</h3>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 1h45</span>
                <span className="text-sm font-medium">100 €</span>
              </div>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-4">
                <p>
                  Une invitation à relâcher, à se laisser porter par la synergie des manœuvres manuelles enveloppantes et la sensation unique de la baguette de Kansa qui glisse et se réchauffe délicatement au contact de la peau.
                </p>
                <p>
                  Sur le visage, l'huile de coco-mangue enrichie d'huile essentielle d'hélichryse, vous enveloppe d'une douceur réconfortante, invitant le corps et le mental à s'abandonner profondément, dans un lâcher-prise total.
                </p>
              </div>
              <p className="text-primary text-sm italic mb-6">Un voyage sensoriel pour se déposer totalement.</p>
              <a href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                Réserver cette prestation
              </a>
            </motion.div>

            {/* Je LP & Doux Éclat */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10">
              <h3 className="font-display text-xl tracking-tight mb-2">"Je lâche-prise" & Doux Éclat</h3>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 1h30</span>
                <span className="text-sm font-medium">85 €</span>
              </div>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-4">
                <p>
                  Bercée par le rythme des mouvements enveloppants, le stress diminue, les tensions se dissipent et peu à peu le corps se sent en sécurité, en confiance. Puis vient le visage… et tout bascule : grâce à des manœuvres manuelles et du GuaSha, les mâchoires se desserrent, le mental ralentit sa course, et un calme profond vous envahit, laissant place à une détente totale.
                </p>
              </div>
              <p className="text-primary text-sm italic mb-6">Vivez un moment suspendu de lâcher-prise.</p>
              <a href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                Réserver cette prestation
              </a>
            </motion.div>

            {/* Je LP & Facial Japonais */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10">
              <h3 className="font-display text-xl tracking-tight mb-2">"Je lâche-prise" & Facial Japonais</h3>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 2h</span>
                <span className="text-sm font-medium">125 €</span>
              </div>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-4">
                <p className="italic font-medium text-foreground/80">Un véritable rituel détente</p>
                <p>
                  Les gestes du massage corps vous enveloppent et vous bercent de réconfort, vous invitant à l'abandon. Puis sur le visage, la fluidité des mouvements précis, l'alternance entre douceur et profondeur vous transportent vers un lâcher-prise intense.
                </p>
                <p>
                  Vous ressortez profondément apaisée, le visage lumineux, repulpé, les traits adoucis avec une sensation d'apaisement, de légèreté et de bien-être du corps et de l'esprit.
                </p>
              </div>
              <p className="text-primary text-sm italic mb-6">Plus qu'un massage, un véritable rituel bien-être.</p>
              <a href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                Réserver cette prestation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Massages Duo */}
      <section id="massages-duo" className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.h2 {...fadeIn} className="font-display text-3xl md:text-4xl tracking-tight mb-4 text-center">
            Massages Duo
          </motion.h2>
          <motion.p {...fadeIn} className="text-center text-muted-foreground mb-4 max-w-xl mx-auto">
            Partagez une expérience bien-être relaxante en couple, entre amies ou en famille.
          </motion.p>
          <motion.div {...fadeIn} className="flex flex-col items-center gap-2 text-sm mb-12">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" />
              Réservation uniquement par téléphone
            </div>
            <p className="text-muted-foreground text-xs italic">Moyens de paiement en duo : espèces ou chèque</p>
          </motion.div>

          <div className="space-y-8">
            {/* Duo - Je LP */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10">
              <h3 className="font-display text-xl tracking-tight mb-2">"Je lâche-prise" — Duo</h3>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-6">
                <p>
                  Ce massage vous transporte vers l'apaisement et le lâcher-prise par des manœuvres enveloppantes, une variation de rythme et d'intensité.
                </p>
                <p>
                  Peu à peu, vos tensions s'apaisent, vos épaules se relâchent, le stress diminue, votre respiration devient plus ample, le mental se met sur pause, vous vous abandonnez totalement à l'instant présent et au calme intérieur.
                </p>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-3 text-sm">
                  <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-muted-foreground" /> 60 min</span>
                  <span className="font-medium">65 € / personne</span>
                </div>
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-3 text-sm">
                  <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-muted-foreground" /> 75 min</span>
                  <span className="font-medium">75 € / personne</span>
                </div>
                <div className="flex justify-between items-center bg-accent/40 rounded-xl px-4 py-3 text-sm">
                  <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-muted-foreground" /> 90 min</span>
                  <span className="font-medium">90 € / personne</span>
                </div>
              </div>
              <a href="tel:0666428919" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                <Phone className="w-4 h-4" /> Réserver par téléphone
              </a>
            </motion.div>

            {/* Duo - Doux Éclat */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10">
              <h3 className="font-display text-xl tracking-tight mb-2">Doux Éclat — Duo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Une parenthèse de 30 minutes pour prendre une pause tout en ravivant l'éclat naturel de votre peau.
              </p>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 30 min</span>
                <span className="font-medium">35 € / personne</span>
              </div>
              <a href="tel:0666428919" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200">
                <Phone className="w-4 h-4" /> Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Duo - Je LP & Doux Éclat */}
            <motion.div {...fadeIn} className="bg-card/60 backdrop-blur-sm rounded-[2rem] border border-border p-8 md:p-10">
              <h3 className="font-display text-xl tracking-tight mb-2">"Je lâche-prise" & Doux Éclat — Duo</h3>
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-4">
                <p>
                  Bercée par le rythme des mouvements enveloppants, le stress diminue, les tensions se dissipent et peu à peu le corps se sent en sécurité, en confiance. Puis vient le visage… et tout bascule : grâce à des manœuvres manuelles et du GuaSha, les mâchoires se desserrent, le mental ralentit sa course, et un calme profond vous envahit, laissant place à une détente totale.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground"><Clock className="w-3.5 h-3.5" /> 90 min</span>
                <span className="font-medium">90 € / personne</span>
              </div>
              <a href="tel:0666428919" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-200">
                <Phone className="w-4 h-4" /> Réserver <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.p {...fadeIn} className="text-center text-muted-foreground text-sm mt-8 italic">
            En collaboration avec Chrystelle de A Corps D'âme — uniquement quelques créneaux par mois.
          </motion.p>
        </div>
      </section>

      {/* Cartes Cadeau */}
      <section className="py-16 md:py-20 bg-primary/10">
        <div className="container text-center max-w-xl">
          <motion.h2 {...fadeIn} className="font-display text-2xl md:text-3xl tracking-tight mb-4">
            Offrez un moment de détente
          </motion.h2>
          <motion.p {...fadeIn} className="text-muted-foreground mb-6">
            Faites plaisir à ceux que vous aimez avec une carte cadeau massage. E-carte cadeau également disponible 24h/24 !
          </motion.p>
          <motion.a
            {...fadeIn}
            href="https://fondamental-massage.sumupstore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Demander une carte cadeau
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MassagesPage;
