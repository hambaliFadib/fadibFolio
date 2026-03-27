import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/profile";

const footerIconLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: siteConfig.author.github,
    icon: Github,
  },
  {
    label: "Instagram",
    href: siteConfig.author.instagram,
    icon: Instagram,
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary/80">
            {siteConfig.name}
          </p>
          <p className="text-lg font-semibold tracking-tight text-foreground">
            {siteConfig.author.name}
          </p>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Software Quality Assurance Engineer focused on business-critical systems, structured quality decisions, and enterprise process integrity.
          </p>
          <p className="text-xs text-muted-foreground">
            {currentYear} {siteConfig.author.name}. Built for fast scanning,
            deep evaluation, and future AI-assisted navigation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {footerIconLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = link.href.startsWith("http");

            return (
              <Button
                key={link.label}
                asChild
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-border/80 bg-card/80 text-muted-foreground shadow-none hover:border-primary/25 hover:bg-primary/5 hover:text-foreground hover:shadow-[0_18px_40px_-30px_rgba(11,36,84,0.35)]"
              >
                <Link
                  href={link.href}
                  aria-label={link.label}
                  title={link.label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
