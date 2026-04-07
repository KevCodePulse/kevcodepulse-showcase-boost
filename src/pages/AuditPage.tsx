import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Zap,
  Shield,
  Eye,
  Award,
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Send,
  Globe,
  BarChart3,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

/* ---------------- TYPES ---------------- */

type Suggestion = {
  id: string;
  title: string;
  description: string;
  score: number;
  displayValue?: string | null;
  impact: "high" | "medium" | "low";
};

interface AuditResult {
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
  suggestions: Suggestion[];
}

const scoreColor = (score: number) => {
  if (score >= 90) return "text-green-500";
  if (score >= 50) return "text-yellow-500";
  return "text-red-500";
};

const scoreBg = (score: number) => {
  if (score >= 90) return "from-green-500/20 to-green-500/5";
  if (score >= 50) return "from-yellow-500/20 to-yellow-500/5";
  return "from-red-500/20 to-red-500/5";
};

const scoreRing = (score: number) => {
  if (score >= 90) return "stroke-green-500";
  if (score >= 50) return "stroke-yellow-500";
  return "stroke-red-500";
};

const CircularScore = ({
  score,
  label,
  icon: Icon,
  delay,
}: {
  score: number;
  label: string;
  icon: React.ElementType;
  delay: number;
}) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl border border-border bg-gradient-to-br ${scoreBg(score)} p-6 flex flex-col items-center gap-4`}
    >
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="6"
            className="stroke-muted/30"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            className={scoreRing(score)}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className={`text-3xl font-bold font-display ${scoreColor(score)}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
          >
            {score}
          </motion.span>
        </div>
      </div>
      <div className="flex items-center gap-2 text-foreground font-semibold">
        <Icon className="w-4 h-4 text-muted-foreground" />
        {label}
      </div>
    </motion.div>
  );
};

const AuditPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState<AuditResult | null>(null);
  const [leadForm, setLeadForm] = useState({ email: "", whatsapp: "" });

  const isValidUrl = (input: string) => {
    try {
      const u = input.startsWith("http") ? input : `https://${input}`;
      new URL(u);
      return true;
    } catch {
      return false;
    }
  };

  const runAudit = async () => {
    if (!url.trim()) {
      setError("Please enter a website URL");
      return;
    }

    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      return;
    }

    setError("");
    setLoading(true);
    setResults(null);

    try {
      const cleanUrl = url.startsWith("http") ? url : `https://${url}`;

      const apiKey = import.meta.env.VITE_PAGESPEED_API_KEY;

      if (!apiKey) {
        throw new Error("Missing API key");
      }

      const res = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          cleanUrl,
        )}&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo`,
      );

      const data = await res.json();

      if (!data?.lighthouseResult) {
        throw new Error("Invalid API response");
      }

      const categories = data.lighthouseResult.categories;
      const audits = data.lighthouseResult.audits;

      // -----------------------------
      // BUILD SUGGESTIONS (PRO LEVEL)
      // -----------------------------
      const allRefs = [
        ...(categories.performance?.auditRefs || []),
        ...(categories.seo?.auditRefs || []),
        ...(categories.accessibility?.auditRefs || []),
        ...(categories["best-practices"]?.auditRefs || []),
      ];

      const failingMap = new Map();

      allRefs.forEach((ref: any) => {
        const audit = audits?.[ref.id];

        if (!audit) return;

        // only keep failing / imperfect audits
        if (audit.score !== null && audit.score < 1) {
          if (!failingMap.has(ref.id)) {
            failingMap.set(ref.id, {
              id: ref.id,
              title: audit.title,
              description: audit.description,
              score: audit.score,
              displayValue: audit.displayValue || null,

              impact:
                audit.score <= 0.5
                  ? "high"
                  : audit.score < 0.9
                    ? "medium"
                    : "low",
            });
          }
        }
      });

      const suggestions = Array.from(failingMap.values())
        .sort((a: any, b: any) => a.score - b.score)
        .slice(0, 8);

      // -----------------------------
      // FINAL RESULT
      // -----------------------------
      const result = {
        performance: Math.round((categories?.performance?.score || 0) * 100),
        seo: Math.round((categories?.seo?.score || 0) * 100),
        accessibility: Math.round(
          (categories?.accessibility?.score || 0) * 100,
        ),
        bestPractices: Math.round(
          (categories?.["best-practices"]?.score || 0) * 100,
        ),

        suggestions,
      };

      setResults(result);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze website. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I just ran a website audit on ${url}. I'd like the full report and fix plan. My email: ${leadForm.email}`,
    );
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-medium mb-6">
              <Zap className="w-3.5 h-3.5" /> Free Tool
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4">
              Free Website <span className="text-primary">SEO Audit</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Get your performance, SEO and speed score instantly. Powered by
              Google Lighthouse data.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto px-2"
          >
            <div className="relative flex-1">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && runAudit()}
                placeholder="Enter URL (e.g. example.com)"
                className="pl-10 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 text-base rounded-xl"
              />
            </div>
            <Button
              onClick={runAudit}
              disabled={loading}
              size="lg"
              className="h-14 px-8 font-semibold text-base rounded-xl w-full sm:w-auto"
            >
              <Search className="w-5 h-5 mr-2" />
              {loading ? "Analyzing…" : "Run Free Audit"}
            </Button>
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-3"
            >
              {error}
            </motion.p>
          )}
        </div>
      </section>

      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 bg-muted/30"
          >
            <div className="container mx-auto px-4 max-w-md text-center">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-muted" />
                <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Analyzing your website…
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                This may take a few seconds
              </p>
              <Progress value={65} className="h-2 max-w-xs mx-auto" />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {results && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Score Cards */}
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium">
                    Audit Results
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-foreground mt-2">
                    Your Website Scores
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    for{" "}
                    <span className="font-medium text-foreground">{url}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <CircularScore
                    score={results.performance}
                    label="Performance"
                    icon={Zap}
                    delay={0}
                  />
                  <CircularScore
                    score={results.seo}
                    label="SEO"
                    icon={BarChart3}
                    delay={0.1}
                  />
                  <CircularScore
                    score={results.accessibility}
                    label="Accessibility"
                    icon={Eye}
                    delay={0.2}
                  />
                  <CircularScore
                    score={results.bestPractices}
                    label="Best Practices"
                    icon={Shield}
                    delay={0.3}
                  />
                </div>
              </div>
            </section>

            {/* Suggestions */}
            {results?.suggestions?.length > 0 && (
              <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 max-w-3xl">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-foreground">
                      Fix These Issues to Improve Your Website
                    </h2>
                    <p className="text-muted-foreground mt-2 text-sm">
                      These are the biggest factors affecting your SEO &
                      performance score
                    </p>
                  </div>

                  {/* List */}
                  <div className="space-y-3">
                    {results.suggestions.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="group relative flex flex-col sm:flex-row sm:items-start gap-3 p-4 sm:p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300"
                      >
                        {/* Icon + Badge row on mobile */}
                        <div className="flex items-center justify-between sm:block">
                          <div
                            className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                              item.impact === "high"
                                ? "bg-red-500/10 text-red-500"
                                : item.impact === "medium"
                                  ? "bg-yellow-500/10 text-yellow-500"
                                  : "bg-green-500/10 text-green-500"
                            }`}
                          >
                            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span
                            className={`sm:hidden text-xs font-semibold px-2 py-0.5 rounded-full ${
                              item.impact === "high"
                                ? "bg-red-500/10 text-red-500"
                                : item.impact === "medium"
                                  ? "bg-yellow-500/10 text-yellow-500"
                                  : "bg-green-500/10 text-green-500"
                            }`}
                          >
                            {item.impact.toUpperCase()}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors break-words">
                              {item.title}
                            </h3>
                            <span
                              className={`hidden sm:inline-block shrink-0 text-xs font-semibold px-2 py-1 rounded-full ${
                                item.impact === "high"
                                  ? "bg-red-500/10 text-red-500"
                                  : item.impact === "medium"
                                    ? "bg-yellow-500/10 text-yellow-500"
                                    : "bg-green-500/10 text-green-500"
                              }`}
                            >
                              {item.impact.toUpperCase()}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-3">
                            {item.description}
                          </p>

                          <div className="flex items-center justify-between mt-2 sm:mt-3">
                            <p className="text-xs text-muted-foreground">
                              Score:{" "}
                              <span className="font-medium text-foreground">
                                {Math.round(item.score * 100)}%
                              </span>
                            </p>
                            <div className="w-20 sm:w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  item.impact === "high"
                                    ? "bg-red-500"
                                    : item.impact === "medium"
                                      ? "bg-yellow-500"
                                      : "bg-green-500"
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.score * 100}%` }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {/* Lead Capture */}
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4 max-w-2xl">
                <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 md:p-12 text-center overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Lock className="w-5 h-5 text-primary/40" />
                  </div>

                  <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tighter text-foreground mb-2">
                    Get Full AI Report + Fix Plan
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    We'll send you a detailed breakdown with exact steps to fix
                    every issue and boost your scores.
                  </p>

                  <form
                    onSubmit={handleLeadSubmit}
                    className="space-y-4 max-w-sm mx-auto"
                  >
                    <Input
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, email: e.target.value })
                      }
                      placeholder="Your email address"
                      className="h-12 text-base"
                    />
                    <Input
                      type="tel"
                      value={leadForm.whatsapp}
                      onChange={(e) =>
                        setLeadForm({ ...leadForm, whatsapp: e.target.value })
                      }
                      placeholder="WhatsApp number (optional)"
                      className="h-12 text-base"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" /> Send Full Report
                    </Button>
                  </form>

                  <div className="mt-6">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("I want my full website audit report")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Or chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust Strip */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            {[
              { icon: Globe, text: "Used by businesses & freelancers" },
              { icon: BarChart3, text: "Powered by Google Lighthouse data" },
              {
                icon: CheckCircle,
                text: "Instant results in under 10 seconds",
              },
            ].map(({ icon: I, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <I className="w-4 h-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditPage;
