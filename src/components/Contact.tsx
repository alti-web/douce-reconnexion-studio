import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Car } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          Accès & Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-3xl md:text-4xl tracking-tight mb-16"
        >
          Venez me rencontrer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.1!2d4.3831!3d44.5994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4fc8e6e1e5e1d%3A0x0!2s9+Avenue+de+la+Soie%2C+07200+Saint-Privat!5e0!3m2!1sfr!2sfr!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fondamental Massage — Saint-Privat"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Adresse</p>
                <p className="text-muted-foreground text-sm">
                  9 avenue de la Soie<br />
                  07200 Saint-Privat
                </p>
                <p className="text-muted-foreground text-xs mt-1">À 5 min d'Aubenas</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Parking</p>
                <p className="text-muted-foreground text-sm">Parking gratuit à disposition</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Téléphone</p>
                <a href="tel:0666428919" className="text-primary font-medium text-sm hover:underline underline-offset-4">
                  06 66 42 89 19
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium mb-1">Horaires</p>
                <p className="text-muted-foreground text-sm">Sur rendez-vous uniquement</p>
                <p className="text-xs text-primary mt-2 font-medium">
                  Ouvert 1er mai et dimanche de Pentecôte
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:0666428919"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Réserver ma séance
              </a>
              <a
                href="https://www.fresha.com/fr/book-now/fondamental-massage-re4dn2mw/services?lid=2753315&eid=4859480&share=true&pId=2663592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-accent transition-all duration-200"
              >
                Réserver en ligne
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
