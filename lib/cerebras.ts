import "server-only";

import type { AssistantMessage } from "@/data/assistant";

const CEREBRAS_API_URL = "https://api.cerebras.ai/v1/chat/completions";
const DEFAULT_CEREBRAS_MODEL = "llama3.1-8b";

interface CerebrasChatResponse {
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

function supportsReasoningEffort(model: string) {
  return model.startsWith("gpt-oss-") || model.startsWith("zai-glm-4.5");
}

export async function requestCerebrasChatCompletion({
  systemPrompt,
  messages,
}: {
  systemPrompt: string;
  messages: AssistantMessage[];
}) {
  const apiKey = process.env.CEREBRAS_API_KEY;

  if (!apiKey) {
    throw new Error("Cerebras API key is not configured.");
  }

  const model = process.env.CEREBRAS_MODEL ?? DEFAULT_CEREBRAS_MODEL;
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

  if (supportsReasoningEffort(model)) {
    requestBody.reasoning_effort = "low";
  }

  const response = await fetch(CEREBRAS_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
    cache: "no-store",
    signal: AbortSignal.timeout(30000),
  });

  const payload = (await response.json().catch(() => null)) as CerebrasChatResponse | null;

  if (!response.ok) {
    const message =
      payload?.error?.message ??
      payload?.message ??
      `Cerebras request failed with status ${response.status}.`;

    throw new Error(message);
  }

  const content = payload?.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("Cerebras returned an empty response.");
  }

  return content;
}




