"use client";

import {
  PlatformHero,
  PlatformAnswerFirst,
  PlatformStatBand,
  PlatformProblems,
  PlatformFeatures,
  PlatformFunctionGrid,
  PlatformDimensionsTable,
  PlatformWorkflows,
  PlatformBenefits,
  PlatformUseCases,
  PlatformShift,
  PlatformArchitecture,
  PlatformQuoteProof,
  PlatformFAQ,
  PlatformRelatedPages,
  PlatformCTA,
} from "@/components/platform-sections";

import {
  MASKING_HERO,
  MASKING_ANSWER_FIRST,
  MASKING_STATS,
  MASKING_PROBLEMS,
  MASKING_FEATURES,
  MASKING_FUNCTIONS,
  MASKING_VS_ALTERNATIVES,
  MASKING_WORKFLOWS,
  MASKING_BENEFITS,
  MASKING_USE_CASES,
  MASKING_SHIFT,
  MASKING_ARCHITECTURE,
  MASKING_PROOF,
  MASKING_FAQ,
  MASKING_RELATED,
  MASKING_CTA,
} from "@/lib/masking-content";

export default function MaskingPage() {
  return (
    <>
      <PlatformHero content={MASKING_HERO} />
      <PlatformAnswerFirst content={MASKING_ANSWER_FIRST} />
      <PlatformStatBand stats={MASKING_STATS} />
      <PlatformProblems content={MASKING_PROBLEMS} />
      <PlatformFeatures content={MASKING_FEATURES} />
      <PlatformFunctionGrid content={MASKING_FUNCTIONS} />
      <PlatformDimensionsTable content={MASKING_VS_ALTERNATIVES} />
      <PlatformWorkflows content={MASKING_WORKFLOWS} />
      <PlatformBenefits content={MASKING_BENEFITS} />
      <PlatformUseCases content={MASKING_USE_CASES} />
      <PlatformShift content={MASKING_SHIFT} />
      <PlatformArchitecture content={MASKING_ARCHITECTURE} />
      <PlatformQuoteProof content={MASKING_PROOF} />
      <PlatformFAQ content={MASKING_FAQ} />
      <PlatformRelatedPages content={MASKING_RELATED} />
      <PlatformCTA content={MASKING_CTA} />
    </>
  );
}
