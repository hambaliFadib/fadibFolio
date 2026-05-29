import "server-only";

import type { AssistantMessage } from "@/data/assistant";

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const DEFAULT_OPENROUTER_MODEL = "openrouter/owl-alpha";

interface OpenRouterChatResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
  message?: string;
}

export async function requestOpenRouterChatCompletion({
  systemPrompt,
  messages,
}: {
  systemPrompt: string;
  messages: AssistantMessage[];
}) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error("OpenRouter API key is not configured.");
  }

  const model = process.env.OPENROUTER_MODEL ?? DEFAULT_OPENROUTER_MODEL;
  const requestBody: Record<string, unknown> = {
    model,
    max_completion_tokens: 420,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      ...messages,
    ],
  };

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.OPENROUTER_SITE_URL ?? "",
      "X-Title": process.env.OPENROUTER_APP_TITLE ?? "Fadibfolio",
    },
    body: JSON.stringify(requestBody),
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });

  const payload = (await response.json().catch(() => null)) as OpenRouterChatResponse | null;

  if (!response.ok) {
    const message =
      payload?.error?.message ??
      payload?.message ??
      `OpenRouter request failed with status ${response.status}.`;

    throw new Error(message);
  }

  const content = payload?.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("OpenRouter returned an empty response.");
  }

  return content;
}
