import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeNavigationCards } from "@/data/profile";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function HomeNavigationSection() {
  return (
    <section className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Explore next"
          title="Start from what you want to understand"
          description="Home stays intentionally brief. Use these entry points to explore deeper work, structured thinking, and background context."
        />

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-3">
          {homeNavigationCards.map((item) => (
            <Link key={item.title} href={item.href} className="group block h-full">
              <Card className="h-full border-border/70 bg-card/95 py-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-40px_rgba(11,36,84,0.45)]">
                <CardContent className="flex h-full flex-col justify-between gap-8 px-5 py-6">
                  <div className="space-y-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
                      Entry point
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    {item.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
