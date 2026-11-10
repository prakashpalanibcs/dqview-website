---
title: "SAP Data Migration Defects: What Happens When a Load Rejects Your Records"
excerpt: "SAP data migration defects are records that fail to load or load wrongly. The kinds of defect, why to catch them before load, how to route each to its owner, and how defect trends signal readiness."
metaTitle: "SAP Data Migration Defects: What Happens When a Load Rejects Your Records"
metaDescription: "SAP data migration defects are records that fail to load or load wrongly. The kinds of defect, why to catch them before load, how to route each to its owner, and how defect trends signal readiness."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "sap-data-migration-defects"
---

**The short answer.** An SAP data migration defect is a record that fails to load or loads incorrectly: a missing mandatory field, a reference to a customer or material that does not exist yet, a value with no mapping, or a business setting that is technically valid but wrong. Defects are normal in mock migrations; what matters is how quickly they are found, routed to the right owner, fixed at the source and re-tested. A disciplined defect process is what turns a series of mock runs into a clean cutover.

Every mock migration produces rejected records. That is the point of rehearsing. The difference between programmes that land on time and those that slip is rarely the number of defects in the first mock; it is how quickly each defect reaches someone who can fix it. Here is how to handle defects as a business process rather than an IT backlog.

## The kinds of defect

| Defect | Example | Who usually fixes it |
| --- | --- | --- |
| Missing mandatory data | Supplier without a tax number | Data owner for the domain |
| Broken reference | Order pointing to a customer not yet migrated | Migration team (load sequence) or owner |
| Unmapped value | Old plant code with no mapping | Process owner |
| Invalid format | Malformed bank or postal details | Data steward |
| Duplicate | Same supplier entered twice | Data steward with owner approval |
| Wrong but valid | Correct-looking payment term that is not the agreed one | Business user who knows the account |

## Catch defects before the load

> The cheapest defect is the one found before the record reaches the target.

Most defects can be detected before data reaches the Migration Cockpit, by validating against the same rules the target will apply and checking that every reference resolves. The Cockpit's own simulation step then catches much of what remains before the real migration. Defects found after the actual load cost more, because SAP's migration objects create records rather than update them, so a wrongly loaded record has to be corrected some other way.

## Route each defect to its owner

The slowest part of defect handling is usually not finding the defect but getting it to the person who can fix it. A shared spreadsheet of rejected records, reviewed when someone has time, adds days to every mock cycle. A better process sends each defect directly to the owner of the record, with the reason it failed, and collects the corrected version for the next run. Business users do not need to read load logs; they need a clear list of their own records and what is wrong with each.

## Fix at the source

A defect fixed only in a migration file returns in the next extract. Fixing it in the source system, or in the agreed transformation rule, means it stays fixed for every subsequent mock and for cutover. Where the same defect appears across many records, it usually points to a missing rule or mapping rather than many individual errors, and fixing the rule clears them all at once.

## Track defects across mock runs

Defect counts per domain, tracked across mock migrations, are one of the clearest measures of readiness. They should fall with each run. If a domain's defects stay flat, the fixes are not reaching the cause. Grouping defects by type also shows where effort should go: many broken references suggest a sequencing problem, many unmapped values suggest mapping gaps.

## Triage before you fix

Not every defect is equal. Some block whole objects from loading; others affect a single record. A short daily triage that ranks defects by impact, separates genuine data problems from configuration or sequencing issues, and assigns each to an owner keeps the team focused on what will stop the next mock run. Without triage, the easiest defects get fixed first and the blocking ones linger.

## Defects and the go/no-go decision

By the final mock migration, defect counts should be low, stable and understood. Any remaining open defects should be listed with an owner, a decision to fix or accept, and the business impact of accepting it. That list is one of the most important inputs to the go/no-go decision, because it states plainly what the business is agreeing to live with on day one.

## What business users need from the process

Business users fixing defects need three things: a list of only their own records, a plain explanation of what is wrong with each, and a simple way to send back the correction. They do not need access to load logs or migration tools. When the defect process is designed around those needs, correction rates rise and turnaround falls, because fixing a record becomes a few minutes of work rather than a puzzle.

## Look for patterns

Hundreds of defects of the same kind usually share one cause: a missing mapping, a field that was never maintained, a rule the source system did not enforce. Grouping defects by type before assigning them often reveals that one decision or one rule change fixes most of them at once, which is far faster than correcting records one by one.

## Keep a defect log

A simple log of each defect, its cause, its owner and how it was resolved becomes valuable evidence. It shows auditors that migration data was validated and that exceptions were handled deliberately, and it gives later waves a head start, because the same kinds of defect tend to recur. Logs built as part of the process cost almost nothing; logs reconstructed afterwards cost a great deal.

Handled this way, defects become a predictable workload rather than a source of surprises at cutover.

## How deKorvai helps

deKorvai is built to find defects early and route them fast. It profiles and validates data before load against business and technical rules, including mandatory-field, duplicate and target-setting checks, and confirms that dependent objects such as suppliers and materials already exist in the target. When records fail, deKorvai emails the invalid records to the responsible business user for validation and correction, and the corrected file feeds the next run. Records are simulated in the Migration Cockpit before migration, and full audit trails record every defect and its resolution.

## Key takeaways

- Defects are normal in mocks; speed of resolution is what matters.
- Catch them before load and in simulation, not after the real migration.
- Route each defect to its owner with the reason it failed.
- Fix at the source or in the rule, and track counts across runs.

## SAP migration defects, answered

### What is a data migration defect in SAP?

A record that fails to load or loads incorrectly, such as a missing mandatory field, a reference to a customer or material not yet migrated, a value with no mapping, an invalid format, a duplicate, or a value that is valid but wrong.

### When should migration defects be caught?

Before the load wherever possible, by validating against the target's rules and checking references, then in the Migration Cockpit's simulation step. Defects found after the real load cost more, because migration objects create rather than update records.

### Who should fix migration defects?

The owner of the record: data owners for missing data, process owners for unmapped values, stewards for formats and duplicates, and business users for values that are valid but wrong. Route each defect directly to them with the reason it failed.

### How do defects show migration readiness?

Defect counts per domain should fall with each mock migration. Flat counts mean fixes are not reaching the cause. By the final mock, remaining defects should be few, owned, and explicitly accepted or fixed before go-live.
