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

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.41667 7C7.14583 7 7.76563 6.74479 8.27604 6.23438C8.78646 5.72396 9.04167 5.10417 9.04167 4.375C9.04167 3.64583 8.78646 3.02604 8.27604 2.51562C7.76563 2.00521 7.14583 1.75 6.41667 1.75C5.6875 1.75 5.06771 2.00521 4.55729 2.51562C4.04688 3.02604 3.79167 3.64583 3.79167 4.375C3.79167 5.10417 4.04688 5.72396 4.55729 6.23438C5.06771 6.74479 5.6875 7 6.41667 7ZM6.41667 5.95C5.97917 5.95 5.60729 5.79688 5.30104 5.49062C4.99479 5.18437 4.84167 4.8125 4.84167 4.375C4.84167 3.9375 4.99479 3.56563 5.30104 3.25938C5.60729 2.95312 5.97917 2.8 6.41667 2.8C6.85417 2.8 7.22604 2.95312 7.53229 3.25938C7.83854 3.56563 7.99167 3.9375 7.99167 4.375C7.99167 4.8125 7.83854 5.18437 7.53229 5.49062C7.22604 5.79688 6.85417 5.95 6.41667 5.95ZM6.41667 8.75C4.99722 8.75 3.70417 8.35382 2.5375 7.56146C1.37083 6.7691 0.525 5.70694 0 4.375C0.525 3.04306 1.37083 1.9809 2.5375 1.18854C3.70417 0.396181 4.99722 0 6.41667 0C7.83611 0 9.12917 0.396181 10.2958 1.18854C11.4625 1.9809 12.3083 3.04306 12.8333 4.375C12.3083 5.70694 11.4625 6.7691 10.2958 7.56146C9.12917 8.35382 7.83611 8.75 6.41667 8.75ZM6.41667 7.58333C7.51528 7.58333 8.52396 7.2941 9.44271 6.71562C10.3615 6.13715 11.0639 5.35694 11.55 4.375C11.0639 3.39306 10.3615 2.61285 9.44271 2.03437C8.52396 1.4559 7.51528 1.16667 6.41667 1.16667C5.31806 1.16667 4.30937 1.4559 3.39062 2.03437C2.47187 2.61285 1.76944 3.39306 1.28333 4.375C1.76944 5.35694 2.47187 6.13715 3.39062 6.71562C4.30937 7.2941 5.31806 7.58333 6.41667 7.58333Z"
        fill="currentColor"
      />
    </svg>
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
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <a href={aboutCvAction.href} target="_blank" rel="noreferrer">
                  <EyeIcon className="size-[13px] [height:9px]" />
                  {aboutCvAction.label}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-border/80 bg-background/80 px-6"
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
          </div>
        </div>
      </section>
    </div>
  );
}
