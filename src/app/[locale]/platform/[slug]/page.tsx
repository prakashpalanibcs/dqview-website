import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformDetailPage from "@/components/PlatformDetailPage";
import DataQualityPage from "@/components/data-quality/DataQualityPage";
import {
  getPlatformPageBySlug,
  getAllPlatformSlugs,
} from "@/lib/platform-content";
import { DQ_META } from "@/lib/data-quality-content";

const DATA_QUALITY_SLUG = "data-quality-profiling";

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

  if (slug === DATA_QUALITY_SLUG) {
    return {
      title: DQ_META.title,
      description: DQ_META.description,
      openGraph: {
        title: DQ_META.title,
        description: DQ_META.description,
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

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (slug === DATA_QUALITY_SLUG) {
    return (
      <>
        <Navbar />
        <main>
          <DataQualityPage />
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
