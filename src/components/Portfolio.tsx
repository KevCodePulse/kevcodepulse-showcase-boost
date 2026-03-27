import { motion } from "framer-motion";

const projects = [
  { title: "Luxe Real Estate", type: "Real Estate Agency", year: "2024", color: "from-blue-600/20 to-purple-600/20" },
  { title: "FitPro Gym", type: "Fitness & Wellness", year: "2024", color: "from-green-600/20 to-teal-600/20" },
  { title: "NovaTech SaaS", type: "B2B Software", year: "2023", color: "from-primary/20 to-cyan-600/20" },
  { title: "Artisan Coffee Co.", type: "E-Commerce", year: "2023", color: "from-amber-600/20 to-orange-600/20" },
  { title: "FinanceFlow", type: "Fintech Startup", year: "2024", color: "from-indigo-600/20 to-blue-600/20" },
  { title: "GreenLeaf Organics", type: "Health & Food", year: "2023", color: "from-emerald-600/20 to-lime-600/20" },
];

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const Portfolio = () => (
  <section id="portfolio" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mb-16"
      >
        <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary">
          Portfolio
        </motion.span>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
          Work That Speaks for Itself
        </motion.h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
            variants={fadeUp}
            className="group relative rounded-xl border border-border overflow-hidden cursor-pointer"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <span className="font-display text-2xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors duration-500">
                {p.title.split(" ")[0]}
              </span>
            </div>
            <div className="p-5 bg-card">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display font-bold text-foreground">{p.title}</h3>
                <span className="text-xs font-mono text-muted-foreground tabular-nums">{p.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.type}</p>
            </div>
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-xl transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
