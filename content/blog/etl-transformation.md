---
title: "ETL Transformation: Turning Source Data into Target-Ready Data"
excerpt: "ETL transformation turns source data into data the target accepts and the business trusts: mapping, standardisation, cleansing, deduplication, derivation and validation, and why the rules are business decisions."
metaTitle: "ETL Transformation: Turning Source Data into Target-Ready Data"
metaDescription: "ETL transformation turns source data into data the target accepts and the business trusts: mapping, standardisation, cleansing, deduplication, derivation and validation, and why the rules are business decisions."
tag: "ETL"
author: "Prakash Palani"
slug: "etl-transformation"
---

**The short answer.** ETL transformation is the middle step of extract, transform, load: the work that turns data as it exists in a source system into data the target can accept and the business can rely on. It typically covers mapping fields and values, standardising formats, cleansing errors, removing duplicates, deriving new values and validating the result against rules. For business users, transformation is where their decisions get applied: how old codes map to new ones, which record survives a duplicate, what counts as valid.

Extraction and loading are mostly mechanical. Transformation is where judgement lives, and where most of the business's knowledge about its own data gets applied. Understanding what happens in this step makes it much easier to see why it decides whether migrated or integrated data can be trusted.

## What transformation means

Source systems and target systems rarely describe data the same way. Field names differ, codes differ, formats differ, and the target often enforces rules the source never did. Transformation is the set of operations that bridges that gap, so data extracted from one system arrives in another correct, complete and in the expected shape.

## The main kinds of transformation

| Type | What it does | Example |
| --- | --- | --- |
| Mapping | Connects source fields and values to target fields and values | An old company code becomes the new one |
| Standardisation | Brings formats and values into one consistent form | Phone numbers and country codes in one format |
| Cleansing | Corrects or flags invalid, incomplete or inconsistent values | Missing tax numbers flagged for completion |
| Deduplication | Identifies and resolves records for the same entity | Three versions of a supplier become one |
| Derivation | Calculates or assigns new values from existing ones | A role assigned based on the record's usage |
| Filtering and selection | Keeps only the records that should move | Inactive customers left behind |
| Validation | Tests the result against rules before load | Every vendor has company code data |

## Where business decisions live

> Transformation rules are business decisions written down so a machine can apply them.

Many transformation rules look technical but encode business choices. Which plant does an old storage location map to? Which value wins when two duplicate records disagree? Is a customer with no orders in three years active? These are questions only the business can answer, and the answers become rules. When the rules are agreed with the people who own the data, transformation applies their judgement consistently to every record. When they are invented by a technical team under time pressure, the migrated data reflects guesses.

## Mapping is the heart of it

In migrations especially, mapping is where most of the effort and most of the risk sits. Organisational structures change: company codes, plants, sales organisations and purchasing organisations are often redesigned in the new system. Every record that references an old structure has to be mapped to the new one. Value mapping tables, agreed with the business and applied consistently, are what make this reliable. A single wrong mapping row can misroute thousands of records.

## Order matters inside transformation

The sequence of transformations affects the result. Standardising formats before looking for duplicates finds far more duplicates, because inconsistent formatting hides them. Resolving duplicates before mapping avoids mapping the same entity twice. Validating last confirms the combined effect of every earlier step. A transformation process that runs these steps in a deliberate order, the same way every time, produces results that can be compared across runs.

## Repeatability across runs

In a migration, transformation runs many times: in each mock migration and again at cutover. Rules defined once and applied identically on every run mean that improvements between runs are real, and that the final load behaves like the rehearsals. Transformations performed by hand in spreadsheets, by contrast, tend to vary between runs, which makes every mock migration slightly different and every comparison less meaningful.

## Document the rules

Every transformation rule should be written down in plain language alongside its logic: what it does, why, who agreed it and when. That record matters during the migration, when someone asks why a value changed, and afterwards, when auditors ask how the data in the new system relates to the old one. Mapping documents and transformation rules are among the first things reviewers request, and they are far easier to produce when they were kept as the work happened.

## Test transformations with real data

Rules that look correct on paper can behave unexpectedly on real data. A mapping table may miss a rarely used code; a standardisation rule may mangle an unusual address format. Running transformations on a full extract, not a sample, during the early mock migrations surfaces these edge cases while there is still time to fix them. Profiling the transformed output, as well as the input, shows whether the transformation actually improved the data.

## Who owns transformation

The technical team builds and runs transformations; the business owns what they should achieve. A practical split is for data owners to approve mapping tables and business rules, stewards to review exceptions, and the technical team to implement and run the logic. When that split is clear, transformation stops being a black box and becomes something the business can check.

## Transformation as evidence

For financially significant data, auditors may ask how values in the new system were derived from the old. Rule-based transformation, with each rule documented and the same logic applied on every run, makes that question straightforward to answer. Ad hoc fixes made in spreadsheets between runs do not, because nobody can say with confidence which version of a fix applied to which record.

## Reuse rules beyond the migration

Transformation and validation rules built for a migration describe what good data looks like in the new system. Keeping them after go-live, and applying them to data entering the system through integrations, stops new data from undoing the work. Rules that are thrown away with the project have to be rebuilt the next time anyone needs them.

Well-kept rules also shorten onboarding: someone new to the project can read what the transformation does and why, instead of reverse-engineering it from code or spreadsheets.

## How deKorvai helps

deKorvai's ETL engine applies rule-driven transformations and validations between extraction and load, with DIY transformations so teams can define their own logic and AI-enabled transformation rules to make mapping easier. Its documented migration flows apply mapping rules for company code, purchasing organisation, reconciliation account, account group and Business Partner role, and for plant, storage location and sales area. Profiling detects data issues before load, referential integrity is preserved through transformation, and the same rules run on every cycle, with end-to-end monitoring and execution tracking.

## Key takeaways

- Transformation turns source data into data the target accepts and the business trusts.
- Mapping, standardisation, cleansing, dedup, derivation, validation are the core operations.
- Rules encode business decisions, so the business should agree them.
- Order and repeatability make results reliable across runs.

## ETL transformation, answered

### What is ETL transformation?

The middle step of extract, transform, load: the operations that turn data as it exists in a source system into data the target can accept and the business can rely on, such as mapping, standardising, cleansing, deduplicating, deriving and validating.

### What are the main types of data transformation?

Mapping fields and values, standardising formats, cleansing invalid or missing values, deduplicating records, deriving new values, filtering which records move, and validating the result against rules before load.

### Why are transformation rules business decisions?

Because many rules encode choices only the business can make, such as how old codes map to new ones, which value wins when duplicates disagree, or what counts as an active customer. Agreed rules apply that judgement consistently.

### Why does the order of transformations matter?

Because steps affect each other. Standardising formats first reveals more duplicates, resolving duplicates before mapping avoids mapping the same entity twice, and validating last confirms the combined result.
