"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Logo Mark Component - Stylized "N" for Neothink
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10", className)}
    >
      {/* Outer circle */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
      {/* Inner circle accent */}
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.5" className="text-gold/30" />
      {/* Stylized N */}
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

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="section-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <LogoMark className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-lg font-display font-semibold tracking-wide text-foreground">
                Neothink
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-gold">
                Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link",
                  pathname === item.href && "nav-link-active"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-charcoal border-l border-border/40"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between py-4 border-b border-border/40">
                  <Link href="/" className="flex items-center gap-3">
                    <LogoMark className="w-8 h-8" />
                    <span className="font-display font-semibold text-foreground">
                      Neothink Institute
                    </span>
                  </Link>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-2 py-8">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-4 py-4 text-lg font-display font-medium rounded-lg transition-all duration-200",
                          pathname === item.href
                            ? "bg-gold/10 text-gold border-l-2 border-gold"
                            : "text-pearl hover:bg-muted hover:text-gold"
                        )}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-auto pb-8 px-4">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="w-full btn-premium-gold"
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </SheetClose>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Advancing Human Potential Since 1968
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
