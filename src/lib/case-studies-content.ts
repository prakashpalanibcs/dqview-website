/**
 * Case studies: the /case-studies listing and one page per case study.
 *
 * Source: deKorvai_-_Case_Study.pptx, through the approved page designs in
 * content/new one../ (dekorvai_case_studies.html and the three
 * dekorvai_case_study_*.html files). Every fact, number and sentence below is
 * copied from those pages; clients stay anonymised exactly as in the deck.
 */

export type CaseStudyFilter = "dq" | "mask" | "orch";

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyStep {
  title: string;
  text: string;
}

export interface CaseStudyFaqItem {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  filter: CaseStudyFilter;
  /** Last breadcrumb item, also the BreadcrumbList name. */
  breadcrumb: string;
  solutionTag: string;
  industryTag: string;
  title: string;
  lede: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  /** Headline number on the listing / related card image. */
  metricValue: string;
  metricLabel: string;
  cardSummary: string;
  results: CaseStudyStat[];
  glance: string;
  clientAbout: string;
  industry: string;
  solution: string;
  objective: string;
  challenges: string[];
  solutionModule: string;
  solutionPoints: string[];
  howTitle: string;
  steps: CaseStudyStep[];
  resultsText: string;
  faq: CaseStudyFaqItem[];
}

export const CASE_STUDIES_SITE = "https://www.dekorvai.com";

/** The pages went live on this date; used as datePublished in the Article JSON-LD. */
export const CASE_STUDIES_PUBLISHED = "2026-11-23";

export const CASE_STUDY_IMAGE_SIZE = { width: 600, height: 400 } as const;

export const CASE_STUDIES_LISTING = {
  metaTitle: "deKorvai Case Studies: SAP Data Migration, Data Quality and Masking",
  metaDescription: "How enterprises use deKorvai to reconcile master data, mask sensitive data across systems and orchestrate S/4HANA migration cutover. Three case studies with results.",
  breadcrumb: "Case Studies",
  title: "Case studies",
  lede: "How enterprises use deKorvai to reconcile business-critical master data, protect sensitive data across systems, and orchestrate S/4HANA migration cutover.",
  primaryCta: "Talk to an expert",
  secondaryCta: "Browse the case studies",
  filterGroupLabel: "Filter case studies",
  filters: [
    { key: "all", label: "All" },
    { key: "dq", label: "Data quality and reconciliation" },
    { key: "mask", label: "Data masking" },
    { key: "orch", label: "Migration orchestration" },
  ] as { key: CaseStudyFilter | "all"; label: string }[],
  readMore: "Read the case study",
  bandTitle: "See how deKorvai would handle your data program",
  bandText: "Bring a migration, a reconciliation or a test data problem. A working session shows more than any case study.",
  bandCta: "Book a demo",
};

export const CASE_STUDY_PAGE = {
  tocTitle: "On this page",
  toc: [
    { id: "glance", label: "At a glance" },
    { id: "client", label: "About the client" },
    { id: "challenge", label: "The challenge" },
    { id: "solution", label: "The solution" },
    { id: "how", label: "How it works" },
    { id: "results", label: "Results" },
    { id: "faq", label: "Questions" },
  ],
  glanceLabel: "At a glance",
  clientTitle: "About the client",
  factLabels: { industry: "Industry", solution: "Solution", objective: "Objective" },
  challengeTitle: "The challenge",
  solutionTitle: "The solution",
  resultsTitle: "Results",
  resultsAriaLabel: "Key results",
  faqTitle: "Questions about this case study",
  share: "Share this case study",
  shareAriaLabel: "Share on LinkedIn",
  relatedTitle: "More case studies",
  bandTitle: "Facing a similar data challenge?",
  bandText: "See how deKorvai would handle it on your own data, in a working session with our team.",
  bandCta: "Book a demo",
};

export const DEMO_HREF = "/contact#book-a-demo";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ecc-mdg-master-data-reconciliation",
    filter: "dq",
    breadcrumb: "Microscopy and imaging leader",
    solutionTag: "Data quality and reconciliation",
    industryTag: "Life sciences and imaging",
    title: "From Excel Sheets to ~20 Million Reconciled Master Records",
    lede: "A global microscopy and imaging leader moved ECC to MDG master data reconciliation out of manual Excel and onto 200+ rule-based checks.",
    metaTitle: "From Excel Sheets to ~20 Million Reconciled Master Records | deKorvai",
    metaDescription: "200+ validation checks across ~750 columns, with three report gates before data moved downstream. A global leader in microscopy.",
    image: "/images/case-studies/ecc-mdg-master-data-reconciliation.jpg",
    metricValue: "~20M",
    metricLabel: "master records reconciled",
    cardSummary: "200+ validation checks across ~750 columns, with three report gates before data moved downstream.",
    results: [
      { value: "200+", label: "Validation and business-rule checks" },
      { value: "~750", label: "Columns validated" },
      { value: "~20 million", label: "Master records reconciled" },
      { value: "3 gates", label: "Validation, pre-load and post-load" },
    ],
    glance: "A global leader in microscopy, imaging and measurement solutions needed to transform, reconcile and migrate business-critical material and product master data between SAP ECC and SAP MDG. deKorvai replaced manual Excel checks with 200+ validation and business-rule checks across around 750 columns, reconciled around 20 million master records, and placed three report gates (validation, pre-load and post-load) in front of every downstream step.",
    clientAbout: "A global leader in microscopy, imaging and measurement solutions, combining over a century of optical expertise with digital innovation across life science and industrial applications.",
    industry: "Life sciences and imaging",
    solution: "deKorvai Data Quality and Reconciliation",
    objective: "Transform, reconcile and migrate business-critical material and product master data between ECC and MDG, validating completeness and integrity before every downstream step.",
    challenges: [
      "Millions of master records were handled manually in Excel, with per-sheet limits and a high risk of human error.",
      "Business-critical material and product master data had to be reconciled between the ECC and MDG systems.",
      "Hidden data integrity and quality issues were surfacing late, at simulation and migration.",
    ],
    solutionModule: "deKorvai Data Quality and Reconciliation",
    solutionPoints: [
      "200+ mandatory, lookup and business-rule validation checks across 750 columns.",
      "Reconciliation of ECC and MDG to identify new-data creation, extension in associated tables, and left-out MDG updates.",
      "Data validation reports, so the business verifies and approves the checks and rules applied.",
      "Data pre-load reports, a second-level check on data before versus after reconciliation.",
      "Post-load reports, a final quality gate showing the load status of reconciled data.",
    ],
    howTitle: "Three gates before data moves on",
    steps: [
      { title: "Validation report", text: "The business verifies and approves the checks and rules applied." },
      { title: "Pre-load report", text: "A second-level check comparing data before and after reconciliation." },
      { title: "Post-load report", text: "A final quality gate showing the load status of reconciled data." },
    ],
    resultsText: "The program moved from manual Excel handling to rule-based validation at scale: 200+ checks across around 750 columns, applied to around 20 million master records reconciled between ECC and MDG. Each of the three report gates gives the business a documented checkpoint before data moves on, so integrity and quality issues are examined at the gate rather than discovered at simulation or migration.",
    faq: [
      { question: "What was reconciled between ECC and MDG?", answer: "Business-critical material and product master data. The reconciliation identified new-data creation, extension in associated tables, and MDG updates that had been left out." },
      { question: "How many validation checks were applied?", answer: "More than 200 mandatory, lookup and business-rule checks, across around 750 columns of master data." },
      { question: "What are the three report gates?", answer: "A data validation report, where the business approves the checks and rules applied; a pre-load report comparing data before and after reconciliation; and a post-load report showing the load status of reconciled data." },
      { question: "How much data was involved?", answer: "Around 20 million master records were reconciled, data that had previously been handled manually in Excel." },
    ],
  },
  {
    slug: "non-sap-data-masking-global-brewer",
    filter: "mask",
    breadcrumb: "Global brewing leader",
    solutionTag: "Data masking (scrambling)",
    industryTag: "Food and beverage",
    title: "Masking Three Non-SAP Systems Without Breaking the Link to SAP",
    lede: "A global brewing leader gave developers, testers and analysts production-like data, refreshed twice a year since go-live.",
    metaTitle: "Masking Three Non-SAP Systems Without Breaking the Link to SAP | deKorvai",
    metaDescription: "Production-like data for developers, testers and analysts, live in production and refreshed twice a year.",
    image: "/images/case-studies/non-sap-data-masking-global-brewer.jpg",
    metricValue: "3",
    metricLabel: "non-SAP systems masked",
    cardSummary: "Production-like data for developers, testers and analysts, live in production and refreshed twice a year.",
    results: [
      { value: "3", label: "Non-SAP systems masked" },
      { value: "Intact", label: "Cross-system data integrity" },
      { value: "Compliant", label: "Regulatory requirements met" },
      { value: "2x a year", label: "Data refresh since go-live" },
    ],
    glance: "A global brewing leader present in 190+ countries wanted to use production data safely for analysis and testing. deKorvai's rule-driven scrambling engine masked sensitive data in three non-SAP systems while preserving referential integrity with operational SAP systems, met applicable regulatory requirements, and has been live in production with data refreshed twice a year since go-live.",
    clientAbout: "A global brewing leader with a presence across 190+ countries, combining a rich brewing heritage with a strong focus on quality and innovation.",
    industry: "Food and beverage",
    solution: "deKorvai Data Masking (Scrambling)",
    objective: "Enable safe use of production data for analysis and testing by masking sensitive information, maintaining data sanctity and integrity in non-production regions while ensuring compliance with applicable regulations.",
    challenges: [
      "Data created explicitly for testing may not surface all the data scenarios, and the underlying actionables, that analytics requires.",
      "Sensitive data sat in three non-SAP systems that hold referential integrity with operational SAP systems.",
      "Cross-system data integrity and connectivity had to stay intact in non-production regions.",
    ],
    solutionModule: "deKorvai Data Masking (Scrambling)",
    solutionPoints: [
      "A rule-driven, compliance-aligned scrambling engine with standard masking functions.",
      "Sensitive data masked across systems while preserving referential integrity with operational SAP systems.",
      "Clear, downloadable logs detailing each execution and the data elements affected.",
      "Realistic business scenarios retained for developers, testers and data analysts.",
      "Live in production, with data refreshed twice a year.",
    ],
    howTitle: "What each refresh delivers",
    steps: [
      { title: "Mask", text: "Sensitive data in the three non-SAP systems is scrambled by rule." },
      { title: "Preserve", text: "Referential integrity with operational SAP systems stays intact." },
      { title: "Log", text: "Downloadable logs record the execution and the data elements affected." },
    ],
    resultsText: "Developers, testers and data analysts work with realistic, production-like scenarios instead of data built only for testing, while sensitive values stay protected. Referential integrity with the operational SAP systems is preserved, regulatory requirements are met, and the setup has run in production with a data refresh twice a year since go-live.",
    faq: [
      { question: "Why not just use data created for testing?", answer: "Because data created explicitly for testing may not surface all the scenarios, and the underlying actionables, that analysis and testing need. Masked production data keeps those scenarios while protecting sensitive values." },
      { question: "How was integrity with SAP preserved?", answer: "Sensitive data was masked across the three non-SAP systems while preserving referential integrity with the operational SAP systems, so cross-system connectivity stays intact in non-production regions." },
      { question: "What evidence does the masking produce?", answer: "Clear, downloadable logs with details of each execution and the data elements affected." },
      { question: "Is it still running?", answer: "Yes. It is live in production, with a data refresh twice a year since go-live." },
    ],
  },
  {
    slug: "s4hana-migration-cutover-orchestration",
    filter: "orch",
    breadcrumb: "Global dairy company",
    solutionTag: "Migration and cutover orchestration",
    industryTag: "Food and beverage",
    title: "107 Migration Objects, One Cutover Workflow",
    lede: "A global dairy company ran its S/4HANA migration from data preparation to verification in a single orchestrated workflow, with approval gates and a full audit trail.",
    metaTitle: "107 Migration Objects, One Cutover Workflow | deKorvai",
    metaDescription: "Data preparation through verification in one workflow, with approval gates and a full audit trail. A leading global dairy company with over 150 years of heritage.",
    image: "/images/case-studies/s4hana-migration-cutover-orchestration.jpg",
    metricValue: "107",
    metricLabel: "migration objects end to end",
    cardSummary: "Data preparation through verification in one workflow, with approval gates and a full audit trail.",
    results: [
      { value: "107", label: "Objects migrated end to end" },
      { value: "30", label: "Countries in operation" },
      { value: "2 gates", label: "Pre-load approval and post-load" },
      { value: "Audit trail", label: "Approver and decision logged" },
    ],
    glance: "A leading global dairy company with 150+ years of heritage needed to orchestrate the Migration Cockpit (DMC) and cutover steps of its S/4HANA migration in one workflow, with minimal downtime. deKorvai sequenced and automated rule-based, manual and system-level activities for all 107 migration objects, from data preparation and mapping through simulation, migration and verification, with URL-based approvals and an audit trail of every decision.",
    clientAbout: "A leading global dairy company with over 150 years of heritage, delivering dairy products, nutrition and ingredients across 100+ markets worldwide.",
    industry: "Food and beverage",
    solution: "deKorvai Migration and Cutover Orchestration",
    objective: "Orchestrate the DMC and cutover steps of the S/4HANA migration in one workflow covering data preparation, mapping, simulation, migration and verification of results, with minimal downtime.",
    challenges: [
      "Manual activities, and their sequencing, had to be orchestrated across different migration objects.",
      "Cutover activities for the S/4HANA data migration had to be automated, with minimal downtime.",
      "An end-to-end workflow was needed, from data preparation through to verification, for all 107 identified objects.",
    ],
    solutionModule: "deKorvai Migration and Cutover Orchestration",
    solutionPoints: [
      "A single workflow from data preparation and mapping through simulation, migration and verification, for all 107 objects.",
      "Rule-based, manual and system-level activities sequenced and automated in one tool.",
      "A configurable, URL-based approval mechanism integrated with the overall workflow.",
      "An audit trail of every approval request, with the approver and decision recorded.",
      "Humans in the loop only for decisions; everything else runs on set schedules.",
    ],
    howTitle: "One workflow, five stages",
    steps: [
      { title: "Data preparation", text: "Source data readied for each migration object." },
      { title: "Mapping", text: "Data mapped to the S/4HANA target." },
      { title: "Simulation", text: "Loads simulated before the real migration." },
      { title: "Migration", text: "Objects migrated through the Migration Cockpit." },
      { title: "Verification", text: "Results verified after the load." },
    ],
    resultsText: "All 107 migration objects ran through one orchestrated workflow, from data preparation to verification, across a business operating in 30 countries. People stepped in only where a decision was needed, through two approval gates, before load and after load, and every approval request is recorded with its approver and decision in the audit trail.",
    faq: [
      { question: "What does the workflow cover?", answer: "Data preparation, mapping, simulation, migration and verification of results, for all 107 migration objects in the S/4HANA program." },
      { question: "Where are people involved?", answer: "Only for decisions. Approvals run through a configurable, URL-based mechanism at two gates, pre-load and post-load; everything else runs on set schedules." },
      { question: "How are approvals recorded?", answer: "Every approval request is logged in an audit trail, with the approver and the decision recorded." },
      { question: "What kinds of activities were automated?", answer: "Rule-based, manual and system-level activities, sequenced and automated in one tool across the different migration objects." },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
