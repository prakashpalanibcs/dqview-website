---
title: "Reference Data vs Master Data (With SAP Examples)"
excerpt: "Master data is your core business entities; reference data is the classification values that categorise them. The difference, SAP examples, and why governance differs."
tag: "Master Data"
author: "Prakash Palani"
slug: "reference-data-vs-master-data"
---

**The short answer.** Master data is the core business entities you transact on, customers, products, vendors, employees. Reference data is the smaller, slower-changing lists that classify and categorise them, country codes, currencies, units of measure, status codes. Master data is unique per entity and changes constantly; reference data is a shared, standardised set of allowed values. Both need governance, but in different ways.

These two terms are often lumped together as "the data that is not transactions", but they behave differently and need managing differently. Getting the distinction clear helps you govern each appropriately, and it matters a great deal in SAP, where both are everywhere.

## What master data is

Master data represents the key entities a business operates on: the customers it sells to, the products it makes, the vendors it buys from, the employees it pays. Each master record is unique, it describes one real thing, and it carries many attributes. Master data changes regularly as entities are added, updated, and retired, and it is exactly the data that duplicates and drifts when it lives in several systems.

## What reference data is

Reference data is the set of standardised, permitted values used to classify and categorise other data. Country codes, currency codes, units of measure, and status codes are all reference data. It is typically a small, well-defined list that changes slowly, and its whole purpose is to be shared and consistent, so that everyone uses the same allowed values. Where master data is about unique entities, reference data is about agreed categories.

## Side by side

| Aspect | Master data | Reference data |
| --- | --- | --- |
| What it is | Core business entities | Standardised classification values |
| Examples | Customers, products, vendors, employees | Country codes, currencies, units of measure |
| Uniqueness | Each record is unique | A shared, finite list of allowed values |
| Change rate | Changes constantly | Changes slowly |
| Main risk | Duplication and drift | Inconsistent or outdated values |

## Reference and master data in SAP

SAP makes the distinction concrete. Material masters, customer and vendor masters (now unified as business partners in S/4HANA), and similar objects are master data: unique, richly attributed, and central to every process. Meanwhile, company codes, plant codes, account groups, units of measure, and countless configuration values act as reference data, the standardised sets that master and transaction data must conform to. In a migration, both have to be handled: master data cleaned and de-duplicated, and reference data mapped correctly to the target model so that master records point at valid values in the new system.

## Why the distinction matters for governance

Because they behave differently, they need governing differently. Master data governance focuses on preventing duplicates, keeping records complete and accurate, and resolving conflicts between systems. Reference data governance focuses on maintaining a single agreed set of values and controlling changes to it, since a change to a reference list ripples across everything that uses it. Treating the two the same way tends to under-serve both. Recognising which is which lets you apply the right controls: de-duplication and matching for master data, and controlled, versioned lists for reference data.

## How they relate to transaction data

To complete the picture, it helps to see how master and reference data relate to the transactions that use them. A transaction, a sales order, an invoice, a goods movement, is an event, and it references both kinds of data to have meaning. It points at master data to say who and what is involved (this customer, this product), and it uses reference data to classify the details (this currency, this unit of measure, this document type).

This is why both have to be right before and during a migration: if a transaction points at a duplicate master record or an invalid reference value, it loses its meaning in the new system. Master data, reference data, and transactions form a chain, and the transactions are only as sound as the two kinds of data they depend on.

## Common mistakes in handling them

- **Treating reference data casually.** Because reference lists are small, they are often neglected, yet an outdated or inconsistent reference value quietly corrupts everything that uses it.
- **De-duplicating reference data like master data.** Reference data needs a single controlled list, not fuzzy matching; applying master-data techniques to it misses the point.
- **Ignoring reference mapping in migration.** Master data gets attention, but reference values also have to map correctly to the target model, or master records end up pointing at invalid codes.
- **No ownership of reference lists.** When no one owns a reference list, changes happen inconsistently and ripple damage across everything downstream.

## Data quality applies to both

Whichever kind of data you are dealing with, quality is the common thread, though it shows up differently for each. For master data, quality means completeness, accuracy, and the absence of duplicates: one trusted record per real entity. For reference data, quality means consistency and currency: a single agreed set of values that everything conforms to, kept up to date. Profiling and rule-based validation serve both, checking master records for gaps and duplicates while confirming that values conform to the permitted reference sets. Treating quality as something that applies across master, reference, and the transactions that use them is what keeps the whole chain sound, rather than fixing one kind of data while another quietly degrades.

## Handling both in a migration

A migration is where the distinction between master and reference data becomes very practical, because both have to be handled and handled differently. Master data has to be profiled, cleansed, de-duplicated, and transformed to the target model, the heavy lifting most migration attention goes to. Reference data has to be mapped so that the target's permitted values align with the source's, and validated so that master and transaction records point at codes that actually exist in the new system.

Neglecting the reference side is a common and avoidable mistake: a beautifully cleaned master record is still broken if it references a currency or unit of measure code that was never mapped into the target. Handling both together, cleansing master data while mapping and validating reference data, is what ensures the migrated records are not just clean but valid in their new home.

## How deKorvai helps

deKorvai supports the governance of both. For master data, it profiles, standardises, and de-duplicates records into golden records, and maintains lineage and a business glossary so definitions stay consistent. For reference data, its rule-driven validation checks that values conform to the allowed sets, catching records that use outdated or invalid codes. In a migration, this means master data is cleaned while reference values are validated and mapped to the target model, so the migrated master records point at correct, consistent reference data in the new system.

## Key takeaways

- Master data is unique entities; reference data is shared classification values.
- Master data changes constantly; reference data changes slowly.
- Different risks: duplication for master, inconsistency for reference.
- They need different governance, so getting the distinction clear matters.

## Frequently asked questions

### What is the difference between master data and reference data?

Master data represents unique core business entities such as customers, products, and vendors, and changes constantly. Reference data is a shared, standardised set of classification values such as country codes and units of measure, and changes slowly.

### Is a country code master data or reference data?

A country code is reference data. It is one of a standardised, finite set of permitted values used to classify other data, rather than a unique business entity, which is what master data describes.

### How do master and reference data appear in SAP?

In SAP, material masters and business partners (unifying customers and vendors) are master data. Company codes, account groups, and units of measure act as reference data, the standardised values master and transaction data must conform to.

### Why govern them differently?

Because they carry different risks. Master data governance focuses on preventing duplicates and keeping records accurate. Reference data governance focuses on maintaining a single agreed set of values and controlling changes, since a change ripples across everything that uses it.
