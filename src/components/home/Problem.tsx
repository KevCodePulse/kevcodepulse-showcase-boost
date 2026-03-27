import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import problemImg from "@/assets/frustrated-business.jpg";

const problems = [
  "Your website looks outdated → people don't trust your brand",
  "It loads slowly → visitors leave instantly",
  "You're getting traffic but no inquiries",
  "You're invisible on Google",
  "Your competitors look more professional",
];

const ease = [0.23, 1, 0.32, 1] as const;

const Problem = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <SectionHeading
        badge="The Problem"
        title="Your Website Might Be Costing You Clients"
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-destructive/20 bg-destructive/5"
            >
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
              <span className="text-foreground">{p}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative"
        >
          <img
            src={problemImg}
            alt="Frustrated business owner with poor website analytics"
            className="w-full rounded-xl shadow-lg border border-border"
            loading="lazy"
          />
          <div className="absolute -inset-4 bg-destructive/5 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Problem;
