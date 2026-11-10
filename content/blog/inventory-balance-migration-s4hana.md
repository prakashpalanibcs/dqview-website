---
title: "Inventory Balance Migration to S/4HANA: What Warehouse and Finance Must Reconcile"
excerpt: "Inventory balance migration posts opening stock into S/4HANA with movement types 561, 563 and 565. Who owns quantities and values, the key date, why errors are hard to reverse, and what to check."
metaTitle: "Inventory Balance Migration to S/4HANA: What Warehouse and Finance Must Reconcile"
metaDescription: "Inventory balance migration posts opening stock into S/4HANA with movement types 561, 563 and 565. Who owns quantities and values, the key date, why errors are hard to reverse, and what to check."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "inventory-balance-migration-s4hana"
---

**The short answer.** Inventory balance migration brings opening stock quantities and values into S/4HANA by material, plant, storage location and batch. With SAP's material inventory balance migration object, stock is posted with initial-entry movement types, 561 for unrestricted stock, 563 for quality inspection and 565 for blocked stock, which debits the inventory account and credits an initial stock clearing account. Warehouse teams own the quantities; finance owns the values. Both must reconcile to ECC, and because the migration object cannot post a 562 reversal, errors are much easier to fix before the load than after it.

Stock is the one migration object that people can physically count. That makes it unusually easy to check and unusually visible when it is wrong: a picker sent to an empty bin, a planner ordering stock that is already on the shelf. Here is how inventory balances move into S/4HANA and what warehouse and finance teams should own.

## How stock is posted

SAP's material inventory balance migration object creates material documents that post opening stock into S/4HANA. Practitioner guidance on SAP Community describes the initial-entry movement types used: 561 for unrestricted-use stock, 563 for stock in quality inspection, and 565 for blocked stock. Each posting carries the material, plant, storage location, batch where relevant, and quantity. Practitioners describe the accounting effect of a 561 posting as a debit to the inventory account and a credit to an initial stock clearing account.

## Two owners, one number

| Team | Owns | Checks |
| --- | --- | --- |
| Warehouse and inventory | Quantities by plant, storage location, batch and stock type | Counts match ECC, stock types are right |
| Finance | Inventory values and the clearing account | Values match ECC valuation, clearing account behaves as planned |
| Supply chain | Material and plant setup | Materials exist with valid plant and valuation data |

## Get the key date and period right

> Stock is a snapshot. The question is always: a snapshot of when?

Inventory balances are taken at a key date, usually aligned with the financial migration key date so stock and finance agree. Practitioners point to the legacy data transfer settings in S/4HANA as the place where this is defined, and SAP Note 2914088 covers the error raised when the posting period for the migration is not open. Warehouse, finance and the migration team should agree the date, confirm the period will be open, and plan how goods movements between the extract and go-live are handled.

## Fix it before, not after

An SAP Community answer on correcting a wrongly uploaded inventory balance notes that the migration object only supports initial stock entry and does not post 562 reversals. In practice, a wrong stock posting has to be corrected with other inventory transactions after go-live, with the accounting effects that brings. That makes validating quantities and values before the load, and in every mock migration, much cheaper than correcting them in production.

## What to check

- **Quantities by location.** Stock per material, plant, storage location and batch matches ECC.
- **Stock types.** Quality inspection and blocked stock arrive as the right type, not as unrestricted.
- **Values.** Inventory value per material and in total matches ECC valuation.
- **The clearing account.** Finance knows how it should look after the load and checks it.
- **Material setup.** Every material with stock exists in S/4HANA with valid plant and valuation data.

## Count before you move

Migrating stock figures that were already wrong in ECC simply carries the error forward. A physical count or cycle count of high-value and fast-moving materials before cutover gives the migration accurate starting figures, and resolving differences in ECC first means S/4HANA starts from stock the warehouse actually holds.

## Batches and special stock

Batch-managed materials add a layer of detail: each batch, with its own characteristics and, often, expiry dates, has to arrive correctly. Special stocks such as consignment or stock held at customers or subcontractors may need different handling from ordinary stock. Identifying these categories early, and agreeing how each is migrated, avoids discovering in the last mock run that a whole class of stock was never planned for.

## Plan the goods movement freeze

Stock keeps moving while the migration is prepared. Agreeing when goods receipts and issues stop in ECC, how urgent movements are handled during the freeze, and how anything posted after the extract is brought across keeps the opening balance in S/4HANA aligned with what is physically on the shelves on day one.

## Valuation needs finance in the room

Quantities are only half of an inventory balance. Each posting also carries a value, and that value has to match how finance valued the stock in ECC at the key date. Differences can come from price changes, valuation method differences, or materials whose valuation data was set up differently in the target. Finance should compare inventory value by material and in total against the ECC position, and agree how any differences will be explained before sign-off, not after the first period close.

## Count a sample after the load

After the final mock load, a quick physical check of a sample of bins and materials against S/4HANA stock, especially high-value and fast-moving items, gives the warehouse confidence that the system matches the shelves. It is a small effort that catches unit of measure and location mapping errors that a record count would not reveal.

## Decide what not to migrate

Not every stock record needs to move. Obsolete stock awaiting scrapping, stock in locations being closed, or materials that will not exist in the new design are better resolved in ECC before the extract. Agreeing these cases with warehouse and finance early keeps the opening balance clean and avoids carrying write-off decisions into the new system.

Taken together, these steps mean the warehouse, finance and planners all start S/4HANA looking at the same stock figure, and that figure matches what is physically there.

It is one of the clearest signs, on the first morning, that the migration worked.

## How deKorvai helps

deKorvai's documented material migration flow extracts storage location, warehouse and valuation data from ECC alongside basic and plant data, and uses stock on hand as one of its tests of whether a material is active and should migrate. Data is validated before it loads into the Migration Cockpit staging tables and simulated before migration, and reconciliation against the source gives warehouse and finance teams quantity and value evidence to sign off.

## Key takeaways

- Stock posts with 561, 563 and 565, for unrestricted, quality inspection and blocked stock.
- Warehouse owns quantities; finance owns values, and both must reconcile.
- Agree the key date and open the period before the load.
- The object cannot post 562 reversals, so fix errors before loading.

## Inventory balance migration, answered

### How is inventory migrated to S/4HANA?

With SAP's material inventory balance migration object, which posts opening stock by material, plant, storage location and batch using initial-entry movement types: 561 for unrestricted stock, 563 for quality inspection and 565 for blocked stock.

### What is the accounting effect of an initial stock posting?

Practitioners describe a 561 posting as a debit to the inventory account and a credit to an initial stock clearing account. Finance should know how that clearing account is expected to look after the load and check it.

### Can a wrong inventory upload be reversed with the migration object?

No. The migration object is for initial stock entry and does not post 562 reversals, so wrong postings must be corrected with other inventory transactions. Validating before the load is far cheaper.

### Who should sign off migrated inventory?

The warehouse or inventory team for quantities by location, batch and stock type, and finance for values and the clearing account. Both should reconcile to ECC at the agreed key date.
