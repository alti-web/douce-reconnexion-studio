import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels types de massage propose Fondamental Massage près d'Aubenas ?",
    answer:
      "Fondamental Massage offre un accompagnement vers le bien-être au travers de divers massages pour le corps et/ou le visage dans un espace dédié aux femmes, alliant détente et douceur. Chaque massage est personnalisé pour répondre à vos attentes et selon vos besoins afin de favoriser relâchement et harmonie.",
  },
  {
    question: "Où se situe Fondamental Massage par rapport à Aubenas ?",
    answer:
      "Le cabinet Fondamental Massage vous accueille au 9 avenue de la Soie à Saint-Privat (07200), idéalement situé à seulement 5 minutes du centre-ville d'Aubenas (Ardèche). Un parking gratuit est à votre disposition pour faciliter votre venue dans ce lieu pensé pour votre détente.",
  },
  {
    question: "Les massages sont-ils réservés à un public spécifique ?",
    answer:
      "Oui, Fondamental Massage est un espace bien-être 100 % féminin, sauf en cas de massages duo dans certaines conditions. Cette approche garantit un environnement sécurisant et respectueux.",
  },
  {
    question: "Proposez-vous des massages en duo pour partager un moment de détente ?",
    answer:
      "Oui, Fondamental Massage offre la possibilité de massage en duo, idéal pour un moment de relaxation à deux, entre amies ou en couple. C'est une belle façon de partager une expérience bien-être au sein d'un espace propice pour vous détendre.",
  },
  {
    question: "Faut-il venir démaquillée ?",
    answer:
      "Oui, ou prévoir de quoi se démaquiller sur place. Il y a un petit point d'eau et un miroir dans les toilettes si besoin. Dans la pièce de massage, un miroir et une petite poubelle sont également à votre disposition.",
  },
  {
    question: "À quelle fréquence est-il recommandé de recevoir un massage ?",
    answer:
      "Idéalement, une à deux fois par mois, que ce soit pour le corps ou le visage. C'est dans cette logique que j'ai créé le rituel bien-être, qui propose un massage d'1h par mois sur 3 ou 6 mois, ainsi que des cures pour le visage. L'objectif est d'inscrire les bienfaits dans la durée tout en évitant que les tensions ne s'accumulent.\n\nAu-delà de ça, chaque personne a des besoins différents, et le bon rythme reste toujours très personnel.\n\nMon conseil : si le massage ne peut pas s'intégrer dans une routine régulière, notamment pour des raisons de budget, il peut être intéressant de privilégier un massage plus ponctuel, mais un peu plus long (1h15 voire 1h30).\n\nQuand le quotidien est chargé, le corps met parfois du temps à lâcher. Ces quelques minutes supplémentaires permettent de lui laisser le temps de ralentir, de s'autoriser à se détendre, et d'accéder plus facilement à un véritable lâcher-prise.\n\nParfois, un simple quart d'heure en plus suffit à faire toute la différence.",
  },
  {
    question: "Y a-t-il des contre-indications générales aux massages ?",
    answer:
      "Oui, certaines situations nécessitent de reporter la séance ou d'obtenir un avis médical au préalable : fièvre, infection en cours, maladie contagieuse, phlébite ou troubles circulatoires importants, problèmes cardiaques non stabilisés, cancer en cours de traitement (sans accord médical), plaies ouvertes ou lésions cutanées étendues, post-opératoire récent.\n\nEn cas de doute, n'hésitez pas à m'en parler avant la réservation : mon expérience d'infirmière me permet d'évaluer avec vous si le massage est adapté à votre situation.",
  },
  {
    question: "Peut-on recevoir un massage pendant la grossesse ?",
    answer:
      "Oui, le massage prénatal est possible à partir de la 16ème semaine d'aménorrhée (16 SA), une fois le premier trimestre passé. Il est spécifiquement adapté aux femmes enceintes : installation confortable en position latérale, pressions douces, zones travaillées et huiles choisies en toute sécurité.\n\nIl est en revanche déconseillé en cas de grossesse à risque, de menace d'accouchement prématuré ou de complications. En cas de suivi médical particulier, demandez l'avis de votre sage-femme ou de votre médecin avant de réserver.",
  },
  {
    question: "Et en cas de problème de santé particulier (hypertension, diabète, etc.) ?",
    answer:
      "La plupart des pathologies chroniques stabilisées (hypertension équilibrée, diabète, arthrose, fibromyalgie…) ne sont pas une contre-indication au massage, à condition d'adapter la séance. Mon parcours d'infirmière me permet d'écouter votre situation, d'ajuster les pressions, les positions et les zones travaillées.\n\nMerci de me signaler vos antécédents et traitements lors de la prise de rendez-vous ou à votre arrivée, afin que je puisse vous proposer un soin sécurisant et adapté.",
  },
  {
    question: "Peut-on se faire masser après une opération ou une blessure récente ?",
    answer:
      "Pas immédiatement. Il est nécessaire d'attendre la cicatrisation complète et l'accord de votre médecin ou chirurgien avant d'envisager un massage, en particulier sur la zone concernée. Les délais varient selon le type d'intervention.\n\nEn cas de blessure récente (entorse, contusion, déchirure musculaire), mieux vaut laisser passer la phase inflammatoire aiguë. Contactez-moi pour en discuter : nous trouverons ensemble le bon moment et le soin le plus adapté.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-accent/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Questions fréquentes
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight">FAQ</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-background rounded-2xl border border-border px-6"
            >
              <AccordionTrigger className="text-left text-sm md:text-base py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
