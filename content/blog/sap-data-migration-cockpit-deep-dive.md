---
title: "SAP Data Migration Cockpit: The Deep Dive"
excerpt: "Working with the SAP Migration Cockpit: choosing migration objects, extending with LTMOM, populating staging tables, the simulate-fix-repeat loop, and handling rejected records."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "sap-data-migration-cockpit-deep-dive"
---

**The short answer.** Working with the Migration Cockpit day to day comes down to four things: choosing the right migration objects, populating staging tables with prepared data, simulating until the run comes back clean, and handling the records that fail. Where a standard object does not fit, LTMOM lets you model a custom one. The Cockpit validates at load and reports errors clearly, but it expects data that is already correct, which is why the quality of what you put into the staging tables determines how much time you spend on error handling.

Most explanations of the Migration Cockpit stop at what it is. This one is about working with it: the objects, the staging tables, the simulate-fix-repeat loop, and what to do with records it rejects. If you are the person actually running loads, this is the part that matters.

## Start with the migration objects

Everything in the Cockpit runs through migration objects: predefined templates that map source data to the S/4HANA target structure for a specific data domain, such as business partners, materials, or financial documents. SAP ships a catalogue of these, and it grows with each release, so the first task on any migration is working out which standard objects cover your scope. Most standard data has an object already, which saves considerable effort. The work is in selecting the right ones deliberately, because every object you add expands the migration, and in understanding exactly what each expects.

## When the standard object does not fit

Sometimes the standard object does not cover what you need, a custom field, an unusual structure, a requirement SAP did not anticipate. That is what LTMOM, the migration object modeler, is for. It lets you take a migration object and extend it: define source structures, map them to target structures, and add fields the standard object does not include. This capability carries across the Cockpit's versions, so the ability to model custom objects has been a constant even as the interface moved from LTMC to the Migrate Your Data app. Use it where you genuinely need to, but lean on the standard catalogue wherever you can, because custom objects are more to build and more to maintain.

## Working with staging tables

> The staging tables are the boundary. Everything before them is your data preparation; everything after is the Cockpit doing its job.

For larger migrations, the staging-tables approach is the common path. The Cockpit creates database tables for each migration object, and you populate them with your prepared data, either from the provided templates or directly from a source database. This creates a clean boundary that is worth thinking about explicitly: everything upstream of the staging tables is your data preparation, profiling, cleansing, de-duplication, transformation; everything downstream is the Cockpit performing the load. A migration runs smoothly when the data arriving at that boundary is already correct, and painfully when it is not.

## The simulate-fix-repeat loop

The Cockpit lets you simulate a load before committing anything to the target, and this is where most of the practical work happens. A simulation runs the load logic and surfaces the errors that would occur, without writing to the target. You read the errors, fix the underlying data, and simulate again. Teams that treat simulation seriously run this loop until a simulation comes back clean, and only then execute. Teams that treat it as a formality tend to meet the same errors during the real load, when they are far more disruptive. The loop is not overhead; it is the mechanism that makes the eventual load uneventful.

## Handling the records that fail

Even with good preparation, some records will fail, and how you handle them matters. The pattern that works is a defined loop rather than ad-hoc firefighting: the Cockpit reports which records failed and why, those records are routed to the people who can correct them, usually business owners who know the data, the corrections are made, and the records are reloaded and re-validated. The goal is that failures become a managed workflow with clear ownership, not a scramble. It also pays to watch your first-pass rate across loads, because a rate that is improving between mock runs is evidence that your upstream data preparation is working.

## Why upstream quality decides your Cockpit experience

Here is the pattern that runs through all of the above. The Cockpit validates data at load time and reports errors well, but it does not profile your source, resolve duplicates, or cleanse inconsistent records. Whatever quality problems exist in the data you put into the staging tables will surface as rejections and rework. This is why the teams who find the Cockpit straightforward are usually the ones who did serious data preparation before touching it, and the teams who find it painful are usually fighting data problems that should have been resolved upstream. The Cockpit is not the hard part of a migration; the data you feed it is.

## Watch your first-pass rate

A useful single metric for how a migration is progressing is the first-pass rate: the proportion of records that load successfully on the first attempt. It is a direct measure of how well your upstream preparation is working, because the Cockpit will only accept what meets the target's requirements. A low first-pass rate means many records are bouncing back for correction, consuming time and signalling that data was not ready. A rising first-pass rate across mock cycles is evidence your cleansing and validation are having an effect. Tracking it per object also shows you where to focus, since problems usually concentrate in a few objects rather than spreading evenly.

## How deKorvai helps

deKorvai does the upstream work that determines how smoothly the Cockpit runs. It extracts from ECC with rule-based extraction, profiles and validates against configurable business and technical rules, cleanses and de-duplicates master data with fuzzy matching, transforms and maps to the S/4HANA model while preserving referential integrity, and then loads into the Migration Cockpit (DMC or LTMC) staging tables with reconciliation built in. Because the data arriving at the staging boundary has already been validated, the simulate-fix-repeat loop is shorter and the first-pass rate is higher. In one documented business partner migration, deKorvai moved more than 50,000 vendor records into DMC staging tables with 100% data accuracy and a 95%+ first-pass rate.

## Key takeaways

- Migration objects define your scope; lean on the standard catalogue, extend with LTMOM only where needed.
- Staging tables are the boundary between your data preparation and the Cockpit's load.
- Simulate until it comes back clean, then execute.
- Upstream quality decides your experience: the Cockpit is not the hard part.

## Frequently asked questions

### What are migration objects in the SAP Migration Cockpit?

They are predefined templates that map source data to the S/4HANA target structure for a specific data domain, such as business partners or materials. SAP ships a catalogue that grows with each release, and selecting the right objects defines your migration scope.

### What is LTMOM used for?

LTMOM, the migration object modeler, is used to extend or customise migration objects when a standard object does not cover your requirement. It lets you define source structures, map them to target structures, and add fields the standard object does not include.

### How do staging tables work in the Migration Cockpit?

The Cockpit creates database tables for each migration object, which you populate with your prepared data from templates or directly from a source database. It then loads from those tables into S/4HANA. They form the boundary between your data preparation and the Cockpit's load.

### Why do records fail to load in the Migration Cockpit?

Usually because of data quality problems: missing mandatory fields, invalid values, broken references, or duplicates. The Cockpit validates at load and reports errors, but it does not cleanse data, so the quality of what you put into staging determines how many records fail.
