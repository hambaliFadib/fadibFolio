export interface FrameworkBlock {
  title: string;
  summary: string;
  steps: string[];
}

export const frameworkIntroduction = [
  "Testing alone does not authorize release in enterprise systems.",
  "When ambiguity, hidden dependency, and business impact exist, release must be governed by explicit decision rules, not by activity volume or surface-level confidence.",
  "This framework is the production model used to turn uncertainty into controlled release judgment.",
];

export const frameworkCorePositioning = [
  "Traditional QA can surface defects. It cannot, by itself, protect release integrity.",
  "When decision boundaries are unclear, teams do not ship confidence. They ship assumptions.",
  "This framework enforces explicit invariants, explicit risk, explicit proof, and explicit release authority.",
];

export const frameworkBlocks: FrameworkBlock[] = [
  {
    title: "Invariant Definition",
    summary:
      "Define the business rules the system must never violate. In ambiguous systems, invariants are the anchor of release judgment before any validation discussion begins.",
    steps: [
      "Identify the non-negotiable business rule",
      "Define what must never break under any condition",
      "Establish the signal that proves the rule still holds",
    ],
  },
  {
    title: "Risk Identification",
    summary:
      "Expose where failure can remain invisible until business damage already exists. The focus is ambiguity, silent failure, cross-module dependency, detectability, and impact.",
    steps: [
      "Surface ambiguity before it enters release",
      "Prioritize failure paths with low detectability and high impact",
      "Trace dependency risk across module and system boundaries",
    ],
  },
  {
    title: "QA Decision Tree",
    summary:
      "Assign validation responsibility where risk actually occurs. The question is not whether something was tested, but where proof must exist before release is trusted.",
    steps: [
      "Decide whether the rule is clear enough to govern release",
      "Assign proof to the right layer: UI, API, database, or monitoring",
      "Require evidence from the boundary where business risk becomes real",
    ],
  },
  {
    title: "Scope Boundary",
    summary:
      "Separate blocking evidence from supporting confidence. Release control requires a hard boundary between critical validation, supporting checks, accepted risk, and monitoring follow-up.",
    steps: [
      "Define what blocks release immediately",
      "Separate critical validation from supporting checks",
      "Make accepted risk explicit and monitorable after release",
    ],
  },
];

export const frameworkReleaseDecisionRules = [
  "Release must be blocked when the invariant is not defined.",
  "Release must be blocked when high-impact risk exists without a reliable validation signal.",
  "Release must be blocked when cross-module consistency cannot be proven.",
  "Release must be blocked when system correctness depends on assumption instead of evidence.",
];

export const frameworkUsage = [
  "In billing and calculation systems, it prevents release when financial rules cannot be proven across pricing, conversion, and charge logic.",
  "In workflow systems, it controls release when state transitions and role handoffs remain ambiguous across modules.",
  "In transaction systems, it exposes hidden failure paths and forces proof of integrity before downstream updates are trusted.",
  "In monitoring and platform systems, it determines whether outputs are trustworthy enough to support operational and risk decisions.",
];

export const frameworkClosingPrinciple =
  "Quality is not testing coverage. Quality is the ability to make the correct release decision under real business conditions. Assumption is risk. Undefined risk is uncontrolled release.";

export const frameworkNote =
  "This framework is being formalized and will be published publicly.";
