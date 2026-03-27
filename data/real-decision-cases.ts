export interface RealDecisionCaseLinks {
  github: string;
  workbook: string;
  logs: string;
  screenshots: string;
}

export interface RealDecisionCase {
  id: string;
  title: string;
  status: string;
  theme: string;
  plannedEvidence: string;
  publicationCondition: string;
  isPublished: boolean;
  links: RealDecisionCaseLinks;
}

export interface RealDecisionCaseStructureItem {
  id: string;
  title: string;
  description: string;
}

export const realDecisionCasesIntro = {
  eyebrow: "REAL DECISION CASES",
  title: "Real Decision Cases",
  description:
    "This layer is reserved for real release decisions backed by actual evidence. Each case will connect business risk, decision rationale, validation proof, and ownership in a public-safe format without exposing confidential implementation detail.",
  supportingSentence:
    "Evidence will be attached only when GitHub references, workbook links, logs, and supporting records are sanitized, anonymized, and ready for publication.",
};

export const realDecisionCaseStructureTitle =
  "Each real decision case will follow this structure";

export const realDecisionCaseStructure: RealDecisionCaseStructureItem[] = [
  {
    id: "context",
    title: "Context",
    description: "What changed and where the decision sits",
  },
  {
    id: "decision-problem",
    title: "Decision Problem",
    description: "Why pass/fail testing alone was not enough",
  },
  {
    id: "business-invariant",
    title: "Business Invariant",
    description: "What the system must never violate",
  },
  {
    id: "risk-identification",
    title: "Risk Identification",
    description: "What business or system risk becomes real if wrong",
  },
  {
    id: "validation-mapping",
    title: "Validation Mapping",
    description: "Where proof must exist: UI, API, DB, workflow, or monitoring",
  },
  {
    id: "decision-outcome",
    title: "Decision Outcome",
    description: "GO, NO GO, or CONDITIONAL",
  },
  {
    id: "decision-rationale",
    title: "Decision Rationale",
    description: "Why the decision was correct under business risk",
  },
  {
    id: "evidence-ownership",
    title: "Evidence & Ownership",
    description: "Who owned the risk and what evidence supports the judgment",
  },
];

export const realDecisionCaseFields = [
  { key: "theme", label: "Case theme" },
  { key: "plannedEvidence", label: "Planned evidence" },
  { key: "publicationCondition", label: "Publication condition" },
] as const satisfies ReadonlyArray<{
  key: keyof Pick<RealDecisionCase, "theme" | "plannedEvidence" | "publicationCondition">;
  label: string;
}>;

export const realDecisionCasePlaceholderLabel = "Reserved for future publication";

export const reservedDecisionCases: RealDecisionCase[] = [
  {
    id: "reserved-decision-case-01",
    title: "Reserved Decision Case 01",
    status: "Awaiting evidence preparation",
    theme: "To be linked when approved for publication",
    plannedEvidence:
      "Sanitized GitHub references, workbook extracts, logs, screenshots, validation records",
    publicationCondition:
      "Only after evidence is complete, anonymized, and safe to share publicly",
    isPublished: false,
    links: {
      github: "",
      workbook: "",
      logs: "",
      screenshots: "",
    },
  },
  {
    id: "reserved-decision-case-02",
    title: "Reserved Decision Case 02",
    status: "Awaiting evidence preparation",
    theme: "To be linked when approved for publication",
    plannedEvidence:
      "Sanitized GitHub references, workbook extracts, logs, screenshots, validation records",
    publicationCondition:
      "Only after evidence is complete, anonymized, and safe to share publicly",
    isPublished: false,
    links: {
      github: "",
      workbook: "",
      logs: "",
      screenshots: "",
    },
  },
];

export const realDecisionCasesPrinciple = {
  title: "Publication principle",
  body: "This section will never use narrative alone. A case is published only when the decision, business risk, ownership, and supporting evidence can be linked with integrity, while confidential internal delivery artifacts remain protected.",
};

export const realDecisionCasesFooterNote =
  "Future phase: real release decision cases will link to sanitized GitHub references, workbook archives, and evidence folders only after preparation, integrity review, and confidentiality checks are complete.";
