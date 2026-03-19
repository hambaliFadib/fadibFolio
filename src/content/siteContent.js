export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Quality Thinking', path: '/quality-thinking' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const homeContent = {
  eyebrow: 'Enterprise Quality Governance',
  title: 'Quality Decision Anchor in High-Risk Enterprise Systems',
  subtitle:
    'Turning ambiguous designs into defensible releases through business invariants and risk governance.',
  domainLine:
    'Billing • Financial Calculation • Multi-System Transactions • Enterprise Workflows',
  intro:
    'Software Quality Assurance Engineer focused on risk-based quality, business process validation, and quality governance across complex enterprise systems.',
  coreValues: [
    {
      title: 'Business Invariant Definition',
      description:
        'Clarifying the rules that must remain true before, during, and after release so validation stays aligned with business intent.',
    },
    {
      title: 'Risk Governance',
      description:
        'Making QA boundaries, accepted residual risks, and release tradeoffs explicit when requirements evolve under real delivery pressure.',
    },
    {
      title: 'Enterprise Workflow Validation',
      description:
        'Testing integrated transaction paths end to end so downstream calculations, approvals, and operational states remain trustworthy.',
    },
  ],
  focusAreas: [
    'Risk-based testing across API, UI, integration, performance, SIT, and UAT phases',
    'Cross-functional alignment with analysts, developers, and business stakeholders',
    'Quality gate definition for business-process change and release readiness',
  ],
  proofPoints: [
    'Defined realistic QA boundaries for high-risk modules during SIT and UAT.',
    'Used modular automation to stabilize regression coverage without making automation the identity of the work.',
    'Supported release decisions by clarifying business-critical impact, residual risk, and validation depth.',
  ],
};

export const projects = [
  {
    slug: 'billing-calculation-system',
    title: 'Billing & Calculation System',
    context:
      'Enterprise billing flows where calculation accuracy, pricing rules, and downstream financial effects had to remain stable across change.',
    risk:
      'Ambiguity in calculation logic and edge-case handling could create financial discrepancies, reconciliation effort, and loss of release confidence.',
    actions: [
      'Structured risk-based test coverage around calculation paths, exception handling, and regression-sensitive business rules.',
      'Aligned QA scope with analysts and developers when designs shifted or business assumptions were incomplete.',
      'Used modular automation to protect stable regression paths while preserving room for exploratory and scenario-driven validation.',
    ],
    contribution:
      'Anchored quality conversations around financial invariants, acceptable boundaries, and what residual risk remained at release time.',
    outcome:
      'Improved clarity on what was validated, what changed, and what risks were knowingly accepted before release decisions were made.',
    artifact: 'Risk-based regression strategy for calculation-sensitive release paths.',
  },
  {
    slug: 'field-operation-service-workflows',
    title: 'Field Operation & Service Workflow Applications',
    context:
      'Operational applications supporting service execution, status transitions, handoffs, and workflow completion across multiple roles.',
    risk:
      'Workflow ambiguity could break operational continuity, create invalid state transitions, and obscure whether business intent was preserved.',
    actions: [
      'Mapped critical user journeys and handoff points to identify where process breakdowns could create operational risk.',
      'Validated role-based workflow behavior across UI, API, and integrated process dependencies.',
      'Focused testing on state integrity, exception scenarios, and release-boundary clarity during changing requirements.',
    ],
    contribution:
      'Converted broad workflow uncertainty into explicit validation boundaries tied to business process outcomes.',
    outcome:
      'Strengthened release readiness for operational workflows by making process-critical failure modes visible earlier.',
    artifact: 'Workflow state validation matrix covering business-critical transitions.',
  },
  {
    slug: 'digital-order-transaction-ecosystem',
    title: 'Integrated Digital Order & Transaction Ecosystem',
    context:
      'Multi-system transaction flows where orders, approvals, calculations, and status updates moved across interconnected enterprise services.',
    risk:
      'Integration defects could create inconsistent data states, incomplete transactions, and confusion about system accountability.',
    actions: [
      'Designed scenario-based integration coverage around transaction continuity, message handoffs, and data consistency expectations.',
      'Investigated defect patterns to distinguish isolated bugs from recurring design or process weaknesses.',
      'Helped align acceptance criteria with real business flow dependencies instead of isolated feature assumptions.',
    ],
    contribution:
      'Supported defensible release decisions by clarifying which cross-system paths were protected and where residual integration risk remained.',
    outcome:
      'Reduced ambiguity around enterprise transaction readiness and improved shared understanding of release exposure.',
    artifact: 'Cross-system transaction risk map for SIT and UAT readiness.',
  },
  {
    slug: 'vulnerability-risk-monitoring-platform',
    title: 'Vulnerability & Risk Monitoring Platform',
    context:
      'A platform concerned with operational visibility, monitoring quality, and risk signal accuracy for internal stakeholders.',
    risk:
      'Weak validation could undermine trust in alerts, dashboards, or monitoring outputs, leading to poor prioritization and delayed response.',
    actions: [
      'Validated critical monitoring behaviors, rule accuracy, and reporting consistency under realistic usage patterns.',
      'Applied root-cause-oriented defect analysis to separate cosmetic issues from governance-relevant reliability risks.',
      'Maintained testing focus on decision usefulness rather than pure feature completion.',
    ],
    contribution:
      'Brought a reliability-oriented QA lens that connected system behavior to stakeholder confidence and operational actionability.',
    outcome:
      'Helped improve confidence that risk information remained usable, consistent, and fit for enterprise decision support.',
    artifact: 'Monitoring confidence checklist for release and stakeholder sign-off.',
  },
  {
    slug: 'object-storage-platform',
    title: 'Object Storage Platform',
    context:
      'Infrastructure-adjacent work that strengthened awareness of data integrity, reliability expectations, and system-level operational dependencies.',
    risk:
      'Storage or reliability issues could compromise trust in system behavior even when application-layer features appeared correct.',
    actions: [
      'Applied a reliability mindset to data handling expectations, system observability, and operational verification practices.',
      'Connected technical behavior to the practical need for dependable platform foundations.',
      'Used this experience as a supporting base for later enterprise QA work rather than as a primary professional identity.',
    ],
    contribution:
      'Contributed foundational systems thinking that now informs how business-critical quality risks are assessed in software delivery.',
    outcome:
      'Strengthened the reliability perspective behind enterprise validation, especially where data correctness and platform trust intersect.',
    artifact: 'Operational reliability perspective informing later QA governance work.',
  },
];

export const qualityThinkingSections = [
  {
    title: 'What is a business-critical invariant?',
    body:
      'A business-critical invariant is a rule that must remain true for the business process to remain trustworthy. In enterprise systems, these are often calculation rules, workflow state constraints, approval conditions, or transaction outcomes that cannot quietly drift without creating downstream risk.',
  },
  {
    title: 'Why enterprise QA fails when business intent is unclear',
    body:
      'Testing loses value when teams validate screens and endpoints without a stable view of what the business is actually trying to protect. Clarity on intent is what turns test activity into meaningful release evidence.',
  },
  {
    title: 'Defining quality boundaries under changing requirements',
    body:
      'A realistic QA approach does not pretend every change can be exhaustively covered. It defines what must be protected, where validation depth is strongest, what remains uncertain, and which risks should be accepted consciously rather than accidentally.',
  },
  {
    title: 'Residual risk and release decision ownership',
    body:
      'Residual risk should be made visible, not hidden behind test completion percentages. Release confidence improves when stakeholders understand which risks were addressed, which were deferred, and what business exposure remains.',
  },
  {
    title: 'Quality governance versus test execution',
    body:
      'Test execution checks behavior. Quality governance connects that behavior to business impact, decision accountability, acceptance criteria, and release boundaries. Both matter, but governance is what makes test outcomes useful in high-risk environments.',
  },
  {
    title: 'Why clarity before release matters',
    body:
      'When business rules, test scope, and release assumptions are aligned before deployment, teams make stronger decisions. When they are not aligned, uncertainty moves into production where it becomes more expensive and harder to explain.',
  },
];

export const aboutContent = {
  intro:
    'I am a Software Quality Assurance Engineer focused on risk-based quality, business process validation, and quality governance in complex enterprise systems.',
  paragraphs: [
    'My work centers on making quality decisions explicit and defensible. That means clarifying business rules, protecting business-critical invariants, and defining realistic QA boundaries when system design is still evolving or delivery constraints are tight.',
    'My earlier background in technical support and reliability-oriented environments shaped how I look at software quality today. It built practical awareness of data integrity, operational continuity, monitoring, and the importance of dependable system behavior under real conditions.',
    'Over time, that foundation evolved into a broader QA approach focused not only on defect detection, but also on release decision support. I work best where business workflows are complex, system interactions matter, and quality needs to be communicated in terms stakeholders can act on.',
    'I am especially interested in enterprise modules where business-process alignment, calculation correctness, workflow integrity, and cross-functional clarity directly influence release confidence.',
  ],
  highlights: [
    'Risk-based quality planning across API, UI, integration, performance, SIT, and UAT work.',
    'Defect risk analysis and root-cause investigation to reduce recurring production exposure.',
    'Quality gate and acceptance-criteria alignment as business processes evolve.',
  ],
};

export const contactContent = {
  message:
    'If you are hiring for enterprise QA work, exploring quality governance needs, or want to discuss risk-based validation in complex systems, I would be glad to connect.',
  email: 'fadibhambali@gmail.com',
  linkedin: 'https://linkedin.com/in/hambali-fadib-502886276',
  github: 'https://github.com/hambaliFadib',
  resumeLabel: 'Resume available on request',
};
