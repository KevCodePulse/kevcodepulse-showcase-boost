import { useParams, Navigate } from "react-router-dom";
import { getLocationConfig } from "@/data/therapistLocations";
import type { TherapistLocationConfig } from "@/data/therapistLocations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart, Calendar, Search, Smartphone, Shield, ArrowRight,
  CheckCircle2, XCircle, MessageCircle, Phone, Users, Clock,
  Eye, MousePointerClick, Star, ChevronRight, Sparkles, Leaf,
  MapPin, TrendingUp, Globe
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import heroImg from "@/assets/therapist-hero.jpg";
import mockupImg from "@/assets/therapist-mockup.jpg";
import beforeAfterImg from "@/assets/therapist-before-after.jpg";
import successImg from "@/assets/therapist-success.jpg";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

/* ─── HERO ─── */
const HeroSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
    </div>
    <div className="container mx-auto px-6 relative z-10 py-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
        >
          <MapPin className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">
            Built Exclusively for Therapists in {config.location}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-background"
        >
          {config.hero.headline.split(config.location).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>{part}<span className="text-primary">{config.location}</span></span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className="mt-6 text-lg text-background/70 leading-relaxed max-w-xl"
        >
          {config.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary"
            >
              Get Your Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm a therapist in ${config.location} and I'd like to discuss a website for my practice.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold border border-background/30 rounded-lg text-background hover:border-background/50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-6 text-sm text-background/60"
        >
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-secondary" /> No payment upfront</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-secondary" /> 7-day turnaround</span>
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-primary" fill="hsl(43 96% 56%)" /> 60+ sites launched</span>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── PROBLEM ─── */
const problemIcons = [Users, Eye, Calendar, MousePointerClick];

const ProblemSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">
          Sound familiar?
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
          If You're a Therapist in {config.location}, You've Probably Felt This
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground text-lg">
          You're great at what you do — but growing your practice online in {config.location} feels overwhelming.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {config.problems.map((p, i) => {
          const Icon = problemIcons[i] || Users;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-destructive/15 bg-destructive/[0.03] hover:border-destructive/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── SOLUTION ─── */
const solutions = [
  { icon: Heart, title: "Trust-Building Design", desc: "Warm, professional layouts that make clients feel safe before they even contact you." },
  { icon: Calendar, title: "Integrated Booking", desc: "One-click booking or contact forms that make it effortless for clients to reach you." },
  { icon: Smartphone, title: "Mobile-First", desc: "Over 70% of therapy searches happen on mobile. Your site will look perfect on every device." },
  { icon: Search, title: "SEO That Gets Found", desc: "Show up when people search 'therapist near me'. We optimize every page for local search." },
  { icon: Shield, title: "HIPAA-Aware Design", desc: "Privacy-conscious design that reinforces confidentiality and professional standards." },
  { icon: MousePointerClick, title: "Clear Call-to-Actions", desc: "Every page guides visitors toward booking — no confusion, no dead ends." },
];

const SolutionSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">The Solution</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
            Not Just a Website —{" "}
            <span className="text-gradient">A Client Acquisition System</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We build complete digital systems designed specifically for therapy practices in {config.location}.
            Every element is crafted to convert visitors into booked sessions.
          </p>

          <div className="mt-8 grid gap-4">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.07 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-background/60 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <s.icon className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{s.title}</h4>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <img src={mockupImg} alt={`Therapist website mockup for ${config.location}`} className="w-full rounded-2xl shadow-2xl border border-border" loading="lazy" width={1024} height={1024} />
          <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── LOCAL RELEVANCE ─── */
const LocalRelevanceSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">
          <MapPin className="w-3.5 h-3.5 inline mr-1" /> Local Insight
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          {config.localRelevance.title}
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-1 flex flex-col items-center justify-center p-8 rounded-2xl bg-secondary/5 border border-secondary/20"
        >
          <TrendingUp className="w-10 h-10 text-secondary mb-4" />
          <span className="font-display text-5xl font-bold text-foreground">{config.localRelevance.stat.value}</span>
          <span className="mt-2 text-sm text-muted-foreground text-center">{config.localRelevance.stat.label}</span>
        </motion.div>

        <div className="lg:col-span-2 grid gap-4">
          {config.localRelevance.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease, delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-secondary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground text-sm leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── BEFORE / AFTER ─── */
const BeforeAfterSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">
          The Transformation
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          See What's Possible for Your {config.location} Practice
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <img src={beforeAfterImg} alt="Before and after therapist website redesign" className="w-full rounded-2xl shadow-lg border border-border" loading="lazy" width={1024} height={1024} />
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="p-6 rounded-2xl border border-destructive/20 bg-destructive/[0.03]"
          >
            <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-destructive" /> Before
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Generic template that looks like every other therapist", "No clear way to book a session", "Slow loading, poor mobile experience", `Not showing up on Google in ${config.location}`, "Visitors leave within seconds"].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="p-6 rounded-2xl border border-secondary/20 bg-secondary/[0.03]"
          >
            <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-secondary" /> After
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Professional design that builds trust immediately", "Easy one-click booking integrated on every page", "Lightning-fast on all devices", `Ranking for 'therapist in ${config.location}' on Google`, "3x more inquiries within the first month"].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── DEMO / PROOF ─── */
const DemoSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="order-2 lg:order-1"
        >
          <img src={successImg} alt="Therapist receiving new bookings" className="w-full rounded-2xl shadow-xl border border-border" loading="lazy" width={1024} height={1024} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="order-1 lg:order-2"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">See It In Action</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
            We'll Build Your Homepage for <span className="text-primary">Free</span> — Before You Pay Anything
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            We'll create a custom homepage demo for your {config.location} practice
            — completely free, no strings attached. If you love it, we continue. If not, no hard feelings.
          </p>

          <div className="mt-8 space-y-4">
            {[
              `Custom design tailored to your ${config.location} practice`,
              "Real copy written for your ideal clients",
              "Mobile-optimized and fast-loading preview",
              "WhatsApp & booking integration included",
              "Delivered within 3 business days",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease, delay: i * 0.07 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
            <Link to="/contact" className="shimmer inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
              Get My Free Demo <Sparkles className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── TESTIMONIALS ─── */
const TestimonialsSection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container mx-auto px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">
          Real Results
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Therapists in {config.location} Who Transformed Their Practice
        </motion.h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {config.testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.12 }}
            className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="w-4 h-4 text-primary" fill="hsl(43 96% 56%)" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-sm font-bold text-secondary">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── OBJECTION HANDLING ─── */
const objections = [
  { q: "I'm not tech-savvy at all", a: "You don't need to be. We handle everything from start to finish — design, content, setup, and launch. You just tell us about your practice." },
  { q: "I don't know what content to put on my site", a: "We guide you through it with our proven therapist questionnaire. Most clients are surprised how easy it is." },
  { q: "I've had a bad experience with web designers before", a: "That's exactly why we build your homepage for free first. You see the quality before spending a penny." },
  { q: "I'm not sure if I'm ready to invest", a: "A website that brings in even 2-3 new clients per month pays for itself many times over. And with our free demo, there's zero risk." },
];

const ObjectionSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-14">
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-secondary font-medium">
          Common Concerns
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
          Still Not Sure? That's Okay.
        </motion.h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {objections.map((o, i) => (
          <motion.details
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            className="group p-5 rounded-xl border border-border bg-card hover:border-secondary/30 transition-colors cursor-pointer"
          >
            <summary className="flex items-center justify-between font-semibold text-foreground text-sm list-none">
              {o.q}
              <ChevronRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform" />
            </summary>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{o.a}</p>
          </motion.details>
        ))}
      </div>
    </div>
  </section>
);

/* ─── FINAL CTA ─── */
const FinalCTASection = ({ config }: { config: TherapistLocationConfig }) => (
  <section className="py-20 md:py-28 bg-foreground">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-background">
          Ready to Fill Your {config.location} Calendar With{" "}
          <span className="text-primary">Ideal Clients?</span>
        </h2>
        <p className="mt-4 text-background/60 text-lg">
          Let's build a website that actually works for your therapy practice in {config.location}. Start with a free custom demo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="shimmer inline-flex items-center gap-2 px-10 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary">
              Get My Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I'm a therapist in ${config.location} and I'd like to learn more about your website services.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold border border-background/20 rounded-lg hover:border-background/40 transition-colors text-background"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </motion.div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-background/50">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-background/70 transition-colors">
            <Phone className="w-4 h-4" /> {siteConfig.phone}
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const TherapistLocationLanding = () => {
  const { location } = useParams<{ location: string }>();
  const config = location ? getLocationConfig(location) : undefined;

  if (!config) {
    return <Navigate to="/therapists" replace />;
  }

  return (
    <>
      <HeroSection config={config} />
      <ProblemSection config={config} />
      <SolutionSection config={config} />
      <LocalRelevanceSection config={config} />
      <BeforeAfterSection config={config} />
      <DemoSection config={config} />
      <TestimonialsSection config={config} />
      <ObjectionSection />
      <FinalCTASection config={config} />
    </>
  );
};

export default TherapistLocationLanding;
