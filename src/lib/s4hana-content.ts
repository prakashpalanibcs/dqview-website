/* ------------------------------------------------------------------ */
/*  SAP S/4HANA Data Migration Page — Content                          */
/*                                                                     */
/*  This page doubles as the landing page for paid ECC-deadline        */
/*  traffic, so the copy leads with the 2027 deadline and the data     */
/*  readiness session rather than a generic solution pitch.            */
/* ------------------------------------------------------------------ */

import type { FAQProps } from "@/components/platform-sections";

import type {
  PoweredByContent,
  RelatedSolutionsContent,
} from "@/lib/mdm-content";

import type {
  S4HeroContent,
  S4TrustContent,
  S4FormContent,
  S4StatsContent,
  S4PathContent,
  S4ApproachesContent,
  S4ScaleContent,
  S4FinalCtaContent,
} from "@/components/solutions/s4hana-sections";

/* ------------------------------------------------------------------ */
/*  Meta                                                               */
/* ------------------------------------------------------------------ */

export const S4HANA_META = {
  title: "SAP S/4HANA Data Migration Before the 2027 ECC Deadline | deKorvai",
  description:
    "Built for SAP estates with millions of records: deKorvai profiles, transforms, validates and loads ECC data into S/4HANA before support ends on December 31, 2027.",
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export const S4HANA_HERO: S4HeroContent = {
  kicker: "SAP S/4HANA data migration",
  title: "Land your ECC data in S/4HANA ",
  titleHighlight: "clean, complete and on time",
  lede:
    "deKorvai runs the whole data path of your migration: extraction from ECC, profiling, transformation to the S/4HANA model, validation before load, Migration Cockpit loading and reconciliation. Built for SAP estates with millions of records.",
  primaryCta: "Book a data readiness session",
  secondaryCta: "See how it works",
  fitsPrefix: "For ",
  fitsApproaches: ["Greenfield", "Brownfield", "Bluefield"],
  fitsSuffix: " migrations, including SAP GROW.",
  clockCaption: "Time left on ECC mainstream maintenance",
  clockNote:
    "SAP ends mainstream maintenance for ECC 6.0 (EHP 6–8) on December 31, 2027.",
  clockNoteSmall: "Extended maintenance runs to 2030 at additional cost.",
};

/* ------------------------------------------------------------------ */
/*  Trust strip                                                        */
/* ------------------------------------------------------------------ */

export const S4HANA_TRUST: S4TrustContent = {
  lead: "Trusted in SAP programmes at",
  customers: ["Evident Scientific", "GRT Ethanol", "Coromandel International"],
  credit: "A product of",
  creditOrg: "Business Core Solutions",
  certification: "ISO/IEC 42001:2023 certified",
};

/* ------------------------------------------------------------------ */
/*  Data readiness session (offer + lead form)                         */
/* ------------------------------------------------------------------ */

export const S4HANA_FORM: S4FormContent = {
  title: "See where your ECC data stands ",
  titleHighlight: "before the clock runs out",
  lede:
    "Book a working session with our migration team. You leave with a clear view of where the data risk sits in your migration and what it will take to land it clean.",
  bullets: [
    {
      title: "Your scope, made concrete.",
      description:
        "Which ECC objects move, which history is archived, and what is better left behind.",
    },
    {
      title: "Where the risk concentrates for your approach.",
      description:
        "Business Partner conversion, material master, open items and finance data.",
    },
    {
      title: "How deKorvai would run it.",
      description:
        "Profiling, transformation, validation and reconciliation, shown on the platform.",
    },
  ],
  assurance: "No obligation. Takes two minutes to request.",
  step1Title: "Tell us about your migration",
  step2Title: "Where should we send the invite?",
  approachLegend: "Which approach are you taking?",
  approachOptions: ["Greenfield", "Brownfield", "Bluefield", "Not decided yet"],
  goLiveLegend: "When are you aiming to go live?",
  goLiveOptions: ["2026", "2027", "2028 or later", "Not set yet"],
  continueLabel: "Continue",
  backLabel: "Back to step 1",
  submitLabel: "Book my data readiness session",
  sendingLabel: "Sending your request",
  consentLabel:
    "Send me occasional updates on S/4HANA data migration. Unsubscribe any time.",
  successTitle: "Your session request is in",
  successBody:
    "Our migration team will contact you at {email} to schedule it.",
  errorTitle: "We could not send your request",
  errorBody: "Email us and we will arrange the session:",
  privacyNote:
    "We use these details only to arrange your session.",
};

/* ------------------------------------------------------------------ */
/*  Urgency stats                                                      */
/* ------------------------------------------------------------------ */

export const S4HANA_URGENCY: S4StatsContent = {
  title: "Why the deadline is really ",
  titleHighlight: "a data problem",
  stats: [
    {
      value: "37%",
      label:
        "of companies still running ECC expect to be on S/4HANA by the end of 2027.",
      source: "DSAG investment report, 2026",
    },
    {
      value: "8%",
      label: "of completed S/4HANA migrations finished on schedule.",
      source: "Horváth study of 200 SAP user companies, 2025",
    },
    {
      value: "6 in 10",
      label: "S/4HANA migrations went over budget.",
      source: "Horváth study of 200 SAP user companies, 2025",
    },
  ],
  bridge:
    "The technical conversion is well understood. What slips is the data: duplicates in customer and vendor masters, material views that do not fit the new model, balances that will not reconcile.",
  bridgeEmphasis:
    "The earlier you know the condition of your data, the more of your timeline you control.",
};

/* ------------------------------------------------------------------ */
/*  The data path (7 stages)                                           */
/* ------------------------------------------------------------------ */

export const S4HANA_PATH: S4PathContent = {
  badge: "How It Works",
  title: "The full data path, ",
  titleHighlight: "from ECC to S/4HANA",
  subtitle:
    "Seven stages, one platform. Every stage runs on the same rules, so each mock cycle behaves like the last and cutover is a repeat of something already proven.",
  stages: [
    {
      title: "Discovery and assessment",
      description: "Profile ECC data to size the work before scope and budget are fixed.",
    },
    {
      title: "Data extraction",
      description: "Rule-based extraction from ECC, full or selective.",
    },
    {
      title: "Profiling and validation",
      description:
        "Mandatory fields, duplicates, anomalies and integrity checks against the target.",
    },
    {
      title: "Transformation and scrambling",
      description:
        "Mapping to the S/4HANA model, plus data masking (scrambling) for non-production copies.",
    },
    {
      title: "Simulation and reconciliation",
      description: "Mock runs reconciled against the source before cutover.",
    },
    {
      title: "Migration execution",
      description: "Orchestrated cutover through the Migration Cockpit (DMC or LTMC).",
    },
    {
      title: "RPA and automation",
      description: "Post-go-live validation and repetitive tasks, automated.",
    },
  ],
  loopTitle: "Errors go to the people who can fix them",
  loopBody:
    "When a record fails validation, deKorvai sends it to the responsible business user to correct and return, so procurement fixes vendors and supply chain fixes materials, without waiting in an IT queue.",
};

/* ------------------------------------------------------------------ */
/*  Migration approaches                                               */
/* ------------------------------------------------------------------ */

export const S4HANA_APPROACHES: S4ApproachesContent = {
  badge: "Migration Approaches",
  title: "Built for the way ",
  titleHighlight: "you are migrating",
  items: [
    {
      name: "Greenfield",
      subtitle: "New implementation, including SAP GROW",
      color: "#4ADE80",
      points: [
        "Selective extraction from the legacy system",
        "Clean transformation to the S/4HANA model",
        "Profiling that fixes quality issues up front",
        "End-to-end validation and reconciliation",
      ],
    },
    {
      name: "Brownfield",
      subtitle: "System conversion with SUM and DMO",
      color: "#C68A4A",
      points: [
        "Cleansing and enrichment before conversion",
        "Duplicate detection and inconsistency fixing",
        "Scrambling for sandbox and QA clones",
        "Reconciliation against the source ECC",
      ],
    },
    {
      name: "Bluefield",
      subtitle: "Selective data transition",
      color: "#3B82F6",
      points: [
        "Hybrid data selection: keep what matters",
        "Transformation across entities and periods",
        "Mock conversion and simulation cycles",
        "Selective history with integrity preserved",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Scale and proof                                                    */
/* ------------------------------------------------------------------ */

export const S4HANA_SCALE: S4ScaleContent = {
  title: "Built for SAP estates with ",
  titleHighlight: "millions of records",
  lede:
    "Parallel runs, rule-driven processing and a scalable architecture, so data volume does not decide your timeline.",
  headlineCase: {
    title: "Business Partner vendor migration",
    context:
      "ECC to S/4HANA: extraction, profiling, transformation and loading into DMC staging tables.",
    metrics: [
      { value: "Millions", label: "of records in this migration" },
      { value: "100%", label: "data accuracy" },
      { value: "95%+", label: "DMC first-pass rate" },
      { value: "3x", label: "faster lead time" },
    ],
  },
  cases: [
    {
      title: "GRT Ethanol",
      context: "SAP GROW programme. Legacy data loads delivered against a three-month target.",
    },
    {
      title: "Evident Scientific",
      context:
        "S/4HANA roll-out for the US region, covering master and transaction data migration with profiling.",
    },
  ],
  outcomes: [
    { value: "3x", label: "faster data issue resolution" },
    { value: "70%", label: "reduction in data errors" },
    { value: "100%", label: "audit readiness" },
  ],
  outcomesSource: "Platform outcomes as reported by Business Core Solutions.",
};

/* ------------------------------------------------------------------ */
/*  Powered By (links to platform pages)                               */
/* ------------------------------------------------------------------ */

export const S4HANA_POWERED_BY: PoweredByContent = {
  badge: "Powered By the Platform",
  title: "Migration runs on ",
  titleHighlight: "deKorvai's capabilities",
  subtitle:
    "This solution is delivered by the deKorvai platform — explore the capabilities behind it.",
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
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const S4HANA_FAQ: FAQProps = {
  title: "SAP S/4HANA data migration, ",
  titleHighlight: "answered",
  items: [
    {
      question: "When does SAP ECC support end?",
      answer:
        "SAP ends mainstream maintenance for ECC 6.0 with enhancement packages 6 to 8 on December 31, 2027. Extended maintenance is available to December 31, 2030 at additional cost. Mainstream maintenance for enhancement packages 0 to 5 already ended on December 31, 2025.",
    },
    {
      question: "What does deKorvai do in an S/4HANA migration?",
      answer:
        "It runs the data path: discovery and assessment, rule-based extraction from ECC, profiling and validation, transformation to the S/4HANA model with scrambling for non-production copies, simulation and reconciliation, migration execution through the Migration Cockpit, and post-go-live validation.",
    },
    {
      question: "Which migration approaches does deKorvai support?",
      answer:
        "Greenfield including SAP GROW, Brownfield system conversion, and Bluefield selective data transition. The data path adapts to each: selective extraction for Greenfield, cleansing before conversion for Brownfield, and hybrid data selection with history preserved for Bluefield.",
    },
    {
      question: "How do you prove the data migrated correctly?",
      answer:
        "Data is validated against business and technical rules before it loads, mock runs are reconciled against the source before cutover, and every operation is recorded in a full audit trail. That gives finance and audit the evidence they need to sign off.",
    },
    {
      question: "Can deKorvai handle large data volumes?",
      answer:
        "Yes. deKorvai is built for SAP estates with millions of records, with parallel runs, rule-driven processing and a scalable architecture. Selective extraction and active-record checks also reduce how much data you need to move in the first place.",
    },
    {
      question: "What happens in a data readiness session?",
      answer:
        "You walk through your ECC landscape with our migration team: which objects are in scope, where data risk concentrates for your approach, and how deKorvai would profile, transform, validate and reconcile your data. There is no obligation.",
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
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */

export const S4HANA_FINAL_CTA: S4FinalCtaContent = {
  title: "ECC support ends December 31, 2027. ",
  titleHighlight: "Start with your data.",
  leftPrefix: "",
  leftMiddle: " days and ",
  leftSuffix: " hours left on ECC mainstream maintenance.",
  buttonText: "Book a data readiness session",
};

export const S4HANA_STICKY_CTA_LABEL = "Book a session";
