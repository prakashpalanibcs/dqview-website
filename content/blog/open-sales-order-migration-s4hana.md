---
title: "Open Sales Order Migration to S/4HANA: What Sales Teams Must Check"
excerpt: "Open sales order migration carries in-progress customer orders into S/4HANA via the Migration Cockpit. Dependencies, the pricing issues SAP documents, and what sales operations should check before go-live."
metaTitle: "Open Sales Order Migration to S/4HANA: What Sales Teams Must Check"
metaDescription: "Open sales order migration carries in-progress customer orders into S/4HANA via the Migration Cockpit. Dependencies, the pricing issues SAP documents, and what sales operations should check before go-live."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "open-sales-order-migration-s4hana"
---

**The short answer.** Open sales order migration moves customer orders that are still in progress from ECC into S/4HANA, using the Migration Cockpit object for open sales orders, so deliveries and billing can continue in the new system. For sales operations, the critical checks are that every order's customer and materials already exist in S/4HANA, that open quantities match what was outstanding, and that pricing came across correctly, because SAP's own support notes document cases of duplicated conditions and shifted decimal amounts in migrated sales order pricing.

Open sales orders are commitments to customers. When S/4HANA goes live, warehouses will deliver against them and billing will invoice them, so they have to arrive complete and correctly priced. Here is what moves, what it depends on, and what sales teams should check.

## What moves

The SAP S/4HANA Migration Cockpit provides a migration object specifically for open sales orders, so only orders still in progress are migrated, not the completed order history. Completed orders remain in ECC or the archive for reference. The open orders carried over are the ones the business will continue to fulfil, which is why their accuracy matters on day one.

## What open orders depend on

> A sales order is only as complete as the customer and materials it points to.

Every sales order references a customer, materials and pricing. The customer must already exist in S/4HANA as a Business Partner with the right sales data, and the materials must exist with valid sales views. That places open sales orders late in the load sequence. Some scenarios add further dependencies: for configured make-to-order products, SAP guidance is that characteristic data must be migrated before the open sales orders that use it, and open production orders for make-to-order production depend on the sales orders being in place.

## Check pricing carefully

Pricing deserves particular attention. SAP's own support knowledge base documents cases where migrated sales orders showed duplicated pricing conditions when conditions were supplied at both header and item level, and cases where condition amounts had their decimal places shifted after migration. Neither would necessarily stop a load, which is exactly why they need a business check. Sales operations should compare the net value of migrated orders against the source, and spot-check conditions on a sample of real orders, including the complex ones.

## What sales operations should check

- **Which orders are genuinely open.** Old orders with small residual quantities that will never ship should be closed in ECC rather than migrated.
- **Customers and materials exist.** Every order's references must already be in S/4HANA.
- **Open quantities.** What remains to be delivered in S/4HANA should match what was outstanding in ECC.
- **Order values and pricing.** Net values reconcile, and conditions are neither duplicated nor mis-scaled.
- **Delivery dates and partners.** Requested dates and ship-to details came across correctly.

## Migration objects create, they do not update

SAP's documentation notes that migration objects are built for the initial migration of data: they create records, but cannot change or update existing ones. In practice, an open sales order loaded with a pricing error is not simply re-loaded through the same object; it has to be corrected another way. That makes it far cheaper to catch problems in simulation and mock runs than after the real load.

## Tell customer-facing teams

If order numbers or document layouts change in S/4HANA, customer service and sales teams should know before customers do. Customers who quote an order number on a call, or who receive an order confirmation in a new format, should get a confident answer rather than confusion in the first week after go-live.

## Orders keep arriving during cutover

Customers do not stop ordering because a migration is under way. Orders entered or changed between the extract and the go-live need a plan: a final delta extract, a short order freeze, or manual entry in S/4HANA after go-live. Sales leadership should agree the approach and communicate it to the teams entering orders, so nothing falls into the gap between systems.

## Pick the test sample with sales

The most useful sample for checking migrated orders is chosen by sales operations, not the project: the largest customers, the most complex pricing agreements, orders with partial deliveries, and anything unusual they handle regularly. If those come across correctly, the routine orders almost always will.

## Coordinate with finance

Open sales orders connect to finance through credit exposure and future billing. Finance should confirm that credit limits and exposure look right once customers and open orders are in place, because an incorrect open order value changes a customer's available credit from the first day.

## Partially delivered and partially billed orders

The most error-prone orders are the ones already part way through fulfilment: some lines delivered, some billed, some still open. Only the outstanding portion should continue in S/4HANA, and it must match what the customer still expects. Reviewing a set of partially fulfilled orders line by line during mock migrations is one of the most effective checks sales operations can make, because these are the orders most likely to produce a duplicate delivery or a missed one after go-live.

## Close what should not move

Before migration, sales operations should review orders that are technically open but practically finished: residual quantities that will never ship, cancelled requirements that were never formally rejected. Closing or rejecting them in ECC keeps S/4HANA free of phantom commitments that would distort delivery planning and open order reporting.

## Reconcile by customer

Beyond totals, reconciling open order value and quantity per customer, especially for the largest accounts, catches problems that a grand total can hide, where an overstatement on one customer offsets an understatement on another. Sales and finance can review that summary together before signing off.

With these checks in place, customers should notice nothing on the day S/4HANA goes live, which is exactly the outcome sales teams want.

That calm first week is the best evidence the migration worked as intended.

## How deKorvai helps

deKorvai supports open order migration as part of its S/4HANA data migration flow. It extracts order data from ECC, checks that the customers and materials each order depends on have already been migrated, transforms data to the S/4HANA model with mapping rules for organisational structures, and validates it before load into the Migration Cockpit staging tables, where it is simulated before migration. Invalid records can be sent to the responsible business user to correct, and reconciliation against the source confirms that quantities and values arrived intact.

## Key takeaways

- Only open sales orders migrate, through the Cockpit's dedicated object.
- Customers and materials load first; make-to-order adds characteristics.
- Check pricing: SAP documents duplicated conditions and shifted decimals.
- Migration objects create, not update, so catch errors in mocks.

## Open sales order migration, answered

### Which sales orders are migrated to S/4HANA?

Open sales orders only, using the Migration Cockpit's dedicated object for open sales orders. Completed order history stays in ECC or the archive.

### What must exist before open sales orders load?

The customers, as Business Partners with sales data, and the materials with valid sales views. For configured make-to-order products, characteristic data must be migrated first.

### What pricing problems should sales teams watch for?

SAP's support knowledge base documents duplicated pricing conditions when conditions are supplied at both header and item level, and decimal places shifting in condition amounts after migration. Compare net values and spot-check conditions.

### Can a wrongly migrated sales order be reloaded?

Not through the same object. SAP's documentation notes migration objects create records but cannot change or update existing ones, so errors found after the real load must be corrected another way. Catch them in mock runs.
