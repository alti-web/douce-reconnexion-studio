import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Massages", href: "/massages" },
  { label: "Carte cadeau", href: "/massages#carte-cadeau" },
  { label: "Déroulement", href: "/deroulement" },
  { label: "Blog", href: "/blog" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "À propos", href: "/#a-propos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (isHome) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home, then scroll after page loads
        window.location.href = href;
      }
    }
  };

  const renderLink = (link: { label: string; href: string }, className: string) => {
    if (link.href.startsWith("/") && !link.href.startsWith("/#")) {
      return (
        <Link key={link.href} to={link.href} className={className} onClick={() => setMenuOpen(false)}>
          {link.label}
        </Link>
      );
    }
    if (link.href.startsWith("/#") && isHome) {
      return (
        <a key={link.href} href={link.href.replace("/", "")} className={className} onClick={() => handleNavClick(link.href)}>
          {link.label}
        </a>
      );
    }
    return (
      <Link key={link.href} to={link.href} className={className} onClick={() => setMenuOpen(false)}>
        {link.label}
      </Link>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg md:text-xl tracking-tight text-foreground">
          Fondamental Massage
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            renderLink(link, "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200")
          )}
          <a
            href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Réserver en ligne sur Fresha (ouvre dans un nouvel onglet)"
            title="Réserver en ligne sur Fresha"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            Réserver en ligne
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                renderLink(link, "text-base text-foreground py-2")
              )}
              <a
                href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Réserver en ligne sur Fresha (ouvre dans un nouvel onglet)"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium mt-2"
              >
                Réserver en ligne
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
