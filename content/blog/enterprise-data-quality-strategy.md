---
title: "Enterprise Data Quality Strategy"
excerpt: "A data quality strategy is six decisions, not a long document: scope, standard, ownership, measurement, action, and funding. Why narrow scope saves it and why the funding section is usually missing."
metaDescription: "A data quality strategy is six decisions, not a long document: scope, standard, ownership, measurement, action and funding. Why narrow scope wins."
tag: "Data Quality"
author: "Prakash Palani"
slug: "enterprise-data-quality-strategy"
---

**The short answer.** An enterprise data quality strategy is a short set of decisions, not a long document: which data matters most, what standard each domain must meet, who owns it, how quality is measured and reported, how problems get fixed and prevented, and how the whole thing is funded and sequenced. Strategies fail when they try to cover everything at once. The ones that work start narrow on high-impact data, prove the pattern, and extend.

Most data quality strategies are too long to read and too general to act on. The useful version fits on a few pages and answers six questions. Here they are, with the trade-offs each one hides.

## The six decisions

1. **Scope: which data matters most.** Not all data deserves equal effort. Identify the domains where poor quality causes the most business damage and start there.
2. **Standard: what good looks like.** Per domain, expressed as rules specific enough to test rather than aspirations.
3. **Ownership: who decides and who is accountable.** Named business owners per domain, not a committee.
4. **Measurement: how quality is assessed and reported.** Profiling and rule-based validation, with a cadence and a scorecard someone actually reads.
5. **Action: how problems are fixed and prevented.** Cleansing and de-duplication for what exists, validation at entry for what arrives.
6. **Sequence and funding: what happens first and who pays.** The part most strategies omit, which is why they stall.

## Scope is the decision that saves you

> A strategy that treats all data as equally important is a strategy nobody can execute.

The instinct is to be comprehensive, and it is the most common reason strategies die. Attempting to raise quality across every domain simultaneously spreads effort too thin to show results anywhere, and without visible results the funding stops. Choosing deliberately, usually the customer master, the material or product master, and whatever financial data carries regulatory weight, concentrates effort where the business feels it. The domains you exclude are not permanently excluded; they are later. Saying so explicitly in the strategy prevents the comprehensiveness instinct from creeping back in.

## Ownership is where strategies quietly fail

Every data quality strategy names ownership and most do it badly, assigning it to a function rather than a person, or to a governance forum rather than someone accountable. The test is simple: when a judgement call arises about whether two records are duplicates or whether an incomplete record should be corrected or excluded, is there a named individual whose decision settles it? If the honest answer is that it would go to a meeting, ownership has not been assigned. Technical teams can surface and resolve issues at scale, but they cannot decide what correct means for a business entity.

## Balance fixing with preventing

Strategies weighted entirely toward remediation produce a cycle of clean-ups that fade. The sources that created the bad data keep operating, so the same problems reappear and the organisation concludes data quality work does not stick. A strategy that lasts allocates effort to both: cleansing what exists, and preventing what arrives through validation at the point of entry and monitoring that catches drift early. Over time the balance should shift from repair toward prevention, and the strategy should say so, because otherwise remediation absorbs everything.

## Sequencing and funding is the missing section

The section most strategies lack is the one that determines whether anything happens. What is funded in the first phase, what it is expected to deliver, how that result will be measured, and what the next phase depends on. Without it a strategy is a statement of intent competing with projects that have budgets and dates. The practical pattern that works is to fund a narrow first phase on one high-impact domain, measure the before and after, and use the demonstrated result to fund the extension. That sequencing is itself a strategic choice and deserves to be written down.

## Use a migration if you have one

If an ERP migration is on the roadmap, it is the strongest forcing function available. A migration requires profiling, demands that domain ownership be settled to make scope decisions, and holds data to a stricter standard than the legacy system did. All of that is work the strategy needs anyway and the programme will fund. Organisations that treat it as disposable project activity rebuild the same capability later at their own cost. Those that plan from the start to keep the profiling, the standards and the ownership emerge from the migration with the strategy largely implemented.

## Keep it short enough to be read

There is an inverse relationship between the length of a data quality strategy and the likelihood anyone acts on it. A document of fifty pages gets filed; one of five gets used. The six decisions in this article can be stated in a few pages if you resist the urge to include background sections explaining why data quality matters, which the audience either already accepts or will not be convinced of by a document. Reserve the length for specificity where it counts: the actual standards per domain, the named owners, and the funded first phase.

## Build in a review point

Business priorities shift, new systems arrive, and the domains that mattered most last year may not be the ones that matter now. A strategy written once and never revisited slowly stops describing the organisation it was written for. Setting an explicit review point, typically annually, keeps scope aligned to current business impact and is a natural moment to check whether the measurement is actually being acted on. If scorecards have been produced and nothing has changed in response, that is more important to know than any refinement of the standards themselves.

## How deKorvai helps

deKorvai supplies the measurement and action layers a strategy depends on. It profiles data automatically to establish condition and identify where the damage concentrates, which informs the scope decision. Configurable business and technical rules turn the standard for each domain into an objective test rather than an aspiration, with results on real-time scorecards that give the strategy a reporting cadence. Cleansing, standardisation and fuzzy de-duplication into golden records handle what exists, while continuous monitoring catches drift. Lineage and a business glossary support the ownership and shared definitions the strategy assigns.

## Key takeaways

- Six decisions: scope, standard, ownership, measurement, action, sequence and funding.
- Narrow scope deliberately, because comprehensive strategies die unfunded.
- Ownership means a named person, not a function or a forum.
- Write the funding and sequencing section, or the strategy stays an intention.

## Frequently asked questions

### What should an enterprise data quality strategy contain?

Six decisions: which data matters most, what standard each domain must meet, who owns it, how quality is measured and reported, how problems are fixed and prevented, and how the work is sequenced and funded. The last one is the section most often missing.

### Why do data quality strategies fail?

Usually because they try to cover every domain at once, which spreads effort too thin to show results anywhere, and without visible results the funding stops. Vague ownership and a missing funding and sequencing section are the other common causes.

### What does real data ownership look like?

A named individual whose decision settles judgement calls, such as whether two records are duplicates or whether an incomplete record is corrected or excluded. If the honest answer is that it would go to a meeting, ownership has not actually been assigned.

### Can an ERP migration help deliver the strategy?

Yes, it is often the strongest forcing function available. A migration requires profiling, forces domain ownership to be settled for scope decisions, and holds data to a stricter standard, all of which the strategy needs and the programme will fund. The key is keeping it afterwards.
