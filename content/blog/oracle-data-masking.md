---
title: "Oracle Data Masking: Data Redaction vs Data Masking and Subsetting"
excerpt: "Oracle Data Redaction masks at runtime without changing stored data; Oracle Data Masking and Subsetting permanently masks non-production copies. When to use each, and why Oracle advises against masking production in place."
metaTitle: "Oracle Data Masking: Data Redaction vs Data Masking and Subsetting"
metaDescription: "Oracle Data Redaction masks at runtime without changing stored data; Oracle Data Masking and Subsetting permanently masks non-production copies. When to use each, and why Oracle advises against masking production in place."
tag: "Data Masking"
author: "Prakash Palani"
slug: "oracle-data-masking"
---

**The short answer.** Oracle offers two different approaches to masking sensitive data. Oracle Data Redaction masks data dynamically at runtime without changing what is stored, and Oracle describes it as typically used on production databases. Oracle Data Masking and Subsetting performs static masking, permanently replacing sensitive data with realistic values, and is used to create safe copies for non-production environments. Oracle's own guidance is that in-database masking should not be performed on production databases. For test environments, the static approach is the relevant one.

Oracle's documentation draws a clearer line than most between dynamic and static masking, and that line is the key to choosing correctly. Getting it wrong usually means believing a test environment is protected when it is not.

## Oracle Data Redaction

Oracle's documentation describes Data Redaction as masking data dynamically at runtime without changing the actual data stored in the database. It is designed mainly for redacting at runtime for production applications, consistently across multiple applications and without application code changes. Oracle says it is typically used on production databases, where real customer or corporate data resides.

## Oracle Data Masking and Subsetting

Oracle Data Masking and Subsetting is the static approach. Oracle's documentation describes it as replacing sensitive data with fictitious yet realistic-looking data, permanently, so data can be safely shared across non-production environments. It also supports subsetting, extracting a smaller portion of a large database, and uses automated discovery to gather referential integrity relationships so applications keep working after masking.

| | Data Redaction | Data Masking and Subsetting |
| --- | --- | --- |
| Type | Dynamic, at runtime | Static, permanent |
| Stored data | Unchanged | Replaced in the masked copy |
| Typical use | Production databases | Test and development copies |

## Do not mask production in place

> Static masking is permanent. Oracle's guidance is to apply it to copies, never to the original.

Because static masking permanently replaces values, Oracle's documentation states that in-database masking and subsetting is not recommended on production databases, and that masking should be performed directly on non-production databases or in-export. Oracle also recommends taking a backup before masking if the original data is needed in a non-production environment.

## Using both

Oracle notes the two can be used together: data masked with Data Masking and Subsetting for a development or test copy can still have Data Redaction policies applied to it. Oracle also cautions that if a masking job reads data through redaction-protected queries, the masked values could be based on redacted rather than original data, which it does not recommend. The sequence matters.

## Beyond a single database

Oracle databases usually sit alongside other systems: SAP, SQL Server, PostgreSQL, CRM platforms. Each may hold the same customers, suppliers or employees. For end-to-end testing across systems, masking has to produce consistent values for the same entity everywhere. Database-native tools are designed around their own database; a landscape with several platforms needs masking applied consistently across all of them.

## Subsetting reduces exposure too

Oracle's inclusion of subsetting alongside masking reflects a useful principle: the less sensitive data a test environment holds, the less there is to protect. Taking only the slice of data a test actually needs, then masking it, reduces both storage and risk. The same principle applies whatever tooling you use: select first, then protect.

## Repeat on every refresh

Non-production Oracle environments are refreshed from production regularly. Masking that runs once and is then forgotten leaves every later refresh unprotected. Building static masking into the refresh process keeps environments safe over their whole life.

## Know where sensitive data sits

Oracle's tooling includes discovery of sensitive data and relationships, which reflects a general truth: masking only protects what you have found. Profiling databases before defining masking rules, including free-text and repurposed columns, is the first step whichever tool does the masking.

## Verify after masking

After a masking run, confirm that sensitive columns no longer hold real values, that masked values keep valid formats, and that the applications and test cases relying on the copy still run. Oracle's emphasis on discovering referential relationships reflects the same concern: a masked copy is only useful if it still behaves like the original. Verification turns that from an assumption into a checked result.

## Set the rule for non-production

A written rule that unmasked production data does not enter Oracle non-production environments, with owners for each environment and an exception process, gives teams a clear default. Combined with masking built into refreshes, it keeps protection in place even as environments multiply and teams change.

## Agree who decides

Database administrators, application owners and privacy or compliance teams each hold part of the decision. Bringing them together early avoids masking that is technically sound but breaks applications, or that keeps applications working but leaves sensitive fields exposed.

## Free text and attachments

Structured columns are the obvious targets, but sensitive details often sit in comments, notes and attached documents. Masking that covers only the structured columns can leave real names, addresses or account numbers in plain view in a text field. Checking these areas explicitly is part of a complete approach on Oracle, as on any database.

## Choosing in practice

In practice the choice is rarely either-or. Production systems may use runtime redaction to limit what certain users see, while every copy made for testing, development or training is statically masked before anyone uses it. Being explicit about which approach applies to which environment, and why, is what prevents the common assumption that a redaction policy in production somehow protects the copies made from it. It does not, because the copies hold the stored data, and redaction never changed it.

The same practical test applies on Oracle as anywhere: if a non-production copy were lost or shared too widely tomorrow, would it expose real customer, employee or financial data? If so, that copy needs static masking before anyone works with it.

## How deKorvai helps

deKorvai provides static masking through its scrambling engine and connects to Oracle and other relational databases through JDBC, as well as to SAP and files. It scrambles sensitive fields at field level with predefined profiles and functions such as scramble, shuffle, constant mapping, character set and bank scrambling. Consistent scrambling logic across multiple databases preserves referential and functional integrity, so the same entity is masked the same way in Oracle, SAP and other connected systems. A test mode validates results before committing.

## Key takeaways

- Oracle Data Redaction is dynamic, for production, with stored data unchanged.
- Oracle Data Masking and Subsetting is static, for non-production copies.
- Oracle advises against masking production in place; mask copies or in-export.
- Mixed landscapes need consistent masking across every database.

## Oracle data masking, answered

### What is the difference between Oracle Data Redaction and Oracle Data Masking?

Oracle Data Redaction masks data dynamically at runtime without changing what is stored, and is typically used on production. Oracle Data Masking and Subsetting permanently replaces sensitive data to create safe non-production copies.

### Which Oracle masking approach is right for test environments?

The static approach, Oracle Data Masking and Subsetting, because test environments are built from copies, and dynamic redaction leaves the stored data in those copies unchanged.

### Can you mask an Oracle production database in place?

Oracle's guidance is that in-database masking and subsetting is not recommended on production databases. Masking should be performed on non-production databases or in-export, with a backup taken first if the originals are needed.

### Can Oracle Data Redaction and Data Masking be used together?

Yes. Oracle notes redaction policies can still be applied to a masked non-production copy, but cautions against masking jobs that read data through redaction-protected queries, since masked values could then be based on redacted data.
