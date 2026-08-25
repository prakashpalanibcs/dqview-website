/**
 * Types for the global gtag.js function loaded in src/app/layout.tsx.
 *
 * Declared optional: gtag.js is injected by next/script after hydration and is
 * routinely blocked by ad blockers, so `window.gtag` can legitimately be
 * undefined. Call sites must optional-chain (`window.gtag?.(...)`) so a missing
 * tag can never throw and break the surrounding flow.
 */
type GtagConfigParams = Record<string, unknown>;

type GtagEventParams = {
  /** "AW-<conversion id>/<conversion label>" for Google Ads conversions. */
  send_to?: string;
  value?: number;
  currency?: string;
} & Record<string, unknown>;

declare global {
  interface Window {
    gtag?: {
      (command: "js", value: Date): void;
      (command: "config", targetId: string, params?: GtagConfigParams): void;
      (command: "event", eventName: string, params?: GtagEventParams): void;
    };
    dataLayer?: unknown[];
  }
}

export {};
