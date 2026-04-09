import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

type Question = {
  question: string;
  options: { label: string; value: string }[];
};

const questions: Question[] = [
  {
    question: "Qu'est-ce qui vous amènerait à consulter aujourd'hui ?",
    options: [
      { label: "Tensions musculaires ou douleurs", value: "tensions" },
      { label: "Stress, charge mentale", value: "stress" },
      { label: "Besoin de me reconnecter à moi-même", value: "reconnexion" },
      { label: "Accompagnement grossesse / fertilité", value: "specifique" },
    ],
  },
  {
    question: "Quelle zone de votre corps a le plus besoin d'attention ?",
    options: [
      { label: "Le dos et les épaules", value: "dos" },
      { label: "Le visage et le crâne", value: "visage" },
      { label: "Les jambes et les pieds", value: "jambes" },
      { label: "L'ensemble du corps", value: "corps" },
    ],
  },
  {
    question: "Combien de temps souhaitez-vous vous accorder ?",
    options: [
      { label: "30 minutes — une pause express", value: "30" },
      { label: "1 heure — un vrai moment pour moi", value: "60" },
      { label: "1h30 ou plus — un voyage sensoriel", value: "90" },
    ],
  },
];

type Result = {
  title: string;
  description: string;
  link: string;
};

function getResult(answers: string[]): Result {
  if (answers[0] === "specifique") {
    return {
      title: "Massage Prénatal ou Fertilité",
      description:
        "Un soin doux et enveloppant, spécialement pensé pour accompagner les femmes dans ces moments de vie uniques.",
      link: "#massages",
    };
  }
  if (answers[1] === "visage") {
    return {
      title: "Massage Facial Japonais — Kobido",
      description:
        "Un soin d'exception pour le visage, alliant lift naturel et relaxation profonde. Votre peau est repulpée, vos traits détendus.",
      link: "#massages",
    };
  }
  if (answers[2] === "90") {
    return {
      title: "Massage Corps Complet — 1h30",
      description:
        "Un voyage sensoriel complet pour relâcher chaque tension et vous offrir un lâcher-prise total.",
      link: "#massages",
    };
  }
  if (answers[0] === "tensions" || answers[1] === "dos") {
    return {
      title: "Massage Californien ou Suédois",
      description:
        "Idéal pour dénouer les tensions musculaires en profondeur tout en vous offrant un moment de détente absolue.",
      link: "#massages",
    };
  }
  return {
    title: "Massage Bien-être Sur-mesure",
    description:
      "Un massage entièrement adapté à vos besoins du moment. Élodie ajuste chaque geste pour que ce moment soit pleinement le vôtre.",
    link: "#massages",
  };
}

const Quiz = () => {
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

  const result = showResult ? getResult(answers) : null;

  return (
    <section className="py-24 md:py-32 bg-accent/40">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Trouvez votre massage
          </p>
          <h2 className="text-3xl md:text-4xl tracking-tight text-balance">
            Quel massage est fait pour vous ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-background rounded-3xl p-8 md:p-12 shadow-soft"
        >
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
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent mb-6">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl tracking-tight mb-4">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
                    {result.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={result.link}
                      className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Découvrir ce massage
                    </a>
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
      </div>
    </section>
  );
};

export default Quiz;
