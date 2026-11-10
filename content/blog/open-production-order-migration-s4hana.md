---
title: "Open Production Order Migration to S/4HANA: What Planners Must Check"
excerpt: "Open production orders migrate to S/4HANA with Created or Released status supported, but all arrive as Created. Dependencies, rescheduling, make-to-order links and what production planners should check."
metaTitle: "Open Production Order Migration to S/4HANA: What Planners Must Check"
metaDescription: "Open production orders migrate to S/4HANA with Created or Released status supported, but all arrive as Created. Dependencies, rescheduling, make-to-order links and what production planners should check."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "open-production-order-migration-s4hana"
---

**The short answer.** Open production order migration carries orders that are still in progress on the shop floor from ECC into S/4HANA, so production can continue without re-entering work. SAP's open production order migration object supports orders with status Created or Released, but after migration every order has status Created, which means planners must release them again in S/4HANA. Each order also depends on its material, production version, bill of materials and routing already existing in the target, and on the sales order for make-to-order production.

Production orders are where planning becomes physical work: materials reserved, operations scheduled, capacity booked. When S/4HANA goes live, the shop floor needs those orders to be there and to behave correctly. Here is what moves, what changes on the way, and what production planners should check.

## What moves

SAP provides a migration object for open production orders, so the orders carried over are the ones still in progress rather than the completed history. SAP's documentation for the open production order object states that orders with status Created or Released are supported. Scope differs between S/4HANA editions and releases, so the migration object documentation for your release is the reference to check before planning.

## The status change planners must expect

> An order that was released in ECC arrives in S/4HANA as Created. Someone has to release it again.

SAP's documentation notes that after migration, all production orders have status Created, whatever their status was in the source. For planners this is the single most important detail. Orders that were already released to the shop floor in ECC will need releasing again in S/4HANA before work can be confirmed against them. Planning that step into the cutover, with a clear list of which orders to release and who will do it, prevents a first morning where operators cannot book work.

## What each order depends on

| Prerequisite | Why it matters | Usually owned by |
| --- | --- | --- |
| Material (product) | The order is for a material that must exist with production data | Master data, supply chain |
| Production version | Defines which bill of materials and routing apply | Production planning |
| Bill of materials | Determines component requirements | Engineering, production |
| Routing | Determines operations and work centres | Production engineering |
| Open sales order | Needed for make-to-order production | Sales operations |

SAP lists the material and production version as mandatory prerequisites, with bills of materials, routings and, for make-to-order production, open sales orders also needed. That places production orders near the end of the load sequence.

## Expect scheduling to recalculate

SAP's documentation also notes that final scheduled dates can differ from the basic dates provided, depending on scheduling information in the target. Planners should expect migrated orders to be rescheduled by S/4HANA and should check that the resulting dates make sense, especially for orders feeding customer deliveries.

## What planners should check

- **Which orders are genuinely open.** Orders that are effectively finished should be completed or closed in ECC rather than migrated.
- **Quantities still to produce.** What remains open in S/4HANA should match what was outstanding in ECC.
- **Component reservations.** Check that component requirements look right against the bill of materials.
- **Dates after scheduling.** Confirm rescheduled dates against customer commitments.
- **The release list.** Know which orders must be released again, and by whom, on day one.

## Close what you can before cutover

Migrating orders part way through production is always more complex than migrating orders that have not started. Where practical, finishing and confirming orders before the cutover, and timing new order creation so fewer orders are mid-process at the freeze, reduces how much work-in-progress has to be carried across. Production and planning should agree this with the migration team well before cutover.

## Make-to-order needs extra care

In make-to-order production, each production order is tied to a specific customer sales order. That link has to survive the migration, which means the open sales order must already exist in S/4HANA when the production order is created. Sales operations and production planning should check these pairs together: an order produced for the wrong customer requirement, or one that has lost its link, causes problems in delivery and costing that are hard to unwind once production has continued.

## Work in progress and costing

Production orders carry costs as they progress, and finance will want to understand how work in progress is treated across the cutover. Agreeing early with controlling how partially completed orders are valued and settled avoids surprises at the first period close in S/4HANA, and is one more reason to minimise the number of orders mid-process at cutover.

## Confirmations and progress

An order part way through production has operations already confirmed and components already issued. Whatever the migration approach, planners and production supervisors need a clear picture of how far each migrated order has progressed, so that operators do not re-confirm work already done or issue components twice. Agreeing how progress is represented on migrated orders, and checking a sample of partially completed orders line by line in a mock run, prevents confusion on the shop floor in the first week.

## Who signs off

Production planning should own the list of orders that migrate, the release plan and the check of rescheduled dates. Production supervisors should confirm that the orders they will work on day one look right. Controlling should confirm the treatment of work in progress. Naming these owners before the final mock migration keeps the cutover decisions with the people who will live with them.

## Brief the shop floor

Operators and supervisors should know before go-live what will look different: order numbers, statuses, how to confirm work. A short briefing, and a supervisor available on the first shift to answer questions, turns a potentially confusing first morning into a routine one and surfaces any data problem quickly.

Small preparation of this kind is what makes day one on the shop floor uneventful.

## How deKorvai helps

deKorvai supports the data side of moving production into S/4HANA. Its documented material migration flow checks whether materials are still active through stock, open purchasing and sales documents, bills of materials and production orders, so only materials that matter are migrated, and it extracts and maps plant, storage location and valuation data. Data is validated before load into the Migration Cockpit, dependencies are checked so prerequisite objects are in place, and reconciliation confirms what arrived. Where duplicate materials are merged into golden records, deKorvai's documented flow includes recreating open orders against the surviving material.

## Key takeaways

- Open production orders migrate, with Created or Released status supported.
- Every migrated order arrives as Created, so planners must release them again.
- Materials, production versions, BOMs and routings must load first.
- Expect rescheduling and check dates against customer commitments.

## Open production order migration, answered

### Which production orders can be migrated to S/4HANA?

Open production orders. SAP's documentation for the open production order migration object states that orders with status Created or Released are supported. Scope varies by edition and release, so check the object documentation for yours.

### What status do production orders have after migration?

SAP's documentation notes that all migrated production orders have status Created. Orders that were released in ECC need to be released again in S/4HANA before work can be confirmed against them.

### What must exist before production orders are migrated?

The material and its production version are mandatory, along with the bill of materials and routing. For make-to-order production, the related open sales orders must also already exist in S/4HANA.

### Will migrated production order dates change?

They can. SAP notes that final scheduled dates may differ from the basic dates provided, depending on the scheduling information in the target, so planners should check rescheduled dates against customer commitments.
