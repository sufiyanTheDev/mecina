import { MecinaLogo } from "./Logo";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

const navLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col items-center lg:items-start">
            <MecinaLogo />
            <p className="mt-4 max-w-xs text-center text-sm text-muted-foreground lg:text-left">
              Crafting memories, one scent at a time. Discover luxury fragrances that tell your story.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="font-medium">Company</p>
              <nav className="mt-4 flex flex-col space-y-2">
                
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-medium">Connect</p>
              <nav className="mt-4 flex flex-col space-y-2">
                 {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:justify-start">
                        <social.icon className="h-4 w-4" />
                        {social.label}
                    </a>
                 ))}
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-medium">Join Our Newsletter</p>
              <form className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Get exclusive access to new products and offers.
                </p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Email for newsletter"
                    className="flex-1"
                  />
                  <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MECINA Fragrances. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
