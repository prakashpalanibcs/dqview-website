---
title: "Load Sequencing: Why the Order You Migrate Data Matters"
excerpt: "Load sequencing is the order you migrate data objects, and dependencies decide it: reference data, then master data, then transactions. How to map the chain and check integrity after each layer."
tag: "Data Migration"
author: "Prakash Palani"
slug: "data-migration-load-sequencing"
---

**The short answer.** Load sequencing is the order in which you migrate data objects, and it matters because data has dependencies. A sales order cannot load if its customer does not exist yet; a purchase order needs its vendor and material already in place. The rule is to map the referential dependency chain first, then load in that order: reference data, then master data, then transactional data, checking referential integrity after each layer. Get the order wrong and loads fail or, worse, succeed while leaving orphaned records behind.

Load sequencing sounds like a scheduling detail. It is actually one of those things that quietly decides whether a migration runs cleanly or produces a pile of rejected records and broken links. The logic is simple once you see it, and skipping it is expensive. Here is how to think about order.

## Why order matters

Data is not a flat pile of records; it is a web of dependencies. A material master must exist before a purchase order can reference it. A customer must exist before a sales order can point at it. In S/4HANA, business partners must exist before the transactions that involve them. If you load a transactional object before the master data it depends on, one of two things happens: the load rejects the records, which is the good outcome because at least you find out, or it loads them with broken references, which is worse because the problem is now inside your new system and harder to see.

## The layers, in order

> Reference data, then master data, then transactions. Everything depends on something that came before it.

The general sequence follows the dependency structure of the data itself:

1. **Configuration and reference data first.** The standardised values everything else conforms to: company codes, currencies, units of measure, account groups, plant and organisational structures. Master data will reference these, so they must exist first.
2. **Master data next.** Business partners (your converted customers and vendors), materials, assets, and the other core entities. These reference the configuration values already loaded.
3. **Transactional data last.** Open items, open purchase and sales orders, financial documents, stock. These reference the master data that must already be in place.

Within each layer there are further dependencies, materials before bills of material, business partners before their bank details, so the sequence is really a chain rather than three simple steps.

## Map the dependency chain before you load

The practical starting point is to map the complete referential dependency chain for the objects in your migration scope: for each object, what must already exist for it to load successfully. This mapping is what produces your load sequence, and doing it on paper before your first load is far cheaper than discovering dependencies through failed loads. It also exposes objects you had not thought about, the reference values a master object quietly depends on, for instance, which might otherwise be missed from scope entirely.

## Check integrity after each layer

Sequencing correctly is necessary but not sufficient; you also need to verify that each layer landed intact before building the next on top of it. Running automated referential integrity checks after each load layer confirms that the records loaded actually resolve to the things they reference. Catching a broken link after loading master data is a contained problem. Discovering it after you have loaded millions of transactional records on top is not. This layered check-as-you-go approach is what stops a sequencing problem from compounding through the rest of the load.

## Sequencing is something you rehearse

Like everything else in a migration, the load sequence is something you prove through mock runs rather than assume. The first mock often reveals sequencing problems that the dependency map missed, because real data has dependencies that documentation does not always capture. Each rehearsal refines the sequence, and by the final mock the order should be settled, timed, and documented as part of your cutover runbook. The load sequence then becomes one of the things that makes cutover predictable, because the team is executing an order they have already run successfully more than once.

## Sequencing is not the same as serialising

A common misreading of load sequencing is that everything must run one after another, which would make large migrations impossibly slow. The dependency chain constrains order only where a genuine dependency exists. Objects that do not depend on each other can load in parallel, which is often essential for fitting a large migration into a cutover window. The skill is knowing precisely where the dependencies are, so you serialise only what must be serialised and parallelise everything else. A dependency map that is too cautious, treating everything as dependent on everything, produces a load sequence far slower than it needs to be. Mapping dependencies accurately is therefore as much about finding what can run concurrently as what cannot.

## When a layer fails partway

A practical question sequencing raises is what happens when a load layer partly succeeds. If eighty percent of your business partners load and twenty percent fail, do you proceed to the transactional layer? Generally not, because the transactions belonging to the failed records will then fail too, or worse, load with broken references. The cleaner approach is to resolve the layer before building on it: correct the failed records, reload them, confirm the layer is complete, then proceed. This is another reason the simulate and mock cycles matter, they surface these partial failures at a point where working through them is routine rather than a cutover-night decision under time pressure.

## How deKorvai helps

deKorvai supports sequenced, integrity-preserving loads. Its transformations preserve referential integrity, so the relationships between records survive the move rather than breaking in transit, and it validates data against business and technical rules before load so dependency problems surface early rather than as rejections. Because extraction and transformation are rule-based and the flow is repeatable, the same sequence runs consistently across mock migrations, which is what lets a team refine and prove their load order before cutover. Reconciliation after load then confirms that what was loaded actually ties back to the source, layer by layer.

## Key takeaways

- Data has dependencies, so load order decides whether records land or break.
- The general sequence: reference data, then master data, then transactions.
- Map the dependency chain first, rather than discovering it through failed loads.
- Check referential integrity after each layer, before building on top of it.

## Frequently asked questions

### What is load sequencing in data migration?

Load sequencing is the order in which you migrate data objects. It matters because data has dependencies: a sales order cannot load if its customer does not exist yet. The sequence follows the dependency chain so that everything a record references is already in place.

### What order should you migrate SAP data in?

Generally configuration and reference data first (company codes, currencies, units of measure, account groups), then master data (business partners, materials, assets), then transactional data (open items, open orders, financial documents, stock). Within each layer there are further dependencies.

### What happens if you load data in the wrong order?

Either the load rejects the records, which at least tells you there is a problem, or it loads them with broken references, which is worse because the issue is now inside your new system and harder to detect. Both waste time and can corrupt the target.

### How do you get the load sequence right?

Map the complete referential dependency chain for the objects in scope before your first load, use that to define the sequence, run automated referential integrity checks after each load layer, and prove the sequence through mock migrations before cutover.
