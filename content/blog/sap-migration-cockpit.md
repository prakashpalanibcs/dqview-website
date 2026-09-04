---
title: "What Is the SAP Migration Cockpit? The Practical Guide"
excerpt: "The SAP Migration Cockpit is the standard tool for loading data into S/4HANA. How it works, staging tables vs direct transfer, migration objects, the Migrate Your Data app, and where it stops."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "sap-migration-cockpit"
---

**The short answer.** The SAP Migration Cockpit is SAP's standard tool for loading data into S/4HANA. It provides predefined migration objects, lets you create migration projects, and moves data in through staging tables or direct transfer, with simulation before the load. In current releases it is delivered as the Migrate Your Data Fiori app, the successor to the older LTMC transaction. It validates data at load time, but it does not cleanse data, so preparation happens upstream.

If you are migrating to S/4HANA, the Migration Cockpit is the tool your data ultimately passes through. Understanding what it is, how it works, and where its responsibilities end helps you plan a migration that runs smoothly rather than stalling at the load. Here is a practical guide.

## What the Migration Cockpit is

The SAP S/4HANA Migration Cockpit is the primary tool for migrating data into S/4HANA. It was introduced as the successor to LSMW and has evolved across S/4HANA releases. Its job is to let you create a migration project, select the data objects you need, provide your data, and then simulate and execute the load while monitoring progress. It comes with a catalogue of predefined migration objects for common data such as business partners, materials, and financial documents, which is extended with each release.

## The current tool: Migrate Your Data

An important point of accuracy: in current S/4HANA releases, the Migration Cockpit is delivered as the Migrate Your Data Fiori app. This succeeded the older LTMC transaction, which has been deprecated since S/4HANA 2020 and read-only since 2021. The Fiori app is a native application in the launchpad with better project management and more predefined objects. If you are reading older guides that centre on LTMC, the concepts still apply, but the interface you will actually use on a modern release is Migrate Your Data.

## How data gets in: the approaches

The Cockpit supports a small number of approaches for getting data in:

- **Staging tables.** The Cockpit automatically creates database tables for each migration object, which you populate with your prepared data, from a template or directly from a source database. This is the common approach for larger migrations.
- **Direct transfer.** Data is read directly from a connected SAP source system, without an intermediate file or manual staging step.

In current releases these have been consolidated so that the file template feeds the staging tables the Cockpit creates, rather than standing as a wholly separate path.

## Migration objects and custom modelling

The Cockpit works through migration objects: predefined templates for specific data domains that map your source data to the S/4HANA target structure. For most standard data, a predefined object exists. Where it does not, LTMOM (the Legacy Transfer Migration Object Modeler) lets you build custom objects, defining source structures and mapping them to targets, including fields the standard object does not cover. This combination of a broad standard catalogue plus custom modelling is what lets the Cockpit handle both common and unusual data.

## What the Cockpit does not do

> The Cockpit is a loading tool. Data quality is your responsibility, and it comes first.

The most important thing to understand is the Cockpit's boundary. It validates data as it loads, and it will reject records that fail its checks, but it does not profile your source data, resolve duplicates, or cleanse inconsistent records. If you feed it dirty data, you get rejected records and delays, or worse, problems loaded into your new system. This is why the Cockpit is best seen as the final step of a migration, not the whole of it. The profiling, cleansing, de-duplication, and transformation that determine whether a load succeeds all happen before data reaches the Cockpit.

## Where the Cockpit fits in the wider migration

It helps to place the Cockpit correctly in the overall shape of a migration. A migration is a sequence: understand the data, extract it, clean and de-duplicate it, transform it to the target model, load it, and reconcile the result. The Cockpit owns the load step and validates at that point, but the steps before it, which determine whether the load succeeds, sit outside the Cockpit.

Seeing it this way prevents a common planning error: assuming that because you have the Cockpit, the migration is largely handled. In reality the Cockpit is the final gate, and most of the effort and risk lives in the preparation that gets data ready to pass through it. A migration plan that allocates most of its attention to the Cockpit and little to preparation is usually a plan that has not profiled its data yet.

## What drives a high first-pass rate

A useful measure of a migration's health is the first-pass rate: the proportion of records that load successfully on the first attempt without rejection. A low first-pass rate means many records bounce back for correction, which slows the migration and signals data that was not ready. A high first-pass rate means data arrived at the Cockpit already clean and correctly mapped. The Cockpit itself does not raise your first-pass rate; the upstream preparation does. Profiling to find problems, cleansing to fix them, and validating before load so errors are caught early are what produce data that the Cockpit accepts on the first try. The first-pass rate is really a measure of how well the preparation was done.

## The Cockpit in one sentence

If you strip away the detail, the Migration Cockpit is the reliable, standard way to load prepared data into S/4HANA, and nothing more or less than that. It is genuinely good at its job, moving validated data into the target with predefined objects and clear monitoring, but its job is deliberately bounded. Understanding that boundary is what lets you plan a migration correctly: put your effort into the profiling, cleansing, and transformation that get data ready, and let the Cockpit do the loading it was built for. Teams that respect this division of labour tend to have smooth loads; teams that expect the Cockpit to do more than load tend to be surprised.

## How deKorvai helps

deKorvai does the upstream work that makes a Cockpit load succeed. It extracts from ECC and other sources with rule-based extraction, profiles and validates data against configurable rules, cleanses and de-duplicates, transforms and maps to the S/4HANA model while preserving referential integrity, and then loads into the Migration Cockpit (DMC or LTMC) staging tables with reconciliation built in. Because the data arriving at the Cockpit is already clean and validated, the load runs with a high first-pass rate. In one documented business partner migration, deKorvai moved more than 50,000 vendor records into DMC staging tables with 100% data accuracy and a 95%+ first-pass rate.

## Key takeaways

- The Cockpit is SAP's standard S/4HANA load tool, now the Migrate Your Data Fiori app.
- It uses migration objects and gets data in via staging tables or direct transfer.
- LTMOM handles custom migration objects.
- It does not cleanse data; preparation happens upstream first.

## Frequently asked questions

### What is the SAP Migration Cockpit?

It is SAP's standard tool for loading data into S/4HANA. It provides predefined migration objects, lets you create migration projects, and moves data in through staging tables or direct transfer, with simulation before the load. In current releases it is the Migrate Your Data Fiori app.

### What is the difference between the Migration Cockpit and Migrate Your Data?

They are the same tool at different stages. The Migration Cockpit was originally accessed via the LTMC transaction; in current releases it is delivered as the Migrate Your Data Fiori app, which replaced LTMC. The underlying concepts of migration objects and staging tables carry across.

### What approaches does the Migration Cockpit support?

Primarily staging tables, where the Cockpit creates database tables you populate with prepared data, and direct transfer, where data is read directly from a connected SAP source. In current releases the file template feeds the staging tables rather than being a wholly separate path.

### Does the Migration Cockpit clean data?

No. It validates data at load time and will reject records that fail its checks, but it does not profile, cleanse, or de-duplicate your source data. That preparation has to happen upstream before data reaches the Cockpit.
