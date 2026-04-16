import { Phone, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTAs = () => {
  return (
    <>
      {/* Bottom-right: Prendre RDV */}
      <motion.a
        href="tel:0666428919"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.4, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full text-sm font-medium shadow-hover hover:shadow-[0_8px_30px_-4px_hsl(14_51%_54%/0.5)] transition-shadow duration-300"
      >
        <Phone className="w-4 h-4" />
        Prendre RDV
      </motion.a>

      {/* Left center: Réserver en ligne — desktop only */}
      <motion.a
        href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4, type: "spring", stiffness: 180 }}
        whileHover={{ x: 4 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center gap-2 bg-foreground text-background px-4 py-3 rounded-r-full text-xs font-medium shadow-soft hover:shadow-hover transition-shadow duration-300 writing-horizontal"
      >
        <CalendarCheck className="w-3.5 h-3.5" />
        <span>Réserver en ligne</span>
      </motion.a>
    </>
  );
};

export default FloatingCTAs;
