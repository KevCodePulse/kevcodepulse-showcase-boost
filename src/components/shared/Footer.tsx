import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const services = [
  { label: "Website Design", href: "/services/website-design" },
  { label: "Website Redesign", href: "/services/website-redesign" },
  { label: "Ecommerce", href: "/services/ecommerce" },
  { label: "SEO Optimization", href: "/services/seo-optimization" },
  { label: "Landing Pages", href: "/services/landing-pages" },
  { label: "Social Media", href: "/services/social-media-management" },
];

const socials = [
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Twitter, href: siteConfig.socials.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
];

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container mx-auto px-6 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="font-display text-xl font-bold text-background">
            Kev<span className="text-accent">Code</span><span className="text-primary">Pulse</span>
          </span>
          <p className="mt-4 text-sm leading-relaxed text-background/60">
            We help businesses in Kenya and worldwide grow through modern, conversion-focused websites, SEO, and digital marketing.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-bold text-background mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-background mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-primary" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-primary" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-background/10 py-6">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40">
        <span>© {new Date().getFullYear()} KevCodePulse. All rights reserved.</span>
        <div className="flex gap-4">
          <Link to="/faq" className="hover:text-background transition-colors">FAQ</Link>
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
