import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-display text-lg mb-2">Fondamental Massage</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Institut de massages pour femmes<br />
              à Saint-Privat, près d'Aubenas (Ardèche)
            </p>
          </div>

          <div>
            <p className="font-medium text-sm mb-3">Navigation</p>
            <nav className="flex flex-col gap-2">
              <a href="#massages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Massages</a>
              <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#temoignages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Témoignages</a>
              <a href="#a-propos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">À propos</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>

          <div>
            <p className="font-medium text-sm mb-3">Contact</p>
            <a href="tel:0666428919" className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
              <Phone className="w-3.5 h-3.5" />
              06 66 42 89 19
            </a>
            <p className="text-sm text-muted-foreground">
              9 avenue de la Soie<br />
              07200 Saint-Privat
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fondamental Massage — Élodie Valdès. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="/cgv" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
