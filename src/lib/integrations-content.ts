/* ------------------------------------------------------------------ */
/*  Integrations Page — Content                                       */
/* ------------------------------------------------------------------ */

import type {
  AnswerFirstProps,
  FAQProps,
  RelatedPagesProps,
  CTAProps,
} from "@/components/platform-sections";

export const INTEGRATIONS_META = {
  title: "Integrations — Connect SAP, Oracle, Snowflake & More | deKorvai",
  description:
    "deKorvai connects to SAP, Oracle, Snowflake, Salesforce, PostgreSQL, and more — through JDBC, RFC/API, HTTPS, and REST. One platform for data quality, ETL, and masking across every system.",
};

export const INTEGRATIONS_HERO = {
  kick: "Platform · Integrations",
  badge: "SAP & non-SAP · on-prem & cloud",
  title: "Connect deKorvai to Every System in ",
  titleHighlight: "Your Data Estate",
  subtitle:
    "deKorvai connects to your ERPs, databases, cloud platforms, and applications through standard protocols — so data quality, ETL, and masking run across every system from one platform, without a separate tool per source.",
  diagramSources: [
    "SAP · SAP HANA",
    "Oracle · SQL Server",
    "PostgreSQL",
    "Snowflake",
    "AWS · Google Cloud",
    "Salesforce · Microsoft",
  ],
  diagramOutputs: [
    "Profile & score quality",
    "Extract, transform & load",
    "Mask & scramble",
    "CSV · JSON · Parquet · Excel",
  ],
  diagramProtocols: "JDBC · RFC / API · HTTPS · REST",
};

export const INTEGRATIONS_ANSWER_FIRST: AnswerFirstProps = {
  label: "In short",
  paragraphs: [
    "deKorvai integrates with enterprise systems through standard connectivity — JDBC for databases, RFC and API for SAP, and HTTPS/REST for cloud and SaaS. Supported systems include SAP, SAP HANA, Oracle, Microsoft, Snowflake, AWS, Google Cloud, Salesforce, and PostgreSQL.",
    "Because connectivity is shared across the platform, the same connection powers every capability — data quality profiling, ETL, and masking — and reads or writes common file formats like CSV, JSON, Parquet, and Excel.",
  ],
};

export const INTEGRATIONS_SYSTEMS = {
  badge: "SUPPORTED SYSTEMS",
  title: "The systems deKorvai ",
  titleHighlight: "connects to",
  subtitle: "SAP and non-SAP, on-premise and cloud — connected through one platform.",
  categories: [
    {
      icon: "◈",
      title: "ERP & Enterprise",
      systems: ["SAP", "SAP HANA", "Microsoft"],
      description: "Connect to SAP ECC and SAP HANA through RFC and API, plus Microsoft enterprise systems, for extraction, profiling, and masking.",
    },
    {
      icon: "▤",
      title: "Databases",
      systems: ["Oracle", "SQL Server", "PostgreSQL"],
      description: "Connect to relational databases over JDBC for rule-based extraction, profiling, and loading — full or incremental.",
    },
    {
      icon: "☁",
      title: "Cloud Platforms",
      systems: ["Snowflake", "AWS", "Google Cloud"],
      description: "Connect to cloud data platforms and warehouses to profile, move, and mask data across cloud environments.",
    },
    {
      icon: "◉",
      title: "SaaS Applications",
      systems: ["Salesforce"],
      description: "Connect to SaaS applications through REST/API to bring application data into the same quality, ETL, and masking workflows.",
    },
  ],
};

export const INTEGRATIONS_PROTOCOLS = {
  badge: "CONNECTIVITY",
  title: "How deKorvai ",
  titleHighlight: "connects",
  subtitle: "Standard, enterprise-grade protocols — no proprietary middleware required.",
  items: [
    { title: "JDBC", description: "Connects to relational databases — Oracle, SQL Server, PostgreSQL, and more — for extraction and loading." },
    { title: "RFC / API", description: "Connects to SAP systems for reading and writing data through SAP's standard interfaces." },
    { title: "HTTPS", description: "Secure connectivity for user access and platform communication." },
    { title: "REST", description: "Connects to cloud platforms and SaaS applications through REST APIs." },
  ],
};

export const INTEGRATIONS_FORMATS = {
  badge: "FILE FORMATS",
  title: "Reads and writes the formats you work with",
  subtitle: "Beyond live system connections, deKorvai handles common data file formats.",
  formats: ["CSV", "JSON", "Parquet", "Excel"],
};

export const INTEGRATIONS_CAPABILITIES = {
  badge: "THE PAYOFF",
  title: "One connection, ",
  titleHighlight: "every capability",
  subtitle: "Connect a system once and every deKorvai capability can work with it — no separate integration per tool.",
  items: [
    { icon: "◱", title: "Data Quality", description: "Profile, score & cleanse the connected data", href: "/platform/data-quality-profiling" },
    { icon: "⇄", title: "ETL", description: "Extract, transform & load across systems", href: "/platform/etl" },
    { icon: "⊚", title: "Data Masking", description: "Mask & scramble data for non-production", href: "/platform/data-masking" },
    { icon: "✦", title: "Agentic AI", description: "Detect issues & suggest fixes across sources", href: "/platform/agentic-ai" },
  ],
};

export const INTEGRATIONS_GUIDES = {
  badge: "CONNECTOR GUIDES",
  title: "Deep-dives on ",
  titleHighlight: "key connections",
  subtitle: "Detailed guides for specific system pairings — publishing soon.",
  items: [
    { title: "SAP to Snowflake", description: "Extracting SAP data and loading it into Snowflake with profiling and validation." },
    { title: "Oracle data masking", description: "Masking sensitive data in Oracle databases for compliant non-production use." },
    { title: "SAP ECC data extraction", description: "Rule-based extraction from SAP ECC over RFC, full and incremental." },
    { title: "Salesforce data quality", description: "Profiling and cleansing Salesforce records for trusted CRM data." },
    { title: "SQL Server to cloud", description: "Moving SQL Server data to cloud warehouses with validation before load." },
    { title: "PostgreSQL profiling", description: "Continuous data quality profiling on PostgreSQL sources." },
  ],
};

export const INTEGRATIONS_FAQ: FAQProps = {
  title: "Integrations,",
  titleHighlight: "answered",
  items: [
    { question: "What systems does deKorvai connect to?", answer: "deKorvai connects to SAP, SAP HANA, Oracle, Microsoft, Snowflake, AWS, Google Cloud, Salesforce, and PostgreSQL — plus common file formats like CSV, JSON, Parquet, and Excel." },
    { question: "How does deKorvai connect to SAP?", answer: "deKorvai connects to SAP systems through RFC and API, reading and writing data via SAP's standard interfaces for extraction, profiling, transformation, and masking." },
    { question: "Does deKorvai work with non-SAP systems?", answer: "Yes. It connects to Oracle, SQL Server, PostgreSQL, Snowflake, Salesforce, and cloud platforms — the same capabilities run across SAP and non-SAP systems alike." },
    { question: "How does deKorvai connect to databases and cloud platforms?", answer: "Databases connect over JDBC; cloud platforms and SaaS applications connect over HTTPS and REST APIs." },
    { question: "What file formats does deKorvai support?", answer: "deKorvai reads and writes CSV, JSON, Parquet, and Excel, in addition to live connections to databases, ERPs, cloud platforms, and SaaS applications." },
  ],
};

export const INTEGRATIONS_RELATED: RelatedPagesProps = {
  platformTitle: "What runs across your connections",
  platformSubtitle: "Integrations power all four deKorvai capabilities.",
  platformPages: [
    { href: "/platform/data-quality-profiling", title: "Data Quality Profiling", description: "Rules, scorecards & anomaly detection" },
    { href: "/platform/etl", title: "ETL Pipeline Engine", description: "Extract, transform & validate before load" },
    { href: "/platform/data-masking", title: "Data Masking (Scrambling)", description: "Compliant test data by design" },
  ],
};

export const INTEGRATIONS_CTA: CTAProps = {
  title: "Connect your systems in one platform",
  description:
    "See how deKorvai connects to your ERP, databases, and cloud — and runs quality, ETL, and masking across all of them.",
  buttonText: "Book a Demo",
  subtext: "A working session on your data estate and connections",
};
