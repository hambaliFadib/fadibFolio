"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, GitBranch, ShieldCheck } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectJourneySectionProps {
  enterpriseItems: PortfolioProject[];
  builtItems: PortfolioProject[];
}

interface JourneyProject extends PortfolioProject {
  lane: "Enterprise" | "Built System";
}

interface ProjectDetailPanel {
  id: string;
  title: string;
  body?: string;
  items?: string[];
  tone?: "default" | "primary";
}

function getProjectSummary(project: PortfolioProject) {
  return (
    project.context ??
    project.decisionProblem?.[0] ??
    project.problem ??
    project.decisionImpact[0]
  );
}

function isProjectDetailPanel(
  panel: ProjectDetailPanel | null,
): panel is ProjectDetailPanel {
  return Boolean(panel);
}

function getProjectDetailPanels(project: PortfolioProject): ProjectDetailPanel[] {
  const panels: Array<ProjectDetailPanel | null> = [
    project.context
      ? {
          id: "context",
          title: "Context",
          body: project.context,
        }
      : null,
    project.problem
      ? {
          id: "problem",
          title: "Decision problem",
          body: project.problem,
          tone: "primary",
        }
      : null,
    project.whatIOwned?.length
      ? {
          id: "ownership",
          title: "What I owned",
          items: project.whatIOwned,
        }
      : null,
    project.risksHandled?.length
      ? {
          id: "risk",
          title: "Risks handled",
          items: project.risksHandled,
        }
      : null,
    project.decisionProblem?.length
      ? {
          id: "decision",
          title: "Decision problem",
          items: project.decisionProblem,
        }
      : null,
    project.whatThisSystemChanged?.length
      ? {
          id: "system-change",
          title: "System changed",
          items: project.whatThisSystemChanged,
        }
      : null,
    project.decisionImpact?.length
      ? {
          id: "impact",
          title: "Decision impact",
          items: project.decisionImpact,
          tone: "primary",
        }
      : null,
    project.businessImpact?.length
      ? {
          id: "business",
          title: "Business impact",
          items: project.businessImpact,
        }
      : null,
  ];

  return panels.filter(isProjectDetailPanel);
}

export function ProjectJourneySection({
  enterpriseItems,
  builtItems,
}: ProjectJourneySectionProps) {
  const journeyItems: JourneyProject[] = [
    ...enterpriseItems.map((item) => ({ ...item, lane: "Enterprise" as const })),
    ...builtItems.map((item) => ({ ...item, lane: "Built System" as const })),
  ];
  const firstProjectDetailId = journeyItems[0]
    ? getProjectDetailPanels(journeyItems[0])[0]?.id ?? ""
    : "";
  const [openProjectId, setOpenProjectId] = useState(journeyItems[0]?.id ?? "");
  const [activeDetailId, setActiveDetailId] = useState(firstProjectDetailId);

  return (
    <section id="enterprise-case-studies" className="px-6 pb-20 pt-0 sm:pb-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
            Project cartography
          </p>
          <h2 className="text-balance text-[2rem] font-semibold text-foreground sm:text-[2.35rem] lg:text-[2.65rem]">
            A journey through systems, risks, and release decisions.
          </h2>
          <p className="text-pretty text-[15px] leading-7 text-muted-foreground md:text-lg md:leading-8">
            Each node can expand into the decision structure behind the work:
            context, ambiguity, risk handled, ownership, and impact.
          </p>
        </div>

        <div className="grid-bg relative overflow-hidden rounded-lg border border-border/70 bg-card/90 p-4 shadow-[0_30px_90px_-62px_rgba(20,33,61,0.42)] sm:p-6 lg:p-8">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full text-primary/18"
            aria-hidden="true"
          >
            <path
              d="M 40 70 L 180 70 L 220 110 L 420 110 L 460 70 L 720 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M 80 0 L 80 280 L 120 320 L 120 900"
              fill="none"
              stroke="currentColor"
              strokeDasharray="8 10"
              strokeWidth="1"
            />
          </svg>

          <div className="relative space-y-4">
            {journeyItems.map((project, index) => {
              const isOpen = openProjectId === project.id;
              const detailPanels = getProjectDetailPanels(project);
              const activeDetail =
                detailPanels.find((panel) => panel.id === activeDetailId) ??
                detailPanels[0];

              return (
                <div
                  key={project.id}
                  className={cn(
                    "group relative rounded-lg border bg-background/82 transition-[transform,border-color,background-color,box-shadow] duration-500 motion-safe:hover:-translate-y-px",
                    isOpen
                      ? "border-primary/24 bg-background/95 shadow-[0_22px_60px_-48px_rgba(20,33,61,0.44)]"
                      : "border-border/70 hover:border-primary/18 hover:bg-background/90",
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className="grid w-full cursor-pointer list-none gap-4 px-4 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/45 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-center"
                    onClick={() => {
                      if (isOpen) {
                        setOpenProjectId("");
                        return;
                      }

                      setOpenProjectId(project.id);
                      setActiveDetailId(detailPanels[0]?.id ?? "");
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-xs transition-colors duration-300",
                          isOpen
                            ? "border-primary/30 bg-primary text-primary-foreground"
                            : "border-primary/18 bg-primary/8 text-primary",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-muted-foreground">
                        {project.lane}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold leading-tight text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {getProjectSummary(project)}
                      </p>
                    </div>

                    <ChevronDown
                      className={cn(
                        "h-5 w-5 text-muted-foreground transition-transform duration-300",
                        isOpen ? "rotate-180" : "",
                      )}
                    />
                  </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border/70 px-4 pb-5 pt-5">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border/70 bg-card/80 px-3 py-1 font-mono text-[10px] uppercase text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {activeDetail ? (
                        <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
                          <div className="space-y-2">
                            <p className="font-mono text-[10px] uppercase text-primary/80">
                              Detail map
                            </p>
                            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                              {detailPanels.map((panel) => {
                                const isActive = panel.id === activeDetail.id;

                                return (
                                  <button
                                    key={panel.id}
                                    type="button"
                                    aria-pressed={isActive}
                                    className={cn(
                                      "rounded-lg border px-3 py-3 text-left transition-[transform,border-color,background-color,box-shadow] duration-300 motion-safe:hover:-translate-y-px",
                                      isActive
                                        ? "border-primary/28 bg-primary/8 shadow-[0_16px_42px_-34px_rgba(20,33,61,0.5)]"
                                        : "border-border/70 bg-card/76 hover:border-primary/18 hover:bg-card/95",
                                    )}
                                    onClick={() => setActiveDetailId(panel.id)}
                                  >
                                    <span className="block text-sm font-semibold leading-5 text-foreground">
                                      {panel.title}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div
                            key={`${project.id}-${activeDetail.id}`}
                            className={cn(
                              "rounded-lg border p-5 transition-opacity duration-300 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2",
                              activeDetail.tone === "primary"
                                ? "border-primary/18 bg-primary/5"
                                : "border-border/70 bg-card/76",
                            )}
                          >
                            <p className="font-mono text-[10px] font-medium uppercase text-primary/80">
                              {activeDetail.title}
                            </p>
                            {activeDetail.body ? (
                              <p className="mt-3 text-sm leading-7 text-foreground/86">
                                {activeDetail.body}
                              </p>
                            ) : null}
                            {activeDetail.items ? (
                              <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/86">
                                {activeDetail.items.map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/75" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </div>
                      ) : null}

                      {project.evidence ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.evidence.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noreferrer" : undefined}
                              className="inline-flex h-10 items-center gap-2 rounded-full border border-border/80 bg-card/86 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/25 hover:text-primary"
                            >
                              {link.label}
                              <ExternalLink className="h-3.5 w-3.5" />
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 border-t border-border/70 pt-5 sm:grid-cols-2">
            <div className="rounded-lg border border-primary/18 bg-primary/5 px-4 py-3">
              <GitBranch className="h-4 w-4 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">
                Journey opens by decision node
              </p>
            </div>
            <div className="rounded-lg border border-border/70 bg-background/78 px-4 py-3">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">
                Public-safe detail, release-focused structure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
