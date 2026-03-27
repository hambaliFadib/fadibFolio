import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type PortfolioProject } from "@/data/projects";

interface ProjectCaseStudyCardProps {
  project: PortfolioProject;
}

export function ProjectCaseStudyCard({
  project,
}: ProjectCaseStudyCardProps) {
  const isDecisionSystem = project.variant === "decision-system";

  return (
    <Card className="overflow-hidden border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)]">
      <CardHeader className="gap-4 border-b border-border/70 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="rounded-full border-primary/15 bg-primary/5 px-3 py-1 text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl tracking-tight text-foreground">
            {project.title}
          </CardTitle>
          {isDecisionSystem ? null : (
            <p className="text-sm leading-6 text-muted-foreground">
              <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Domain
              </span>
              <span className="ml-3">{project.domain}</span>
            </p>
          )}
        </div>
      </CardHeader>

      {isDecisionSystem ? (
        <CardContent className="grid gap-5 lg:grid-cols-2">
          <div className="flex h-full flex-col gap-5">
            <div className="space-y-3 rounded-2xl border border-border/70 bg-secondary/45 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Decision Problem
              </p>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {(project.decisionProblem ?? []).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                What This System Changed
              </p>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {(project.whatThisSystemChanged ?? []).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-full flex-col gap-5">
            <div className="space-y-3 rounded-2xl border border-primary/15 bg-primary/5 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Decision Impact
              </p>
              <ul className="space-y-2 text-sm leading-6 text-foreground/85">
                {project.decisionImpact.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-border/70 bg-background/80 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Evidence
              </p>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {(project.evidence ?? []).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
                    >
                      <span>{item.label}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      ) : (
        <CardContent className="grid gap-5 lg:grid-cols-2">
          <div className="flex h-full flex-col gap-5">
            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Context
              </p>
              <p className="text-sm leading-6 text-muted-foreground">{project.context}</p>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Problem
              </p>
              <p className="text-sm leading-6 text-muted-foreground">{project.problem}</p>
            </div>

            <div className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                What I Owned
              </p>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {(project.whatIOwned ?? []).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-full flex-col gap-5">
            <div className="space-y-3 rounded-2xl border border-border/70 bg-secondary/45 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Risk Handled
              </p>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {(project.risksHandled ?? []).map((risk) => (
                  <li key={risk} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-primary/15 bg-primary/5 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Decision Impact
              </p>
              <ul className="space-y-2 text-sm leading-6 text-foreground/85">
                {project.decisionImpact.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-border/70 bg-background/80 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                Business Impact
              </p>
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {(project.businessImpact ?? []).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}


