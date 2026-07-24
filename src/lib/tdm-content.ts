/* ------------------------------------------------------------------ */
/*  Test Data Management Solution Page — Content                       */
/* ------------------------------------------------------------------ */

import type {
  PlatformHeroProps,
  AnswerFirstProps,
  ProblemsProps,
  FeaturesProps,
  BenefitsProps,
  FAQProps,
  CTAProps,
} from "@/components/platform-sections";

import type {
  HowItWorksContent,
  EntitiesContent,
  PoweredByContent,
  RelatedSolutionsContent,
} from "@/lib/mdm-content";

import type { CustomerProofContent } from "@/lib/dqg-content";

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

export const TDM_META = {
  title: "Test Data Management — Safe, Realistic Non-Production Data | deKorvai",
  description:
    "deKorvai provisions realistic, masked test data for non-production environments — field-level scrambling, predefined profiles, and referential integrity across systems. Compliant test data by design. Book a demo.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const TDM_HERO: PlatformHeroProps = {
  kick: "Solution · Test Data Management",
  badge: "masked · realistic · referential integrity",
  title: "Test Data Management — Realistic Data, ",
  titleHighlight: "Made Safe for Non-Production",
  subtitle:
    "Teams need production-like data to test properly — but copying real data into dev, QA, and sandbox environments exposes sensitive information. deKorvai masks production data so it stays realistic and usable, without putting PII, PHI, or confidential records at risk.",
  rating:
    "Trusted for compliant, non-production data across SAP & non-SAP systems",
  ledgerTitle: "test data · masking",
  ledgerRows: [
    {
      label: "production record → masked value",
      detail: "",
      tag: "SAFE",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "keys & format preserved",
      detail: "",
      tag: "REFERENTIAL INTEGRITY",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "consistent across linked systems",
      detail: "",
      tag: "CONSISTENT",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Answer First (In Short)                                            */
/* ------------------------------------------------------------------ */

export const TDM_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "Test data management (TDM) is the practice of providing safe, realistic data for non-production environments — development, QA, and sandbox — without exposing the sensitive information that lives in production.",
    "deKorvai does this by masking (scrambling) production data: sensitive values are replaced while keeping the data realistic and usable, and referential integrity is preserved so linked records stay consistent across systems.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

export const TDM_PROBLEMS: ProblemsProps = {
  badge: "The TDM Problem",
  title: "Real data makes the best test data — ",
  titleHighlight: "and the biggest risk",
  subtitle:
    "Testing against production-like data catches issues that dummy data never will. But copying real records into lower environments spreads sensitive data into places it shouldn't be.",
  items: [
    {
      number: "01",
      title: "Sensitive data leaks into lower environments",
      description:
        "Dev, QA, and sandbox systems rarely have production-grade controls. Copying real data there exposes PII, PHI, and confidential records.",
    },
    {
      number: "02",
      title: "Dummy data doesn't test properly",
      description:
        "Fabricated data misses the edge cases and volume that real data contains, so defects slip through to production.",
    },
    {
      number: "03",
      title: "Masking naively breaks the data",
      description:
        "Scramble fields without care and referential links break — the data stops being usable for testing.",
    },
    {
      number: "04",
      title: "Compliance still applies in test",
      description:
        "GDPR, HIPAA, and SOX obligations don't stop at the production boundary. Test environments have to be compliant too.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Features (What deKorvai Does)                                      */
/* ------------------------------------------------------------------ */

export const TDM_FEATURES: FeaturesProps = {
  badge: "What deKorvai Does",
  title: "Production-like data, ",
  titleHighlight: "made safe to use",
  subtitle: "",
  items: [
    {
      number: "01",
      title: "Mask production data",
      description:
        "Scrambles production data for use in non-production environments, keeping it realistic and usable.",
    },
    {
      number: "02",
      title: "Field-level control",
      description:
        "Choose exactly which fields to mask, so only sensitive values are changed.",
    },
    {
      number: "03",
      title: "Predefined profiles",
      description:
        "Reusable masking profiles for common data types speed up setup and keep masking consistent.",
    },
    {
      number: "04",
      title: "Referential integrity",
      description:
        "Applies consistent masking across databases so linked records still match after masking.",
    },
    {
      number: "05",
      title: "Functional integrity",
      description:
        "Masked data keeps its shape and format, so applications and tests still work against it.",
    },
    {
      number: "06",
      title: "Test-mode execution",
      description:
        "Run masking in test mode to validate the outcome before committing.",
    },
    {
      number: "07",
      title: "Parallel & scalable",
      description:
        "Parallel runs handle large data volumes for provisioning test environments at scale.",
    },
    {
      number: "08",
      title: "Compliant by design",
      description:
        "Supports GDPR, HIPAA, and SOX requirements for handling sensitive data in non-production.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Masking Functions (entities strip)                                  */
/* ------------------------------------------------------------------ */

export const TDM_MASKING_FUNCTIONS: EntitiesContent = {
  badge: "Masking Functions",
  title: "The scrambling functions ",
  titleHighlight: "available",
  entities: [
    "Scramble",
    "Shuffle",
    "Reverse",
    "Constant",
    "Constant Mapping",
    "Character Set",
    "Bank Scrambling",
  ],
};

/* ------------------------------------------------------------------ */
/*  How It Works (flow steps)                                          */
/* ------------------------------------------------------------------ */

export const TDM_HOW_IT_WORKS: HowItWorksContent = {
  badge: "How It Works",
  title: "Extract → Configure → Mask → ",
  titleHighlight: "Validate → Provision",
  steps: [
    { step: "1", title: "Extract", description: "Pull data from the source system." },
    { step: "2", title: "Configure", description: "Choose fields and apply predefined masking profiles." },
    { step: "3", title: "Mask", description: "Scramble sensitive values, preserving referential & functional integrity." },
    { step: "4", title: "Validate", description: "Run in test mode to confirm the result." },
    { step: "5", title: "Provision", description: "Deliver safe, realistic data to non-production." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

export const TDM_BENEFITS: BenefitsProps = {
  badge: "Business Benefits",
  title: "Test with confidence, ",
  titleHighlight: "stay compliant",
  items: [
    {
      icon: "🛡",
      title: "Sensitive data protected",
      description: "PII, PHI, and confidential records are masked before they reach lower environments.",
    },
    {
      icon: "✓",
      title: "Realistic testing",
      description: "Production-like data means tests catch real issues, not just the ones dummy data reveals.",
    },
    {
      icon: "⚙",
      title: "Data stays usable",
      description: "Referential and functional integrity keep masked data working across linked systems.",
    },
    {
      icon: "⚖",
      title: "Compliant environments",
      description: "Supports GDPR, HIPAA, and SOX obligations in non-production.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Data Scope (entities strip)                                        */
/* ------------------------------------------------------------------ */

export const TDM_DATA_SCOPE: EntitiesContent = {
  badge: "Data Scope",
  title: "Built for sensitive ",
  titleHighlight: "enterprise data",
  entities: [
    "Customer Master",
    "Vendor Master",
    "Employee Data",
    "Payroll Data",
    "Business Partner",
    "Bank / IBAN Details",
  ],
};

/* ------------------------------------------------------------------ */
/*  Powered By (links to platform pages)                               */
/* ------------------------------------------------------------------ */

export const TDM_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "TDM runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle: "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
  links: [
    {
      href: "/platform/data-masking",
      title: "Data Masking (Scrambling)",
      description: "Field-level masking & profiles",
    },
    {
      href: "/platform/etl",
      title: "ETL Pipeline Engine",
      description: "Extract & provision data",
    },
    {
      href: "/platform/integrations",
      title: "Integrations",
      description: "Connect source & target systems",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Proof (customer references)                                        */
/* ------------------------------------------------------------------ */

export const TDM_PROOF: CustomerProofContent = {
  badge: "Proof",
  title: "Trusted for compliant, ",
  titleHighlight: "non-production data",
  customers: [
    {
      name: "Coromandel International",
      description: "Scrambling SAP & non-SAP applications for compliant test environments",
    },
    {
      name: "World's #2 Brewer",
      description: "Non-SAP data scrambling with regulatory compliance",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const TDM_FAQ: FAQProps = {
  title: "Test data management, ",
  titleHighlight: "answered",
  items: [
    {
      question: "What is test data management?",
      answer:
        "Test data management provides safe, realistic data for non-production environments like dev, QA, and sandbox — without exposing the sensitive data that lives in production. deKorvai does this by masking production data.",
    },
    {
      question: "How does deKorvai keep masked data usable?",
      answer:
        "It applies consistent masking across databases and preserves referential and functional integrity, so linked records still match and applications still work against the masked data.",
    },
    {
      question: "Which fields get masked?",
      answer:
        "You control masking at the field level and can apply predefined profiles, so only sensitive values are changed while the rest of the data stays intact.",
    },
    {
      question: "Is masked test data compliant?",
      answer:
        "deKorvai's masking supports GDPR, HIPAA, and SOX requirements for handling sensitive data in non-production environments.",
    },
    {
      question: "Can I preview masking before applying it?",
      answer:
        "Yes — masking can be run in test mode to validate the outcome before it's committed.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Related Solutions                                                  */
/* ------------------------------------------------------------------ */

export const TDM_RELATED_SOLUTIONS: RelatedSolutionsContent = {
  badge: "Related Solutions",
  title: "Often paired ",
  titleHighlight: "with TDM",
  items: [
    {
      href: "/solutions/compliance",
      title: "Compliance",
      description: "GDPR, HIPAA & SOX masking",
    },
    {
      href: "/solutions/s4hana-data-migration",
      title: "SAP S/4HANA Migration",
      description: "Scramble sandbox & QA clones",
    },
    {
      href: "/solutions/master-data-management",
      title: "Master Data Management",
      description: "Clean data before you test",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export const TDM_CTA: CTAProps = {
  title: "Provision safe test data — without the risk",
  description:
    "See how deKorvai masks your production data into realistic, compliant test data that keeps its integrity.",
  buttonText: "Book a Demo",
  subtext: "A working session on your test data needs",
};
