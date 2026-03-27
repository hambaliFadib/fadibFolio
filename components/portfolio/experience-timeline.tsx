import { IdentityMarker } from "@/components/portfolio/identity-marker";
import { Card, CardContent } from "@/components/ui/card";
import { type ExperienceEntry } from "@/data/experience";
import {
  formatTimelineDuration,
  formatTimelinePeriod,
} from "@/lib/date-ranges";

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="space-y-5">
      {items.map((entry) => (
        <Card key={entry.id} className="border-border/70 bg-card/95">
          <CardContent className="space-y-5 sm:px-8">
            <div className="space-y-3">
              {entry.headerStyle === "company-first" ? (
                <div className="flex items-center gap-3">
                  <IdentityMarker src={entry.companyLogo.src} alt={entry.companyLogo.alt} />
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
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
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
                <p className="text-sm leading-6 text-muted-foreground">{entry.location}</p>
              </div>
            </div>

            <p className="text-sm leading-6 text-foreground/85">{entry.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
