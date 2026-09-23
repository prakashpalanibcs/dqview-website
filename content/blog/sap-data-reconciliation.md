---
title: "SAP Data Reconciliation: Proving Your Migration Balanced"
excerpt: "Data reconciliation proves S/4HANA matches ECC. How to reconcile domain by domain, why dry runs at every mock matter, what to do with variances, and the cutover sign-off sequence."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "sap-data-reconciliation"
---

**The short answer.** Data reconciliation is how you prove the data in S/4HANA matches what was in ECC. It works domain by domain: financial balances tie to the trial balance, open items match by count and value, asset values agree, stock quantities line up per plant. You run it as dry-run cycles during mock migrations, investigate every variance, then do a final reconciliation around cutover with formal sign-off. A migration is not finished when the load completes; it is finished when reconciliation proves it was correct.

There is a moment in every migration when someone senior asks the only question that really matters: can we trust this data? Reconciliation is the answer to that question, and it is the difference between a migration that completed and one the business will actually stand behind. Here is how it works in practice.

## What reconciliation actually is

Reconciliation compares the data now sitting in S/4HANA against the source data in ECC, and confirms they agree. Not roughly, not approximately: it confirms that record counts match, that values sum to the same totals, and that the things that should have moved actually did. It is an evidence exercise. When it passes, you can show, with numbers, that the migration was accurate. When it fails, you have found a problem before the business does, which is exactly the point.

## Reconcile domain by domain

> There is no single reconciliation. Finance, logistics, and master data each need their own checks with their own acceptance criteria.

Reconciliation is not one report; it is a set of domain-specific checks, because each area of the business has different things worth proving:

| Domain | What you reconcile | What good looks like |
| --- | --- | --- |
| General ledger | Trial balance, opening balances, debits and credits by account | Balances match exactly, no variance |
| AR and AP | Customer and vendor open items, counts and amounts | Item-level match on counts and values |
| Assets | Asset masters and net book values by class | Net book value matches, counts align |
| Sales and distribution | Open sales orders and deliveries, counts and values | Document counts and values agree |
| Materials | Stock on hand by plant and storage location | Values match, quantities align |
| Master data | Record counts per object, key field completeness | Every in-scope record accounted for |

Agreeing these acceptance criteria with the business before you start is important, because it turns reconciliation from an argument into a test with a defined pass mark.

## Reconcile in dry runs, not just at the end

The mistake teams make is treating reconciliation as a final step performed once, at cutover, when there is no time to fix what it finds. The better pattern is to reconcile at every mock migration, as a dry run. Each cycle compares counts, sums, and record-level matches, surfaces the variances, and lets you investigate root causes while the pressure is low. By the time you reach the real cutover, reconciliation should be a formality that confirms what previous cycles already established, rather than the first time anyone has checked.

## What to do with a variance

Finding a variance is a success, not a failure, provided you handle it properly. The discipline is: identify the variance precisely (which domain, which records, what magnitude), investigate the root cause rather than patching the symptom, apply a correction, and re-run the reconciliation to confirm the fix. Some variances turn out to be legitimate and explainable, records deliberately excluded from scope, for instance, in which case they are documented and accepted rather than corrected. What matters is that every variance is either resolved or formally explained and signed off. Unexplained variances are the ones that come back during hypercare as a crisis.

## Reconciliation around cutover

At cutover itself, reconciliation runs in a tight sequence: a check before the final data freeze, a check after the final load, and a check once the system is live, each with sign-off. This is what supports the go or no-go decision. If the final reconciliation does not pass, you do not go live, which is precisely why you want the earlier dry runs to have removed the surprises. Reconciliation is also what produces the audit trail: months later, when someone asks why a figure looks a certain way, the reconciliation record is the answer.

## Automate the checks, focus the judgement

Reconciliation at enterprise volumes cannot be done by eye, and it should not be. Automated checks can compare counts and sums across the entire dataset, so completeness and accuracy are verified everywhere rather than sampled, and they can be rerun identically at every mock cycle. What automation cannot do is decide whether a variance is acceptable, which is a business judgement about the data's meaning. The productive split is therefore automation for breadth and consistency, and human attention focused on interpreting what the automation surfaces. Teams that try to reconcile manually run out of time and check too little; teams that automate everything and interpret nothing accept variances they should have questioned.

## Reconciliation needs business owners

Reconciliation is often treated as a technical task, but the sign-off that matters is a business one. A finance owner confirms the balances tie; a logistics owner confirms stock quantities are right; a commercial owner confirms open orders are complete. Technical teams can produce the comparison, but only the people who own the process can say whether the result is acceptable and sign for it. Building that ownership into the plan from the start, naming who signs off which domain, avoids the awkward situation at cutover where reconciliation has technically been done but nobody with authority is willing to say the data is good. Evidence plus accountable sign-off is what makes a go decision defensible.

## How deKorvai helps

Validating migration data accuracy and completeness is one of deKorvai's documented capabilities, and reconciliation is built into its migration flow rather than bolted on at the end. It profiles source data so you know what should move, validates against business and technical rules through the pipeline, preserves referential integrity through transformation, and reconciles the loaded result against the source so counts and values can be proven to match. Because the flow is repeatable, the same reconciliation runs at every mock migration, which is exactly the dry-run pattern that makes cutover predictable. In one documented business partner migration, deKorvai moved more than 50,000 vendor records with 100% data accuracy and a 95%+ first-pass rate.

## Key takeaways

- Reconciliation proves the migration, comparing S/4HANA against ECC with numbers.
- Do it domain by domain, with acceptance criteria agreed with the business upfront.
- Reconcile at every mock, not just at cutover, so surprises surface early.
- Every variance is resolved or formally explained, never left unexplained.

## Frequently asked questions

### What is data reconciliation in an SAP migration?

It is the process of comparing the data loaded into S/4HANA against the source data in ECC to confirm they agree. It checks that record counts match, values sum to the same totals, and everything in scope actually moved, producing evidence that the migration was accurate.

### What should you reconcile in an S/4HANA migration?

Reconcile domain by domain: general ledger balances and trial balance, AR and AP open items by count and value, asset masters and net book values, open sales orders and deliveries, stock by plant and storage location, and master data record counts per object.

### When should reconciliation happen?

At every mock migration as a dry run, not only at cutover. Dry-run cycles surface variances while there is time to investigate and fix them. At cutover, reconciliation runs before the freeze, after the final load, and once live, each with sign-off supporting the go or no-go decision.

### What do you do when reconciliation finds a variance?

Identify it precisely, investigate the root cause rather than patching the symptom, correct it, and re-run the reconciliation to confirm. Some variances are legitimate, such as records deliberately out of scope, and those are documented and accepted. No variance should be left unexplained.
