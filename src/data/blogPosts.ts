export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Bien-être" | "Grossesse & post-partum" | "Témoignages";
  date: string; // ISO
  readingMinutes: number;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ce-que-mes-mains-ont-appris",
    title: "Ce que mes mains ont appris que ma tête ignorait",
    excerpt:
      "En passant de l'hôpital à la table de massage, j'ai redécouvert le toucher autrement. Retour sur ce que mes mains m'ont enseigné, loin des protocoles.",
    category: "Bien-être",
    date: "2025-04-14",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "Quand j'étais infirmière, mes mains avaient un rôle clair : poser, soigner, surveiller. Elles étaient l'outil d'un protocole. Aujourd'hui, à l'institut, elles font autre chose. Elles écoutent. Et c'est sans doute le plus grand apprentissage de ma reconversion : il a fallu que je désapprenne pour réapprendre.",
      },
      {
        type: "quote",
        text: "Le toucher n'est pas un geste, c'est une présence.",
      },
      {
        type: "paragraph",
        text: "Cette phrase, je me la répète souvent en début de séance. Parce qu'avant de masser, il faut accueillir. Sentir si une épaule se rétracte, si une respiration se suspend, si une zone se ferme. Mes mains me disent ces choses bien avant que la cliente ne les exprime — souvent même, avant qu'elle n'en ait conscience.",
      },
      {
        type: "heading",
        text: "Deux univers, deux façons de toucher",
      },
      {
        type: "paragraph",
        text: "Pour mieux comprendre ce changement, j'ai pris le temps de poser noir sur blanc ce qui distingue le toucher soignant que je pratiquais à l'hôpital, et le toucher du bien-être que j'offre aujourd'hui.",
      },
      {
        type: "table",
        caption: "Ce qui a changé entre l'hôpital et l'institut",
        headers: ["Critère", "Soin infirmier", "Massage bien-être"],
        rows: [
          ["Intention", "Réparer, surveiller", "Accueillir, relâcher"],
          ["Rythme", "Efficace, rapide", "Lent, ample"],
          ["Posture", "Faire pour", "Être avec"],
          ["Réussite", "Geste technique juste", "Cliente qui lâche prise"],
        ],
      },
      {
        type: "paragraph",
        text: "Cette semaine, une cliente m'a dit en se relevant : « Je ne savais pas que mon dos pouvait être aussi silencieux. » Cette phrase m'a touchée. Parce qu'elle dit tout : le corps a sa propre parole, et nos mains peuvent l'aider à la déposer.",
      },
      {
        type: "quote",
        text: "Mon ancien métier m'a appris la rigueur. Mon nouveau métier m'apprend la lenteur.",
        author: "Note d'un carnet de séance",
      },
      {
        type: "paragraph",
        text: "Si je devais résumer ce que mes mains ont appris cette année, je dirais ceci : elles ont appris à ne plus avoir peur du silence. À ne plus combler. À faire confiance à ce qui se passe quand on cesse d'agir pour simplement être présent. C'est, je crois, ce que je peux offrir de plus juste à celles qui poussent ma porte.",
      },
    ],
  },
  {
    slug: "rituel-auto-massage-visage",
    title: "Mon rituel d'auto-massage du visage, en 5 minutes chrono",
    excerpt:
      "Je vous partage les gestes simples que je pratique chaque matin pour relâcher les tensions du visage et offrir à ma peau un vrai moment de douceur.",
    category: "Bien-être",
    date: "2025-04-07",
    readingMinutes: 4,
    content: [
      {
        type: "paragraph",
        text: "Je l'avoue : pendant longtemps, je négligeais mon propre visage. Je passais mes journées à prendre soin du corps des autres, et le soir, je me contentais d'un démaquillage rapide. Puis un matin, en me regardant dans le miroir, j'ai vu une mâchoire serrée, un front plissé, une fatigue installée. C'est ce jour-là que j'ai créé mon petit rituel.",
      },
      {
        type: "quote",
        text: "Prendre soin de son visage, c'est apprendre à se regarder avec douceur.",
      },
      {
        type: "heading",
        text: "Les 5 minutes que je m'offre, chaque matin",
      },
      {
        type: "paragraph",
        text: "Je commence toujours par chauffer quelques gouttes d'huile végétale entre mes paumes, puis je les pose sur l'ensemble du visage en respirant trois fois profondément. Ce n'est qu'après ce temps de pause que les gestes commencent.",
      },
      {
        type: "table",
        caption: "Mon protocole, étape par étape",
        headers: ["Étape", "Geste", "Durée"],
        rows: [
          ["1", "Pose des mains et 3 respirations", "30 s"],
          ["2", "Petits cercles aux tempes", "1 min"],
          ["3", "Pincements le long de la mâchoire", "1 min"],
          ["4", "Lissages du centre vers l'extérieur", "1 min 30"],
          ["5", "Pression douce des sourcils au cuir chevelu", "1 min"],
        ],
      },
      {
        type: "paragraph",
        text: "Ce qui m'a surprise, c'est l'effet sur ma journée entière. Une mâchoire détendue le matin, c'est moins de tensions au cou en fin d'après-midi. Un visage à qui l'on a parlé doucement, c'est un regard différent dans le miroir.",
      },
      {
        type: "quote",
        text: "Le visage est le seul endroit du corps où l'on porte, à vue, ce que l'on tait.",
        author: "Une cliente, après une séance Kobido",
      },
      {
        type: "paragraph",
        text: "Si vous voulez essayer, mon seul conseil : ne cherchez pas à bien faire. Cherchez à bien sentir. Vos mains savent. Elles ont juste besoin que vous leur laissiez la place.",
      },
    ],
  },
  {
    slug: "massage-femme-enceinte-bienfaits",
    title: "Accompagner une femme enceinte : ce que j'ai compris en chemin",
    excerpt:
      "À partir de quand, pourquoi, comment ? Je vous partage ma façon d'aborder le massage prénatal, héritée de mon parcours d'infirmière et de mes formations.",
    category: "Grossesse & post-partum",
    date: "2025-03-31",
    readingMinutes: 6,
    content: [
      {
        type: "paragraph",
        text: "Accompagner une femme enceinte, ce n'est pas masser un corps « normal » avec un ventre en plus. C'est rencontrer un corps en pleine transformation, qui n'obéit plus aux mêmes règles, et qui demande une attention complètement renouvelée. Cette nuance, je l'ai mise du temps à l'intégrer pleinement.",
      },
      {
        type: "quote",
        text: "Une femme enceinte ne vient pas chercher un massage. Elle vient déposer une charge.",
      },
      {
        type: "heading",
        text: "À partir de quand je propose ce massage",
      },
      {
        type: "paragraph",
        text: "Je reçois les futures mamans à partir de 16 semaines d'aménorrhée révolues, soit après le 4ème mois. Ce délai n'est pas arbitraire : il correspond au moment où la grossesse est bien installée, et où le corps a vraiment besoin d'un accompagnement régulier.",
      },
      {
        type: "table",
        caption: "Mes repères selon la période de la grossesse",
        headers: ["Période", "Ce qu'on travaille", "Ma posture"],
        rows: [
          [
            "16 à 24 SA",
            "Bas du dos, jambes lourdes",
            "Installation latérale, pression douce",
          ],
          [
            "24 à 32 SA",
            "Sciatique, sommeil, respiration",
            "Beaucoup d'enveloppement, peu de techniques",
          ],
          [
            "32 SA jusqu'au terme",
            "Préparation, ancrage, lien avec bébé",
            "Présence avant tout, gestes ralentis",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Ce que mes années d'infirmière m'ont laissé, c'est un réflexe de prudence. Devant le moindre signe inhabituel — œdème suspect, douleur localisée, tension élevée — je redirige systématiquement vers la sage-femme ou le médecin. La séance peut attendre. La sécurité, non.",
      },
      {
        type: "quote",
        text: "Je ne soigne plus, mais je n'ai pas oublié comment regarder un corps.",
        author: "Note personnelle, journal de pratique",
      },
      {
        type: "heading",
        text: "Ce que je vois changer, séance après séance",
      },
      {
        type: "paragraph",
        text: "Les futures mamans qui reviennent régulièrement me racontent toutes la même chose, ou presque : elles dorment mieux, elles respirent plus loin, elles se sentent moins seules dans leur corps. Et cela, plus que tout protocole, justifie que j'aie choisi ce métier.",
      },
      {
        type: "paragraph",
        text: "Si vous hésitez, écrivez-moi. On parle. Sans engagement de votre part, simplement pour voir si le moment est juste — pour vous, et pour bébé.",
      },
    ],
  },
  {
    slug: "premiere-seance-temoignage",
    title: "« Je n'osais pas franchir la porte » — le récit d'une cliente",
    excerpt:
      "Une cliente m'a confié, après sa première séance, ce qu'elle aurait aimé savoir avant de pousser ma porte. Je le partage avec son accord, anonymement.",
    category: "Témoignages",
    date: "2025-03-24",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "Elle est venue un mardi après-midi. Avant son arrivée, je savais déjà — par nos échanges téléphoniques — qu'elle hésitait depuis des mois. Ce qu'elle m'a raconté ensuite, autour de la tisane qui clôt toujours mes séances, m'a tellement émue que je lui ai demandé l'autorisation d'en faire un texte.",
      },
      {
        type: "quote",
        text: "Cela faisait un an que je regardais votre site. Un an. Et chaque fois, je trouvais une bonne raison de ne pas appeler.",
        author: "Cliente, 42 ans",
      },
      {
        type: "heading",
        text: "Ses freins, et ce qui les a levés",
      },
      {
        type: "paragraph",
        text: "Elle m'a listé, très précisément, les peurs qui l'avaient retenue. J'ai trouvé sa lucidité bouleversante, parce qu'elle met des mots sur ce que beaucoup de femmes ressentent sans oser le dire.",
      },
      {
        type: "table",
        caption: "Ce qu'elle redoutait, ce qu'elle a trouvé",
        headers: ["Sa peur", "La réalité"],
        rows: [
          [
            "« Je vais devoir me dévoiler »",
            "Tout le rituel d'installation respecte la pudeur",
          ],
          [
            "« Je ne saurai pas comment me comporter »",
            "Aucun comportement attendu, juste être là",
          ],
          [
            "« Je n'ai pas le temps pour ça »",
            "Justement, c'est le seul moment où l'on s'arrête vraiment",
          ],
          [
            "« Je ne mérite pas ce moment »",
            "Personne n'a à mériter d'être bien dans son corps",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Cette dernière phrase, je l'ai notée dans mon carnet. Parce qu'elle dit quelque chose de profond sur le rapport de beaucoup de femmes au soin qu'elles s'autorisent — ou plutôt, qu'elles ne s'autorisent pas.",
      },
      {
        type: "quote",
        text: "Je suis repartie plus légère, et avec l'envie de revenir. Si vous hésitez, faites le pas. Le seul.",
      },
      {
        type: "paragraph",
        text: "Elle est revenue. Trois fois depuis. Et chaque séance est différente, parce qu'elle arrive chaque fois un peu plus elle-même. C'est peut-être ça, finalement, ce que j'aime le plus dans ce métier : voir une femme s'autoriser, séance après séance, à occuper sa propre place.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
