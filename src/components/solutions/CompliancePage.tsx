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
  SolutionByRegulation,
} from "@/components/solution-sections";

import {
  COMPLIANCE_HERO,
  COMPLIANCE_ANSWER_FIRST,
  COMPLIANCE_PROBLEMS,
  COMPLIANCE_FEATURES,
  COMPLIANCE_BY_REGULATION,
  COMPLIANCE_HOW_IT_WORKS,
  COMPLIANCE_BENEFITS,
  COMPLIANCE_DATA_SCOPE,
  COMPLIANCE_POWERED_BY,
  COMPLIANCE_PROOF,
  COMPLIANCE_FAQ,
  COMPLIANCE_RELATED_SOLUTIONS,
  COMPLIANCE_CTA,
} from "@/lib/compliance-content";

export default function CompliancePage() {
  return (
    <>
      <PlatformHero content={COMPLIANCE_HERO} />
      <PlatformAnswerFirst content={COMPLIANCE_ANSWER_FIRST} />
      <PlatformProblems content={COMPLIANCE_PROBLEMS} />
      <PlatformFeatures content={COMPLIANCE_FEATURES} />
      <SolutionByRegulation content={COMPLIANCE_BY_REGULATION} />
      <SolutionHowItWorks content={COMPLIANCE_HOW_IT_WORKS} />
      <PlatformBenefits content={COMPLIANCE_BENEFITS} />
      <SolutionEntities content={COMPLIANCE_DATA_SCOPE} />
      <SolutionPoweredBy content={COMPLIANCE_POWERED_BY} />
      <SolutionCustomerProof content={COMPLIANCE_PROOF} />
      <PlatformFAQ content={COMPLIANCE_FAQ} />
      <SolutionRelatedSolutions content={COMPLIANCE_RELATED_SOLUTIONS} />
      <PlatformCTA content={COMPLIANCE_CTA} />
    </>
  );
}
