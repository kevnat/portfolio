export type Highlight = {
  id: string;
  type: "screenshot" | "press" | "demo";
  title: string;
  source: string;
  description: string;
  href?: string;
};

export type TimelineEntry = {
  id: string;
  kind: "work" | "education";
  dateRange: string;
  title: string;
  org: string;
  location?: string;
  summary: string;
  achievements: string[];
  highlights: Highlight[];
};

export const profile = {
  name: "Kevin Nathan",
  location: "Denver, CO",
  email: "kevinmaxnathan@gmail.com",
  phone: "215-740-4214",
  linkedin: "https://www.linkedin.com/in/kevnat",
  summary:
    "Senior Product Manager with 10+ years building and scaling payments platforms across multi-billion dollar transaction volumes, from new terminal launches to embedded payments expanding across new markets, currencies, and payment methods. I thrive in ambiguous, technically complex problem spaces, partnering closely with engineering and design to turn open-ended requirements into simple, seamless solutions that hold up at enterprise scale, including Fortune 500 companies where payments are mission-critical. I pair deep payments domain expertise (gateways, terminals, reconciliation) with hands-on technical fluency to move fast without sacrificing quality.",
  focusAreas: [
    {
      category: "Payments",
      items: [
        "Payment Platforms",
        "Payment Processing, Gateways & Terminals",
        "Payment Reconciliation",
      ],
    },
    {
      category: "Technical",
      items: [
        "SQL",
        "Data Analytics with Node & Python",
        "Full Stack Development with Next.js & Swift",
        "Claude Code",
      ],
    },
    {
      category: "Product",
      items: [
        "Product Strategy",
        "0→1 & 1→N Product Leadership",
        "Roadmapping",
        "Stakeholder Management",
      ],
    },
  ],
};

// Highlights are placeholders — swap in real screenshots, press links, and demo URLs per role.
export const timeline: TimelineEntry[] = [
  {
    id: "billingplatform",
    kind: "work",
    dateRange: "2025 — Present",
    title: "Senior Product Manager, Payments",
    org: "BillingPlatform",
    location: "Denver, CO",
    summary:
      "Own the payments roadmap and serve as the payments SME across engineering and operations, from capacity planning through merchant-facing delivery.",
    achievements: [
      "Defined an 18-month payments roadmap across 24 initiatives, building a capacity planning model that exposed critical engineering constraints and drove leadership hiring decisions.",
      "Scaled a new embedded payments solution from a single-customer pilot to supporting merchants across new payment methods, currencies, and geographies.",
      "Productized a reconciliation dashboard, originally built with Claude Code as a recurring report on raw Adyen data, into the platform's standard model for merchant payment reconciliation.",
      "Designed and shipped a new payment allocation dashboard, leading end-to-end delivery while adapting to evolving requirements on a tight timeline.",
      "Serve as payments SME across engineering operations, advancing automated merchant onboarding and partnering directly with clients on complex system integrations.",
    ],
    highlights: [
      {
        id: "billingplatform-highlight-1",
        type: "screenshot",
        title: "Reconciliation dashboard",
        source: "BillingPlatform",
        description: "Add a screenshot of the merchant payment reconciliation dashboard.",
      },
      {
        id: "billingplatform-highlight-2",
        type: "screenshot",
        title: "Payment allocation dashboard",
        source: "BillingPlatform",
        description: "Add a screenshot of the payment allocation dashboard.",
      },
    ],
  },
  {
    id: "basys",
    kind: "work",
    dateRange: "2024 — 2025",
    title: "Senior Product Manager",
    org: "Basys",
    location: "Denver, CO (Remote)",
    summary:
      "Took ownership of a newly launched PAX terminal application, moving it from launch into a sequenced, prioritized post-launch roadmap.",
    achievements: [
      "Organized and sequenced the roadmap for a newly launched PAX terminal application, defining priorities and delivery milestones for a post-launch product.",
    ],
    highlights: [
      {
        id: "basys-highlight-1",
        type: "screenshot",
        title: "PAX terminal application",
        source: "Basys",
        description: "Add a screenshot of the PAX terminal application.",
      },
    ],
  },
  {
    id: "moov",
    kind: "work",
    dateRange: "2023 — 2024",
    title: "Senior Product Manager, Card Acquiring",
    org: "Moov Financial, Inc.",
    location: "Denver, CO (Remote)",
    summary:
      "Owned card acquiring reporting and requirements, pairing process automation with market research for a new authorization and capture initiative.",
    achievements: [
      "Spearheaded development of a reporting dashboard that automated the acquiring reconciliation process, saving the Finance Team two hours daily.",
      "Conducted market research and defined requirements for a strategic initiative enabling payment authorization and capture across various use cases.",
    ],
    highlights: [
      {
        id: "moov-highlight-1",
        type: "screenshot",
        title: "Acquiring reconciliation dashboard",
        source: "Moov Financial",
        description: "Add a screenshot of the reporting dashboard.",
      },
    ],
  },
  {
    id: "clover",
    kind: "work",
    dateRange: "2021 — 2023",
    title: "Senior Product Manager, Integrated Payments",
    org: "Clover, a Fiserv Company",
    location: "Denver, CO",
    summary:
      "Drove adoption of Clover's integrated payments solutions across web and mobile, launching new APIs and SDKs that grew the integrated payments business.",
    achievements: [
      "Drove adoption of new solutions for web, Android, and iOS apps, growing the integrated payments business by 6% to reach 15% of total Clover volume in 2023.",
      "Launched Clover's REST Pay Display API, which reached $40M in gross payment volume within the first six months of adoption.",
      "Shipped new Clover Mobile SDK for Android and iOS to commercialize a new Clover Card Reader for integrated partners.",
    ],
    highlights: [
      {
        id: "clover-highlight-1",
        type: "demo",
        title: "REST Pay Display API",
        source: "Clover",
        description: "Add a link or demo for the REST Pay Display API.",
        href: "#",
      },
      {
        id: "clover-highlight-2",
        type: "screenshot",
        title: "Clover Mobile SDK",
        source: "Clover",
        description: "Add a screenshot of the Clover Card Reader / Mobile SDK integration.",
      },
    ],
  },
  {
    id: "cardconnect",
    kind: "work",
    dateRange: "2017 — 2021",
    title: "Group Product Manager, Payments",
    org: "CardConnect, a Fiserv Company",
    location: "Philadelphia, PA",
    summary:
      "Led 0→1 development of CardPointe Integrated Terminal and managed a five-person product and technical writing team.",
    achievements: [
      "Led 0→1 development and launch of CardPointe Integrated Terminal, which processed $1.6B in gross payment volume across 16,000 devices in H2 2019 alone.",
      "Managed a team of five, including three Product Managers and two Technical Writers.",
      "Patent: Network provisioning and tokenization using a remote terminal (2021).",
    ],
    highlights: [
      {
        id: "cardconnect-highlight-1",
        type: "screenshot",
        title: "CardPointe Integrated Terminal",
        source: "CardConnect",
        description: "Add a screenshot of the CardPointe Integrated Terminal.",
      },
      {
        id: "cardconnect-highlight-2",
        type: "press",
        title: "Patent: Network provisioning and tokenization using a remote terminal",
        source: "USPTO, 2021",
        description: "Add a link to the patent filing.",
        href: "#",
      },
    ],
  },
  {
    id: "education",
    kind: "education",
    dateRange: "2014",
    title: "Bachelor of Business Administration, Legal Studies",
    org: "Temple University",
    summary: "",
    achievements: ["Web Development Certificate, University of Pennsylvania (2018)."],
    highlights: [],
  },
];
