---
title: "Business Partner Conversion in S/4HANA: The Vendor-to-BP Guide (CVI)"
excerpt: "In S/4HANA, customers and vendors become Business Partners via CVI. How Customer/Vendor Integration works, why it is mandatory before conversion, and why data cleansing is the hard part."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "business-partner-conversion-s4hana"
---

**The short answer.** In S/4HANA, customers and vendors no longer exist as separate master records you create directly. Everything runs through the Business Partner, a single object that can play a customer role, a vendor role, or both. Customer/Vendor Integration (CVI) is the mechanism that converts your existing ECC customers and vendors into Business Partners, and keeps them synchronised with the classic tables in the background. CVI conversion is mandatory before a system conversion, and its hardest part is not the technical run. It is cleaning up the customer and vendor data first.

If you have spent years in ECC creating customers with XD01 and vendors with XK01, the Business Partner model is the change that catches most teams off guard. It is not just a new transaction; it changes how master data works, and it has to be sorted out before you can convert your system. Here is what actually happens, in plain terms, and where the real effort goes.

## The Business Partner, in plain terms

In S/4HANA, the Business Partner (BP) is the single, mandatory entry point for customer and vendor master data. You create and change everything through transaction BP, not the old XD01 or XK01. The point of this is simple: one real-world company that is both a customer and a supplier can now be a single Business Partner playing two roles, rather than two disconnected records that never knew about each other. Those roles are controlled by BP role keys, FLCU00 and FLCU01 on the customer side, FLVN00 and FLVN01 on the vendor side, and one BP can carry several at once.

## The classic tables did not disappear

Here is a point that reassures a lot of teams: the familiar customer and vendor tables are still there. KNA1, KNB1, KNVV for customers, LFA1 and the vendor tables for suppliers, all still exist and are still populated in S/4HANA. Finance and logistics still read from them. What changed is how they get filled. You no longer write to them directly; instead, when you save a Business Partner in the right role, CVI writes the matching entries to those classic tables in the background. So existing reports, interfaces, and custom code that read KNA1 or LFA1 keep working. The BP is the front door; CVI keeps the old rooms furnished.

## What CVI actually does

> CVI is the glue. It turns your old customers and vendors into Business Partners, and keeps the two worlds in sync from then on.

Customer/Vendor Integration has two jobs. During migration, it is the mechanism that converts your existing ECC customers and vendors into Business Partners, using a mapping between the old account groups and the new BP groupings. After migration, it runs quietly in the background: every time a BP is saved in a customer or vendor role, CVI synchronises the change out to the classic tables, so the technical customer and vendor masters stay consistent with the BP. Setting up BP and CVI, with the customer and vendor as the leading objects, is a prerequisite for any S/4HANA conversion, and it has to be done before the technical conversion, not after.

## The hard part is the data, not the tool

Now the honest part. The CVI mechanism itself is well documented and SAP provides the tools and reports to run it. The labour-intensive phase, the one that expands to eat your timeline, is preparing the data. Before you can synchronise cleanly, you have to cleanse your customer and vendor master data: resolve duplicates, fill mandatory fields, fix invalid entries such as malformed email addresses that the BP validation will reject, and decide which customers and vendors are worth converting at all. Records you do not want as Business Partners should be marked for deletion and archived rather than dragged across. Teams that treat CVI as a technical task and skip this data work hit a wall of synchronisation errors; teams that clean first run the conversion far more smoothly.

## The preparation, step by step

In broad terms, preparing for CVI conversion in your ECC system involves:

1. **Archive redundant master data.** Decide what should not become a Business Partner and remove it from scope, so you are not converting dead records.
2. **Cleanse and de-duplicate.** Resolve duplicate customers and vendors, fill mandatory fields, and fix invalid data that BP validation will reject.
3. **Complete CVI customising.** Configure the account-group-to-grouping mapping and the settings that control synchronisation, in the customer and vendor to BP direction.
4. **Run the pre-conversion checks.** SAP provides check reports that flag data problems before you attempt synchronisation.
5. **Synchronise in controlled batches.** Start with a small batch to surface errors early, then run the full conversion, resolving errors as they appear.

The order matters. The cleaner your data is before you reach the synchronisation step, the fewer errors you fight, and the more predictable the whole conversion becomes.

## The errors that catch teams out

When CVI synchronisation throws errors, they almost always trace back to data problems, not the mechanism itself. The classic ones are worth knowing in advance. Invalid email addresses cause failures because BP validation checks that email characters are valid, so a malformed address that ECC happily stored will block the sync. Missing mandatory fields stop records converting, because the BP model requires data the old customer or vendor record left empty. Duplicate customers and vendors create ambiguity about which should become which Business Partner. And inconsistent tax or bank details surface when the sync tries to reconcile them. Every one of these is a data quality issue that could have been caught and fixed before synchronisation, which is exactly why the preparation phase matters so much more than the technical run.

## The single-legal-entity question

A question that comes up often is what to do when the same company is both a customer and a vendor in your ECC system. In the old world these were two entirely separate records that never knew about each other. The Business Partner model can represent them as a single legal entity playing both a customer role and a vendor role, which is one of the real benefits of the change: one company, one Business Partner, multiple roles. It is worth being precise here: SAP recommends one Business Partner per legal entity with roles added for each function, but merging an existing customer and vendor into a single Business Partner is an optional feature with its own prerequisites, not something that happens automatically. Achieving it during conversion requires deciding which records represent the same real-world entity and mapping them accordingly, which is again a data exercise. Getting it right means cleaner master data in the new system; getting it wrong means the same company lingers as two disconnected Business Partners, carrying the old fragmentation forward.

## How deKorvai helps

deKorvai handles the data-preparation work that decides whether a CVI conversion goes smoothly. It connects to SAP ECC with rule-based extraction, profiles customer and vendor master data against configurable rules, de-duplicates records using fuzzy matching that catches near-duplicates rather than only exact copies, and validates data so that problems which would fail BP validation are caught and fixed first. It transforms and maps data to the S/4HANA target, including the kind of account-group mapping the conversion depends on, and loads into the Migration Cockpit (DMC) staging tables with reconciliation. In one documented business partner migration, deKorvai moved more than 50,000 vendor records into DMC staging tables, achieving 100% data accuracy and a 95%+ first-pass rate, because the data was clean before it became Business Partners.

## Key takeaways

- The Business Partner is the single, mandatory entry point for customer and vendor data in S/4HANA.
- CVI converts your ECC customers and vendors into BPs and keeps the classic tables in sync.
- CVI conversion is mandatory before a system conversion, not after.
- The hard part is data preparation: cleanse and de-duplicate before you synchronise.

## Frequently asked questions

### What is Business Partner conversion in S/4HANA?

It is the process of turning your existing ECC customers and vendors into Business Partners, the single master data object S/4HANA uses. In S/4HANA you create customers and vendors only through the Business Partner, so legacy records must be converted before you can run a system conversion.

### What is CVI (Customer/Vendor Integration)?

CVI is the mechanism that converts existing customers and vendors into Business Partners during migration, and afterwards keeps the Business Partner synchronised with the classic customer and vendor tables in the background. When a BP is saved in a customer or vendor role, CVI writes the matching entries to tables like KNA1 and LFA1.

### Do KNA1 and LFA1 still exist in S/4HANA?

Yes. The classic customer and vendor tables still exist and are still populated in S/4HANA, so existing reports and custom code keep working. The difference is that they are filled through CVI synchronisation when a Business Partner is saved, rather than by creating customers and vendors directly.

### What is the hardest part of Business Partner conversion?

The data preparation, not the technical run. Before synchronisation, customer and vendor master data has to be cleansed and de-duplicated, mandatory fields filled, invalid entries fixed, and out-of-scope records archived. Skipping this leads to a wall of synchronisation errors during conversion.
