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
  SolutionPoweredBy,
  SolutionRelatedSolutions,
  SolutionCustomerProof,
} from "@/components/solution-sections";

import {
  DQG_HERO,
  DQG_ANSWER_FIRST,
  DQG_PROBLEMS,
  DQG_FEATURES,
  DQG_HOW_IT_WORKS,
  DQG_BENEFITS,
  DQG_POWERED_BY,
  DQG_PROOF,
  DQG_FAQ,
  DQG_RELATED_SOLUTIONS,
  DQG_CTA,
} from "@/lib/dqg-content";

export default function DQGPage() {
  return (
    <>
      <PlatformHero content={DQG_HERO} />
      <PlatformAnswerFirst content={DQG_ANSWER_FIRST} />
      <PlatformProblems content={DQG_PROBLEMS} />
      <PlatformFeatures content={DQG_FEATURES} />
      <SolutionHowItWorks content={DQG_HOW_IT_WORKS} />
      <PlatformBenefits content={DQG_BENEFITS} />
      <SolutionPoweredBy content={DQG_POWERED_BY} />
      <SolutionCustomerProof content={DQG_PROOF} />
      <PlatformFAQ content={DQG_FAQ} />
      <SolutionRelatedSolutions content={DQG_RELATED_SOLUTIONS} />
      <PlatformCTA content={DQG_CTA} />
    </>
  );
}
