import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { heroContent, siteConfig } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HomeHero() {
  return (
    <section className="relative px-6 pb-10 pt-12 md:pt-16 lg:pb-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(28,68,132,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(116,169,255,0.16),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(120,160,255,0.2),transparent_34%),radial-gradient(circle_at_top_right,rgba(56,94,165,0.28),transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <Card className="overflow-hidden rounded-[2rem] border-border/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(238,246,255,0.92))] py-0 shadow-[0_24px_70px_-46px_rgba(11,36,84,0.5)] dark:bg-[linear-gradient(135deg,rgba(23,31,49,0.96),rgba(15,23,42,0.9))] dark:shadow-[0_24px_70px_-46px_rgba(2,8,23,0.72)]">
          <CardContent className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-15">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-center lg:gap-12 xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14">
              <div className="max-w-4xl space-y-6 lg:space-y-8">
                <div className="space-y-4 lg:space-y-5">
                  <div className="space-y-2">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
                      {siteConfig.author.role}
                    </p>
                    <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                      {siteConfig.author.name}
                    </h1>
                  </div>

                  <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    {heroContent.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Button asChild size="lg" className="h-12 rounded-full px-6">
                    <Link href={heroContent.primaryCta.href}>
                      {heroContent.primaryCta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 rounded-full border-border/80 bg-background/90 px-6"
                  >
                    <Link href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</Link>
                  </Button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[15rem] lg:max-w-none lg:justify-self-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/70 bg-secondary/35 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.75)]">
                  <Image
                    src="/profile.jpg"
                    alt="Hambali Fadib"
                    fill
                    priority
                    sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, (min-width: 640px) 15rem, 72vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
