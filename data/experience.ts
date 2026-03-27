import type { TimelineRange } from "@/lib/date-ranges";

interface IdentityLogo {
  alt: string;
  src: string;
}

interface EmploymentMeta {
  label: string;
  range: TimelineRange;
}

export interface ExperienceEntry {
  id: string;
  headerStyle: "company-first" | "role-first";
  companyLine: string;
  companyLogo: IdentityLogo;
  employment?: EmploymentMeta;
  role: string;
  range: TimelineRange;
  location: string;
  summary: string;
  focusHeading: string;
  focusItems: string[];
  closingNote?: string;
}

const neuronworksContractRange: TimelineRange = {
  start: {
    month: 8,
    year: 2023,
  },
  ongoing: true,
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "neuronworks-qa-engineer",
    headerStyle: "company-first",
    companyLine: "PT. Neuronworks Indonesia",
    companyLogo: {
      src: "/neuronworks.png",
      alt: "PT. Neuronworks Indonesia logo",
    },
    employment: {
      label: "Contract",
      range: neuronworksContractRange,
    },
    role: "Software Quality Assurance Engineer",
    range: {
      start: {
        month: 10,
        year: 2024,
      },
      ongoing: true,
    },
    location: "Bandung, West Java, Indonesia · On-site",
    summary:
      "Acted as a quality decision anchor during SIT/UAT by defining explicit QA boundaries and accepted residual risks.",
    focusHeading: "Quality Engineering & Risk Control Initiatives",
    focusItems: [
      "Designed modular automation testing frameworks to enhance regression stability and improve long-term maintainability.",
      "Structured risk-based testing strategies across API, UI, integration, performance, SIT, and UAT phases.",
      "Performed defect risk analysis and root cause investigation to reduce recurring production risks.",
      "Defined quality gates and acceptance criteria aligned with business process evolution.",
    ],
    closingNote:
      "Contributed to cross-functional quality alignment with System Analysts, Developers, and Business stakeholders.",
  },
  {
    id: "technical-support-specialist",
    headerStyle: "company-first",
    companyLine: "PT. Neuronworks Indonesia",
    companyLogo: {
      src: "/neuronworks.png",
      alt: "PT. Neuronworks Indonesia logo",
    },
    employment: {
      label: "Contract",
      range: neuronworksContractRange,
    },
    role: "Technical Support Specialist",
    range: {
      start: {
        month: 8,
        year: 2023,
      },
      end: {
        month: 10,
        year: 2024,
      },
    },
    location: "South Jakarta, Jakarta, Indonesia · Hybrid",
    summary:
      "Supported cloud storage and network infrastructure focusing on data integrity and system reliability.",
    focusHeading: "Cloud Infrastructure & Data Reliability Focus",
    focusItems: [
      "Ensured data integrity across object storage environments.",
      "Monitored system health and infrastructure performance metrics.",
      "Conducted log analysis and root cause investigation.",
      "Collaborated with system administrators to resolve infrastructure issues.",
      "Contributed to preventive controls to minimize operational risks.",
    ],
  },
  {
    id: "papyrus-internship",
    headerStyle: "role-first",
    companyLine: "PT. Papyrus Sakti · Internship",
    companyLogo: {
      src: "/papyrus.png",
      alt: "PT. Papyrus Sakti logo",
    },
    role: "Electronic Data Processing Staff",
    range: {
      start: {
        month: 2,
        year: 2022,
      },
      end: {
        month: 4,
        year: 2022,
      },
    },
    location: "Bandung, West Java, Indonesia · On-site",
    summary:
      "Validated operational data accuracy within manufacturing workflows.",
    focusHeading: "Manufacturing Data Operations",
    focusItems: [
      "Contributed to warehouse automation system (C & Pascal).",
      "Assisted in monitoring logic design.",
      "Validated production vs physical inventory data.",
      "Supported maintenance of operational systems and networks.",
      "Identified inconsistencies and supported corrective actions.",
    ],
  },
];
