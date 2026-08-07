import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MDMPage from "@/components/solutions/MDMPage";
import DQGPage from "@/components/solutions/DQGPage";
import CompliancePage from "@/components/solutions/CompliancePage";
import TDMPage from "@/components/solutions/TDMPage";
import SystemConsolidationPage from "@/components/solutions/SystemConsolidationPage";
import S4HANAPage from "@/components/solutions/S4HANAPage";
import { MDM_META, MDM_FAQ } from "@/lib/mdm-content";
import { DQG_META, DQG_FAQ } from "@/lib/dqg-content";
import { COMPLIANCE_META, COMPLIANCE_FAQ } from "@/lib/compliance-content";
import { TDM_META, TDM_FAQ } from "@/lib/tdm-content";
import { SYSCON_META, SYSCON_FAQ } from "@/lib/syscon-content";
import { S4HANA_META, S4HANA_FAQ } from "@/lib/s4hana-content";

const BASE_URL = "https://www.dekorvai.com";

/* ------------------------------------------------------------------ */
/*  Dedicated Solutions Map                                            */
/* ------------------------------------------------------------------ */

interface DedicatedSolutionConfig {
  meta: { title: string; description: string };
  breadcrumbLabel: string;
  serviceType: string;
  faqItems?: { question: string; answer: string }[];
  Component: React.ComponentType;
}

const DEDICATED_SOLUTIONS: Record<string, DedicatedSolutionConfig> = {
  "master-data-management": {
    meta: MDM_META,
    breadcrumbLabel: "Master Data Management",
    serviceType: "Master Data Management",
    faqItems: MDM_FAQ.items,
    Component: MDMPage,
  },
  "data-quality-governance": {
    meta: DQG_META,
    breadcrumbLabel: "Data Quality Governance",
    serviceType: "Data Quality Governance",
    faqItems: DQG_FAQ.items,
    Component: DQGPage,
  },
  "compliance": {
    meta: COMPLIANCE_META,
    breadcrumbLabel: "Compliance",
    serviceType: "Data Compliance",
    faqItems: COMPLIANCE_FAQ.items,
    Component: CompliancePage,
  },
  "test-data-management": {
    meta: TDM_META,
    breadcrumbLabel: "Test Data Management",
    serviceType: "Test Data Management",
    faqItems: TDM_FAQ.items,
    Component: TDMPage,
  },
  "system-consolidation": {
    meta: SYSCON_META,
    breadcrumbLabel: "System Consolidation",
    serviceType: "System Consolidation",
    faqItems: SYSCON_FAQ.items,
    Component: SystemConsolidationPage,
  },
  "s4hana-data-migration": {
    meta: S4HANA_META,
    breadcrumbLabel: "SAP S/4HANA Migration",
    serviceType: "SAP S/4HANA Data Migration",
    faqItems: S4HANA_FAQ.items,
    Component: S4HANAPage,
  },
};

const ALL_SOLUTION_SLUGS = Object.keys(DEDICATED_SOLUTIONS);

/* ------------------------------------------------------------------ */
/*  Static Params                                                      */
/* ------------------------------------------------------------------ */

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_SOLUTION_SLUGS.map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = DEDICATED_SOLUTIONS[slug];
  if (!config) return {};

  return {
    title: config.meta.title,
    description: config.meta.description,
    openGraph: {
      title: config.meta.title,
      description: config.meta.description,
      type: "website",
      siteName: "deKorvai",
      url: `${BASE_URL}/solutions/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: config.meta.title,
      description: config.meta.description,
    },
    alternates: {
      canonical: `${BASE_URL}/solutions/${slug}`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD (Service + BreadcrumbList + FAQPage)                       */
/* ------------------------------------------------------------------ */

function SolutionJsonLd({
  slug,
  config,
}: {
  slug: string;
  config: DedicatedSolutionConfig;
}) {
  const pageUrl = `${BASE_URL}/solutions/${slug}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Service",
      serviceType: config.serviceType,
      provider: {
        "@type": "Organization",
        name: "deKorvai",
        url: BASE_URL,
      },
      description: config.meta.description,
      url: pageUrl,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: `${BASE_URL}/solutions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: config.breadcrumbLabel,
          item: pageUrl,
        },
      ],
    },
  ];

  if (config.faqItems && config.faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: config.faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function SolutionRoute({ params }: SolutionPageProps) {
  const { slug } = await params;

  const config = DEDICATED_SOLUTIONS[slug];
  if (!config) {
    notFound();
  }

  const { Component } = config;

  return (
    <>
      <SolutionJsonLd slug={slug} config={config} />
      <Navbar />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
}
