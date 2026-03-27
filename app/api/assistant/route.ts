import { NextResponse } from "next/server";
import { z } from "zod";
import type { AssistantMessage } from "@/data/assistant";
import { requestCerebrasChatCompletion } from "@/lib/cerebras";
import {
  buildPortfolioAssistantSystemPrompt,
  sanitizeAssistantMessages,
} from "@/lib/portfolio-assistant";

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["assistant", "user"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(20),
});

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    const messages = sanitizeAssistantMessages(body.messages as AssistantMessage[]);

    if (messages.length === 0) {
      return NextResponse.json(
        { error: "At least one user message is required." },
        { status: 400 },
      );
    }

    const content = await requestCerebrasChatCompletion({
      systemPrompt: buildPortfolioAssistantSystemPrompt(messages),
      messages,
    });

    return NextResponse.json({
      message: {
        role: "assistant",
        content,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid assistant request payload." },
        { status: 400 },
      );
    }

    console.error("Portfolio assistant route error:", error);

    const message =
      error instanceof Error
        ? error.message === "Cerebras API key is not configured."
          ? "The portfolio assistant is not configured yet. Add CEREBRAS_API_KEY to .env or .env.local, then restart the Next.js server."
          : error.message
        : "The portfolio assistant is temporarily unavailable.";

    return NextResponse.json({ error: message }, { status: 503 });
  }
}
