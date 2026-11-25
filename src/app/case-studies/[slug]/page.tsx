import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import { JsonLd } from "@/components/case-studies/case-study-sections";
import { CASE_STUDIES, CASE_STUDIES_PUBLISHED, getCaseStudy } from "@/lib/case-studies-content";
import { caseStudyJsonLd } from "@/lib/case-studies-schema";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Not Found" };
  const url = `/case-studies/${slug}`;
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
      type: "article",
      siteName: "deKorvai",
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      images: [study.image],
      locale: "en_US",
      publishedTime: CASE_STUDIES_PUBLISHED,
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
      images: [study.image],
    },
  };
}

export default async function CaseStudyRoute({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <JsonLd data={caseStudyJsonLd(study)} />
      <Navbar />
      <CaseStudyDetail study={study} />
      <Footer />
    </>
  );
}
