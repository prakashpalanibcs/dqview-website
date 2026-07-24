"use client";

import {
  PlatformHero,
  PlatformAnswerFirst,
  PlatformStatBand,
  PlatformProblems,
  PlatformFeatures,
  PlatformPipeline,
  PlatformDimensionsTable,
  PlatformWorkflows,
  PlatformBenefits,
  PlatformUseCases,
  PlatformShift,
  PlatformArchitecture,
  PlatformProof,
  PlatformConnectors,
  PlatformFAQ,
  PlatformRelatedPages,
  PlatformCTA,
} from "@/components/platform-sections";

import {
  ETL_HERO,
  ETL_ANSWER_FIRST,
  ETL_STATS,
  ETL_PROBLEMS,
  ETL_FEATURES,
  ETL_PIPELINE,
  ETL_VS_ELT,
  ETL_WORKFLOWS,
  ETL_BENEFITS,
  ETL_USE_CASES,
  ETL_SHIFT,
  ETL_ARCHITECTURE,
  ETL_PROOF,
  ETL_CONNECTORS,
  ETL_FAQ,
  ETL_RELATED,
  ETL_CTA,
} from "@/lib/etl-content";

export default function ETLPage() {
  return (
    <>
      <PlatformHero content={ETL_HERO} />
      <PlatformAnswerFirst content={ETL_ANSWER_FIRST} />
      <PlatformStatBand stats={ETL_STATS} />
      <PlatformProblems content={ETL_PROBLEMS} />
      <PlatformFeatures content={ETL_FEATURES} />
      <PlatformPipeline content={ETL_PIPELINE} />
      <PlatformDimensionsTable content={ETL_VS_ELT} />
      <PlatformWorkflows content={ETL_WORKFLOWS} />
      <PlatformBenefits content={ETL_BENEFITS} />
      <PlatformUseCases content={ETL_USE_CASES} />
      <PlatformShift content={ETL_SHIFT} />
      <PlatformArchitecture content={ETL_ARCHITECTURE} />
      <PlatformProof content={ETL_PROOF} />
      <PlatformConnectors content={ETL_CONNECTORS} />
      <PlatformFAQ content={ETL_FAQ} />
      <PlatformRelatedPages content={ETL_RELATED} />
      <PlatformCTA content={ETL_CTA} />
    </>
  );
}
