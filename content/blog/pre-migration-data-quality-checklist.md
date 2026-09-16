---
title: "The Pre-Migration Data Quality Checklist for S/4HANA"
excerpt: "A practical pre-migration data quality checklist for S/4HANA: profiled, de-duplicated, complete, valid, mapped, safe in non-production, and reconcilable. Get your data ready before cutover."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "pre-migration-data-quality-checklist"
---

**The short answer.** Before you migrate to S/4HANA, your data should pass a readiness checklist: profiled so you know its true state, de-duplicated into trusted records, complete on the fields the target needs, valid against the target's rules, mapped to the new model, safe in non-production, and reconcilable so you can prove the result. Working through this before cutover is what turns a stressful migration into a predictable one.

The best time to find a data problem is before it reaches your new system, not after. A pre-migration checklist is how you get there. This is a practical list you can work through for each data object you plan to move, so that when the load runs, the data is genuinely ready.

## The pre-migration data quality checklist

For each object you are migrating, work through these:

1. **Profiled.** Have you actually looked at the data and measured its quality, rather than assuming? You should know its completeness, duplicate rate, and inconsistencies from evidence.
2. **De-duplicated.** Have duplicate records, including near-duplicates spelled slightly differently, been resolved into single trusted versions?
3. **Complete.** Are the fields the target system requires actually populated? Fields optional in ECC may be mandatory in S/4HANA.
4. **Valid.** Does the data pass the target's format and content rules? Invalid values that ECC tolerated will be rejected.
5. **Consistent.** Do related records agree, and does the same entity appear consistently across systems?
6. **Mapped.** Is there clear transformation logic mapping legacy structures, such as account groups and org structures, to the target model?
7. **Scoped.** Have you decided what to leave behind, so you are not migrating dead or duplicate data?
8. **Safe in non-production.** Is sensitive data masked in the test environments you are using to rehearse?
9. **Reconcilable.** Can you prove, after loading, that the result matches the source in count and value?

## Why profiling comes first

> Every other item on the checklist depends on the first one. You cannot fix what you have not measured.

Profiling is item one for a reason: it is the foundation the rest of the checklist rests on. Until you have profiled, your view of your data quality is guesswork, and guesswork is a poor basis for a migration plan. Profiling replaces assumption with evidence: it tells you which objects are worst, where the duplicates cluster, which mandatory fields are empty, and how big the cleanup really is. Almost every profiling exercise contains a surprise, some domain far worse or better than expected. Starting here means the rest of your checklist, and your plan, is built on what the data actually is.

## Check against the target, not the source

A subtle but important point: your data quality bar should be set by what S/4HANA requires, not by what ECC accepted. Data can be perfectly fine by ECC's standards and still fail in S/4HANA, because the new model is stricter and its fields have different requirements. This is why data that ran cleanly for years suddenly fails validation during a migration. When you work the checklist, measure completeness and validity against the target's rules, so you catch the gaps that only matter in the new world before they block your load.

## Make it repeatable, not a one-time audit

A migration runs many times through mock loads, so the checklist is not a one-time gate. Each rehearsal should re-run the checks, because data changes and each pass should be cleaner than the last. Treating readiness as a repeatable, automated process rather than a single manual review is what lets you watch the numbers improve toward cutover and know, with evidence, when the data is genuinely ready. The goal is that by the final rehearsal, the checklist comes back clean and go-live holds no surprises.

## Prioritise the objects that carry the most risk

Not every data object deserves equal attention, and trying to treat them all identically spreads effort too thin. Some objects consistently carry more migration risk than others, and the checklist should be applied most rigorously to them. Business partners, the converted customers and vendors, are almost always the highest-risk object, because of the CVI conversion and the volume of dependent transactions. Material master is another, because duplicates there are common and damaging. Open items, the purchase orders, sales orders, and financial documents still in flight, need careful handling so only genuinely open items move. Applying the full checklist to these high-risk objects first, and being proportionate with lower-risk data, focuses your effort where migration problems actually cluster.

## The checklist produces your evidence

Beyond getting the data ready, working the checklist produces something valuable: evidence. Each item, once checked, is a documented confirmation that a category of problem has been addressed. Together, across all your objects, these confirmations become the proof that your data was genuinely ready for migration, which matters when stakeholders ask whether it is safe to go live. A migration that can show a completed readiness checklist, backed by profiling results and reconciliation numbers, gives leadership the confidence to approve cutover. One that cannot is asking them to take the team's word for it. The checklist is both a preparation tool and a record that the preparation was actually done.

## Who owns the checklist

A checklist only works if someone owns each item, and in a migration that ownership is usually shared between technical and business roles. The technical team can profile data, run validation, and produce reconciliation numbers. But deciding whether a field is complete enough, whether a record is a genuine duplicate, or whether history can be left behind often requires business knowledge. Assigning clear ownership for each object and each check, so it is obvious who confirms completeness for the customer master or who signs off that open items are correctly scoped, is what turns the checklist from a document into an accountable process. When ownership is vague, items get assumed rather than confirmed, and the gaps that assumption leaves are exactly what surfaces at cutover.

## How deKorvai helps

deKorvai turns this checklist into a repeatable process rather than a manual audit. It profiles data to establish the true state, de-duplicates using fuzzy matching, validates completeness and validity against configurable rules set to the target's requirements, transforms and maps data to the S/4HANA model, scrambles sensitive data for non-production, and reconciles the loaded result against the source. Because it runs as one flow and can be repeated across mock loads, readiness is tracked continuously, so you reach cutover knowing the data has genuinely passed every item on the list.

## Key takeaways

- Work a readiness checklist for each object before cutover.
- Profiling comes first: every other item depends on knowing the data's real state.
- Check against the target's rules, not what ECC used to accept.
- Make it repeatable across mock loads, not a one-time audit.

## Frequently asked questions

### What should be on a pre-migration data quality checklist?

For each object: profiled so you know its true state, de-duplicated, complete on the fields the target needs, valid against the target's rules, consistent, mapped to the new model, scoped so dead data is left behind, safe in non-production, and reconcilable so you can prove the result.

### Why is profiling the first step?

Because every other item depends on it. Until you have profiled, your view of data quality is guesswork. Profiling replaces assumption with evidence, telling you which objects are worst, where duplicates cluster, and how big the cleanup really is, so your plan is built on reality.

### Should I check data quality against ECC or S/4HANA rules?

Against S/4HANA, the target. Data can be fine by ECC's standards and still fail in S/4HANA because the new model is stricter. Measuring completeness and validity against the target's rules catches the gaps that only matter in the new system before they block the load.

### Is the checklist a one-time task?

No. A migration runs many times through mock loads, so the checklist should be re-run each rehearsal as data changes. Treating readiness as a repeatable, automated process lets you watch the numbers improve toward cutover and know with evidence when the data is genuinely ready.
