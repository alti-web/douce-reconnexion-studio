export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Bien-être" | "Grossesse & post-partum" | "Témoignages";
  date: string; // ISO
  readingMinutes: number;
  content: string[]; // paragraphes
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rituel-auto-massage-visage",
    title: "Un rituel d'auto-massage du visage en 5 minutes",
    excerpt:
      "Quelques gestes simples pour relâcher les tensions, raviver l'éclat et offrir à votre peau un moment de douceur, matin ou soir.",
    category: "Bien-être",
    date: "2025-04-10",
    readingMinutes: 4,
    content: [
      "Le visage est l'une des zones où nous accumulons le plus de tensions, souvent sans nous en rendre compte : mâchoires serrées, sourcils froncés devant un écran, contractions au niveau du front. Quelques minutes d'auto-massage suffisent à dénouer ces zones et à offrir un moment de pause à votre peau.",
      "Commencez par vous installer confortablement, dos droit, épaules relâchées. Déposez quelques gouttes d'huile végétale (jojoba, amande douce ou noyau d'abricot) au creux de vos mains, frottez-les pour les réchauffer puis venez les poser sur l'ensemble du visage en respirant profondément.",
      "Avec la pulpe des doigts, effectuez de petits cercles lents au niveau des tempes, puis remontez doucement vers le cuir chevelu. Descendez ensuite le long de la mâchoire en pinçant légèrement, du menton jusqu'aux oreilles. Ce geste libère les tensions accumulées dans cette zone très sollicitée.",
      "Terminez par des lissages doux du centre du visage vers l'extérieur, comme pour repasser délicatement les traits. Quelques respirations profondes pour clore le rituel, et le tour est joué. À pratiquer le matin pour réveiller la peau, ou le soir pour favoriser la détente avant le coucher.",
    ],
  },
  {
    slug: "massage-femme-enceinte-bienfaits",
    title: "Le massage pendant la grossesse : pourquoi, à partir de quand ?",
    excerpt:
      "Accompagner les transformations du corps avec douceur, soulager les tensions et créer un moment de connexion avec bébé. Tout savoir sur le massage femme enceinte.",
    category: "Grossesse & post-partum",
    date: "2025-03-22",
    readingMinutes: 5,
    content: [
      "La grossesse est une période de profonds changements, à la fois physiques et émotionnels. Le corps évolue semaine après semaine, et avec lui apparaissent parfois des tensions : dos lourd, jambes fatiguées, sommeil perturbé, peau qui tiraille. Le massage prénatal est un précieux allié pour traverser cette aventure avec plus de douceur.",
      "Au-delà du soulagement physique, ce moment offre une parenthèse rien que pour vous, à un moment où l'attention se porte beaucoup sur l'arrivée de bébé. C'est aussi un temps d'écoute du corps et de lien, où la future maman peut ressentir pleinement les sensations de sa grossesse.",
      "Au sein de l'institut, je propose le massage femme enceinte à partir de 16 semaines d'aménorrhée (4 mois révolus). L'installation est entièrement adaptée à votre confort, en position latérale, avec un soutien des coussins pour soulager la pression sur le bassin et le ventre.",
      "En cas de grossesse pathologique, de douleurs particulières ou de doute sur une contre-indication, je vous invite à demander un avis médical à votre sage-femme ou votre médecin avant la prise de rendez-vous. Mon expérience d'ancienne infirmière me permet d'échanger avec vous, mais l'avis médical primera toujours pour votre sécurité et celle de votre bébé.",
    ],
  },
  {
    slug: "premiere-seance-temoignage",
    title: "« Je n'osais pas franchir la porte » : la première séance racontée",
    excerpt:
      "Le récit anonyme d'une cliente qui hésitait depuis des mois à prendre rendez-vous. Ce qu'elle a découvert, ressenti, et ce qu'elle aurait aimé savoir avant.",
    category: "Témoignages",
    date: "2025-02-18",
    readingMinutes: 4,
    content: [
      "« Cela faisait des mois que j'y pensais. Je voyais passer l'institut sur les réseaux, je trouvais l'ambiance jolie, mais quelque chose me retenait. Peut-être la peur de me dévoiler, de ne pas savoir comment me comporter, de ne pas mériter ce moment. Et puis un matin, j'ai pris le téléphone. »",
      "La première chose qui rassure, c'est l'échange avant la séance. On prend le temps de parler de ce qui amène, des zones sensibles, des envies. Pas de questionnaire impersonnel : un vrai dialogue, dans une ambiance feutrée, qui permet de poser ses bagages avant même de commencer.",
      "« L'installation aussi m'a surprise par son attention au détail. Élodie sort de la pièce pour me laisser me changer tranquillement. La lumière est douce, la musique enveloppante. J'ai senti que je pouvais lâcher prise sans avoir à demander la permission. »",
      "Après la séance, place à un temps d'échange autour d'une boisson fraîche. C'est souvent là que les mots arrivent, que l'émotion remonte parfois. « Je suis repartie plus légère, et avec l'envie de revenir. La vraie surprise, c'est de réaliser à quel point ce temps pour soi est précieux. Si vous hésitez, faites le pas. »",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
