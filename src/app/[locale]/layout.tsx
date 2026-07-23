import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "deKorvai | Data Quality, ETL & Data Masking Platform (Unified Data Integrity)",
  description:
    "deKorvai unifies data quality profiling, ETL, and data masking (scrambling) into one AI-powered data integrity platform — for test data management, data quality governance, and SAP S/4HANA migration. Book a demo.",
  openGraph: {
    title: "deKorvai | Data Quality, ETL & Data Masking Platform",
    description:
      "Unified data integrity platform combining data quality profiling, ETL, data masking, and agentic AI. Replace four disconnected tools with one.",
    type: "website",
    siteName: "deKorvai",
  },
  twitter: {
    card: "summary_large_image",
    title: "deKorvai | Data Quality, ETL & Data Masking Platform",
    description:
      "Unified data integrity platform combining data quality profiling, ETL, data masking, and agentic AI.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "deKorvai",
                  url: "https://www.dekorvai.com",
                  logo: "https://www.dekorvai.com/logo-horizontal.svg",
                  parentOrganization: {
                    "@type": "Organization",
                    name: "Business Core Solutions",
                    url: "https://www.businesscoresolutions.com",
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/business-core-solutions",
                  ],
                },
                {
                  "@type": "SoftwareApplication",
                  name: "deKorvai",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  description:
                    "Unified data integrity and orchestration platform combining data quality profiling, ETL, data masking (scrambling), and agentic AI.",
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
                      item: "https://www.dekorvai.com",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
