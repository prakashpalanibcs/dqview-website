---
title: "SQL Server Data Masking: Dynamic Data Masking vs Protecting Test Copies"
excerpt: "SQL Server Dynamic Data Masking hides values in query results but leaves stored data unchanged, per Microsoft's documentation. Why test copies need static masking, and how to keep masking consistent across systems."
metaTitle: "SQL Server Data Masking: Dynamic Data Masking vs Protecting Test Copies"
metaDescription: "SQL Server Dynamic Data Masking hides values in query results but leaves stored data unchanged, per Microsoft's documentation. Why test copies need static masking, and how to keep masking consistent across systems."
tag: "Data Masking"
author: "Prakash Palani"
slug: "sql-server-data-masking"
---

**The short answer.** SQL Server has a built-in feature called Dynamic Data Masking that hides sensitive values in query results for users without the right permissions. Microsoft's documentation is clear that the data in the database is not changed, that users with CONTROL permissions can still see the originals, and that the feature should not be used alone to protect data from users running ad hoc queries. That makes it useful for limiting exposure in live applications but not a way to protect copies of production data used in test and development, where static masking, which changes the data in the copy itself, is the right tool.

When teams look for SQL Server data masking, they usually find Dynamic Data Masking first, because it is built in. It is a genuinely useful feature. It is also frequently misunderstood, and the misunderstanding matters most for test environments, which is where many organisations most need masking.

## What Dynamic Data Masking does

According to Microsoft's documentation, Dynamic Data Masking, available from SQL Server 2016 and in Azure SQL Database, limits exposure of sensitive data by masking it to non-privileged users. Masking rules are defined on columns, and when a user without the right permission queries those columns, the results are masked. Privileged users or roles can be designated to see the real values. Microsoft's documentation also notes that a datetime masking function was added in SQL Server 2022.

## What it does not do

> Dynamic masking changes what a query returns. It does not change what is stored.

- **The stored data is unchanged.** Microsoft's documentation states plainly that with Dynamic Data Masking the data in the database isn't changed.
- **Privileged users see originals.** Users with CONTROL SERVER or CONTROL at the database level can view masked data in its original form.
- **It is not a standalone control.** Microsoft states it should not be used alone to fully secure sensitive data from users running ad hoc queries, and recommends using it alongside features such as auditing, encryption and row-level security.
- **Copies may carry real values.** Microsoft's Tech Community guidance notes that backups or exported datasets may contain unmasked values depending on permissions and configuration.

## Why this matters for test environments

Test and development databases are usually built by copying production. Because Dynamic Data Masking does not change the stored data, a copy of a production database still contains the real values. Anyone with sufficient rights in the test environment, which often includes developers, testers and partners, can see them. For non-production copies, the protection has to be applied to the data itself, so the copy holds no real sensitive values at all.

| | Dynamic Data Masking | Static masking |
| --- | --- | --- |
| Changes stored data | No | Yes, in the copy |
| Best for | Limiting what live application users see | Test, development and training copies |
| Privileged users | Can see originals | Originals are not present in the copy |

## Using both

The two approaches complement each other. Dynamic Data Masking can limit what support staff or report users see in production. Static masking protects the copies that leave production. Many organisations need both, applied to different environments for different reasons.

## Consistency across systems

SQL Server databases rarely stand alone. The same customer or supplier often appears in an ERP system, a CRM and a reporting database. For end-to-end testing to work, a masked value in SQL Server must match the masked value for the same entity elsewhere. Masking each database independently, with different results, breaks those relationships.

## Mask on every refresh

Test databases are refreshed regularly from production. Each refresh brings unprotected data back unless masking runs as part of it. Building static masking into the refresh process, rather than treating it as a one-off, is what keeps non-production SQL Server environments protected for their whole life rather than just after the first clean-up.

## Who should decide

Choosing between dynamic and static masking, and deciding which columns to protect, involves the database team, the application owners and privacy or compliance. The database team knows where sensitive columns sit; application owners know which values tests depend on; compliance knows what must be protected. Deciding together avoids masking that is either too weak or so aggressive that applications stop working.

## Find the sensitive columns first

Masking only protects the columns you know about. Sensitive data often hides in unexpected places such as notes, free-text fields or columns repurposed over the years. Profiling the database before defining masking rules shows where personal and financial data actually sits.

## Verify the masked copy

After static masking runs, check that no real values remain in the protected columns, that formats are still valid, and that applications and tests using the copy still work. A masked database that breaks the application will quickly be replaced by an unmasked copy by someone under deadline pressure, which defeats the purpose. Building a short verification step into each refresh avoids that.

## Write the rule down

The simplest protection is a written rule that unmasked production data does not enter non-production SQL Server environments, with named owners for each environment and a clear exception process. It gives teams under time pressure a clear answer and makes masking the default rather than an afterthought.

Treated this way, SQL Server masking becomes a routine part of how environments are built rather than a project someone has to remember, and the gap between what the business believes is protected and what actually is protected closes.

That combination, dynamic masking where it fits and static masking for every copy, is what most organisations running SQL Server actually need.

The practical test is simple: if a copy of a production SQL Server database were lost tomorrow, would it expose real customers, employees or bank details? If the answer is yes, the copy needs static masking.

## How deKorvai helps

deKorvai provides static masking through its scrambling engine, and connects to relational databases including Microsoft SQL Server through JDBC. It scrambles sensitive fields at field level with predefined profiles and functions including scramble, shuffle, reverse, constant mapping, character set and bank scrambling. Consistent scrambling logic across multiple databases preserves referential and functional integrity, so a customer masked in SQL Server matches the same customer in SAP or other connected systems. A test mode validates results before committing, and its scrambling is documented as GDPR, HIPAA and SOX compliant.

## Key takeaways

- SQL Server Dynamic Data Masking masks query results, not stored data.
- Privileged users see originals, and Microsoft says not to rely on it alone.
- Copies of production keep real values, so test environments need static masking.
- Mask consistently across systems so end-to-end testing still works.

## SQL Server data masking, answered

### What is SQL Server Dynamic Data Masking?

A built-in SQL Server feature, available from SQL Server 2016 and in Azure SQL Database, that masks sensitive column values in query results for users without the right permissions, while designated privileged users see the real values.

### Does SQL Server Dynamic Data Masking change the stored data?

No. Microsoft's documentation states that with Dynamic Data Masking the data in the database isn't changed. Masking applies to what queries return, not to what is stored.

### Can Dynamic Data Masking protect test environments?

Not on its own. Test databases are usually copies of production, and because the stored data is unchanged, the copy still contains real values. Microsoft also notes backups or exports may contain unmasked values. Test copies need static masking.

### Should Dynamic Data Masking be used alone?

Microsoft states it should not be used alone to fully secure sensitive data from users running ad hoc queries, and recommends using it with features such as auditing, encryption and row-level security.
