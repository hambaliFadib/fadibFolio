import type { Metadata } from "next";
import { ContactPageContent } from "@/components/portfolio/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Open for discussion, collaboration, and system or QA topics.",
};

export default function ContactPage() {
  return (
    <div className="pb-16 pt-8">
      <ContactPageContent />
    </div>
  );
}
