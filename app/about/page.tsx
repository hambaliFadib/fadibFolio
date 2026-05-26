import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IdentityMarker } from "@/components/portfolio/identity-marker";
import {
  aboutCvAction,
  aboutFinalStatement,
  aboutHardSkillGroups,
  aboutPersonalFoundation,
  aboutProfile,
} from "@/data/about";
import { educationItems } from "@/data/education";
import { experienceEntries } from "@/data/experience";
import {
  formatMonthYear,
  formatTimelinePeriod,
  formatTimelineRange,
} from "@/lib/date-ranges";

export const metadata: Metadata = {
  title: "About",
  description: aboutProfile.summary,
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
      {children}
    </p>
  );
}

function AboutSectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-3 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function EducationRange({ item }: { item: (typeof educationItems)[number] }) {
  if (!item.expectedGraduation) {
    return <>{formatTimelineRange(item.range)}</>;
  }

  return (
    <>
      {formatTimelineRange(item.range)} / expected{" "}
      {formatMonthYear(item.expectedGraduation)}
    </>
  );
}

export default function AboutPage() {
  return (
    <div>
      <section className="px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-[1.06] text-foreground sm:text-6xl">
                Architecting Quality, Ensuring Stability.
              </h1>
              <p className="max-w-2xl text-lg leading-9 text-muted-foreground">
                {aboutProfile.summary}
              </p>
            </div>

            <blockquote className="border-l-2 border-primary/50 pl-5 text-xl italic leading-9 text-foreground/82">
              {aboutProfile.principle}
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-11 rounded-full px-5">
                <a href={aboutCvAction.href} target="_blank" rel="noreferrer">
                  <ArrowDownToLine className="h-4 w-4" />
                  {aboutCvAction.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-border/80 bg-background/80 px-5"
              >
                <Link href="/contact">
                  Contact
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[37rem] lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/70 bg-secondary/35 shadow-[0_30px_80px_-50px_rgba(20,33,61,0.55)]">
              <Image
                src="/fotoAbout.jpg"
                alt={aboutProfile.image.alt}
                fill
                priority
                sizes="(min-width: 1280px) 592px, (min-width: 1024px) 46vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/28 via-transparent to-white/10 dark:from-black/42" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)]">
          <div className="space-y-8">
            <AboutSectionHeading eyebrow="Career progression" title="Experience" />

            <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-border">
              {experienceEntries.map((entry) => (
                <div key={entry.id} className="relative">
                  <span className="absolute -left-[1.95rem] top-2 h-6 w-6 rounded-full border border-primary/25 bg-background shadow-sm" />
                  <Card className="border-border/70 bg-card/92">
                    <CardContent className="space-y-5 p-6">
                      <div className="flex items-start gap-4">
                        <IdentityMarker
                          src={entry.companyLogo.src}
                          alt={entry.companyLogo.alt}
                          className="h-12 w-12"
                        />
                        <div className="min-w-0">
                          <CardTitle className="text-xl leading-tight text-foreground">
                            {entry.role}
                          </CardTitle>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {entry.companyLine}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span>{formatTimelinePeriod(entry.range)}</span>
                        <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs text-primary">
                          {entry.location}
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-foreground/84">
                        {entry.summary}
                      </p>

                      <div className="grid gap-2">
                        {entry.focusItems.slice(0, 4).map((item) => (
                          <div
                            key={item}
                            className="flex gap-3 rounded-lg border border-border/70 bg-secondary/38 px-3 py-3 text-sm leading-6 text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <AboutSectionHeading eyebrow="Academic background" title="Education" />

            <div className="space-y-5">
              {educationItems.map((item) => (
                <Card key={item.id} className="border-border/70 bg-card/92">
                  <CardContent className="space-y-5 p-6">
                    <div className="flex items-start gap-4">
                      <IdentityMarker
                        src={item.institutionLogo.src}
                        alt={item.institutionLogo.alt}
                        className="h-12 w-12"
                      />
                      <div className="min-w-0">
                        <CardTitle className="text-xl leading-tight text-foreground">
                          {item.institution}
                        </CardTitle>
                        <p className="mt-2 text-sm leading-6 text-foreground/84">
                          {item.degree}
                        </p>
                      </div>
                    </div>
                    <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
                      <EducationRange item={item} />
                    </p>
                    <p className="rounded-lg border border-border/70 bg-secondary/38 p-4 text-sm leading-7 text-muted-foreground">
                      {item.note}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <AboutSectionHeading
            eyebrow="Capability layer"
            title="Hard Skills"
            description="A structured capability layer for system integrity, automated validation, and operational quality control."
          />

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
            {aboutHardSkillGroups.map((group) => (
              <Card key={group.id} className="h-full border-border/70 bg-card/92">
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl leading-tight text-foreground">
                      {group.title}
                    </CardTitle>
                    <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="skill-pill rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-[13px] leading-5 text-foreground/86 hover:border-primary/20 hover:bg-primary/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <AboutSectionHeading
            eyebrow="Personal foundation"
            title="What stays constant"
            description="The values behind how I make quality decisions and work with real-world systems."
            centered
          />

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {aboutPersonalFoundation.map((item) => (
              <Card key={item} className="h-full border-border/70 bg-card/92">
                <CardContent className="flex h-full items-center gap-4 p-8">
                  <Sparkles className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-lg leading-8 text-foreground/86">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <p className="mt-8 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {aboutFinalStatement[0]} {aboutFinalStatement[1]}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-border/80 bg-background/80 px-5"
            >
              <a href={aboutCvAction.href} target="_blank" rel="noreferrer">
                <ArrowDownToLine className="h-4 w-4" />
                {aboutCvAction.label}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
