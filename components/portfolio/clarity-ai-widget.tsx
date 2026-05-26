"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  CornerDownLeft,
  Eraser,
  Expand,
  MessageSquareText,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { assistantConfig, type AssistantMessage } from "@/data/assistant";
import { AssistantMessageContent } from "@/components/portfolio/assistant-message-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type WidgetMode = "closed" | "compact" | "workspace";

interface AssistantRouteResponse {
  message?: AssistantMessage;
  error?: string;
}

const knowledgeDomains = [
  "Portfolio Overview",
  "Projects",
  "QA Thinking",
  "About Hambali",
  "Contact",
] as const;

function LoadingDots() {
  return (
    <span className="flex items-center gap-1" aria-hidden="true">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/75" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/60 [animation-delay:120ms]" />
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/45 [animation-delay:240ms]" />
    </span>
  );
}

function MessageList({
  messages,
  isLoading,
  className,
}: {
  messages: AssistantMessage[];
  isLoading: boolean;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {messages.map((message, index) => (
        <div
          key={`${message.role}-${index}`}
          className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
        >
          <div
            className={cn(
              "max-w-[88%] break-words rounded-lg px-3.5 py-3 text-sm leading-6",
              message.role === "user"
                ? "bg-primary text-primary-foreground"
                : "border border-border/70 bg-card text-foreground",
            )}
          >
            {message.role === "assistant" ? (
              <AssistantMessageContent content={message.content} />
            ) : (
              <p className="whitespace-pre-wrap text-pretty">{message.content}</p>
            )}
          </div>
        </div>
      ))}

      {isLoading ? (
        <div className="flex justify-start">
          <div className="flex max-w-[88%] items-center gap-3 rounded-lg border border-border/70 bg-card px-3.5 py-3 text-sm text-muted-foreground">
            <span>{assistantConfig.loadingLabel}</span>
            <LoadingDots />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ClarityAIWidget() {
  const [mode, setMode] = useState<WidgetMode>("closed");
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const compactViewportRef = useRef<HTMLDivElement | null>(null);
  const workspaceViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport =
      mode === "workspace" ? workspaceViewportRef.current : compactViewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: messages.length > 0 || isLoading ? "smooth" : "auto",
    });
  }, [isLoading, messages, mode]);

  function clearSession() {
    setMessages([]);
    setDraft("");
    setError(null);
    setIsLoading(false);
  }

  function closeWidget() {
    clearSession();
    setMode("closed");
  }

  async function requestAssistantReply(conversation: AssistantMessage[]) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: conversation }),
      });

      const payload = (await response.json().catch(() => null)) as AssistantRouteResponse | null;

      if (!response.ok || !payload?.message) {
        throw new Error(payload?.error ?? assistantConfig.errorMessage);
      }

      setMessages((current) => [...current, payload.message as AssistantMessage]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : assistantConfig.errorMessage,
      );
    } finally {
      setIsLoading(false);
    }
  }

  function submitPrompt(prompt: string) {
    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || isLoading) {
      return;
    }

    const userMessage: AssistantMessage = {
      role: "user",
      content: trimmedPrompt,
    };
    const nextConversation = [...messages, userMessage];

    setDraft("");
    setError(null);
    setMessages(nextConversation);
    void requestAssistantReply(nextConversation);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitPrompt(draft);
  }

  const hasConversation = messages.length > 0;

  return (
    <>
      {mode === "closed" ? (
        <button
          type="button"
          aria-label="Open Clarity AI"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_45px_-18px_rgba(20,33,61,0.55)] transition-[transform,box-shadow,opacity] duration-300 hover:opacity-95 hover:shadow-[0_22px_55px_-18px_rgba(20,33,61,0.62)] motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0"
          onClick={() => setMode("compact")}
        >
          <MessageSquareText className="h-5 w-5" />
        </button>
      ) : null}

      {mode === "compact" ? (
        <div className="fixed inset-0 z-50 bg-background/45 backdrop-blur-sm">
          <div className="absolute bottom-6 right-6 flex h-[min(42rem,calc(100vh-3rem))] w-[min(26rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-lg border border-border/80 bg-card/98 shadow-[0_28px_70px_-36px_rgba(20,33,61,0.55)]">
            <div className="border-b border-border/70 px-5 py-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-foreground">
                      Clarity AI
                    </p>
                    <p className="text-xs leading-5 text-muted-foreground">
                      Architectural reasoning assistant
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full"
                    aria-label="Expand Clarity AI"
                    onClick={() => setMode("workspace")}
                  >
                    <Expand className="h-4 w-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full"
                    aria-label="Close Clarity AI"
                    onClick={closeWidget}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div
              ref={compactViewportRef}
              className="min-h-0 flex-1 overflow-y-auto px-5 py-4"
            >
              {hasConversation || isLoading ? (
                <MessageList messages={messages} isLoading={isLoading} />
              ) : (
                <div className="flex min-h-full flex-col justify-between gap-6">
                  <div className="rounded-lg border border-border/70 bg-secondary/45 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Suggested prompts
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {assistantConfig.quickQuestions.slice(0, 4).map((question) => (
                        <Button
                          key={question}
                          type="button"
                          variant="outline"
                          size="sm"
                          className="h-auto rounded-full bg-background/85 px-3 py-2 text-left text-xs leading-5 text-muted-foreground hover:text-foreground"
                          onClick={() => submitPrompt(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {error ? (
              <div className="mx-5 mb-3 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2 text-sm leading-6 text-foreground/85">
                {error}
              </div>
            ) : null}

            <form className="border-t border-border/70 p-4" onSubmit={handleSubmit}>
              <div className="flex items-center gap-2 rounded-lg border border-border/80 bg-background/95 p-2">
                <Input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask about projects, QA thinking, or contact..."
                  className="h-11 min-w-0 flex-1 border-0 bg-transparent px-2 shadow-none focus-visible:ring-0"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-11 w-11 rounded-md"
                  aria-label="Send message"
                  disabled={isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Clarity AI may produce inaccurate information.
              </p>
            </form>
          </div>
        </div>
      ) : null}

      {mode === "workspace" ? (
        <div className="fixed inset-0 z-50 flex bg-background text-foreground">
          <aside className="hidden w-72 shrink-0 border-r border-border/70 bg-card/92 p-5 md:flex md:flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Clarity AI</p>
                <p className="text-xs leading-5 text-muted-foreground">
                  Architectural reasoning assistant
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Knowledge domains
              </p>
              {knowledgeDomains.map((domain) => (
                <div
                  key={domain}
                  className="rounded-lg border border-border/70 bg-background/70 px-3 py-3 text-sm text-foreground/85"
                >
                  {domain}
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="outline"
              className="mt-auto h-10 rounded-full bg-background/80"
              onClick={clearSession}
            >
              <Eraser className="h-4 w-4" />
              New Session
            </Button>
          </aside>

          <main className="grid-bg relative flex min-w-0 flex-1 flex-col overflow-hidden">
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/70 bg-background/88 px-4 backdrop-blur md:px-6">
              <div className="min-w-0 md:hidden">
                <p className="font-semibold">Clarity AI</p>
                <p className="truncate text-xs text-muted-foreground">
                  Architectural reasoning assistant
                </p>
              </div>
              <div className="hidden min-w-0 md:block">
                <p className="text-sm text-muted-foreground">
                  Portfolio reasoning workspace
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-background/80"
                  onClick={clearSession}
                >
                  <Eraser className="h-4 w-4" />
                  New Session
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Close Clarity AI workspace"
                  onClick={closeWidget}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div ref={workspaceViewportRef} className="min-h-0 flex-1 overflow-y-auto px-4 pb-36 pt-8 md:px-8">
              <div className="mx-auto max-w-3xl">
                {hasConversation || isLoading ? (
                  <MessageList messages={messages} isLoading={isLoading} />
                ) : (
                  <div className="flex min-h-[calc(100vh-18rem)] items-center justify-center">
                    <div className="max-w-xl text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg border border-border/70 bg-card text-primary shadow-sm">
                        <CornerDownLeft className="h-6 w-6" />
                      </div>
                      <h2 className="mt-6 text-3xl font-semibold text-foreground">
                        Portfolio context, structured for decisions.
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        Projects, QA thinking, background, and contact paths are
                        available as focused knowledge domains.
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        {assistantConfig.quickQuestions.map((question) => (
                          <Button
                            key={question}
                            type="button"
                            variant="outline"
                            size="sm"
                            className="h-auto rounded-full bg-background/85 px-3 py-2 text-xs text-muted-foreground hover:text-foreground"
                            onClick={() => submitPrompt(question)}
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {error ? (
              <div className="absolute bottom-28 left-4 right-4 mx-auto max-w-3xl rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm leading-6 text-foreground/85 md:left-8 md:right-8">
                {error}
              </div>
            ) : null}

            <form
              className="absolute bottom-0 left-0 right-0 border-t border-border/70 bg-background/86 px-4 py-4 backdrop-blur md:px-8"
              onSubmit={handleSubmit}
            >
              <div className="mx-auto max-w-3xl">
                <div className="flex items-end gap-2 rounded-lg border border-border/80 bg-card/95 p-2 shadow-[0_24px_60px_-44px_rgba(20,33,61,0.45)]">
                  <Textarea
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Ask Clarity AI about this portfolio..."
                    className="max-h-32 min-h-12 flex-1 resize-none border-0 bg-transparent px-3 py-3 text-sm shadow-none focus-visible:ring-0"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="h-11 rounded-md px-4"
                    disabled={isLoading}
                  >
                    Send
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Clarity AI may produce inaccurate information.
                </p>
              </div>
            </form>
          </main>
        </div>
      ) : null}
    </>
  );
}
