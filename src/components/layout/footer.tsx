import Link from "next/link";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const footerNavigation = {
  explore: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Articles", href: "/blog" },
    { name: "Our Philosophy", href: "/about#philosophy" },
    { name: "Timeline", href: "/about#timeline" },
    { name: "Leadership", href: "/about#team" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Twitter", href: "https://twitter.com/neothinkinst", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/neothink-institute", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/@neothinkinstitute", icon: Youtube },
    { name: "Email", href: "mailto:contact@neothinkinstitute.com", icon: Mail },
  ],
};

// Logo Mark Component - Stylized "N" for Neothink
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.5" className="text-gold/30" />
      <path
        d="M14 28V12L26 28V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-border/20">
      {/* Main Footer Content */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <LogoMark className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-semibold text-ivory">
                  Neothink
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-gold">
                  Institute
                </span>
              </div>
            </Link>
            <p className="text-pearl/70 leading-relaxed max-w-md">
              Advancing human potential through integrated thinking and self-leadership
              for over 50 years. Discover transformative insights from three generations
              of pioneering research.
            </p>
            {/* Authority Badge */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <span className="block text-2xl font-display font-bold text-gold">50+</span>
                <span className="text-xs uppercase tracking-widest text-silver">Years</span>
              </div>
              <div className="w-px h-10 bg-stone" />
              <div className="text-center">
                <span className="block text-2xl font-display font-bold text-gold">140+</span>
                <span className="text-xs uppercase tracking-widest text-silver">Countries</span>
              </div>
              <div className="w-px h-10 bg-stone" />
              <div className="text-center">
                <span className="block text-2xl font-display font-bold text-gold">3</span>
                <span className="text-xs uppercase tracking-widest text-silver">Generations</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="footer-heading">Explore</h4>
            <ul className="space-y-3">
              {footerNavigation.explore.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <ul className="space-y-3">
              {footerNavigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="footer-link inline-flex items-center gap-2"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone/30">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-silver">
              &copy; {currentYear} Neothink Institute. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-silver">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-gold transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
