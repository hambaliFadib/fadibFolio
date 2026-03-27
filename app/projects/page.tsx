import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { builtSystemsProjects, enterpriseCaseStudies } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FrameworkSection } from "@/components/portfolio/framework-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { RealDecisionCasesSection } from "@/components/portfolio/real-decision-cases-section";
import { SectionHeading } from "@/components/portfolio/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Enterprise case studies, built QA systems, and a QA decision framework structured for risk-aware evaluation.",
};

const caseStudyGuide = [
  "Read the project from business context first.",
  "Use the problem statement to understand ambiguity.",
  "Look at risk handled before looking at tools.",
  "Treat impact as release decision value, not vanity metric.",
];

export default function ProjectsPage() {
  return (
    <div className="pb-16 pt-8">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading
            eyebrow="Project view"
            title="Case studies and systems structured for enterprise evaluation"
            description="NDA-safe, implementation-aware, and focused on decision quality."
          />

          <Card className="border-border/70 bg-card/95">
            <CardContent className="grid auto-rows-fr gap-3 md:grid-cols-2">
              {caseStudyGuide.map((item) => (
                <div key={item} className="h-full rounded-2xl border border-border/70 bg-secondary/45 px-4 py-4 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link href="/quality-thinking">
                View quality thinking
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border/80 bg-background/90 px-6"
            >
              <Link href="/#assistant">Ask AI about projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <ProjectsSection
        id="enterprise-case-studies"
        items={enterpriseCaseStudies}
        eyebrow="Enterprise case studies"
        title="Projects handled in enterprise environments with real operational and financial risk"
        description="Business context, ambiguity, QA action, handled risk, and release impact shown in one structured view."
      />

      <ProjectsSection
        id="built-systems"
        items={builtSystemsProjects}
        eyebrow="Built systems"
        title="Decision systems built to strengthen QA control and release judgment"
        description="Each system changes how signals become action, how ambiguity becomes structure, and how release-relevant decisions become safer."
      />

      <FrameworkSection />
      <RealDecisionCasesSection />
    </div>
  );
}


