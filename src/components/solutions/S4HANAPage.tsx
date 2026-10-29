"use client";

import { PlatformFAQ } from "@/components/platform-sections";
import {
  SolutionPoweredBy,
  SolutionRelatedSolutions,
} from "@/components/solution-sections";

import {
  S4HANAHero,
  S4HANATrustStrip,
  S4HANAReadinessSection,
  S4HANAUrgencyStats,
  S4HANADataPath,
  S4HANAApproaches,
  S4HANAScaleProof,
  S4HANAFinalCta,
  S4HANAStickyCta,
} from "@/components/solutions/s4hana-sections";

import {
  S4HANA_HERO,
  S4HANA_TRUST,
  S4HANA_FORM,
  S4HANA_URGENCY,
  S4HANA_PATH,
  S4HANA_APPROACHES,
  S4HANA_SCALE,
  S4HANA_POWERED_BY,
  S4HANA_FAQ,
  S4HANA_RELATED_SOLUTIONS,
  S4HANA_FINAL_CTA,
  S4HANA_STICKY_CTA_LABEL,
} from "@/lib/s4hana-content";

export default function S4HANAPage() {
  return (
    <>
      <S4HANAHero content={S4HANA_HERO} />
      <S4HANATrustStrip content={S4HANA_TRUST} />
      <S4HANAReadinessSection content={S4HANA_FORM} />
      <S4HANAUrgencyStats content={S4HANA_URGENCY} />
      <S4HANADataPath content={S4HANA_PATH} />
      <S4HANAApproaches content={S4HANA_APPROACHES} />
      <S4HANAScaleProof content={S4HANA_SCALE} />
      <SolutionPoweredBy content={S4HANA_POWERED_BY} />
      <PlatformFAQ content={S4HANA_FAQ} />
      <SolutionRelatedSolutions content={S4HANA_RELATED_SOLUTIONS} />
      <S4HANAFinalCta content={S4HANA_FINAL_CTA} />
      <S4HANAStickyCta label={S4HANA_STICKY_CTA_LABEL} />
    </>
  );
}
