import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPage from "@/components/contact/ContactPage";
import {
  CONTACT_META,
  CONTACT_OFFICES,
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
} from "@/lib/contact-content";

const BASE_URL = "https://www.dekorvai.com";
const PAGE_URL = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: CONTACT_META.title,
  description: CONTACT_META.description,
  openGraph: {
    title: CONTACT_META.title,
    description: CONTACT_META.description,
    type: "website",
    siteName: "deKorvai",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_META.title,
    description: CONTACT_META.description,
  },
  alternates: {
    canonical: "/contact",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD: ContactPage + Organization (6 locations) + BreadcrumbList  */
/* ------------------------------------------------------------------ */

function ContactJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: "Contact deKorvai",
        description: CONTACT_META.description,
        url: PAGE_URL,
      },
      {
        "@type": "Organization",
        name: "deKorvai",
        url: BASE_URL,
        logo: `${BASE_URL}/logo-horizontal.svg`,
        email: CONTACT_EMAIL,
        sameAs: [CONTACT_LINKEDIN],
        parentOrganization: {
          "@type": "Organization",
          name: "Business Core Solutions",
          url: "https://www.businesscoresolutions.com",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT_EMAIL,
          availableLanguage: "English",
        },
        location: CONTACT_OFFICES.map((office) => ({
          "@type": "Place",
          name: `deKorvai ${office.country} — ${office.role}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: office.city,
            addressCountry: office.addressCountry,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
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

export default function ContactRoute() {
  return (
    <>
      <ContactJsonLd />
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
