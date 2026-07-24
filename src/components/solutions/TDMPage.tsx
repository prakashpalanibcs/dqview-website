"use client";

import {
  PlatformHero,
  PlatformAnswerFirst,
  PlatformProblems,
  PlatformFeatures,
  PlatformBenefits,
  PlatformFAQ,
  PlatformCTA,
} from "@/components/platform-sections";

import {
  SolutionHowItWorks,
  SolutionEntities,
  SolutionPoweredBy,
  SolutionRelatedSolutions,
  SolutionCustomerProof,
} from "@/components/solution-sections";

import {
  TDM_HERO,
  TDM_ANSWER_FIRST,
  TDM_PROBLEMS,
  TDM_FEATURES,
  TDM_MASKING_FUNCTIONS,
  TDM_HOW_IT_WORKS,
  TDM_BENEFITS,
  TDM_DATA_SCOPE,
  TDM_POWERED_BY,
  TDM_PROOF,
  TDM_FAQ,
  TDM_RELATED_SOLUTIONS,
  TDM_CTA,
} from "@/lib/tdm-content";

export default function TDMPage() {
  return (
    <>
      <PlatformHero content={TDM_HERO} />
      <PlatformAnswerFirst content={TDM_ANSWER_FIRST} />
      <PlatformProblems content={TDM_PROBLEMS} />
      <PlatformFeatures content={TDM_FEATURES} />
      <SolutionEntities content={TDM_MASKING_FUNCTIONS} />
      <SolutionHowItWorks content={TDM_HOW_IT_WORKS} />
      <PlatformBenefits content={TDM_BENEFITS} />
      <SolutionEntities content={TDM_DATA_SCOPE} />
      <SolutionPoweredBy content={TDM_POWERED_BY} />
      <SolutionCustomerProof content={TDM_PROOF} />
      <PlatformFAQ content={TDM_FAQ} />
      <SolutionRelatedSolutions content={TDM_RELATED_SOLUTIONS} />
      <PlatformCTA content={TDM_CTA} />
    </>
  );
}
