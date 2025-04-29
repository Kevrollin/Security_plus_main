
import { Link } from "react-router-dom";
import { NewsletterSubscription } from "./NewsletterSubscription";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Marketplace", path: "/marketplace" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="inline-flex">
              <span className="text-2xl font-bold text-primary font-heading">
                Security<span className="text-cyber-accent">+</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Simplifying cybersecurity one article at a time. We provide expert insights, tools, and resources to keep you safe online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h5 className="font-heading font-medium text-lg">Quick Links</h5>
            <div className="grid grid-cols-1 gap-2">
              {footerLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <NewsletterSubscription />
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SecurityPlus. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
