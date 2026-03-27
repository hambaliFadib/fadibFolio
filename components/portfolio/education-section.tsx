import { IdentityMarker } from "@/components/portfolio/identity-marker";
import { Card, CardContent } from "@/components/ui/card";
import { educationItems } from "@/data/education";
import { formatTimelineRange } from "@/lib/date-ranges";

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-primary/80">
            Academic background
          </p>
          <h2 className="text-balance text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.3rem] lg:text-[2.55rem]">
            Education
          </h2>
        </div>

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2">
          {educationItems.map((item) => (
            <Card
              key={item.id}
              className="h-full border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)]"
            >
              <CardContent className="flex h-full flex-col gap-4 sm:px-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <IdentityMarker
                      src={item.institutionLogo.src}
                      alt={item.institutionLogo.alt}
                    />
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.institution}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-foreground/85">{item.degree}</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {formatTimelineRange(item.range)}
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-secondary/45 p-4">
                  <p className="text-sm leading-6 text-muted-foreground">{item.note}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
