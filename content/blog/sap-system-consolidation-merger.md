---
title: "System Consolidation After a Merger: Harmonising Data From Two SAP Systems"
excerpt: "After a merger the obstacle is master data: the same customer and supplier exist in both systems differently. Why matching is hard, the sequence that works, and why survivorship is a business call."
metaTitle: "System Consolidation After a Merger: SAP Data"
metaDescription: "After a merger the obstacle is master data: the same supplier exists in both systems differently. Why matching is hard and the sequence that works."
tag: "Master Data"
author: "Prakash Palani"
slug: "sap-system-consolidation-merger"
---

**The short answer.** When two companies merge, the hard part is rarely choosing which SAP system survives. It is harmonising the master data from both, because the same customer, supplier or material exists in each system under different numbers, naming conventions and quality standards. Until that is resolved into single trusted records, the merged business cannot report as one entity. Consolidation is therefore a master data exercise wearing a systems-integration costume.

Mergers create a deadline that nobody in IT chose. The board has announced one company, and reporting, procurement and customer management are expected to behave like one company soon afterwards. Here is why the data is the obstacle, and what actually resolves it.

## Two systems, one business, no common language

Each organisation built its data independently over years. Customer numbering follows different schemes. Material descriptions use different conventions. Vendor records hold different field standards, and the two companies almost certainly share suppliers and customers recorded entirely differently. Nothing is wrong in either system on its own terms. The problem only appears when you try to answer a simple question across both, such as total spend with a given supplier, and discover there is no reliable way to tell which records refer to the same entity.

## What that costs the merged business

> Until master data is harmonised, every consolidated number is an estimate someone assembled by hand.

- **Reporting.** Group-level figures require manual reconciliation, which is slow and disputed.
- **Procurement power.** You cannot negotiate on combined volume with a supplier you cannot see as one supplier.
- **Customer experience.** The same customer receives duplicate outreach, conflicting statements and inconsistent terms.
- **Synergy targets.** The savings promised in the deal rationale are hard to evidence when the underlying data does not combine.

## Why matching is harder than it sounds

The instinct is to match on identifiers, and that works for a small fraction of records. The rest are near-matches: the same supplier appearing as one spelling in system A and another in system B, with different address formats and no shared identifier. Exact matching sees two separate suppliers. A person sees one company. Resolving these at scale, across hundreds of thousands of records, needs fuzzy matching that scores similarity rather than demanding identical values, combined with a review step for the genuinely ambiguous cases.

## The sequence that works

1. **Profile both sources.** Establish the real condition of each system's master data before deciding anything, including how much overlap actually exists.
2. **Standardise first.** Bring formats, codes and naming into common form. Inconsistent formatting hides matches, so standardisation has to precede matching.
3. **Match and cluster.** Use fuzzy matching to group records that represent the same real entity across both systems.
4. **Build golden records.** Combine the best data from each duplicate into one trusted version, with survivorship rules agreed by the business.
5. **Re-point transactions.** Redirect the orders, invoices and history attached to retired records so nothing is orphaned.
6. **Reconcile.** Prove the consolidated result ties back to both sources.

## Survivorship is a business decision

When the same supplier exists in both systems, which version wins? Often neither entirely: one holds the current banking detail, the other the complete tax registration. Building the golden record means combining the best attributes according to rules the business agrees, not simply keeping the newer record. These survivorship rules are where consolidation projects slow down, because they require someone with authority to say which source is authoritative for which field. Agreeing them early, domain by domain, is what keeps the work moving.

## The merger is also an opportunity

Consolidation forces an organisation to confront master data it has tolerated for years, which makes it a natural moment to fix it rather than merely merge it. Companies that treat the exercise as a pure technical merge often carry both sets of problems into the combined system, doubling the mess. Those that treat it as a cleanse-and-combine come out with master data better than either predecessor had. The incremental effort between the two approaches is smaller than it appears, because the matching and profiling work is required either way.

## Do it before the systems merge, not after

There is a sequencing choice that shapes the whole exercise. Harmonising master data before consolidating the systems means the target receives trusted records from day one. Consolidating first and harmonising afterwards means the merged system goes live holding both sets of duplicates, and every process built on it inherits them. The second route is tempting because it gets the systems question resolved sooner, but it converts a data problem you could have solved once into one you now solve inside a live production system with transactions posting against the records you are trying to merge.

## Scale makes the human approach impossible

For a small overlap, manual review works. Two mid-sized companies merging typically have hundreds of thousands of master records between them, with an unknown proportion of overlap. At that scale nobody can review record by record, and sampling tells you the rate but not which specific records to merge. This is the point where automated matching stops being a convenience and becomes the only workable method, with human judgement reserved for the clusters the matching flags as borderline. Planning on that basis from the start avoids the familiar pattern of a team attempting manual reconciliation for three months before concluding it cannot be done.

## The business needs to see progress

Consolidation work is largely invisible from outside the data team, which is a problem when the merged entity is waiting on combined reporting and procurement is asking when it can negotiate as one buyer. Publishing a small number of visible measures, such as the proportion of vendor records harmonised or the reduction in duplicate clusters, keeps the work credible while it is in progress. Without that, a months-long harmonisation reads to stakeholders as silence, and silence invites pressure to shortcut the matching and merge on assumptions rather than evidence.

## How deKorvai helps

System consolidation is one of deKorvai's documented use cases, and the capability maps directly onto the sequence above. It profiles data from multiple sources to establish condition and overlap, standardises values into consistent form, and detects duplicates using fuzzy matching with techniques including Levenshtein distance, Jaro-Winkler and phonetic encoding, so near-matches across the two systems are found rather than missed. It builds golden records and works across both master and transactional data, so linked transactions can be re-pointed to the surviving record. In one documented example, deKorvai scanned more than 120,000 material master records with this approach, clustering near-duplicates for review and cleansing.

## Key takeaways

- Consolidation is a master data problem, not primarily a systems one.
- Near-matches are the hard part, and exact matching misses them.
- Standardise before you match, or formatting differences hide the overlap.
- Survivorship rules need business authority, and agreeing them early keeps the work moving.

## Frequently asked questions

### What makes system consolidation after a merger difficult?

The master data. The same customer, supplier or material exists in both systems under different numbers, naming conventions and quality standards, with no shared identifier. Until those are resolved into single trusted records, the merged business cannot report as one entity.

### Why does exact matching not work for merged data?

Because most overlapping records are near-matches rather than identical: the same supplier spelled differently, with different address formats and no common identifier. Exact matching sees two separate suppliers. Fuzzy matching scores similarity instead, which is what finds them.

### What is survivorship in a data merge?

Deciding which version of a duplicated record wins, and which attributes are kept from each. Often neither record wins entirely, since one may hold current banking detail and the other complete tax registration. Survivorship rules need business authority to agree.

### Should a merger be used to clean data as well as combine it?

Usually yes. The profiling and matching work is required either way, so the incremental effort to cleanse while combining is smaller than it appears. Treating it as a pure technical merge tends to carry both companies' data problems into the combined system.
