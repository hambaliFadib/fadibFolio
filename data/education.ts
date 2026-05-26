import type { TimelineRange } from "@/lib/date-ranges";

interface IdentityLogo {
  alt: string;
  src: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  institutionLogo: IdentityLogo;
  degree: string;
  range: TimelineRange;
  expectedGraduation?: {
    month: number;
    year: number;
  };
  note: string;
}

export const educationItems: EducationItem[] = [
  {
    id: "asia-cyber-university",
    institution: "Asia Cyber University",
    institutionLogo: {
      src: "/unsia.jpg",
      alt: "Asia Cyber University logo",
    },
    degree: "Bachelor of Science, Management Information Systems",
    range: {
      start: {
        month: 11,
        year: 2023,
      },
      ongoing: true,
    },
    expectedGraduation: {
      month: 2,
      year: 2029,
    },
    note:
      "Currently pursuing a Bachelor's degree focusing on business process analysis, system design, data management, and IT governance.",
  },
  {
    id: "smkn-1-soreang",
    institution: "SMKN 1 Soreang",
    institutionLogo: {
      src: "/smk.png",
      alt: "SMKN 1 Soreang logo",
    },
    degree: "Computer and Network Engineering",
    range: {
      start: {
        month: 2,
        year: 2021,
      },
      end: {
        month: 4,
        year: 2023,
      },
    },
    note:
      "Built foundation in networking, server infrastructure, and system troubleshooting.",
  },
];
