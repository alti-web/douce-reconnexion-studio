import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const CGVPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/50">
        <div className="container text-center">
          <motion.h1 {...fadeIn} className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Conditions Générales de Vente
          </motion.h1>
          <motion.p {...fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
            Les présentes conditions encadrent les prestations proposées par Fondamental Massage.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl prose prose-stone">
          <motion.div {...fadeIn} className="space-y-10">
            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Prestataire</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1 text-sm">
                <p><strong className="text-foreground">Raison sociale :</strong> Fondamental Massage</p>
                <p><strong className="text-foreground">Gérante :</strong> Élodie Valdès</p>
                <p><strong className="text-foreground">Activité :</strong> Praticienne en massages bien-être</p>
                <p><strong className="text-foreground">Adresse :</strong> 9 avenue de la Soie, 07200 Saint-Privat</p>
                <p><strong className="text-foreground">Téléphone :</strong> <a href="tel:0666428919" className="text-primary hover:underline">06 66 42 89 19</a></p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Prestations</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fondamental Massage propose des massages bien-être à visée de relaxation et de détente. Ces prestations ne constituent en aucun cas un acte médical, paramédical ou thérapeutique, et ne sauraient remplacer un avis ou un traitement médical.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                Les durées indiquées correspondent au temps réel de massage. Les temps d'accueil, d'échange préalable et de départ ne sont pas décomptés de la séance.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Réservation</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Les réservations s'effectuent en ligne via la plateforme Fresha ou par téléphone. Un préavis minimum de 48 heures est requis pour toute prise de rendez-vous afin de garantir la disponibilité du créneau souhaité.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Tarifs et moyens de paiement</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Les tarifs en vigueur sont affichés sur le site et au sein de l'institut. Le paiement s'effectue à l'issue de la séance.
              </p>
              <ul className="text-muted-foreground text-sm leading-relaxed mt-2 space-y-1 list-disc pl-5">
                <li><strong className="text-foreground">Massages individuels :</strong> Carte bancaire ou espèces</li>
                <li><strong className="text-foreground">Massages duo :</strong> Chèques ou espèces uniquement (pas de CB)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Annulation et report</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Toute annulation ou modification de rendez-vous doit être communiquée au minimum 48 heures à l'avance. Passé ce délai, la séance pourra être considérée comme due.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Contre-indications</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Il appartient à la cliente de signaler avant la séance toute pathologie, traitement médical en cours, allergie ou état particulier (notamment grossesse) susceptible de constituer une contre-indication au massage. En cas de doute, un avis médical préalable est recommandé.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Assurance professionnelle</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fondamental Massage est couverte par une assurance responsabilité civile professionnelle souscrite auprès de <strong className="text-foreground">Medinat</strong>, garantissant la praticienne contre les risques liés à l'exercice de son activité.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Responsabilité</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                La praticienne s'engage à mettre en œuvre tout son savoir-faire pour assurer le bien-être de ses clientes dans le respect des règles de l'art. Sa responsabilité ne saurait toutefois être engagée en cas d'omission, par la cliente, d'informations relatives à son état de santé.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGVPage;
