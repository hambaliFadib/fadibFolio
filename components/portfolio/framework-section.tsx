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
    <section id="framework" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Framework / decision model"
          title="Release Decision Integrity Framework"
          description="A production-grade decision model for ambiguous, cross-module, business-critical systems."
        />

        <div className="grid auto-rows-fr gap-4 lg:grid-cols-3">
          {frameworkIntroduction.map((item) => (
            <Card key={item} className="h-full border-border/70 bg-card/92">
              <CardContent className="p-5 text-sm leading-7 text-muted-foreground">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-3">
          {frameworkCorePositioning.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-primary/18 bg-primary/6 p-5 text-sm leading-7 text-foreground/85"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
          {frameworkBlocks.map((block, index) => (
            <Card key={block.title} className="h-full border-border/70 bg-card/92">
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="space-y-3">
                  <p className="font-mono text-xs font-medium uppercase text-primary/80">
                    Step {index + 1}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">{block.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{block.summary}</p>
                </div>

                <div className="space-y-2">
                  {block.steps.map((step) => (
                    <div
                      key={step}
                      className="rounded-lg border border-border/70 bg-secondary/38 px-3 py-3 text-sm leading-6 text-muted-foreground"
                    >
                      {step}
                    </div>
                  ))}
                </div>

                {index < frameworkBlocks.length - 1 ? (
                  <div className="mt-auto hidden items-center gap-2 pt-2 text-primary xl:flex">
                    <span className="text-xs font-medium uppercase">Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-destructive/25 bg-destructive/6">
          <CardContent className="space-y-5 p-6">
            <div className="space-y-2">
              <p className="font-mono text-[11px] font-medium uppercase text-destructive/80">
                Release decision rule
              </p>
              <p className="text-sm leading-7 text-foreground/85">
                Release authority stops here when proof is missing. These are
                non-negotiable blocking conditions.
              </p>
            </div>

            <ul className="grid auto-rows-fr gap-3 md:grid-cols-2">
              {frameworkReleaseDecisionRules.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-destructive/18 bg-background/82 px-4 py-4 text-sm leading-6 text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid auto-rows-fr gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card className="h-full border-border/70 bg-card/92">
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <div className="space-y-2">
                <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
                  How this framework is used
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  It governs release judgment in real systems where ambiguity,
                  dependency, and business impact make superficial confidence
                  unacceptable.
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

          <Card className="h-full border-primary/18 bg-primary/6">
            <CardContent className="flex h-full flex-col justify-center gap-3 p-6">
              <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
                Final principle
              </p>
              <p className="text-base leading-8 text-foreground/90">
                {frameworkClosingPrinciple}
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
          {frameworkNote}
        </p>
      </div>
    </section>
  );
}
