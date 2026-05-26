import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface AssistantMessageContentProps {
  content: string;
  className?: string;
}

type MessageSegment =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "unordered-list";
      items: string[];
    }
  | {
      type: "ordered-list";
      items: string[];
    };

const unorderedListPattern = /^[-*]\s+/;
const orderedListPattern = /^\d+[.)]\s+/;
const headingPattern = /^(#{1,3}\s+.+|[A-Z][A-Za-z0-9/&(),' -]{1,80}:)$/;
const inlinePattern = /(\*\*[^*]+\*\*|https?:\/\/[^\s]+|mailto:[^\s]+)/g;

function stripUnorderedMarker(line: string) {
  return line.replace(unorderedListPattern, "").trim();
}

function stripOrderedMarker(line: string) {
  return line.replace(orderedListPattern, "").trim();
}

function parseMessageSegments(content: string): MessageSegment[] {
  const normalized = content.replace(/\r\n/g, "\n").trim();

  if (!normalized) {
    return [];
  }

  const lines = normalized.split("\n");
  const segments: MessageSegment[] = [];
  let index = 0;

  while (index < lines.length) {
    const currentLine = lines[index]?.trim() ?? "";

    if (!currentLine) {
      index += 1;
      continue;
    }

    if (unorderedListPattern.test(currentLine)) {
      const items: string[] = [];

      while (index < lines.length) {
        const listLine = lines[index]?.trim() ?? "";

        if (!unorderedListPattern.test(listLine)) {
          break;
        }

        items.push(stripUnorderedMarker(listLine));
        index += 1;
      }

      segments.push({ type: "unordered-list", items });
      continue;
    }

    if (orderedListPattern.test(currentLine)) {
      const items: string[] = [];

      while (index < lines.length) {
        const listLine = lines[index]?.trim() ?? "";

        if (!orderedListPattern.test(listLine)) {
          break;
        }

        items.push(stripOrderedMarker(listLine));
        index += 1;
      }

      segments.push({ type: "ordered-list", items });
      continue;
    }

    const paragraphLines: string[] = [];

    while (index < lines.length) {
      const paragraphLine = lines[index]?.trim() ?? "";

      if (!paragraphLine) {
        break;
      }

      if (unorderedListPattern.test(paragraphLine) || orderedListPattern.test(paragraphLine)) {
        break;
      }

      paragraphLines.push(paragraphLine);
      index += 1;
    }

    segments.push({
      type: "paragraph",
      text: paragraphLines.join("\n").trim(),
    });
  }

  return segments;
}

function renderInlineText(text: string) {
  return text.split("\n").map((line, lineIndex) => {
    const parts = line.split(inlinePattern);

    return (
      <Fragment key={`${lineIndex}-${line}`}>
        {lineIndex > 0 ? <br /> : null}
        {parts.map((part, partIndex) => {
          if (!part) {
            return null;
          }

          if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
            return (
              <strong key={`${partIndex}-${part}`} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            );
          }

          if (
            part.startsWith("http://") ||
            part.startsWith("https://") ||
            part.startsWith("mailto:")
          ) {
            return (
              <a
                key={`${partIndex}-${part}`}
                href={part}
                target={part.startsWith("mailto:") ? undefined : "_blank"}
                rel={part.startsWith("mailto:") ? undefined : "noreferrer"}
                className="break-all font-medium text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary/80"
              >
                {part}
              </a>
            );
          }

          return <Fragment key={`${partIndex}-${part}`}>{part}</Fragment>;
        })}
      </Fragment>
    );
  });
}

function isHeadingParagraph(text: string) {
  return !text.includes("\n") && headingPattern.test(text);
}

export function AssistantMessageContent({
  content,
  className,
}: AssistantMessageContentProps) {
  const segments = parseMessageSegments(content);

  return (
    <div className={cn("space-y-3", className)}>
      {segments.map((segment, index) => {
        if (segment.type === "unordered-list") {
          return (
            <ul key={`unordered-${index}`} className="list-disc space-y-2 pl-5">
              {segment.items.map((item, itemIndex) => (
                <li key={`unordered-item-${itemIndex}`} className="pl-1 marker:text-primary/70">
                  {renderInlineText(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (segment.type === "ordered-list") {
          return (
            <ol key={`ordered-${index}`} className="list-decimal space-y-2 pl-5">
              {segment.items.map((item, itemIndex) => (
                <li key={`ordered-item-${itemIndex}`} className="pl-1 marker:text-primary/70">
                  {renderInlineText(item)}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p
            key={`paragraph-${index}`}
            className={cn(
              "text-pretty",
              isHeadingParagraph(segment.text) ? "font-semibold text-foreground" : "",
            )}
          >
            {renderInlineText(segment.text.replace(/^#{1,3}\s+/, ""))}
          </p>
        );
      })}
    </div>
  );
}
