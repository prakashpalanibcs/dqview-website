/* ------------------------------------------------------------------ */
/*  ETL Pipeline Page — Content                                       */
/* ------------------------------------------------------------------ */

import type {
  PlatformHeroProps,
  AnswerFirstProps,
  StatItem,
  ProblemsProps,
  FeaturesProps,
  PipelineProps,
  DimensionsProps,
  WorkflowsProps,
  BenefitsProps,
  UseCasesProps,
  ShiftProps,
  ArchitectureProps,
  ProofProps,
  ConnectorsProps,
  FAQProps,
  RelatedPagesProps,
  CTAProps,
} from "@/components/platform-sections";

export const ETL_META = {
  title: "ETL Tools & Data Pipeline Platform | deKorvai",
  description:
    "deKorvai's ETL extracts, transforms, validates, and loads data across SAP, Oracle, Snowflake, and any database — with profiling built into the pipeline, so only clean data reaches the target. Book a demo.",
};

export const ETL_HERO: PlatformHeroProps = {
  kick: "Platform · ETL & Data Pipelines",
  badge: "Profiling built into every pipeline",
  title: "ETL Tools That Validate Before They Load, ",
  titleHighlight: "Not After",
  subtitle:
    "Most pipelines move data fast — and move the bad data with it. deKorvai extracts, transforms, and loads across SAP, Oracle, Snowflake, and any database, with profiling and validation built into the pipeline, so only clean, trusted data reaches the target.",
  rating:
    "Built by Business Core Solutions · running on enterprise data programs worldwide",
  ledgerTitle: "etl pipeline · run #4821",
  ledgerRows: [
    {
      label: "Extract · vendor table · delta since last run",
      detail: "3,140 records",
      tag: "EXTRACTED",
      tagStyle: "bg-blue-500/20 text-blue-300",
    },
    {
      label: "Transform · company-code & org mapping",
      detail: "rules applied",
      tag: "MAPPED",
      tagStyle: "bg-violet-500/20 text-violet-300",
    },
    {
      label: "Validate · 22 records fail mandatory-field rule",
      detail: "routed to correction",
      tag: "HELD",
      tagStyle: "bg-orange-500/20 text-orange-300",
    },
    {
      label: "Load · 3,118 clean records → target staging",
      detail: "100% pass",
      tag: "LOADED",
      tagStyle: "bg-emerald-500/20 text-emerald-300",
    },
  ],
};

export const ETL_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "ETL (Extract, Transform, Load) moves data from source systems into a target — extracting records, transforming them to fit the target model, and loading them. deKorvai adds profiling and validation inside the pipeline, so data quality issues are caught before load rather than discovered after.",
    "It supports full and incremental extraction, reusable and DIY transformations, validation before load, and overwrite or append options — across SAP and non-SAP systems, orchestrated and monitored from one place.",
  ],
};

export const ETL_STATS: StatItem[] = [
  {
    value: "100%",
    label: "Accuracy at load, with pre-load validation",
    source: "deKorvai ETL",
  },
  {
    value: "70%",
    label: "More efficient than manual, tool-hopping pipelines",
    source: "deKorvai ETL",
  },
  {
    value: "Full & delta",
    label: "Selective and incremental extraction modes",
    source: "any source",
  },
];

export const ETL_PROBLEMS: ProblemsProps = {
  badge: "THE ETL PROBLEM",
  title: "Moving data fast is easy. Moving trusted data is ",
  titleHighlight: "not",
  subtitle:
    "Traditional pipelines extract and load efficiently, then leave you to discover the duplicates, gaps, and mapping errors downstream — in reports, broken integrations, or at go-live.",
  items: [
    {
      number: "01",
      title: "Quality is checked after the load",
      description:
        "Most pipelines load first and validate later, so bad records reach the target and have to be found and unwound instead of stopped up front.",
    },
    {
      number: "02",
      title: "ETL, profiling, and validation live in separate tools",
      description:
        "Stitching an extractor to a profiler to a validator means hand-offs, glue code, and no single view of a run from source to target.",
    },
    {
      number: "03",
      title: "Transformations are hand-coded and hard to reuse",
      description:
        "Mapping logic written for one load rarely carries to the next, so every pipeline reinvents the same field, code, and structure mappings.",
    },
    {
      number: "04",
      title: "No audit trail from source to target",
      description:
        "When a number looks wrong at the target, there's no record of what was extracted, transformed, or rejected — so reconciliation becomes guesswork.",
    },
  ],
};

export const ETL_FEATURES: FeaturesProps = {
  badge: "KEY FEATURES",
  title: "A complete extract, transform & load ",
  titleHighlight: "engine",
  subtitle:
    "Everything a trusted pipeline needs — on one layer, not four stitched-together tools.",
  items: [
    { number: "01", title: "Rule-based extraction", description: "Extract from SAP ECC, Oracle, SQL Server, and any relational source using conditions, filters, and selective rules." },
    { number: "02", title: "Full & incremental loads", description: "Choose full or delta extraction; incremental loads keep large datasets in sync without reprocessing everything." },
    { number: "03", title: "Reusable & DIY transformations", description: "Ready-to-use and do-it-yourself transformation functions — field, code, and structure mapping, all reusable across pipelines." },
    { number: "04", title: "Validation before load", description: "Pre-load validation checks records against target rules; invalid records are routed for correction instead of loaded blindly." },
    { number: "05", title: "Overwrite & append options", description: "Control how data lands in the target — overwrite existing records or append new ones, per load." },
    { number: "06", title: "Built-in profiling", description: "Profiling runs inside the pipeline, detecting duplicates, missing fields, and anomalies before transformation." },
    { number: "07", title: "Workflow orchestration", description: "Orchestrate multi-step pipelines with dependency management and a smart decision engine — not a pile of cron jobs." },
    { number: "08", title: "Wide connectivity", description: "Broad extraction and loading options across databases, files, SaaS, and ERP — SAP and non-SAP alike." },
    { number: "09", title: "End-to-end monitoring & audit", description: "Execution tracking, change logs, and a full audit trail for every record — from source to target." },
  ],
};

export const ETL_PIPELINE: PipelineProps = {
  badge: "THE PIPELINE",
  title: "Extract → Profile → Transform → Validate → Load",
  subtitle: "One repeatable workflow that replaces four disconnected tools.",
  steps: [
    { step: "1", title: "Extract", description: "Rule-based full & incremental extraction from SAP ECC, Oracle, SQL Server, any RDBMS." },
    { step: "2", title: "Profile", description: "Detect duplicates, gaps, and anomalies before transformation begins." },
    { step: "3", title: "Transform", description: "Reusable & DIY functions; field, code & structure mapping." },
    { step: "4", title: "Validate", description: "Pre-load checks against target rules — only clean data proceeds." },
    { step: "5", title: "Load", description: "Overwrite or append into target staging, monitored, with a full audit trail." },
  ],
};

export const ETL_VS_ELT: DimensionsProps = {
  badge: "KNOW THE DIFFERENCE",
  title: "ETL vs ELT — and ",
  titleHighlight: "when each fits",
  subtitle: "",
  columns: ["", "ETL — transform, then load", "ELT — load, then transform"],
  items: [
    { name: "Best for", question: "Migrations, regulated data, quality gates before load", measurement: "Cloud warehouses with cheap compute, exploratory analytics" },
    { name: "Data quality", question: "Enforced before the target is touched", measurement: "Enforced after load, inside the warehouse" },
    { name: "Typical target", question: "Operational systems, ERP, migration targets", measurement: "Snowflake, cloud data warehouses, data lakes" },
    { name: "deKorvai", question: "Native — validate-before-load is the default", measurement: "Supported — load, then transform & profile in place" },
  ],
};

export const ETL_WORKFLOWS: WorkflowsProps = {
  badge: "HOW IT WORKS",
  title: "Trusted pipelines, ",
  titleHighlight: "run and evidenced",
  subtitle: "Four patterns — each extracted, validated, and audited end to end.",
  tabs: [
    {
      label: "Full & Delta Extraction",
      steps: [
        { step: "1", title: "Connect", description: "Point at a source and define extraction rules and filters." },
        { step: "2", title: "Choose mode", description: "Full for a first load, incremental for changes since last run." },
        { step: "3", title: "Extract", description: "Pull only the records the rules select — no full reloads needed." },
        { step: "4", title: "Evidence", description: "Log what was extracted, when, and against which rules." },
      ],
      outcome: "Only the data you need, extracted efficiently — with a record of every decision.",
    },
    {
      label: "Transform & Map",
      steps: [
        { step: "1", title: "Map", description: "Define field, code, and structure mappings to the target model." },
        { step: "2", title: "Reuse", description: "Save transformations as reusable functions for the next pipeline." },
        { step: "3", title: "Apply", description: "Run transformations across the extracted set consistently." },
        { step: "4", title: "Evidence", description: "Record every mapping applied for reconciliation." },
      ],
      outcome: "Consistent, reusable transformations — not hand-coded scripts rebuilt each time.",
    },
    {
      label: "Validate Before Load",
      steps: [
        { step: "1", title: "Check", description: "Validate transformed records against target-system rules." },
        { step: "2", title: "Separate", description: "Hold invalid records; let clean ones continue." },
        { step: "3", title: "Correct", description: "Route held records for correction and re-validation." },
        { step: "4", title: "Load", description: "Load only validated records into the target." },
      ],
      outcome: "Bad records stopped before they reach the target — not discovered after.",
    },
    {
      label: "Orchestrate",
      steps: [
        { step: "1", title: "Sequence", description: "Define pipeline steps and their dependencies." },
        { step: "2", title: "Schedule", description: "Run on schedule or trigger; the decision engine handles branches." },
        { step: "3", title: "Monitor", description: "Track execution end to end with live status." },
        { step: "4", title: "Evidence", description: "Full audit trail and change logs for every run." },
      ],
      outcome: "Orchestrated pipelines with dependency management — not a pile of cron jobs.",
    },
  ],
};

export const ETL_BENEFITS: BenefitsProps = {
  badge: "BUSINESS BENEFITS",
  title: "What a trusted pipeline is ",
  titleHighlight: "worth",
  items: [
    { icon: "✓", title: "Clean data at the target, first time", description: "Validation before load means the target isn't polluted with records you'll have to find and unwind later." },
    { icon: "⚡", title: "Faster, more efficient loads", description: "Reusable transformations and incremental extraction cut the manual effort and reprocessing that slow traditional pipelines." },
    { icon: "◇", title: "One platform, less sprawl", description: "Extraction, transformation, profiling, validation, and orchestration on one layer removes the cost of stitching separate tools." },
    { icon: "⊘", title: "Reconciliation you can defend", description: "A full source-to-target audit trail means every number at the target can be traced back to what was extracted and transformed." },
    { icon: "↻", title: "Repeatable, not reinvented", description: "Reusable rules and templates make the next pipeline faster than the last, instead of starting from scratch each time." },
    { icon: "◈", title: "Works across your whole estate", description: "SAP and non-SAP, on-prem and cloud, databases and files — one engine instead of a different tool per source." },
  ],
};

export const ETL_USE_CASES: UseCasesProps = {
  badge: "USE CASES",
  title: "Where teams run deKorvai ",
  titleHighlight: "pipelines",
  items: [
    { tag: "Migration", title: "Data migration & loading", description: "Extract, transform, validate, and load legacy data into a target system — including programs like an SAP S/4HANA move — with clean records at cutover." },
    { tag: "Consolidation", title: "System consolidation", description: "Extract from multiple systems and load into one target, with transformation and validation resolving conflicts along the way." },
    { tag: "Sync", title: "Incremental data sync", description: "Keep a target in step with a source using delta extraction, moving only what changed since the last run." },
    { tag: "Cloud", title: "Loading to cloud & warehouses", description: "Move data into cloud platforms and warehouses, with the option to validate before load or transform in place." },
    { tag: "Integration", title: "Cross-system data movement", description: "Move data between SAP, non-SAP, files, and SaaS through one engine instead of a tool per connection." },
    { tag: "Test Data", title: "Feeding non-production", description: "Extract and load data into non-production environments as part of the platform's test-data workflows." },
  ],
};

export const ETL_SHIFT: ShiftProps = {
  badge: "THE SHIFT",
  title: "From load-then-fix to ",
  titleHighlight: "validate-then-load",
  traditionalTitle: "Traditional ETL",
  traditional: [
    "Load data, then discover the problems",
    "Separate tools for extract, profile, and validate",
    "Hand-coded transformations, rebuilt each time",
    "Errors surface downstream, at reports or go-live",
    "No trail from source to target",
    "Full reloads even for small changes",
  ],
  withTitle: "With deKorvai",
  withDekorvai: [
    "Validate before load — bad records never land",
    "Extract, profile, transform, validate on one layer",
    "Reusable transformation functions",
    "Issues caught in the pipeline, before the target",
    "Full source-to-target audit trail",
    "Incremental loads move only what changed",
  ],
};

export const ETL_ARCHITECTURE: ArchitectureProps = {
  badge: "PLATFORM ARCHITECTURE",
  title: "The ETL engine inside ",
  titleHighlight: "deKorvai",
  subtitle:
    "The ETL Engine is one component of the deKorvai platform, working alongside the DQ Engine, Scrambler, and agentic AI (Agent Master) — connecting to your systems through standard protocols.",
  blocks: [
    { label: "Platform Components", items: "ETL Engine · DQ Engine · Scrambler · Agent Master · MCP" },
    { label: "Runtime", items: "Docker · Postgres · MongoDB" },
    { label: "Connectivity", items: "JDBC · RFC / API · HTTPS · REST" },
    { label: "Sources & Targets", items: "RDBMS · SAP · SaaS · CSV / JSON / Parquet / Excel" },
  ],
  integrations: "SAP · SAP HANA · Oracle · Microsoft · Snowflake · AWS · Google Cloud · Salesforce · PostgreSQL",
  relatedLinks: [
    { href: "/platform/data-quality-profiling", label: "Data Quality" },
    { href: "/platform/data-masking", label: "Data Masking" },
    { href: "/platform/agentic-ai", label: "Agentic AI" },
  ],
};

export const ETL_PROOF: ProofProps = {
  badge: "PROOF",
  title: "50,000+ records extracted, validated & loaded — ",
  titleHighlight: "95% first-pass",
  description:
    "A full extract-profile-transform-validate-load pipeline into target staging tables, with pre-load validation catching errors before they reached the target. (Delivered on an SAP migration, using the same engine that runs on any system.)",
  stats: [
    { value: "100%", label: "Data Accuracy at Load" },
    { value: "70%", label: "More Efficient" },
    { value: "95%+", label: "First-Pass Rate" },
    { value: "3x", label: "Faster Lead Time" },
  ],
  ctaText: "Read the full pipeline walkthrough →",
  ctaHref: "/blog/bp-vendor-migration-s4hana-dq-differentiator",
};

export const ETL_CONNECTORS: ConnectorsProps = {
  badge: "CONNECTIVITY",
  title: "Extract from and load to any system",
  subtitle: "SAP and non-SAP, on-prem and cloud — connected through one engine.",
  integrationsLink: { href: "/platform/integrations", text: "See all integrations →" },
  connectors: [
    "SAP ECC", "SAP HANA", "Oracle", "SQL Server", "PostgreSQL",
    "Snowflake", "AWS", "Google Cloud", "Salesforce",
    "CSV / JSON / Parquet / Excel", "REST / API",
  ],
};

export const ETL_FAQ: FAQProps = {
  title: "ETL,",
  titleHighlight: "answered",
  items: [
    { question: "What is ETL?", answer: "ETL stands for Extract, Transform, Load — the process of pulling data from source systems, reshaping it to fit a target model, and loading it into the target. deKorvai adds profiling and validation inside the pipeline, so quality issues are caught before load." },
    { question: "What's the difference between ETL and ELT?", answer: "ETL transforms data before loading it into the target; ELT loads raw data first and transforms it inside the warehouse. deKorvai supports both, with validate-before-load as the default for migrations and regulated data." },
    { question: "What is the difference between a full load and an incremental load?", answer: "A full load reprocesses the entire dataset; an incremental (delta) load moves only records that changed since the last run — faster and lighter for large or frequently updated sources." },
    { question: "Does deKorvai validate data during the pipeline?", answer: "Yes. Profiling and pre-load validation are built in. Records that fail validation are routed for correction instead of being loaded, so target systems stay clean." },
    { question: "Can deKorvai extract from non-SAP systems?", answer: "Yes. It connects to Oracle, SQL Server, PostgreSQL, Snowflake, Salesforce, files, and APIs — extracting from and loading to SAP and non-SAP systems through one engine." },
  ],
};

export const ETL_RELATED: RelatedPagesProps = {
  platformTitle: "Part of one unified platform",
  platformSubtitle: "ETL is one of four capabilities in deKorvai — explore the rest.",
  platformPages: [
    { href: "/platform/data-quality-profiling", title: "Data Quality Profiling", description: "Rules, scorecards & anomaly detection" },
    { href: "/platform/data-masking", title: "Data Masking (Scrambling)", description: "Mask data in-pipeline for test" },
    { href: "/platform/agentic-ai", title: "Agentic AI", description: "Agents that detect & fix issues" },
  ],
};

export const ETL_CTA: CTAProps = {
  title: "Stop unwinding bad data after the load",
  description:
    "See how deKorvai extracts, transforms, validates, and loads — and what validate-before-load changes for your migrations and integrations.",
  buttonText: "Book a Demo",
  subtext: "A working session on your data pipelines",
};
