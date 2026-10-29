---
title: "Customer Master Migration in SAP: What Sales and Finance Teams Must Check"
excerpt: "Customer master migration turns ECC customers into S/4HANA Business Partners carrying FLCU00 and FLCU01 roles. Which customers to move, resolving duplicates before conversion, and what sales and finance should each check."
metaTitle: "Customer Master Migration in SAP: What to Check"
metaDescription: "Customers become S/4HANA Business Partners with FLCU00 and FLCU01 roles. Which to migrate, resolving duplicates, and what sales and finance check."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "customer-master-migration-sap"
---

**The short answer.** Customer master migration moves your customers from ECC into S/4HANA, where they become Business Partners carrying customer roles such as FLCU00 for financial accounting and FLCU01 for sales. For sales and finance teams the work is deciding which customers are active enough to move, resolving duplicates before they become duplicate Business Partners, and checking that the data their processes depend on, addresses, tax details, sales settings and payment terms, arrives correct rather than merely complete.

Customer data is where sales and finance meet, and it is where a migration is most visible to the outside world. A wrong address delays a delivery; a wrong payment term shows up on a customer's invoice; a duplicate account sends two statements to the same company. Here is what customer master migration involves and what the teams who own it should check.

## What changes for customers in S/4HANA

In ECC, a customer was a customer master record. In S/4HANA, every customer is a Business Partner, the single record S/4HANA uses for any party you do business with. The customer relationship is expressed through roles: FLCU00 carries the financial accounting view that receivables teams use, and FLCU01 carries the sales view that order management uses. Behind the scenes, Customer Vendor Integration keeps the classic customer tables such as KNA1 and KNVV synchronised with the Business Partner, which is why many existing reports keep working.

## Who owns which part

| Data | Examples | Usually owned by |
| --- | --- | --- |
| General data | Name, address, communication details, tax numbers | Master data team, with sales and finance input |
| Financial accounting view (FLCU00) | Reconciliation account, payment terms, dunning | Accounts receivable, credit control |
| Sales view (FLCU01) | Sales area settings, shipping and billing preferences | Sales operations, order management |

## Decide which customers move

> Most ECC systems hold far more customers than the business still sells to.

Migrating every customer ever created adds effort at every step and clutters the new system with accounts nobody will use. A practical test looks at activity: open orders, open receivables, recent invoices or deliveries. Customers with none of these within an agreed period are candidates to leave behind or archive. Agreeing the cut-off with sales and finance, and recording why, prevents the decision being reopened at cutover.

## Resolve duplicates before conversion

Duplicate customers are the most common problem to surface during migration: the same company entered under slightly different names, often by different sales teams or after an acquisition. Carried into S/4HANA, they become duplicate Business Partners, with split order history, split credit exposure and conflicting statements. Finding them needs fuzzy matching, because exact matching misses the near-duplicates that matter. Resolving them means agreeing which record survives and redirecting the open items and orders attached to the others.

## What sales and finance should check

- **Addresses and contact details.** Formats that S/4HANA validates more strictly, and details that are simply out of date.
- **Tax numbers.** Missing or malformed tax identifiers are a common cause of conversion errors.
- **Payment terms and reconciliation accounts.** Finance should confirm these match what was agreed with each customer.
- **Sales area settings.** Sales operations should confirm customers are set up in the right sales areas with the right preferences.
- **Open receivables.** These must reconcile to the source, signed off by finance.

## Customers who are also suppliers

Some companies are both customers and suppliers. In S/4HANA they can, in principle, be a single Business Partner with both customer and vendor roles, which is one of the model's real benefits. Merging an existing customer and vendor into one Business Partner is an optional capability with its own prerequisites, so it needs a deliberate decision rather than an assumption. Sales, procurement and finance should agree which of these relationships to combine.

## Open items and orders follow the customer

A customer record does not travel alone. Open receivables, open sales orders and pricing agreements all refer to it, and they can only be migrated once the customer exists in S/4HANA as a Business Partner. That makes the customer master one of the earlier objects in the load sequence and means that any customer left behind takes its open items with it. Before agreeing to leave an apparently inactive customer behind, check that it has no open receivables or orders, because those are commitments the business still has to honour.

## Agree the cut-off in writing

The decision about which customers are active enough to migrate tends to be revisited late, usually when a salesperson notices a familiar account missing in the new system. Recording the cut-off rule, who agreed it and when, and keeping a list of excluded customers that can be reviewed, saves that argument at cutover. It also makes it easy to bring a specific customer back if the business needs it, rather than reopening the whole decision.

## Multiple sales areas and company codes

Large customers are often set up across several sales organisations or company codes, each with its own settings. These are the records most likely to arrive incomplete, with one sales area migrated correctly and another missing a setting. Checking the customers with the most complex setups explicitly, rather than relying on a sample, catches these before go-live.

## Tell customer-facing teams what to expect

Customer numbers, document layouts or account structures may change with the move, and the people who talk to customers every day should know before customers notice. A short briefing for sales and receivables teams on what customers might see, and who to contact if a customer reports something odd, turns a potential source of confusion into a controlled conversation.

A final check worth making is a sample of real customers picked by sales and receivables themselves, not by the project: the awkward accounts they know well. If those arrive correctly, the rest usually will.

## How deKorvai helps

deKorvai prepares customer master data for migration to S/4HANA. It profiles customer data to find missing fields, inconsistent formats and inactive accounts, detects near-duplicates with fuzzy matching using Levenshtein distance, Jaro-Winkler and phonetic encoding, and resolves them into golden records. It transforms data to the Business Partner model with the mapping rules a migration needs, while preserving referential integrity so open items and orders stay connected. When records fail validation, they can be sent to the responsible business user to correct and return, and reconciliation against the source gives finance a figure to sign off.

## Key takeaways

- Customers become Business Partners with roles such as FLCU00 and FLCU01.
- Migrate active customers only, with a cut-off sales and finance agree.
- Resolve duplicates first, or they become duplicate Business Partners.
- Sales and finance each own a view, and each should check it.

## Frequently asked questions

### What happens to customer master data in S/4HANA?

Every customer becomes a Business Partner, S/4HANA's single record for any party. The customer relationship is expressed through roles: FLCU00 for the financial accounting view and FLCU01 for the sales view. Customer Vendor Integration keeps classic tables such as KNA1 and KNVV in sync.

### Should all customers be migrated?

Usually not. Most ECC systems hold many customers the business no longer sells to. A practical test looks for open orders, open receivables, or recent invoices and deliveries within an agreed period. Inactive customers can be archived or left behind.

### Why are duplicate customers a problem in migration?

Because carried into S/4HANA they become duplicate Business Partners with split order history, split credit exposure and conflicting statements. Fuzzy matching finds near-duplicates that exact matching misses, and resolving them means choosing a surviving record.

### What should sales and finance check?

Addresses and contact details, tax numbers, payment terms and reconciliation accounts, sales area settings, and that open receivables reconcile to the source. Each team should check the view it owns.
