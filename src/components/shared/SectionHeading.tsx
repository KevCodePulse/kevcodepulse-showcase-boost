import { motion } from "framer-motion";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = false }: SectionHeadingProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className={`max-w-2xl mb-12 md:mb-16 ${centered ? "mx-auto text-center" : ""}`}
  >
    {badge && (
      <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary font-medium">
        {badge}
      </motion.span>
    )}
    <motion.h2 variants={fadeUp} custom={1} className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
      {title}
    </motion.h2>
    {description && (
      <motion.p variants={fadeUp} custom={2} className="mt-4 text-muted-foreground leading-relaxed text-lg">
        {description}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
