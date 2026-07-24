/* ------------------------------------------------------------------ */
/*  Compliance Solution Page — Content                                 */
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

export const COMPLIANCE_META = {
  title: "Data Compliance — GDPR, HIPAA & SOX Data Masking | deKorvai",
  description:
    "deKorvai helps meet GDPR, HIPAA, and SOX obligations — field-level data masking for non-production, protection of PII and PHI, and audit-ready data quality. Compliance by design. Book a demo.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_HERO: PlatformHeroProps = {
  kick: "Solution · Compliance",
  badge: "GDPR · HIPAA · SOX",
  title: "Compliance — Protect Sensitive Data for ",
  titleHighlight: "GDPR, HIPAA & SOX",
  subtitle:
    "Regulations require sensitive data to be protected — including in the test and development environments most controls forget. deKorvai masks PII, PHI, and confidential data so it stays safe wherever it's used, and keeps data quality audit-ready.",
  rating:
    "Trusted for compliant data protection across SAP & non-SAP systems",
  ledgerTitle: "sensitive data · protected",
  ledgerRows: [
    {
      label: "PII / PHI masked",
      detail: "",
      tag: "PROTECTED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "non-production environments",
      detail: "",
      tag: "COVERED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "GDPR · HIPAA · SOX",
      detail: "",
      tag: "SUPPORTED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Answer First (In Short)                                            */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "Data compliance means handling sensitive data — personal, health, and financial — in line with regulations like GDPR, HIPAA, and SOX, across every environment where that data lives, including non-production.",
    "deKorvai supports compliance by masking (scrambling) sensitive data at the field level so it's protected in lower environments, while keeping it realistic and usable — and by keeping data quality audit-ready.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_PROBLEMS: ProblemsProps = {
  badge: "The Compliance Problem",
  title: "Sensitive data doesn't ",
  titleHighlight: "stay in production",
  subtitle:
    "Copies of production data spread into dev, QA, analytics, and sandbox systems. Every copy carries the same regulatory obligations — and the same risk if it's exposed.",
  items: [
    {
      number: "01",
      title: "Lower environments are the weak point",
      description:
        "Test and dev systems rarely match production controls, yet often hold copies of real, sensitive data.",
    },
    {
      number: "02",
      title: "Obligations follow the data",
      description:
        "GDPR, HIPAA, and SOX apply wherever regulated data goes — not just in production.",
    },
    {
      number: "03",
      title: "Protection can't break usability",
      description:
        "Data still has to be realistic and usable after protection, or teams can't work with it.",
    },
    {
      number: "04",
      title: "Audits need evidence",
      description:
        "Demonstrating compliance requires showing that sensitive data is protected and data quality is managed.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Features (What deKorvai Does)                                      */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_FEATURES: FeaturesProps = {
  badge: "What deKorvai Does",
  title: "Protect sensitive data, ",
  titleHighlight: "keep it usable",
  subtitle: "",
  items: [
    {
      number: "01",
      title: "Field-level masking",
      description:
        "Mask exactly the sensitive fields — PII, PHI, financial data — leaving the rest intact.",
    },
    {
      number: "02",
      title: "Non-production protection",
      description:
        "Scrambles production data for safe use in dev, QA, and sandbox environments.",
    },
    {
      number: "03",
      title: "Predefined profiles",
      description:
        "Reusable masking profiles for common sensitive data types.",
    },
    {
      number: "04",
      title: "Integrity preserved",
      description:
        "Referential and functional integrity keep masked data realistic and usable.",
    },
    {
      number: "05",
      title: "Test-mode execution",
      description:
        "Validate masking before committing it.",
    },
    {
      number: "06",
      title: "Audit-ready data quality",
      description:
        "Continuous data quality monitoring with reports for governance and audit.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  By Regulation (GDPR / HIPAA / SOX)                                 */
/* ------------------------------------------------------------------ */

export interface RegulationCard {
  id: string;
  regulation: string;
  title: string;
  description: string;
}

export interface ByRegulationContent {
  badge: string;
  title: string;
  titleHighlight: string;
  cards: RegulationCard[];
}

export const COMPLIANCE_BY_REGULATION: ByRegulationContent = {
  badge: "By Regulation",
  title: "How masking supports ",
  titleHighlight: "each mandate",
  cards: [
    {
      id: "gdpr",
      regulation: "GDPR",
      title: "EU data protection",
      description:
        "GDPR requires personal data to be protected wherever it's processed. deKorvai masks personal data in non-production so it isn't exposed in lower environments.",
    },
    {
      id: "hipaa",
      regulation: "HIPAA",
      title: "Protected health information",
      description:
        "HIPAA governs how PHI is handled. deKorvai masks health-related data at the field level for safe use outside production.",
    },
    {
      id: "sox",
      regulation: "SOX",
      title: "Financial controls",
      description:
        "SOX requires controls over financial data and systems. deKorvai supports masked test data and audit-ready data-quality evidence.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  How It Works (flow steps)                                          */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_HOW_IT_WORKS: HowItWorksContent = {
  badge: "How It Works",
  title: "Identify → Configure → Mask → ",
  titleHighlight: "Validate → Use",
  steps: [
    { step: "1", title: "Identify", description: "Locate sensitive fields to protect." },
    { step: "2", title: "Configure", description: "Apply predefined masking profiles." },
    { step: "3", title: "Mask", description: "Scramble sensitive values, keeping integrity." },
    { step: "4", title: "Validate", description: "Confirm in test mode." },
    { step: "5", title: "Use", description: "Safe, compliant data in lower environments." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_BENEFITS: BenefitsProps = {
  badge: "Business Benefits",
  title: "Compliance without ",
  titleHighlight: "slowing teams down",
  items: [
    {
      icon: "🛡",
      title: "Sensitive data protected",
      description: "PII, PHI, and financial data masked wherever it's used.",
    },
    {
      icon: "⚖",
      title: "Regulation support",
      description: "Supports GDPR, HIPAA, and SOX obligations across environments.",
    },
    {
      icon: "⚙",
      title: "Still usable",
      description: "Integrity preserved so protected data remains realistic.",
    },
    {
      icon: "⊙",
      title: "Audit-ready",
      description: "Data-quality reports provide evidence for audits.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Data Scope (entities strip)                                        */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_DATA_SCOPE: EntitiesContent = {
  badge: "Data Scope",
  title: "Built for ",
  titleHighlight: "regulated data",
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

export const COMPLIANCE_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "Compliance runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle: "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
  links: [
    {
      href: "/platform/data-masking",
      title: "Data Masking (Scrambling)",
      description: "Field-level masking for compliance",
    },
    {
      href: "/platform/data-quality-profiling",
      title: "Data Quality Profiling",
      description: "Audit-ready quality evidence",
    },
    {
      href: "/platform/integrations",
      title: "Integrations",
      description: "Across SAP & non-SAP systems",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Proof (customer references)                                        */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_PROOF: CustomerProofContent = {
  badge: "Proof",
  title: "Trusted for compliant ",
  titleHighlight: "data protection",
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

export const COMPLIANCE_FAQ: FAQProps = {
  title: "Data compliance, ",
  titleHighlight: "answered",
  items: [
    {
      question: "How does deKorvai help with compliance?",
      answer:
        "It masks sensitive data — PII, PHI, and financial data — so it's protected in non-production environments, while keeping it usable, and provides audit-ready data-quality reporting. deKorvai's masking is documented as GDPR, HIPAA, and SOX compliant.",
    },
    {
      question: "Does compliance apply to test environments?",
      answer:
        "Yes. Regulatory obligations follow the data into dev, QA, and sandbox systems, which is exactly where masking protects it.",
    },
    {
      question: "Will masking make the data unusable?",
      answer:
        "No. Field-level control and preserved integrity keep the data realistic and usable after masking.",
    },
    {
      question: "Which regulations are supported?",
      answer:
        "deKorvai's masking supports GDPR, HIPAA, and SOX requirements for handling sensitive data.",
    },
    {
      question: "Can I prove compliance for an audit?",
      answer:
        "Continuous data-quality monitoring produces reports that provide evidence for governance and audit.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Related Solutions                                                  */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_RELATED_SOLUTIONS: RelatedSolutionsContent = {
  badge: "Related Solutions",
  title: "Often paired ",
  titleHighlight: "with compliance",
  items: [
    {
      href: "/solutions/test-data-management",
      title: "Test Data Management",
      description: "Safe data for non-production",
    },
    {
      href: "/solutions/data-quality-governance",
      title: "Data Quality Governance",
      description: "Audit-ready quality over time",
    },
    {
      href: "/solutions/s4hana-data-migration",
      title: "SAP S/4HANA Migration",
      description: "Scramble sandbox & QA clones",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export const COMPLIANCE_CTA: CTAProps = {
  title: "Protect sensitive data everywhere it lives",
  description:
    "See how deKorvai masks PII, PHI, and financial data for GDPR, HIPAA, and SOX — without breaking usability.",
  buttonText: "Book a Demo",
  subtext: "A working session on your compliance needs",
};
