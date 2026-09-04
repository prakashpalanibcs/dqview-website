---
title: "S/4HANA Data Migration Step-by-Step: The DMC Edition"
excerpt: "A step-by-step guide to S/4HANA data migration with the Migration Cockpit (DMC): create the project, use staging tables, simulate, load, and reconcile. Plus where the Cockpit stops."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "s4hana-data-migration-dmc"
---

**The short answer.** Migrating data to S/4HANA with the Migration Cockpit follows a clear path: create a migration project, select the standard migration objects you need, provide your data through staging tables, then simulate, validate, and load. The Cockpit handles the load into S/4HANA. What it does not do is clean your data first, so the real work happens upstream: profiling, cleansing, and transforming data before it reaches the Cockpit.

The SAP S/4HANA Migration Cockpit is SAP's standard tool for moving data into S/4HANA, and for good reason: it ships with predefined migration objects and guides you through the load. But treating the Cockpit as the whole migration is where projects go wrong. This guide walks the steps, and is honest about where the Cockpit ends and data readiness begins.

## The Migration Cockpit, briefly

The Migration Cockpit is the primary tool for loading data into S/4HANA. It lets you create a migration project, choose from a catalogue of predefined migration objects, provide your data, and then simulate and execute the load while monitoring progress. In current S/4HANA releases it is delivered as the Migrate Your Data Fiori app, which succeeded the older LTMC transaction. The Cockpit validates data at load time, but it is a loading tool, not a data quality tool. That distinction shapes everything below.

## The step-by-step migration

1. **Prepare and profile your data first.** Before touching the Cockpit, understand the state of your source data. Profile it for completeness, duplicates, and inconsistencies, because problems that reach the load are far more expensive to fix there.
2. **Create the migration project.** In the Cockpit, create a project and choose your migration approach. The staging-tables approach, where the Cockpit creates database tables you populate, is the common choice for larger migrations.
3. **Select migration objects.** Pick the predefined objects for the data you are moving, such as business partners, materials, or open items. Where no standard object fits, custom objects can be modelled.
4. **Map and transform to the target.** Map source fields to the S/4HANA structure, transforming values such as company codes and organisational structures to the target model as you go.
5. **Populate the staging tables.** Load your prepared, cleaned data into the staging tables the Cockpit created, whether from templates or directly from a source database.
6. **Simulate.** Run a simulation to surface errors before any data is committed to the target. This is your rehearsal, and it should be run until it comes back clean.
7. **Execute and monitor.** Run the load, monitoring progress and handling any records the Cockpit rejects.
8. **Reconcile.** After the load, reconcile the migrated data against the source, confirming counts and values match. A completed load is not a proven one until reconciliation passes.

## Where the Cockpit stops

> The Migration Cockpit loads data well. It does not make bad data good first.

The single most useful thing to understand about a Cockpit-based migration is where the tool's job ends. The Cockpit validates data as it loads and executes the load reliably, but it does not profile your source, resolve duplicates, or cleanse inconsistent records. If the data you feed it is dirty, it will either reject those records or load problems into your new system. This is why the data preparation steps, profiling, cleansing, de-duplication, and transformation, have to happen upstream. Migrations that respect this arrive at the Cockpit with data that is already ready, which is what produces a high first-pass load rate.

## Understanding staging tables

The staging-tables approach is worth understanding because it is where upstream and downstream meet. In this approach, the Cockpit automatically creates staging tables in the S/4HANA system for each migration object. You populate those tables with your prepared data, and the Cockpit then loads from them into S/4HANA. The advantage is that staging tables handle larger volumes well and give you a clear boundary: everything before the staging tables is your data preparation, and everything after is the Cockpit's load. A clean handoff at that boundary, well-prepared data arriving in the staging tables, is the mark of a well-run migration.

## Choosing your migration objects

A practical early task in a Cockpit migration is deciding which migration objects you need, because they define the scope of what moves. The Cockpit ships with a catalogue of predefined objects for common data such as business partners, materials, and financial documents, and this catalogue grows with each S/4HANA release. For most standard data, an object already exists, which saves considerable effort.

The work is in mapping your source data to each object correctly and deciding which objects are genuinely in scope. Bringing across every possible object out of caution inflates the migration; selecting deliberately keeps it manageable. Where your data does not fit a standard object, custom objects can be modelled, but the goal is to lean on the standard catalogue wherever possible.

## Why simulation is not optional

The Cockpit lets you simulate a load before committing data, and this step rewards taking seriously. A simulation runs the load logic and surfaces the errors that would occur, without actually writing to the target. It is your chance to find the problems, missing values, failed mappings, records that violate target rules, while fixing them is still cheap. Teams that treat simulation as a formality and rush to execute tend to discover the same problems during the real load, when they are far more disruptive. A disciplined migration simulates repeatedly, resolving what each run surfaces, until a simulation comes back clean. Only then is the data genuinely ready to load.

## How deKorvai helps

deKorvai is built to do the upstream work that the Migration Cockpit does not. It connects to SAP ECC and other sources with rule-based extraction, profiles and validates the data against configurable rules, transforms and maps it to the S/4HANA model while maintaining referential integrity, and then loads into the DMC staging tables. Validation runs before load and reconciliation after, so accuracy is proven rather than assumed. In one documented business partner migration, deKorvai moved more than 50,000 vendor records into DMC staging tables, achieving 100% data accuracy and a 95%+ first-pass rate. It supports Greenfield, Bluefield, and GROW programmes.

## Key takeaways

- The Cockpit loads; it does not clean data first.
- The staging-tables approach is the common path for larger migrations.
- Simulate before you load, and reconcile after, to prove the result.
- The real work is upstream: profile, cleanse, transform before the Cockpit.

## Frequently asked questions

### What is the SAP S/4HANA Migration Cockpit?

It is SAP's standard tool for loading data into S/4HANA. It provides predefined migration objects, lets you create a migration project, populate data through staging tables, and then simulate and execute the load. In current releases it is delivered as the Migrate Your Data Fiori app.

### What are staging tables in the Migration Cockpit?

Staging tables are database tables the Cockpit automatically creates in the S/4HANA system for each migration object. You populate them with your prepared data, and the Cockpit loads from them into S/4HANA. The approach handles larger volumes well.

### Does the Migration Cockpit clean data?

No. The Cockpit validates data at load time and executes the load, but it does not profile, cleanse, or de-duplicate your source data. That data preparation has to happen upstream before data reaches the Cockpit.

### What is the difference between LTMC and Migrate Your Data?

LTMC was the older transaction for the Migration Cockpit. In current S/4HANA releases it has been succeeded by the Migrate Your Data Fiori app, which is the standard tool. The underlying concepts, such as staging tables and predefined objects, carry across.
