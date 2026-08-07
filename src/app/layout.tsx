import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dekorvai.com"),
  alternates: {
    canonical: "/",
  },
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M97CFKN4');`,
          }}
        />
        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VY2DPTL0KG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VY2DPTL0KG');`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "xqw97mh0rm");`,
          }}
        />
        {/* Factors.ai */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))},this.call=function(){var e={k:"",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener("message",function(t){"faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)})},this.message(),this.init("3a4d7p90lahzjpr0i58h6m5rl9foq92j",{host:"https://api.factors.ai"}),this}(),function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://app.factors.ai/assets/factors.js",t.async=!0,(d=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,d)}();`,
          }}
        />
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
                  sameAs: ["https://www.linkedin.com/company/dekorvai/"],
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M97CFKN4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider locale="en" messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
