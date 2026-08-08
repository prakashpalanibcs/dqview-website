import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// The site was previously served under /en, /nl and /de prefixes. It is now
// English-only on unprefixed URLs, so every legacy prefixed URL 301s to its
// clean equivalent. Also declared in netlify.toml so the redirect resolves at
// the CDN edge; this copy keeps it working on any host and testable locally.
const LEGACY_LOCALES = ["en", "nl", "de"];

const nextConfig: NextConfig = {
  async redirects() {
    return LEGACY_LOCALES.flatMap((locale) => [
      { source: `/${locale}`, destination: "/", permanent: true },
      { source: `/${locale}/:path*`, destination: "/:path*", permanent: true },
    ]);
  },
};

export default withNextIntl(nextConfig);
