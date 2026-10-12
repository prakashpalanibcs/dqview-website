---
title: "Data Lineage for SAP: Proving Where Your Numbers Came From"
excerpt: "Data lineage records where a value came from: source, transformation rules, validation and load. Why it matters most after an S/4HANA go-live, when figures legitimately move and someone asks why."
metaTitle: "Data Lineage for SAP: Prove Where Numbers Came From"
metaDescription: "Data lineage records where a value came from: source, rules, validation, load. Why it matters most after an S/4HANA go-live, when figures move."
tag: "Data Quality"
author: "Prakash Palani"
slug: "data-lineage-for-sap"
---

**The short answer.** Data lineage is the record of where a value came from: which source system it was extracted from, what rules transformed it, and how it arrived at the figure someone is now looking at. In an SAP migration it answers the question that follows every go-live, which is why a number in S/4HANA differs from the number people remember in ECC. Without lineage, that question costs days of investigation. With it, it costs minutes.

Lineage sounds like a governance abstraction until the first time a finance manager asks why a balance changed and nobody can answer. Then it becomes very concrete. Here is what lineage is for in an SAP context and why it earns its place around a migration.

## What lineage actually records

Lineage is the traceable path of a data element through your landscape. For a migrated record that typically means: which source table and system it came from, which extraction rule selected it, what transformation and mapping logic was applied, what validation it passed or failed, when it was loaded, and what it became in the target. Each of those is a link in a chain, and lineage is the chain being recorded rather than reconstructed later from memory and logs.

## The question lineage answers

> Every migration produces the same conversation: this number is different from what we used to see. Why?

Sometimes the answer is that the number is correct and the old one was not, because duplicates were resolved or an error was corrected. Sometimes it is that a mapping rule changed the classification. Occasionally it is a genuine problem. The trouble is that without lineage all three look identical from the outside, and distinguishing them means someone trawling through extracts and transformation specs. That investigation is slow, it happens during hypercare when the team is already stretched, and it erodes trust in the new system while it drags on. Lineage replaces the investigation with a lookup.

## Why SAP makes this harder

An S/4HANA migration changes the data model, which is exactly the condition that makes figures move. Customers and vendors become Business Partners. Financial line items that lived in separate tables consolidate into the Universal Journal. Account groups map to new groupings. These are intended changes, but each one means a value in the new system has a different provenance from its equivalent in the old one. The more the model changes, the more lineage matters, because the mapping between old and new is no longer obvious to the people reading the reports.

## Where lineage pays back

- **Hypercare.** Post-go-live queries about changed figures resolve quickly instead of becoming investigations.
- **Audit.** Auditors testing data conversion want to see how data was transformed and validated; lineage is that record.
- **Impact analysis.** When a rule or source changes, lineage shows what downstream data it affects.
- **Trust.** Being able to explain a number is what makes a business accept the new system rather than quietly keeping the old spreadsheet.

## Lineage and the glossary work together

Lineage tells you where a value came from. A business glossary tells you what it means. Both are needed, because a traced value whose definition is disputed still causes argument, and an agreed definition with no traceability still leaves you unable to explain a discrepancy. Maintaining the two together is what lets an organisation say, with confidence, both what a figure represents and how it was produced. In a migration that pairing is particularly valuable, because definitions often get revisited at the same time as the data moves.

## What the absence costs

It is worth being concrete about what happens without lineage, because the cost is real but diffuse. A finance manager queries a balance. Someone pulls the transformation spec. Someone else checks the extract. A third person compares against an ECC export that may or may not be from the right date. Days pass, during hypercare, when the same people are needed elsewhere. Meanwhile the business parks its confidence in the new system and keeps the old report running in parallel. Multiply that by the number of queries a go-live generates and the absence of lineage becomes one of the more expensive documentation gaps a programme can carry.

## Capture it from the work, not alongside it

The reason lineage often goes missing is that documenting it separately is tedious and the first thing dropped under pressure. The sustainable approach is to capture it as a by-product of execution: if the rules that select, transform and validate data are defined in a system and executed by that system, the record of what happened to each record exists because the work happened, not because someone wrote it down. Lineage maintained by hand in a spreadsheet decays immediately and is rarely trusted. Lineage generated by the pipeline survives the programme and is still accurate when someone asks six months later.

## How much lineage is enough

Lineage can be recorded at different depths, and more is not automatically better. Field-level lineage across every object is powerful and heavy; object-level lineage with the transformation rules recorded is lighter and answers most real questions. The practical test is whether you can answer the queries you actually receive: why did this balance change, where did this customer record come from, which rule reclassified these items. If object-level detail answers those, it is sufficient. Start at the depth that answers your likely questions and deepen only where experience shows you need it, rather than building exhaustive lineage nobody interrogates.

## Who asks lineage questions

It is worth knowing in advance where these queries come from, because it shapes what you capture. Finance asks about changed balances and classifications. Operations asks why a record looks different or has gone missing from a report. Audit asks how data was transformed and validated. Analytics teams ask what a field actually represents before building on it. Four different audiences, one underlying need: the ability to trace a value back to its origin and see what happened on the way. Capturing lineage for the objects those groups care about most, rather than uniformly, concentrates the effort where the questions actually arrive.

## How deKorvai helps

deKorvai tracks data lineage and maintains a business glossary as part of its data quality and governance capability. Because extraction, profiling, transformation, validation and loading run as one flow, the lineage is captured from the work itself rather than documented separately: the rules that selected and transformed each record are the same rules the platform executed. Full audit trails on every operation, along with execution tracking and change logs, mean the chain is recorded as it happens. For a migration, that is what turns the inevitable post-go-live question about a changed number from an investigation into a lookup.

## Key takeaways

- Lineage records provenance: source, rules, validation, load, target.
- It answers the post-go-live question about why a number changed.
- SAP model changes make it matter more, because figures legitimately move.
- Pair it with a glossary, so you can explain both meaning and origin.

## Frequently asked questions

### What is data lineage?

Data lineage is the traceable record of where a data value came from: which source system and table it was extracted from, which rules selected and transformed it, what validation it passed, when it was loaded and what it became in the target system.

### Why does lineage matter in an SAP migration?

Because an S/4HANA migration changes the data model, so figures legitimately move. Customers and vendors become Business Partners and financial line items consolidate into the Universal Journal. Lineage lets you explain why a number differs from its ECC equivalent instead of investigating.

### How does lineage help with audit?

Auditors testing data conversion want to see how data was transformed and validated. Lineage is that record, showing the rules applied and the path a record took, which supports the evidence expected for data migration controls.

### What is the difference between lineage and a business glossary?

Lineage tells you where a value came from. A glossary tells you what it means. Both are needed: a traced value with a disputed definition still causes argument, and an agreed definition without traceability still leaves discrepancies unexplained.
