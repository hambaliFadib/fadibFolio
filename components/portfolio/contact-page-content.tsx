"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { contactChannels, siteConfig } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactIconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
} as const;

const subjectOptions = [
  "General discussion",
  "Collaboration",
  "System design",
  "QA / Quality thinking",
  "Other",
] as const;

const sharedCardClassName =
  "border-border/70 bg-card/95 shadow-[0_18px_50px_-42px_rgba(11,36,84,0.35)] dark:shadow-[0_18px_50px_-42px_rgba(2,8,23,0.72)]";

interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

function buildContactMailto(formState: ContactFormState) {
  const params = new URLSearchParams({
    subject: `[Portfolio Contact] ${formState.subject}`,
    body: [
      `Name: ${formState.fullName}`,
      `Email: ${formState.email}`,
      formState.phone ? `Phone: ${formState.phone}` : null,
      "",
      formState.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return `mailto:${siteConfig.author.email}?${params.toString()}`;
}

export function ContactPageContent() {
  const [formState, setFormState] = useState<ContactFormState>({
    fullName: "",
    email: "",
    phone: "",
    subject: subjectOptions[0],
    message: "",
  });

  function updateField(
    field: keyof typeof formState,
    value: string,
  ) {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildContactMailto(formState);
  }

  return (
    <section className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-primary/80">
            Contact
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-8">
          <Card className={sharedCardClassName}>
            <CardContent className="flex h-full flex-col gap-6 sm:px-8">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h1 className="text-balance text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.35rem]">
                    Get in touch
                  </h1>
                  <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                    Open for thoughtful discussion around collaboration, systems,
                    design decisions, and QA topics where clarity and practical
                    judgment matter.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {contactChannels.map((channel) => {
                  const Icon = contactIconMap[channel.label as keyof typeof contactIconMap];
                  const isExternal = channel.href.startsWith("http");

                  return (
                    <Link
                      key={channel.label}
                      href={channel.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={channel.label}
                      className="group flex items-start gap-4 rounded-[1.35rem] border border-border/70 bg-secondary/38 px-4 py-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-primary/20 hover:bg-primary/5 hover:shadow-[0_18px_45px_-36px_rgba(11,36,84,0.35)] motion-safe:hover:-translate-y-px"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-background/92 text-primary shadow-[0_12px_30px_-26px_rgba(11,36,84,0.35)] transition-[transform,border-color,background-color] duration-300 group-hover:border-primary/20 group-hover:bg-background motion-safe:group-hover:-translate-y-px dark:shadow-[0_12px_30px_-26px_rgba(2,8,23,0.72)]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 space-y-1">
                        <p className="text-sm font-semibold tracking-tight text-foreground">
                          {channel.label}
                        </p>
                        <p className="break-words text-sm leading-6 text-foreground/85">
                          {channel.value}
                        </p>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {channel.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className={sharedCardClassName}>
            <CardHeader className="space-y-2 sm:px-8">
              <CardTitle className="text-xl tracking-tight text-foreground sm:text-2xl">
                Send a message
              </CardTitle>
              <p className="text-sm leading-6 text-muted-foreground">
                Share the context briefly and clearly. The form opens your email
                client with the message prefilled, and can be connected to a
                backend later if needed.
              </p>
            </CardHeader>
            <CardContent className="sm:px-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input
                      id="full-name"
                      value={formState.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      placeholder="Your name"
                      className="h-12 rounded-xl border-border/80 bg-background/92 px-4 shadow-none"
                      required
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      placeholder="you@example.com"
                      className="h-12 rounded-xl border-border/80 bg-background/92 px-4 shadow-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formState.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      placeholder="Optional"
                      className="h-12 rounded-xl border-border/80 bg-background/92 px-4 shadow-none"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formState.subject}
                      onValueChange={(value) => updateField("subject", value)}
                    >
                      <SelectTrigger
                        id="subject"
                        className="h-12 w-full rounded-xl border-border/80 bg-background/92 px-4 shadow-none"
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjectOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formState.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="Write your message here"
                    className="min-h-[160px] rounded-[1.25rem] border-border/80 bg-background/92 px-4 py-3 shadow-none"
                    required
                  />
                </div>

                <div className="flex justify-start">
                  <Button type="submit" size="lg" className="h-12 rounded-full px-6">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
