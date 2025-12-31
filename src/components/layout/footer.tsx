import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Neothink Institute</h3>
            <p className="text-sm text-muted-foreground">
              Advancing human potential through integrated thinking and
              self-leadership.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Articles
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                Our Philosophy
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Neothink Institute. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
