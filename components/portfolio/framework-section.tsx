import { ArrowRight } from "lucide-react";
import {
  frameworkBlocks,
  frameworkClosingPrinciple,
  frameworkCorePositioning,
  frameworkIntroduction,
  frameworkNote,
  frameworkReleaseDecisionRules,
  frameworkUsage,
} from "@/data/framework";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function FrameworkSection() {
  return (
    <section id="framework" className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Framework closing"
          title="Release Decision Integrity Framework"
          description="A production-grade decision model for ambiguous, cross-module, business-critical systems."
        />

        <Card className="border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
          <CardContent className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {frameworkIntroduction.map((item) => (
              <div
                key={item}
                className="h-full rounded-2xl border border-border/70 bg-secondary/45 p-4 text-sm leading-6 text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
          <CardContent className="grid auto-rows-fr gap-4 md:grid-cols-3">
            {frameworkCorePositioning.map((item) => (
              <div
                key={item}
                className="h-full rounded-2xl border border-primary/15 bg-primary/5 p-4 text-sm leading-6 text-foreground/85"
              >
                {item}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
          {frameworkBlocks.map((block, index) => (
            <Card
              key={block.title}
              className="flex h-full flex-col border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]"
            >
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <div className="space-y-4">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                    Step {index + 1}
                  </p>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {block.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">{block.summary}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {block.steps.map((step) => (
                    <div
                      key={step}
                      className="rounded-xl border border-border/70 bg-secondary/45 px-3 py-3 text-sm leading-6 text-muted-foreground"
                    >
                      {step}
                    </div>
                  ))}
                </div>

                {index < frameworkBlocks.length - 1 ? (
                  <div className="mt-auto hidden items-center gap-2 pt-3 xl:flex">
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary/70">
                      Next
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                ) : (
                  <div className="mt-auto hidden pt-3 xl:block" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-destructive/25 bg-[linear-gradient(135deg,rgba(255,250,250,0.98),rgba(255,240,240,0.9))] shadow-[0_18px_50px_-42px_rgba(127,29,29,0.35)] dark:bg-[linear-gradient(135deg,rgba(61,25,31,0.92),rgba(44,18,25,0.88))] dark:shadow-[0_18px_50px_-42px_rgba(69,10,10,0.72)]">
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-destructive/80">
                Release Decision Rule
              </p>
              <p className="text-sm leading-6 text-foreground/85">
                Release authority stops here when proof is missing. These are non-negotiable blocking conditions.
              </p>
            </div>

            <ul className="grid auto-rows-fr gap-3 md:grid-cols-2">
              {frameworkReleaseDecisionRules.map((item) => (
                <li
                  key={item}
                  className="h-full rounded-2xl border border-destructive/15 bg-background/80 px-4 py-4 text-sm leading-6 text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid auto-rows-fr gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Card className="h-full border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
            <CardContent className="flex h-full flex-col gap-4">
              <div className="space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  How This Framework Is Used
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  It governs release judgment in real systems where ambiguity, dependency, and business impact make superficial confidence unacceptable.
                </p>
              </div>

              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {frameworkUsage.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full border-primary/15 bg-primary/5 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.3)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
            <CardContent className="flex h-full flex-col gap-4">
              <div className="space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  Final Principle
                </p>
                <p className="text-base leading-8 text-foreground/90">{frameworkClosingPrinciple}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/15 bg-primary/5">
          <CardContent>
            <p className="text-sm leading-6 text-foreground/85">{frameworkNote}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
