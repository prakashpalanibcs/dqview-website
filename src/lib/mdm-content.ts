/* ------------------------------------------------------------------ */
/*  Master Data Management Solution Page — Content                     */
/* ------------------------------------------------------------------ */

import type {
  PlatformHeroProps,
  AnswerFirstProps,
  StatItem,
  ProblemsProps,
  FeaturesProps,
  BenefitsProps,
  ProofProps,
  FAQProps,
  CTAProps,
} from "@/components/platform-sections";

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

export const MDM_META = {
  title: "Master Data Management & Deduplication Solution | deKorvai",
  description:
    "deKorvai finds fuzzy duplicates and builds golden records — Levenshtein, Jaro-Winkler & phonetic matching, impact analysis and approval before SAP update.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const MDM_HERO: PlatformHeroProps = {
  kick: "Solution · Master Data Management",
  badge: "AI fuzzy matching · golden records",
  title: "Master Data You Can Trust — ",
  titleHighlight: "Duplicates Found, Golden Records Built",
  subtitle:
    "Duplicate and inconsistent master data inflates stock, splits spend, and corrupts reporting. deKorvai detects near-duplicates that exact matching misses, merges them into governed golden records, and keeps every system in sync — for customers, vendors, and materials.",
  rating: "120,000+ material records cleansed with AI fuzzy matching",
  ledgerTitle: "fuzzy match · material master",
  ledgerRows: [
    {
      label: '"Hexagonal Bolt M10x50 SS304"',
      detail: "",
      tag: "DUPLICATE",
      tagStyle: "bg-orange-500/20 text-orange-300",
    },
    {
      label: '"Hex Bolt M10 x 50mm Stainless Steel 304"',
      detail: "",
      tag: "DUPLICATE",
      tagStyle: "bg-orange-500/20 text-orange-300",
    },
    {
      label: '"Hex. Bolt M10*50 SS-304"',
      detail: "",
      tag: "DUPLICATE",
      tagStyle: "bg-orange-500/20 text-orange-300",
    },
    {
      label: "→ Golden record: MAT-100001 · 94.2% match",
      detail: "",
      tag: "MERGED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Answer First (In Short)                                            */
/* ------------------------------------------------------------------ */

export const MDM_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "Master data management (MDM) is the practice of keeping an organization's core records — customers, vendors, materials, products — accurate, consistent, and de-duplicated across every system. The hardest part is duplicates that don't look identical.",
    "deKorvai finds those near-duplicates with AI fuzzy matching (Levenshtein, Jaro-Winkler, and phonetic encoding), merges them into a single golden record, and after approval updates the downstream transactions — blocking the duplicate, updating BOMs, and recreating open orders.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Stat Band                                                          */
/* ------------------------------------------------------------------ */

export const MDM_STATS: StatItem[] = [
  { value: "92%+", label: "Duplicate detection", source: "Documented fuzzy-dedup results" },
  { value: "60%", label: "Less manual effort", source: "Compared to manual review" },
  { value: "99%+", label: "Transaction integrity", source: "Post-merge downstream accuracy" },
  { value: "4x", label: "Faster cleansing", source: "AI matching vs manual review" },
];

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

export const MDM_PROBLEMS: ProblemsProps = {
  badge: "The MDM Problem",
  title: "Duplicate master data is expensive — ",
  titleHighlight: "and hard to see",
  subtitle:
    "The same customer, vendor, or material entered three slightly different ways looks like three records to every system that reads it. Exact-match tools never catch it; the business pays for it every day.",
  items: [
    {
      number: "01",
      title: "Duplicates hide behind small differences",
      description:
        '"Hex Bolt M10x50" and "Hexagonal Bolt M10 x 50mm" are the same part. Character-for-character matching treats them as two, so they multiply unchecked.',
    },
    {
      number: "02",
      title: "The business pays in real money",
      description:
        "Duplicate materials inflate inventory and split purchasing; duplicate customers fragment spend and skew reporting. The cost is quiet but constant.",
    },
    {
      number: "03",
      title: "Manual dedup doesn't scale",
      description:
        "Reviewing hundreds of thousands of records by hand is slow, error-prone, and never finishes — new duplicates arrive faster than they're cleared.",
    },
    {
      number: "04",
      title: "Merging blindly breaks transactions",
      description:
        "Delete the wrong record and its open POs, sales orders, and BOMs break. Safe merging has to preserve and re-point every link.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Features (What deKorvai Does)                                      */
/* ------------------------------------------------------------------ */

export const MDM_FEATURES: FeaturesProps = {
  badge: "What deKorvai Does",
  title: "From messy master data to ",
  titleHighlight: "governed golden records",
  subtitle: "",
  items: [
    {
      number: "01",
      title: "AI fuzzy matching",
      description:
        "Uses Levenshtein, Jaro-Winkler, and phonetic encoding to detect near-duplicate records that exact matching misses.",
    },
    {
      number: "02",
      title: "Duplicate clustering",
      description:
        "Groups likely-duplicate records with a match-confidence score for review.",
    },
    {
      number: "03",
      title: "Golden records",
      description:
        "Generate a golden record for each confirmed set of duplicates, retained as the surviving record.",
    },
    {
      number: "04",
      title: "Downstream updates",
      description:
        "Blocks the duplicate material, updates BOMs, and recreates open POs, sales orders, PRs, and planned orders on the golden record.",
    },
    {
      number: "05",
      title: "Standardization",
      description:
        "Standardize master data on the way to a golden record, so the surviving version is clean and consistent.",
    },
    {
      number: "06",
      title: "Impact analysis",
      description:
        "See the downstream impact of a merge before it happens, with a report for review and sign-off.",
    },
    {
      number: "07",
      title: "Approval workflow",
      description:
        "Golden data and SAP updates are confirmed through approval steps — nothing merges or writes back without sign-off.",
    },
    {
      number: "08",
      title: "Impact analysis report",
      description:
        "Generates a report on the impact of the changes for review before SAP is updated.",
    },
    {
      number: "09",
      title: "Stock transfer",
      description:
        "Handles stock transfer as part of consolidating duplicates onto the golden record.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Before / After table data                                          */
/* ------------------------------------------------------------------ */

export interface BeforeAfterRow {
  cells: string[];
}

export interface BeforeAfterContent {
  badge: string;
  title: string;
  titleHighlight: string;
  before: {
    label: string;
    columns: string[];
    rows: BeforeAfterRow[];
  };
  after: {
    label: string;
    columns: string[];
    rows: BeforeAfterRow[];
    matchColumnIndex: number;
  };
  footnote: string;
}

export const MDM_BEFORE_AFTER: BeforeAfterContent = {
  badge: "The Result",
  title: "Duplicates become ",
  titleHighlight: "governed golden records",
  before: {
    label: "Before — fuzzy duplicates",
    columns: ["Material", "Description", "Plant"],
    rows: [
      { cells: ["100001", "Hexagonal Bolt M10x50 SS304", "1000"] },
      { cells: ["100247", "Hex Bolt M10 x 50mm Stainless Steel 304", "1000"] },
      { cells: ["100512", "Hex. Bolt M10*50 SS-304", "2000"] },
      { cells: ["100089", "Bearing Ball 6205-2RS SKF", "1000"] },
      { cells: ["100634", "SKF Ball Bearing 6205 2RS", "2000"] },
    ],
  },
  after: {
    label: "After — golden record",
    columns: ["Golden ID", "Description", "Merged from", "Match"],
    rows: [
      { cells: ["100001", "Hexagonal Bolt M10x50 SS304", "100247, 100512", "94.2%"] },
      { cells: ["100089", "Bearing Ball 6205-2RS SKF", "100634", "91.7%"] },
    ],
    matchColumnIndex: 3,
  },
  footnote:
    "Duplicates merged, golden record retained. After approval, linked open orders are recreated on the surviving record.",
};

/* ------------------------------------------------------------------ */
/*  How It Works (flow steps)                                          */
/* ------------------------------------------------------------------ */

export interface FlowStep {
  step: string;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  badge: string;
  title: string;
  titleHighlight: string;
  steps: FlowStep[];
}

export const MDM_HOW_IT_WORKS: HowItWorksContent = {
  badge: "How It Works",
  title: "Standardize → Detect → Merge → ",
  titleHighlight: "Approve → Re-point",
  steps: [
    { step: "1", title: "Standardize", description: "Extract and standardize master data for comparison." },
    { step: "2", title: "Detect", description: "Fuzzy matching clusters near-duplicates with confidence scores." },
    { step: "3", title: "Golden record", description: "Generate golden records from the confirmed duplicates." },
    { step: "4", title: "Approve", description: "Impact analysis & approval before any write-back." },
    { step: "5", title: "Re-point", description: "Update linked POs, SOs, PRs & BOMs; block duplicates." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

export const MDM_BENEFITS: BenefitsProps = {
  badge: "Business Benefits",
  title: "What clean master data ",
  titleHighlight: "is worth",
  items: [
    {
      icon: "$",
      title: "Lower inventory & spend leakage",
      description: "Collapsing duplicate materials and vendors cuts inflated stock and fragmented purchasing.",
    },
    {
      icon: "↑",
      title: "Reporting you can trust",
      description: "One record per real entity means analytics and spend reporting reflect reality, not duplication.",
    },
    {
      icon: "⚡",
      title: "Cleansing that scales",
      description: "AI matching clears hundreds of thousands of records far faster than manual review — 4x faster in practice.",
    },
    {
      icon: "⊘",
      title: "Safe, governed merges",
      description: "Impact analysis, approvals, and transaction re-pointing mean merging doesn't break open documents.",
    },
    {
      icon: "◈",
      title: "Migration & consolidation ready",
      description: "De-duplicated master data is the foundation for a clean migration or system merge.",
    },
    {
      icon: "⊙",
      title: "Confirmed before write-back",
      description: "An impact-analysis report and approval steps gate every SAP update, so nothing changes without sign-off.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Entities                                                           */
/* ------------------------------------------------------------------ */

export interface EntitiesContent {
  badge: string;
  title: string;
  titleHighlight: string;
  entities: string[];
}

export const MDM_ENTITIES: EntitiesContent = {
  badge: "Master Data Objects",
  title: "Built for the records ",
  titleHighlight: "that matter",
  entities: [
    "Customer Master",
    "Vendor Master",
    "Material Master",
    "Business Partner",
    "Product",
    "Employee",
  ],
};

/* ------------------------------------------------------------------ */
/*  Powered By (links to platform pages)                               */
/* ------------------------------------------------------------------ */

export interface PoweredByLink {
  href: string;
  title: string;
  description: string;
}

export interface PoweredByContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  links: PoweredByLink[];
}

export const MDM_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "MDM runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle: "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
  links: [
    {
      href: "/platform/data-quality-profiling",
      title: "Data Quality Profiling",
      description: "Fuzzy matching, rules & scorecards",
    },
    {
      href: "/platform/etl",
      title: "ETL Pipeline Engine",
      description: "Extract & standardize master data",
    },
    {
      href: "/platform/agentic-ai",
      title: "Agentic AI",
      description: "AI-assisted detection & suggestions",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Proof                                                              */
/* ------------------------------------------------------------------ */

export const MDM_PROOF: ProofProps = {
  badge: "Proof",
  title: "120,000+ material records cleansed ",
  titleHighlight: "with AI fuzzy matching",
  description:
    "Near-duplicate material master data across plants and storage locations — scanned with AI fuzzy matching, clustered, and merged into golden records.",
  stats: [
    { value: "92%+", label: "Duplicate Detection" },
    { value: "60%", label: "Less Manual Effort" },
    { value: "99%+", label: "Transaction Integrity" },
    { value: "4x", label: "Faster Cleansing" },
  ],
  ctaText: "Read the technical deep-dive →",
  ctaHref: "/blog/fuzzy-duplicate-detection-dekorvai",
};

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const MDM_FAQ: FAQProps = {
  title: "Master data management, ",
  titleHighlight: "answered",
  items: [
    {
      question: "What is master data management?",
      answer:
        "Master data management (MDM) keeps an organization's core records — customers, vendors, materials, products — accurate, consistent, and free of duplicates across every system. deKorvai focuses on the hardest part: finding and merging duplicates that don't look identical.",
    },
    {
      question: "What is a golden record?",
      answer:
        "A golden record is the single, trusted version of a record kept after merging its duplicates. deKorvai generates golden records from confirmed duplicates and, after approval, updates the downstream transactions.",
    },
    {
      question: "How does fuzzy matching find duplicates?",
      answer:
        "Fuzzy matching compares records for similarity rather than exact equality. deKorvai uses AI fuzzy matching with Levenshtein, Jaro-Winkler, and phonetic encoding to detect near-duplicate records that exact matching would miss.",
    },
    {
      question: "Will merging duplicates break my open transactions?",
      answer:
        "No. Before merging, deKorvai runs impact analysis and requires approval; on merge, it re-points linked POs, sales orders, PRs, planned orders, and BOMs to the surviving golden record.",
    },
    {
      question: "Does this work outside SAP?",
      answer:
        "Yes. Fuzzy matching and golden-record creation work across any connected system — the material-master example is one documented case, not a limit.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Related Solutions                                                  */
/* ------------------------------------------------------------------ */

export interface RelatedSolutionItem {
  href: string;
  title: string;
  description: string;
}

export interface RelatedSolutionsContent {
  badge: string;
  title: string;
  titleHighlight: string;
  items: RelatedSolutionItem[];
}

export const MDM_RELATED_SOLUTIONS: RelatedSolutionsContent = {
  badge: "Related Solutions",
  title: "Often paired ",
  titleHighlight: "with MDM",
  items: [
    {
      href: "/solutions/data-quality-governance",
      title: "Data Quality Governance",
      description: "Keep master data clean over time",
    },
    {
      href: "/solutions/system-consolidation",
      title: "System Consolidation",
      description: "De-duplicate when merging systems",
    },
    {
      href: "/solutions/s4hana-data-migration",
      title: "SAP S/4HANA Migration",
      description: "Clean master data before cutover",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export const MDM_CTA: CTAProps = {
  title: "See your duplicates found in one demo",
  description:
    "Bring a sample of your master data and watch deKorvai cluster the near-duplicates and build the golden records — live.",
  buttonText: "Book a Demo",
  subtext: "A working session on your master data",
};
