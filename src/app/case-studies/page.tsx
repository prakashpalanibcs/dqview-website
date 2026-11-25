import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesListing from "@/components/case-studies/CaseStudiesListing";
import { JsonLd } from "@/components/case-studies/case-study-sections";
import { CASE_STUDIES_LISTING as L } from "@/lib/case-studies-content";
import { caseStudiesListingJsonLd } from "@/lib/case-studies-schema";

// The design names an og:image (/images/case-studies/case-studies-card.jpg) that
// was not supplied with the page files, so the listing has no image of its own yet.
export const metadata: Metadata = {
  title: L.metaTitle,
  description: L.metaDescription,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    type: "article",
    siteName: "deKorvai",
    title: L.metaTitle,
    description: L.metaDescription,
    url: "/case-studies",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: L.metaTitle,
    description: L.metaDescription,
  },
};

export default function CaseStudiesRoute() {
  return (
    <>
      <JsonLd data={caseStudiesListingJsonLd()} />
      <Navbar />
      <CaseStudiesListing />
      <Footer />
    </>
  );
}
