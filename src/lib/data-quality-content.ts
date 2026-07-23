/* ------------------------------------------------------------------ */
/*  Data Quality & Profiling Page — Content                           */
/* ------------------------------------------------------------------ */

export const DQ_META = {
  title: "Data Quality Software & Profiling Platform | deKorvai",
  description:
    "deKorvai's data quality profiles, validates, monitors, and cleanses your data across any system — with AI rule generation, real-time scorecards, and golden records. It acts, not just reports. Book a demo.",
};

/* -- Hero ---------------------------------------------------------- */
export const DQ_HERO = {
  kick: "Platform · Data Quality",
  badge: "AI-powered · acts, not just reports",
  title: "Data Quality Software That Fixes Issues, ",
  titleHighlight: "Not Just Reports Them",
  subtitle:
    "Most data quality tools profile your data and hand back a report. deKorvai profiles, scores, and then cleanses — generating rules with AI, detecting anomalies in real time, and merging duplicates into golden records, across any database or application.",
  rating:
    "Built by Business Core Solutions · trusted on enterprise data programs worldwide",
};

export const DQ_LEDGER_ROWS = [
  {
    label: "Customer table · 12,400 records",
    detail: "completeness 82% → 99%",
    tag: "SCORED",
    tagStyle: "bg-blue-500/20 text-blue-300",
  },
  {
    label: '"Hexagonal Bolt M10" vs "Hex Bolt M10x50"',
    detail: "94% match",
    tag: "MERGED",
    tagStyle: "bg-violet-500/20 text-violet-300",
  },
  {
    label: "Postal code field · new outliers detected",
    detail: "drift alert",
    tag: "FLAGGED",
    tagStyle: "bg-orange-500/20 text-orange-300",
  },
  {
    label: "Email format rule · generated from prompt",
    detail: "1,203 violations",
    tag: "CLEANSED",
    tagStyle: "bg-emerald-500/20 text-emerald-300",
  },
];

/* -- Answer First -------------------------------------------------- */
export const DQ_ANSWER_FIRST = {
  label: "In short",
  paragraphs: [
    "Data quality measures whether data is complete, accurate, consistent, and valid — and improving it means fixing issues at the source, not just reporting them. deKorvai profiles data automatically, applies reusable rules (or generates them from natural language), scores quality in real time, and cleanses issues as they're found.",
    "Most tools stop at measuring and produce a dashboard. deKorvai closes the loop: it detects duplicates, drift, and anomalies, merges records into governed golden records, and keeps a full audit trail — across any relational database, SaaS application, or ERP it connects to.",
  ],
};

/* -- Stat Band ----------------------------------------------------- */
export const DQ_STATS = [
  {
    value: "$12.9M",
    label: "Average annual cost of poor data quality per organization",
    source: "Gartner estimate",
  },
  {
    value: "70%",
    label: "Reduction in data errors with deKorvai",
    source: "across customer programs",
  },
  {
    value: "3x",
    label: "Faster issue resolution vs manual profiling",
    source: "measured on live datasets",
  },
];

/* -- Problems ------------------------------------------------------ */
export const DQ_PROBLEMS = {
  badge: "THE DATA QUALITY GAP",
  title: "Measuring bad data is not the same as ",
  titleHighlight: "fixing it",
  subtitle:
    "Profiling tools got very good at surfacing issues. The value only lands when someone acts — and remediation is the work that keeps getting deferred until a report breaks or a project stalls.",
  items: [
    {
      number: "01",
      title: "The snapshot goes stale immediately",
      description:
        "Most tools profile at a point in time. Data drifts every day after, so the quality you signed off last quarter rarely matches what's flowing through today.",
    },
    {
      number: "02",
      title: "Tools report, humans remediate",
      description:
        'A dashboard flags 40,000 issues. Cleansing them becomes a manual backlog that competes with every other priority — and loses.',
    },
    {
      number: "03",
      title: "Duplicates hide behind small differences",
      description:
        '"Hex Bolt M10x50" and "Hexagonal Bolt M10 x 50mm" are the same part. Exact-match checks miss them; the business pays with inflated stock and duplicate orders.',
    },
    {
      number: "04",
      title: "Rules don't scale across systems",
      description:
        'Quality rules written by hand for one database rarely carry to the next, so every system reinvents its own definition of "good data."',
    },
  ],
};

/* -- Features ------------------------------------------------------ */
export const DQ_FEATURES = {
  badge: "KEY FEATURES",
  title: "Everything data quality needs, ",
  titleHighlight: "on one layer",
  subtitle:
    "Every capability below measures continuously and acts under governance — not just reports.",
  items: [
    {
      number: "01",
      title: "Automated data profiling",
      description:
        "Discover metadata, structure, and content patterns automatically — column, cross-table, and content-level analysis that surfaces issues before they spread.",
    },
    {
      number: "02",
      title: "Rule-based validation",
      description:
        "Reusable business and technical rules test completeness, accuracy, consistency, and validity — applied identically across every connected system.",
    },
    {
      number: "03",
      title: "AI rule generation",
      description:
        "Describe a check in plain language; agentic AI writes the rule, flags anomalies, and proposes remediation, with human approval.",
    },
    {
      number: "04",
      title: "Real-time quality scorecards",
      description:
        "Live scores across every quality dimension, with trend insight — so data health is visible at a glance and provable to auditors.",
    },
    {
      number: "05",
      title: "Anomaly & drift detection",
      description:
        "Continuous monitoring flags outliers, unexpected distributions, and schema drift the moment they appear, not at the next quarterly review.",
    },
    {
      number: "06",
      title: "Fuzzy duplicate detection",
      description:
        "Levenshtein, Jaro-Winkler, and phonetic matching cluster near-duplicates that exact matching misses — the true source of most master-data mess.",
    },
    {
      number: "07",
      title: "Golden records & survivorship",
      description:
        "Merge duplicates into a single trusted record with survivorship rules; linked transactions are re-pointed to the surviving record automatically.",
    },
    {
      number: "08",
      title: "Embedded cleansing & remediation",
      description:
        "Standardization and cleansing run inside the workflow — invalid records are routed for correction, not just counted on a report.",
    },
    {
      number: "09",
      title: "Continuous monitoring & audit",
      description:
        "Ongoing quality monitoring with a full, tamper-evident audit trail behind every rule, score, and change — ready for governance reviews.",
    },
  ],
};

/* -- Dimensions ---------------------------------------------------- */
export const DQ_DIMENSIONS = {
  badge: "THE FRAMEWORK",
  title: "The six data quality dimensions ",
  titleHighlight: "deKorvai measures",
  subtitle:
    "A shared, measurable definition of \"good data\" — applied consistently across every system you connect.",
  items: [
    {
      name: "Completeness",
      question: "Are all required values present?",
      measurement: "Mandatory-field & null/blank rules per object",
    },
    {
      name: "Accuracy",
      question: "Does the value reflect reality?",
      measurement: "Reference-data validation, format & range rules",
    },
    {
      name: "Consistency",
      question: "Does it agree across systems?",
      measurement: "Cross-system reconciliation & referential checks",
    },
    {
      name: "Validity",
      question: "Does it conform to the rules?",
      measurement: "Pattern, type, and business-rule validation",
    },
    {
      name: "Uniqueness",
      question: "Are there hidden duplicates?",
      measurement: "Exact + fuzzy matching into golden records",
    },
    {
      name: "Timeliness",
      question: "Is it current and fresh?",
      measurement: "Freshness & drift monitoring, change logs",
    },
  ],
};

/* -- Workflows (Tabbed) -------------------------------------------- */
export const DQ_WORKFLOWS = {
  badge: "HOW IT WORKS",
  title: "Quality issues corrected, ",
  titleHighlight: "not just counted",
  subtitle:
    "Four patterns — each measured continuously, decided under governance, and executed as a workflow.",
  tabs: [
    {
      label: "Profiling & Scoring",
      steps: [
        { step: "1", title: "Discover", description: "Auto-profile a source: metadata, structure, distributions." },
        { step: "2", title: "Score", description: "Rate each dimension and produce a live quality scorecard." },
        { step: "3", title: "Prioritize", description: "Rank issues by impact so teams fix what matters first." },
        { step: "4", title: "Evidence", description: "Publish the score with the rules and data behind it." },
      ],
      outcome: "A living quality score for every source — not a one-off audit that's stale by next week.",
    },
    {
      label: "Duplicate → Golden Record",
      steps: [
        { step: "1", title: "Detect", description: "Fuzzy matching (Levenshtein, Jaro-Winkler, phonetic) clusters near-duplicates." },
        { step: "2", title: "Review", description: "Clusters are presented with match confidence for approval." },
        { step: "3", title: "Merge", description: "Survivorship rules build the golden record; links re-point automatically." },
        { step: "4", title: "Evidence", description: "Every merge is logged with its justification and match score." },
      ],
      outcome: "Duplicates collapsed into trusted golden records, with a full record of what merged and why.",
    },
    {
      label: "Anomaly & Drift",
      steps: [
        { step: "1", title: "Baseline", description: "Learn normal ranges and distributions for each field." },
        { step: "2", title: "Watch", description: "Continuously compare incoming data to the baseline." },
        { step: "3", title: "Alert", description: "Flag outliers and schema drift the moment they appear." },
        { step: "4", title: "Evidence", description: "Log the anomaly, cause, and resolution for governance." },
      ],
      outcome: "Problems caught the day they start — before they reach a report or a downstream system.",
    },
    {
      label: "AI Rule Generation",
      steps: [
        { step: "1", title: "Describe", description: 'State the check in plain language: "emails must be valid and unique."' },
        { step: "2", title: "Generate", description: "Agentic AI writes the rule and shows what it will catch." },
        { step: "3", title: "Approve", description: "A human confirms; the rule joins the reusable library." },
        { step: "4", title: "Run", description: "The rule executes across systems and reports violations." },
      ],
      outcome: "Rules built in seconds by anyone — no scripting, no waiting on a data engineer.",
    },
  ],
};

/* -- Benefits ------------------------------------------------------ */
export const DQ_BENEFITS = {
  badge: "BUSINESS BENEFITS",
  title: "What trusted data is ",
  titleHighlight: "worth",
  items: [
    {
      icon: "$",
      title: "Lower cost of bad data",
      description:
        "Catch errors at the source and cut the rework, wrong decisions, and failed processes that poor data quality quietly funds.",
    },
    {
      icon: "↑",
      title: "Decisions you can trust",
      description:
        "Reporting, analytics, and AI models are only as good as their inputs. Clean, scored data makes every downstream decision defensible.",
    },
    {
      icon: "⚡",
      title: "Faster projects & onboarding",
      description:
        "Migrations, integrations, and new-system rollouts stop stalling on data surprises — issues are known and fixed before they block delivery.",
    },
    {
      icon: "⊘",
      title: "Audit & compliance readiness",
      description:
        "A live quality position with a full audit trail means governance reviews and regulators meet evidence, not a scramble.",
    },
    {
      icon: "◇",
      title: "One platform, less sprawl",
      description:
        "Profiling, validation, monitoring, and cleansing on one layer removes the licensing and integration cost of four separate tools.",
    },
    {
      icon: "✦",
      title: "AI-ready foundation",
      description:
        "Agentic AI and analytics need trustworthy data. deKorvai keeps the foundation clean so the intelligence built on it is reliable.",
    },
  ],
};

/* -- Use Cases ----------------------------------------------------- */
export const DQ_USE_CASES = {
  badge: "USE CASES",
  title: "Where teams put data quality ",
  titleHighlight: "to work",
  items: [
    {
      tag: "Governance",
      title: "Continuous data quality governance",
      description:
        "Ongoing quality monitoring with real-time scorecards and comprehensive reports for governance and audits.",
    },
    {
      tag: "Master Data",
      title: "Master data & deduplication",
      description:
        "Fuzzy duplicate detection and golden-record creation for master data across systems.",
    },
    {
      tag: "Consolidation",
      title: "System consolidation",
      description:
        "Profile and cleanse data when merging or consolidating systems, so quality issues are resolved before the merge.",
    },
    {
      tag: "Test Data",
      title: "Test data management readiness",
      description:
        "Validate and profile data destined for non-production environments as part of the broader platform's test-data workflows.",
    },
    {
      tag: "Migration Readiness",
      title: "Migration data readiness",
      description:
        "Profile and cleanse before a migration — including programs like an SAP S/4HANA move — so bad data doesn't derail cutover.",
    },
    {
      tag: "Compliance & Audit",
      title: "Audit-ready data integrity",
      description:
        "Continuous monitoring with full audit trails produces a defensible, evidenced data-quality position on demand.",
    },
  ],
};

/* -- The Shift ----------------------------------------------------- */
export const DQ_SHIFT = {
  badge: "THE SHIFT",
  title: "From measure-and-report to ",
  titleHighlight: "measure-and-fix",
  traditional: [
    "Profile data at a point in time",
    "Flag issues on a dashboard for someone to action",
    "Cleansing is a manual backlog that gets deferred",
    "Duplicates keep multiplying across systems",
    "Rules hand-written per system, inconsistently",
    "Quality position reconstructed under audit pressure",
  ],
  withDekorvai: [
    "Profile continuously, with a live score",
    "Issues corrected through governed cleansing workflows",
    "Remediation runs as an approved action, not a chore",
    "Duplicates merged into golden records automatically",
    "AI generates reusable rules that apply everywhere",
    "A current, evidenced position ready on demand",
  ],
};

/* -- Architecture -------------------------------------------------- */
export const DQ_ARCHITECTURE = {
  badge: "PLATFORM ARCHITECTURE",
  title: "The data quality engine inside ",
  titleHighlight: "deKorvai",
  subtitle:
    "The DQ Engine is one component of the deKorvai platform, working alongside the ETL Engine, Scrambler, and agentic AI (Agent Master) — connecting to your systems through standard protocols.",
  blocks: [
    {
      label: "Platform Components",
      items: "DQ Engine · ETL Engine · Scrambler · Agent Master · MCP",
    },
    {
      label: "Runtime",
      items: "Docker · Postgres · MongoDB",
    },
    {
      label: "Connectivity",
      items: "JDBC · RFC / API · HTTPS · REST",
    },
    {
      label: "Connects To",
      items: "RDBMS · SAP · SaaS · CSV / JSON / Parquet / Excel",
    },
  ],
  integrations:
    "SAP · SAP HANA · Oracle · Microsoft · Snowflake · AWS · Google Cloud · Salesforce · PostgreSQL",
};

/* -- Proof --------------------------------------------------------- */
export const DQ_PROOF = {
  badge: "PROOF",
  title: "120,000+ records cleansed with ",
  titleHighlight: "AI fuzzy matching",
  description:
    "Near-duplicate master data across plants and locations — clustered, reviewed, and merged into golden records, with linked transactions re-pointed automatically. (Delivered on SAP master data, using the same engine that runs on any system.)",
  stats: [
    { value: "92%+", label: "Duplicate Detection" },
    { value: "60%", label: "Less Manual Effort" },
    { value: "99%+", label: "Transaction Integrity" },
    { value: "4x", label: "Faster Cleansing" },
  ],
  ctaText: "Read the technical deep-dive →",
  ctaHref: "/blog/fuzzy-duplicate-detection-sap-master-data-dekorvai",
};

/* -- FAQ ----------------------------------------------------------- */
export const DQ_FAQS = [
  {
    question: "What does deKorvai's data quality capability do?",
    answer:
      "It measures whether data is complete, accurate, consistent, and valid, then improves it through profiling, rule-based validation, monitoring, and cleansing — with AI rule generation, real-time scorecards, and automated golden-record creation across any connected system.",
  },
  {
    question: "What is data profiling?",
    answer:
      "Data profiling analyzes a dataset to discover its structure, content, and quality — completeness, patterns, duplicates, and anomalies — before the data is used. Profiling results drive the validation rules and cleansing that follow.",
  },
  {
    question: "What's the difference between data quality and data integrity?",
    answer:
      "Data quality measures whether data is accurate and complete at a point in time. Data integrity is broader — keeping data trustworthy across its whole lifecycle, through transformations, masking, and migrations.",
  },
  {
    question: "How is data quality different from data observability?",
    answer:
      "Observability monitors pipelines for failures and downtime; data quality measures and fixes the data itself. deKorvai does both — monitoring plus rule-based validation, scoring, and cleansing.",
  },
  {
    question: "What is a data quality maturity model?",
    answer:
      "It's a framework for rating how advanced an organization's data quality practice is — from ad-hoc manual checks to continuous, governed, automated quality. deKorvai helps teams move up the model with profiling, scoring, and automation.",
  },
  {
    question: "Does deKorvai only work with SAP?",
    answer:
      "No. deKorvai profiles and cleanses data in any relational database, cloud warehouse, or SaaS application — Oracle, SQL Server, PostgreSQL, Snowflake, Salesforce, and more. SAP is one of many supported environments.",
  },
];

/* -- Related Pages ------------------------------------------------- */
export const DQ_RELATED_PLATFORM = [
  {
    href: "/platform/etl-pipeline",
    title: "ETL Pipeline Engine",
    description: "Extract, transform & validate before load",
  },
  {
    href: "/platform/data-scrambling",
    title: "Data Masking (Scrambling)",
    description: "Compliant test data by design",
  },
  {
    href: "/platform/agentic-ai",
    title: "Agentic AI",
    description: "Agents that detect & fix issues",
  },
];

/* -- CTA ----------------------------------------------------------- */
export const DQ_CTA = {
  title: "Stop finding data issues too late",
  description:
    "See how deKorvai profiles, scores, and cleanses data — and what that changes for your migrations, reporting, and governance.",
  buttonText: "Book a Demo",
  subtext: "A working session on your data quality challenges",
};
