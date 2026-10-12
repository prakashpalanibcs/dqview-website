---
title: "Data Migration Audit Requirements: What You Must Be Able to Show"
excerpt: "Data migration sits inside SOX IT general controls. Auditors test that cleansing and validation rules were evidenced and that counts and balances reconcile. How to produce that evidence as you go."
metaTitle: "Data Migration Audit Requirements: What to Show"
metaDescription: "Data migration sits inside SOX IT general controls. What auditors test, what evidence they expect, and how to produce it as you go."
tag: "Compliance"
author: "Prakash Palani"
slug: "data-migration-audit-requirements"
---

**The short answer.** If your migration touches financially significant systems, auditors will test it. Under SOX, data conversion and migration sits inside IT general controls, and the evidence expected is specific: that cleansing and validation rules were applied and evidenced, and that record counts and balances match after migration with reconciliation results attached. The practical implication is that reconciliation and validation are not just good practice, they are the artefacts an auditor samples.

Most migration teams think about audit after go-live, if at all. That is backwards, because the evidence an auditor wants is produced during the migration or not at all. Here is what is actually expected and how to generate it as a by-product of doing the work properly.

## Why migration falls in audit scope

SOX Section 404 requires management to assess internal control over financial reporting, and external auditors test IT general controls under PCAOB standard AS 2201 to support reliance on the systems producing financial data. SOX itself does not name specific IT controls, but the control domains auditors test are well established: access to programs and data, program changes, program development, and computer operations. Data conversion and migration sits within program development. If you are moving financial data into a new system, you are operating inside that scope whether or not the programme treats it that way.

## What auditors expect to see

> An auditor is not satisfied that a control exists. They sample it and expect complete, dated, attributable evidence for each item.

Published control checklists are consistent about the two data-migration controls:

- **Data cleansing and validation rules are applied and evidenced.** The evidence expected includes validation reports, exception handling records, and approval of the go-live data.
- **Data migration is validated.** The test is that record counts and balances match after migration, with reconciliation results attached.

Read those again as an evidence requirement rather than a process description. The auditor is not asking whether you cleansed data. They are asking you to produce the validation report, the exception log, the reconciliation result and the sign-off, for a sample they choose.

## The evidence standard is higher than teams expect

A recurring theme in audit guidance is that the standard is system-generated, complete, dated and attributable. Manually compiled spreadsheets and email approvals typically cannot produce that at scale, because an auditor samples individual items and traces them: what was checked, when, by whom, what the result was, and what changed as a consequence. A migration that ran well but documented informally can still fail the evidence test, which is a frustrating way to create a finding.

## Build the trail into the work

1. **Express the standard as rules.** Validation driven by defined business and technical rules produces a report naturally; ad-hoc checking does not.
2. **Reconcile every load, not just the last.** Each mock cycle produces a reconciliation artefact, and the pattern across cycles is itself evidence of control.
3. **Log exceptions and their resolution.** Auditors are as interested in what failed and what happened next as in what passed.
4. **Capture approvals at the gate.** Go-live data approval should be a dated, attributable record, not a verbal agreement in a stand-up.
5. **Keep the trail queryable.** Evidence you cannot retrieve six months later is evidence you do not have.

## The same artefacts serve the business

There is a useful alignment here. The evidence an auditor wants is almost exactly what the business needs anyway: proof the migrated data matches the source, a record of what failed and how it was fixed, and a dated sign-off that the data was fit to go live. Teams that reconcile properly and validate against rules are not doing extra work for audit; they are doing the work that makes the migration defensible, and the audit evidence falls out of it. The only teams for whom audit is additional effort are those who were not going to produce that proof otherwise.

## Who assembles the evidence

A practical question is who is responsible for producing all this. In most organisations the control owners perform and evidence the day-to-day controls, a SOX or internal audit programme office coordinates scoping and testing, and the external auditor tests to support their opinion. For a migration this means the data workstream is producing evidence that someone else will be sampled on, which is worth knowing early. Agreeing with your audit or compliance function at the start what artefacts they will need, in what form, is far cheaper than reconstructing them from logs and memory after go-live.

## Evidence you cannot retrieve is evidence you do not have

A quiet failure mode is evidence that existed at the time and cannot be produced later. Validation output sitting in a project folder someone has since left, reconciliation results in a spreadsheet version nobody can locate, approvals given in a meeting with no record. Auditors sample months after the event, so retrievability matters as much as creation. Keeping the trail in a system that retains and surfaces it, rather than in project artefacts that disperse when the programme closes, is the difference between answering a sample request in an hour and spending a week reconstructing what happened.

## Confirm scope before you build the trail

Not every system and not every data object falls within audit scope. Scoping starts from significant accounts and the systems that support them, so a sensible first step is to confirm with your audit function which parts of the migration are in scope rather than assuming it is all of it or none. That conversation usually narrows the evidence burden considerably and focuses effort where it matters. It also avoids the opposite error, which is discovering late that a system treated as peripheral actually feeds a financially significant process, at which point the evidence for it does not exist.

## How deKorvai helps

deKorvai produces these artefacts as part of running the migration. It validates data against configurable business and technical rules, which generates the validation evidence rather than requiring it to be assembled afterwards. It reconciles loaded data against the source so record counts and values can be shown to match, which is precisely the control auditors test for data migration. It keeps full audit trails on every operation, along with execution tracking and change logs, so the trail is system-generated and attributable. Its compliance and regulatory reporting is designed for exactly this purpose: producing evidence that can be handed over rather than reconstructed.

## Key takeaways

- Data migration sits inside SOX ITGC scope under program development.
- Two controls matter most: cleansing and validation evidenced, and migration validated by reconciliation.
- The standard is system-generated, dated and attributable, not spreadsheets.
- The same artefacts make the migration defensible to the business, not just to audit.

## Frequently asked questions

### Is data migration in scope for a SOX audit?

If it touches financially significant systems, yes. SOX Section 404 requires management to assess internal control over financial reporting, and auditors test IT general controls under PCAOB AS 2201. Data conversion and migration sits within the program development control domain.

### What evidence do auditors want for a data migration?

Published control checklists point to two things: that data cleansing and validation rules were applied and evidenced, with validation reports, exception handling and approval of go-live data; and that migration was validated, meaning record counts and balances match with reconciliation results attached.

### Are spreadsheets enough as audit evidence?

Generally not at scale. Audit guidance consistently expects system-generated evidence that is complete, dated and attributable, because auditors sample individual items and trace what was checked, when, by whom, and what changed. Manually compiled records struggle to meet that.

### Is preparing for audit extra work?

Mostly not. The artefacts auditors want, proof the data matches the source, a record of what failed and how it was resolved, and a dated sign-off, are the same artefacts that make a migration defensible to the business. They fall out of doing the work properly.
