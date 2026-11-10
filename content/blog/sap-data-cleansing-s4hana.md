---
title: "SAP Data Cleansing Before S/4HANA: What Business Teams Own"
excerpt: "SAP data cleansing before S/4HANA fixes customer, supplier, material and finance data in ECC. Why it happens before the move, what business teams own, the order of work, and how to keep it on schedule."
metaTitle: "SAP Data Cleansing Before S/4HANA: What Business Teams Own"
metaDescription: "SAP data cleansing before S/4HANA fixes customer, supplier, material and finance data in ECC. Why it happens before the move, what business teams own, the order of work, and how to keep it on schedule."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "sap-data-cleansing-s4hana"
---

**The short answer.** SAP data cleansing before S/4HANA is the work of fixing customer, supplier, material and finance data in ECC so it migrates cleanly and the new system starts trustworthy. Technical teams can find problems at scale, but the business has to own the fixes: deciding which duplicates are the same entity, supplying missing tax and bank details, confirming that settings reflect how the business really operates, and deciding what history is worth keeping. Cleansing done in the source, before the move, is far cheaper than cleansing done in S/4HANA after it.

Every S/4HANA programme reaches the moment when someone says the data needs cleaning. What happens next decides a lot about the timeline. If cleansing is treated as an IT task, it stalls on questions IT cannot answer. If business teams know what they own, it moves.

## Why cleansing happens before the move

S/4HANA is stricter than ECC about the data it accepts, and the Business Partner model brings customers and suppliers together in a way that exposes inconsistencies ECC tolerated. Data that is incomplete, duplicated or inconsistent either fails to load or loads and then causes problems in live processes. Fixing it in ECC, before the move, means the migration carries clean data and every mock run tests the real thing. Fixing it after go-live means doing the same work under operational pressure, with transactions already depending on the bad records.

## What the business owns

> Technical teams can find the problems. Only the business can decide the answers.

| Cleansing task | Business owner | Why it needs the business |
| --- | --- | --- |
| Resolving duplicate customers | Sales operations, receivables | Only they know whether two accounts are the same company |
| Resolving duplicate suppliers | Procurement, payables | Bank details and terms must be confirmed, not guessed |
| Completing tax and bank details | Finance, procurement | Values must come from authoritative sources |
| Confirming material settings | Supply chain, planning | Plant and planning settings drive operations |
| Deciding what history to keep | Finance, audit, function leads | Retention depends on reporting and legal needs |

## A sensible order of work

1. **Profile first.** Measure completeness, duplicates and inconsistencies so effort goes where problems actually are.
2. **Remove what will not move.** Inactive records and history that will be archived do not need cleansing.
3. **Resolve duplicates.** Merging first avoids cleansing the same entity several times.
4. **Complete and correct.** Fill missing mandatory values and fix invalid ones.
5. **Re-profile.** Confirm the work improved the numbers, then repeat for the next domain.

## Do not cleanse what you will not migrate

The cheapest record to cleanse is one you leave behind. Migration practitioners recommend migrating only what is needed for business continuity and compliance, and archiving older or low-value data. Agreeing activity cut-offs early, for example no transactions in an agreed number of years, can remove a large share of records from scope before anyone spends time fixing them.

## Country-specific data

For organisations operating in several countries, cleansing is rarely uniform. Tax identifiers, bank account formats, address conventions and legal requirements differ by country, and data quality often varies by entity too. Organising cleansing into country or entity packages, each with a local owner who knows the rules, is a common and effective way to make the work manageable.

## Make room for it

Cleansing competes with business users' day jobs, and it usually loses unless time is set aside. The programmes that keep cleansing on schedule give each domain owner a specific, prioritised list, a deadline aligned with the mock migration plan, and a visible measure of progress. Asking business teams to "clean the data" without those three things tends to produce very little.

## Keep it clean during the project

Cleansing in ECC happens while the business keeps running, which means new bad records keep arriving. A supplier cleaned in March can be duplicated again in April. Putting simple controls on new data during the programme, such as validation at entry and a duplicate check before a new supplier is created, stops the cleansing effort from leaking away before cutover. Re-profiling before each mock migration shows whether that is working.

## Measure progress honestly

Cleansing progress is easy to overstate. Counting records reviewed is not the same as counting records fixed, and fixing a field is not the same as passing the rules the target will apply. The most honest measure is the share of in-scope records that pass the migration's validation rules, tracked per domain before each mock run. That number is what decides whether the migration will load cleanly.

## Spreadsheets reach their limit quickly

Cleansing often starts in spreadsheets: an extract, a few filters, a column of corrections sent back to the migration team. That works for a few hundred records. It breaks down at the scale of a real ECC system, where the same supplier may appear in several extracts, corrections arrive in different versions, and nobody can say which fix is current. Moving cleansing into a controlled process, with records routed to owners and corrections fed straight back into validation, is what lets it scale.

## Keep a record of decisions

Cleansing involves many small decisions: which duplicate survived, which value was corrected and why, which records were left behind. Recording them as they are made protects the business owners who made them and answers the questions users and auditors ask later. It also makes the next migration wave or rollout faster, because the same decisions do not have to be argued again.

Done this way, cleansing stops being a vague request to fix the data and becomes a sequence of owned, measurable tasks that the whole programme can track week by week, and that business teams can complete without becoming migration experts themselves.

## How deKorvai helps

deKorvai profiles ECC data to show where cleansing effort is needed, detects near-duplicates with fuzzy matching and resolves them into golden records with approval steps, and applies cleansing, standardisation and quality gates within its ETL flow. Invalid records can be emailed to the responsible business user to correct and return, so the people who know the data fix it without waiting in an IT queue. Active-record checks keep inactive data out of scope, and real-time scorecards show each domain owner how their cleansing is progressing.

## Key takeaways

- Cleanse in ECC, before the move, not in S/4HANA after it.
- The business owns the answers: duplicates, missing details, settings, history.
- Profile first, remove what will not move, then resolve duplicates and correct.
- Give each owner a list, a deadline and a visible measure of progress.

## SAP data cleansing, answered

### Why should SAP data be cleansed before migrating to S/4HANA?

Because S/4HANA is stricter about the data it accepts and the Business Partner model exposes inconsistencies ECC tolerated. Cleansing in ECC means every mock migration tests clean data, rather than fixing problems after go-live under operational pressure.

### Who owns SAP data cleansing?

The business owns the decisions: sales and receivables for customers, procurement and payables for suppliers, supply chain for materials, finance for tax, bank and history. Technical teams find problems at scale and apply the fixes.

### What order should SAP data cleansing follow?

Profile first, remove inactive records and archived history from scope, resolve duplicates, complete and correct remaining records, then re-profile to confirm improvement before moving to the next domain.

### How do you keep data cleansing on schedule?

Give each domain owner a specific prioritised list, a deadline aligned to the mock migration plan, and a visible progress measure, and put controls on new data so cleaned records are not duplicated again before cutover.
