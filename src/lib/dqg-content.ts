/* ------------------------------------------------------------------ */
/*  Data Quality Governance Solution Page — Content                    */
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
  PoweredByContent,
  RelatedSolutionsContent,
} from "@/lib/mdm-content";

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

export const DQG_META = {
  title: "Continuous Data Quality Governance | deKorvai",
  description:
    "deKorvai keeps data quality high over time — configurable DQ rules, real-time scorecards, anomaly and drift detection, and continuous monitoring with audit-ready reports. Governance that holds. Book a demo.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const DQG_HERO: PlatformHeroProps = {
  kick: "Solution · Data Quality Governance",
  badge: "rules · scorecards · continuous monitoring",
  title: "Continuous Data Quality Governance — ",
  titleHighlight: "Quality That Holds Over Time",
  subtitle:
    "Data quality isn't a one-time cleanup — it degrades as new data arrives. deKorvai keeps quality high continuously: it applies configurable rules, scores quality in real time, and flags anomalies and drift before they spread, with reports ready for governance and audit.",
  rating:
    "Profiling on real enterprise data programs worldwide",
  ledgerTitle: "data quality · live",
  ledgerRows: [
    {
      label: "completeness · accuracy · consistency",
      detail: "",
      tag: "SCORED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
    {
      label: "anomaly & drift detected",
      detail: "",
      tag: "FLAGGED",
      tagStyle: "bg-orange-500/20 text-orange-300",
    },
    {
      label: "governance & audit report",
      detail: "",
      tag: "READY",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Answer First (In Short)                                            */
/* ------------------------------------------------------------------ */

export const DQG_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "Data quality governance is the ongoing practice of keeping core data accurate, complete, and consistent as it changes over time — not just fixing it once, but monitoring it continuously.",
    "deKorvai applies configurable data quality rules, delivers real-time scorecards across quality dimensions, detects anomalies and drift, and produces reports for governance and audit — so quality holds instead of decaying.",
  ],
};

/* ------------------------------------------------------------------ */
/*  Problems                                                           */
/* ------------------------------------------------------------------ */

export const DQG_PROBLEMS: ProblemsProps = {
  badge: "The Governance Problem",
  title: "Data quality decays the moment ",
  titleHighlight: "you stop watching",
  subtitle:
    "A cleanup project fixes today's data. But new records arrive daily, systems drift apart, and quality quietly erodes until something breaks downstream.",
  items: [
    {
      number: "01",
      title: "Quality degrades over time",
      description:
        "Every new load introduces fresh errors. Without continuous checks, data drifts back to messy.",
    },
    {
      number: "02",
      title: "Issues surface too late",
      description:
        "Problems are usually found downstream — in a report or a failed process — long after they entered.",
    },
    {
      number: "03",
      title: "No shared view of health",
      description:
        "Without scorecards, nobody agrees on how healthy the data actually is or whether it's improving.",
    },
    {
      number: "04",
      title: "Audits need evidence",
      description:
        "Governance and audit require proof that quality is measured and managed — not assertions.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Features (What deKorvai Does)                                      */
/* ------------------------------------------------------------------ */

export const DQG_FEATURES: FeaturesProps = {
  badge: "What deKorvai Does",
  title: "Measure, monitor, and ",
  titleHighlight: "hold data quality",
  subtitle: "",
  items: [
    {
      number: "01",
      title: "Configurable DQ rules",
      description:
        "Reusable business and technical rules check completeness, accuracy, and consistency.",
    },
    {
      number: "02",
      title: "Real-time scorecards",
      description:
        "Live quality scores and trend insights across data quality dimensions.",
    },
    {
      number: "03",
      title: "Anomaly & drift detection",
      description:
        "Detects data drift, duplicates, and inconsistencies as they emerge.",
    },
    {
      number: "04",
      title: "Invalid-data reporting",
      description:
        "Surfaces invalid records for review and correction.",
    },
    {
      number: "05",
      title: "Continuous monitoring",
      description:
        "Ongoing quality monitoring rather than one-time checks.",
    },
    {
      number: "06",
      title: "AI rule generation",
      description:
        "Generate DQ rules from a natural-language prompt.",
    },
    {
      number: "07",
      title: "Cleansing & standardization",
      description:
        "Embeds cleansing, standardization, and quality gates into ETL workflows.",
    },
    {
      number: "08",
      title: "Governance & audit reports",
      description:
        "Comprehensive reports for governance and audit.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  How It Works (flow steps)                                          */
/* ------------------------------------------------------------------ */

export const DQG_HOW_IT_WORKS: HowItWorksContent = {
  badge: "How It Works",
  title: "Profile → Validate → Score → ",
  titleHighlight: "Monitor → Report",
  steps: [
    { step: "1", title: "Profile", description: "Discover metadata and profile data structure & content." },
    { step: "2", title: "Validate", description: "Apply DQ rules to detect anomalies." },
    { step: "3", title: "Score", description: "Real-time scorecards across quality dimensions." },
    { step: "4", title: "Monitor", description: "Continuous monitoring for drift & new issues." },
    { step: "5", title: "Report", description: "Governance- and audit-ready reporting." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

export const DQG_BENEFITS: BenefitsProps = {
  badge: "Business Benefits",
  title: "What continuous governance ",
  titleHighlight: "delivers",
  items: [
    {
      icon: "↑",
      title: "Quality that holds",
      description: "Continuous monitoring keeps data healthy instead of decaying between cleanups.",
    },
    {
      icon: "⏱",
      title: "Issues caught early",
      description: "Anomalies and drift are flagged as they appear, not discovered downstream.",
    },
    {
      icon: "◉",
      title: "A shared view of health",
      description: "Real-time scorecards give everyone one agreed measure of data quality.",
    },
    {
      icon: "⊙",
      title: "Audit-ready evidence",
      description: "Reports demonstrate that quality is measured and managed over time.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Powered By (links to platform pages)                               */
/* ------------------------------------------------------------------ */

export const DQG_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "Governance runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle: "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
  links: [
    {
      href: "/platform/data-quality-profiling",
      title: "Data Quality Profiling",
      description: "Rules, scorecards & anomaly detection",
    },
    {
      href: "/platform/agentic-ai",
      title: "Agentic AI",
      description: "AI rule generation & detection",
    },
    {
      href: "/platform/etl",
      title: "ETL Pipeline Engine",
      description: "Cleansing & quality gates in-pipeline",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Proof (customer references — no stats)                             */
/* ------------------------------------------------------------------ */

export interface CustomerProofItem {
  name: string;
  description: string;
}

export interface CustomerProofContent {
  badge: string;
  title: string;
  titleHighlight: string;
  customers: CustomerProofItem[];
}

export const DQG_PROOF: CustomerProofContent = {
  badge: "Proof",
  title: "Profiling on real ",
  titleHighlight: "enterprise data programs",
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

export const DQG_FAQ: FAQProps = {
  title: "Data quality governance, ",
  titleHighlight: "answered",
  items: [
    {
      question: "What is data quality governance?",
      answer:
        "It's the ongoing practice of keeping data accurate, complete, and consistent as it changes — with continuous monitoring, scoring, and reporting rather than one-time cleanups.",
    },
    {
      question: "How does deKorvai measure data quality?",
      answer:
        "It applies configurable DQ rules for completeness, accuracy, and consistency, and presents real-time scorecards with trend insights across quality dimensions.",
    },
    {
      question: "How are new issues detected?",
      answer:
        "deKorvai detects anomalies, drift, duplicates, and inconsistencies continuously, and surfaces invalid records for correction.",
    },
    {
      question: "Does this support audits?",
      answer:
        "Yes — continuous monitoring produces comprehensive reports for governance and audit.",
    },
    {
      question: "Is this only for SAP data?",
      answer:
        "No. Data quality governance applies across connected systems; SAP is one example, not a limit.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Related Solutions                                                  */
/* ------------------------------------------------------------------ */

export const DQG_RELATED_SOLUTIONS: RelatedSolutionsContent = {
  badge: "Related Solutions",
  title: "Often paired ",
  titleHighlight: "with governance",
  items: [
    {
      href: "/solutions/master-data-management",
      title: "Master Data Management",
      description: "De-duplicate & build golden records",
    },
    {
      href: "/solutions/compliance",
      title: "Compliance",
      description: "Prove data integrity for audits",
    },
    {
      href: "/solutions/s4hana-data-migration",
      title: "SAP S/4HANA Migration",
      description: "Quality gates before cutover",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */

export const DQG_CTA: CTAProps = {
  title: "Keep your data quality from slipping",
  description:
    "See how deKorvai scores your data quality in real time and holds it with continuous monitoring.",
  buttonText: "Book a Demo",
  subtext: "A working session on your data quality",
};
