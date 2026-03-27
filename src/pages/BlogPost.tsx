import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { fetchPosts, mapPosts } from "../services/blogService";

const ease = [0.23, 1, 0.32, 1] as const;

// ------------------------------
// TYPES
// ------------------------------
type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: any;
  featured_media_url?: string;
};

type BlogPostType = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

// ------------------------------
// WORDPRESS FETCH + TRANSFORM
// ------------------------------
const fetchPost = async (slug: string): Promise<BlogPostType | null> => {
  const res = await fetch(
    `https://dimgrey-eagle-927666.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
  );

  const data: WPPost[] = await res.json();
  const post = data[0];

  if (!post) return null;

  // Convert HTML → array of blocks
  const htmlToBlocks = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;

    const blocks: string[] = [];

    div.querySelectorAll("h2, h3, p").forEach((el) => {
      const text = el.textContent?.trim();
      if (!text) return;

      if (el.tagName === "H2") {
        blocks.push(`## ${text}`);
      } else {
        blocks.push(text);
      }
    });

    return blocks;
  };

  return {
    slug: post.slug,
    title: post.title.rendered,
    category: "Category",
    author: post._embedded?.author?.[0]?.name || "Admin",
    date: new Date(post.date).toLocaleDateString(),
    readTime: "5 min read",
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    content: htmlToBlocks(post.content.rendered),
  };
};

// ------------------------------
// COMPONENT
// ------------------------------
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  const [activeHeading, setActiveHeading] = useState("");
  const [copied, setCopied] = useState(false);

  const [posts, setPosts] = useState<any[]>([]);

  // FETCH ALL POSTS
  useEffect(() => {
    async function loadPosts() {
      try {
        const raw = await fetchPosts();
        const mapped = mapPosts(raw);
        setPosts(mapped);
      } catch (err) {
        console.error(err);
      }
    }

    loadPosts();
  }, []);

  // FETCH POST
  useEffect(() => {
    if (!slug) return;

    const load = async () => {
      setLoading(true);
      const data = await fetchPost(slug);
      setPost(data);
      setLoading(false);
    };

    load();
  }, [slug]);

  // HEADINGS
  const headings = useMemo(() => {
    if (!post) return [];

    return post.content
      .filter((block) => block.startsWith("## "))
      .map((block) => {
        const text = block.replace("## ", "");
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return { text, id };
      });
  }, [post]);

  // SCROLL SPY
  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveHeading(visible.target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

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
            Loading post...
          </p>
        </div>
      </div>
    );
  }

  if (!post) return <Navigate to="/blog" replace />;

  // Remove current post
  const otherPosts = posts.filter((p) => p.slug !== slug);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const shareLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>

            <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            {/* Share Icons Row */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Share:
              </span>
              {shareLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${s.label}`}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                aria-label="Copy link"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Link2 className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto px-6 max-w-4xl -mt-2 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            width={800}
            height={512}
            className="w-full h-auto object-cover aspect-[16/9]"
          />
        </motion.div>
      </div>

      {/* 2-Column Layout */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left – Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="flex-1 lg:max-w-[700px]"
            >
              <div className="prose-custom">
                {post.content.map((block, i) => {
                  const isHeading = block.startsWith("## ");
                  const text = isHeading ? block.replace("## ", "") : "";
                  const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "");

                  return isHeading ? (
                    <h2 key={i} id={id} className="text-2xl font-bold mt-10">
                      {text}
                    </h2>
                  ) : (
                    <p
                      key={i}
                      className="mt-4 text-muted-foreground leading-relaxed"
                    >
                      {block}
                    </p>
                  );
                })}

                {/* Bottom CTA */}
                <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Ready to Grow Your Business Online?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Let's build a website that actually brings you leads,
                    customers, and revenue.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="h-11 px-6 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
                      >
                        Start Your Project
                      </motion.button>
                    </Link>
                    <Link to="/portfolio">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="h-11 px-6 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-accent transition-colors"
                      >
                        View Our Work
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.3 }}
              className="w-full lg:w-[300px] shrink-0"
            >
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Table of Contents */}
                {headings?.length > 0 && (
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                      Table of Contents
                    </h4>

                    <nav className="space-y-1">
                      {headings.map((h) => (
                        <button
                          key={h.id}
                          onClick={() => scrollToHeading(h.id)}
                          className={`block w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors leading-snug ${
                            activeHeading === h.id
                              ? "text-primary bg-primary/10 font-semibold"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`}
                        >
                          {h.text}
                        </button>
                      ))}
                    </nav>
                  </div>
                )}

                {/* Share */}
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                    Share This Article
                  </h4>
                  <div className="flex items-center gap-2">
                    {shareLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${s.label}`}
                        className="flex-1 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      >
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                    <button
                      onClick={handleCopyLink}
                      aria-label="Copy link"
                      className="flex-1 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Link2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Lead Capture CTA */}
                <div className="p-6 rounded-xl bg-primary text-primary-foreground">
                  <h4 className="font-display text-lg font-bold">
                    Free Website Audit
                  </h4>
                  <p className="mt-2 text-sm opacity-90 leading-relaxed">
                    Find out what's holding your website back. Get a free,
                    no-obligation audit from our team.
                  </p>
                  <Link to="/contact">
                    <button className="mt-4 w-full h-10 rounded-lg bg-background text-foreground font-semibold text-sm hover:bg-accent transition-colors">
                      Get Your Free Audit
                    </button>
                  </Link>
                </div>

                {/* Popular Posts */}
                <div>
                  <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                    Popular Articles
                  </h4>
                  <div className="space-y-4">
                    {otherPosts.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/blog/${p.slug}`}
                        className="group flex gap-3 items-start"
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          width={80}
                          height={56}
                          className="w-20 h-14 rounded-lg object-cover shrink-0"
                        />
                        <div>
                          <h5 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                            {p.title}
                          </h5>
                          <span className="text-xs text-muted-foreground">
                            {p.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="p-5 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      KM
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Kelvin Munene
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Founder, KevCodePulse
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    6+ years building high-performance websites for businesses
                    in Kenya and beyond. Passionate about speed, SEO, and
                    results-driven design.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
