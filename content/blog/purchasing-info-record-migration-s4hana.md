---
title: "Purchasing Info Record Migration to S/4HANA: What Procurement Must Check"
excerpt: "Purchasing info records hold supplier-material prices and terms that purchase orders draw on. How they migrate to S/4HANA, where they sit in the load sequence, and what procurement should check."
metaTitle: "Purchasing Info Record Migration to S/4HANA: What Procurement Must Check"
metaDescription: "Purchasing info records hold supplier-material prices and terms that purchase orders draw on. How they migrate to S/4HANA, where they sit in the load sequence, and what procurement should check."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "purchasing-info-record-migration-s4hana"
---

**The short answer.** A purchasing info record holds the agreed purchasing terms between a supplier and a material, such as prices, conditions and delivery details, typically for a purchasing organisation. SAP provides a migration object for purchasing info records with conditions, and lists it among the prerequisites for open purchase order migration. For procurement teams, info records matter because purchase orders draw on them: wrong prices or outdated terms in migrated info records become wrong purchase orders from the first day in S/4HANA.

Info records are the quiet memory of procurement. They hold what was agreed with each supplier for each material, so buyers do not have to re-enter it on every order. Migrating them well means S/4HANA starts with those agreements intact. Migrating them badly means every new purchase order inherits the mistakes.

## What a purchasing info record is

A purchasing info record connects one supplier with one material and records the purchasing terms between them: prices and conditions, typically valid for a purchasing organisation and sometimes a plant, along with details such as planned delivery time. When a buyer creates a purchase order for that material from that supplier, the system can draw on the info record for the price and terms.

## How info records migrate

SAP provides a migration object for purchasing info records with conditions, and its documentation for open purchase order migration lists purchasing info records with conditions among the prerequisite objects. Because an info record links a supplier and a material, both must already exist in S/4HANA before the info record can be created. That places info records after suppliers and materials and before open purchase orders in the load sequence.

| Load before | Info records | Load after |
| --- | --- | --- |
| Suppliers (Business Partners), materials with purchasing data, purchasing organisations | Supplier-material terms and conditions | Open purchase orders |

## Why procurement should care

> Every purchase order raised after go-live can inherit what the info record says.

Info records are not just reference data. When a purchase order draws its price from an info record, an outdated price in the migrated record becomes an outdated price on a live order, which then flows into goods receipt and invoice matching. A single wrong condition can affect many orders before anyone notices, usually when a supplier invoice does not match.

## Clean up before you migrate

Most ECC systems accumulate info records that no longer reflect reality: suppliers no longer used, materials no longer bought, prices from agreements that expired years ago. Migrating all of them carries that noise into S/4HANA. A practical approach is to migrate info records only for active supplier-material combinations, such as those with recent purchase orders or current agreements, and to have buyers confirm current prices for the most important ones.

## What procurement should check

- **Prices and conditions.** Current, agreed values, not historical ones.
- **Validity periods.** Conditions that have expired should not arrive as current.
- **Supplier and material links.** Each info record points to the right supplier and material in the target, including after any duplicate merges.
- **Purchasing organisation mapping.** Info records attach to the right organisational units in the redesigned structure.
- **Delivery details.** Planned delivery times reflect current supplier performance.

## Duplicates change the picture

If duplicate suppliers or materials are merged during the migration, info records attached to the retired duplicates need a decision. The surviving supplier-material pair may end up with two sets of terms that have to be reconciled into one. Procurement should review these cases explicitly rather than letting whichever record loads last win.

## Buyers know which terms are current

The fastest route to accurate info records is the buyers who manage each supplier relationship. Giving each buyer a short list of their highest-spend supplier-material combinations, with the prices that will migrate, and asking them to confirm or correct them, catches outdated terms far more reliably than any automated check. It also gives procurement confidence in the new system from the first order.

## Info records and agreements

Some organisations hold supplier terms in contracts or scheduling agreements as well as info records. Where both exist, they should tell the same story. Checking that migrated info records do not contradict the agreements procurement relies on avoids orders being priced one way by the info record and invoiced another way under the contract.

## After go-live

In the first weeks, accounts payable is often the first to spot an info record problem, when invoices fail to match purchase order prices. Agreeing in advance that these mismatches are routed back to procurement quickly, and that the info record is corrected at source, stops the same error repeating on every new order.

## Currencies and price units

Info record prices carry a currency and often a price unit, such as a price per 100 or per 1,000 pieces. Errors in either are easy to miss and costly: a price per 1,000 read as a price per unit produces purchase orders that are wildly wrong. Checking currency and price unit on a sample of info records, especially for international suppliers and low-value high-volume items, is a small check that prevents large mistakes.

## Agree the cut-off with procurement

Deciding which info records to migrate is a procurement decision. A common rule is to migrate records used in purchase orders within an agreed recent period, plus those covering current agreements. Writing the rule down, applying it consistently and keeping a list of what was excluded lets buyers bring back any record they find they need, without reopening the whole decision.

Kept this way, info records move into S/4HANA as an accurate record of current supplier agreements, which is exactly what buyers need on their first day in the new system.

Buyers who trust their info records from day one raise orders faster and with fewer invoice disputes.

That confidence is worth the small effort of a careful review.

## How deKorvai helps

deKorvai prepares purchasing data for S/4HANA as part of its documented migration flows. It checks that suppliers have been migrated as Business Partners and that materials exist in the target before dependent purchasing data loads, flags gaps so the right team can resolve them, and transforms data with mapping rules for company code, purchasing organisation and purchasing group. Profiling surfaces inactive and inconsistent records, fuzzy matching resolves duplicate suppliers and materials into golden records, and validation before load keeps outdated or inconsistent data out of the Migration Cockpit.

## Key takeaways

- Info records hold supplier-material terms, which purchase orders can draw on.
- Suppliers and materials load first; open POs load after.
- Migrate active combinations only, with current prices confirmed by buyers.
- Duplicate merges need a decision on which terms survive.

## Purchasing info record migration, answered

### What is a purchasing info record in SAP?

A record connecting one supplier and one material that holds the purchasing terms between them, such as prices, conditions and planned delivery time, typically for a purchasing organisation. Purchase orders can draw on it for price and terms.

### How are purchasing info records migrated to S/4HANA?

With SAP's migration object for purchasing info records with conditions. Suppliers and materials must already exist, and SAP lists info records with conditions among the prerequisites for migrating open purchase orders.

### Should all info records be migrated?

Usually not. Many ECC info records refer to suppliers or materials no longer used, or to expired prices. Migrate active supplier-material combinations and have buyers confirm current prices for the most important ones.

### Why do info record errors matter after go-live?

Because purchase orders can inherit their prices and terms, so a wrong price becomes a wrong order that flows into goods receipt and invoice matching, often noticed only when a supplier invoice fails to match.
