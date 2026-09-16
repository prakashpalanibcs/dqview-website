---
title: "S/4HANA Migration: The Complete Guide (Phase by Phase)"
excerpt: "A phase-by-phase guide to S/4HANA migration: assess, plan, prepare data, convert, migrate, test and reconcile, cut over. Why data preparation is the phase that decides success."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "s4hana-migration-guide"
---

**The short answer.** An S/4HANA migration runs in phases: assess (readiness check and profiling), plan (approach and scope), prepare data (cleanse, de-duplicate, Business Partner conversion), convert or build (technical conversion or new implementation), migrate data (extract, transform, load), test and reconcile, then cut over and stabilise. The technical steps are well understood. The phase that decides success is data preparation, because S/4HANA's stricter model rejects data that ECC tolerated. Get the data right and the rest follows.

A full S/4HANA migration has a lot of moving parts, and it helps to see the whole shape before diving into any one piece. This guide walks the phases end to end, in plain terms, and is honest about where the real effort sits. Think of it as the map, with pointers to the detailed guides for each stage.

## The phases, end to end

1. **Assess.** Run the SAP Readiness Check against your ECC system and profile your data. This tells you what the migration involves, from simplification items and custom code to data volume and quality.
2. **Plan.** Choose your approach (greenfield, brownfield, or bluefield) and decide scope, what data moves, what is archived, what is left behind, informed by the assessment.
3. **Prepare data.** Cleanse and de-duplicate master data, complete the Business Partner conversion, and get data ready to the standard S/4HANA requires. This is the long pole.
4. **Convert or build.** Run the technical conversion (brownfield, via SUM with DMO) or build the new system (greenfield).
5. **Migrate data.** Extract, transform, and load data into S/4HANA, through the Migration Cockpit for a new implementation or as part of the conversion.
6. **Test and reconcile.** Validate throughout and reconcile the migrated data against the source, so accuracy is proven.
7. **Cut over and stabilise.** Go live, then stabilise during the hypercare period that follows.

## The phase that decides success

> Six of the seven phases are well understood. The seventh, data preparation, is the one that expands to consume the time you did not plan for.

Look across those phases and one truth stands out: the technical steps are predictable and well-tooled, while data preparation is open-ended. S/4HANA uses a different, stricter data model, the Business Partner model unifying customers and vendors, the Universal Journal consolidating finance, so data that was acceptable in ECC often cannot move across unchanged. It has to be profiled, cleansed, de-duplicated, and transformed first. This is why migrations slip on data, not technology, and why the assess and prepare-data phases deserve the most attention and the earliest start.

## Where the approach fits

Your choice of approach shapes several phases. Greenfield is a new build, so the plan phase involves process redesign and the data phase is about choosing what deserves to move. Brownfield is a conversion in place, using SUM with DMO for the technical step, and it carries data forward, so the prepare-data phase is about cleaning what comes with you. Bluefield selectively transitions, so scope decisions are central. Whichever you pick, the data preparation phase remains, because no approach succeeds on dirty data. The approach changes the shape of the work, not the need to get the data right.

## Testing and reconciliation are not optional

The test-and-reconcile phase is where a migration goes from assumed-successful to proven-successful. Validating data throughout the pipeline catches errors early, and reconciling the migrated result against the source, matching counts and values, proves nothing was lost or altered. This matters especially for financial data moving into the Universal Journal, where the business will not accept balances that do not tie back to ECC. Skipping or rushing this phase is how a technically complete migration becomes one no one quite trusts. Build the ability to prove accuracy in from the start.

## The phase everyone forgets: hypercare

The final phase, hypercare, is the one that gets least attention in planning and matters more than people expect. After go-live, the system enters a stabilisation period where issues that only appear under real business load are found and fixed. Data issues often surface here: a report that does not tie out, a process that fails on an edge case, a balance that looks wrong. This is why the reconciliation done before cutover pays off during hypercare, it means data problems can be ruled out quickly, so the team can focus on genuine issues. A migration is not truly finished at go-live; it is finished when the system has run stably through hypercare, and a clean, reconciled data foundation is what makes that period short rather than painful.

## Where to actually start

Faced with all these phases, the practical question is where to begin, and the answer is consistent: start with the assessment, and specifically with understanding your data. Run the Readiness Check and profile your data before committing to a timeline, an approach, or a budget, because all of those decisions depend on knowing what you are dealing with. Teams that start by picking tools or setting dates, before they understand their data, build their plans on assumptions that profiling later overturns. Starting with the assessment feels slower, because it delays the visible action of building and converting, but it is what makes everything after it faster and more predictable. The migrations that go smoothly are almost always the ones that invested in understanding their data before they started moving it.

## Migration is a team effort across disciplines

A final point that shapes every phase: an S/4HANA migration is not one team's job but a coordinated effort across disciplines. Basis handles the technical conversion, functional consultants handle configuration and process, ABAP developers handle custom code, and the data team handles profiling, cleansing, and reconciliation. When these work in isolation, problems fall into the gaps between them, the conversion succeeds but the data is a mess, or the data is clean but no one planned the cutover. The smoothest migrations treat the phases as a shared sequence with clear handoffs, where each discipline knows what it owns and how its work connects to the others. Recognising the data workstream as a first-class part of that effort, rather than an afterthought, is often what separates the migrations that go well from the ones that struggle.

## How deKorvai helps

deKorvai supports the data phases that run through this whole sequence. It profiles data in the assess phase, cleanses and de-duplicates in the prepare phase, extracts, transforms, and maps to the S/4HANA model in the migrate phase, and reconciles against the source in the test phase, all as one continuous flow rather than separate tools stitched together. It supports greenfield, bluefield, and GROW approaches and loads through the Migration Cockpit. Because the data work is the phase that decides success, running it as one integrated flow is what keeps a migration on track from assessment to cutover.

## Key takeaways

- The phases: assess, plan, prepare data, convert/build, migrate, test/reconcile, cut over.
- Data preparation is the deciding phase, because S/4HANA's model is stricter than ECC's.
- The approach shapes the work but never removes the need for clean data.
- Test and reconcile to make the migration provable, not just complete.

## Frequently asked questions

### What are the phases of an S/4HANA migration?

Assess (readiness check and profiling), plan (approach and scope), prepare data (cleanse, de-duplicate, Business Partner conversion), convert or build, migrate data (extract, transform, load), test and reconcile, and cut over and stabilise. Data preparation is the phase that most often decides success.

### Which phase is the hardest?

Data preparation. The technical phases are well understood and tooled, but preparing data is open-ended because S/4HANA's stricter model rejects data ECC tolerated. Profiling, cleansing, de-duplication, and Business Partner conversion take the most time and should start earliest.

### Does the migration approach change the phases?

It changes their shape, not the need for them. Greenfield emphasises process redesign and choosing what to bring; brownfield converts in place via SUM with DMO and carries data forward; bluefield selectively transitions. Every approach still requires the data preparation phase.

### Why are testing and reconciliation important?

They turn a migration from assumed-successful into proven-successful. Validating throughout catches errors early, and reconciling the result against the source proves nothing was lost, which matters especially for financial data where balances must tie back to ECC.
