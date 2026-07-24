/* ------------------------------------------------------------------ */
/*  Agentic AI Page — Content                                         */
/* ------------------------------------------------------------------ */

import type {
  AnswerFirstProps,
  ProblemsProps,
  FeaturesProps,
  WorkflowsProps,
  BenefitsProps,
  UseCasesProps,
  ShiftProps,
  ArchitectureProps,
  FAQProps,
  RelatedPagesProps,
  CTAProps,
} from "@/components/platform-sections";

export const AGENTIC_META = {
  title: "Agentic AI for Data Management & Data Quality | deKorvai",
  description:
    "deKorvai's Agentic AI auto-detects data issues, suggests transformations, and generates data quality rules from natural language — with a Co-Pilot and smart decision engine built into the platform.",
};

/* -- Hero ---------------------------------------------------------- */
export const AGENTIC_HERO = {
  kick: "Platform · Agentic AI",
  badge: "Built into the deKorvai platform",
  title: "Agentic AI That Works Inside ",
  titleHighlight: "Your Data Pipeline",
  subtitle:
    "deKorvai's Agentic AI doesn't sit in a separate chat window — it works where your data lives. It auto-detects issues, suggests transformations, and generates data quality rules from a plain-language prompt, with a Co-Pilot and smart decision engine built into the platform.",
  rating: "Agentic AI now shipping in the deKorvai platform",
  chatMessages: [
    { role: "you" as const, text: "Flag any customer record where the email is missing or malformed, and standardize country codes to ISO." },
    { role: "ai" as const, text: "Generated 2 rules: email_valid and country_iso. Preview: 1,204 emails fail, 318 country values will standardize (DE→DE, Germany→DE). Approve to add to the rule library?" },
    { role: "you" as const, text: "Approve." },
    { role: "ai" as const, text: "Rules added and versioned. Running across connected sources — I'll report violations to the scorecard." },
  ],
};

/* -- Answer First -------------------------------------------------- */
export const AGENTIC_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "Agentic AI in data management means AI that doesn't just answer questions — it takes actions within a workflow: detecting issues, proposing changes, and making routine decisions under human oversight. deKorvai builds this into the platform rather than bolting on a chatbot.",
    "Today it auto-detects data issues, suggests transformations, generates data quality rules from natural language, and makes smart decisions across the pipeline — through a Co-Pilot and the Agent Master, with every action approvable and audit-logged.",
  ],
};

/* -- Problems ------------------------------------------------------ */
export const AGENTIC_PROBLEMS: ProblemsProps = {
  badge: "THE PROBLEM",
  title: "A chatbot beside your data isn't the same as ",
  titleHighlight: "AI inside it",
  subtitle:
    'Most "AI for data" means a separate assistant you copy-paste into. The work that actually slows teams down — writing rules, mapping fields, spotting issues — still happens by hand, in a different tool.',
  items: [
    { number: "01", title: "Writing rules is expert, manual work", description: "Defining data quality and transformation rules needs someone who knows both the business and the syntax — a bottleneck that queues behind every data engineer." },
    { number: "02", title: "Issues are found by whoever happens to look", description: "Without something continuously watching, anomalies and bad records surface only when a person stumbles on them — usually downstream." },
    { number: "03", title: "Detached AI can't act", description: "A chatbot in a separate window can suggest ideas, but it can't apply a rule, run a check, or touch the pipeline where the work needs to happen." },
    { number: "04", title: "Unchecked automation isn't trusted", description: "Enterprises can't hand data decisions to a black box. AI has to propose, show its work, and wait for approval — with an audit trail." },
  ],
};

/* -- Features (What It Does Today) --------------------------------- */
export const AGENTIC_FEATURES: FeaturesProps = {
  badge: "WHAT IT DOES TODAY",
  title: "Agentic capabilities ",
  titleHighlight: "shipping now",
  subtitle: "Every capability below is live in the platform today.",
  items: [
    { number: "01", title: "Auto-detect data issues", description: "AI agents scan data and surface duplicates, gaps, and anomalies automatically — without waiting for someone to run a check." },
    { number: "02", title: "Suggest transformations", description: "The AI proposes transformation and mapping steps as you build a pipeline, so you start from a suggestion instead of a blank rule." },
    { number: "03", title: "Generate DQ rules from natural language", description: "Describe a check in plain language and deKorvai writes the data quality rule, ready to preview and approve." },
    { number: "04", title: "Smart decision engine", description: "The AI makes routine decisions across the pipeline — routing, branching, and next-step choices — inside the workflow." },
    { number: "05", title: "Co-Pilot", description: "An AI Co-Pilot assists with data tasks conversationally, turning intent into rules, checks, and actions in the platform." },
    { number: "06", title: "Human approval & audit", description: "Agent actions are proposed for approval and recorded — so AI accelerates the work without removing human control." },
  ],
};

/* -- How It Works -------------------------------------------------- */
export const AGENTIC_WORKFLOWS: WorkflowsProps = {
  badge: "HOW IT WORKS",
  title: "Propose, approve, act — with a record of ",
  titleHighlight: "every step",
  subtitle: "Agentic doesn't mean unattended. deKorvai's agents work in a loop that keeps a human in control.",
  tabs: [
    {
      label: "The Agentic Loop",
      steps: [
        { step: "1", title: "Understand", description: "State intent in natural language, or let agents scan data and flag what needs attention." },
        { step: "2", title: "Propose", description: "The AI generates the rule, transformation, or fix and previews exactly what it will do." },
        { step: "3", title: "Approve", description: "A human reviews and approves; nothing changes data without sign-off." },
        { step: "4", title: "Act & log", description: "The approved action runs across connected systems and is versioned in the audit trail." },
      ],
      outcome: "AI that accelerates data work — with the control and audit trail enterprises require.",
    },
  ],
};

/* -- Co-Pilot & Agents --------------------------------------------- */
export const AGENTIC_AGENTS = {
  badge: "THE AGENTS",
  title: "Co-Pilot and ",
  titleHighlight: "Agent Master",
  items: [
    {
      title: "Co-Pilot",
      description:
        "The conversational assistant built into deKorvai. Ask it to profile a source, write a data quality rule, or suggest a transformation, and it turns your intent into a previewed, approvable action inside the platform — not a copy-paste snippet in a separate window.",
    },
    {
      title: "Agent Master",
      description:
        "The component that runs deKorvai's agents across the pipeline — coordinating detection, suggestions, and smart decisions, and connecting to models through MCP (Model Context Protocol). It's how agentic behavior stays consistent across data quality, ETL, and masking.",
    },
  ],
};

/* -- Benefits ------------------------------------------------------ */
export const AGENTIC_BENEFITS: BenefitsProps = {
  badge: "BUSINESS BENEFITS",
  title: "What Agentic AI changes for ",
  titleHighlight: "data teams",
  items: [
    { icon: "⚡", title: "Rules in minutes, not tickets", description: "Natural-language rule generation lets analysts create checks themselves, instead of queuing behind a data engineer." },
    { icon: "◉", title: "Issues surfaced earlier", description: "Agents watch continuously and auto-detect problems, so they're caught before they reach reports or a target system." },
    { icon: "↻", title: "Less repetitive pipeline work", description: "Suggested transformations and smart decisions remove the manual, repetitive steps that slow every build." },
    { icon: "⊘", title: "Automation you can trust", description: "Every agent action is proposed, approved, and logged — the control and audit trail enterprises require." },
    { icon: "◇", title: "One AI across every capability", description: "The same agentic layer works across data quality, ETL, and masking — not a different assistant per tool." },
    { icon: "↑", title: "Skills go further", description: "Business users express intent in plain language; the AI handles the syntax, widening who can do data work." },
  ],
};

/* -- Use Cases ----------------------------------------------------- */
export const AGENTIC_USE_CASES: UseCasesProps = {
  badge: "USE CASES",
  title: "Where Agentic AI ",
  titleHighlight: "helps",
  items: [
    { tag: "Rules", title: "Natural-language rule authoring", description: "Analysts describe data quality checks in plain language and the Co-Pilot writes the rules for approval." },
    { tag: "Detection", title: "Continuous issue detection", description: "Agents auto-detect duplicates, gaps, and anomalies across connected data, continuously." },
    { tag: "Pipelines", title: "Guided transformations", description: "The AI suggests transformation and mapping steps while building ETL pipelines — including for programs like an SAP S/4HANA move." },
    { tag: "Decisions", title: "Smart pipeline decisions", description: "The decision engine handles routine routing and branching choices inside the workflow." },
    { tag: "Governance", title: "Approvable, audited automation", description: "Every agent action is previewed, approved, and logged for governance and audit." },
    { tag: "Enablement", title: "Business-user self-service", description: "Non-engineers express intent conversationally and let the Co-Pilot handle the technical detail." },
  ],
};

/* -- Roadmap ------------------------------------------------------- */
export const AGENTIC_ROADMAP = {
  badge: "ON THE ROADMAP",
  title: "Where deKorvai's Agentic AI is ",
  titleHighlight: "heading",
  subtitle: "Planned capabilities — shared for direction, not yet shipping.",
  items: [
    { title: "Automated remediation suggestions", description: "Agents will propose specific fixes for detected issues, not just flag them — still with human approval." },
    { title: "Smart anomaly detection with ML", description: "Machine-learning models to detect subtler anomalies beyond rule-based thresholds." },
    { title: "AI-assisted data mapping", description: "The AI will propose source-to-target field mappings during migration and integration work." },
  ],
};

/* -- Shift --------------------------------------------------------- */
export const AGENTIC_SHIFT: ShiftProps = {
  badge: "THE SHIFT",
  title: "From AI beside your data to ",
  titleHighlight: "AI inside it",
  traditionalTitle: "Bolt-on AI assistant",
  traditional: [
    "Lives in a separate chat window",
    "Suggests, but can't act on your data",
    "Rules and mappings still written by hand",
    "Issues found only when someone looks",
    "No record of what the AI advised or did",
  ],
  withTitle: "With deKorvai's Agentic AI",
  withDekorvai: [
    "Works inside the platform where data lives",
    "Proposes and — once approved — acts",
    "Generates rules and transformations from intent",
    "Agents auto-detect issues continuously",
    "Every action approved and audit-logged",
  ],
};

/* -- Architecture -------------------------------------------------- */
export const AGENTIC_ARCHITECTURE: ArchitectureProps = {
  badge: "PLATFORM ARCHITECTURE",
  title: "The agentic layer inside ",
  titleHighlight: "deKorvai",
  subtitle:
    "Agentic AI runs through the Agent Master and MCP, connecting the platform to a language model while the DQ Engine, ETL Engine, and Scrambler do the data work — one platform, one audit trail.",
  blocks: [
    { label: "Agentic Components", items: "Agent Master · Co-Pilot · MCP (Model Context Protocol)" },
    { label: "Works With", items: "DQ Engine · ETL Engine · Scrambler" },
    { label: "Model", items: "LLM connected via MCP" },
    { label: "Runtime", items: "Docker · Postgres · MongoDB" },
  ],
  integrations: "The agentic layer works across Data Quality, ETL, and Data Masking — connecting to systems through JDBC, RFC/API, HTTPS, and REST",
  relatedLinks: [
    { href: "/platform/data-quality-profiling", label: "Data Quality" },
    { href: "/platform/etl", label: "ETL" },
    { href: "/platform/data-masking", label: "Data Masking" },
  ],
};

/* -- FAQ ----------------------------------------------------------- */
export const AGENTIC_FAQ: FAQProps = {
  title: "Agentic AI,",
  titleHighlight: "answered",
  items: [
    { question: "What is agentic AI in data management?", answer: "Agentic AI is AI that takes actions within a workflow — detecting issues, proposing changes, and making routine decisions — rather than only answering questions. In deKorvai it's built into the platform, so it acts on your data under human approval instead of advising from a separate chat window." },
    { question: "What can deKorvai's agentic AI do today?", answer: "It auto-detects data issues, suggests transformations, generates data quality rules from natural language, and makes smart decisions across the pipeline — through a Co-Pilot and the Agent Master, with every action approvable and logged." },
    { question: "Does the AI change data on its own?", answer: "No. Agent actions are proposed and previewed; a human approves before anything runs, and every action is recorded in the audit trail." },
    { question: "Can I create data quality rules without coding?", answer: "Yes. Describe the check in plain language and the Co-Pilot generates the rule for you to preview and approve — no scripting required." },
    { question: "Does agentic AI work outside SAP?", answer: "Yes. The agentic layer works across any connected system — Oracle, SQL Server, PostgreSQL, Snowflake, Salesforce, and more — not only SAP." },
  ],
};

/* -- Related ------------------------------------------------------- */
export const AGENTIC_RELATED: RelatedPagesProps = {
  platformTitle: "Part of one unified platform",
  platformSubtitle: "Agentic AI works across all of deKorvai — explore the capabilities it powers.",
  platformPages: [
    { href: "/platform/data-quality-profiling", title: "Data Quality Profiling", description: "AI-generated rules & scorecards" },
    { href: "/platform/etl", title: "ETL Pipeline Engine", description: "AI-suggested transformations" },
    { href: "/platform/data-masking", title: "Data Masking (Scrambling)", description: "Compliant test data by design" },
  ],
};

/* -- CTA ----------------------------------------------------------- */
export const AGENTIC_CTA: CTAProps = {
  title: "See Agentic AI work inside a real pipeline",
  description:
    "Book a demo and watch the Co-Pilot turn a plain-language request into a previewed, approvable data quality rule.",
  buttonText: "Book a Demo",
  subtext: "A working session on where AI fits your data work",
};
