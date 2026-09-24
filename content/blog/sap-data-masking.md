---
title: "SAP Data Masking: Tables, Clusters and Sensitive Fields"
excerpt: "Masking SAP data for non-production: static vs dynamic masking, which fields to protect, the three tests good masking passes, why cross-system consistency matters, and reapplying on refresh."
tag: "Data Protection"
author: "Prakash Palani"
slug: "sap-data-masking"
---

**The short answer.** Masking SAP data for non-production means changing the data itself so it is realistic but no longer reveals real information. It applies to the fields that carry personal and sensitive data across customer, vendor, employee, payroll, and bank records. Good masking meets three tests: it is consistent, so the same value is masked the same way everywhere and relationships survive; it is realistic, so the data still behaves correctly in testing; and it is irreversible, so the original cannot be recovered. This is distinct from dynamic masking, which hides data at the screen and leaves the underlying records untouched.

Copies of SAP production data end up in development, test, training, and QA systems, and those systems rarely carry production-grade controls. Masking is how you make those copies safe without making them useless. Here is what that involves in an SAP context.

## Two different things called masking

First, a distinction that causes real confusion. Static masking, sometimes called scrambling, obfuscation, or anonymisation in this context, changes the data itself. It is applied to copies of production data destined for non-production, and because it modifies the underlying records, it is not something you apply to a production system. Dynamic masking works differently: it hides values at the presentation layer, so a user sees masked data on screen while the underlying record is unchanged. Dynamic masking suits production, where the real data must still be there for the business to operate. For protecting test and development copies, static masking is what you want.

## What to mask in SAP

The fields that need protecting cluster in predictable places across an SAP landscape:

- **Customer and vendor master data.** Names, addresses, contact details, tax identifiers, and bank details attached to business partners.
- **Employee data.** Personal details, identifiers, and the sensitive HR information that sits in personnel records.
- **Payroll data.** Salary and compensation information, which is among the most sensitive data any organisation holds.
- **Bank and IBAN details.** Account numbers and payment information wherever they appear.

Identifying these fields across your landscape, including in the places they appear beyond the obvious master tables, is the first real task in any masking exercise.

## The three tests good masking must pass

> Masking that breaks your test data has not protected anything. It has just moved the problem.

Practitioner guidance converges on three criteria for masking done well:

1. **Consistent.** The same source value is masked to the same result every time, and across every system. This is what preserves referential integrity: if a customer number is masked one way in the customer table and another way in the sales orders, the data no longer joins and your test system is broken.
2. **Realistic.** The substituted values keep the format and character of the originals, so applications behave normally. A masked postcode should still validate; a masked bank account should still have the right structure.
3. **Irreversible.** The masked values cannot be reverse-engineered back to the originals. If they can, you have not really removed the sensitive data.

## Why cross-system consistency matters most

Of the three tests, consistency across systems is the one most often underestimated and most damaging when missed. SAP landscapes are connected: the same customer appears in ERP, in CRM, in reporting systems, and in interfaces between them. If masking is applied independently in each system, the same real customer becomes different masked customers in each place, and the connections break. Testing an end-to-end process across those systems then fails for reasons that have nothing to do with the code. Applying consistent masking logic across the databases involved is what keeps a masked landscape testable, and it is a genuine technical challenge rather than a detail.

## Masking is not once-and-done

A point that catches teams out: every time you refresh a non-production system from production, unmasked data arrives again. Masking has to be reapplied as part of the refresh process, not treated as a one-time task completed months ago. The cleanest approach is to build masking into the refresh itself, so protected data is the only kind that ever lands in the lower environment. Systems that are refreshed regularly but masked occasionally are, in practice, systems holding real sensitive data most of the time.

## Finding the sensitive fields is half the work

Before you can mask anything, you have to know where the sensitive data is, and in a mature SAP landscape that is genuinely harder than it sounds. Personal data does not sit only in the obvious master records; it propagates into custom tables, interface staging areas, attachments, and fields that were repurposed years ago for something nobody documented. A masking exercise that covers the obvious tables and misses these leaves real data exposed while giving everyone the impression the system is protected, which is arguably worse than doing nothing because it creates false confidence. Systematic discovery, profiling the landscape to find where sensitive values actually live, should therefore precede the masking itself.

## HR and payroll deserve extra care

Among the sensitive data in an SAP landscape, HR and payroll information is consistently the most sensitive and the most likely to cause serious harm if exposed. Salary figures, personal identifiers, bank details, and the personal circumstances recorded in HR systems are data that employees have every expectation will stay confidential, and that regulators treat accordingly. Yet HR data routinely gets copied into test systems alongside everything else during a refresh. Treating HR and payroll as a priority scope for masking, rather than one category among many, reflects both the sensitivity of the data and the reputational consequences of getting it wrong. It is also usually the area where the case for masking is easiest to make internally, because nobody wants to explain an HR data exposure.

## How deKorvai helps

deKorvai scrambles sensitive SAP and non-SAP data for non-production use, and its design reflects the three tests above. It applies scrambling at the field level with predefined profiles covering the areas that matter, customer master, vendor master, employee data, payroll, business partner, and bank and IBAN details, and it applies consistent scrambling logic across multiple databases, so the same value is scrambled the same way everywhere and referential integrity is maintained across systems. It offers a range of scrambling functions including scramble, shuffle, reverse, constant, constant mapping, character set, and bank scrambling, and can run in test mode to validate the result before committing. Because it preserves both referential and functional integrity, the scrambled data stays realistic and usable for testing, and its scrambling is documented as GDPR, HIPAA, and SOX compliant.

## Key takeaways

- Static masking changes the data for non-production; dynamic masking hides it on screen in production.
- Focus on customer, vendor, employee, payroll, and bank data.
- Good masking is consistent, realistic, and irreversible.
- Reapply on every refresh, or your protected system quietly stops being protected.

## Frequently asked questions

### What is the difference between static and dynamic data masking in SAP?

Static masking changes the data itself and is applied to copies destined for non-production, so it is not used on production systems. Dynamic masking hides values at the presentation layer while leaving the underlying records unchanged, which suits production where the real data must remain available.

### What SAP data should be masked?

The fields carrying personal and sensitive information: customer and vendor master data including names, addresses, tax identifiers and bank details; employee personal data; payroll and compensation data; and bank and IBAN details wherever they appear across the landscape.

### What makes SAP data masking effective?

Three things. It must be consistent, so the same value is masked identically everywhere and referential integrity survives. It must be realistic, keeping the original format so applications behave normally. And it must be irreversible, so masked values cannot be reverse-engineered.

### Do you need to mask again after a system refresh?

Yes. Every refresh from production brings unmasked data into the non-production system, so masking must be reapplied as part of the refresh process. Systems refreshed regularly but masked only occasionally are holding real sensitive data most of the time.
