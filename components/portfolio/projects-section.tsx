import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, type PortfolioProject } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ProjectCaseStudyCard } from "@/components/portfolio/project-case-study-card";
import { SectionHeading } from "@/components/portfolio/section-heading";

interface ProjectsSectionProps {
  id?: string;
  items?: PortfolioProject[];
  limit?: number;
  showViewAll?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
  sectionClassName?: string;
}

export function ProjectsSection({
  id = "projects",
  items,
  limit,
  showViewAll = false,
  eyebrow = "Projects",
  title = "NDA-safe case studies from enterprise systems",
  description = "Structured to show domain, problem, ownership, handled risk, decision impact, and business impact without exposing sensitive detail.",
  sectionClassName = "px-6 py-20 sm:py-24",
}: ProjectsSectionProps) {
  const sourceItems = items ?? projects;
  const visibleItems = limit ? sourceItems.slice(0, limit) : sourceItems;

  return (
    <section id={id} className={sectionClassName}>
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />

          {showViewAll ? (
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-border/80 bg-background/80 px-5"
            >
              <Link href="/projects">
                Open project view
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-2">
          {visibleItems.map((project) => (
            <ProjectCaseStudyCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
