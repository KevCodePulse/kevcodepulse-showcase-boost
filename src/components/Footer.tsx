const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-sm font-bold text-foreground">
        Kev<span className="text-accent">Code</span><span className="text-primary">Pulse</span>
      </span>
      <div className="flex items-center gap-6">
        {["About", "Services", "Portfolio", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} KevCodePulse. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
