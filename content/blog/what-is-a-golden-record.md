---
title: "What Is a Golden Record? One Trusted Version of Each Customer, Supplier and Material"
excerpt: "A golden record is the single trusted version of a master data entity after duplicates are merged. How it is built, why survivorship rules matter, and the transaction step most often missed."
metaTitle: "What Is a Golden Record? Definition and How It Works"
metaDescription: "A golden record is the single trusted version of a master data entity after duplicates are merged. How it is built and why survivorship rules matter."
tag: "Master Data"
author: "Prakash Palani"
slug: "what-is-a-golden-record"
---

**The short answer.** A golden record is the single, trusted version of a customer, supplier, material or other master data entity, created when duplicate records for the same thing are found and merged. It combines the best information from each duplicate according to agreed survivorship rules, and the transactions attached to the duplicates are redirected to it, so the business works from one record instead of several conflicting ones.

Most organisations do not have one customer master. They have several versions of the same customers, entered at different times by different teams, each slightly different. The golden record is the answer to that: one version everyone trusts. Here is what it is, how it is built, and what business users should expect.

## What a golden record is

A golden record is the single surviving, trusted version of a master data entity after its duplicates have been merged. If the same supplier exists as "Acme Industries Ltd", "ACME Industries" and "Acme Ind. Limited", with different addresses and bank details spread across them, the golden record is one supplier record holding the correct, complete information, with the other versions retired.

## Why it matters to the business

> Every duplicate is a place where the business can disagree with itself.

- **Procurement** sees total spend with a supplier, which is what negotiating power rests on.
- **Finance** gets one credit position and one statement per customer.
- **Supply chain** counts stock once, under one material, instead of across several.
- **Reporting** stops double counting, so numbers agree across teams.

## How a golden record is built

1. **Standardise** formats and values first, because inconsistent formatting hides duplicates.
2. **Match** records that represent the same entity, using fuzzy matching that scores similarity rather than demanding identical values.
3. **Review** the borderline matches, where a person confirms whether two similar records really are the same.
4. **Apply survivorship rules** to decide which values the golden record keeps from each duplicate.
5. **Redirect transactions** from the retired records to the golden record, so no history is orphaned.

## Survivorship rules decide what wins

When duplicates disagree, survivorship rules decide which value the golden record keeps. The most recently updated address may win, while the bank details come from the record that finance verified, and the tax number from whichever record has a valid one. These are business decisions, not technical ones, and they are worth agreeing domain by domain with the people who own the data. A golden record built on unclear survivorship rules simply moves the disagreement somewhere harder to see.

## The step most often missed

Merging duplicates is only half the job. Each retired record usually has open orders, invoices, stock or bills of materials attached to it. If those are not redirected to the golden record, they are orphaned and processes break. For materials in particular, this can mean blocking the duplicate, updating bills of materials, recreating open purchase orders, sales orders, purchase requisitions and planned orders against the surviving material, and transferring stock. That is why golden record work needs approval steps and impact analysis before anything changes in the live system.

## Keeping it golden

A golden record does not stay golden on its own. If it remains easier to create a new supplier than to find the existing one, duplicates come back. Validation at the point of entry, matching that flags a likely duplicate before it is saved, and ongoing monitoring are what keep the master data clean after the cleanup.

## Golden record versus single source of truth

The two ideas are related but not identical. A single source of truth usually means the one system the business treats as authoritative for a type of data. A golden record is the trusted version of one specific entity within it. You can have a single system of record that still contains duplicates, in which case it is a single source but not yet a trustworthy one. Golden records are how that system becomes worth trusting, one entity at a time.

## Where to start

Golden record work is most valuable where duplicates cost the most. For many organisations that is suppliers, because duplicate vendors split spend and complicate payments, or materials, because duplicate parts inflate stock and confuse purchasing. Starting with one domain, agreeing its survivorship rules with the owner, and measuring the reduction in duplicates proves the approach before extending it. Attempting every domain at once tends to stall on survivorship decisions that nobody has the authority to make across all of them.

## Golden records and migrations

A migration is the natural moment to build golden records, because carrying duplicates into a new system only moves the problem. Resolving them before the move means the new system starts with one trusted record per entity.

## Matching confidence and human review

Fuzzy matching produces a confidence score rather than a certainty. Very high scores are usually safe to treat as duplicates; very low scores are usually distinct records. The middle band is where human review earns its place, because two genuinely different suppliers can have similar names, and two records for the same supplier can look quite different. Setting the thresholds with the data owner, and routing the middle band to a steward, gives high detection without merging things that only looked alike.

Recording each merge decision, which records were combined, which values survived and who approved it, also matters. When someone later asks where a supplier record went, or an auditor reviews master data changes, that record answers the question in seconds rather than requiring a reconstruction of what happened.

Golden records are also what make later work simpler: reporting, analytics, automation and any future migration all start from one trusted record per entity instead of several competing ones.

## How deKorvai helps

deKorvai builds golden records as part of its data quality platform. It standardises master data, detects near-duplicates with fuzzy matching using Levenshtein distance, Jaro-Winkler and phonetic encoding, and generates golden records for review. Its documented flow for material master duplicates includes an approval request to confirm the golden data, an impact analysis report, a second approval before the SAP update, and then blocking the duplicate material, updating bills of materials, recreating open purchase orders, sales orders, purchase requisitions and planned orders, and transferring stock, so linked transactions follow the surviving record.

## Key takeaways

- A golden record is the single trusted version of an entity after duplicates merge.
- Survivorship rules decide which values win, and they are business decisions.
- Redirect the transactions, or merging breaks processes.
- Keep it golden with validation at entry and ongoing monitoring.

## Frequently asked questions

### What is a golden record?

The single surviving, trusted version of a master data entity, such as a customer, supplier or material, created when duplicate records for the same thing are found and merged, combining the best information from each.

### What are survivorship rules?

The rules that decide which value a golden record keeps when duplicates disagree, for example the most recent address but the bank details finance verified. They are business decisions best agreed with the people who own the data.

### How is a golden record created?

Standardise the data, match records representing the same entity with fuzzy matching, review borderline matches, apply survivorship rules to choose values, and redirect the transactions attached to retired records to the golden record.

### What happens to transactions when duplicates are merged?

They must be redirected to the golden record, or they are orphaned. For materials that can mean updating bills of materials, recreating open purchase orders, sales orders, requisitions and planned orders, and transferring stock.
