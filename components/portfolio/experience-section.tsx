import { IdentityMarker } from "@/components/portfolio/identity-marker";
import { Card, CardContent } from "@/components/ui/card";
import { experienceEntries } from "@/data/experience";
import {
  formatTimelineDuration,
  formatTimelinePeriod,
} from "@/lib/date-ranges";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-primary/80">
            Career progression
          </p>
          <h2 className="text-balance text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.3rem] lg:text-[2.55rem]">
            Experience
          </h2>
        </div>

        <div className="space-y-5">
          {experienceEntries.map((entry) => (
            <Card
              key={entry.id}
              className="border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)]"
            >
              <CardContent className="space-y-6 sm:px-8">
                <div className="space-y-4">
                  {entry.headerStyle === "company-first" ? (
                    <div className="flex items-center gap-3">
                      <IdentityMarker
                        src={entry.companyLogo.src}
                        alt={entry.companyLogo.alt}
                      />
                      <div className="space-y-1">
                        <p className="text-base font-medium tracking-tight text-foreground">
                          {entry.companyLine}
                        </p>
                        {entry.employment ? (
                          <p className="text-sm leading-6 text-muted-foreground">
                            {entry.employment.label} · {formatTimelineDuration(entry.employment.range)}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ) : null}

                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {entry.role}
                    </h3>
                    {entry.headerStyle === "role-first" ? (
                      <div className="flex items-center gap-3">
                        <IdentityMarker
                          src={entry.companyLogo.src}
                          alt={entry.companyLogo.alt}
                          className="h-9 w-9 rounded-lg"
                        />
                        <p className="text-sm leading-6 text-muted-foreground">
                          {entry.companyLine}
                        </p>
                      </div>
                    ) : null}
                    <p className="text-sm leading-6 text-muted-foreground">
                      {formatTimelinePeriod(entry.range)}
                    </p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {entry.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-2xl border border-border/70 bg-secondary/45 p-4">
                    <p className="text-sm leading-6 text-foreground/85">{entry.summary}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                      {entry.focusHeading}
                    </p>
                    <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                      {entry.focusItems.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {entry.closingNote ? (
                    <p className="text-sm leading-6 text-foreground/85">
                      {entry.closingNote}
                    </p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
