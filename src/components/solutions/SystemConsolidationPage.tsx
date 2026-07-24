"use client";

import {
  PlatformHero,
  PlatformAnswerFirst,
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
} from "@/components/solution-sections";

import {
  SYSCON_HERO,
  SYSCON_ANSWER_FIRST,
  SYSCON_PROBLEMS,
  SYSCON_FEATURES,
  SYSCON_HOW_IT_WORKS,
  SYSCON_BENEFITS,
  SYSCON_POWERED_BY,
  SYSCON_PROOF,
  SYSCON_FAQ,
  SYSCON_RELATED_SOLUTIONS,
  SYSCON_CTA,
} from "@/lib/syscon-content";

export default function SystemConsolidationPage() {
  return (
    <>
      <PlatformHero content={SYSCON_HERO} />
      <PlatformAnswerFirst content={SYSCON_ANSWER_FIRST} />
      <PlatformProblems content={SYSCON_PROBLEMS} />
      <PlatformFeatures content={SYSCON_FEATURES} />
      <SolutionHowItWorks content={SYSCON_HOW_IT_WORKS} />
      <PlatformBenefits content={SYSCON_BENEFITS} />
      <SolutionPoweredBy content={SYSCON_POWERED_BY} />
      <PlatformProof content={SYSCON_PROOF} />
      <PlatformFAQ content={SYSCON_FAQ} />
      <SolutionRelatedSolutions content={SYSCON_RELATED_SOLUTIONS} />
      <PlatformCTA content={SYSCON_CTA} />
    </>
  );
}
