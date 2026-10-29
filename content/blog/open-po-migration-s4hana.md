---
title: "Open PO Migration to S/4HANA: What Procurement Teams Must Close First"
excerpt: "Open PO migration moves purchase orders not yet delivered and invoiced into S/4HANA. Why GR/IR mismatches must be closed first, the supplier and material dependencies, and what procurement should check."
metaTitle: "Open PO Migration to S/4HANA: What to Close First"
metaDescription: "Open PO migration moves purchase orders not yet delivered and invoiced. Why GR/IR mismatches close first, and the supplier and material dependencies."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "open-po-migration-s4hana"
---

**The short answer.** Open PO migration moves purchase orders that are still in progress from ECC into S/4HANA, using the Migration Cockpit object for open purchase orders, which only accepts items not yet fully delivered and invoiced. For procurement teams the critical work happens before the move: closing purchase orders where goods arrived without an invoice or an invoice arrived without the goods, because SAP requires GR/IR clearing accounts to be balanced by the migration key date. Every open PO also depends on its supplier and material already existing in S/4HANA.

Open purchase orders are where procurement's day-to-day work meets the migration. A PO that is half delivered, a supplier waiting to be paid, a material still on order: these have to carry on seamlessly the day S/4HANA goes live. Here is what moves, what procurement must close first, and what to check.

## What moves, and what does not

The SAP S/4HANA Migration Cockpit provides a migration object for purchase orders that migrates only open purchase orders, meaning items that have not yet been delivered and invoiced. Completed purchase orders stay behind in ECC or the archive. That distinction matters for procurement: the migration does not carry your full purchasing history, it carries the commitments that are still live, and those need to be accurate because suppliers, receiving and payables will act on them immediately.

## Close GR/IR mismatches first

> The purchase orders that cause most trouble are the half-finished ones.

SAP's guidance for financial data migration is that goods receipt / invoice receipt (GR/IR) clearing accounts need to be balanced by the migration key date. In procurement terms, that means two kinds of purchase order need resolving in ECC before the move: those where goods were received but the invoice has not been posted, and those where the invoice was posted but the goods were never received. Left open, they leave GR/IR unbalanced and create reconciliation problems in the new system. Identifying them early, and giving the responsible buyers a clear list to close, is the most valuable single step procurement can take.

## Every PO depends on two other objects

A purchase order points to a supplier and, usually, to a material. In S/4HANA the supplier is a Business Partner with a vendor role, and the material must exist with the right purchasing data. If either is missing in the target when the open POs load, the PO cannot be created. That makes open POs one of the last objects in the load sequence, after suppliers and materials are in place and checked. A practical rule: before loading open POs, confirm every supplier and material they reference has already been migrated, and route any gaps back to the right team.

## What procurement should check

- **Which POs are genuinely open.** Quantities still to be delivered or invoiced, rather than old POs left open by mistake.
- **Item categories.** Not every purchase order item category is supported by the standard migration object, and service items need the object extended. Find these early rather than at load.
- **Prices.** Purchase order items with a zero net price are rejected by the migration, so check them before load.
- **Organisational mapping.** Company code, purchasing organisation and purchasing group must map correctly to the S/4HANA structure.
- **Open quantities after migration.** What remains to be delivered and invoiced in S/4HANA should match what was outstanding in ECC.

## Clean up stale POs while you are at it

Most ECC systems carry purchase orders that are technically open but practically dead: a small residual quantity nobody will ever deliver, or a PO from years ago that was never formally closed. Migrating them clutters S/4HANA with commitments that do not exist and distorts spend and open-commitment reporting. A migration is the natural moment to review and close them in the source, with buyers confirming which are real.

## Give buyers a clear list, early

Closing GR/IR mismatches and stale purchase orders is work only buyers can do, because they know which suppliers to chase and which commitments are real. The most effective approach is to give each buyer a specific list of their own purchase orders needing action, well before the key date, rather than a single report covering everything. Lists that arrive during cutover planning get done; lists that arrive the week before go-live do not. Repeating the list at each mock migration shows whether the backlog is shrinking.

## Check open quantities, not just counts

It is easy to confirm that the right number of purchase orders migrated and miss that their open quantities are wrong. What matters to the business is what remains to be delivered and invoiced: if a PO for a hundred units had sixty delivered in ECC, S/4HANA should show forty still open. Reconciling open quantities and values, not just document counts, is what gives receiving and accounts payable confidence on day one.

## Timing at cutover

Purchasing does not stop because a migration is happening. Goods continue to arrive and invoices continue to be posted until the transaction freeze. Agreeing how procurement handles that window, and taking a final delta of open POs at cutover, keeps the commitments in S/4HANA current.

## Tell key suppliers if anything changes

If purchase order numbers or formats change in S/4HANA, suppliers who reference your PO numbers on deliveries and invoices need to know, otherwise receiving and invoice matching run into avoidable problems in the first weeks. A short notice to key suppliers before go-live is a small step that prevents a lot of mismatched paperwork.

Accounts payable should be part of these checks too, because they will match the first invoices against migrated purchase orders and are often the first to spot a quantity or price that did not come across correctly.

## How deKorvai helps

Open PO migration is one of deKorvai's documented migration flows. It extracts purchase order header and item data from ECC, checks that each PO's supplier has been migrated as a Business Partner and its materials have been migrated to the target, and flags any gaps so the right team can migrate them first. From PO history it identifies cases where goods were received but not invoiced, or invoiced but not received, and emails the responsible users the list to close in the source. Fully open POs are then transformed with mapping for company code, purchasing organisation, supplier, material and purchasing group, loaded into the Migration Cockpit staging tables, simulated and migrated.

## Key takeaways

- Only open items migrate: not yet fully delivered and invoiced.
- GR/IR must be balanced by the migration key date, so close mismatches first.
- Suppliers and materials load first, because every PO depends on them.
- Check item categories and prices before load, not at it.

## Frequently asked questions

### Which purchase orders are migrated to S/4HANA?

Only open purchase orders. The Migration Cockpit object for purchase orders migrates items that have not yet been fully delivered and invoiced. Completed purchase orders stay in ECC or the archive.

### Why do GR/IR mismatches need closing before migration?

SAP's guidance is that GR/IR clearing accounts must be balanced by the migration key date. Purchase orders where goods arrived without an invoice, or an invoice without the goods, leave GR/IR unbalanced and cause reconciliation problems.

### What must exist in S/4HANA before open POs are loaded?

The supplier, as a Business Partner with a vendor role, and the materials the PO references, with the right purchasing data. That is why open POs load late in the sequence, after suppliers and materials.

### What commonly causes open PO migration errors?

Unsupported item categories, service items that need the migration object extended, items with a zero net price, missing suppliers or materials, and organisational structures that do not map correctly to S/4HANA.
