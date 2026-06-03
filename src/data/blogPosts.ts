export type BlogBlock =
  | { type: "paragraph"; text: string; emphasis?: "bold" }
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
    slug: "kobido-massage-facial-japonais-deroule-bienfaits",
    title: "Kobido / massage facial japonais : déroulé, bienfaits — ce qui en fait un massage pas comme les autres",
    excerpt:
      "Massage facial japonais profondément relaxant : déroulé, bienfaits réels et différences avec un soin esthétique. Le récit sincère d'une praticienne à Saint-Privat.",
    category: "Bien-être",
    date: "2025-05-05",
    readingMinutes: 7,
    content: [
      {
        type: "paragraph",
        text: "Quand une cliente franchit pour la première fois la porte de Fondamental Massage à Saint-Privat pour découvrir le Kobido, elle arrive presque toujours avec la même image en tête : celle d'un massage facial tonique, anti-âge, sans doute un peu inconfortable, qu'il faudrait endurer pour en récolter les bienfaits.",
      },
      {
        type: "paragraph",
        text: "Et puis je lui propose de s'allonger. Soixante minutes plus tard, neuf fois sur dix, elle s'est endormie.",
      },
      {
        type: "paragraph",
        text: "C'est précisément de cette dissociation entre l'idée qu'on se fait du Kobido et l'expérience réelle qu'il procure dont je voudrais vous parler aujourd'hui. Parce qu'à vouloir trop souvent réduire ce massage à son seul effet liftant, on passe à côté de ce qui, à mes yeux de praticienne, en fait toute la richesse.",
      },
      {
        type: "heading",
        text: "Qu'est-ce que le Kobido, ce massage facial japonais ?",
      },
      {
        type: "paragraph",
        text: "Le Kobido — qui signifie littéralement « ancienne voie de la beauté » — est une technique de massage du visage née au Japon il y a près de cinq siècles. À l'origine, il était réservé à l'impératrice et aux femmes de la cour. Aujourd'hui, il s'est ouvert plus largement, mais il reste une discipline manuelle exigeante.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Une gestuelle complète et précise",
      },
      {
        type: "paragraph",
        text: "Ce qui distingue le Kobido de la plupart des autres massages du visage, c'est la richesse de sa gestuelle. Plus de mille mouvements composent le répertoire traditionnel : pincements, pétrissages, lissages, percussions, drainages, étirements. Bien évidemment, tous ne sont pas appris lors d'une ou deux formations.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Une approche manuelle, sans appareil ni produit « actif »",
      },
      {
        type: "paragraph",
        text: "Pas d'appareil de radiofréquence, pas d'aiguille, pas de courant. Juste mes mains, une huile végétale adaptée, et une concentration entière pendant toute la durée du soin. C'est ce qui rend le Kobido profondément humain dans son approche : on est dans le toucher, dans la présence, dans la lenteur des gestes — même quand ils sont rapides.",
      },
      {
        type: "heading",
        text: "Le déroulé d'une séance de Kobido à Saint-Privat",
      },
      {
        type: "paragraph",
        text: "Une séance dure une heure pleine. Voici comment elle s'organise concrètement, étape par étape.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Merci de venir démaquillée au rendez-vous, ou de prévoir de quoi le faire sur place.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "L'accueil et le temps d'échange",
      },
      {
        type: "paragraph",
        text: "Avant chaque première séance, je prends un moment pour discuter avec ma cliente : son état du jour, ses tensions, ce qu'elle souhaite, ce qu'elle redoute aussi parfois. Ce temps d'écoute n'est pas un préambule poli, c'est ce qui me permet d'ajuster ensuite le soin à ce qu'elle vit, ici, maintenant.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Le massage en lui-même",
      },
      {
        type: "paragraph",
        text: "Une serviette chaude est préalablement appliquée sur le visage pour entrer en douceur dans le massage et procurer un premier apaisement. Ensuite, place au cœur de la séance. Pendant 45 à 50 minutes, je travaille le visage et le cou, en alternant gestes toniques, rapides, profonds et mouvements enveloppants. Et c'est ici que se joue ce que je disais en introduction : malgré la profondeur et le rythme parfois soutenu des manœuvres, l'effet sur le corps est extrêmement relaxant.",
      },
      {
        type: "table",
        caption: "Les étapes d'une séance de Kobido",
        headers: ["Étape", "Durée", "Ce qui se passe"],
        rows: [
          ["Accueil et échange", "5 à 10 min", "Discussion, installation, mise en confiance"],
          ["Massage Kobido", "45 à 50 min", "Travail manuel du visage et du cou"],
          [
            "Acupression et drainage",
            "10 à 15 min",
            "Stimulation de points d'acupression sur les méridiens du visage, puis phase drainante en manœuvres manuelles et au roll-on",
          ],
          ["Retour au calme", "5 min", "Réveil en douceur, conseils personnalisés si besoin"],
        ],
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Le retour au calme, sans précipitation",
      },
      {
        type: "paragraph",
        text: "J'évite toujours de réveiller trop vite. Les clientes ont besoin de revenir doucement à elles-mêmes, surtout quand elles se sont laissées glisser dans le sommeil — ce qui, je le redis, arrive à neuf clientes sur dix.",
      },
      {
        type: "heading",
        text: "Les bienfaits réels du Kobido : ce que mes clientes ressentent",
      },
      {
        type: "paragraph",
        text: "Je préfère parler de ce que je constate plutôt que de promettre. Voici ce que mes clientes me rapportent, séance après séance.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Une détente que personne n'anticipe",
      },
      {
        type: "paragraph",
        text: "C'est sans doute le bienfait le plus fréquemment cité, et le plus inattendu. Les gestes sont toniques, parfois profonds, et pourtant l'effet global est un lâcher-prise rare. Cette dissociation entre la nature des mouvements et la sensation qu'ils produisent surprend toutes mes premières clientes. C'est aussi pour cette raison que beaucoup d'entre elles s'endorment.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Des traits adoucis dès la première séance",
      },
      {
        type: "paragraph",
        text: "Au bout d'une heure de soin, les traits sont adoucis et le visage paraît plus reposé, dès la première fois. C'est observable, et mes clientes le voient elles-mêmes dans le miroir avant de partir. Ce n'est pas un effet liftant au sens médical du terme — il faudrait une tout autre rigueur de fréquence pour cela, j'y reviens plus bas — mais c'est un visage visiblement détendu, repulpé, qui respire mieux.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Les pincements, ce moment que les clientes adorent",
      },
      {
        type: "paragraph",
        text: "C'est presque toujours la même surprise : les pincements, qu'on imagine désagréables, sont souvent le moment préféré de la séance. Les retours sont assez constants : elles ont senti leur peau se détendre, s'assouplir, leur visage se décrisper. Sur des visages qui portent beaucoup de tensions — mâchoires serrées, front plissé, contractures autour des yeux — ce type de geste fait un travail que rien d'autre ne fait à ma connaissance.",
      },
      {
        type: "paragraph",
        text: "Voici les bienfaits qui reviennent le plus souvent dans les retours de mes clientes : une détente profonde, parfois jusqu'à l'endormissement ; un visage visiblement plus reposé en sortie de séance ; des traits adoucis et un teint plus uniforme ; une peau qui se détend et s'assouplit, surtout dans les zones de tension ; une sensation de décrispation du visage que mes clientes décrivent souvent spontanément ; un apaisement mental et émotionnel durable ; et souvent, une nuit de sommeil particulièrement profonde derrière.",
      },
      {
        type: "heading",
        text: "Le massage facial japonais inspiré Kobido, meilleur qu'un soin esthétique ?",
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Une philosophie différente",
      },
      {
        type: "paragraph",
        text: "Le soin esthétique classique vise d'abord la peau et son apparence. Le Kobido, lui, travaille à la rencontre du visage et agit simultanément sur la peau, les muscles et la circulation énergétique. Ce n'est ni mieux ni moins bien : c'est différent. Et selon ce qu'on cherche, l'un ou l'autre — ou les deux — peuvent avoir tout leur sens.",
      },
      {
        type: "table",
        caption: "Soin esthétique classique vs Massage Kobido",
        headers: ["Soin esthétique classique", "Massage Kobido"],
        rows: [
          [
            "Action principalement sur la peau (cosmétiques, machines)",
            "Action sur les tissus, les muscles peauciers et le système nerveux",
          ],
          [
            "Recours fréquent à des appareils (LED, radiofréquence, ultrasons)",
            "Travail uniquement manuel, sans appareil",
          ],
          [
            "Objectif souvent esthétique : éclat, hydratation, anti-âge",
            "Objectif global : détente profonde, vitalité, équilibre du visage",
          ],
          [
            "Effet rapide en surface, mais souvent superficiel sur les tensions",
            "Effet plus discret en surface, mais plus profond sur les tensions",
          ],
          [
            "Régularité variable selon la prestation",
            "Régularité essentielle pour des résultats véritablement durables",
          ],
        ],
      },
      {
        type: "paragraph",
        emphasis: "bold",
        text: "Pourquoi je ne vends pas le Kobido comme un lifting",
      },
      {
        type: "paragraph",
        text: "Il est important pour moi de le dire clairement : je ne présente pas le Kobido comme un lifting, même si certains le font, et même si l'argument est commercialement très porteur. La raison est simple : pour obtenir des résultats comparables à un protocole anti-âge sérieux, il faudrait une fréquence très rapprochée — une à deux séances par semaine le premier mois, puis une à deux par mois en entretien. Honnêtement, je n'ai jamais eu de cliente prête à un tel investissement, ni en temps ni en budget.",
      },
      {
        type: "paragraph",
        text: "Promettre un effet liftant sans cette régularité, ce serait mentir. Je préfère vous proposer un soin sincèrement décrit, qui tient ses promesses, plutôt qu'un argument marketing qui finirait par décevoir.",
      },
      {
        type: "heading",
        text: "Pour qui le Kobido est-il particulièrement indiqué ?",
      },
      {
        type: "paragraph",
        text: "Le Kobido convient particulièrement à toute femme qui cherche un vrai temps de relâchement profond, sans superficialité ; aux visages qui portent beaucoup de tensions (mâchoires serrées, front contracté, contractures autour des yeux) ; aux personnes traversant une période de stress chronique ou de fatigue accumulée ; à celles qui veulent prendre soin de leur visage par une approche naturelle, non invasive, sans produit transformateur ; et aux femmes sensibles à la dimension sensorielle et au contact humain dans un soin.",
      },
      {
        type: "paragraph",
        text: "En revanche, je préfère reporter ou orienter autrement en cas de poussée cutanée active (acné inflammatoire, eczéma en crise, rosacée en poussée) ; de chirurgie esthétique récente (2 à 3 mois, selon les recommandations du chirurgien) ou de médecine esthétique comme des injections (entre 2 et 3 semaines) ; de plaie, lésion ou infection sur la zone à masser ; de pathologie médicale spécifique nécessitant un avis préalable de votre médecin ; ou de fracture des cervicales.",
      },
      {
        type: "heading",
        text: "Quelques mots avant de réserver",
      },
      {
        type: "paragraph",
        text: "Si vous êtes arrivée jusqu'ici dans la lecture, c'est sans doute que ce massage vous intrigue. Je préfère que vous veniez avec une attente juste : celle d'un vrai moment de relâchement, d'un visage adouci et reposé en sortie de séance, plutôt qu'avec la promesse trompeuse d'un rajeunissement spectaculaire. Ce qui se passe sous mes mains est plus subtil que cela — et à mon sens, plus précieux.",
      },
      {
        type: "paragraph",
        text: "L'institut Fondamental Massage est situé à Saint-Privat, à cinq minutes d'Aubenas, dans mon espace de massages exclusivement féminin pensé pour le calme et la confidentialité. Si vous hésitez encore, prenez le temps de m'écrire avant : un échange préalable nous permet de vérifier que le Kobido est bien ce qui vous correspond, à ce moment de votre vie.",
      },
      {
        type: "quote",
        text: "Ce qui se passe sous mes mains est plus subtil qu'un lifting — et à mon sens, plus précieux.",
        author: "Élodie Valdès, praticienne en massages au service du bien-être de la femme",
      },
    ],
  },
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
        text: "Lors de la première séance, beaucoup de femmes arrivent avec une accumulation, un trop-plein.",
      },
      {
        type: "paragraph",
        text: "Des tensions installées depuis des semaines, parfois des mois, un mental très actif, une respiration devenue courte presque sans s'en rendre compte.",
      },
      {
        type: "paragraph",
        text: "Le corps, habitué à rester en vigilance, a besoin de temps pour comprendre qu'il peut relâcher et sortir de cet état d'alerte permanent.",
      },
      {
        type: "paragraph",
        text: "Puis, au fil des séances mensuelles, quelque chose change.",
      },
      {
        type: "paragraph",
        text: "La cliente s'allonge… et peu à peu, le corps reconnaît. La chaleur de la table, la douceur du toucher, l'ambiance apaisante… autant de repères qui l'invitent à se déposer.",
      },
      {
        type: "paragraph",
        text: "Le lâcher-prise devient alors plus naturel. Plus rapide. Plus profond.",
      },
      {
        type: "paragraph",
        text: "Comme un retour à un état que le corps n'avait pas oublié, mais simplement mis de côté.",
      },
      {
        type: "table",
        caption: "Ce que j'observe entre une séance ponctuelle et un rythme mensuel",
        headers: ["Aspect", "Séance ponctuelle", "Rythme mensuel"],
        rows: [
          ["Temps de relâchement", "Long, parfois difficile", "Facilité et rapide"],
          ["Tensions", "Installées en profondeur", "Plus superficielles"],
          ["Sommeil", "Améliore une nuit", "Meilleure qualité sur la durée"],
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
        text: "Ce que j'aime dans les abonnements, ce n'est pas la dimension commerciale — c'est ce qu'ils provoquent. Une cliente qui sait qu'elle a son créneau prévu chaque mois ne se demande plus quand elle prendra le temps de venir. Elle vient. Et entre deux séances, elle s'autorise plus facilement à écouter son corps, parce qu'elle sait qu'elle aura bientôt un espace pour le déposer.",
      },
      {
        type: "quote",
        text: "Avant, je venais quand je n'en pouvais plus. Maintenant, je viens avant d'en arriver là. Ça change tout.",
        author: "Une cliente, après quatre mois de rythme mensuel",
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
        text: "S'engager sur trois ou six mois peut sembler beaucoup. Mais regardez autrement : c'est trois ou six rendez-vous posés dans votre agenda, rien que pour vous. Trois ou six moments où vous n'aurez rien à faire, rien à réussir ou à gérer — seulement ressentir.",
      },
      {
        type: "paragraph",
        emphasis: "bold",
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
