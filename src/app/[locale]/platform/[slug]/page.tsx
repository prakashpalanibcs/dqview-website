import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformDetailPage from "@/components/PlatformDetailPage";
import DataQualityPage from "@/components/data-quality/DataQualityPage";
import ETLPage from "@/components/etl/ETLPage";
import MaskingPage from "@/components/masking/MaskingPage";
import AgenticPage from "@/components/agentic/AgenticPage";
import IntegrationsPage from "@/components/integrations/IntegrationsPage";
import {
  getPlatformPageBySlug,
  getAllPlatformSlugs,
} from "@/lib/platform-content";
import { DQ_META } from "@/lib/data-quality-content";
import { ETL_META } from "@/lib/etl-content";
import { MASKING_META } from "@/lib/masking-content";
import { AGENTIC_META } from "@/lib/agentic-content";
import { INTEGRATIONS_META } from "@/lib/integrations-content";

const BASE_URL = "https://www.dekorvai.com";

interface DedicatedPageConfig {
  meta: { title: string; description: string };
  breadcrumbLabel: string;
  softwareAppName: string;
  Component: React.ComponentType;
}

const DEDICATED_PAGES: Record<string, DedicatedPageConfig> = {
  "data-quality-profiling": {
    meta: DQ_META,
    breadcrumbLabel: "Data Quality",
    softwareAppName: "deKorvai Data Quality",
    Component: DataQualityPage,
  },
  "etl": {
    meta: ETL_META,
    breadcrumbLabel: "ETL",
    softwareAppName: "deKorvai ETL",
    Component: ETLPage,
  },
  "data-masking": {
    meta: MASKING_META,
    breadcrumbLabel: "Data Masking",
    softwareAppName: "deKorvai Data Masking",
    Component: MaskingPage,
  },
  "agentic-ai": {
    meta: AGENTIC_META,
    breadcrumbLabel: "Agentic AI",
    softwareAppName: "deKorvai Agentic AI",
    Component: AgenticPage,
  },
  "integrations": {
    meta: INTEGRATIONS_META,
    breadcrumbLabel: "Integrations",
    softwareAppName: "deKorvai Integrations",
    Component: IntegrationsPage,
  },
};

interface PlatformPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllPlatformSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PlatformPageProps): Promise<Metadata> {
  const { slug } = await params;

  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) {
    return {
      title: dedicated.meta.title,
      description: dedicated.meta.description,
      openGraph: {
        title: dedicated.meta.title,
        description: dedicated.meta.description,
        type: "website",
        siteName: "deKorvai",
        url: `${BASE_URL}/en/platform/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: dedicated.meta.title,
        description: dedicated.meta.description,
      },
      alternates: {
        canonical: `${BASE_URL}/en/platform/${slug}`,
      },
    };
  }

  const content = getPlatformPageBySlug(slug);
  if (!content) return {};

  return {
    title: `${content.badge} | deKorvai Platform`,
    description: content.subtitle,
  };
}

function PlatformJsonLd({ slug, config }: { slug: string; config: DedicatedPageConfig }) {
  const pageUrl = `${BASE_URL}/en/platform/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: config.softwareAppName,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: config.meta.description,
        url: pageUrl,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Contact for enterprise pricing",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Platform",
            item: `${BASE_URL}/en/platform`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: config.breadcrumbLabel,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const dedicated = DEDICATED_PAGES[slug];
  if (dedicated) {
    const { Component } = dedicated;
    return (
      <>
        <PlatformJsonLd slug={slug} config={dedicated} />
        <Navbar />
        <main>
          <Component />
        </main>
        <Footer />
      </>
    );
  }

  const content = getPlatformPageBySlug(slug);
  if (!content) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <PlatformDetailPage slug={slug} />
      </main>
      <Footer />
    </>
  );
}
