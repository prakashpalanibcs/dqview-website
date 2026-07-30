/* ------------------------------------------------------------------ */
/*  Industry Pages — Content                                           */
/* ------------------------------------------------------------------ */

import type { ProblemsProps, CTAProps } from "@/components/platform-sections";
import type { CustomerProofContent } from "@/lib/dqg-content";
import type { RelatedSolutionsContent } from "@/lib/mdm-content";

/* ------------------------------------------------------------------ */
/*  Shared industry page shape                                         */
/* ------------------------------------------------------------------ */

export interface IndustryHeroContent {
  kick: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export interface IndustryPageContent {
  meta: { title: string; description: string };
  breadcrumbLabel: string;
  hero: IndustryHeroContent;
  challenge: ProblemsProps;
  proof: CustomerProofContent;
  solutions: RelatedSolutionsContent;
  cta: CTAProps;
}

/* ------------------------------------------------------------------ */
/*  Chemical Manufacturing                                             */
/* ------------------------------------------------------------------ */

export const CHEMICAL_MANUFACTURING: IndustryPageContent = {
  meta: {
    title: "Data Integrity for Chemical Manufacturing | deKorvai",
    description:
      "deKorvai helps chemical manufacturing enterprises clean material master data, migrate to S/4HANA, and run compliant test environments. Trusted by Coromandel International. Book a demo.",
  },
  breadcrumbLabel: "Chemical Manufacturing",
  hero: {
    kick: "Industry · Chemical Manufacturing",
    badge: "material master · plant data · compliant test",
    title: "Data Integrity for ",
    titleHighlight: "Chemical Manufacturing",
    subtitle:
      "Chemical manufacturing enterprises carry deep master-data complexity — materials, plants, BOMs, and vendors that accumulate duplicates and inconsistencies over decades. deKorvai cleans that data, migrates it, and keeps non-production environments compliant.",
  },
  challenge: {
    badge: "The Challenge",
    title: "Chemical manufacturing data gets complex — ",
    titleHighlight: "and messy — fast",
    subtitle:
      "Materials created many times over, plant and storage data spread across sites, and vendors duplicated across systems. It inflates stock, splits spend, and complicates every migration.",
    items: [
      {
        number: "01",
        title: "Duplicate material master",
        description:
          "The same part entered many ways multiplies across plants, inflating inventory and splitting purchasing.",
      },
      {
        number: "02",
        title: "Complex plant & storage data",
        description:
          "Data spread across plants, storage locations, and sites has to stay consistent to be trusted.",
      },
      {
        number: "03",
        title: "Migration-heavy landscapes",
        description:
          "Chemical manufacturers migrating to S/4HANA carry years of legacy data that must be cleaned first.",
      },
      {
        number: "04",
        title: "Compliant test environments",
        description:
          "Using real production data to test needs sensitive data protected in non-production.",
      },
    ],
  },
  proof: {
    badge: "Proven in Chemical Manufacturing",
    title: "Trusted by ",
    titleHighlight: "Coromandel International",
    customers: [
      {
        name: "Coromandel International",
        description: "Scrambling SAP & non-SAP applications for compliant test environments",
      },
    ],
  },
  solutions: {
    badge: "Relevant Solutions",
    title: "How deKorvai helps ",
    titleHighlight: "chemical manufacturing teams",
    items: [
      {
        href: "/solutions/master-data-management",
        title: "Master Data Management",
        description: "De-duplicate materials, build golden records",
      },
      {
        href: "/solutions/s4hana-data-migration",
        title: "SAP S/4HANA Migration",
        description: "Migrate legacy data, validated & DMC-ready",
      },
      {
        href: "/solutions/test-data-management",
        title: "Data Scrambling",
        description: "Compliant non-production test data",
      },
    ],
  },
  cta: {
    title: "Clean the data behind your operations",
    description:
      "See how deKorvai de-duplicates material master, migrates cleanly, and protects test data for chemical manufacturing.",
    buttonText: "Book a Demo",
    subtext: "A working session on your chemical manufacturing data",
  },
};

/* ------------------------------------------------------------------ */
/*  CPG & Beverage                                                     */
/* ------------------------------------------------------------------ */

export const CPG_BEVERAGE: IndustryPageContent = {
  meta: {
    title: "Data Integrity for CPG & Beverage | deKorvai",
    description:
      "deKorvai helps CPG and beverage enterprises protect sensitive data for compliance and migrate legacy data on time. Trusted by the world's #2 brewer and GRT Ethanol. Book a demo.",
  },
  breadcrumbLabel: "CPG & Beverage",
  hero: {
    kick: "Industry · CPG & Beverage",
    badge: "high-volume · compliant · migration",
    title: "Data Integrity for ",
    titleHighlight: "CPG & Beverage",
    subtitle:
      "Consumer goods and beverage enterprises run high-volume operations where sensitive data has to stay protected and legacy migrations have to land on tight timelines. deKorvai scrambles data for compliance and moves legacy data cleanly to S/4HANA.",
  },
  challenge: {
    badge: "The Challenge",
    title: "High volume, high compliance, ",
    titleHighlight: "tight timelines",
    subtitle:
      "CPG and beverage data moves at scale and crosses regulated boundaries, while migration programs run against hard deadlines.",
    items: [
      {
        number: "01",
        title: "Sensitive data at scale",
        description:
          "High-volume operations mean large amounts of sensitive data that must be protected in every environment.",
      },
      {
        number: "02",
        title: "Regulatory compliance",
        description:
          "Consumer and financial data carries GDPR, HIPAA, and SOX obligations across systems.",
      },
      {
        number: "03",
        title: "Time-boxed migrations",
        description:
          "Migration and roll-out programs run to fixed deadlines with no room for dirty-data delays.",
      },
      {
        number: "04",
        title: "Non-SAP as well as SAP",
        description:
          "Data lives across SAP and non-SAP applications that all need consistent handling.",
      },
    ],
  },
  proof: {
    badge: "Proven in CPG & Beverage",
    title: "Trusted by leading ",
    titleHighlight: "CPG & beverage enterprises",
    customers: [
      {
        name: "World's #2 Brewer",
        description: "Non-SAP data scrambling with regulatory compliance",
      },
      {
        name: "GRT Ethanol",
        description: "S/4HANA GROW program — legacy data loads to a 3-month target",
      },
    ],
  },
  solutions: {
    badge: "Relevant Solutions",
    title: "How deKorvai helps ",
    titleHighlight: "CPG & Beverage teams",
    items: [
      {
        href: "/solutions/test-data-management",
        title: "Data Scrambling",
        description: "Protect sensitive data across systems",
      },
      {
        href: "/solutions/compliance",
        title: "Compliance",
        description: "GDPR, HIPAA & SOX",
      },
      {
        href: "/solutions/s4hana-data-migration",
        title: "SAP S/4HANA Migration",
        description: "Land legacy data on time",
      },
    ],
  },
  cta: {
    title: "Protect and move your data at scale",
    description:
      "See how deKorvai scrambles sensitive data for compliance and migrates legacy data on deadline for CPG and beverage.",
    buttonText: "Book a Demo",
    subtext: "A working session on your CPG & beverage data",
  },
};

/* ------------------------------------------------------------------ */
/*  Life Sciences                                                      */
/* ------------------------------------------------------------------ */

export const LIFE_SCIENCES: IndustryPageContent = {
  meta: {
    title: "Data Integrity for Life Sciences | deKorvai",
    description:
      "deKorvai helps life-sciences enterprises migrate master and transaction data with profiling and keep regulated data audit-ready. Trusted by Evident Scientific. Book a demo.",
  },
  breadcrumbLabel: "Life Sciences",
  hero: {
    kick: "Industry · Life Sciences",
    badge: "regulated · roll-outs · profiling",
    title: "Data Integrity for ",
    titleHighlight: "Life Sciences",
    subtitle:
      "Life-sciences enterprises operate under strict data governance, running roll-out programs where master and transaction data must migrate accurately and stay audit-ready. deKorvai migrates that data with profiling built in.",
  },
  challenge: {
    badge: "The Challenge",
    title: "Regulated data, run through ",
    titleHighlight: "demanding programs",
    subtitle:
      "Life-sciences data is governed tightly and moves through roll-out programs where accuracy and evidence are non-negotiable.",
    items: [
      {
        number: "01",
        title: "Regulated master data",
        description:
          "Master and transaction data must be accurate and consistent under strict governance.",
      },
      {
        number: "02",
        title: "Roll-out programs",
        description:
          "Regional roll-outs move large volumes of data that must land correctly.",
      },
      {
        number: "03",
        title: "Profiling before load",
        description:
          "Data has to be profiled and validated before it enters the target system.",
      },
      {
        number: "04",
        title: "Audit-ready evidence",
        description:
          "Governance requires demonstrable data quality, not assertions.",
      },
    ],
  },
  proof: {
    badge: "Proven in Life Sciences",
    title: "Trusted by ",
    titleHighlight: "Evident Scientific",
    customers: [
      {
        name: "Evident Scientific",
        description: "S/4HANA roll-out program (US region) — master & transaction data migration with profiling",
      },
    ],
  },
  solutions: {
    badge: "Relevant Solutions",
    title: "How deKorvai helps ",
    titleHighlight: "Life Sciences teams",
    items: [
      {
        href: "/solutions/s4hana-data-migration",
        title: "SAP S/4HANA Migration",
        description: "Migrate master & transaction data with profiling",
      },
      {
        href: "/solutions/data-quality-governance",
        title: "Data Quality Governance",
        description: "Keep regulated data audit-ready",
      },
      {
        href: "/solutions/compliance",
        title: "Compliance",
        description: "Protect regulated data",
      },
    ],
  },
  cta: {
    title: "Migrate regulated data with confidence",
    description:
      "See how deKorvai migrates master and transaction data with profiling and keeps it audit-ready for life sciences.",
    buttonText: "Book a Demo",
    subtext: "A working session on your life-sciences data",
  },
};

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

export const ALL_INDUSTRIES: Record<string, IndustryPageContent> = {
  "chemical-manufacturing": CHEMICAL_MANUFACTURING,
  "cpg-beverage": CPG_BEVERAGE,
  "life-sciences": LIFE_SCIENCES,
};
