import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-mono uppercase tracking-wider text-primary">
              Contact
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
              Let's Build Your Website
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Ready to turn your website into your best salesperson? Drop us a message and we'll get back to you within 24 hours.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm">hello@kevcodepulse.com</span>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            {[
              { name: "name" as const, label: "Name", type: "text", placeholder: "Your name" },
              { name: "email" as const, label: "Email", type: "email", placeholder: "you@company.com" },
            ].map((field, i) => (
              <motion.div key={field.name} variants={fadeUp} custom={i}>
                <label className="block text-sm font-medium text-foreground mb-2">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </motion.div>
            ))}
            <motion.div variants={fadeUp} custom={2}>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={3}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="shimmer px-8 py-4 text-sm font-bold text-primary-foreground rounded-lg glow-primary inline-flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
