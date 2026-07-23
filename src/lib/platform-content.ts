import {
  BarChart3,
  Workflow,
  Shield,
  Cpu,
  Database,
  Layers,
  CheckCircle2,
  Zap,
  FileSearch,
  RefreshCw,
  Globe,
  Lock,
  ArrowRightLeft,
  Server,
  ShieldCheck,
  Brain,
  MessageSquare,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface PlatformFeature {
  title: string;
  description: string;
}

export interface PlatformBenefit {
  title: string;
  description: string;
}

export interface PlatformUseCase {
  title: string;
  description: string;
  tags: string[];
}

export interface PlatformArchStep {
  step: string;
  title: string;
  description: string;
}

export interface PlatformPageContent {
  slug: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  overviewTitle: string;
  overviewDescription: string;
  features: PlatformFeature[];
  benefits: PlatformBenefit[];
  useCases: PlatformUseCase[];
  architecture?: PlatformArchStep[];
  ctaTitle: string;
  ctaDescription: string;
}

export const PLATFORM_PAGES: PlatformPageContent[] = [
  {
    slug: "data-quality-profiling",
    icon: BarChart3,
    badge: "Data Quality & Profiling",
    title: "Know Your Data Before You ",
    titleHighlight: "Migrate It",
    subtitle:
      "Automated profiling with customizable rules for completeness, accuracy, consistency, and validity. Detect anomalies, duplicates, and data drift before they cause migration failures.",
    overviewTitle: "Enterprise-Grade Data Profiling",
    overviewDescription:
      "deKorvai's Data Quality & Profiling module provides a comprehensive, multi-layered approach to understanding your data. Connect to any RDBMS, flat file, or SaaS source and run statistical, pattern, and rule-based profiling in minutes. AI-powered pattern detection automatically suggests validation rules, while real-time scorecards track data quality trends across your entire landscape.",
    features: [
      {
        title: "Basic Statistical Profiling",
        description:
          "Column-level metrics including data type, length, precision, min/max values, mean, standard deviation, null count/percentage, and distinct value analysis.",
      },
      {
        title: "Pattern Frequency Analysis",
        description:
          "Automatic value frequency distribution, pattern detection with occurrence counts, and percentage calculations to identify recurring data patterns and anomalies.",
      },
      {
        title: "AI-Powered Rule Generation",
        description:
          "Detected patterns are automatically converted into validation rules using the copilot. Rules include names, descriptions, expressions, severity levels, and dimension classification.",
      },
      {
        title: "Five Quality Dimensions",
        description:
          "Score your data across completeness, accuracy, consistency, timeliness, and validity. Each dimension is independently tracked with weighted scoring for an overall DQ percentage.",
      },
      {
        title: "Real-Time Scorecards & Trends",
        description:
          "Live dashboards with quality score trends over time, dimension-based breakdowns, and comparative analysis across profiling runs.",
      },
      {
        title: "Exhaustive Record-Level Validation",
        description:
          "Every record classified as VALID, INVALID, or BOTH against all applicable rules. Row-by-row quality breakdown for precise issue identification.",
      },
      {
        title: "Scheduled Profiling",
        description:
          "Configure recurring profiling jobs on daily, weekly, or monthly schedules. Automatic re-execution with cache invalidation on source data changes.",
      },
      {
        title: "Multi-Format Export",
        description:
          "Export profiling results as PDF reports with charts, Excel workbooks with multiple sheets, or CSV for external analysis. Automated email delivery with attachments.",
      },
    ],
    benefits: [
      {
        title: "Prevent Migration Failures",
        description:
          "Catch duplicates, missing mandatory fields, and data anomalies before migration — not during go-live.",
      },
      {
        title: "Replace Manual Excel Checks",
        description:
          "Automated profiling with customizable rules replaces error-prone manual spreadsheet analysis.",
      },
      {
        title: "Continuous Quality Monitoring",
        description:
          "Scheduled profiling tracks data quality trends over time, catching drift before it impacts downstream systems.",
      },
      {
        title: "Faster Issue Resolution",
        description:
          "AI-generated rules from detected patterns reduce the time from discovery to remediation by 3x.",
      },
      {
        title: "100% Audit Trail",
        description:
          "Every profiling execution is logged with timestamps, user attribution, and full result history for compliance.",
      },
    ],
    useCases: [
      {
        title: "S/4HANA Data Readiness Assessment",
        description:
          "Profile vendor, customer, and material masters from SAP ECC to identify data quality issues that would cause DMC migration failures.",
        tags: ["SAP ECC", "S/4HANA", "Master Data", "DMC"],
      },
      {
        title: "Continuous Data Governance",
        description:
          "Monitor enterprise data quality across multiple sources with scheduled profiling, real-time scorecards, and automated alerting.",
        tags: ["Governance", "Scorecards", "Scheduling"],
      },
      {
        title: "Pre-Migration Duplicate Detection",
        description:
          "Identify fuzzy duplicates across vendor, customer, and material masters using pattern analysis before consolidation.",
        tags: ["Deduplication", "Fuzzy Matching", "Consolidation"],
      },
      {
        title: "Flat File Validation",
        description:
          "Profile CSV, Excel, and XML uploads including SAP DMC templates for structure validation, mandatory field checks, and data type conformance.",
        tags: ["CSV", "Excel", "DMC Templates", "Validation"],
      },
    ],
    architecture: [
      {
        step: "01",
        title: "Connect",
        description:
          "Link to any RDBMS (Oracle, SQL Server, PostgreSQL, SAP HANA), flat file (CSV, Excel, XML), or SaaS source via pre-built connectors.",
      },
      {
        step: "02",
        title: "Profile",
        description:
          "Run basic statistical and pattern frequency analysis on selected columns. AI detects anomalies and suggests validation rules.",
      },
      {
        step: "03",
        title: "Score",
        description:
          "Unified quality scores across five dimensions with real-time scorecards, trend analysis, and record-level classification.",
      },
      {
        step: "04",
        title: "Remediate",
        description:
          "AI-powered 5-tier remediation engine suggests corrections. User-approved fixes train the ML model for future accuracy.",
      },
    ],
    ctaTitle: "See Data Quality Profiling in Action",
    ctaDescription:
      "Book a demo and discover how deKorvai can profile your entire data landscape in minutes, not months.",
  },

  {
    slug: "etl-pipeline",
    icon: Workflow,
    badge: "ETL Pipeline Engine",
    title: "Extract, Transform, Load — ",
    titleHighlight: "All in One Platform",
    subtitle:
      "Full and incremental extraction with smart rules. Ready-to-use and DIY transformation functions with optimized loading to any target system.",
    overviewTitle: "Enterprise ETL Without the Complexity",
    overviewDescription:
      "deKorvai's ETL Pipeline Engine handles the complete data movement lifecycle — from rule-based extraction across 10+ source types, through a rich library of transformation functions, to atomic loading with deduplication and rollback. Purpose-built for SAP S/4HANA migrations, it supports full, incremental, and batch extraction with configurable scheduling and real-time monitoring.",
    features: [
      {
        title: "Multi-Source Extraction",
        description:
          "Extract from Oracle, SQL Server, PostgreSQL, SAP HANA, MySQL, DB2, MongoDB, Cosmos DB, and flat files (CSV, Excel, JSON, Parquet, XML) through a unified interface.",
      },
      {
        title: "Full, Incremental & Batch Modes",
        description:
          "Full extraction for initial loads, incremental with watermark columns for change-data-capture, and batch extraction for parallel processing of large datasets.",
      },
      {
        title: "Ready-to-Use Transformations",
        description:
          "Column renaming, date formatting, phone number standardization (E.164), country code mapping (ISO), name concatenation, city title case, null normalization, and email validation — all built in.",
      },
      {
        title: "Atomic Data Operations",
        description:
          "Every transformation uses backup-temp-swap pattern: create backup, transform into temp table, drop original, rename temp. Zero-downtime, fully reversible.",
      },
      {
        title: "Smart Deduplication",
        description:
          "Configurable dedup on primary keys during upload. Checks target for existing records, inserts only new rows, preserving existing data integrity.",
      },
      {
        title: "Multi-Target Loading",
        description:
          "Load to PostgreSQL staging, Azure SQL, AWS S3, Azure Blob, or Google Cloud Storage. Supports overwrite, append, and two-phase staging modes.",
      },
      {
        title: "AI Transformation Suggestions",
        description:
          "Agent service generates Python transformation scripts from natural language rules. Versioned configs with draft-to-published lifecycle management.",
      },
      {
        title: "Pipeline Scheduling",
        description:
          "Cron-based scheduling for recurring pipelines. Daily, hourly, or custom intervals with automatic retry and failure notification.",
      },
    ],
    benefits: [
      {
        title: "10+ Sources, One Interface",
        description:
          "No more switching between tools. Extract from any RDBMS, NoSQL, file, or cloud source through a single pipeline configuration.",
      },
      {
        title: "Zero-Downtime Transformations",
        description:
          "Atomic backup-swap operations ensure your data is never in an inconsistent state during transformation.",
      },
      {
        title: "50% Faster Migration Cycles",
        description:
          "Incremental extraction with watermark tracking eliminates redundant full loads, cutting migration cycle time in half.",
      },
      {
        title: "Built-In Data Quality",
        description:
          "Email validation, phone standardization, and null normalization happen during transformation — no separate cleanup step needed.",
      },
      {
        title: "Full Traceability",
        description:
          "Every extraction, transformation, and load operation is logged with row counts, timestamps, and user attribution.",
      },
    ],
    useCases: [
      {
        title: "SAP ECC to S/4HANA Migration",
        description:
          "Extract vendor, customer, and material masters from SAP ECC. Transform field mappings (KUNNR to Customer_ID), standardize formats, and load into DMC staging tables.",
        tags: ["SAP ECC", "S/4HANA", "DMC", "Master Data"],
      },
      {
        title: "Multi-Source Data Consolidation",
        description:
          "Extract from Oracle, SQL Server, and MongoDB sources. Deduplicate across systems, apply consistent transformations, and load into a unified data warehouse.",
        tags: ["Multi-Source", "Deduplication", "Consolidation"],
      },
      {
        title: "Incremental Data Sync",
        description:
          "Set up watermark-based incremental extraction for near-real-time data sync between operational and analytical systems.",
        tags: ["Incremental", "CDC", "Real-Time"],
      },
      {
        title: "Cloud Data Lake Loading",
        description:
          "Extract from on-premises databases, transform for cloud-native formats, and load to AWS S3, Azure Blob, or Google Cloud Storage.",
        tags: ["AWS", "Azure", "GCP", "Cloud Migration"],
      },
    ],
    architecture: [
      {
        step: "01",
        title: "Extract",
        description:
          "Rule-based extraction from any source. Configure full, incremental, or batch mode. Strategy factory auto-selects the right driver for your database type.",
      },
      {
        step: "02",
        title: "Transform",
        description:
          "Apply built-in functions (rename, format, standardize, validate) or custom Python scripts. AI suggests transformations based on source/target schema analysis.",
      },
      {
        step: "03",
        title: "Validate",
        description:
          "Pre-load validation checks data types, required fields, and business rules. Failed records are routed for review before proceeding.",
      },
      {
        step: "04",
        title: "Load",
        description:
          "Atomic loading with deduplication to any target — staging tables, cloud storage, or direct-to-database. Full audit trail for every record.",
      },
    ],
    ctaTitle: "See the ETL Pipeline in Action",
    ctaDescription:
      "Book a demo and see how deKorvai can replace your fragmented ETL toolchain with a single, unified pipeline.",
  },

  {
    slug: "data-scrambling",
    icon: Shield,
    badge: "Data Scrambling",
    title: "Protect Sensitive Data ",
    titleHighlight: "Without Compromise",
    subtitle:
      "Scramble production data for non-production environments. GDPR, HIPAA, and SOX compliant with field-level control and referential integrity preservation.",
    overviewTitle: "Compliance-Grade Data Masking",
    overviewDescription:
      "deKorvai's Data Scrambling module enables organizations to create realistic, privacy-compliant copies of production data for testing, development, and training environments. With 20+ scrambling techniques, profile-based configuration, and an 11-step stored procedure execution pipeline, it delivers enterprise-grade masking across SQL Server, Oracle, PostgreSQL, and SAP systems — with complete audit trails and test mode validation.",
    features: [
      {
        title: "20+ Scrambling Techniques",
        description:
          "Randomize, shuffle, reverse, mask with character sets, case changes, constant replacement, constant mapping, catalogue-based lookups, group-by-aware substitution, bank account masking, IBAN masking, and more.",
      },
      {
        title: "Profile-Based Configuration",
        description:
          "Organize scrambling rules into reusable profiles. Each profile maps catalogues to columns to rules, with position controls (prefix, suffix, range, all) and reference table relationships.",
      },
      {
        title: "Reference Table Handling",
        description:
          "Maintain referential integrity across tables. Foreign key lookups, constant mapping from related catalogues, and group-by-aware substitution preserve data relationships during scrambling.",
      },
      {
        title: "Test Mode Execution",
        description:
          "Dry-run scrambling without persisting changes. Review before/after diffs in a paginated comparison view. Only commit to production when satisfied.",
      },
      {
        title: "Multi-Database Support",
        description:
          "11 stored procedures adapted for MSSQL, Azure SQL, Oracle, PostgreSQL, and MySQL. Each database uses its native call syntax with positional parameters.",
      },
      {
        title: "SAP OData Integration",
        description:
          "Dedicated scrambling path for SAP systems via OData SCRAMBLE_SRV service. CSRF token handling, SCRID generation, and SAP-native test mode support.",
      },
      {
        title: "Before/After Diff Review",
        description:
          "Paginated comparison of original vs scrambled data. Filter and search through results to validate scrambling quality before final output.",
      },
      {
        title: "Flexible Output Control",
        description:
          "Write scrambled data back to the source table, to a separate target table, or create new tables. Options to truncate before insert or append to existing data.",
      },
    ],
    benefits: [
      {
        title: "GDPR, HIPAA, SOX Compliance",
        description:
          "Field-level scrambling with predefined profiles ensures sensitive data is masked in all non-production environments, meeting regulatory requirements.",
      },
      {
        title: "Realistic Test Data",
        description:
          "Production-like data for SIT/UAT environments. Referential integrity preservation means your test scenarios work exactly as they would with real data.",
      },
      {
        title: "Zero Risk Validation",
        description:
          "Test mode lets you validate scrambling results before committing. Review before/after diffs and only proceed when confident.",
      },
      {
        title: "Reusable Profiles",
        description:
          "Define scrambling rules once, reuse across environments and refresh cycles. Consistent masking every time without reconfiguration.",
      },
      {
        title: "Complete Audit Trail",
        description:
          "Every execution logged with user attribution, timestamps, status history, and execution details for compliance reporting.",
      },
    ],
    useCases: [
      {
        title: "SAP Test Environment Refresh",
        description:
          "Scramble production SAP data for SIT/UAT environments. Mask customer names, addresses, bank details, and tax IDs while preserving transactional relationships.",
        tags: ["SAP", "SIT/UAT", "Test Data", "Refresh"],
      },
      {
        title: "GDPR Data Anonymization",
        description:
          "Anonymize PII fields (names, emails, phone numbers, SSNs) across multiple databases for GDPR compliance in development and analytics environments.",
        tags: ["GDPR", "PII", "Anonymization", "Compliance"],
      },
      {
        title: "Cross-Database Masking",
        description:
          "Apply consistent scrambling rules across SQL Server, Oracle, and PostgreSQL databases. Maintain referential integrity across heterogeneous environments.",
        tags: ["Multi-Database", "Cross-Platform", "Consistency"],
      },
      {
        title: "Developer Sandbox Provisioning",
        description:
          "Provision developer environments with scrambled production data. Realistic data volumes and distributions without exposing sensitive information.",
        tags: ["Developer", "Sandbox", "Self-Service"],
      },
    ],
    architecture: [
      {
        step: "01",
        title: "Configure",
        description:
          "Define profiles with catalogue-column-rule mappings. Set position controls, reference tables, and output preferences.",
      },
      {
        step: "02",
        title: "Initialize",
        description:
          "Clean previous execution artifacts, create staging tables, copy source data, and normalize column definitions.",
      },
      {
        step: "03",
        title: "Scramble",
        description:
          "Execute scrambling in batches (default 1,000 rows). Apply constant rules, reference lookups, and group-by substitutions.",
      },
      {
        step: "04",
        title: "Output",
        description:
          "Write masked data to target tables. Review before/after diffs, validate results, then clean up staging artifacts.",
      },
    ],
    ctaTitle: "See Data Scrambling in Action",
    ctaDescription:
      "Book a demo and learn how deKorvai can help you create compliant test environments in minutes, not weeks.",
  },

  {
    slug: "agentic-ai",
    icon: Cpu,
    badge: "Agentic AI",
    title: "AI That Works ",
    titleHighlight: "With Your Data",
    subtitle:
      "Built-in AI agents that auto-detect data issues, suggest transformations, remediate errors, and make smart decisions throughout the pipeline — learning from every correction.",
    overviewTitle: "Intelligence at Every Stage",
    overviewDescription:
      "deKorvai's Agentic AI layer combines a 5-tier NLP remediation pipeline, dual ML engines that learn from user corrections, and a multi-channel copilot (Maestro) that orchestrates workflows through natural language. From spell checking to semantic matching, from intent classification to agentic tool use — AI is embedded into every stage of the data pipeline, not bolted on as an afterthought.",
    features: [
      {
        title: "5-Tier NLP Remediation Pipeline",
        description:
          "Progressive data correction: spell checking (symspellpy), fuzzy matching (Levenshtein), phonetic matching (Soundex/Metaphone), named entity recognition (spaCy), and semantic matching (sentence transformers). First match wins — fast methods tried first.",
      },
      {
        title: "Dual ML Engines",
        description:
          "Fine-tuned neural network (MLP classifier) learns domain-specific patterns from user corrections. Embedding engine (all-MiniLM-L6-v2) catches variations via cosine similarity. Rule-aware context ensures the same value gets different corrections based on business rules.",
      },
      {
        title: "Auto-Match Bulk Mapping",
        description:
          "Automatically map invalid values to valid values using similarity matrix computation. Returns matched pairs with confidence scores and routes unmatched values for manual review.",
      },
      {
        title: "Maestro Copilot",
        description:
          "Multi-channel AI assistant (REST, Microsoft Teams, WhatsApp) that orchestrates workflows through conversation. Intent classification routes queries to the right workflow, ChromaDB enables semantic search across templates.",
      },
      {
        title: "Agentic Mode (MCP)",
        description:
          "LLM with tool use that iteratively decides which tools to invoke (profiling, SQL, workflow steps), executes them, and refines responses based on results. Full agentic loop with memory and session management.",
      },
      {
        title: "Natural Language to SQL",
        description:
          "Data Explorer lets users query catalogues using natural language. The agent converts questions to SQL, executes against the database, and presents results in interactive tables.",
      },
      {
        title: "AI Rule Suggestion",
        description:
          "Pattern-to-rule generation analyzes profiling results and automatically suggests data quality rules with names, expressions, severity levels, and dimension classification.",
      },
      {
        title: "Continuous Learning",
        description:
          "User corrections train the ML model. Accepted remediations become training data for the neural network, improving suggestion accuracy over time. Monthly retraining cycles with incremental learning.",
      },
    ],
    benefits: [
      {
        title: "80% Less Manual Remediation",
        description:
          "The 5-tier NLP pipeline resolves most data issues automatically. Only edge cases require human intervention.",
      },
      {
        title: "Gets Smarter Over Time",
        description:
          "Every user correction trains the ML model. Domain-specific patterns are learned and applied to future data — accuracy improves with every execution.",
      },
      {
        title: "Rule-Aware Intelligence",
        description:
          "Same column and value get different corrections based on the business rule context. ISO-2 vs ISO-3 country codes, date formats, naming conventions — all handled correctly.",
      },
      {
        title: "Multi-Channel Access",
        description:
          "Interact with your data pipeline through REST API, Microsoft Teams, or WhatsApp. Approval workflows, status updates, and data queries — all from your preferred channel.",
      },
      {
        title: "Confidence-Calibrated Suggestions",
        description:
          "Every suggestion includes a confidence score combining similarity, character overlap, and length ratio. The system never claims 100% confidence — humility by design.",
      },
    ],
    useCases: [
      {
        title: "Automated Data Remediation",
        description:
          "Profile data, detect invalid values, and auto-remediate using the 5-tier NLP pipeline. Review AI suggestions in bulk, approve corrections, and apply to source.",
        tags: ["NLP", "Auto-Fix", "Remediation", "Bulk Processing"],
      },
      {
        title: "Conversational Data Exploration",
        description:
          "Ask questions about your data in natural language through Maestro. Get SQL-generated answers, interactive tables, and follow-up suggestions without writing queries.",
        tags: ["Natural Language", "SQL", "Data Explorer"],
      },
      {
        title: "Teams-Based Workflow Approvals",
        description:
          "Receive data quality alerts and approval requests directly in Microsoft Teams. Review, approve, or reject with interactive cards — no platform login required.",
        tags: ["Microsoft Teams", "Approvals", "Notifications"],
      },
      {
        title: "Pattern-Based Rule Generation",
        description:
          "AI analyzes profiling patterns and auto-generates validation rules. Country code lists, date format checks, mandatory field rules — all suggested from your actual data.",
        tags: ["AI Rules", "Pattern Detection", "Automation"],
      },
    ],
    architecture: [
      {
        step: "01",
        title: "Detect",
        description:
          "Profiling identifies invalid values and patterns. AI classifies issues by type (spelling, format, missing, duplicate) and routes to the right remediation tier.",
      },
      {
        step: "02",
        title: "Suggest",
        description:
          "5-tier NLP pipeline generates corrections. ML models trained on historical corrections provide domain-specific suggestions with confidence scores.",
      },
      {
        step: "03",
        title: "Review",
        description:
          "Users review suggestions in bulk or individually. Approvals train the model; rejections refine the pipeline. Multi-channel review via REST, Teams, or WhatsApp.",
      },
      {
        step: "04",
        title: "Learn",
        description:
          "Approved corrections become training data. Neural network retrains on new patterns. Embedding store updates for improved fuzzy matching.",
      },
    ],
    ctaTitle: "See Agentic AI in Action",
    ctaDescription:
      "Book a demo and experience how deKorvai's AI agents can automate data remediation and transform how your team works with data.",
  },

  {
    slug: "integrations",
    icon: Database,
    badge: "Integrations",
    title: "Connect to ",
    titleHighlight: "Everything",
    subtitle:
      "Pre-built connectors for 14+ data sources including RDBMS, NoSQL, SAP systems, flat files, and cloud storage. One unified interface, encrypted credentials, and automated schema discovery.",
    overviewTitle: "Your Data, Wherever It Lives",
    overviewDescription:
      "deKorvai integrates with your entire data ecosystem through a unified connector framework. Whether your data lives in Oracle, SQL Server, SAP HANA, MongoDB, S3, or Excel spreadsheets — deKorvai connects, discovers schemas, and makes your data available for profiling, transformation, scrambling, and loading. All credentials are encrypted at rest with AES-256-GCM, and every connection is tested before use.",
    features: [
      {
        title: "14+ Pre-Built Connectors",
        description:
          "PostgreSQL, SQL Server, Azure SQL, Oracle, MySQL, DB2, SAP HANA, MongoDB, Cosmos DB, SAP RFC, SAP OData — all with native drivers and optimized query execution.",
      },
      {
        title: "File Source Support",
        description:
          "CSV, Excel (multi-sheet), JSON, XML (including SpreadsheetML 2003), and Parquet files. Upload directly or connect to cloud storage. Automatic column inference and type detection.",
      },
      {
        title: "Cloud Storage Integration",
        description:
          "AWS S3, Azure Blob Storage, Google Cloud Storage, and NFS. ETag-based change detection for incremental refresh. Support for IAM keys, SAS tokens, and GCS service accounts.",
      },
      {
        title: "SAP RFC & OData",
        description:
          "Direct SAP system integration via RFC function modules and OData services. Support for App Server, Message Server, and SAP Router connection types with encrypted credential vaults.",
      },
      {
        title: "AES-256-GCM Encryption",
        description:
          "All passwords, API keys, certificates, and service account credentials encrypted at rest. Legacy plaintext passwords auto-migrated on startup. Masked display in UI prevents accidental exposure.",
      },
      {
        title: "Automated Schema Discovery",
        description:
          "One-click metadata refresh discovers schemas, tables, views, and columns. Custom SAP tables (Z*/Y* prefix) auto-detected and flagged for filtering.",
      },
      {
        title: "Connection Testing & Pooling",
        description:
          "Test any connection before saving. Pooled database connections (max 10 concurrent) with 30-second idle timeout and automatic reconnection on failure.",
      },
      {
        title: "Stored Procedure Support",
        description:
          "Execute stored procedures across all RDBMS types with database-specific call syntax. Positional parameters, result set mapping, and batch execution.",
      },
    ],
    benefits: [
      {
        title: "One Interface for All Sources",
        description:
          "No more learning different tools for different databases. Configure, test, and manage all connections from a single dashboard.",
      },
      {
        title: "Enterprise Security",
        description:
          "AES-256-GCM encryption, mTLS for MongoDB, SAS token support for Azure, and IAM-based access for AWS. Your credentials are protected at every layer.",
      },
      {
        title: "Zero-Config Schema Discovery",
        description:
          "Point at a database and deKorvai discovers schemas, tables, and columns automatically. No manual DDL analysis or documentation lookup.",
      },
      {
        title: "SAP-Native Integration",
        description:
          "RFC and OData connectors speak SAP's language. BAPI calls, DMC staging, and S/4HANA migration — all through purpose-built connectors.",
      },
      {
        title: "Cloud-Ready",
        description:
          "Native support for Azure SQL, Cosmos DB, S3, Azure Blob, and GCS. Move data between on-premises and cloud without custom scripting.",
      },
    ],
    useCases: [
      {
        title: "SAP System Landscape Connectivity",
        description:
          "Connect to SAP ECC, S/4HANA, and BW systems via RFC and OData. Access BAPIs, function modules, and OData services for extraction, scrambling, and loading.",
        tags: ["SAP RFC", "OData", "ECC", "S/4HANA"],
      },
      {
        title: "Hybrid Cloud Data Access",
        description:
          "Connect on-premises Oracle and SQL Server to cloud targets like Azure SQL, S3, and GCS. Bridge the gap between legacy and cloud-native architectures.",
        tags: ["Hybrid Cloud", "Azure", "AWS", "GCP"],
      },
      {
        title: "File-Based Data Ingestion",
        description:
          "Upload Excel spreadsheets, CSVs, and XML files including SAP DMC migration templates. Automatic parsing, column detection, and multi-sheet support.",
        tags: ["CSV", "Excel", "XML", "DMC Templates"],
      },
      {
        title: "Multi-Database Profiling",
        description:
          "Profile data quality across PostgreSQL, MongoDB, and Oracle from a single interface. Compare quality scores across heterogeneous data sources.",
        tags: ["Multi-Database", "Profiling", "Cross-Platform"],
      },
    ],
    ctaTitle: "See Integrations in Action",
    ctaDescription:
      "Book a demo and see how deKorvai connects to your entire data ecosystem — from SAP to cloud, from databases to spreadsheets.",
  },

  {
    slug: "data-staging",
    icon: Layers,
    badge: "Data Staging",
    title: "Stage, Validate, Load — ",
    titleHighlight: "With Confidence",
    subtitle:
      "Intermediate staging tables with pre-load validation, human review workflows, and wave-sequenced loading for SAP DMC migrations. Never load bad data again.",
    overviewTitle: "The Safety Net Between Source and Target",
    overviewDescription:
      "deKorvai's Data Staging module provides a controlled intermediate layer between data extraction and final loading. Staging tables are dynamically created, populated with source data, validated against business rules, and presented for human review before committing to target systems. Purpose-built for SAP Data Migration Cockpit (DMC) workflows, it supports 212 migration objects with wave-sequenced dependency management.",
    features: [
      {
        title: "Dynamic Staging Table Creation",
        description:
          "Staging tables are auto-generated with unique names (timestamp + random ID) in configurable schemas. Tables are created based on source data structure with automatic column inference.",
      },
      {
        title: "SAP DMC Template Parsing",
        description:
          "Parse SAP Migration Cockpit Excel and XML templates with intelligent metadata row detection. Automatically filter help rows, validate header patterns, and extract business data.",
      },
      {
        title: "212 Migration Objects",
        description:
          "Full catalog of S/4HANA 2022 migration objects with predecessor dependencies. Wave-sequenced loading (1-10+) ensures referential integrity and FK constraints are satisfied.",
      },
      {
        title: "Multi-Layer Pre-Load Validation",
        description:
          "Format validation at parse time, content validation before staging, schema validation during staging, and post-staging business rule checks — four layers of protection.",
      },
      {
        title: "Human Review & Approval",
        description:
          "Staged data enters an approval workflow (draft → pending → approved/rejected → published). Data stewards review before execution, with full audit trail for every status transition.",
      },
      {
        title: "Batch Processing",
        description:
          "Read and process staged data in configurable batch sizes. Paginated access for review UIs. Support for large datasets without memory constraints.",
      },
      {
        title: "Automatic Cleanup",
        description:
          "Staging tables are explicitly dropped after processing. No orphaned tables accumulate in the database. Clean execution lifecycle from creation to cleanup.",
      },
      {
        title: "Wave-Sequenced Loading",
        description:
          "SAP migration objects loaded in dependency order using longest-path algorithm. Wave 1 objects (no predecessors) load first, dependent objects follow in sequence.",
      },
    ],
    benefits: [
      {
        title: "Never Load Bad Data",
        description:
          "Four layers of validation plus human review ensure only clean, validated data reaches your target system.",
      },
      {
        title: "95%+ DMC First-Pass Rate",
        description:
          "Pre-validated staging data means fewer DMC errors, fewer correction cycles, and dramatically faster migration execution.",
      },
      {
        title: "SAP-Native Workflow",
        description:
          "Built for SAP DMC with template parsing, migration object cataloging, and wave-sequenced loading. Speaks SAP's language natively.",
      },
      {
        title: "Full Traceability",
        description:
          "Every staging operation is logged. Approval workflows create an audit trail from data arrival to final load.",
      },
      {
        title: "Zero Orphaned Tables",
        description:
          "Automatic cleanup ensures staging tables don't accumulate. Clean database state maintained across execution cycles.",
      },
    ],
    useCases: [
      {
        title: "SAP S/4HANA DMC Migration",
        description:
          "Parse DMC migration templates, stage data with validation, review in approval workflow, and load to SAP staging tables in wave-sequenced order.",
        tags: ["SAP DMC", "S/4HANA", "Wave Loading", "Migration"],
      },
      {
        title: "Business Partner Staging",
        description:
          "Stage BP create/update data from CSV or catalogue sources. Batch-read staged records, validate against S/4HANA rules, and push via OData API.",
        tags: ["Business Partner", "OData", "Validation"],
      },
      {
        title: "Pre-Migration Data Review",
        description:
          "Stage extracted data for stakeholder review before committing to target systems. Approval workflows ensure sign-off from data owners.",
        tags: ["Review", "Approval", "Stakeholders"],
      },
      {
        title: "Flat File to Staging Pipeline",
        description:
          "Upload CSV/Excel files, parse into staging tables, validate structure and content, then promote to target database after review.",
        tags: ["CSV", "Excel", "Upload", "Validation"],
      },
    ],
    architecture: [
      {
        step: "01",
        title: "Parse",
        description:
          "Source data (CSV, Excel, DMC templates, database extracts) is parsed, validated for structure, and metadata rows are filtered out.",
      },
      {
        step: "02",
        title: "Stage",
        description:
          "Dynamic staging tables are created in the configured schema. Data is bulk-inserted with record count verification.",
      },
      {
        step: "03",
        title: "Validate & Review",
        description:
          "Multi-layer validation checks schema, data types, required fields, and business rules. Approval workflow routes to data stewards.",
      },
      {
        step: "04",
        title: "Load & Cleanup",
        description:
          "Approved data is loaded to target in wave sequence. Staging tables are dropped after successful completion.",
      },
    ],
    ctaTitle: "See Data Staging in Action",
    ctaDescription:
      "Book a demo and discover how deKorvai's staging workflow can give your team confidence in every data load.",
  },
];

export function getPlatformPageBySlug(
  slug: string,
): PlatformPageContent | undefined {
  return PLATFORM_PAGES.find((page) => page.slug === slug);
}

export function getAllPlatformSlugs(): string[] {
  return PLATFORM_PAGES.map((page) => page.slug);
}
