/* ------------------------------------------------------------------ */
/*  System Consolidation Solution Page — Content                       */
/* ------------------------------------------------------------------ */

import type {
  PlatformHeroProps,
  AnswerFirstProps,
  ProblemsProps,
  FeaturesProps,
  BenefitsProps,
  ProofProps,
  FAQProps,
  CTAProps,
} from "@/components/platform-sections";

import type {
  HowItWorksContent,
  PoweredByContent,
  RelatedSolutionsContent,
} from "@/lib/mdm-content";

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

export const SYSCON_META = {
  title: "System Consolidation — Merge Systems Into One Clean Target | deKorvai",
  description:
    "deKorvai consolidates multiple systems into one — extracting, de-duplicating, profiling, and loading data into a single clean target. Merge after M&A or carve-out without carrying the mess. Book a demo.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const SYSCON_HERO: PlatformHeroProps = {
  kick: "Solution · System Consolidation",
  badge: "M&A · carve-out · system merges",
  title: "System Consolidation — Merge Multiple Systems ",
  titleHighlight: "Into One Clean Target",
  subtitle:
    "Merging systems after an acquisition or consolidating a sprawling landscape means combining data that overlaps, conflicts, and duplicates. deKorvai extracts from every source, de-duplicates and profiles the data, and loads one clean, consistent version into the target — so you consolidate the systems without carrying the mess.",
  rating:
    "Built on proven de-duplication — 120,000+ records cleansed",
  ledgerTitle: "consolidation · multi-source",
  ledgerRows: [
    {
      label: "System A + System B → one target",
      detail: "",
      tag: "UNIFIED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "overlapping records de-duplicated",
      detail: "",
      tag: "GOLDEN RECORDS",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "profiled & validated before load",
      detail: "",
      tag: "CLEAN",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Answer First (In Short)                                            */
/* ------------------------------------------------------------------ */

export const SYSCON_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "System consolidation is the process of merging multiple systems — often after a merger, acquisition, or carve-out — into a single target, combining their data along the way.",
    "deKorvai handles the data side: it extracts from each source, detects and merges duplicates into golden records, profiles and validates the combined data, and loads one clean version into the target system.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

export const SYSCON_PROBLEMS: ProblemsProps = {
  badge: "The Consolidation Problem",
  title: "Merging systems means ",
  titleHighlight: "merging their messes",
  subtitle:
    "Two systems that each work fine become one system full of conflicts the moment you combine them — the same customer twice, incompatible codes, overlapping records.",
  items: [
    {
      number: "01",
      title: "Overlapping, duplicated data",
      description:
        "The same customers, vendors, and materials exist in both systems, in slightly different forms.",
    },
    {
      number: "02",
      title: "Conflicting structures",
      description:
        "Company codes, org structures, and formats differ between sources and have to be reconciled.",
    },
    {
      number: "03",
      title: "Quality problems compound",
      description:
        "Each source brings its own errors; merged blindly, they multiply in the target.",
    },
    {
      number: "04",
      title: "Loading unclean data defeats the point",
      description:
        "Consolidating systems but carrying the duplicates and errors forward just recreates the problem.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Features (What deKorvai Does)                                      */
/* ------------------------------------------------------------------ */

export const SYSCON_FEATURES: FeaturesProps = {
  badge: "What deKorvai Does",
  title: "From many sources to ",
  titleHighlight: "one clean target",
  subtitle: "",
  items: [
    {
      number: "01",
      title: "Multi-source extraction",
      description:
        "Extract data from each system being consolidated, full or incremental.",
    },
    {
      number: "02",
      title: "Fuzzy de-duplication",
      description:
        "Detect duplicates that span systems and merge them into golden records.",
    },
    {
      number: "03",
      title: "Profiling & validation",
      description:
        "Profile the combined data and validate it against rules before it loads.",
    },
    {
      number: "04",
      title: "Field mapping",
      description:
        "Map company codes and org structures across sources, preserving referential integrity.",
    },
    {
      number: "05",
      title: "Transformation",
      description:
        "Rule-driven transformations reconcile differing structures into the target model.",
    },
    {
      number: "06",
      title: "Validated load",
      description:
        "Pre-load validation and staging so only clean data reaches the target.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  How It Works (flow steps)                                          */
/* ------------------------------------------------------------------ */

export const SYSCON_HOW_IT_WORKS: HowItWorksContent = {
  badge: "How It Works",
  title: "Extract → De-duplicate → Profile → ",
  titleHighlight: "Transform → Load",
  steps: [
    { step: "1", title: "Extract", description: "Pull data from every source system." },
    { step: "2", title: "De-duplicate", description: "Merge overlapping records into golden records." },
    { step: "3", title: "Profile", description: "Profile & validate the combined data." },
    { step: "4", title: "Transform", description: "Map & reconcile structures to the target model." },
    { step: "5", title: "Load", description: "Validate and load one clean version." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

export const SYSCON_BENEFITS: BenefitsProps = {
  badge: "Business Benefits",
  title: "Consolidate the systems, ",
  titleHighlight: "not the mess",
  items: [
    {
      icon: "◈",
      title: "One clean target",
      description: "A single, de-duplicated, validated version instead of merged chaos.",
    },
    {
      icon: "$",
      title: "Lower ongoing cost",
      description: "Fewer systems and cleaner data reduce operational overhead after consolidation.",
    },
    {
      icon: "↑",
      title: "Trusted reporting",
      description: "De-duplicated master data means the consolidated system reports reality.",
    },
    {
      icon: "⚙",
      title: "Integrity preserved",
      description: "Field mapping keeps relationships intact across reconciled structures.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Powered By (links to platform + solution pages)                    */
/* ------------------------------------------------------------------ */

export const SYSCON_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "Consolidation runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle: "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
  links: [
    {
      href: "/platform/etl",
      title: "ETL Pipeline Engine",
      description: "Extract, transform & validate",
    },
    {
      href: "/platform/data-quality-profiling",
      title: "Data Quality Profiling",
      description: "Profiling & fuzzy de-duplication",
    },
    {
      href: "/solutions/master-data-management",
      title: "Master Data Management",
      description: "Golden records across sources",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Proof (stat-based — references MDM dedup numbers)                  */
/* ------------------------------------------------------------------ */

export const SYSCON_PROOF: ProofProps = {
  badge: "Proof",
  title: "Built on proven ",
  titleHighlight: "de-duplication",
  description:
    "Consolidation relies on the same de-duplication that cleansed 120,000+ material master records into golden records — the foundation for merging systems cleanly.",
  stats: [
    { value: "120K+", label: "Records De-duplicated" },
    { value: "92%+", label: "Duplicate Detection" },
    { value: "99%+", label: "Transaction Integrity" },
    { value: "4x", label: "Faster Cleansing" },
  ],
  ctaText: "See the de-duplication in detail →",
  ctaHref: "/solutions/master-data-management",
};

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const SYSCON_FAQ: FAQProps = {
  title: "System consolidation, ",
  titleHighlight: "answered",
  items: [
    {
      question: "What is system consolidation?",
      answer:
        "It's merging multiple systems — often after M&A or a carve-out — into a single target, combining their data. deKorvai handles the data: extract, de-duplicate, profile, transform, and load one clean version.",
    },
    {
      question: "How are duplicates across systems handled?",
      answer:
        "deKorvai uses fuzzy matching to detect duplicates that span sources and merges them into golden records before loading.",
    },
    {
      question: "How are conflicting structures reconciled?",
      answer:
        "Rule-driven transformations and field mapping reconcile company codes and org structures into the target model, preserving referential integrity.",
    },
    {
      question: "Does the data get validated before loading?",
      answer:
        "Yes — the combined data is profiled and validated, with pre-load validation and staging so only clean data reaches the target.",
    },
    {
      question: "Is this only for SAP?",
      answer:
        "No. Extraction and consolidation work across connected systems; SAP is one example.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Related Solutions                                                  */
/* ------------------------------------------------------------------ */

export const SYSCON_RELATED_SOLUTIONS: RelatedSolutionsContent = {
  badge: "Related Solutions",
  title: "Often paired ",
  titleHighlight: "with consolidation",
  items: [
    {
      href: "/solutions/master-data-management",
      title: "Master Data Management",
      description: "Golden records across sources",
    },
    {
      href: "/solutions/s4hana-data-migration",
      title: "SAP S/4HANA Migration",
      description: "Consolidate onto S/4HANA",
    },
    {
      href: "/solutions/data-quality-governance",
      title: "Data Quality Governance",
      description: "Keep the target clean after",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export const SYSCON_CTA: CTAProps = {
  title: "Merge systems without merging the mess",
  description:
    "See how deKorvai extracts, de-duplicates, and loads one clean target from your source systems.",
  buttonText: "Book a Demo",
  subtext: "A working session on your consolidation",
};
