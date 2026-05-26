import Image from "next/image";
import { cn } from "@/lib/utils";

interface IdentityMarkerProps {
  src: string;
  alt: string;
  className?: string;
}

export function IdentityMarker({ src, alt, className }: IdentityMarkerProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/70 bg-background/95 p-1.5 shadow-[0_12px_30px_-26px_rgba(11,36,84,0.35)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        sizes="40px"
        className="h-auto max-h-full w-auto object-contain"
      />
    </div>
  );
}
