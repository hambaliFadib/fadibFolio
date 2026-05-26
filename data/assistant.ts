export interface AssistantMessage {
  role: "assistant" | "user";
  content: string;
}

export const assistantConfig = {
  title: "Clarity AI",
  badge: "Portfolio-aware reasoning",
  description:
    "Architectural reasoning assistant for the published portfolio.",
  supportingLine:
    "",
  placeholder: "Ask about QA approach, systems handled, release decisions, or contact...",
  quickQuestions: [
    "Who is Hambali Fadib?",
    "What projects has he handled?",
    "What is his QA approach?",
    "How can I contact him?",
    "Can you share his public links?",
  ],
  sampleMessages: [
    {
      role: "assistant",
      content:
        "Ask about background, projects, systems, QA thinking, or the best page to open next.",
    },
  ] satisfies AssistantMessage[],
  loadingLabel: "Thinking through the portfolio...",
  errorMessage:
    "The portfolio assistant is temporarily unavailable. Please try again shortly.",
} as const;
