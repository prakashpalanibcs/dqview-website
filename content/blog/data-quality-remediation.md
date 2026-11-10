---
title: "Data Quality Remediation: How to Fix Data Problems So They Stay Fixed"
excerpt: "Data quality remediation fixes problems once found: correction, completion, deduplication, standardisation and root-cause fixes. How to prioritise by impact, route to owners, fix at source and verify."
metaTitle: "Data Quality Remediation: How to Fix Data Problems So They Stay Fixed"
metaDescription: "Data quality remediation fixes problems once found: correction, completion, deduplication, standardisation and root-cause fixes. How to prioritise by impact, route to owners, fix at source and verify."
tag: "Data Quality"
author: "Prakash Palani"
slug: "data-quality-remediation"
---

**The short answer.** Data quality remediation is the work of fixing data problems once they are found: correcting bad records, filling gaps, merging duplicates and, most importantly, removing the cause so the same problem stops recurring. Good remediation is prioritised by business impact, routed to the people who own the data, fixed at the source rather than downstream, and verified afterwards. Without remediation, data quality measurement just produces an ever-longer list of known problems.

Finding data problems is the easy part. Profiling and monitoring can surface thousands of issues in an afternoon. What separates organisations whose data improves from those whose data simply gets measured is remediation: the disciplined process of fixing what was found and stopping it coming back.

## What remediation covers

| Type | What it involves | Example |
| --- | --- | --- |
| Correction | Fixing wrong values | Wrong payment term corrected on a supplier |
| Completion | Filling missing required data | Tax numbers added for suppliers missing them |
| Deduplication | Merging records for the same entity | Three customer records become one golden record |
| Standardisation | Bringing formats into line | Addresses and phone numbers in one format |
| Root-cause fix | Stopping the problem at source | A form changed so the field cannot be left blank |

## Prioritise by impact

> Not every data problem is worth fixing. The ones that cost money come first.

A long list of issues tempts teams to work through it in order, or to fix the easiest items first. Both waste effort. Prioritising by business impact, such as records that block payments, orders, deliveries or a migration load, focuses limited time where it matters. A problem affecting a handful of inactive records may never be worth fixing at all.

## Route fixes to owners

Most remediation needs business knowledge: which duplicate is correct, what the right payment term is, whether a supplier is still active. Sending each issue to the person who owns the data, with the records and the reason, is far faster than a central team trying to research each one. It also keeps the people closest to the data responsible for its quality.

## Fix at the source

Correcting data downstream, in a report or a warehouse, leaves the source still wrong and the problem still recurring. Remediation that lasts happens in the system of record, and is followed by a look at why the problem arose: a missing validation at entry, an integration mapping a field incorrectly, a process that encourages creating new records instead of finding existing ones. Fixing that cause prevents the next thousand bad records.

## Verify the fix

Remediation is not finished when a record is edited. Re-running the rule or profile that found the problem confirms the fix worked and shows whether the issue is shrinking overall. Tracking the count of open issues per domain over time is the clearest evidence that remediation is working rather than just keeping pace.

## Bulk fixes need care

Some problems are best fixed in bulk, such as standardising thousands of addresses or applying a corrected mapping. Bulk changes are efficient but risky: a wrong rule applied to every record creates a larger problem than the one it solved. Testing bulk fixes on a sample, getting owner approval for consequential changes such as merges, and keeping a record of what changed protect against that.

## Find the patterns behind the problems

When the same kind of issue appears again and again, it usually has one cause. A cluster of suppliers missing bank details may trace back to a single onboarding form; a wave of duplicate customers may follow one integration. Grouping issues by type and source before fixing them often reveals that one change upstream removes most of the backlog, which is far more efficient than correcting records individually.

## Make time for it

Remediation competes with day-to-day work, and it loses unless it is planned. Giving data owners a short, prioritised list and a regular slot to work through it, and showing the improvement on their scorecard, turns remediation from an occasional clean-up into a routine.

## Keep a record

Recording what was fixed, how and by whom provides evidence for audit and makes it easier to answer questions later about why a record changed.

## Remediation before a migration

A migration is the moment when remediation has a hard deadline. Data that fails the target's rules will not load, so issues found during profiling must be fixed before the relevant mock migration. Organising remediation by domain, with owners, deadlines aligned to the mock plan and a visible count of open issues, is what keeps a migration on schedule. Remediation done in the source system before the move also means the new system starts clean.

## Prevention beats correction

Every remediation effort should end with a question: what would have stopped this problem arising? Validation at the point of entry, duplicate checks before new records are created, and monitoring that flags problems as they appear are all cheaper than correcting the same issues again next year. The best remediation programmes gradually shrink because prevention takes over.

## Report progress in business terms

Telling owners that open issues fell from four hundred to fifty matters more when it is expressed as consequences: fewer suppliers that cannot be paid, fewer orders blocked, fewer migration records that will fail to load.

## Owners make it stick

Remediation only lasts when someone owns the domain afterwards. Naming an owner for each domain, giving them the rules that now protect it and a scorecard to watch, turns a one-off clean-up into maintained quality.

Over time, the measure of a good remediation programme is not how many issues it fixes but how few new ones arrive, because prevention has taken over from correction.

That shift, from correcting problems to preventing them, is the real goal of remediation. It frees data owners from repeating the same clean-up every year and lets the business rely on its data without constantly second-guessing it.

It also makes every later project, from reporting to migration, faster and cheaper.

Remediation done well pays for itself many times over.

## How deKorvai helps

deKorvai supports remediation alongside detection. Its profiling and configurable rules find issues, and invalid records can be emailed to the responsible business user to correct and return. Cleansing, standardisation and quality gates are built into its ETL workflows, fuzzy matching resolves duplicates into golden records with approval steps before changes are applied, and real-time scorecards show whether open issues are falling. Full audit trails record what changed and why.

## Key takeaways

- Remediation turns measurement into improvement: correct, complete, merge, standardise.
- Prioritise by business impact, not list order.
- Route fixes to owners and fix at the source.
- Verify and track open issues to prove it is working.

## Data quality remediation, answered

### What is data quality remediation?

The work of fixing data problems once they are found: correcting wrong values, completing missing data, merging duplicates, standardising formats and, most importantly, fixing the root cause so the problem stops recurring.

### How should data quality issues be prioritised?

By business impact. Records that block payments, orders, deliveries or a migration load come first. Problems affecting only a few inactive records may not be worth fixing at all.

### Who should fix data quality issues?

The people who own the data, because most fixes need business knowledge such as which duplicate is correct or what the agreed payment term is. Route each issue to its owner with the records and the reason.

### How do you know remediation is working?

Re-run the rule or profile that found the problem to confirm the fix, and track open issues per domain over time. A falling count shows remediation is reducing the backlog rather than just keeping pace.
