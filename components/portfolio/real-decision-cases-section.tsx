import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  realDecisionCaseFields,
  realDecisionCasePlaceholderLabel,
  realDecisionCaseStructure,
  realDecisionCaseStructureTitle,
  realDecisionCasesFooterNote,
  realDecisionCasesIntro,
  realDecisionCasesPrinciple,
  reservedDecisionCases,
} from "@/data/real-decision-cases";

const sharedCardClassName =
  "border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)]";

export function RealDecisionCasesSection() {
  return (
    <section id="real-decision-cases" className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-4">
          <SectionHeading
            eyebrow={realDecisionCasesIntro.eyebrow}
            title={realDecisionCasesIntro.title}
            description={realDecisionCasesIntro.description}
          />
          <p className="max-w-[46rem] text-sm leading-6 text-muted-foreground">
            {realDecisionCasesIntro.supportingSentence}
          </p>
        </div>

        <Card className={sharedCardClassName}>
          <CardHeader className="border-b border-border/70 pb-5">
            <CardTitle className="text-xl tracking-tight text-foreground">
              {realDecisionCaseStructureTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4 sm:px-8">
            {realDecisionCaseStructure.map((item) => (
              <div
                key={item.id}
                className="h-full rounded-2xl border border-border/70 bg-secondary/45 p-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid auto-rows-fr gap-4 lg:grid-cols-2">
          {reservedDecisionCases.map((decisionCase) => {
            const publicationLabel = decisionCase.isPublished
              ? "Published decision case"
              : realDecisionCasePlaceholderLabel;

            return (
              <Card key={decisionCase.id} className={`h-full ${sharedCardClassName}`}>
                <CardHeader className="gap-4 border-b border-border/70 pb-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-2">
                      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                        {publicationLabel}
                      </p>
                      <CardTitle className="text-xl tracking-tight text-foreground">
                        {decisionCase.title}
                      </CardTitle>
                    </div>
                    <Badge
                      variant="outline"
                      className="rounded-full border-primary/15 bg-primary/5 px-3 py-1 text-primary"
                    >
                      {decisionCase.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex h-full flex-col gap-3 sm:px-6">
                  {realDecisionCaseFields.map((field) => (
                    <div
                      key={field.key}
                      className="h-full rounded-2xl border border-border/70 bg-secondary/45 p-4"
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                        {field.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {decisionCase[field.key]}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-primary/15 bg-primary/5 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.3)]">
          <CardHeader className="gap-2">
            <CardTitle className="text-xl tracking-tight text-foreground">
              {realDecisionCasesPrinciple.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="sm:px-8">
            <p className="max-w-[52rem] text-sm leading-7 text-foreground/85">
              {realDecisionCasesPrinciple.body}
            </p>
          </CardContent>
        </Card>

        <p className="max-w-[48rem] text-sm leading-6 text-muted-foreground">
          {realDecisionCasesFooterNote}
        </p>
      </div>
    </section>
  );
}
