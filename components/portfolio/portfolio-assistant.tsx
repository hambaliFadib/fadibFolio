"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { Bot, CornerDownLeft, Sparkles } from "lucide-react";
import { assistantConfig, type AssistantMessage } from "@/data/assistant";
import { AssistantMessageContent } from "@/components/portfolio/assistant-message-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface PortfolioAssistantProps {
  className?: string;
  id?: string;
}

interface AssistantRouteResponse {
  message?: AssistantMessage;
  error?: string;
}

export function PortfolioAssistant({
  className,
  id = "assistant",
}: PortfolioAssistantProps) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<AssistantMessage[]>(
    () => [...assistantConfig.sampleMessages],
  );
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messageViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const viewport = messageViewportRef.current;

    if (!viewport) {
      return;
    }

    const shouldAnimate = messages.length > assistantConfig.sampleMessages.length || isLoading;

    viewport.scrollTo({
      top: viewport.scrollHeight,
      behavior: shouldAnimate ? "smooth" : "auto",
    });
  }, [isLoading, messages]);

  function hideQuickPrompts() {
    setShowQuickPrompts(false);
  }

  function handleDraftChange(value: string) {
    setDraft(value);

    if (showQuickPrompts && value.trim().length > 0) {
      hideQuickPrompts();
    }
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

      startTransition(() => {
        setMessages((current) => [...current, payload.message as AssistantMessage]);
      });
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : assistantConfig.errorMessage;

      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function submitPrompt(prompt: string) {
    if (isLoading) {
      return;
    }

    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt) {
      return;
    }

    const userMessage: AssistantMessage = { role: "user", content: trimmedPrompt };
    const nextConversation: AssistantMessage[] = [...messages, userMessage];

    setDraft("");
    hideQuickPrompts();
    setError(null);

    startTransition(() => {
      setMessages(nextConversation);
    });

    void requestAssistantReply(nextConversation);
  }

  return (
    <Card
      id={id}
      className={cn(
        "flex h-[32rem] w-full flex-col gap-0 overflow-hidden rounded-[1.5rem] border-border/70 bg-card/98 py-0 shadow-[0_24px_60px_-42px_rgba(11,36,84,0.45)] sm:h-[34rem] sm:rounded-[1.75rem] lg:h-[35rem] dark:shadow-[0_24px_60px_-42px_rgba(2,8,23,0.82)]",
        className,
      )}
    >
      <CardHeader className="shrink-0 gap-4 border-b border-border/70 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
        <div className="flex items-start justify-between gap-3">
          <Badge
            variant="outline"
            className="max-w-[calc(100%-3.5rem)] whitespace-normal rounded-full border-primary/20 bg-primary/5 px-3 py-1 text-center font-mono text-[10px] leading-4 tracking-[0.22em] text-primary sm:max-w-none"
          >
            {assistantConfig.badge}
          </Badge>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-12 sm:w-12">
            <Bot className="h-5 w-5 shrink-0" />
          </div>
        </div>

        <div className="min-w-0 space-y-2">
          <CardTitle className="text-[1.35rem] leading-tight tracking-tight sm:text-[1.55rem]">
            {assistantConfig.title}
          </CardTitle>
          <p className="max-w-none text-sm leading-6 text-muted-foreground">
            {assistantConfig.description}
            <span className="mt-1.5 block text-[13px] leading-6 text-foreground/72 sm:text-sm">
              {assistantConfig.supportingLine}
            </span>
          </p>
        </div>
      </CardHeader>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div
          ref={messageViewportRef}
          className="min-h-0 flex-1 overflow-y-auto scroll-smooth px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6"
        >
          <div className="rounded-2xl border border-border/70 bg-secondary/55 p-3 pr-2.5 sm:p-4 sm:pr-3">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={cn(
                    "flex",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[94%] break-words whitespace-normal rounded-2xl px-3.5 py-3 text-[13px] leading-6 sm:max-w-[88%] sm:px-4 sm:text-sm",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground",
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
                  <div className="max-w-[88%] rounded-2xl bg-background px-4 py-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span>{assistantConfig.loadingLabel}</span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/70" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/60 [animation-delay:120ms]" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary/50 [animation-delay:240ms]" />
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="shrink-0 border-t border-border/70 bg-secondary/28 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
          <div className="space-y-4">
            {showQuickPrompts ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Quick prompts
                </div>
                <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
                  {assistantConfig.quickQuestions.map((question) => (
                    <Button
                      key={question}
                      type="button"
                      variant="outline"
                      size="sm"
                      className="h-auto shrink-0 rounded-full border-border/80 bg-background/85 px-3 py-2 text-left text-xs leading-5 text-muted-foreground hover:text-foreground"
                      onClick={() => submitPrompt(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            ) : null}

            {error ? (
              <div
                role="alert"
                className="rounded-2xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm leading-6 text-foreground/85"
              >
                {error}
              </div>
            ) : null}

            <form
              className="min-w-0"
              onSubmit={(event) => {
                event.preventDefault();
                submitPrompt(draft);
              }}
            >
              <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-border/80 bg-background/95 p-2 shadow-[0_18px_35px_-32px_rgba(11,36,84,0.65)] dark:shadow-[0_18px_35px_-32px_rgba(2,8,23,0.82)]">
                <Input
                  value={draft}
                  onChange={(event) => handleDraftChange(event.target.value)}
                  placeholder={assistantConfig.placeholder}
                  className="h-11 min-w-0 flex-1 border-0 bg-transparent px-3 text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-12"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="h-11 shrink-0 rounded-xl px-4 sm:h-12 sm:px-5"
                  disabled={isLoading}
                >
                  Send
                  <CornerDownLeft className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}


