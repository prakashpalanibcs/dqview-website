/* ------------------------------------------------------------------ */
/*  SAP S/4HANA Migration Solution Page — Content                      */
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

import type {
  HowItWorksContent,
  PoweredByContent,
  RelatedSolutionsContent,
} from "@/lib/mdm-content";

import type { CustomerProofContent } from "@/lib/dqg-content";

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

export const S4HANA_META = {
  title: "SAP Data Migration to S/4HANA — Validated & DMC-Ready | deKorvai",
  description:
    "deKorvai runs SAP S/4HANA data migration end to end — extract from ECC, profile, transform, validate, and load into DMC staging. 50,000+ vendor records at 100% accuracy. Greenfield, Bluefield & GROW. Book a demo.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const S4HANA_HERO: PlatformHeroProps = {
  kick: "Solution · SAP S/4HANA Migration",
  badge: "ECC → S/4HANA · DMC-ready",
  title: "SAP Data Migration to S/4HANA — ",
  titleHighlight: "Validated, DMC-Ready",
  subtitle:
    "Migrating to S/4HANA is only as good as the data you bring. deKorvai extracts from ECC, profiles and cleanses, transforms to the S/4HANA model, validates, and loads into DMC staging — so data lands accurate, complete, and ready, across Greenfield, Bluefield, and GROW approaches.",
  rating: "50,000+ vendor records migrated at 100% data accuracy",
  ledgerTitle: "ECC → S/4HANA · migration",
  ledgerRows: [
    {
      label: "extract from ECC",
      detail: "",
      tag: "SOURCED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "profile · transform · validate",
      detail: "",
      tag: "CLEAN",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "load to DMC staging",
      detail: "",
      tag: "DMC-READY",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Answer First (In Short)                                            */
/* ------------------------------------------------------------------ */

export const S4HANA_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "SAP S/4HANA data migration moves data from legacy SAP ECC into S/4HANA. The hard part isn't moving data — it's making sure what lands is accurate, complete, and mapped correctly to the new model.",
    "deKorvai runs the full data path: rule-based extraction from ECC, profiling and validation, transformation to the S/4HANA model, and loading into DMC staging tables — validating before load so the migration lands clean.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Stat Band                                                          */
/* ------------------------------------------------------------------ */

export const S4HANA_STATS: StatItem[] = [
  { value: "50K+", label: "Vendor records migrated", source: "Documented BP vendor case" },
  { value: "100%", label: "Data accuracy", source: "Post-migration validation" },
  { value: "95%+", label: "DMC first-pass rate", source: "BP vendor migration" },
  { value: "3x", label: "Faster lead time", source: "Compared to manual migration" },
];

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

export const S4HANA_PROBLEMS: ProblemsProps = {
  badge: "The Migration Problem",
  title: "A migration is only ",
  titleHighlight: "as good as its data",
  subtitle:
    "Move data to S/4HANA without cleaning and validating it first, and you carry every legacy error into a brand-new system — where it's harder and costlier to fix.",
  items: [
    {
      number: "01",
      title: "Legacy data is dirty",
      description:
        "ECC data has accumulated duplicates, gaps, and inconsistencies over years. Migrated as-is, it corrupts S/4HANA from day one.",
    },
    {
      number: "02",
      title: "The model changes",
      description:
        "S/4HANA's data model differs from ECC — vendors become business partners, structures shift. Data has to be transformed, not just copied.",
    },
    {
      number: "03",
      title: "Errors surface at load",
      description:
        "Without validation up front, problems appear during DMC load, stalling the migration and forcing rework.",
    },
    {
      number: "04",
      title: "Only migrate what matters",
      description:
        "Not every legacy record should move. Deciding what to migrate needs checks against real business activity.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Features (What deKorvai Does)                                      */
/* ------------------------------------------------------------------ */

export const S4HANA_FEATURES: FeaturesProps = {
  badge: "What deKorvai Does",
  title: "The full data path ",
  titleHighlight: "into S/4HANA",
  subtitle: "",
  items: [
    {
      number: "01",
      title: "Rule-based extraction",
      description:
        "Extract data from source ECC based on extraction rules — full or selective.",
    },
    {
      number: "02",
      title: "Profiling & validation",
      description:
        "Mandatory-field checks, duplicate detection, and anomaly checks against the target system.",
    },
    {
      number: "03",
      title: "Active-record checks",
      description:
        "Check records against real business activity (e.g. PO/GR/IR/FI line items) to decide what migrates.",
    },
    {
      number: "04",
      title: "Transformation & mapping",
      description:
        "Map to the S/4HANA model — company codes, org structures, account groups, BP roles.",
    },
    {
      number: "05",
      title: "Validate before load",
      description:
        "Pre-load validation and staging so errors are caught before they reach the target.",
    },
    {
      number: "06",
      title: "DMC staging load",
      description:
        "Load into the S/4HANA DMC staging tables, then simulate and migrate.",
    },
    {
      number: "07",
      title: "Scrambling for clones",
      description:
        "Mask data for sandbox and QA clones used during the migration.",
    },
    {
      number: "08",
      title: "Reconciliation",
      description:
        "Reconcile migrated data against the source to confirm accuracy and completeness.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Migration Approaches (uses FeaturesProps shape)                     */
/* ------------------------------------------------------------------ */

export const S4HANA_APPROACHES: FeaturesProps = {
  badge: "Migration Approaches",
  title: "Fits your ",
  titleHighlight: "migration path",
  subtitle: "",
  items: [
    {
      number: "Greenfield",
      title: "New implementation",
      description:
        "Selective extraction from legacy, clean transformation to the S/4HANA model, and strong profiling to fix quality issues up front.",
    },
    {
      number: "Bluefield",
      title: "Selective data transition",
      description:
        "Hybrid data selection — keep what matters — with complex transformation across entities and simulation cycles before cutover.",
    },
    {
      number: "GROW",
      title: "SAP GROW programs",
      description:
        "Supports SAP GROW programs, including meeting tight timelines for legacy data loads.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  How It Works (flow steps)                                          */
/* ------------------------------------------------------------------ */

export const S4HANA_HOW_IT_WORKS: HowItWorksContent = {
  badge: "How It Works",
  title: "Extract → Profile → Transform → ",
  titleHighlight: "Load → Migrate",
  steps: [
    { step: "1", title: "Extract", description: "Rule-based extraction from ECC." },
    { step: "2", title: "Profile", description: "Mandatory, duplicate & anomaly checks." },
    { step: "3", title: "Transform", description: "Map to the S/4HANA model." },
    { step: "4", title: "Load", description: "Into DMC staging, then simulate." },
    { step: "5", title: "Migrate", description: "Migrate & reconcile against source." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

export const S4HANA_BENEFITS: BenefitsProps = {
  badge: "Business Benefits",
  title: "Land clean, ",
  titleHighlight: "on time",
  items: [
    {
      icon: "✓",
      title: "Accurate from day one",
      description: "Validation before load means S/4HANA starts with clean, correct data — 100% accuracy on the BP vendor migration.",
    },
    {
      icon: "⚡",
      title: "Faster cutover",
      description: "High DMC first-pass rates and 3x faster lead time reduce rework and delay.",
    },
    {
      icon: "◈",
      title: "Migrate only what matters",
      description: "Active-record checks keep dead legacy data out of the new system.",
    },
    {
      icon: "🛡",
      title: "Safe non-prod clones",
      description: "Scrambling protects sensitive data in sandbox and QA environments during the project.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Powered By (links to platform pages)                               */
/* ------------------------------------------------------------------ */

export const S4HANA_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "Migration runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle: "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
  links: [
    {
      href: "/platform/etl",
      title: "ETL Pipeline Engine",
      description: "Extract, transform & validate before load",
    },
    {
      href: "/platform/data-quality-profiling",
      title: "Data Quality Profiling",
      description: "Profiling & validation checks",
    },
    {
      href: "/platform/data-masking",
      title: "Data Masking",
      description: "Scramble sandbox & QA clones",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Proof (stats)                                                      */
/* ------------------------------------------------------------------ */

export const S4HANA_PROOF: ProofProps = {
  badge: "Proof",
  title: "50,000+ vendor records migrated at ",
  titleHighlight: "100% accuracy",
  description:
    "A BP vendor migration from ECC to S/4HANA — automated extraction, profiling, transformation, and loading into DMC staging tables.",
  stats: [
    { value: "50K+", label: "Vendor Records" },
    { value: "100%", label: "Data Accuracy" },
    { value: "95%+", label: "DMC First-Pass" },
    { value: "3x", label: "Faster Lead Time" },
  ],
  ctaText: "",
  ctaHref: "",
};

/* ------------------------------------------------------------------ */
/*  Proof (customer references)                                        */
/* ------------------------------------------------------------------ */

export const S4HANA_CUSTOMERS: CustomerProofContent = {
  badge: "",
  title: "",
  titleHighlight: "",
  customers: [
    {
      name: "Evident Scientific",
      description: "S/4HANA roll-out (US) — master & transaction data migration with profiling",
    },
    {
      name: "GRT Ethanol",
      description: "S/4HANA GROW program — legacy data loads to a 3-month target",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const S4HANA_FAQ: FAQProps = {
  title: "SAP S/4HANA migration, ",
  titleHighlight: "answered",
  items: [
    {
      question: "How does deKorvai migrate data to S/4HANA?",
      answer:
        "It extracts from ECC with rules, profiles and validates the data, transforms it to the S/4HANA model, and loads it into DMC staging tables — validating before load so the migration lands clean.",
    },
    {
      question: "Which migration approaches are supported?",
      answer:
        "Greenfield (new implementation), Bluefield (selective data transition), and SAP GROW programs.",
    },
    {
      question: "How is data accuracy ensured?",
      answer:
        "Profiling, mandatory and duplicate checks, transformation mapping, and pre-load validation. On the BP vendor migration this delivered 100% data accuracy and a 95%+ DMC first-pass rate.",
    },
    {
      question: "How do you decide what to migrate?",
      answer:
        "Active-record checks test records against real business activity — for example open PO/GR/IR/FI line items — so only relevant data moves.",
    },
    {
      question: "What about sensitive data in test systems?",
      answer:
        "Scrambling masks sensitive data in sandbox and QA clones used during the migration.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Related Solutions                                                  */
/* ------------------------------------------------------------------ */

export const S4HANA_RELATED_SOLUTIONS: RelatedSolutionsContent = {
  badge: "Related Solutions",
  title: "Often paired ",
  titleHighlight: "with migration",
  items: [
    {
      href: "/solutions/master-data-management",
      title: "Master Data Management",
      description: "De-duplicate before cutover",
    },
    {
      href: "/solutions/test-data-management",
      title: "Test Data Management",
      description: "Safe sandbox & QA clones",
    },
    {
      href: "/solutions/system-consolidation",
      title: "System Consolidation",
      description: "Consolidate onto S/4HANA",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export const S4HANA_CTA: CTAProps = {
  title: "Land your S/4HANA migration clean",
  description:
    "See how deKorvai extracts, validates, and loads your ECC data into S/4HANA — DMC-ready.",
  buttonText: "Book a Demo",
  subtext: "A working session on your migration",
};
