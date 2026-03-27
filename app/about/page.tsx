import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import {
  aboutCvAction,
  aboutFinalStatement,
  aboutHardSkillGroups,
  aboutJourneySection,
  aboutPersonalFoundation,
  aboutProfile,
} from "@/data/about";
import { cn } from "@/lib/utils";

const surfaceCardClassName =
  "h-full border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]";

export const metadata: Metadata = {
  title: "About",
  description: aboutProfile.summary,
};

function AboutSectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-primary/80">
        {eyebrow}
      </p>
      <h2 className="text-balance text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.3rem] lg:text-[2.55rem]">
        {title}
      </h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pb-16 pt-8">
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-primary/80">
              About
            </p>
          </div>

          <Card className={surfaceCardClassName}>
            <CardContent className="grid gap-8 sm:px-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-center lg:gap-12 xl:grid-cols-[20rem_minmax(0,1fr)]">
              <h1 className="sr-only">About {aboutProfile.name}</h1>

              <div className="mx-auto w-full max-w-[16rem] lg:max-w-none">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/70 bg-secondary/35 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
                  <Image
                    src={aboutProfile.image.src}
                    alt={aboutProfile.image.alt}
                    fill
                    priority
                    sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, (min-width: 640px) 16rem, 78vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <p className="max-w-2xl text-pretty text-[1.03rem] leading-8 text-foreground/88 sm:text-[1.08rem] sm:leading-8">
                  {aboutProfile.summary}
                </p>

                <blockquote className="max-w-2xl rounded-[1.5rem] border border-primary/15 bg-primary/5 px-5 py-4 text-[0.98rem] italic leading-7 text-foreground/72 sm:px-6 sm:py-5">
                  {aboutProfile.principle}
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ExperienceSection />
      <EducationSection />

      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <AboutSectionHeading eyebrow="Capability layer" title="Hard Skills" />

          <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
            {aboutHardSkillGroups.map((group) => (
              <Card key={group.id} className={surfaceCardClassName}>
                <CardContent className="flex h-full flex-col gap-5 sm:px-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <CardTitle className="text-xl tracking-tight text-foreground">
                      {group.title}
                    </CardTitle>
                    <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.24em] text-primary/75">
                      {group.items.length} skills
                    </span>
                  </div>

                  <div className="flex flex-wrap content-start gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="skill-pill rounded-full border border-border/70 bg-secondary/55 px-3 py-1.5 text-[13px] leading-5 text-foreground/85 hover:border-primary/20 hover:bg-primary/5"
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

      <section className="px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-8">
          <AboutSectionHeading eyebrow="Identity layer" title="Personal Foundation" />

          <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
            {aboutPersonalFoundation.map((item) => (
              <Card key={item} className={surfaceCardClassName}>
                <CardContent className="flex h-full items-center sm:px-8">
                  <p className="text-sm leading-7 text-foreground/85">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-12 pt-10 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-20">
        <div className="mx-auto max-w-5xl">
          <Card className="border-primary/20 bg-primary/5 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.3)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
            <CardContent className="flex h-full flex-col gap-6 sm:px-8">
              <div className="flex-1 space-y-3 text-center">
                <p className="text-balance text-lg leading-8 text-foreground/90 sm:text-[1.35rem] sm:leading-9">
                  <span className="block">{aboutFinalStatement[0]}</span>
                  <span className="block">{aboutFinalStatement[1]}</span>
                </p>
              </div>

              <div className="flex justify-end">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="h-9 rounded-full border-border/80 bg-background/90 px-4 text-foreground/85 shadow-none hover:bg-background"
                >
                  <a href={aboutCvAction.href} download={aboutCvAction.downloadName}>
                    {aboutCvAction.label}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 pb-10 pt-6 sm:pb-12 sm:pt-8 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-7xl space-y-6">
          <AboutSectionHeading
            eyebrow={aboutJourneySection.eyebrow}
            title={aboutJourneySection.title}
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {aboutJourneySection.images.map((image, index) => (
              <div
                key={image.id}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border/70 bg-secondary/35 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.28)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]",
                  index === aboutJourneySection.images.length - 1 &&
                    "sm:col-span-2 xl:col-span-1",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 18vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-950/8 to-white/10 dark:to-slate-900/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
