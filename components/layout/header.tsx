"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 sm:py-4">
        <Link
          href="/"
          aria-label={`${siteConfig.author.name} home`}
          className="navbar-brand min-w-0 gap-3 rounded-full transition-[transform,opacity] duration-300 hover:opacity-95 motion-safe:hover:-translate-y-px"
        >
          <Image
            src="/logo.png"
            alt={`${siteConfig.author.name} logo`}
            width={44}
            height={44}
            priority
            className="navbar-logo"
          />
          <span className="max-w-[10rem] truncate whitespace-nowrap text-sm font-semibold tracking-tight text-foreground/90 sm:max-w-none sm:text-[0.95rem]">
            {siteConfig.author.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-2 lg:flex">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-[transform,color,background-color,box-shadow] duration-300 hover:bg-primary/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 motion-safe:hover:-translate-y-px",
                  pathname === item.href
                    ? "bg-primary/5 text-foreground shadow-[inset_0_0_0_1px_rgba(55,103,184,0.08)]"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-border/80 bg-background/80 px-5"
          >
            <Link href="/#assistant">Ask AI</Link>
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="border-t border-border/70 bg-background/95 lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-sm font-medium transition-[transform,color,background-color] duration-300 hover:bg-secondary hover:text-foreground motion-safe:hover:-translate-y-px",
                      pathname === item.href ? "bg-secondary text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-4 w-full rounded-full border-border/80 bg-background/80"
            >
              <Link href="/#assistant" onClick={() => setMobileMenuOpen(false)}>
                Ask AI About Me
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
