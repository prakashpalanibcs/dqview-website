/* ------------------------------------------------------------------ */
/*  Contact page content                                               */
/*  Copy is taken verbatim from the approved page spec                  */
/*  (deKorvai_Contact_Page_Spec / dekorvai_contact_page.html).          */
/* ------------------------------------------------------------------ */

export const CONTACT_META = {
  title: "Contact deKorvai — Talk to a Data Platform Specialist | deKorvai",
  description:
    "Get in touch with deKorvai for data quality, migration, masking, or master data challenges. Send a message or book a demo — with offices across the US, Europe, UK, India, and Australia.",
};

export const CONTACT_HERO = {
  badge: "Let's Talk",
  title: "Let's Start a Conversation",
  lead: "Tell us what you're working through — a data quality headache, an S/4HANA move, protecting data in test environments, or a master-data mess you'd rather not inherit. A real person on our team will read it and get back to you, usually within a business day.",
};

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

export const CONTACT_TABS = {
  message: {
    label: "Send a message",
    intro:
      "Give us a sense of what you're dealing with and where you'd like to get to. Picking an area just helps us get you to the right person faster.",
  },
  demo: {
    label: "Book a demo",
    intro:
      "Grab 30 minutes with someone on our team. No slides-at-you pitch — just a real conversation about your data and where you're trying to take it.",
    note: "30-minute discovery session. Web conferencing details provided upon confirmation.",
    /* Shown only if the embedded scheduler fails to load (blocked scripts, offline). */
    fallbackLead: "The scheduler could not load.",
    fallbackLabel: "Open the booking page",
  },
};

/* ------------------------------------------------------------------ */
/*  Form                                                               */
/* ------------------------------------------------------------------ */

export const AREA_OF_INTEREST_OPTIONS = [
  "Data Quality & Profiling",
  "ETL",
  "Data Masking / Test Data",
  "Master Data Management",
  "S/4HANA Migration",
  "Compliance (GDPR / HIPAA / SOX)",
  "System Consolidation",
  "Agentic AI",
  "Partnership",
  "Something else",
];

export const ATTRIBUTION_OPTIONS = [
  "Search engine (Google, Bing)",
  "LinkedIn",
  "Referral / word of mouth",
  "Event or conference",
  "Industry publication or blog",
  "Business Core Solutions",
  "Other",
];

export const CONTACT_FORM = {
  areaLabel: "Primary area of interest",
  areaPlaceholder: "Select an area",
  fullNameLabel: "Full name",
  fullNamePlaceholder: "Your full name",
  emailLabel: "Work email",
  emailPlaceholder: "you@company.com",
  companyLabel: "Company",
  companyPlaceholder: "Company name",
  countryLabel: "Country / region",
  countryPlaceholder: "e.g. Germany",
  messageLabel: "How can we help?",
  messagePlaceholder:
    "A few lines on your current landscape, the goal, and any timeline or deadline.",
  attributionLabel: "How did you find us?",
  attributionPlaceholder: "Select an option (optional)",
  submitLabel: "Send message",
  sendingLabel: "Sending…",
  note: "We reply within one business day. Your details are used only to respond to your enquiry.",
  successTitle: "Message sent",
  successBody:
    "Thanks — your enquiry is with us. Someone on the team will read it and reply within one business day.",
  successAgainLabel: "Send another message",
  errorTitle: "That did not go through",
  errorBody:
    "Something went wrong sending your message. Your details are still filled in below, so you can try again — or email us directly at",
};

/* ------------------------------------------------------------------ */
/*  Global offices                                                     */
/* ------------------------------------------------------------------ */

export interface Office {
  /** ISO-3166 alpha-2, shown as the card eyebrow */
  code: string;
  country: string;
  role: string;
  city: string;
  /** Used for the PostalAddress in JSON-LD */
  addressCountry: string;
}

export const CONTACT_OFFICES: Office[] = [
  { code: "NL", country: "Netherlands", role: "Europe HQ", city: "Almere", addressCountry: "NL" },
  { code: "US", country: "United States", role: "Americas", city: "Myrtle Beach, SC", addressCountry: "US" },
  { code: "GB", country: "United Kingdom", role: "UK", city: "Leicester", addressCountry: "GB" },
  { code: "DE", country: "Germany", role: "DACH", city: "Walldorf", addressCountry: "DE" },
  { code: "IN", country: "India", role: "Engineering Hub", city: "Chennai", addressCountry: "IN" },
  { code: "AU", country: "Australia", role: "APAC", city: "Blacktown, NSW", addressCountry: "AU" },
];

export const CONTACT_OFFICES_SECTION = {
  eyebrow: "Global Offices",
  title: "Six countries, one delivery network",
  lead: "We operate across the US, Europe, the UK, India, and Australia — so enquiries are covered through the working day in most time zones.",
};

/* ------------------------------------------------------------------ */
/*  Direct contact + attribution                                       */
/* ------------------------------------------------------------------ */

export const CONTACT_EMAIL = "hello@businesscoresolutions.com";
export const CONTACT_LINKEDIN = "https://www.linkedin.com/company/dekorvai/";

export const CONTACT_DIRECT = {
  title: "Direct contact",
  lead: "Prefer to skip the form? Reach us straight away.",
  emailLabel: CONTACT_EMAIL,
  linkedinLabel: "deKorvai on LinkedIn",
};

export const CONTACT_ATTRIBUTION = {
  before: "deKorvai is a product of ",
  linkLabel: "Business Core Solutions",
  href: "https://businesscoresolutions.com/",
  after: ".",
};
