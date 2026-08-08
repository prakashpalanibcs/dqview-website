import { getRequestConfig } from "next-intl/server";

// Single-locale site. next-intl is retained purely as the string catalog
// (messages/en.json) — there is no locale routing or prefix.
export const locale = "en";

export default getRequestConfig(async () => ({
  locale,
  messages: (await import("../../messages/en.json")).default,
}));
