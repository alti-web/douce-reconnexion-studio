import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/50">
        <div className="container text-center">
          <motion.h1
            {...fadeIn}
            className="font-display text-4xl md:text-5xl tracking-tight mb-4"
          >
            Le journal de l'institut
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Conseils bien-être, accompagnement de la grossesse et récits de
            cliente. Des lectures douces pour prendre soin de soi.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <span className="inline-flex self-start items-center text-xs font-medium tracking-wide uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl leading-snug mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingMinutes} min
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
