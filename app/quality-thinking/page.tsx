import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { thinkingPageHeader } from "@/data/thinking";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QualityThinkingSection } from "@/components/portfolio/quality-thinking-section";
import { SectionHeading } from "@/components/portfolio/section-heading";

export const metadata: Metadata = {
  title: "QA Thinking System",
  description:
    "How quality decisions are made under ambiguity, risk, and real business impact.",
};

export default function QualityThinkingPage() {
  return (
    <div className="pb-16 pt-8">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <SectionHeading
            eyebrow={thinkingPageHeader.eyebrow}
            title={thinkingPageHeader.title}
            description={thinkingPageHeader.subtitle}
          />

          <Card className="border-border/70 bg-card/95">
            <CardContent className="grid auto-rows-fr gap-3 md:grid-cols-2">
              {thinkingPageHeader.statements.map((statement) => (
                <div
                  key={statement}
                  className="h-full rounded-2xl border border-border/70 bg-secondary/45 px-4 py-4 text-sm leading-6 text-muted-foreground"
                >
                  {statement}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12 rounded-full px-6">
              <Link href="/projects">
                View projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-border/80 bg-background/90 px-6"
            >
              <Link href="/#assistant">Ask AI about my approach</Link>
            </Button>
          </div>
        </div>
      </section>

      <QualityThinkingSection />
    </div>
  );
}
