---
title: "What Is Master Data? A Plain Guide to MDM"
excerpt: "Master data is your core business entities: customers, products, vendors. How it differs from transaction and reference data, why MDM matters, and what a golden record is."
tag: "Master Data"
author: "Prakash Palani"
slug: "what-is-master-data"
---

**The short answer.** Master data is the core business entities an organisation operates on: customers, products, vendors, employees, and similar. Unlike transactions, which record events, master data describes the things those events involve, and it is meant to be shared consistently across systems. Master data management (MDM) is the practice of keeping that data accurate, complete, and free of duplicates, so the whole business works from one trusted version of each entity.

Master data is one of those terms that sounds technical but describes something simple: the important things your business keeps track of. Getting it right matters more than it seems, because almost every process and report depends on it. Here is a plain guide to what master data is and why managing it is worth the effort.

## What master data is

Master data represents the key entities a business runs on. The common categories are customers, products or materials, vendors or suppliers, and employees, though organisations have others specific to them. What these share is that they are the nouns of the business: the things transactions happen to. An order (a transaction) involves a customer, a product, and often a vendor, all of which are master data. Master data is relatively stable, richly described with many attributes, and meant to be used consistently everywhere it appears.

## How it differs from other data

| Type | What it is | Example |
| --- | --- | --- |
| Master data | Core business entities | A customer, a product, a vendor |
| Transaction data | Records of events | An order, an invoice, a shipment |
| Reference data | Standardised classification values | Country codes, currencies, units |

The distinction matters because each type behaves differently and needs managing differently. Transactions are numerous and constant; master data is more stable but must be kept trusted; reference data is a small controlled list. A transaction is only meaningful because it points at master and reference data that are correct.

## Why master data management matters

> When the same customer exists five times, every report about that customer is wrong five ways.

Master data management is the practice of keeping master data accurate, complete, consistent, and free of duplicates. It matters because master data problems ripple everywhere. A duplicated customer causes conflicting statements and wrong credit decisions. An incomplete product record blocks orders. Inconsistent vendor data splits spend and confuses reporting. Because master data sits underneath so many processes, a single bad master record can cause many downstream failures, which is why keeping it trusted pays off across the whole business.

## The golden record

The central goal of master data management is the golden record: a single, trusted version of each entity that combines the best data from wherever it lives. Building golden records means finding the duplicates that represent the same real thing, including near-duplicates that are spelled differently, and merging them into one authoritative record while re-pointing the transactions attached to the duplicates. The golden record is what lets the business say, with confidence, that one customer means one customer everywhere.

## Master data in a migration

Master data is central to any system migration, and especially to an S/4HANA move. S/4HANA uses a different data model, including the Business Partner model that unifies customer and vendor master records, so master data has to be cleaned, de-duplicated, and transformed to the new structure. Because master data problems block or corrupt a migration, getting it right is often the single biggest determinant of whether a migration succeeds. A migration is also a natural moment to establish good master data management, since the data is being handled anyway.

## The master data lifecycle

Master data has a lifecycle, and understanding it explains why management is ongoing rather than one-time. A master record is created when a new entity enters the business, a new customer, a new product, then it is used across countless transactions, updated as the real-world entity changes, and eventually retired when it is no longer active. Problems can enter at every stage: duplicates created because someone could not find the existing record, updates that introduce inconsistency, records left active long after they should have been retired. Managing master data means attending to the whole lifecycle, not just cleaning it once. This is why master data management is a continuous discipline: the forces that degrade master data operate constantly, so keeping it trusted requires constant, if lightweight, attention.

## Master data needs ownership

The most common reason master data degrades is that no one clearly owns it. When responsibility for the customer master or the material master is diffuse, quality problems accumulate because everyone assumes someone else is watching. Effective master data management assigns clear ownership, so each master data domain has a person or team accountable for its quality, supported by shared definitions so that everyone means the same thing by a given field.

Technology can profile, de-duplicate, and monitor, but it cannot decide what a correct record should look like; that judgement belongs to the business owners who understand the entity. Pairing the right tooling with clear ownership is what keeps master data trusted, rather than letting it slide back into duplication and inconsistency once an initial clean-up is done.

## Why getting master data right pays off

The return on trusted master data is broad because master data sits under so much. When each customer, product, and vendor is represented once and correctly, reports agree, processes run without the friction of bad records, and duplicate-driven waste disappears. Any initiative that depends on trustworthy data, analytics, automation, a migration, starts from a stronger position. The value of master data management is rarely a single dramatic saving; it is the quiet removal of a tax that bad master data imposes on everything the business does. That is why organisations that invest in it tend to find the benefit shows up not in one place but across many, as the whole operation gets a little more reliable once it can finally trust that one entity means one entity everywhere.

## How deKorvai helps

deKorvai supports master data management through its data quality and profiling capabilities. It profiles and standardises master data, detects duplicates using fuzzy matching (including techniques such as Levenshtein, Jaro-Winkler, and phonetic encoding) that catch near-duplicates rather than only exact copies, and builds golden records that combine the best data from the duplicates. Because it works across both master and transactional data, linked transactions can be re-pointed to the surviving record. In one documented example, deKorvai scanned more than 120,000 material master records with AI-powered fuzzy matching to detect and cleanse near-duplicates across both master and transactional data.

## Key takeaways

- Master data is your core entities: customers, products, vendors, employees.
- It differs from transactions (events) and reference data (classification values).
- MDM keeps it trusted: accurate, complete, and free of duplicates.
- The goal is the golden record: one trusted version of each entity.

## Frequently asked questions

### What is master data?

Master data is the core business entities an organisation operates on: customers, products, vendors, employees, and similar. Unlike transactions, which record events, master data describes the things those events involve, and it is meant to be shared consistently across systems.

### What is the difference between master data and transaction data?

Master data describes core entities such as a customer or product and is relatively stable. Transaction data records events, such as an order or invoice, and is numerous and constant. A transaction is only meaningful because it points at master data that is correct.

### What is a golden record?

A golden record is a single, trusted version of an entity that combines the best data from wherever it lives. Building one means finding duplicates that represent the same real thing, including near-duplicates, and merging them into one authoritative record while re-pointing attached transactions.

### Why does master data matter in an S/4HANA migration?

Because S/4HANA uses a different data model, including the Business Partner model that unifies customer and vendor records. Master data has to be cleaned, de-duplicated, and transformed to the new structure, and master data problems can block or corrupt the migration.
