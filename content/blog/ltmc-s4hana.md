---
title: "LTMC in S/4HANA: Objects, Staging Tables and Its Deprecated Status"
excerpt: "LTMC opened the S/4HANA Migration Cockpit, but it is deprecated since S/4HANA 2020 and read-only since 2021, replaced by Migrate Your Data. What LTMC was, what carries forward, and what no cockpit version does."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "ltmc-s4hana"
---

**The short answer.** LTMC (Legacy Transfer Migration Cockpit) was the transaction that opened the SAP S/4HANA Migration Cockpit. It is important to know that LTMC has been deprecated since S/4HANA 2020 and made read-only from the 2021 release, replaced by the Migrate Your Data Fiori app. The concepts LTMC introduced, migration objects, staging tables, and LTMOM for custom mapping, carry forward into the current tool. If you are on a recent S/4HANA release, you use Migrate Your Data, not LTMC.

Search for LTMC and you will find plenty of guides, many of them out of date. The honest starting point in 2026 is that LTMC is no longer the current tool. This piece explains what LTMC was, what replaced it, and what carries forward, so you are working from an accurate picture rather than an old one.

## What LTMC was

LTMC stood for the migration cockpit transaction in SAP S/4HANA, positioned as the successor to the older LSMW. It let you migrate master and transactional data from legacy systems into S/4HANA, and it supported two main approaches: a file-based approach and a staging-tables approach. LTMC introduced the model of predefined migration objects and the use of staging tables that the current tool still uses, which is why understanding it is still useful even though the transaction itself is retired.

## The important part: LTMC is deprecated

> If you type LTMC into a recent S/4HANA system and it refuses to create a project, that is expected. It is deprecated, not broken.

Here is the fact that a lot of older content misses. The LTMC transaction has been deprecated since S/4HANA 2020 (Cloud 2008) and became read-only from the S/4HANA 2021 release. Its successor is the Migrate Your Data Fiori app, officially the Migrate Your Data migration cockpit. On current systems, old LTMC projects can be viewed in display mode only, and new migration work is done in the Fiori app. So while the name LTMC persists in documentation and habit, it is not the tool you use on a modern S/4HANA release.

## What is LTMOM, and does it survive?

LTMOM (Legacy Transfer Migration Object Modeler) is the companion tool for customising migration objects. Where the standard objects do not cover a requirement, LTMOM lets you define source structures and map them to target structures, and add custom fields the standard object does not include. LTMOM carries forward unchanged into the current tooling, so the ability to model and extend migration objects remains, even though the LTMC transaction that originally paired with it is retired.

## What carries forward

The reassuring part is that the concepts are stable even as the interface changed. If you learned migration on LTMC, most of what you know still applies:

- **Migration objects.** The predefined objects for business partners, materials, and so on continue, with the catalogue extended in each release.
- **Staging tables.** The staging-tables approach carries forward and is now the primary path, with the file template feeding staging tables the cockpit creates.
- **LTMOM.** Custom object modelling continues unchanged for requirements the standard objects do not meet.
- **Simulate before load.** The discipline of simulating to catch errors before committing data remains central.

What changed is mainly the interface and the consolidation of approaches, not the underlying model. So the guidance to profile and cleanse data upstream, then load through staging tables and reconcile, holds regardless of whether your release uses LTMC or Migrate Your Data.

## The part no version of the cockpit does

Whichever interface your release uses, one thing stays constant: the cockpit loads data, it does not clean it. LTMC did not profile or de-duplicate your source, and neither does Migrate Your Data. Data quality, resolving duplicates, filling gaps, standardising formats, and transforming to the target model, is work that happens before data reaches the cockpit's staging tables. This is the most durable lesson across every version of the tool, and it is where a data platform earns its place in a migration.

## Why the deprecation matters for your project

Knowing that LTMC is retired is not just trivia; it changes how you plan and who you listen to. A good deal of the LTMC guidance online was written years ago and presents the transaction as current, which can send a team down a path that no longer exists on their release. If you are scoping a migration today, plan around the Migrate Your Data app, and treat older LTMC-centric material as useful for concepts but not for the exact steps.

It also matters when hiring or briefing partners: someone whose knowledge stopped at LTMC may not be current on the Fiori app's consolidated approaches. The concepts transfer, but the specifics have moved on, and working from the current picture avoids wasted effort.

## The preparation that outlasts every version

There is a reassuring constant across LTMC, Migrate Your Data, and whatever comes next: the data preparation that determines success does not change. Whichever cockpit version your release uses, you still need to profile your source, resolve duplicates, fill gaps, standardise formats, and transform data to the target model before loading. This upstream work is stable precisely because it is about the data, not the tool. Teams that invest in getting their data right find that investment carries across tool changes, while teams that invest only in learning a specific interface have to relearn each time the tool evolves. The durable skill is data readiness, not cockpit mechanics.

## The practical takeaway

If you remember one thing about LTMC in 2026, let it be this: it is a name from the past that still shapes how people talk about S/4HANA migration, but it is not the tool you use on a current release. Learn the concepts it introduced, migration objects, staging tables, simulation before load, because they remain true, but do your actual work in the Migrate Your Data app. And regardless of the interface, invest your effort in getting your data ready, because that is the part that decides whether the migration succeeds, and it is the part no version of the cockpit has ever done for you.

## How deKorvai helps

deKorvai handles the upstream data work that no version of the migration cockpit performs. It extracts from ECC and other sources with rules, profiles and validates the data, cleanses and de-duplicates it, transforms and maps it to the S/4HANA model while preserving referential integrity, and loads the result into the migration cockpit (DMC or LTMC) staging tables with reconciliation built in. In one documented business partner migration, this approach moved more than 50,000 vendor records with 100% data accuracy and a 95%+ first-pass rate, because the data arriving at the staging tables was already ready.

## Key takeaways

- LTMC is deprecated since S/4HANA 2020 and read-only since 2021.
- Migrate Your Data is the current tool; the concepts carry forward.
- LTMOM survives for custom migration object modelling.
- No cockpit version cleans data; that is upstream work.

## Frequently asked questions

### Is LTMC still used in S/4HANA?

Not on current releases. The LTMC transaction has been deprecated since S/4HANA 2020 and read-only since the 2021 release. It has been replaced by the Migrate Your Data Fiori app. Old LTMC projects can be viewed in display mode only.

### What replaced LTMC?

The Migrate Your Data Fiori app, officially the Migrate Your Data migration cockpit. It is the current standard tool for migrating data into S/4HANA, and it carries forward LTMC's concepts of migration objects and staging tables.

### What is LTMOM?

LTMOM (Legacy Transfer Migration Object Modeler) is the tool for customising migration objects, defining source structures, mapping them to target structures, and adding custom fields the standard objects do not include. It carries forward unchanged into the current tooling.

### Does LTMC or Migrate Your Data clean data?

Neither. Both load data into S/4HANA and validate at load, but they do not profile, cleanse, or de-duplicate your source data. That data preparation has to happen upstream before data reaches the staging tables.
