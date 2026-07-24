"use client";

import {
  PlatformHero,
  PlatformAnswerFirst,
  PlatformStatBand,
  PlatformProblems,
  PlatformFeatures,
  PlatformBenefits,
  PlatformProof,
  PlatformFAQ,
  PlatformCTA,
} from "@/components/platform-sections";

import {
  SolutionHowItWorks,
  SolutionPoweredBy,
  SolutionRelatedSolutions,
  SolutionCustomerProof,
} from "@/components/solution-sections";

import {
  S4HANA_HERO,
  S4HANA_ANSWER_FIRST,
  S4HANA_STATS,
  S4HANA_PROBLEMS,
  S4HANA_FEATURES,
  S4HANA_APPROACHES,
  S4HANA_HOW_IT_WORKS,
  S4HANA_BENEFITS,
  S4HANA_POWERED_BY,
  S4HANA_PROOF,
  S4HANA_CUSTOMERS,
  S4HANA_FAQ,
  S4HANA_RELATED_SOLUTIONS,
  S4HANA_CTA,
} from "@/lib/s4hana-content";

export default function S4HANAPage() {
  return (
    <>
      <PlatformHero content={S4HANA_HERO} />
      <PlatformAnswerFirst content={S4HANA_ANSWER_FIRST} />
      <PlatformStatBand stats={S4HANA_STATS} />
      <PlatformProblems content={S4HANA_PROBLEMS} />
      <PlatformFeatures content={S4HANA_FEATURES} />
      <PlatformFeatures content={S4HANA_APPROACHES} />
      <SolutionHowItWorks content={S4HANA_HOW_IT_WORKS} />
      <PlatformBenefits content={S4HANA_BENEFITS} />
      <SolutionPoweredBy content={S4HANA_POWERED_BY} />
      <PlatformProof content={S4HANA_PROOF} />
      <SolutionCustomerProof content={S4HANA_CUSTOMERS} />
      <PlatformFAQ content={S4HANA_FAQ} />
      <SolutionRelatedSolutions content={S4HANA_RELATED_SOLUTIONS} />
      <PlatformCTA content={S4HANA_CTA} />
    </>
  );
}
