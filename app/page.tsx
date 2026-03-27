import { HomeHero } from "@/components/portfolio/home-hero";
import { AssistantHighlightSection } from "@/components/portfolio/assistant-highlight-section";
import { HomeCapabilitySection } from "@/components/portfolio/home-capability-section";
import { HomeNavigationSection } from "@/components/portfolio/home-navigation-section";

export default function HomePage() {
  return (
    <div className="pb-16">
      <HomeHero />
      <AssistantHighlightSection />
      <HomeCapabilitySection />
      <HomeNavigationSection />
    </div>
  );
}