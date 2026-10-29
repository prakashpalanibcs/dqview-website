---
title: "SAP TDMS Replacement: Test Data for Business Testers After the Move to S/4HANA"
excerpt: "SAP TDMS is not supported in S/4HANA, and SAP's successor serves Public Edition only. What a TDMS replacement must do for business testers, the three jobs it has to cover, and how to evaluate one."
metaTitle: "SAP TDMS Replacement for S/4HANA Test Data"
metaDescription: "SAP TDMS is not supported in S/4HANA (SAP Note 2696183) and SAP's successor serves Public Edition only. What a replacement must do, and how to evaluate it."
tag: "Test Data Management"
author: "Prakash Palani"
slug: "sap-tdms-replacement"
---

**The short answer.** SAP Test Data Migration Server (TDMS) is not supported in the S/4HANA context, as SAP Note 2696183 states, and that covers both its data reduction and its scrambling. SAP's own replacement service is currently available only for S/4HANA Cloud Public Edition, not on-premise or Private Edition. So organisations that relied on TDMS to give business testers realistic, protected data lose that route when they move. A replacement has to cover three jobs: selecting the right slice of data, protecting sensitive fields, and keeping relationships intact so business processes still run.

For years, TDMS was how many SAP teams refreshed test systems with a smaller, safer copy of production. Business testers rarely knew its name, but they relied on it: it was the reason UAT had realistic customers and suppliers without exposing real ones. When the landscape moves to S/4HANA, that quietly stops working. Here is what changes and what to look for instead.

## What happened to TDMS

SAP Note 2696183 states that SAP TDMS is not supported in the S/4HANA context. That applies to the functions most teams used it for: reducing data by time or scope to build smaller test systems, and scrambling sensitive data before it reached them. SAP's own successor service is currently available only for S/4HANA Cloud Public Edition, which leaves on-premise and Private Edition customers without a like-for-like option from SAP. Practitioners have been asking about this openly: after moving to S/4HANA, the familiar way of copying production data to non-production systems simply no longer works.

## Why business testers feel it

> TDMS was invisible to most business users. Its absence will not be.

When there is no controlled way to build test data, teams fall back on one of two bad options. Either they copy full production into test systems, which brings every real customer, supplier, employee and bank account into environments with weaker controls, or they test with thin, artificial data that does not exercise the processes where real problems hide. The first creates a privacy exposure; the second makes user acceptance testing much less useful. Business testers end up either working with data they should not see or working with data that cannot tell them whether the system is ready.

## The three jobs a replacement has to do

| Job | What it means | Why business users care |
| --- | --- | --- |
| Select the data | Take the slice testing actually needs, by scope or time, rather than everything | Faster refreshes and test systems that are not cluttered with irrelevant history |
| Protect the data | Scramble or mask sensitive fields before data leaves production | Testing with realistic data without seeing real colleagues' salaries or customers' bank details |
| Keep it connected | Preserve relationships between records and across systems | End-to-end scenarios still run, so failures are real defects rather than data artefacts |

## How to evaluate a replacement

- **Does it work on your edition?** On-premise and Private Edition customers need an option that does not depend on Public Edition services.
- **Does protection keep data realistic?** A protected customer should still look and behave like a customer, with the right formats and structures.
- **Is protection consistent across systems?** If the same supplier is scrambled differently in two connected systems, end-to-end testing breaks.
- **Can it select data selectively?** Full copies are slow and carry more risk than a targeted slice.
- **Can it repeat on every refresh?** Test systems are refreshed many times. Protection that is not reapplied each time stops protecting.
- **Does it cover non-SAP systems?** Many test scenarios cross SAP and non-SAP applications.

## Plan for it before go-live

The time to sort out test data is before the move, not after the first refresh request lands on a team with no tool to answer it. Agreeing which systems need refreshing, how often, which fields must be protected, and who owns the process means the first post-migration refresh is routine rather than an emergency. It is also worth writing down, in one sentence, the rule the organisation will follow, typically that no unprotected production data enters non-production, so that people under time pressure know the answer.

## What a single tool will and will not cover

TDMS bundled several capabilities, and few replacements map onto it one for one. Some focus on system copies, some on data selection, some on protection. Rather than looking for an exact substitute, it is more useful to list which of TDMS's jobs you actually used, and check each against the options. Many organisations find that protection and selective data provisioning were the parts that mattered most to their testers, and that is where the evaluation should start.

## Write the test data rule down

Much of the risk after losing TDMS comes not from a decision to expose data but from the absence of any stated rule, so each team improvises under deadline pressure. A short written policy settles it: which non-production systems exist and who owns them, which fields must be protected before data arrives, how often systems are refreshed, and who approves an exception. It takes an afternoon to write and saves a great deal of argument when a project team wants a full production copy by Friday.

## Partners and offshore teams

S/4HANA programmes routinely bring implementation partners and offshore testers into non-production systems, often with broader access than anyone has in production. With TDMS gone, the temptation is to give them full copies because it is quickest. Protecting sensitive fields before data reaches those environments is what lets external teams test realistically without extending the organisation's exposure to every party in the delivery chain, and it is far easier to justify to a compliance team than a set of contractual promises.

## How deKorvai helps

deKorvai covers the protection and selection jobs that business testers depend on, for S/4HANA on-premise and private cloud landscapes as well as non-SAP systems. Its scrambling, a form of masking, protects sensitive fields at field level with predefined profiles covering customer master, vendor master, Business Partner, employee, payroll and bank and IBAN details. It applies consistent scrambling logic across multiple databases, preserving referential and functional integrity so end-to-end testing still works, and a test mode lets teams validate the result before committing. Selective and incremental extraction lets teams provision the slice of data testing needs. deKorvai is not a system-copy tool; it is the data protection and provisioning layer, and its scrambling is documented as GDPR, HIPAA and SOX compliant.

## Key takeaways

- TDMS is not supported in S/4HANA, per SAP Note 2696183, including its scrambling.
- SAP's own successor currently serves Public Edition only.
- A replacement must select, protect and keep data connected, not just copy it.
- Plan test data before go-live, so the first refresh is routine.

## Frequently asked questions

### Is SAP TDMS supported in S/4HANA?

No. SAP Note 2696183 states that SAP TDMS is not supported in the S/4HANA context. That covers both its time-based data reduction and its scrambling of sensitive data.

### Does SAP offer a replacement for TDMS?

SAP's own successor service is currently available only for S/4HANA Cloud Public Edition. On-premise and Private Edition customers do not have a like-for-like option from SAP at present.

### What should a TDMS replacement do?

Three jobs: select the slice of data testing actually needs, protect sensitive fields before data leaves production, and keep relationships intact across records and systems so business processes still run end to end.

### Why does losing TDMS matter to business users?

Because without a controlled way to build test data, teams either copy full production into test systems, exposing real personal and commercial data, or test with thin artificial data that cannot show whether the system is ready.
