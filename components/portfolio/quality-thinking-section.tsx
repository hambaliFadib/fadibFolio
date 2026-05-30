"use client";

import { useState } from "react";
import { BrainCircuit, ChevronDown, GitBranch, Network } from "lucide-react";
import {
  antiPatternsSection,
  decisionPatternsSection,
  decisionPrinciplesSection,
  problemBreakdownSection,
  riskThinkingModelSection,
  thinkingFinalThought,
  thinkingSnapshotSection,
} from "@/data/thinking";
import { cn } from "@/lib/utils";

interface ThinkingMapItem {
  title: string;
  description?: string;
  points?: string[];
}

interface ThinkingMapBranch {
  id: string;
  phase: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ThinkingMapItem[];
}

const thinkingBranches: ThinkingMapBranch[] = [
  {
    id: "principles",
    phase: "01",
    eyebrow: decisionPrinciplesSection.eyebrow,
    title: decisionPrinciplesSection.title,
    description:
      "The foundational rules used before any release decision is trusted.",
    items: decisionPrinciplesSection.items,
  },
  {
    id: "breakdown",
    phase: "02",
    eyebrow: problemBreakdownSection.eyebrow,
    title: problemBreakdownSection.title,
    description:
      "A gradual path for turning an ambiguous problem into visible decision boundaries.",
    items: problemBreakdownSection.items,
  },
  {
    id: "risk-model",
    phase: "03",
    eyebrow: riskThinkingModelSection.eyebrow,
    title: riskThinkingModelSection.title,
    description: riskThinkingModelSection.description ?? "",
    items: riskThinkingModelSection.items,
  },
  {
    id: "decision-patterns",
    phase: "04",
    eyebrow: decisionPatternsSection.eyebrow,
    title: decisionPatternsSection.title,
    description: decisionPatternsSection.description ?? "",
    items: decisionPatternsSection.items,
  },
  {
    id: "anti-patterns",
    phase: "05",
    eyebrow: antiPatternsSection.eyebrow,
    title: antiPatternsSection.title,
    description: antiPatternsSection.description ?? "",
    items: antiPatternsSection.items,
  },
  {
    id: "snapshot",
    phase: "06",
    eyebrow: thinkingSnapshotSection.eyebrow,
    title: thinkingSnapshotSection.title,
    description: thinkingSnapshotSection.description ?? "",
    items: thinkingSnapshotSection.items,
  },
  {
    id: "closing",
    phase: "07",
    eyebrow: "Closing statement",
    title: thinkingFinalThought.title,
    description:
      "The final decision lens that ties the branches back into release judgment.",
    items: [
      {
        title: "Release judgment",
        description: thinkingFinalThought.description,
      },
    ],
  },
];

export function QualityThinkingSection() {
  const [activeBranchId, setActiveBranchId] = useState(thinkingBranches[0].id);
  const [expandedNode, setExpandedNode] = useState(
    `${thinkingBranches[0].id}-0`,
  );
  const activeBranch =
    thinkingBranches.find((branch) => branch.id === activeBranchId) ??
    thinkingBranches[0];

  function selectBranch(branchId: string) {
    setActiveBranchId(branchId);
    setExpandedNode(`${branchId}-0`);
  }

  return (
    <section id="quality-thinking" className="px-6 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
            Decision flow map
          </p>
          <h2 className="text-balance text-[2rem] font-semibold text-foreground sm:text-[2.35rem] lg:text-[2.65rem]">
            Explore the branches behind release judgment.
          </h2>
          <p className="text-pretty text-[15px] leading-7 text-muted-foreground md:text-lg md:leading-8">
            A Notebook-style map for moving from principles to problem
            breakdown, risk, release patterns, and final decision clarity.
          </p>
        </div>

        <div className="grid-bg relative overflow-hidden rounded-lg border border-border/70 bg-card/90 p-4 shadow-[0_30px_90px_-62px_rgba(20,33,61,0.42)] sm:p-6 lg:p-8">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full text-primary/16 lg:block"
            aria-hidden="true"
          >
            <path
              d="M 180 92 C 330 92 340 190 470 190"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 10"
            />
            <path
              d="M 180 92 C 330 92 350 315 470 315"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 10"
            />
            <path
              d="M 180 92 C 330 92 350 440 470 440"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="7 10"
            />
          </svg>

          <div className="relative grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start">
            <div className="rounded-lg border border-primary/18 bg-background/92 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-[0_18px_45px_-28px_rgba(20,33,61,0.45)]">
                  <BrainCircuit className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase text-primary/80">
                    Root node
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Release decision clarity
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {thinkingBranches.map((branch) => {
                  const isActive = branch.id === activeBranch.id;

                  return (
                    <button
                      key={branch.id}
                      type="button"
                      aria-pressed={isActive}
                      className={cn(
                        "group flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-[transform,border-color,background-color,box-shadow] duration-300 motion-safe:hover:-translate-y-px",
                        isActive
                          ? "border-primary/32 bg-primary/8 shadow-[0_16px_42px_-34px_rgba(20,33,61,0.5)]"
                          : "border-border/70 bg-card/70 hover:border-primary/20 hover:bg-card/94",
                      )}
                      onClick={() => selectBranch(branch.id)}
                    >
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border font-mono text-[11px]",
                          isActive
                            ? "border-primary/30 bg-primary text-primary-foreground"
                            : "border-border/80 bg-background text-muted-foreground",
                        )}
                      >
                        {branch.phase}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase text-muted-foreground">
                          {branch.eyebrow}
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold leading-5 text-foreground">
                          {branch.title}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0 rounded-lg border border-border/70 bg-background/88 p-4 shadow-[0_24px_70px_-56px_rgba(20,33,61,0.38)] sm:p-5">
              <div className="flex flex-col gap-4 border-b border-border/70 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <p className="font-mono text-[11px] font-medium uppercase text-primary/80">
                    Branch {activeBranch.phase} / {activeBranch.eyebrow}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold leading-tight text-foreground">
                    {activeBranch.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                    {activeBranch.description}
                  </p>
                </div>
                <span className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-primary/18 bg-primary/5 px-4 font-mono text-[11px] uppercase text-primary">
                  <GitBranch className="h-3.5 w-3.5" />
                  {activeBranch.items.length} nodes
                </span>
              </div>

              <div className="relative mt-6 space-y-3 pl-4 before:absolute before:left-[1.15rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
                {activeBranch.items.map((item, index) => {
                  const nodeId = `${activeBranch.id}-${index}`;
                  const isExpanded = expandedNode === nodeId;

                  return (
                    <div key={nodeId} className="relative pl-7">
                      <span
                        className={cn(
                          "absolute left-0 top-4 h-3 w-3 rounded-full border bg-background transition-colors duration-300",
                          isExpanded
                            ? "border-primary bg-primary shadow-[0_0_0_5px_rgba(37,99,135,0.08)]"
                            : "border-border",
                        )}
                      />
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        className={cn(
                          "flex w-full items-start justify-between gap-4 rounded-lg border px-4 py-3 text-left transition-[border-color,background-color,box-shadow] duration-300",
                          isExpanded
                            ? "border-primary/25 bg-primary/6"
                            : "border-border/70 bg-card/72 hover:border-primary/18 hover:bg-card/95",
                        )}
                        onClick={() =>
                          setExpandedNode(isExpanded ? "" : nodeId)
                        }
                      >
                        <span className="min-w-0">
                          <span className="font-mono text-[10px] uppercase text-muted-foreground">
                            Node {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-1 block text-base font-semibold leading-6 text-foreground">
                            {item.title}
                          </span>
                        </span>
                        <ChevronDown
                          className={cn(
                            "mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                            isExpanded ? "rotate-180" : "",
                          )}
                        />
                      </button>

                      <div
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="rounded-b-lg border-x border-b border-border/70 bg-card/76 px-4 py-4">
                            {item.description ? (
                              <p className="text-sm leading-7 text-muted-foreground">
                                {item.description}
                              </p>
                            ) : null}

                            {item.points ? (
                              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                                {item.points.map((point) => (
                                  <li key={point} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/75" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mt-6 grid gap-3 border-t border-border/70 pt-5 sm:grid-cols-3">
            {["Clarify", "Branch", "Decide"].map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/72 px-4 py-3"
              >
                <Network className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
