import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles, X, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

type Question = {
  question: string;
  options: { label: string; value: string }[];
};

const questions: Question[] = [
  {
    question: "De quoi avez-vous le plus besoin en ce moment ?",
    options: [
      { label: "Relâcher les tensions et me détendre profondément", value: "detente" },
      { label: "Prendre soin de mon visage et me faire du bien", value: "visage" },
      { label: "Les deux ! Corps et visage", value: "complet" },
    ],
  },
  {
    question: "Combien de temps souhaitez-vous vous accorder ?",
    options: [
      { label: "30 minutes — une parenthèse express", value: "30" },
      { label: "1 heure — un vrai moment pour moi", value: "60" },
      { label: "1h30 ou plus — une expérience complète", value: "90" },
    ],
  },
  {
    question: "Qu'est-ce qui compte le plus pour vous ?",
    options: [
      { label: "Un lâcher-prise total, ne plus penser à rien", value: "lacher-prise" },
      { label: "Un résultat visible sur ma peau", value: "resultat" },
      { label: "Vivre une expérience sensorielle unique", value: "experience" },
    ],
  },
];

type Result = {
  title: string;
  description: string;
  link: string;
};

function getResult(answers: string[]): Result {
  // Corps uniquement
  if (answers[0] === "detente") {
    if (answers[1] === "30") {
      return {
        title: "\"Je lâche-prise\" — 60 min",
        description: "Un massage enveloppant pour relâcher profondément les tensions du corps et du mental. Accordez-vous au minimum 1h pour un vrai lâcher-prise.",
        link: "/massages#massages-corps",
      };
    }
    return {
      title: "\"Je lâche-prise\"",
      description: "Un massage du corps personnalisé, aux manœuvres enveloppantes, pour vous offrir un relâchement profond et un véritable lâcher-prise.",
      link: "/massages#massages-corps",
    };
  }

  // Visage uniquement
  if (answers[0] === "visage") {
    if (answers[1] === "30") {
      return {
        title: "Doux Éclat",
        description: "Une parenthèse de 30 minutes pour prendre une pause tout en ravivant l'éclat naturel de votre peau.",
        link: "/massages#massages-visage",
      };
    }
    if (answers[2] === "resultat") {
      return {
        title: "Massage Facial Japonais",
        description: "Inspiré du Kobido, ce massage alterne gestes précis et profonds pour repulper la peau, adoucir les traits et offrir un teint lumineux.",
        link: "/massages#massages-visage",
      };
    }
    return {
      title: "Shinzu The Face",
      description: "La baguette de Kansa glisse délicatement sur le visage pour un lâcher-prise profond et une sensation unique d'apaisement.",
      link: "/massages#massages-visage",
    };
  }

  // Corps & Visage
  if (answers[0] === "complet") {
    if (answers[2] === "experience") {
      return {
        title: "\"Je lâche-prise\" & Shinzu The Face",
        description: "Un voyage sensoriel complet alliant massage corps enveloppant et la douceur unique de la baguette de Kansa sur le visage.",
        link: "/massages#massages-corps-visage",
      };
    }
    if (answers[2] === "resultat") {
      return {
        title: "\"Je lâche-prise\" & Facial Japonais",
        description: "Un véritable rituel bien-être : massage corps pour le lâcher-prise, puis soin du visage pour un teint lumineux et des traits adoucis.",
        link: "/massages#massages-corps-visage",
      };
    }
    return {
      title: "\"Je lâche-prise\" & Doux Éclat",
      description: "Le meilleur des deux mondes : un massage corps profond suivi d'un soin visage express pour raviver votre éclat.",
      link: "/massages#massages-corps-visage",
    };
  }

  return {
    title: "\"Je lâche-prise\"",
    description: "Un massage entièrement adapté à vos besoins du moment. Élodie ajuste chaque geste pour que ce moment soit pleinement le vôtre.",
    link: "/massages#massages-corps",
  };
}

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      handleRestart();
    }, 300);
  };

  const result = showResult ? getResult(answers) : null;

  return (
    <>
      {/* Floating quiz trigger button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-accent text-foreground px-5 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-shadow duration-300 border border-border"
      >
        <HelpCircle className="w-4 h-4 text-primary" />
        Quel massage pour moi ?
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 z-50"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-50 bg-background rounded-3xl p-8 md:p-10 shadow-hover overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Progress */}
                    <div className="flex gap-2 mb-8">
                      {questions.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                            i <= step ? "bg-primary" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground mb-2">
                      Question {step + 1} / {questions.length}
                    </p>
                    <h3 className="text-xl md:text-2xl tracking-tight mb-8">
                      {questions[step].question}
                    </h3>

                    <div className="space-y-3">
                      {questions[step].options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswer(option.value)}
                          className="w-full text-left px-6 py-4 rounded-2xl border border-border hover:border-primary hover:bg-accent transition-all duration-200 text-sm md:text-base"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Retour
                      </button>
                    )}
                  </motion.div>
                ) : (
                  result && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center pt-4"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Notre recommandation</p>
                      <h3 className="text-2xl md:text-3xl tracking-tight mb-4">
                        {result.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                        {result.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                          to={result.link}
                          onClick={handleClose}
                          className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
                        >
                          Découvrir ce massage
                        </Link>
                        <button
                          onClick={handleRestart}
                          className="px-8 py-3.5 rounded-full text-sm font-medium border border-border hover:bg-accent transition-all duration-200"
                        >
                          Recommencer
                        </button>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Quiz;
