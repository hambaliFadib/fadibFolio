"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Mail,
  MessageSquareText,
  Send,
} from "lucide-react";
import { contactChannels, siteConfig } from "@/data/profile";
import { Button } from "@/components/ui/button";
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
  LinkedIn: BriefcaseBusiness,
  GitHub: Code2,
  Instagram: Camera,
  WhatsApp: MessageSquareText,
} as const;

const subjectOptions = [
  "Architectural Consulting",
  "Collaboration",
  "System design",
  "QA / Quality thinking",
  "Other",
] as const;

type ContactSubject = (typeof subjectOptions)[number];

const subjectTemplates: Record<ContactSubject, string> = {
  "Architectural Consulting": [
    "Hi Hambali,",
    "",
    "I would like to discuss architectural consulting for:",
    "",
    "Context:",
    "Current challenge:",
    "Expected outcome:",
    "Preferred next step:",
  ].join("\n"),
  Collaboration: [
    "Hi Hambali,",
    "",
    "I am interested in exploring a collaboration around:",
    "",
    "Collaboration idea:",
    "Role / contribution expected:",
    "Timeline:",
    "Preferred next step:",
  ].join("\n"),
  "System design": [
    "Hi Hambali,",
    "",
    "I would like to discuss system design support for:",
    "",
    "System / product context:",
    "Main design concern:",
    "Current constraints:",
    "Preferred next step:",
  ].join("\n"),
  "QA / Quality thinking": [
    "Hi Hambali,",
    "",
    "I would like to discuss QA / quality thinking around:",
    "",
    "System or release context:",
    "Quality risk or ambiguity:",
    "Evidence / validation needed:",
    "Preferred next step:",
  ].join("\n"),
  Other: [
    "Hi Hambali,",
    "",
    "I would like to get in touch regarding:",
    "",
    "Context:",
    "Question / request:",
    "Preferred next step:",
  ].join("\n"),
};

interface ContactFormState {
  fullName: string;
  email: string;
  company: string;
  subject: ContactSubject;
  message: string;
}

function buildContactBody(formState: ContactFormState, includeGreeting = false) {
  return [
    includeGreeting ? "Portfolio contact from website." : null,
    includeGreeting ? "" : null,
    `Subject: ${formState.subject}`,
    `Name: ${formState.fullName}`,
    `Email: ${formState.email}`,
    `Company / Organization: ${formState.company}`,
    "",
    "Message:",
    formState.message || subjectTemplates[formState.subject],
  ]
    .filter(Boolean)
    .join("\n");
}

function buildContactMailto(formState: ContactFormState) {
  const subject = encodeURIComponent(`[Portfolio Contact] ${formState.subject}`);
  const body = encodeURIComponent(buildContactBody(formState));

  return `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
}

function buildWhatsAppHref(formState: ContactFormState) {
  const params = new URLSearchParams({
    text: buildContactBody(formState, true),
  });
  const separator = siteConfig.author.whatsapp.includes("?") ? "&" : "?";

  return `${siteConfig.author.whatsapp}${separator}${params.toString()}`;
}

export function ContactPageContent() {
  const [formState, setFormState] = useState<ContactFormState>({
    fullName: "",
    email: "",
    company: "",
    subject: subjectOptions[0],
    message: subjectTemplates[subjectOptions[0]],
  });

  function updateField(field: keyof ContactFormState, value: string) {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function updateSubject(value: string) {
    const nextSubject = value as ContactSubject;

    setFormState((current) => {
      const currentTemplate = subjectTemplates[current.subject];
      const shouldReplaceMessage =
        current.message.trim() === "" || current.message === currentTemplate;

      return {
        ...current,
        subject: nextSubject,
        message: shouldReplaceMessage
          ? subjectTemplates[nextSubject]
          : current.message,
      };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = buildContactMailto(formState);
  }

  return (
    <section className="px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="max-w-3xl space-y-8">
            <p className="font-mono text-xs font-medium uppercase text-muted-foreground">
              Get in touch
            </p>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-[2rem] font-semibold leading-[1.08] text-foreground sm:text-[2.35rem] lg:text-[2.65rem]">
                Let&apos;s Build Clearer Systems.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Whether discussing quality architecture, automation strategy,
                governance frameworks, or complex system validation - feel free
                to reach out.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[37rem] lg:mx-0 lg:justify-self-end">
            <Image
              src="/communication-core.svg"
              alt="Communication Core"
              width={592}
              height={400}
              priority
              className="h-auto w-full select-none"
            />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-12">
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-foreground" />
                <p className="font-mono text-xs font-medium text-foreground">
                  Available for selected opportunities
                </p>
              </div>

              <p className="text-lg leading-8 text-muted-foreground">
                Open for collaboration, discussion, and architectural consulting.
              </p>
            </div>

            <div className="space-y-4">
              {contactChannels.map((channel) => {
                const Icon = contactIconMap[channel.label as keyof typeof contactIconMap];
                const isExternal = channel.href.startsWith("http");
                const href =
                  channel.label === "Email"
                    ? buildContactMailto(formState)
                    : channel.label === "WhatsApp"
                      ? buildWhatsAppHref(formState)
                      : channel.href;

                return (
                  <Link
                    key={channel.label}
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    aria-label={channel.label}
                    className="group flex min-h-[72px] items-center gap-5 rounded-lg border border-transparent bg-card/92 px-5 py-4 shadow-[0_18px_55px_-42px_rgba(20,33,61,0.35)] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:border-primary/18 hover:bg-card hover:shadow-[0_24px_60px_-42px_rgba(20,33,61,0.42)] motion-safe:hover:-translate-y-px"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] font-medium text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="mt-1 block break-words text-base font-semibold leading-6 text-foreground">
                        {channel.value}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.125rem] border border-border/70 bg-card/95 p-6 shadow-[0_28px_80px_-56px_rgba(20,33,61,0.38)] sm:p-8 lg:p-12 max-h-[80vh] overflow-y-auto">
            <form className="space-y-7" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="full-name" className="font-mono text-[11px] text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="full-name"
                    value={formState.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    placeholder="Jane Doe"
                    className="h-10 rounded-none border-0 border-b border-border/80 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="font-mono text-[11px] text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="jane@example.com"
                    className="h-10 rounded-none border-0 border-b border-border/80 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="company" className="font-mono text-[11px] text-muted-foreground">
                  Company / Organization
                </Label>
                <Input
                  id="company"
                  value={formState.company}
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder="Tech Innovations Inc."
                  className="h-10 rounded-none border-0 border-b border-border/80 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="font-mono text-[11px] text-muted-foreground">
                  Subject
                </Label>
                <Select
                  value={formState.subject}
                  onValueChange={updateSubject}
                >
                  <SelectTrigger
                    id="subject"
                    className="h-10 w-full rounded-none border-0 border-b border-border/80 bg-transparent px-0 text-base shadow-none focus:ring-0 focus-visible:ring-0"
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

              <div className="space-y-3">
                <Label htmlFor="message" className="font-mono text-[11px] text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder={subjectTemplates[formState.subject]}
                  maxLength={5000}
                  className="min-h-[120px] resize-none rounded-none border-0 border-b border-border/80 bg-transparent px-0 py-2 text-base shadow-none focus-visible:ring-0"
                  required
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button type="submit" size="lg" className="h-12 rounded-full bg-foreground px-8 text-background hover:bg-foreground/90">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-foreground/70 bg-transparent px-8 text-foreground hover:bg-secondary"
                >
                  <Link
                    href={buildWhatsAppHref(formState)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message via WhatsApp
                  </Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
