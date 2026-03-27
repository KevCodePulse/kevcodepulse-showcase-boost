import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { fetchPosts, mapPosts } from "../services/blogService";

const ease = [0.23, 1, 0.32, 1] as const;

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts();
        const formatted = mapPosts(data);
        setPosts(formatted);
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary"
          />

          {/* Text */}
          <p className="text-sm text-muted-foreground font-medium tracking-wide">
            Loading articles...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-mono uppercase tracking-wider text-primary font-medium"
          >
            Blog
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground"
          >
            Insights That Grow Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="mt-5 text-lg text-muted-foreground leading-relaxed"
          >
            Practical advice on web design, SEO, and digital strategy — written
            for business owners who want real results.
          </motion.p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <motion.article
                key={post.id || post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {/* IMAGE */}
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* DATE + READ TIME */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-mono">
                        {new Date(post.date).toDateString()}
                      </span>

                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />

                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />4 min read
                      </span>
                    </div>

                    {/* CATEGORY */}
                    <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Tech
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* EXCERPT */}
                    <p
                      className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />

                    {/* CTA */}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Want More Growth Tips?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Get practical insights delivered straight to your inbox — no spam,
              just value.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
