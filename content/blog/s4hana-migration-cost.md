---
title: "S/4HANA Migration Cost: Where the Data Line Hides"
excerpt: "Most S/4HANA budgets model licences, partner fees and testing but miss the data line. Why data cost cannot be sized without profiling, what the research shows, and how to put a real number on it."
metaDescription: "Most S/4HANA budgets miss the data line. Why data cost cannot be sized without profiling, what research shows, and how to put a number on it."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "s4hana-migration-cost"
---

**The short answer.** Most S/4HANA migration budgets model licences, infrastructure, partner fees and testing. The line that is routinely missed is data: profiling it, cleaning it, converting customers and vendors to Business Partners, and proving the result reconciles. Industry research consistently finds the majority of S/4HANA projects exceed budget, and inadequate data planning is named repeatedly as a root cause. The practical fix is to size the data work from evidence before the budget is signed, not after.

If you are building or reviewing an S/4HANA budget, this article is about the line item that tends to be absent from the first draft and present in the final invoice. It is not the technology. It is the data.

## What a typical budget models

Most S/4HANA business cases account for a familiar set of costs: software licences or subscription, infrastructure or cloud hosting, implementation partner fees, custom code remediation, testing cycles, training and change management, and a contingency. Those are real and they are usually estimated with reasonable care, because they are visible and quotable. The problem is not what is in the model. It is what sits outside it.

## The data line that gets missed

> Data preparation is the one major workstream you cannot quote accurately until you have looked at the data.

Preparing data for S/4HANA is substantial work: profiling the source to establish its real condition, cleansing and de-duplicating master data, converting customers and vendors to the Business Partner model, mapping legacy structures to the new data model, scrambling sensitive data for test environments, and reconciling the result so the business will sign it off. Each of those has a cost. The reason they are underestimated is structural: unlike licences or partner day rates, you genuinely cannot size data cleansing until someone has profiled the data. So the number that goes into the first budget is a guess, and guesses in this area are rarely generous.

## What the research says

The pattern is well documented across independent studies. A 2025 Horvath study of 200 SAP user companies found that only 8% of completed S/4HANA migrations finished on schedule, that projects ran on average 30% longer than planned, and that more than six in ten exceeded budget. A 2026 Precisely and ASUG survey found around 30% of in-flight SAP migration projects were already delayed or over budget. Separately, SAPinsider research in 2026 reported that half of organisations without an S/4HANA plan simply cannot build a value proposition for it at all. Different studies, same conclusion: the financial case is where these programmes struggle.

| Cost area | Usually budgeted? | Why it moves |
| --- | --- | --- |
| Licences and infrastructure | Yes | Quotable upfront |
| Partner fees | Yes | Day rates and scope, though scope creeps |
| Custom code remediation | Sometimes | Often unassessed when the budget is set |
| Data profiling and cleansing | Rarely sized properly | Cannot be estimated without profiling first |
| Business Partner conversion | Rarely itemised | Effort depends on master data condition |
| Reconciliation and sign-off | Rarely itemised | Repeats across every mock cycle |

## Volume is a cost multiplier

One factor magnifies every data cost: how much data you decide to move. Every record you migrate has to be extracted, profiled, cleaned, transformed, loaded and reconciled, and that effort applies whether the record is valuable or dormant. It also lands in a HANA database, where storage is more expensive than the system you are leaving. Deciding deliberately what moves, what is archived and what is left behind is therefore not a technical detail; it is one of the few decisions available to you that reduces cost across every subsequent step at once.

## How to put a real number on it

1. **Profile before you budget.** Measure completeness, duplication and consistency across the objects in scope, so the data effort is sized from evidence.
2. **Decide scope early.** Agree what migrates, what is archived and what is dropped, because scope drives every downstream cost.
3. **Itemise the data workstream.** List profiling, cleansing, de-duplication, Business Partner conversion, transformation and reconciliation as named lines, not as part of a vague allowance.
4. **Budget for repetition.** Mock migrations repeat the data cycle several times. A model that funds one pass will be short.
5. **Apply a risk premium.** Given the documented overrun rates, a contingency on the data workstream is prudent rather than pessimistic.

## The costs that sit outside the migration line

A business case can be accurate about the migration itself and still understate the programme, because several costs sit just outside the project boundary. Running the old system alongside the new one during transition means paying for both for a period. Skills that the business case assumed would retire often reappear in the IT budget rather than disappearing. Integration boundaries drawn for speed at go-live can set a higher cost of ownership over the following years. None of these is hidden exactly; they are simply outside the frame the migration budget draws around itself. A model that stops at cutover will miss them, and they land anyway.

## Make the data question part of approval

A practical governance change worth making is to add one question to the business case approval: what is our evidence for the data effort in this plan? If the answer is a percentage allowance or a partner estimate made without profiling, the budget has an unmeasured variable in it, and the research on overruns suggests where that tends to end. Asking the question at approval rather than during build costs nothing and changes behaviour, because it makes profiling a precondition of funding rather than an optional early activity that gets squeezed.

## How deKorvai helps

deKorvai exists to make the data workstream measurable rather than estimated. It profiles ECC data to establish its true condition, which is what turns the data line from a guess into a number. It then does the work that line pays for: cleansing and de-duplicating master data with fuzzy matching, transforming and mapping to the S/4HANA model while preserving referential integrity, scrambling sensitive data for non-production, and reconciling the loaded result against the source. Because profiling, transformation and validation run as one flow and repeat consistently across mock cycles, the cost of repetition is contained rather than multiplying with every pass.

## Key takeaways

- The data line is the one most often missing from the first budget draft.
- It cannot be sized without profiling, which is why it is guessed and usually under-guessed.
- Research is consistent: most S/4HANA projects exceed budget, with data planning repeatedly named.
- Scope is the lever: deciding what not to migrate reduces cost at every step.

## Frequently asked questions

### What drives S/4HANA migration cost?

Licences or subscription, infrastructure, implementation partner fees, custom code remediation, testing, training and contingency. The cost most often underestimated is data: profiling, cleansing, Business Partner conversion, transformation and reconciliation.

### Why is data cost underestimated in migration budgets?

Because unlike licences or day rates, it cannot be quoted until someone has profiled the data. The figure in the first budget is therefore an estimate made without evidence, and those estimates are rarely generous.

### Do most S/4HANA migrations go over budget?

Independent research consistently says yes. A 2025 Horvath study of 200 SAP user companies found more than six in ten exceeded budget, with projects averaging 30% longer than planned and only 8% finishing on schedule.

### How do I reduce S/4HANA migration cost?

Profile before budgeting so the data work is sized from evidence, decide scope early so you migrate less, itemise the data workstream rather than burying it in an allowance, and budget for the repetition that mock migrations require.
