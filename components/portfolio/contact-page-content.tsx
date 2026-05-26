"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
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

  function updateField(field: keyof ContactFormState, value: string) {
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
    <section className="px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="font-mono text-xs font-medium uppercase text-primary/80">
                Contact
              </p>
              <h1 className="text-5xl font-semibold leading-[1.06] text-foreground sm:text-6xl">
                Get in touch.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted-foreground">
                Open for professional discussion around collaboration, systems,
                quality strategy, and delivery decisions where clarity matters.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-11 rounded-full px-5">
                <Link href={`mailto:${siteConfig.author.email}`}>
                  <Mail className="h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-border/80 bg-background/80 px-5"
              >
                <Link
                  href={siteConfig.author.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
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
                    className="group rounded-lg border border-border/70 bg-card/82 p-4 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-primary/25 hover:bg-card motion-safe:hover:-translate-y-px"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-background/90 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">{channel.label}</p>
                        <p className="mt-1 break-words text-sm leading-6 text-foreground/82">
                          {channel.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {channel.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <Card className="border-border/70 bg-card/92 py-0 shadow-[0_28px_80px_-54px_rgba(20,33,61,0.48)]">
            <CardHeader className="border-b border-border/70 p-6">
              <CardTitle className="text-2xl text-foreground">Send a message</CardTitle>
              <p className="text-sm leading-6 text-muted-foreground">
                Share the context, goal, and preferred next step.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2.5">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input
                      id="full-name"
                      value={formState.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      placeholder="Your name"
                      className="h-12 rounded-lg border-border/80 bg-background/92 px-4 shadow-none"
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
                      className="h-12 rounded-lg border-border/80 bg-background/92 px-4 shadow-none"
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
                      className="h-12 rounded-lg border-border/80 bg-background/92 px-4 shadow-none"
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
                        className="h-12 w-full rounded-lg border-border/80 bg-background/92 px-4 shadow-none"
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
                    className="min-h-[170px] rounded-lg border-border/80 bg-background/92 px-4 py-3 shadow-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="h-12 rounded-full px-6">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
