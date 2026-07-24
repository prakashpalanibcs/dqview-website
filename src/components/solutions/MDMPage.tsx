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
  SolutionBeforeAfter,
  SolutionHowItWorks,
  SolutionEntities,
  SolutionPoweredBy,
  SolutionRelatedSolutions,
} from "@/components/solution-sections";

import {
  MDM_HERO,
  MDM_ANSWER_FIRST,
  MDM_STATS,
  MDM_PROBLEMS,
  MDM_FEATURES,
  MDM_BEFORE_AFTER,
  MDM_HOW_IT_WORKS,
  MDM_BENEFITS,
  MDM_ENTITIES,
  MDM_POWERED_BY,
  MDM_PROOF,
  MDM_FAQ,
  MDM_RELATED_SOLUTIONS,
  MDM_CTA,
} from "@/lib/mdm-content";

export default function MDMPage() {
  return (
    <>
      <PlatformHero content={MDM_HERO} />
      <PlatformAnswerFirst content={MDM_ANSWER_FIRST} />
      <PlatformStatBand stats={MDM_STATS} />
      <PlatformProblems content={MDM_PROBLEMS} />
      <PlatformFeatures content={MDM_FEATURES} />
      <SolutionBeforeAfter content={MDM_BEFORE_AFTER} />
      <SolutionHowItWorks content={MDM_HOW_IT_WORKS} />
      <PlatformBenefits content={MDM_BENEFITS} />
      <SolutionEntities content={MDM_ENTITIES} />
      <SolutionPoweredBy content={MDM_POWERED_BY} />
      <PlatformProof content={MDM_PROOF} />
      <PlatformFAQ content={MDM_FAQ} />
      <SolutionRelatedSolutions content={MDM_RELATED_SOLUTIONS} />
      <PlatformCTA content={MDM_CTA} />
    </>
  );
}
