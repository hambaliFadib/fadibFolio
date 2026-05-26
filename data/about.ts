export const aboutProfile = {
  name: "Hambali Fadib",
  summary:
    "I approach work through clarity, structure, and long-term responsibility. My journey started from hands-on technical and operational roles, then grew into software quality work where I learned that correctness matters most when systems are under real pressure. I care about making decisions that stay right, not just look right during testing.",
  principle:
    "I come from hard work, and I believe consistency matters more than noise.",
  image: {
    src: "/fotoAbout.jpg",
    alt: "Hambali Fadib",
  },
};

export const aboutCvAction = {
  label: "View CV",
  href: "/cv.pdf",
  downloadName: "Hambali-Fadib-CV.pdf",
};

export const aboutHardSkillGroups = [
  {
    id: "system-qa",
    title: "System & QA",
    items: [
      "Business Process Analysis",
      "System Behavior Validation",
      "Risk-Based Testing Strategy",
      "API Testing",
      "UI Testing",
      "Integration Testing",
      "Performance Testing",
      "SIT / UAT Coordination",
      "Quality Gate Definition",
      "Cross-Module Validation",
      "Root Cause Analysis",
      "Requirement Clarification",
    ],
  },
  {
    id: "automation-technical",
    title: "Automation & Technical",
    items: [
      "Unit Testing",
      "Automation Testing",
      "Playwright",
      "Cypress",
      "JMeter",
      "Postman / Newman",
      "Python",
      "JavaScript",
      "SQL",
      "Oracle DB",
      "Database Validation",
    ],
  },
  {
    id: "infrastructure-tools",
    title: "Infrastructure & Tools",
    items: [
      "n8n",
      "JMeter",
      "DBeaver",
      "MinIO",
      "Prometheus",
      "Git / GitHub",
      "Docker",
      "Linux",
      "Monitoring",
      "Log Analysis",
      "Environment Validation",
    ],
  },
  {
    id: "delivery-operations",
    title: "Delivery & Operations",
    items: [
      "Release Readiness Review",
      "Defect Risk Analysis",
      "Workflow Validation",
      "Process Integrity Review",
      "Evidence Structuring",
      "QA Documentation",
      "Traceability",
      "Stakeholder Alignment",
    ],
  },
] as const;

export const aboutPersonalFoundation = [
  "I prefer clarity over speed",
  "I value correctness over assumption",
  "I focus on long-term system integrity",
  "I believe systems must reflect real-world logic",
] as const;

export const aboutJourneySection = {
  eyebrow: "Professional moments",
  title: "Journey",
  images: [
    {
      id: "journey-one",
      src: "/satu.jpg",
      alt: "Professional journey moment one",
    },
    {
      id: "journey-two",
      src: "/dua.jpg",
      alt: "Professional journey moment two",
    },
    {
      id: "journey-three",
      src: "/tiga.jpg",
      alt: "Professional journey moment three",
    },
    {
      id: "journey-four",
      src: "/empat.jpg",
      alt: "Professional journey moment four",
    },
    {
      id: "journey-five",
      src: "/lima.jpg",
      alt: "Professional journey moment five",
    },
  ],
} as const;

export const aboutFinalStatement = [
  "Quality is not measured by how much was tested.",
  "Quality is measured by whether the release decision remains correct under real business conditions.",
];
