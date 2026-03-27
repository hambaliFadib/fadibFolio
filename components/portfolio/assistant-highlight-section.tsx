import { SectionHeading } from "@/components/portfolio/section-heading";
import { PortfolioAssistant } from "@/components/portfolio/portfolio-assistant";

export function AssistantHighlightSection() {
  return (
    <section className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] xl:items-start xl:gap-10">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="AI assistant"
            title="Use AI as the fastest way to understand the portfolio"
            description="This is the primary shortcut: ask about quality approach, enterprise systems, and where to go next without opening every page first."
          />

          <div className="rounded-[1.75rem] border border-border/70 bg-card/92 p-6 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2 rounded-2xl border border-border/65 bg-secondary/45 p-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-primary/20 hover:bg-primary/5 motion-safe:hover:-translate-y-px">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  Fast context
                </p>
                <p className="text-sm leading-6 text-foreground/85">
                  Get the quality approach in seconds.
                </p>
              </div>
              <div className="space-y-2 rounded-2xl border border-border/65 bg-secondary/45 p-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-primary/20 hover:bg-primary/5 motion-safe:hover:-translate-y-px">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  Guided navigation
                </p>
                <p className="text-sm leading-6 text-foreground/85">
                  Jump directly to work, thinking, or profile detail.
                </p>
              </div>
              <div className="space-y-2 rounded-2xl border border-border/65 bg-secondary/45 p-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-primary/20 hover:bg-primary/5 motion-safe:hover:-translate-y-px">
                <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary/80">
                  Cleaner reading
                </p>
                <p className="text-sm leading-6 text-foreground/85">
                  Use the chat first, then open only the page you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        <PortfolioAssistant className="mx-auto max-w-[32rem] xl:mx-0 xl:justify-self-end" />
      </div>
    </section>
  );
}
