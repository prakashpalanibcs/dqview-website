import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryPage from "@/components/industries/IndustryPage";
import { ALL_INDUSTRIES } from "@/lib/industry-content";

const BASE_URL = "https://www.dekorvai.com";

/* ------------------------------------------------------------------ */
/*  Static Params                                                      */
/* ------------------------------------------------------------------ */

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(ALL_INDUSTRIES).map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = ALL_INDUSTRIES[slug];
  if (!content) return {};

  const pageUrl = `${BASE_URL}/industries/${slug}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      type: "website",
      siteName: "deKorvai",
      url: pageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: content.meta.title,
      description: content.meta.description,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD (WebPage + BreadcrumbList)                                 */
/* ------------------------------------------------------------------ */

function IndustryJsonLd({
  slug,
  breadcrumbLabel,
  description,
}: {
  slug: string;
  breadcrumbLabel: string;
  description: string;
}) {
  const pageUrl = `${BASE_URL}/industries/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: breadcrumbLabel,
        description,
        url: pageUrl,
        publisher: {
          "@type": "Organization",
          name: "deKorvai",
          url: BASE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Industries",
            item: `${BASE_URL}/industries`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: breadcrumbLabel,
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

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function IndustryRoute({ params }: IndustryPageProps) {
  const { slug } = await params;

  const content = ALL_INDUSTRIES[slug];
  if (!content) {
    notFound();
  }

  return (
    <>
      <IndustryJsonLd
        slug={slug}
        breadcrumbLabel={content.breadcrumbLabel}
        description={content.meta.description}
      />
      <Navbar />
      <main>
        <IndustryPage content={content} />
      </main>
      <Footer />
    </>
  );
}
