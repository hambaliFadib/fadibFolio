export interface ThinkingHeader {
  eyebrow: string;
  title: string;
  subtitle: string;
  statements: string[];
}

export interface ThinkingCard {
  id: string;
  title: string;
  description: string;
}

export interface ThinkingListCard {
  id: string;
  title: string;
  points: string[];
}

export interface ThinkingCardSection<TCard> {
  eyebrow: string;
  title: string;
  description?: string;
  items: TCard[];
}

export const thinkingPageHeader: ThinkingHeader = {
  eyebrow: "Decision thinking",
  title: "QA Thinking System",
  subtitle:
    "How quality decisions are made under ambiguity, risk, and real business impact.",
  statements: [
    "This section does not describe what was built.",
    "It explains how decisions are made when testing alone is not enough.",
  ],
};

export const decisionPrinciplesSection: ThinkingCardSection<ThinkingCard> = {
  eyebrow: "Core principles",
  title: "Decision Principles",
  items: [
    {
      id: "testing-is-not-validation",
      title: "Testing is not validation",
      description:
        "Testing shows system behavior. Validation proves business correctness.",
    },
    {
      id: "absence-of-defects-is-not-proof",
      title: "Absence of defects is not proof",
      description:
        "A system can pass all tests and still fail in production. Confidence must come from invariant and evidence, not absence of failure.",
    },
    {
      id: "ambiguity-is-the-highest-risk",
      title: "Ambiguity is the highest risk",
      description:
        "Most critical failures do not come from bugs, but from unclear rules, hidden assumptions, and undefined ownership.",
    },
    {
      id: "quality-is-a-decision-system",
      title: "Quality is a decision system",
      description:
        "Quality is not a testing phase. It is a structured way to decide whether a system is safe to release.",
    },
  ],
};

export const problemBreakdownSection: ThinkingCardSection<ThinkingCard> = {
  eyebrow: "Problem breakdown",
  title: "How I Break Down a Problem",
  items: [
    {
      id: "business-intent",
      title: "Business Intent",
      description:
        "What is the system actually trying to achieve? What outcome must be protected?",
    },
    {
      id: "system-behavior",
      title: "System Behavior",
      description:
        "How does the system implement the intent? Where can it silently diverge?",
    },
    {
      id: "failure-path",
      title: "Failure Path",
      description:
        "Where can failure happen without immediate detection? What breaks later, not now?",
    },
    {
      id: "hidden-dependency",
      title: "Hidden Dependency",
      description:
        "What external system, data, or process influences correctness?",
    },
  ],
};

export const riskThinkingModelSection: ThinkingCardSection<ThinkingCard> = {
  eyebrow: "Risk model",
  title: "Risk Thinking Model",
  description:
    "Risk is not defined by severity alone. It is defined by visibility, impact, and dependency.",
  items: [
    {
      id: "ambiguity",
      title: "Ambiguity",
      description: "Unclear rules create inconsistent system behavior.",
    },
    {
      id: "impact",
      title: "Impact",
      description: "What business damage occurs if this is wrong?",
    },
    {
      id: "dependency",
      title: "Dependency",
      description: "Does correctness rely on another system or process?",
    },
    {
      id: "detectability",
      title: "Detectability",
      description: "Will failure be immediately visible, or delayed?",
    },
  ],
};

export const decisionPatternsSection: ThinkingCardSection<ThinkingListCard> = {
  eyebrow: "Decision patterns",
  title: "Decision Patterns",
  description:
    "These are repeatable patterns used when making release decisions.",
  items: [
    {
      id: "when-to-block-release",
      title: "When to Block Release",
      points: [
        "Invariant is not defined",
        "Proof does not exist",
        "System depends on assumption",
      ],
    },
    {
      id: "when-to-allow-conditional-release",
      title: "When to Allow Conditional Release",
      points: [
        "Risk is known and isolated",
        "Monitoring is in place",
        "Business accepts the trade-off",
      ],
    },
    {
      id: "when-to-escalate",
      title: "When to Escalate",
      points: [
        "Cross-module inconsistency",
        "Ownership is unclear",
        "Business impact is high",
      ],
    },
    {
      id: "when-to-ignore-noise",
      title: "When to Ignore Noise",
      points: [
        "Issue has no business impact",
        "Already mitigated by design",
        "Not part of release decision boundary",
      ],
    },
  ],
};

export const antiPatternsSection: ThinkingCardSection<ThinkingCard> = {
  eyebrow: "Anti-patterns",
  title: "Anti-Patterns in QA Thinking",
  description: "Common mistakes that create false confidence.",
  items: [
    {
      id: "more-test-case-more-quality",
      title: "More test case = more quality",
      description: "Coverage does not guarantee correctness.",
    },
    {
      id: "pass-safe-to-release",
      title: "Pass = safe to release",
      description: "Passing tests do not validate business risk.",
    },
    {
      id: "testing-everything",
      title: "Testing everything",
      description: "Without prioritization, testing becomes noise.",
    },
    {
      id: "qa-as-executor-only",
      title: "QA as executor only",
      description:
        "QA must own decision clarity, not just execution.",
    },
  ],
};

export const thinkingSnapshotSection: ThinkingCardSection<ThinkingCard> = {
  eyebrow: "Thinking snapshot",
  title: "Thinking Snapshot",
  description:
    "Real fragments of reasoning used during decision-making. Not full cases, but decision thinking in action.",
  items: [
    {
      id: "billing-calculation-inconsistency",
      title: "Billing calculation inconsistency",
      description:
        "System passed rating validation, but failed at billing aggregation due to missing contract mapping. Decision blocked due to broken financial invariant.",
    },
  ],
};

export const thinkingFinalThought = {
  title: "Final Thought",
  description:
    "Quality is not measured by how much was tested. Quality is measured by whether the release decision is still correct under real business conditions.",
};
