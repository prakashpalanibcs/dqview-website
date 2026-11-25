/**
 * JSON-LD for the case study pages, as specified (and validated) in the
 * approved page designs: CollectionPage + ItemList + BreadcrumbList for the
 * listing; Article + WebPage + BreadcrumbList + FAQPage for each case study.
 */
import {
  CASE_STUDIES,
  CASE_STUDIES_LISTING,
  CASE_STUDIES_PUBLISHED,
  CASE_STUDIES_SITE as SITE,
  type CaseStudy,
} from "./case-studies-content";

const LISTING_URL = `${SITE}/case-studies`;
const WEBSITE_ID = `${SITE}/#website`;
const SOFTWARE_ID = `${SITE}/#software`;
const ORGANIZATION_ID = "https://www.businesscoresolutions.com/#organization";

const crumb = (position: number, name: string, item: string): object => ({
  "@type": "ListItem",
  position,
  name,
  item,
});

export function caseStudiesListingJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${LISTING_URL}#webpage`,
        url: LISTING_URL,
        name: CASE_STUDIES_LISTING.metaTitle,
        description: CASE_STUDIES_LISTING.metaDescription,
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORGANIZATION_ID },
        about: { "@id": SOFTWARE_ID },
        inLanguage: "en",
        breadcrumb: { "@id": `${LISTING_URL}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: CASE_STUDIES.map((study, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${LISTING_URL}/${study.slug}`,
            name: study.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${LISTING_URL}#breadcrumb`,
        itemListElement: [
          crumb(1, "Home", SITE),
          crumb(2, CASE_STUDIES_LISTING.breadcrumb, LISTING_URL),
        ],
      },
    ],
  };
}

export function caseStudyJsonLd(study: CaseStudy): object {
  const url = `${LISTING_URL}/${study.slug}`;
  const image = `${SITE}${study.image}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.title,
        description: study.metaDescription,
        url,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        articleSection: "Case study",
        inLanguage: "en",
        publisher: { "@id": ORGANIZATION_ID },
        author: { "@id": ORGANIZATION_ID },
        about: { "@id": SOFTWARE_ID },
        image,
        datePublished: CASE_STUDIES_PUBLISHED,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: study.metaTitle,
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          crumb(1, "Home", SITE),
          crumb(2, CASE_STUDIES_LISTING.breadcrumb, LISTING_URL),
          crumb(3, study.breadcrumb, url),
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: study.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
