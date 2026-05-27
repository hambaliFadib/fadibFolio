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
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={`${siteConfig.author.name} home`}
          className="flex min-w-0 items-center gap-3 rounded-md text-xl font-semibold text-foreground transition-[transform,opacity] duration-300 hover:opacity-80 motion-safe:hover:-translate-y-px"
        >
          <Image
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            priority
            className="h-8 w-8 shrink-0 rounded-md"
          />
          <span className="block max-w-[12rem] truncate whitespace-nowrap sm:max-w-none">
            Hambali Fadib
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative px-0.5 py-2 text-sm font-medium text-muted-foreground transition-[transform,color,opacity] duration-300 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 motion-safe:hover:-translate-y-px",
                  pathname === item.href
                    ? "text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild className="h-10 rounded-full px-5">
            <Link href="/contact">Get in Touch</Link>
          </Button>
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
        <div className="border-t border-border/70 bg-background/96 lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-[transform,color,background-color] duration-300 hover:bg-secondary hover:text-foreground motion-safe:hover:-translate-y-px",
                      pathname === item.href
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-4 w-full rounded-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
