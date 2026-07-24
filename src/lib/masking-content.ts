/* ------------------------------------------------------------------ */
/*  Data Masking (Scrambling) Page — Content                          */
/* ------------------------------------------------------------------ */

import type {
  PlatformHeroProps,
  AnswerFirstProps,
  StatItem,
  ProblemsProps,
  FeaturesProps,
  FunctionGridProps,
  DimensionsProps,
  WorkflowsProps,
  BenefitsProps,
  UseCasesProps,
  ShiftProps,
  ArchitectureProps,
  QuoteProofProps,
  FAQProps,
  RelatedPagesProps,
  CTAProps,
} from "@/components/platform-sections";

export const MASKING_META = {
  title: "Data Masking Tools & Scrambling Platform | deKorvai",
  description:
    "deKorvai's data masking (scrambling) protects sensitive data in non-production — predefined profiles, referential integrity, field-level control. GDPR, HIPAA & SOX compliant, across SAP and any database.",
};

export const MASKING_HERO: PlatformHeroProps = {
  kick: "Platform · Data Masking (Scrambling)",
  badge: "GDPR · HIPAA · SOX compliant",
  title: "Data Masking That Keeps Test Data ",
  titleHighlight: "Real and Safe",
  subtitle:
    "deKorvai's data masking (scrambling) replaces sensitive production values with realistic, non-identifiable substitutes — so teams can test, develop, and analyze with production-like data that can't expose a real person. Referential integrity preserved, across SAP and any database.",
  rating:
    "Used by Coromandel International and the world's #2 brewer for compliant test environments",
  ledgerTitle: "masking profile · customer master",
  ledgerRows: [
    { label: 'Name:  "Priya Raman"', detail: '→ "Meera Nair"', tag: "MASKED", tagStyle: "bg-violet-500/20 text-violet-300" },
    { label: "IBAN:  NL91 ABNA 0417…", detail: "→ NLââ ââââ ââââ…", tag: "MASKED", tagStyle: "bg-violet-500/20 text-violet-300" },
    { label: "Customer ID (key)  100482", detail: "→ 100482", tag: "KEPT · REF INTEGRITY", tagStyle: "bg-emerald-500/20 text-emerald-300" },
    { label: "Country:  NL", detail: "→ NL", tag: "KEPT · FORMAT", tagStyle: "bg-emerald-500/20 text-emerald-300" },
  ],
};

export const MASKING_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "Data masking — also called data scrambling — replaces sensitive values in a dataset with realistic but fictitious substitutes, so the data stays usable for testing and analytics while the real values can't be recovered. deKorvai masks production data for non-production environments with predefined profiles, field-level control, and test-mode execution.",
    "Crucially, it preserves referential integrity — the same input is masked the same way everywhere, so keys still join and applications still work across systems, on SAP and non-SAP alike.",
  ],
};

export const MASKING_STATS: StatItem[] = [
  { value: "GDPR · HIPAA · SOX", label: "Compliance supported out of the box", source: "documented" },
  { value: "Referential", label: "Integrity preserved across every linked system", source: "documented" },
  { value: "Field-level", label: "Control with predefined profiles & test-mode runs", source: "documented" },
];

export const MASKING_PROBLEMS: ProblemsProps = {
  badge: "THE MASKING PROBLEM",
  title: "Teams need real data to test — and aren't ",
  titleHighlight: "allowed to use it",
  subtitle:
    "Realistic data makes testing, development, and analytics trustworthy. Privacy law makes copying production into non-production a liability. Most teams resolve the tension badly — with fake data that hides bugs, or real data that shouldn't be there.",
  items: [
    { number: "01", title: "Copying production into test breaks the rules", description: "Real customer, employee, and financial data in a sandbox or QA clone is exactly what GDPR, HIPAA, and SOX are designed to prevent." },
    { number: "02", title: "Naive masking breaks the application", description: "Randomize a key or scramble a field inconsistently and joins fail, integrations break, and the test environment stops behaving like production." },
    { number: "03", title: "Fake data hides real bugs", description: "Fully synthetic data misses the edge cases and distributions of real data, so defects slip through to production undetected." },
    { number: "04", title: "Masking one system isn't enough", description: "Data flows across systems. Mask a customer differently in each one and cross-system processes fall apart — the data has to be masked consistently everywhere." },
  ],
};

export const MASKING_FEATURES: FeaturesProps = {
  badge: "KEY FEATURES",
  title: "Masking that stays realistic, safe, ",
  titleHighlight: "and usable",
  subtitle: "Every capability below is built to protect sensitive data without breaking the systems that depend on it.",
  items: [
    { number: "01", title: "Preserves functional integrity", description: "Masked data keeps the shape and behavior of the original, so applications and processes run exactly as they would in production." },
    { number: "02", title: "Preserves referential integrity", description: "The same value is masked the same way everywhere, so keys still join and relationships hold across tables and systems." },
    { number: "03", title: "Predefined masking profiles", description: "Ready-made profiles for common sensitive objects get teams masking quickly without building every rule from scratch." },
    { number: "04", title: "Rule-driven masking", description: "Define exactly which fields are masked and how, with rules that apply consistently across datasets and environments." },
    { number: "05", title: "Non-deterministic option", description: "Non-deterministic masking makes it infeasible to reverse-engineer originals from masked output where that's required." },
    { number: "06", title: "Field-level control", description: "Choose precisely which fields to mask and which to keep, down to the individual column." },
    { number: "07", title: "Test-mode execution", description: "Dry-run a masking job to preview results before committing, so you validate the outcome before touching data." },
    { number: "08", title: "Parallel runs & scalable", description: "Run masking jobs in parallel and scale to large datasets, so masking a full environment doesn't become the bottleneck." },
    { number: "09", title: "Cross-system consistency", description: "Apply the same masking logic across multiple systems so data stays connected and usable end to end." },
  ],
};

export const MASKING_FUNCTIONS: FunctionGridProps = {
  badge: "SCRAMBLING FUNCTIONS",
  title: "The masking techniques ",
  titleHighlight: "deKorvai applies",
  subtitle: "A documented set of scrambling functions, applied per field under your rules.",
  items: [
    { title: "Scramble", description: "Replace values with realistic substitutes." },
    { title: "Shuffle", description: "Reorder values within a column to break the link to the row." },
    { title: "Reverse", description: "Reverse values to obscure the original." },
    { title: "Constant", description: "Replace with a fixed constant value." },
    { title: "Constant Mapping", description: "Map values consistently to preserve relationships." },
    { title: "Character Set", description: "Mask using a defined character set to keep format." },
    { title: "Bank Scrambling", description: "Purpose-built masking for bank & IBAN details." },
    { title: "+ Rule-driven", description: "Combine functions per field under masking rules." },
  ],
};

export const MASKING_VS_ALTERNATIVES: DimensionsProps = {
  badge: "KNOW THE DIFFERENCE",
  title: "Masking vs ",
  titleHighlight: "the alternatives",
  subtitle: "",
  columns: ["Approach", "What it does", "Best when"],
  items: [
    { name: "Data masking (scrambling)", question: "Replaces real values with realistic, non-reversible substitutes, keeping format & referential integrity", measurement: "You need production-like data for test/dev/analytics without exposing real records" },
    { name: "Tokenization", question: "Swaps values for tokens mapped back via a secure vault", measurement: "You must reverse to the original later (e.g. payment processing)" },
    { name: "Encryption", question: "Scrambles data mathematically; reversible with a key", measurement: "Protecting data at rest or in transit, not for realistic test data" },
    { name: "Synthetic data", question: "Generates entirely artificial records", measurement: "No real data available, but may miss real-world edge cases" },
  ],
};

export const MASKING_WORKFLOWS: WorkflowsProps = {
  badge: "HOW IT WORKS",
  title: "Select → Rule → Test → ",
  titleHighlight: "Mask",
  subtitle: "A repeatable masking workflow that keeps data realistic and consistent.",
  tabs: [
    {
      label: "Select → Rule → Test → Mask",
      steps: [
        { step: "1", title: "Select fields", description: "Pick the sensitive fields to mask with field-level control, or start from a predefined profile." },
        { step: "2", title: "Choose rules", description: "Assign scrambling functions per field and set consistency rules for referential integrity." },
        { step: "3", title: "Test mode", description: "Dry-run to preview masked output and confirm applications still behave before committing." },
        { step: "4", title: "Mask at scale", description: "Run in parallel across systems; the same values mask identically everywhere, keeping data connected." },
      ],
      outcome: "Realistic, compliant test data — repeatable, testable, and consistent across every system.",
    },
  ],
};

export const MASKING_BENEFITS: BenefitsProps = {
  badge: "BUSINESS BENEFITS",
  title: "What safe test data is ",
  titleHighlight: "worth",
  items: [
    { icon: "⊘", title: "Compliance without slowing teams", description: "Meet GDPR, HIPAA, and SOX for non-production data while teams keep working with realistic data, not blockers." },
    { icon: "✓", title: "Test that actually catches bugs", description: "Production-like masked data surfaces the edge cases synthetic data misses, so defects are caught before release." },
    { icon: "◈", title: "Safe to share more widely", description: "Masked environments can be opened to more teams, partners, and offshore resources without expanding exposure of real data." },
    { icon: "↔", title: "Systems keep working", description: "Referential integrity means masked environments behave like production — joins hold, integrations run, processes complete." },
    { icon: "⚡", title: "Fast to stand up", description: "Predefined profiles and parallel runs get a full masked environment ready without a long custom build." },
    { icon: "◇", title: "One platform, less sprawl", description: "Masking sits alongside data quality and ETL on one platform, so protecting test data isn't yet another tool to license." },
  ],
};

export const MASKING_USE_CASES: UseCasesProps = {
  badge: "USE CASES",
  title: "Where teams mask data with ",
  titleHighlight: "deKorvai",
  items: [
    { tag: "Test & Dev", title: "Compliant test & QA environments", description: "Mask production data for SIT, UAT, sandbox, and QA clones so teams test with realistic data, compliantly." },
    { tag: "PII / PHI", title: "Protecting personal data", description: "Mask customer, vendor, and employee records — names, contact details, and other PII/PHI — before non-production use." },
    { tag: "Financial", title: "Payroll & bank data", description: "Purpose-built scrambling for payroll and bank/IBAN details keeps sensitive financial data safe in lower environments." },
    { tag: "Analytics", title: "Safe data for analytics", description: "Provide masked datasets for analytics and reporting without exposing the underlying real records." },
    { tag: "Offshore / Partners", title: "Sharing with external teams", description: "Give offshore teams and partners masked, production-like data instead of the real thing." },
    { tag: "Migration Sandboxes", title: "Masking for migration clones", description: "Scramble data in sandbox and QA clones used during projects — including programs like an SAP S/4HANA move." },
  ],
};

export const MASKING_SHIFT: ShiftProps = {
  badge: "THE SHIFT",
  title: 'From "fake or forbidden" to ',
  titleHighlight: "realistic and safe",
  traditionalTitle: "The usual trade-off",
  traditional: [
    "Copy production and risk a compliance breach",
    "Or use fake data that hides real bugs",
    "Naive masking breaks keys and integrations",
    "Each system masked differently, if at all",
    "Masking is a manual, one-off scramble",
    "Sensitive data can't leave a small trusted circle",
  ],
  withTitle: "With deKorvai",
  withDekorvai: [
    "Realistic masked data that's compliant by design",
    "Production-like data that still catches edge cases",
    "Referential integrity keeps applications working",
    "Consistent masking across every linked system",
    "Rule-driven, repeatable, testable masking jobs",
    "Masked environments safe to open more widely",
  ],
};

export const MASKING_ARCHITECTURE: ArchitectureProps = {
  badge: "PLATFORM ARCHITECTURE",
  title: "The Scrambler inside ",
  titleHighlight: "deKorvai",
  subtitle:
    "Masking runs through the Scrambler — one component of the deKorvai platform, working alongside the DQ Engine, ETL Engine, and agentic AI (Agent Master), connecting to your systems through standard protocols.",
  blocks: [
    { label: "Platform Components", items: "Scrambler · DQ Engine · ETL Engine · Agent Master · MCP" },
    { label: "Runtime", items: "Docker · Postgres · MongoDB" },
    { label: "Connectivity", items: "JDBC · RFC / API · HTTPS · REST" },
    { label: "Masks Data In", items: "RDBMS · SAP · SaaS · CSV / JSON / Parquet / Excel" },
  ],
  integrations: "SAP · SAP HANA · Oracle · Microsoft · Snowflake · AWS · Google Cloud · Salesforce · PostgreSQL",
  relatedLinks: [
    { href: "/platform/data-quality-profiling", label: "Data Quality" },
    { href: "/platform/etl", label: "ETL" },
    { href: "/platform/agentic-ai", label: "Agentic AI" },
  ],
};

export const MASKING_PROOF: QuoteProofProps = {
  badge: "PROOF",
  title: "Masking sensitive data in production, ",
  titleHighlight: "today",
  subtitle: "Enterprises use deKorvai to scramble SAP and non-SAP applications for compliant test environments.",
  quotes: [
    {
      quote: "Coromandel International uses deKorvai for masking SAP and non-SAP applications, ensuring compliant test environments across the enterprise.",
      company: "Coromandel International",
      role: "Enterprise Data Masking · SAP & non-SAP",
    },
    {
      quote: "The world's #2 brewer uses deKorvai to scramble non-SAP application data, meeting regulatory compliance while keeping test data realistic.",
      company: "World's #2 Brewer",
      role: "Non-SAP Data Scrambling · Regulatory Compliance",
    },
  ],
};

export const MASKING_FAQ: FAQProps = {
  title: "Data masking,",
  titleHighlight: "answered",
  items: [
    { question: "What is data masking?", answer: "Data masking replaces sensitive values in a dataset with realistic but fictitious substitutes, so the data stays usable for testing and analytics while the real values can't be recovered. deKorvai masks production data for non-production with predefined profiles, field-level control, and test-mode execution." },
    { question: "What's the difference between data masking and data scrambling?", answer: 'They refer to the same thing — replacing sensitive data with realistic substitutes. "Scrambling" is common in SAP and enterprise contexts; "masking" is the broader industry term. deKorvai uses both to mean its masking capability.' },
    { question: "What is the difference between tokenization and masking?", answer: "Tokenization swaps values for tokens that can be reversed via a secure vault; masking replaces values with realistic substitutes that aren't meant to be reversed. Masking is the fit for realistic, safe test data." },
    { question: "Does masking keep data usable across systems?", answer: "Yes. deKorvai preserves referential integrity — the same value is masked identically everywhere — so keys still join and applications still work across masked systems." },
    { question: "Is deKorvai's masking compliant with GDPR and HIPAA?", answer: "Yes. Masking supports GDPR, HIPAA, and SOX for non-production data, with field-level control and predefined profiles for common sensitive objects." },
    { question: "Can deKorvai mask non-SAP systems?", answer: "Yes. It masks data in Oracle, SQL Server, PostgreSQL, Snowflake, Salesforce, and any relational database — SAP and non-SAP alike, consistently across systems." },
  ],
};

export const MASKING_RELATED: RelatedPagesProps = {
  platformTitle: "Part of one unified platform",
  platformSubtitle: "Data masking is one of four capabilities in deKorvai — explore the rest.",
  platformPages: [
    { href: "/platform/data-quality-profiling", title: "Data Quality Profiling", description: "Rules, scorecards & anomaly detection" },
    { href: "/platform/etl", title: "ETL Pipeline Engine", description: "Extract, transform & validate before load" },
    { href: "/platform/agentic-ai", title: "Agentic AI", description: "Agents that detect & fix issues" },
  ],
};

export const MASKING_CTA: CTAProps = {
  title: "Give teams real data they're allowed to use",
  description:
    "See how deKorvai masks sensitive data while keeping it realistic, connected, and compliant — across your environments.",
  buttonText: "Book a Demo",
  subtext: "A working session on your test-data and masking needs",
};
