import { siteConfig } from "@/data/profile";

export interface PortfolioEvidenceLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tags: string[];
  variant?: "case-study" | "decision-system";
  domain?: string;
  context?: string;
  problem?: string;
  whatIOwned?: string[];
  risksHandled?: string[];
  decisionImpact: string[];
  businessImpact?: string[];
  decisionProblem?: string[];
  whatThisSystemChanged?: string[];
  evidence?: PortfolioEvidenceLink[];
}

const githubBase = siteConfig.author.github.replace(/\/$/, "");

function buildEvidence(repoSlug: string): PortfolioEvidenceLink[] {
  const repoUrl = `${githubBase}/${repoSlug}`;

  return [
    {
      label: "GitHub repo",
      href: repoUrl,
      external: true,
    },
    {
      label: "Demo / workflow",
      href: `${repoUrl}/blob/main/docs/demo-workflow.md`,
      external: true,
    },
    {
      label: "Sample output",
      href: `${repoUrl}/blob/main/docs/sample-output.md`,
      external: true,
    },
  ];
}

export const enterpriseCaseStudies: PortfolioProject[] = [
  {
    id: "billing-calculation-system",
    title: "Billing & Calculation System",
    variant: "case-study",
    domain: "Enterprise Billing & Revenue Calculation",
    context:
      "Enterprise billing platform handling pricing, usage conversion, and layered charge logic where calculation correctness directly affected revenue recognition and financial trust. The system operated across interconnected modules, making a single rule change capable of altering downstream billing outcomes.",
    problem:
      "Business rules for pricing and charge behavior were ambiguous and inconsistently interpreted across modules, creating exposure to incorrect billing outcomes and unreliable release decisions.",
    whatIOwned: [
      "Defined the business invariants that pricing, charge, and conversion behavior could not violate",
      "Set the calculation boundary across modules so ownership of correctness was explicit",
      "Directed focus toward ambiguity in high-impact charge scenarios before release",
      "Controlled release readiness through calculation checkpoints and decision gates tied to revenue risk",
    ],
    risksHandled: [
      "Financial misstatement caused by incorrect charge generation",
      "Cross-module divergence between pricing logic, conversion logic, and billing output",
      "Silent release failure where incorrect billing behavior could pass into production unnoticed",
    ],
    decisionImpact: [
      "Strengthened release decisions by making calculation risk explicit before approval",
      "Increased confidence that system behavior matched intended business charging rules",
      "Reduced the likelihood of approving releases with unresolved revenue-critical ambiguity",
    ],
    businessImpact: [
      "Protected revenue accuracy and reduced exposure to billing-related business loss",
      "Improved reliability of a business-critical calculation flow that directly affects customer trust",
    ],
    tags: ["Revenue Logic", "Financial Risk", "Cross-Module", "Release Control"],
  },
  {
    id: "field-operation-workflow-system",
    title: "Field Operation Workflow System",
    variant: "case-study",
    domain: "Enterprise Operations Workflow",
    context:
      "Enterprise workflow platform coordinating task assignment, status transitions, and operational handoffs across multiple business roles. Workflow correctness mattered because state changes directly shaped execution in the field.",
    problem:
      "Workflow states and transition rules contained hidden ambiguity, allowing different modules and roles to interpret operational status differently and creating instability in end-to-end process execution.",
    whatIOwned: [
      "Defined the state transition boundaries that the workflow could not cross incorrectly",
      "Clarified which workflow outcomes were acceptable and which represented release-blocking behavior",
      "Directed attention to high-risk state scenarios where operational intent could be lost",
      "Controlled release readiness by tying workflow acceptance to real process continuity, not isolated feature behavior",
    ],
    risksHandled: [
      "Workflow breakdown caused by invalid or conflicting state transitions",
      "Cross-module mismatch where status meaning changed between systems or roles",
      "Silent operational failure where incorrect state progression disrupted execution after release",
    ],
    decisionImpact: [
      "Improved release control by making workflow-risk interpretation consistent",
      "Increased confidence that state-driven behavior reflected actual business process intent",
      "Reduced the chance of approving a release with unstable operational handoffs",
    ],
    businessImpact: [
      "Protected operational continuity and reduced disruption in role-based execution",
      "Improved reliability of workflow-dependent processes that support field operations",
    ],
    tags: ["Workflow Governance", "State Integrity", "Operations", "Release Risk"],
  },
  {
    id: "integrated-transaction-system",
    title: "Integrated Transaction System",
    variant: "case-study",
    domain: "Cross-Module Transaction Processing",
    context:
      "Transaction ecosystem coordinating order flow, processing stages, and downstream updates across multiple connected systems. Correctness depended on consistent status propagation and reliable behavior at every checkpoint.",
    problem:
      "Partial failures and fragmented ownership created uncertainty around transaction completeness, making it difficult to determine whether the system remained correct under failure conditions.",
    whatIOwned: [
      "Defined the transaction checkpoints that determined whether processing remained trustworthy across boundaries",
      "Set QA focus on integration paths where inconsistency would create the highest business risk",
      "Framed release decisions around transaction integrity rather than isolated module success",
      "Established decision evidence for whether the system could safely carry transactional load into release",
    ],
    risksHandled: [
      "Transaction inconsistency across connected modules and downstream systems",
      "Incorrect or misleading transaction status at critical business checkpoints",
      "Hidden failure paths where partial success concealed broken end-to-end processing",
    ],
    decisionImpact: [
      "Improved release decisions by exposing transaction risk before deployment approval",
      "Increased confidence in end-to-end correctness across module boundaries",
      "Reduced the probability of releasing with unresolved integration failure conditions",
    ],
    businessImpact: [
      "Protected transaction reliability in processes tied to customer and business operations",
      "Reduced operational risk caused by inconsistent processing outcomes across systems",
    ],
    tags: ["Transaction Integrity", "System Boundaries", "Release Readiness", "Operational Risk"],
  },
  {
    id: "object-storage-platform",
    title: "Object Storage Platform",
    variant: "case-study",
    domain: "Infrastructure Reliability & Data Integrity",
    context:
      "Infrastructure storage platform supporting availability, integrity, and continuity for systems depending on stable data persistence. Platform health had a direct effect on downstream application behavior and operational resilience.",
    problem:
      "Storage instability created upstream confidence that appeared healthy while silently increasing downstream risk to data reliability and operational continuity.",
    whatIOwned: [
      "Framed infrastructure behavior as a quality decision input, not a separate operational concern",
      "Defined the boundary between acceptable platform degradation and release-blocking reliability risk",
      "Escalated attention to incidents where storage signals could compromise application correctness",
      "Connected infrastructure findings to system-level release judgment and operational readiness",
    ],
    risksHandled: [
      "Data integrity degradation affecting business-critical application behavior",
      "Cross-layer instability where storage problems propagated into application failures",
      "Silent reliability erosion that could surface only after release under operational load",
    ],
    decisionImpact: [
      "Improved release control by factoring infrastructure reliability into quality judgment",
      "Increased confidence that downstream systems were not being released on unstable foundations",
      "Reduced the risk of approving changes while platform integrity remained uncertain",
    ],
    businessImpact: [
      "Protected service continuity and trust in systems dependent on storage reliability",
      "Strengthened overall system resilience by treating infrastructure risk as part of quality ownership",
    ],
    tags: ["Data Integrity", "Platform Reliability", "System Resilience", "Operational Continuity"],
  },
  {
    id: "vulnerability-monitoring-platform",
    title: "Vulnerability Monitoring Platform",
    variant: "case-study",
    domain: "Security Monitoring & Risk Visibility",
    context:
      "Monitoring platform used to surface security findings, remediation status, and risk visibility across digital assets. Decision quality depended on whether monitoring outputs could be trusted as current and accurate.",
    problem:
      "Inconsistent and stale monitoring data weakened confidence in risk visibility, creating the possibility of incorrect decisions based on misleading security information.",
    whatIOwned: [
      "Defined the quality boundary for which monitoring outputs were trustworthy enough to support decisions",
      "Framed data consistency and freshness as release-critical quality conditions, not reporting details",
      "Directed focus toward decision-critical outputs where inaccurate monitoring would distort risk judgment",
      "Controlled acceptance criteria around whether the platform could be relied on for operational decision support",
    ],
    risksHandled: [
      "Incorrect risk visibility caused by inconsistent monitoring outputs",
      "Cross-source inconsistency between underlying findings and surfaced decision data",
      "Silent failure where stale data appeared valid and misled operational judgment",
    ],
    decisionImpact: [
      "Improved release judgment by making trust boundaries for monitoring outputs explicit",
      "Increased confidence that surfaced risk information reflected the real system state",
      "Reduced the chance of approving changes that degraded decision-critical visibility",
    ],
    businessImpact: [
      "Strengthened trust in monitoring data used for risk and remediation decisions",
      "Improved reliability of a platform that supports security awareness and operational prioritization",
    ],
    tags: ["Security Visibility", "Decision Support", "Data Trust", "Monitoring Governance"],
  },
];

export const builtSystemsProjects: PortfolioProject[] = [
  {
    id: "ai-qa-automation-platform",
    title: "AI QA Automation Platform",
    variant: "decision-system",
    decisionProblem: [
      "QA decisions depended too heavily on manual interpretation, making defect intake, triage, and follow-up inconsistent across projects",
      "Critical quality signals were fragmented across conversations and personal judgment, increasing the risk of delayed release decisions and uneven defect handling",
    ],
    whatThisSystemChanged: [
      "Turned QA handling from an ad hoc activity into a structured decision flow with consistent intake, classification, and follow-up",
      "Created a repeatable way to convert scattered quality knowledge into reusable decision support instead of project-specific memory",
      "Reduced ambiguity in how issues move from signal to action, especially when multiple projects compete for attention",
    ],
    decisionImpact: [
      "Release decisions became more reliable because issue signals were structured earlier and carried with clearer context",
      "Defect prioritization became safer because classification quality no longer depended entirely on manual interpretation",
      "Operational risk was reduced by limiting knowledge loss, inconsistent triage, and fragmented QA handling across projects",
    ],
    evidence: buildEvidence("ai-qa-automation-platform"),
    tags: ["Decision System", "QA Operations", "Knowledge Flow", "Release Support"],
  },
  {
    id: "telegram-qa-bug-tracker-bot",
    title: "Telegram QA Bug Tracker Bot",
    variant: "decision-system",
    decisionProblem: [
      "Defect information inside team chat was difficult to trust as a basis for action because it was unstructured, duplicated, and easy to lose",
      "Teams lacked a dependable way to distinguish between noise, repeat reports, and issues that should influence release readiness",
    ],
    whatThisSystemChanged: [
      "Converted informal chat signals into structured defect records that could support traceable decision-making",
      "Introduced a clearer boundary between casual discussion and actionable issue reporting",
      "Reduced ambiguity in how teams capture, classify, and follow defects from initial report to tracking",
    ],
    decisionImpact: [
      "Release discussions became safer because issue visibility was less dependent on memory and chat history",
      "Defect handling became more reliable by reducing duplicate reporting and missing records",
      "Operational risk was lowered because teams could act on more consistent defect information with stronger traceability",
    ],
    evidence: buildEvidence("telegram-qa-bug-tracker-bot"),
    tags: ["Decision System", "Defect Intake", "Traceability", "Release Visibility"],
  },
  {
    id: "qa-workflow-automation-engine",
    title: "QA Workflow Automation Engine",
    variant: "decision-system",
    decisionProblem: [
      "QA process control was weak because critical signals, alerts, and follow-up steps were spread across disconnected tools and manual coordination",
      "Important validation steps could be delayed or missed, creating uncertainty around process completeness and release confidence",
    ],
    whatThisSystemChanged: [
      "Reframed QA workflow as a controlled decision system rather than a series of isolated manual tasks",
      "Established a structured path for how QA signals move, escalate, and trigger follow-up action",
      "Reduced dependence on individual coordination by making process flow more explicit and repeatable",
    ],
    decisionImpact: [
      "Process-level decisions became faster because QA signals arrived with clearer timing and routing",
      "Release control became safer by reducing missed steps and fragmented coordination across the QA flow",
      "Operational risk was reduced because the system improved visibility into whether critical QA actions had actually occurred before decisions were made",
    ],
    evidence: buildEvidence("qa-workflow-automation-engine"),
    tags: ["Decision System", "Process Control", "Signal Orchestration", "Execution Reliability"],
  },
];

export const projects = enterpriseCaseStudies;
