import { motion } from "framer-motion";
import studio2 from "@/assets/studio-2.jpg";
import studio4 from "@/assets/studio-4.jpg";
import studio5 from "@/assets/studio-5.jpg";

const photos = [
  {
    src: studio2,
    alt: "Espace duo : deux tables de massage côte à côte avec ambiance lumineuse cosy",
  },
  {
    src: studio4,
    alt: "Table de massage individuelle face à un rideau tamisé d'ambiance",
  },
  {
    src: studio5,
    alt: "Vue latérale de la cabine de massage avec guirlandes et fauteuil terracotta",
  },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4"
        >
          L'écrin
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-center text-3xl md:text-4xl tracking-tight mb-4"
        >
          Un cocon pensé pour votre détente
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-16 leading-relaxed"
        >
          Lumières douces, matières naturelles et atmosphère feutrée : chaque détail est pensé pour vous inviter au lâcher-prise dès le pas de la porte.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`overflow-hidden rounded-3xl shadow-soft ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                  i === 0 ? "aspect-[4/5] md:aspect-auto md:h-full" : "aspect-[4/5]"
                }`}
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
