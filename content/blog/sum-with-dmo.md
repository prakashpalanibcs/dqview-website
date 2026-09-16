---
title: "SUM with DMO, Explained: How a Brownfield Move to S/4HANA Really Runs"
excerpt: "SUM's Database Migration Option (DMO) combines a software update and HANA migration in one in-place run. How it works, why the shadow system keeps downtime low, and where data prep still matters."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "sum-with-dmo"
---

**The short answer.** SUM (Software Update Manager) is SAP's tool for updating systems, and DMO (Database Migration Option) is the option within it that combines a software update with a database migration to SAP HANA in one run. In a brownfield move to S/4HANA, DMO upgrades your system and migrates it to HANA together, in place, keeping your system ID and host stable. It uses a shadow system so most of the work happens while you are still live, and it lets you reset cleanly if something goes wrong. It is a technical conversion tool, not a data quality tool, so your data still needs preparing first.

If you are going brownfield, you will hear SUM and DMO constantly, often as if everyone already knows what they mean. Here is a plain explanation of what they actually do, why the shadow system matters, and where this powerful technical tool stops and your data work begins.

## What SUM and DMO are

SUM, the Software Update Manager, is the SAP tool that updates and upgrades SAP systems. DMO, the Database Migration Option, is an option inside SUM that does something clever: it combines the software update and the database migration to SAP HANA into a single procedure, rather than making you do them as separate projects. For a brownfield S/4HANA conversion, this is the standard path. Instead of upgrading, then separately migrating the database, then converting, DMO folds the update and the migration to HANA into one run.

## Why "in place" matters

DMO is an in-place procedure. That means it upgrades and migrates your existing system while keeping the system ID, the primary application server host, and connectivity settings stable. You are not building a brand-new system and moving into it; you are transforming the one you have. This is a big part of why brownfield appeals to organisations that want continuity, because the surrounding landscape, the interfaces, the host names, the connections, largely stays put. The database underneath changes to HANA and the software moves up to S/4HANA, but the system keeps its identity.

## The shadow system: how downtime stays manageable

> DMO does most of its work while you are still running. That is the whole trick.

The reason DMO can migrate a large system without an enormous outage is the shadow system. During the procedure, SUM builds a shadow repository on the target while your production system keeps running. The heavy preparation happens in this uptime phase, in parallel with normal business. Only when downtime begins is the database connection switched to the target and the application table content transferred. There is even a downtime-optimised variant that migrates selected large tables during uptime as well, further shrinking the outage. A useful safety feature: because the source database stays consistent throughout, you can reset the procedure and fall back quickly if something goes wrong before the point of no return.

## Where DMO stops and data begins

Here is the honest boundary, and it is the same one that applies to every SAP migration tool. DMO is a technical conversion tool. It moves your system and database to S/4HANA with impressive efficiency, but it does not clean your data. It carries your data across as it is. If your ECC system holds duplicates, incomplete records, and inconsistencies, a brownfield DMO conversion faithfully brings all of them into S/4HANA. And because the Business Partner conversion has to be done first, and because S/4HANA holds data to stricter standards, unresolved data quality problems surface as errors and post-conversion headaches. DMO handles the technical move; the data readiness is still yours to own.

## DMO in the brownfield picture

It helps to see where DMO fits. Brownfield, or system conversion, is the approach that keeps your existing system and converts it in place, as opposed to greenfield, which rebuilds from scratch. DMO is the engine that makes the technical part of brownfield possible: the combined upgrade-and-migrate to HANA. But a successful brownfield conversion is more than the DMO run. Before it, you complete the Business Partner and CVI conversion and prepare your data. The DMO procedure then handles the technical transformation. Reconciliation afterwards confirms the result. Seen this way, DMO is one crucial step in a larger sequence, and the steps around it, especially the data preparation, are what determine whether the conversion is smooth or painful.

## The DMO variants worth knowing

DMO is not a single fixed procedure; it has variants suited to different situations, and knowing they exist helps you plan. The standard DMO is an in-place procedure that keeps your application server level unchanged and changes the database. There is a downtime-optimised DMO, sometimes called uptime migration, which migrates selected large application tables during uptime to shrink the outage further. There is DMO with system move, for cases where the whole system needs to move to a different environment as part of the transition. And there is a specific variant aimed at the S/4HANA conversion. You do not need to master the technical detail of each, but knowing the options exist means you can ask your Basis team which fits your situation, and understand why the downtime estimate is what it is.

## Why this is a Basis and data partnership

A brownfield conversion using SUM/DMO is often thought of as a purely technical, Basis-team activity, and the DMO run itself largely is. But the outcome depends just as much on the data work that happens around it, which is a different skill set. The Basis team runs the technical conversion; the data team prepares the master and transactional data, handles the Business Partner conversion, and reconciles the result. When these two work in isolation, problems fall into the gap between them: the technical conversion succeeds but the data is a mess, or the data is clean but the conversion was not planned around it. The smoothest brownfield projects treat DMO as a partnership between the technical and data sides, each doing its part in a coordinated sequence.

## How deKorvai helps

deKorvai does not run the DMO procedure; that is SAP's tool for the technical conversion. What deKorvai does is prepare the data so that the conversion is not carrying problems across. It profiles ECC data to expose quality issues, cleanses and de-duplicates master data, validates against configurable rules, and can scramble sensitive data for the sandbox and QA clones that a brownfield project relies on. Because brownfield carries existing data forward, this upstream cleansing is what stops a DMO conversion from faithfully reproducing years of accumulated data problems in your new S/4HANA system. Clean data in, a cleaner system out.

## Key takeaways

- SUM updates systems; DMO is the option that combines update and HANA migration in one run.
- DMO is in-place: it keeps your system ID and host stable, which suits brownfield.
- The shadow system lets most work happen during uptime, keeping downtime manageable.
- DMO does not clean data; brownfield carries problems forward unless you fix them first.

## Frequently asked questions

### What is SUM with DMO?

SUM (Software Update Manager) is SAP's tool for updating systems. DMO (Database Migration Option) is an option within SUM that combines a software update with a database migration to SAP HANA in a single run. In a brownfield S/4HANA conversion, DMO upgrades and migrates the system to HANA together, in place.

### Why is DMO called an in-place migration?

Because it transforms your existing system rather than building a new one. DMO keeps the system ID, primary application server host, and connectivity settings stable while upgrading the software and migrating the database to HANA. The system keeps its identity, which is why brownfield suits organisations wanting continuity.

### How does DMO keep downtime low?

Through a shadow system. SUM builds a shadow repository on the target while production keeps running, so most preparation happens during uptime. Only when downtime begins is the database connection switched and application data transferred. A downtime-optimised variant migrates large tables during uptime too.

### Does DMO clean or prepare data?

No. DMO is a technical conversion tool. It carries your data across as it is, so a brownfield conversion faithfully brings existing duplicates and inconsistencies into S/4HANA. Data quality preparation, along with the Business Partner conversion, has to happen before the DMO run.
