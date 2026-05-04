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
    slug: "bienfaits-regularite-massage",
    title: "Pourquoi la régularité change tout en massage",
    excerpt:
      "Une séance fait du bien. Une habitude transforme. Voici ce que j'observe, mois après mois, chez les clientes qui s'offrent un rendez-vous régulier avec elles-mêmes.",
    category: "Bien-être",
    date: "2025-04-21",
    readingMinutes: 5,
    content: [
      {
        type: "paragraph",
        text: "Une séance de massage de temps en temps ou une fois par an, c'est une parenthèse bien-être, une vraie.",
      },
      {
        type: "paragraph",
        text: "Mais ce que j'ai pu observer au fil des mois depuis que j'accompagne des femmes stressées, voire épuisées par la gestion du quotidien, c'est qu'un massage occasionnel et un massage régulier ne produisent pas les mêmes effets. Le premier relaxe, soulage. Le second transforme.",
      },
      {
        type: "quote",
        text: "Le corps a une mémoire et se souvient de ce qu'on lui offre régulièrement.",
      },
      {
        type: "heading",
        text: "Ce que la régularité change vraiment",
      },
      {
        type: "paragraph",
        text: "À la première séance, beaucoup de femmes arrivent souvent avec une accumulation de pleins de choses : tensions installées depuis des semaines voire des mois, un mental actif en permanence, une respiration courte. Le corps a besoin de temps afin qu'il comprenne qu'il n'a plus besoin d'être en alerte permanente et qu'il peut basculer en mode « pause ». Au fil des séances mensuelles, quelque chose se modifie. La cliente s'allonge et là, le corps sait : il se souvient de ces petits détails qui lui permettent de basculer dans la relaxation — ambiance olfactive, lieu apaisant, chaleur de la table de massage. Quant au lâcher-prise, il arrive plus facilement, plus rapidement, voire plus profondément.",
      },
      {
        type: "table",
        caption: "Ce que j'observe entre une séance ponctuelle et un rythme mensuel",
        headers: ["Aspect", "Séance ponctuelle", "Rythme mensuel"],
        rows: [
          ["Temps de relâchement", "Long, parfois difficile", "Quasi immédiat"],
          ["Tensions", "Soulagées sur le moment", "Empêchées de s'installer"],
          ["Sommeil", "Améliore une nuit", "S'installe dans la durée"],
          ["Conscience corporelle", "Découverte", "Affinée, plus précise"],
          ["Rapport au soin", "Exception", "Engagement envers soi"],
        ],
      },
      {
        type: "heading",
        text: "Un rendez-vous mensuel avec soi",
      },
      {
        type: "paragraph",
        text: "Ce que j'aime dans les abonnements, ce n'est pas la dimension commerciale — c'est ce qu'ils provoquent. Une cliente qui sait qu'elle a un créneau réservé chaque mois ne se demande plus si elle « mérite » de venir. Elle vient. Et entre deux séances, elle s'autorise plus facilement à écouter son corps, parce qu'elle sait qu'elle aura bientôt un espace pour le déposer.",
      },
      {
        type: "quote",
        text: "Avant, je venais quand je n'en pouvais plus. Maintenant, je viens avant d'en arriver là. Ça change tout.",
        author: "Une cliente, après six mois de rythme mensuel",
      },
      {
        type: "heading",
        text: "Varier pour mieux écouter",
      },
      {
        type: "paragraph",
        text: "C'est aussi pour cela que j'ai voulu proposer une formule plus libre, qui laisse le choix chaque mois entre le massage du corps « Je lâche-prise » et le Shinzu the Face. Parce que les besoins changent. Un mois, c'est le dos qui appelle. Le suivant, c'est la mâchoire crispée, le mental qui ne se pose pas — et là, le visage devient une porte d'entrée incroyable vers la détente globale.",
      },
      {
        type: "paragraph",
        text: "Le Shinzu the Face est d'ailleurs un soin que peu de praticiennes proposent dans la région, et qui surprend toujours par la profondeur de relâchement qu'il procure — bien au-delà du visage lui-même.",
      },
      {
        type: "heading",
        text: "Et si vous hésitez encore",
      },
      {
        type: "paragraph",
        text: "S'engager sur trois ou six mois peut sembler beaucoup. Mais regardez autrement : c'est trois ou six rendez-vous posés dans votre agenda, rien que pour vous. Trois ou six moments où personne ne vous demandera rien. Trois ou six respirations, étalées dans le temps, qui finissent par dessiner une autre façon d'habiter son corps.",
      },
      {
        type: "paragraph",
        text: "La régularité, ce n'est pas une contrainte. C'est un cadeau qu'on se fait à l'avance, en sachant qu'on en aura besoin.",
      },
    ],
  },
  {
    slug: "ce-que-mes-mains-ont-appris",
    title: "Ce que mes mains ont appris que ma tête ignorait",
    excerpt:
      "En passant de l'hôpital à la table de massage, j'ai redécouvert le toucher autrement. Retour sur ce que mes mains m'ont enseigné.",
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
        text: "Le toucher au delà d'un geste, une présence.",
      },
      {
        type: "paragraph",
        text: "Cette phrase, je l'incarne à chacune de mes séances. Parce qu'avant de masser, il faut accueillir. Sentir si une épaule se rétracte, si une respiration se suspend, si une zone se ferme. Mes mains me disent ces choses bien avant que la cliente ne les exprime — souvent même, avant qu'elle n'en ait conscience.",
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
          ["Réussite", "Geste technique juste", "Moment de présence partagé"],
        ],
      },
      {
        type: "paragraph",
        text: "Cette semaine, une cliente m'a dit en se relevant : « Je ne savais même pas que j'avais ces tensions dans le dos. » Cette phrase m'a touchée. Parce qu'elle dit tout : le corps a sa propre parole, et nos mains peuvent l'aider à la déposer.",
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
    title: "Mon rituel du soir en 5 minutes — pour préparer ma nuit",
    excerpt:
      "Le petit rituel qui fait du bien sans prendre trop de temps. Prendre soin de soi, ça passe aussi simplement par ces quelques minutes avant de s'endormir.",
    category: "Bien-être",
    date: "2025-04-07",
    readingMinutes: 4,
    content: [
      {
        type: "paragraph",
        text: "Je l'avoue : pendant longtemps, je négligeais mon propre visage. Je passais mes journées à prendre soin du corps des autres, et le soir, je me contentais d'un démaquillage rapide avant de tomber dans le lit. Puis j'ai remarqué quelque chose : les soirs où je prenais vraiment ce moment pour moi, je m'endormais mieux. C'est devenu mon rituel.",
      },
      {
        type: "quote",
        text: "Prendre soin de son visage le soir, c'est apprendre à quitter sa journée en douceur.",
      },
      {
        type: "heading",
        text: "Les 5 minutes que je m'offre, chaque soir",
      },
      {
        type: "paragraph",
        text: "Je commence toujours par chauffer quelques gouttes d'huile végétale entre mes paumes — ou ma crème de soin quand ma peau préfère. Je les pose sur l'ensemble du visage en respirant trois fois profondément. Ce n'est qu'après ce temps de pause que les gestes commencent. Ce n'est pas une corvée, c'est le signal que la journée est finie.",
      },
      {
        type: "table",
        caption: "Mon protocole du soir, étape par étape",
        headers: ["Étape", "Geste", "Durée"],
        rows: [
          ["1", "Pose des mains et 3 respirations profondes", "30 s"],
          ["2", "Petits cercles aux tempes pour relâcher la journée", "1 min"],
          ["3", "Pincements doux le long de la mâchoire", "1 min"],
          ["4", "Lissages du centre vers l'extérieur du visage", "1 min 30"],
          ["5", "Pression légère entre les sourcils, puis vers le cuir chevelu", "1 min"],
        ],
      },
      {
        type: "paragraph",
        text: "Ce qui m'a surprise, c'est l'effet sur ma nuit entière. Un visage détendu le soir, c'est un corps qui s'endort plus facilement. Une mâchoire relâchée, c'est moins de grincements de dents à 3 heures du matin. Et surtout, c'est un moment où je me dis : la journée est finie, maintenant c'est à moi.",
      },
      {
        type: "quote",
        text: "Je ne pensais pas qu'un massage visage pouvait procurer autant de détente — pas seulement sur le visage, mais dans tout le corps.",
        author: "Une cliente, après son premier massage facial japonais",
      },
      {
        type: "paragraph",
        text: "Si vous voulez essayer, mon seul conseil : ne cherchez pas à bien faire. Cherchez à bien sentir. Vos mains savent. Elles ont juste besoin que vous leur laissiez la place. Et si un soir vous n'avez pas le courage de faire les 5 minutes, c'est aussi ok. Le rituel n'est pas une obligation, c'est une invitation.",
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
        text: "Accompagner une femme enceinte, ce n'est pas masser un corps « normal » avec un ventre en plus. C'est rencontrer un corps en pleine transformation, qui n'obéit plus aux mêmes règles, et qui demande une attention complètement renouvelée. Chaque femme arrive avec son histoire, ses attentes, ses inquiétudes. Il n'y a pas de protocole universel qui convienne à toutes.",
      },
      {
        type: "quote",
        text: "Le massage prénatal, c'est avant tout un moment d'échange et de présence. Ce n'est pas moi qui fais le travail, c'est nous qui le faisons ensemble.",
      },
      {
        type: "heading",
        text: "À partir de quand je propose ce massage",
      },
      {
        type: "paragraph",
        text: "Chaque femme est différente, et chaque grossesse aussi. Certaines viennent tôt, d'autres plus tard dans la grossesse. L'important, c'est de trouver le moment qui convient à celle qui est là, aujourd'hui.",
      },
      {
        type: "paragraph",
        text: "Néanmoins, ce massage ne pourra être réalisé qu'à partir de 16 semaines d'aménorrhée soit début du 4e mois ou 3 mois révolus.",
      },
      {
        type: "paragraph",
        text: "Ce que mon expérience en tant qu'infirmière m'a transmis, c'est un réflexe de prudence et d'observation. Devant le moindre signe inhabituel — œdème suspect, douleur aiguë — je redirige systématiquement vers la sage-femme ou le médecin. La séance peut attendre. La sécurité, non.",
      },
      {
        type: "quote",
        text: "Je ne soigne plus, mais je suis toujours aussi observatrice de ce que le corps 'dit'. Le verbal, le non-verbal — tout compte.",
        author: "Note de pratique",
      },
      {
        type: "paragraph",
        text: "Pour l'instant, les futures mamans qui me consultent viennent de façon ponctuelle. Certaines pour un moment de détente précis, d'autres parce qu'un ami ou une sage-femme leur a parlé de moi. Chaque rencontre est différente, chaque besoin aussi. Certaines cherchent à soulager leurs jambes lourdes, d'autres ont besoin de simplement s'allonger et qu'on s'occupe et prenne soin d'elles. Il n'y a pas de 'bonne' raison de venir.",
      },
      {
        type: "paragraph",
        text: "Quand les épaules descendent, quand la respiration s'allonge — c'est beau. C'est le signe que cette femme, là, maintenant, a trouvé un moment de répit.",
      },
      {
        type: "paragraph",
        text: "Si vous êtes enceinte et que vous hésitez, écrivez-moi. On parle. Sans engagement de votre part, simplement pour voir si le moment est juste — pour vous, et pour votre bébé. Chaque grossesse est unique, et ce qui compte, c'est de trouver ce qui vous convient, aujourd'hui.",
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
        text: "Elle est venue un vendredi après-midi. Avant son arrivée, je savais déjà — par notre échange — qu'elle hésitait depuis plusieurs mois. Ce qu'elle m'a raconté ensuite, autour du verre d'eau fraîche que je propose en fin de séance, ça m'a touchée et je lui ai demandé l'autorisation d'en faire un texte.",
      },
      {
        type: "quote",
        text: "Cela faisait plusieurs mois que je regardais votre site. Et chaque fois, je trouvais une bonne raison de ne pas appeler.",
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
            "« Je n'aime pas mon corps, je vais devoir le montrer »",
            "Pendant le massage, je ne regarde pas un corps : je ressens. Aucun jugement esthétique, juste de l'attention",
          ],
          [
            "« La pudeur va me mettre mal à l'aise »",
            "Je sors de la pièce pour l'installation, je couvre systématiquement la poitrine avec le drap, et je peux tamiser encore plus la lumière sur simple demande",
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
