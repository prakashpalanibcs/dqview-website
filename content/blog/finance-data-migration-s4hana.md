---
title: "Finance Data Migration to S/4HANA: What the Finance Team Signs Off"
excerpt: "Finance data migration to S/4HANA moves balances and open items, and GR/IR must be balanced by the key date. What finance prepares, what it reconciles, and what its sign-off should rest on."
metaTitle: "Finance Data Migration to S/4HANA: The Sign-Off"
metaDescription: "Finance data migration to S/4HANA moves balances and open items, and GR/IR must balance by the key date. What finance prepares and reconciles."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "finance-data-migration-s4hana"
---

**The short answer.** Finance data migration to S/4HANA usually moves balances and open items rather than full transaction history: general ledger balances, open receivables and payables, and asset values. SAP's own guidance is that only balances and open items are taken over, and that GR/IR clearing accounts must be balanced by the migration key date. For the finance team, the job is to agree the cut-off, clean up open items before the move, and sign off reconciliation that proves S/4HANA opens with the same position ECC closed with.

Finance is the function that signs off last and is trusted most. If the balances in S/4HANA do not match what was in ECC, nothing else about the migration matters. Here is what moves, what finance has to prepare, and what a finance sign-off should rest on.

## What actually moves

SAP's guidance for the initial migration of financial data is that only balances and open items are taken over, rather than every historical posting. In practice that means general ledger balances, open items in receivables and payables, and fixed asset values. Historical balances can be migrated with a dedicated migration object where they are needed for comparison, but the full posting history usually stays in ECC or an archive. In S/4HANA, the migrated financial data lands in the Universal Journal, the single line-item table that consolidates what ECC kept in separate finance and controlling tables.

## What finance must prepare

> Fewer open items means less to migrate, less to reconcile, and less that can go wrong.

- **Clear what can be cleared.** SAP notes that reducing open items reduces the number of variables, lowers the risk of error and reduces the reconciliation needed to verify the migration.
- **Balance GR/IR.** Goods receipt / invoice receipt clearing accounts need to be balanced by the migration key date, which means resolving purchase orders where goods arrived but the invoice did not, or the reverse.
- **Agree the key date.** The cut-off at which balances are taken, aligned with period close.
- **Check account mapping.** Every ECC account must map to the right S/4HANA account. Reconciliation accounts are not posted to directly, so their balances arrive through the open items of the related subledger.

## What the sign-off should rest on

| Area | What finance compares | What good looks like |
| --- | --- | --- |
| General ledger | Balances by account at the key date | Matches exactly |
| Receivables | Open items by customer, count and amount | Item-level match |
| Payables | Open items by vendor, count and amount | Item-level match |
| Assets | Asset values by class | Values agree, counts align |
| Subledger to ledger | Receivables, payables and inventory against the GL | Ties before go-live |

Agreeing these criteria before the first mock migration, and reconciling at every mock, means the final sign-off confirms something already proven rather than discovering problems on cutover weekend.

## Finance data is audit data

For financially significant systems, auditors test data migration as part of IT general controls. The evidence they look for is that cleansing and validation rules were applied and evidenced, and that record counts and balances match after migration with reconciliation results attached. A finance sign-off that rests on documented reconciliation is therefore also the evidence the next audit will ask for.

## How much history to keep

Finance teams often want more history in the new system than a migration can sensibly carry. The practical answer is usually to migrate balances and open items into S/4HANA, use historical balance migration where comparison periods are needed for reporting, and keep detailed history accessible in an archive. Deciding this early with controllers and auditors avoids a late scramble when someone realises a comparison report needs data that was never migrated.

## Align the key date with period close

The migration key date determines which balances and open items move, so it works best aligned with a normal period close, when finance already has reconciled figures. Choosing a mid-period date means reconciling to a position nobody has closed, which adds work and doubt at exactly the wrong moment. Finance should also plan what happens to postings between the key date and go-live, so the opening position in S/4HANA and the closing position in ECC can be shown to line up.

## Rehearse the finance reconciliation too

Finance reconciliation is often left until cutover because it feels like a final check. It belongs in every mock migration instead. Running the same comparisons at each rehearsal shows whether the mapping and the open-item clean-up are working, gives finance time to investigate any variance calmly, and turns the final sign-off into a confirmation of a result already seen several times. Variances discovered for the first time on cutover weekend are the ones most likely to delay go-live.

## Who signs

A finance sign-off should name a person: typically the financial controller or the owner of each subledger, signing against the agreed criteria. A sign-off given by a group in a meeting is hard to rely on later, especially when an auditor asks who confirmed the opening balances.

## Fixed assets need their own attention

Fixed asset data is often the most complex part of a finance migration, because each asset carries values that build up over years: acquisition cost, accumulated depreciation and net book value, sometimes across several valuation views. Asset accountants should confirm that asset counts and values by class tie back to ECC, and that depreciation will continue correctly from the opening position. Discovering an asset value mismatch after the first depreciation run in S/4HANA is far harder to unwind than finding it during a mock migration.

## Keep the bank simple

SAP's guidance is that only the balance of a bank account needs to be migrated, not its individual movements. Keeping this simple, and reconciling the bank balance to the statement at the key date, removes a common source of unnecessary detail from the finance migration.

## How deKorvai helps

deKorvai supports the finance side of an S/4HANA migration by profiling financial and master data before the move, transforming it to the S/4HANA model with referential integrity preserved, and validating it against business and technical rules before load. Reconciliation against the source gives finance item-level and balance-level evidence to sign off, and full audit trails record every operation for the audit that follows. Because the same rules run at every mock migration, finance sees reconciliation results improve cycle by cycle rather than meeting them for the first time at cutover.

## Key takeaways

- Balances and open items move, not the full posting history.
- Clear open items and balance GR/IR before the key date.
- Sign off on agreed reconciliation criteria, at every mock, not just cutover.
- The finance sign-off doubles as audit evidence.

## Frequently asked questions

### What financial data is migrated to S/4HANA?

Typically balances and open items: general ledger balances, open receivables and payables, and fixed asset values. SAP's guidance is that only balances and open items are taken over, with historical balances migrated separately where comparison periods are needed.

### Why must GR/IR accounts be balanced before migration?

SAP's guidance is that goods receipt / invoice receipt clearing accounts need to be balanced by the migration key date. That means resolving purchase orders where goods arrived without an invoice, or an invoice arrived without the goods, before the move.

### What should finance reconcile before signing off?

General ledger balances by account, open receivables and payables by count and amount, asset values by class, and that subledgers tie to the ledger, all against criteria agreed before the first mock migration.

### Why clear open items before migrating?

Because fewer open items means fewer variables, lower risk of error and less reconciliation needed to verify the migration, which SAP itself notes in its guidance on financial data migration.
