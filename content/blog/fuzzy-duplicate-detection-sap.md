---
title: "Fuzzy Duplicate Detection in SAP Master Data"
excerpt: "Fuzzy duplicate detection finds near-duplicate SAP master data that exact checks miss, using Levenshtein, Jaro-Winkler, and phonetic matching. Why it matters and how to resolve to golden records."
tag: "Master Data"
author: "Prakash Palani"
slug: "fuzzy-duplicate-detection-sap"
---

**The short answer.** Fuzzy duplicate detection finds records that represent the same real-world thing but are not identical, the same material entered as "Hex Bolt M10x50" and "Hexagonal Bolt M10 x 50mm". Exact-match checks miss these; fuzzy matching catches them by measuring how similar records are, using techniques like Levenshtein distance, Jaro-Winkler, and phonetic encoding. In SAP master data, this matters enormously, because near-duplicate materials, customers, and vendors inflate stock, split spend, and break reporting, and they block a clean migration to S/4HANA.

Ask anyone who has cleaned SAP master data and they will tell you the hard duplicates are not the identical ones. Those are easy. The hard ones are the near-duplicates: the same thing entered slightly differently by different people over years. Finding those needs fuzzy matching, and it is one of the highest-value things you can do to your data. Here is how it works and why it matters.

## The problem exact matching cannot solve

A simple duplicate check looks for records that are identical. That catches the obvious cases and misses the ones that actually cause trouble. Consider a material entered three ways over the years: "Hex Bolt M10x50", "Hexagonal Bolt M10 x 50mm Stainless Steel", and "Hex. Bolt M10*50 SS-304". To a person, these are clearly the same bolt. To an exact-match check, they are three different materials. The same happens with customers ("Acme Corp" versus "Acme Corporation Ltd") and vendors. These near-duplicates are the ones that slip past basic checks and accumulate, quietly, for years.

## How fuzzy matching works

Fuzzy matching solves this by measuring how similar two records are, rather than demanding they be identical. Instead of a yes/no equality test, it produces a similarity score, and records above a threshold are flagged as likely duplicates. Several established techniques do this, each catching a different kind of variation:

- **Levenshtein distance** measures how many single-character edits (insertions, deletions, substitutions) it takes to turn one string into another. Good for typos and small spelling differences.
- **Jaro-Winkler** measures similarity with extra weight on matching characters at the start of strings, which suits names and codes well.
- **Phonetic encoding** matches words that sound alike even when spelled differently, useful for names captured by ear or across languages.

Used together, these techniques catch far more real duplicates than any exact check, while a similarity threshold keeps false matches in check.

## Why it matters in SAP master data

> A duplicate material is not one bad record. It is inflated stock, split purchasing, and a dozen wrong reports.

In an SAP landscape, near-duplicate master data does real damage. Duplicate materials inflate inventory figures, split purchasing across records that should be one, and produce mismatched pricing. Duplicate customers cause conflicting statements and wrong credit decisions. Duplicate vendors fragment spend analysis. Because master data sits underneath so many transactions, each duplicate ripples into many downstream problems. And in a migration to S/4HANA, these duplicates are especially costly: carrying them across pollutes the clean new system, and the move to the Business Partner model surfaces customer and vendor duplicates that have to be resolved. Fuzzy duplicate detection is how you find and resolve them before they cause more harm.

## From duplicates to golden records

Finding duplicates is only half the job. Once a cluster of near-duplicates is identified, they need to be resolved into a single trusted version, a golden record, that combines the best data from across the duplicates. Crucially, the transactions attached to the duplicate records, the orders, invoices, and history, must be re-pointed to the surviving golden record, so nothing is orphaned. This is what turns duplicate detection from an interesting report into a genuine cleanup: not just spotting that "Acme Corp" and "Acme Corporation" are the same, but merging them into one record while keeping every transaction connected.

## Doing it at scale

The challenge with fuzzy matching is scale. Comparing every record against every other record in a large master data set is computationally heavy, and setting the similarity threshold too loose produces false matches while too strict misses real ones. Doing this well at enterprise scale, across hundreds of thousands of records, needs an approach built for it: efficient matching, sensible thresholds, and a review step so that borderline matches are confirmed rather than auto-merged. The goal is high detection with high confidence, so you resolve the real duplicates without accidentally merging things that only looked similar.

## Why human review still matters

Fuzzy matching is powerful, but it produces likelihoods, not certainties, which is why a review step matters. A high similarity score strongly suggests two records are the same, but there are always borderline cases, two genuinely different products with very similar descriptions, for instance, that a machine should flag rather than auto-merge. The best approach combines automated matching, which does the heavy lifting of finding candidate duplicates across hundreds of thousands of records, with human confirmation of the borderline cases, where business knowledge decides. This is not a weakness of fuzzy matching; it is how you get both high detection and high confidence. Auto-merging everything above a threshold risks combining records that only looked alike, while reviewing the borderline cases keeps the cleanup trustworthy.

## The downstream impact of resolving duplicates

It is worth being concrete about what resolving duplicates actually delivers, because the payoff extends far beyond tidier data. When duplicate materials are merged into golden records, inventory figures become accurate, purchasing consolidates onto single records, and pricing stops contradicting itself. When duplicate customers are resolved, statements stop conflicting and credit decisions rest on a complete picture. When duplicate vendors are unified, spend analysis finally reflects reality. Each resolved duplicate removes a source of downstream error that was quietly costing money and eroding trust in reports. This is why fuzzy duplicate detection is often one of the highest-return data quality activities an organisation can undertake: the effort is contained, but the benefit ripples across every process that touches the affected master data.

## How deKorvai helps

Fuzzy duplicate detection is one of deKorvai's core strengths. It scans SAP master data using AI-powered fuzzy matching, applying techniques including Levenshtein distance, Jaro-Winkler, and phonetic encoding to catch near-duplicates that exact checks miss. It then supports resolving those duplicates into golden records, working across both master and transactional data so that linked transactions can be re-pointed to the surviving record. In one documented example, deKorvai scanned more than 120,000 material master records with this approach, delivering 92%+ duplicate detection, 60% less manual effort, 99%+ transaction integrity, and 4x faster cleansing. That is the difference between a migration that carries its duplicates forward and one that arrives clean.

## Key takeaways

- Exact matching misses near-duplicates, which are the ones that cause the damage.
- Fuzzy matching scores similarity using Levenshtein, Jaro-Winkler, and phonetic encoding.
- In SAP, duplicates inflate stock, split spend, and block a clean migration.
- Resolve to golden records and re-point transactions, do not just detect.

## Frequently asked questions

### What is fuzzy duplicate detection?

It is finding records that represent the same real-world thing but are not identical, such as the same material entered with slightly different descriptions. Rather than exact matching, it measures how similar records are and flags likely duplicates above a similarity threshold.

### How does fuzzy matching work?

It scores similarity between records using techniques like Levenshtein distance (character edits), Jaro-Winkler (weighting matching starts of strings), and phonetic encoding (matching words that sound alike). Records scoring above a threshold are flagged as likely duplicates.

### Why does fuzzy duplicate detection matter in SAP?

Because near-duplicate master data inflates inventory, splits purchasing, causes conflicting customer statements, and fragments spend analysis. In a migration to S/4HANA, duplicates pollute the clean new system and the Business Partner model surfaces customer and vendor duplicates that must be resolved.

### What is a golden record in this context?

A golden record is the single trusted version created by merging a cluster of duplicates, combining the best data from each. Resolving duplicates means not just detecting them but merging into a golden record and re-pointing the attached transactions so nothing is orphaned.
