import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen">
      <Header />

      <article className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au journal
          </Link>

          <motion.span
            {...fadeIn}
            className="inline-flex items-center text-xs font-medium tracking-wide uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-5"
          >
            {post.category}
          </motion.span>

          <motion.h1
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-display text-3xl md:text-5xl leading-tight tracking-tight mb-5"
          >
            {post.title}
          </motion.h1>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-5 text-sm text-muted-foreground mb-10 pb-10 border-b border-border"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingMinutes} min de lecture
            </span>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90"
          >
            {post.content.map((block, i) => {
              if (block.type === "paragraph") {
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="font-display text-2xl md:text-3xl tracking-tight pt-4 text-foreground"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={i}
                    className="my-8 border-l-2 border-primary pl-6 py-2 italic text-foreground/80"
                  >
                    <p className="font-display text-xl md:text-2xl leading-relaxed mb-2">
                      « {block.text} »
                    </p>
                    {block.author && (
                      <footer className="text-sm not-italic text-muted-foreground">
                        — {block.author}
                      </footer>
                    )}
                  </blockquote>
                );
              }
              if (block.type === "table") {
                return (
                  <div
                    key={i}
                    className="my-8 overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm md:text-base">
                        <thead className="bg-secondary/60">
                          <tr>
                            {block.headers.map((h, hi) => (
                              <th
                                key={hi}
                                className="px-4 py-3 text-left font-display font-medium text-foreground"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, ri) => (
                            <tr
                              key={ri}
                              className="border-t border-border last:border-0"
                            >
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="px-4 py-3 align-top text-foreground/85"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {block.caption && (
                      <p className="px-4 py-2 text-xs text-muted-foreground bg-secondary/30 border-t border-border text-center">
                        {block.caption}
                      </p>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </motion.div>

          <div className="mt-14 p-8 md:p-10 bg-secondary/50 rounded-2xl text-center">
            <p className="font-display text-2xl mb-3">
              Envie de vivre l'expérience ?
            </p>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Réservez votre séance à l'institut, à Saint-Privat près d'Aubenas.
            </p>
            <a
              href="tel:0666428919"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Réserver ma séance
            </a>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="py-16 md:py-20 bg-secondary/40 border-t border-border">
          <div className="container max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl text-center mb-10">
              À lire aussi
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block bg-card p-6 rounded-2xl border border-border shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  <span className="inline-flex items-center text-xs font-medium tracking-wide uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                    {p.category}
                  </span>
                  <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogArticlePage;
