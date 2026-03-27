import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const ease = [0.23, 1, 0.32, 1] as const;

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-xs font-mono uppercase tracking-wider text-primary font-medium">Contact</span>
            <h1 className="mt-3 font-display text-3xl md:text-5xl font-bold tracking-tighter text-foreground">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind? Let's talk about how we can help your business grow.
            </p>
            <p className="mt-2 text-sm text-accent font-medium">We respond within 24 hours</p>

            <div className="mt-8 space-y-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                {siteConfig.address}
              </div>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="p-8 rounded-xl border border-border bg-card space-y-5"
          >
            {[
              { name: "name" as const, label: "Your Name", type: "text", placeholder: "John Doe" },
              { name: "email" as const, label: "Email Address", type: "email", placeholder: "john@example.com" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer w-full py-4 rounded-lg text-sm font-bold text-primary-foreground flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
