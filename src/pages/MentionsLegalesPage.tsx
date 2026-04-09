import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const MentionsLegalesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/50">
        <div className="container text-center">
          <motion.h1 {...fadeIn} className="font-display text-4xl md:text-5xl tracking-tight mb-4">
            Mentions légales
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl prose prose-stone">
          <motion.div {...fadeIn} className="space-y-10">
            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Éditeur du site</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1 text-sm">
                <p><strong className="text-foreground">Raison sociale :</strong> Fondamental Massage</p>
                <p><strong className="text-foreground">Gérante :</strong> Élodie Valdès</p>
                <p><strong className="text-foreground">Activité :</strong> Praticienne en massages bien-être</p>
                <p><strong className="text-foreground">Adresse :</strong> 9 avenue de la Soie, 07200 Saint-Privat</p>
                <p><strong className="text-foreground">Téléphone :</strong> <a href="tel:0666428919" className="text-primary hover:underline">06 66 42 89 19</a></p>
                <p><strong className="text-foreground">SIRET :</strong> À compléter</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Hébergement</h2>
              <div className="text-muted-foreground leading-relaxed space-y-1 text-sm">
                <p><strong className="text-foreground">Hébergeur :</strong> Lovable (lovable.dev)</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, photographies, logos, icônes) est la propriété exclusive de Fondamental Massage — Élodie Valdès, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation totale ou partielle de ce contenu, sans l'autorisation expresse et préalable de l'éditeur, est interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Données personnelles</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ce site ne collecte aucune donnée personnelle via des formulaires ou des cookies de suivi. Les seules informations de navigation (adresse IP, type de navigateur) peuvent être enregistrées à des fins techniques par l'hébergeur, conformément à la réglementation en vigueur.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour toute demande, vous pouvez contacter Élodie Valdès par téléphone au 06 66 42 89 19.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Responsabilité</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que possible et régulièrement mises à jour. Toutefois, l'éditeur ne peut garantir l'exactitude, la complétude ou l'actualité de toutes les informations. L'éditeur décline toute responsabilité pour tout dommage résultant de l'utilisation de ce site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl tracking-tight mb-4">Crédits</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conception et réalisation du site : Lovable
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Photographies : © Fondamental Massage — Élodie Valdès
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentionsLegalesPage;
