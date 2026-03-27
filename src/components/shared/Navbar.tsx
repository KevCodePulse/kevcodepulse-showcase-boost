import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar with phone & email */}
      <div className="hidden md:block bg-foreground text-background text-xs py-2">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="w-3 h-3" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="w-3 h-3" />
              {siteConfig.email}
            </a>
          </div>
          <span className="text-background/60">Based in Kenya, serving clients globally 🌍</span>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background border-b border-border/50"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="KevCodePulse" className="h-10 md:h-12" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-b border-border px-6 pb-6 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-3 text-xs text-muted-foreground">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {siteConfig.phone}
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-3 block text-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg"
              >
                Get Quote
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
