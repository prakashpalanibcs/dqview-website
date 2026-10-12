import type { MetadataRoute } from "next";

// Serves /robots.txt. The host and sitemap URL resolve against the
// metadataBase declared in src/app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The Decap CMS admin shell, the form-handler stub Netlify needs at
      // build time, and the contact API route. None of them are content.
      disallow: ["/admin", "/api/", "/__forms.html"],
    },
    sitemap: "https://www.dekorvai.com/sitemap.xml",
    host: "https://www.dekorvai.com",
  };
}
