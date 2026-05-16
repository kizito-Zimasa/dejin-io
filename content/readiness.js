export const readinessDimensions = [
  {
    id: 'awareness',
    name: 'AI Awareness',
    description: 'Leadership understanding of AI capabilities and relevance',
    questions: [
      {
        id: 'a1',
        text: 'How well does your leadership team understand what AI can practically do for your operations?',
        answers: [
          { score: 1, label: 'Limited — we\'ve heard the term but don\'t know what\'s realistic' },
          { score: 2, label: 'Basic — we understand the general concept but haven\'t mapped specific use cases' },
          { score: 3, label: 'Moderate — we\'ve had demos and understand how AI applies to workflows like ours' },
          { score: 4, label: 'Strong — we\'ve mapped specific high-impact AI opportunities in our operations' },
        ],
      },
      {
        id: 'a2',
        text: 'Has your organisation run any AI pilots or experiments?',
        answers: [
          { score: 1, label: 'No — we haven\'t tried anything yet' },
          { score: 2, label: 'We\'ve discussed it but haven\'t started anything formal' },
          { score: 3, label: 'We\'ve run 1–2 small pilots, with mixed results' },
          { score: 4, label: 'We have multiple active AI initiatives with measured outcomes' },
        ],
      },
      {
        id: 'a3',
        text: 'Is AI discussed at board or senior leadership level in your organisation?',
        answers: [
          { score: 1, label: 'Never — it\'s not on the agenda' },
          { score: 2, label: 'Occasionally — informally or when prompted by news' },
          { score: 3, label: 'Regularly — it\'s part of our strategy conversations' },
          { score: 4, label: 'Systematically — it\'s a standing agenda item with budget implications' },
        ],
      },
    ],
  },
  {
    id: 'data',
    name: 'Data Readiness',
    description: 'Availability, quality, and governance of operational data',
    questions: [
      {
        id: 'd1',
        text: 'Is your key operational data stored digitally and accessible to your team?',
        answers: [
          { score: 1, label: 'Mostly paper-based or in disconnected systems — hard to access' },
          { score: 2, label: 'Partially digital, but data is siloed across tools and hard to extract' },
          { score: 3, label: 'Mostly digital and accessible, but not well-organised or documented' },
          { score: 4, label: 'Core operational data is digital, structured, and accessible via API or export' },
        ],
      },
      {
        id: 'd2',
        text: 'How would you describe the quality of your operational data?',
        answers: [
          { score: 1, label: 'Poor — significant gaps, inconsistencies, and errors we know about' },
          { score: 2, label: 'Variable — data exists but accuracy and completeness are unreliable' },
          { score: 3, label: 'Good — mostly clean with some known gaps we\'re addressing' },
          { score: 4, label: 'Strong — validated, well-documented data with defined quality standards' },
        ],
      },
      {
        id: 'd3',
        text: 'Does your organisation have a data governance policy?',
        answers: [
          { score: 1, label: 'No — data management is informal and undocumented' },
          { score: 2, label: 'Informal — some practices exist but nothing documented or enforced' },
          { score: 3, label: 'Documented — we have a policy, but application is inconsistent' },
          { score: 4, label: 'Formal — data governance is documented, owned, and regularly audited' },
        ],
      },
    ],
  },
  {
    id: 'process',
    name: 'Process Maturity',
    description: 'Documentation, measurement, and standardisation of core workflows',
    questions: [
      {
        id: 'p1',
        text: 'Are your core operational workflows documented?',
        answers: [
          { score: 1, label: 'No — processes exist in people\'s heads, not on paper' },
          { score: 2, label: 'Partially — some documentation exists but it\'s incomplete or outdated' },
          { score: 3, label: 'Mostly — key processes are documented and reasonably current' },
          { score: 4, label: 'Fully — all processes are documented, versioned, and owned by named individuals' },
        ],
      },
      {
        id: 'p2',
        text: 'Do you measure operational KPIs consistently?',
        answers: [
          { score: 1, label: 'No regular measurement — we work from intuition and anecdote' },
          { score: 2, label: 'Some tracking — a few metrics are monitored informally' },
          { score: 3, label: 'Regular tracking — key metrics are measured, but not always acted on' },
          { score: 4, label: 'Systematic — comprehensive KPI dashboard reviewed regularly by leadership' },
        ],
      },
      {
        id: 'p3',
        text: 'Are your core operational processes standardised across teams or locations?',
        answers: [
          { score: 1, label: 'Highly variable — each person or team does things their own way' },
          { score: 2, label: 'Some standardisation — common patterns exist but with many informal exceptions' },
          { score: 3, label: 'Mostly standardised — consistent process with a few known deviations' },
          { score: 4, label: 'Fully standardised — enforced and consistent across all teams and locations' },
        ],
      },
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership Readiness',
    description: 'AI vision, sponsorship, and budget commitment from leadership',
    questions: [
      {
        id: 'l1',
        text: 'Does your organisation have a clear AI vision or transformation strategy?',
        answers: [
          { score: 1, label: 'None — we haven\'t discussed what AI means for our organisation' },
          { score: 2, label: 'Informal — there\'s a vague direction but nothing formalised' },
          { score: 3, label: 'Emerging — a strategy is being developed with rough timelines' },
          { score: 4, label: 'Defined — formal AI strategy with goals, timelines, and accountable owners' },
        ],
      },
      {
        id: 'l2',
        text: 'Is there dedicated budget available for AI transformation?',
        answers: [
          { score: 1, label: 'No budget — it would need to come entirely from savings we haven\'t yet made' },
          { score: 2, label: 'Possible — there\'s flexibility, but it would need a strong business case' },
          { score: 3, label: 'Available — informal budget exists and leadership is willing to commit' },
          { score: 4, label: 'Committed — a dedicated AI transformation budget has been approved' },
        ],
      },
      {
        id: 'l3',
        text: 'Is there an identified AI champion — someone driving the AI agenda with authority?',
        answers: [
          { score: 1, label: 'No — nobody is specifically responsible for AI in our organisation' },
          { score: 2, label: 'Interested — someone wants to drive it but has no formal mandate' },
          { score: 3, label: 'Designated — a person has been assigned to lead AI initiatives' },
          { score: 4, label: 'Senior champion — a C-suite or board-level leader is actively driving the AI agenda' },
        ],
      },
    ],
  },
  {
    id: 'governance',
    name: 'Governance Readiness',
    description: 'Privacy, security, compliance, and responsible AI frameworks',
    questions: [
      {
        id: 'g1',
        text: 'Are data privacy and security policies in place and enforced?',
        answers: [
          { score: 1, label: 'No formal policies — we handle data informally without documented rules' },
          { score: 2, label: 'Basic policies — documented but not consistently applied or audited' },
          { score: 3, label: 'Good policies — clear rules that are generally followed with some gaps' },
          { score: 4, label: 'Comprehensive — robust policies, regularly audited, with defined incident response' },
        ],
      },
      {
        id: 'g2',
        text: 'Is there a process for reviewing and validating AI system outputs before they affect customers or operations?',
        answers: [
          { score: 1, label: 'No — we\'d trust whatever the system produces without review' },
          { score: 2, label: 'Informal — we\'d spot-check occasionally based on gut feel' },
          { score: 3, label: 'Defined — we have a review process for high-stakes outputs' },
          { score: 4, label: 'Formal — documented human-in-the-loop oversight with escalation paths' },
        ],
      },
      {
        id: 'g3',
        text: 'Do you understand the regulatory and compliance requirements for AI in your industry?',
        answers: [
          { score: 1, label: 'Not at all — we haven\'t mapped what applies to us' },
          { score: 2, label: 'Vaguely — we know requirements exist but haven\'t investigated specifics' },
          { score: 3, label: 'Partially — we know the key regulations but haven\'t fully addressed them' },
          { score: 4, label: 'Fully mapped — all relevant regulations are understood and compliance is planned' },
        ],
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation Potential',
    description: 'Volume and nature of repetitive, rule-based work in your operations',
    questions: [
      {
        id: 'au1',
        text: 'What share of your team\'s daily work involves repetitive, rule-based tasks?',
        answers: [
          { score: 1, label: 'Less than 20% — most work requires significant human judgment' },
          { score: 2, label: '20–40% — a meaningful amount, but judgment-heavy work dominates' },
          { score: 3, label: '40–60% — roughly half the work follows predictable patterns' },
          { score: 4, label: 'Over 60% — most daily work is repetitive and could be systematised' },
        ],
      },
      {
        id: 'au2',
        text: 'How much staff time per person is spent on manual data entry, document routing, or status updates?',
        answers: [
          { score: 1, label: 'Less than 2 hours per week — it\'s a minor inconvenience' },
          { score: 2, label: '2–5 hours per week — noticeable but manageable' },
          { score: 3, label: '5–15 hours per week — a significant drag on productivity' },
          { score: 4, label: 'More than 15 hours per week — this is consuming our team\'s capacity' },
        ],
      },
      {
        id: 'au3',
        text: 'Do customers or internal stakeholders contact your team repeatedly asking the same standard questions?',
        answers: [
          { score: 1, label: 'Rarely — inquiries are mostly unique and require real investigation' },
          { score: 2, label: 'Occasionally — some repeat patterns, but it\'s not a major issue' },
          { score: 3, label: 'Regularly — the same questions come in constantly and it\'s a known drain' },
          { score: 4, label: 'Constantly — repetitive inquiries are one of our biggest operational challenges' },
        ],
      },
    ],
  },
  {
    id: 'quickwin',
    name: 'Quick-Win Potential',
    description: 'Readiness for a measurable AI win in 3 weeks',
    questions: [
      {
        id: 'q1',
        text: 'Is there a specific operational bottleneck with a clear, measurable cost or time impact?',
        answers: [
          { score: 1, label: 'No — our challenges are diffuse and hard to pin down to one bottleneck' },
          { score: 2, label: 'Possibly — we know inefficiencies exist but haven\'t quantified them' },
          { score: 3, label: 'Yes — we have a clear bottleneck with rough impact estimates' },
          { score: 4, label: 'Definitely — we know exactly what it costs us in time, money, and quality' },
        ],
      },
      {
        id: 'q2',
        text: 'Is the data required to automate that bottleneck already in a digital system?',
        answers: [
          { score: 1, label: 'No — it\'s mostly paper-based or in disconnected spreadsheets' },
          { score: 2, label: 'Partially — the data exists digitally but isn\'t well-organised or accessible' },
          { score: 3, label: 'Mostly — the data is digital with some manual steps still in the process' },
          { score: 4, label: 'Yes — fully digital, accessible via API or export, and reasonably clean' },
        ],
      },
      {
        id: 'q3',
        text: 'Could a measurable improvement in 3 weeks create a visible business case for further AI investment?',
        answers: [
          { score: 1, label: 'Unlikely — leadership expects longer timelines before measuring impact' },
          { score: 2, label: 'Possibly — it depends on how success is defined and who\'s watching' },
          { score: 3, label: 'Yes — a clear 3-week result would get leadership attention and build momentum' },
          { score: 4, label: 'Absolutely — we\'re under pressure to show AI results quickly and concretely' },
        ],
      },
    ],
  },
];

export const maturityStages = [
  {
    stage: 1,
    scoreRange: [7, 12],
    name: 'AI Curious',
    colour: 'amber',
    tailwindBg: 'bg-amber-100',
    tailwindText: 'text-amber-800',
    tailwindBorder: 'border-amber-400',
    description:
      'You\'re at the beginning of the AI journey. AI awareness is limited, data is fragmented, and operational processes are inconsistent. The biggest risk at this stage is deploying AI on a weak foundation — it won\'t stick.',
    nextStep:
      'Before deploying AI, build the foundations: document your key workflows, get your data into digital systems, and secure a leadership sponsor. Dejin can help you design the right starting point without expensive pilots.',
    recommendedService: null,
    recommendedServiceLabel: null,
    cta: 'Book a Readiness Conversation',
  },
  {
    stage: 2,
    scoreRange: [13, 16],
    name: 'AI Aware',
    colour: 'orange',
    tailwindBg: 'bg-orange-100',
    tailwindText: 'text-orange-800',
    tailwindBorder: 'border-brand-primary',
    description:
      'You understand AI\'s potential and have the foundations to act — digital data, documented processes, and leadership awareness. The gap between "aware" and "proven" is often just one successful implementation.',
    nextStep:
      'A Dejin Quick Win can take you from aware to proven in 3 weeks. We\'ll start with your highest-impact bottleneck, build a working system, and give you a results story that justifies the next step.',
    recommendedService: '/services/chatbot',
    recommendedServiceLabel: 'Explore Customer Service Chatbot',
    cta: 'Book a Discovery Call',
  },
  {
    stage: 3,
    scoreRange: [17, 20],
    name: 'AI Pilot-Ready',
    colour: 'teal',
    tailwindBg: 'bg-teal-100',
    tailwindText: 'text-teal-800',
    tailwindBorder: 'border-teal',
    description:
      'Your organisation is ready to deploy AI in production. You have digital data, documented processes, leadership alignment, and a clear bottleneck to target. This is the ideal profile for a 3-week Quick Win.',
    nextStep:
      'You\'re ready. Pick your bottleneck — customer service volume, document routing errors, or status inquiry load — and Dejin will deliver a working system with measurable ROI in 3 weeks. No pilot. No 6-month project.',
    recommendedService: '/services/document-routing',
    recommendedServiceLabel: 'Explore Document Routing',
    cta: 'Get This Built in 3 Weeks',
  },
  {
    stage: 4,
    scoreRange: [21, 24],
    name: 'AI Scaling',
    colour: 'blue',
    tailwindBg: 'bg-blue-100',
    tailwindText: 'text-blue-800',
    tailwindBorder: 'border-blue-500',
    description:
      'You\'ve proven AI works. Your challenge now is moving from one successful workflow to systematic expansion. You need a platform, not a project — something that lets you roll out AI across operations without rebuilding from scratch each time.',
    nextStep:
      'Cortex by Dejin is built for this. One platform, multiple workflows, governed outputs. We\'ll help you expand from your first win into a broader AI operations capability — with the same speed and guarantee.',
    recommendedService: '/cortex',
    recommendedServiceLabel: 'Learn About Cortex',
    cta: 'Book a Scaling Conversation',
  },
  {
    stage: 5,
    scoreRange: [25, 28],
    name: 'AI-Driven Organisation',
    colour: 'green',
    tailwindBg: 'bg-green-100',
    tailwindText: 'text-green-800',
    tailwindBorder: 'border-green-600',
    description:
      'AI is embedded in your operations. You measure results, govern outputs, and scale strategically. Your challenge is pushing further — into more complex workflows, new channels, and capabilities that require a trusted delivery partner.',
    nextStep:
      'Let\'s talk about what\'s next. Whether it\'s a new workflow, a harder integration, or an advanced AI capability, Dejin can build and run it in 3 weeks on Cortex — with the governance and accountability your organisation expects.',
    recommendedService: '/contact',
    recommendedServiceLabel: 'See Advanced Capabilities',
    cta: 'Book a Strategic Conversation',
  },
];

export const roiDefaults = {
  chatbot: {
    dailyInquiries: 300,
    handlingMinutes: 5,
    staffCostPerHour: 15,
    automationRate: 0.35,
    investmentLow: 18000,
    investmentHigh: 22000,
  },
  documentRouting: {
    documentsPerDay: 80,
    minutesPerDocument: 12,
    staffCostPerHour: 15,
    errorReductionRate: 0.45,
    investmentFixed: 18000,
  },
  statusAutomation: {
    dailyInquiries: 200,
    handlingMinutes: 3,
    staffCostPerHour: 15,
    automationRate: 0.65,
    investmentLow: 15000,
    investmentHigh: 18000,
  },
};
