import { homeCapabilities } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/portfolio/section-heading";

export function HomeCapabilitySection() {
  return (
    <section className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Core capability"
          title="A summary of quality value at operating level"
          description="Only the strongest capability signals live here. Detailed work stays in the deeper portfolio pages."
        />

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-5">
          {homeCapabilities.map((capability) => (
            <Card
              key={capability.title}
              className="h-full border-border/70 bg-card/95 py-0 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)]"
            >
              <CardContent className="flex h-full flex-col gap-3 px-5 py-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/80">
                  Capability
                </p>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {capability.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

