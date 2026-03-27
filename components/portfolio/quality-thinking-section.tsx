import type { ReactNode } from "react";
import {
  antiPatternsSection,
  decisionPatternsSection,
  decisionPrinciplesSection,
  problemBreakdownSection,
  riskThinkingModelSection,
  thinkingFinalThought,
  thinkingSnapshotSection,
  type ThinkingCard,
  type ThinkingCardSection,
  type ThinkingListCard,
} from "@/data/thinking";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sharedCardClassName =
  "border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)]";

type ThinkingSectionLevel = "primary" | "supporting" | "context" | "closing";

function ThinkingSectionHeading({
  eyebrow,
  title,
  description,
  level = "supporting",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  level?: ThinkingSectionLevel;
}) {
  const styles = {
    primary: {
      eyebrow: "text-primary/85",
      title:
        "text-balance text-[1.9rem] font-semibold tracking-tight text-foreground sm:text-[2.1rem] lg:text-[2.3rem]",
      description:
        "text-pretty text-[15px] leading-7 text-muted-foreground md:text-base",
      container: "max-w-3xl space-y-3 sm:space-y-4",
    },
    supporting: {
      eyebrow: "text-primary/80",
      title:
        "text-balance text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-[1.95rem] lg:text-[2.15rem]",
      description:
        "text-pretty text-[15px] leading-7 text-muted-foreground md:text-base",
      container: "max-w-3xl space-y-2 sm:space-y-3",
    },
    context: {
      eyebrow: "text-primary/70",
      title:
        "text-balance text-[1.5rem] font-semibold tracking-tight text-foreground/90 sm:text-[1.72rem] lg:text-[1.9rem]",
      description:
        "text-pretty text-[15px] leading-7 text-muted-foreground/90 md:text-base",
      container: "max-w-3xl space-y-2 sm:space-y-3",
    },
    closing: {
      eyebrow: "text-primary/75",
      title:
        "text-balance text-[1.8rem] font-semibold tracking-tight text-foreground sm:text-[2rem] lg:text-[2.2rem]",
      description:
        "text-pretty text-[15px] leading-7 text-muted-foreground md:text-base",
      container: "mx-auto max-w-3xl space-y-3 text-center sm:space-y-4",
    },
  }[level];

  return (
    <div className={styles.container}>
      <p
        className={cn(
          "font-mono text-[11px] font-medium uppercase tracking-[0.3em]",
          styles.eyebrow,
        )}
      >
        {eyebrow}
      </p>
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}

function ThinkingCardGridSection({
  section,
  level = "supporting",
  cardClassName = sharedCardClassName,
  titleClassName = "text-xl tracking-tight text-foreground",
  gridClassName = "grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4",
  sectionClassName,
  contentClassName = "space-y-4",
  renderPrefix,
}: {
  section: ThinkingCardSection<ThinkingCard>;
  level?: ThinkingSectionLevel;
  cardClassName?: string;
  titleClassName?: string;
  gridClassName?: string;
  sectionClassName?: string;
  contentClassName?: string;
  renderPrefix?: (index: number) => ReactNode;
}) {
  return (
    <div className={cn("space-y-5 sm:space-y-6", sectionClassName)}>
      <ThinkingSectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        level={level}
      />

      <div className={gridClassName}>
        {section.items.map((item, index) => (
          <Card key={item.id} className={`h-full ${cardClassName}`}>
            <CardContent className={contentClassName}>
              {renderPrefix ? renderPrefix(index) : null}
              <div className="space-y-2">
                <CardTitle className={titleClassName}>{item.title}</CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ThinkingListGridSection({
  section,
  level = "supporting",
  sectionClassName,
  titleClassName = "text-xl tracking-tight text-foreground",
  contentClassName = "space-y-4",
}: {
  section: ThinkingCardSection<ThinkingListCard>;
  level?: ThinkingSectionLevel;
  sectionClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
}) {
  return (
    <div className={cn("space-y-5 sm:space-y-6", sectionClassName)}>
      <ThinkingSectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        level={level}
      />

      <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
        {section.items.map((item) => (
          <Card key={item.id} className={`h-full ${sharedCardClassName}`}>
            <CardContent className={contentClassName}>
              <CardTitle className={titleClassName}>{item.title}</CardTitle>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function QualityThinkingSection() {
  return (
    <section id="quality-thinking" className="px-6 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-14 sm:space-y-16">
        <ThinkingCardGridSection
          section={decisionPrinciplesSection}
          level="primary"
          sectionClassName="pt-2 sm:pt-4"
        />

        <ThinkingCardGridSection
          section={problemBreakdownSection}
          level="supporting"
          renderPrefix={(index) => (
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
              Step {index + 1}
            </p>
          )}
        />

        <ThinkingCardGridSection
          section={riskThinkingModelSection}
          level="supporting"
          cardClassName="border-primary/15 bg-primary/5 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.3)]"
        />

        <ThinkingListGridSection
          section={decisionPatternsSection}
          level="primary"
          sectionClassName="pt-2 sm:pt-4"
        />

        <ThinkingCardGridSection
          section={antiPatternsSection}
          level="context"
          titleClassName="text-lg tracking-tight text-foreground/90"
        />

        <ThinkingCardGridSection
          section={thinkingSnapshotSection}
          level="context"
          cardClassName="border-border/70 bg-background/90 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.22)]"
          titleClassName="text-xl tracking-tight text-foreground/92"
          gridClassName="grid gap-5"
          renderPrefix={() => (
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/70">
              Reasoning fragment
            </p>
          )}
        />

        <div className="space-y-6 pt-6 sm:space-y-8 sm:pt-8">
          <ThinkingSectionHeading
            eyebrow="Closing statement"
            title={thinkingFinalThought.title}
            level="closing"
          />

          <Card className="mx-auto max-w-5xl border-primary/20 bg-primary/5 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.3)]">
            <CardContent>
              <p className="mx-auto max-w-4xl text-center text-[1.02rem] leading-9 text-foreground/90">
                {thinkingFinalThought.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
