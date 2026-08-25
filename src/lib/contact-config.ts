/**
 * Shared contact-form tuning values.
 *
 * These are read by both the client form (src/components/contact/ContactPage.tsx)
 * and the server route (src/app/api/contact/route.ts). Keeping them here means a
 * change lands on both sides at once — a client/server mismatch here would
 * either drop real enquiries or report bot traffic to Google Ads.
 */

/**
 * Minimum time a visitor must spend on the form before a submission is trusted.
 * Bots post instantly; a person filling five required fields does not.
 *
 * Raising this rejects more bots but also risks catching genuinely fast humans
 * (autofill, paste, a returning visitor). A caught submission is still recorded
 * in Netlify Forms, but no email alert is sent and no Google Ads conversion
 * fires, so the lead is only visible to someone checking the dashboard.
 */
export const MIN_FILL_MS = 3000;
