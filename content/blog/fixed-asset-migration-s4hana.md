---
title: "Fixed Asset Migration to S/4HANA: What Asset Accountants Must Reconcile"
excerpt: "Fixed asset migration to S/4HANA is a legacy data transfer of asset master records, acquisition costs and accumulated depreciation at a transfer date. The decisions, settings and reconciliation asset accountants own."
metaTitle: "Fixed Asset Migration to S/4HANA: What Asset Accountants Must Reconcile"
metaDescription: "Fixed asset migration to S/4HANA is a legacy data transfer of asset master records, acquisition costs and accumulated depreciation at a transfer date. The decisions, settings and reconciliation asset accountants own."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "fixed-asset-migration-s4hana"
---

**The short answer.** Fixed asset migration to S/4HANA is a legacy data transfer: asset master records plus their accumulated acquisition and production costs and accumulated depreciation, taken as of a transfer date. SAP's migration object for fixed assets requires the last posted depreciation period from the legacy system for each asset, an offsetting account defined for the transfer, and reconciliation against the legacy system afterwards. For asset accountants, the key decisions are the transfer date, whether the transfer is at year-end or mid-year, and how depreciation for the transfer year is handled.

Fixed assets carry years of history in a few numbers: what each asset cost, how much has been depreciated, and what remains. Those numbers drive depreciation and the balance sheet from the first period in S/4HANA, so they have to be right and provably so. Here is how asset migration works and what asset accountants own.

## What a legacy data transfer carries

SAP describes fixed asset migration as a legacy data transfer. Its migration object for fixed assets transfers asset master records together with their values. For transfers at the end of a fiscal year, the accumulated acquisition and production costs and the accumulated depreciation are transferred. For transfers during the year, the same accumulated values are transferred, and by default the depreciation posted in the transfer year up to the transfer date as well.

## The transfer date is the key decision

> Year-end or mid-year: the choice shapes how much work the asset migration involves.

The transfer date is the cut-off for asset values. A year-end transfer, with the transfer date at the end of the last closed fiscal year, is usually simpler: values are taken as closed and audited, and depreciation for the new year runs in S/4HANA. A mid-year transfer is possible but brings the current year's activity into scope. SAP's documentation also describes an option to transfer without depreciation for the transfer year and then calculate and post it in the new system.

## What must be set up first

| Setting | Why it matters |
| --- | --- |
| Transfer date and status | Defines the cut-off and controls whether transfer postings are allowed |
| Offsetting account for the transfer | SAP's documentation requires it to be defined for posting asset balances |
| Last posted depreciation period | Must be specified for each asset from the legacy system |
| Asset classes and valuation | Each asset must map to a class and depreciation setup in the target |

## Reconciliation is part of the process

SAP's documentation states that to ensure the legacy data transfer was complete, you reconcile the data in the SAP system with the data in your legacy system. Practitioner guidance recommends starting with acquisition and production costs, accumulated depreciation, value adjustments and net book values, and using S/4HANA's asset reports, such as the asset history sheet and asset balances, to compare against the legacy figures by asset class.

## What asset accountants should check

- **Asset counts by class.** Every asset in scope arrived, in the right class.
- **Acquisition cost and accumulated depreciation.** Per asset and in total, against the legacy system at the transfer date.
- **Net book value.** The figure finance reports, by class and company code.
- **Depreciation going forward.** The first depreciation run in S/4HANA produces expected results for a sample of assets.
- **Assets under construction.** Handled as agreed, since they have their own transfer considerations.

## Clean the register first

Asset registers accumulate assets that are fully depreciated, scrapped but never retired, or duplicated. Retiring and correcting these in the legacy system before the transfer means S/4HANA starts with a register that matches the physical assets the business holds, and removes items that would otherwise need reconciling for no benefit.

## Assets attract audit attention

Fixed assets are usually material to the balance sheet, so auditors pay close attention to how their values were carried into a new system. A documented reconciliation by asset class, showing legacy and S/4HANA figures side by side at the transfer date, signed by the asset accountant, is exactly the evidence they look for. Keeping it as part of the migration, rather than assembling it later, saves considerable effort at the first audit after go-live.

## Test the first depreciation run

The real test of an asset migration is the first depreciation run in S/4HANA. Running it in a mock environment, and comparing the result for a sample of assets against what the legacy system would have calculated, catches problems with useful lives, depreciation keys or the last posted period before they affect a real period close.

## Tie assets to the ledger

Asset values also appear in the general ledger. Finance should confirm that the asset subledger and the related ledger accounts agree after migration, alongside the wider financial reconciliation.

## Map asset classes carefully

Every asset must land in an asset class in S/4HANA, and the class determines its depreciation setup and the accounts it posts to. Where asset classes are redesigned, the mapping from old to new classes is a finance decision with balance sheet consequences. Getting it agreed with the asset accountant, and checking totals by new class against the old ones, prevents assets ending up in classes that depreciate them incorrectly.

## Values in more than one currency

Organisations that keep asset values in several currencies or valuation views need each to come across correctly. SAP's documentation describes how exchange rates are applied differently for values at the start of the year and for transactions during the year. Finance teams running parallel valuations should check each view separately, because a match in one does not guarantee a match in the others.

Done this way, the asset register in S/4HANA starts as an accurate, reconciled reflection of what the business owns, with depreciation that continues correctly from the first period and evidence ready for the first audit.

That reconciliation is what lets finance close its first period in S/4HANA with confidence.

## How deKorvai helps

deKorvai supports the finance side of an S/4HANA migration by profiling master and financial data before the move, transforming it to the target model with mapping rules and referential integrity preserved, and validating it against business and technical rules before load. Reconciliation against the source gives finance evidence to sign off, and full audit trails record every operation for the audit that follows.

## Key takeaways

- Asset migration is a legacy data transfer of master records and accumulated values.
- The transfer date, year-end or mid-year, shapes the work.
- Each asset needs its last posted depreciation period, and an offsetting account must be set up.
- SAP requires reconciliation against the legacy system.

## Fixed asset migration, answered

### How are fixed assets migrated to S/4HANA?

Through a legacy data transfer: SAP's fixed asset migration object transfers asset master records with their accumulated acquisition and production costs and accumulated depreciation as of a transfer date.

### What is the difference between a year-end and mid-year asset transfer?

A year-end transfer takes values at the end of the last closed fiscal year, which is usually simpler. A mid-year transfer also brings the current year's activity, including by default the depreciation posted up to the transfer date.

### What must be set up before migrating fixed assets?

The transfer date and status, an offsetting account for the transfer, the last posted depreciation period for each asset from the legacy system, and mapping of each asset to an asset class and depreciation setup.

### How do you confirm a fixed asset migration is complete?

SAP's guidance is to reconcile the data in S/4HANA with the legacy system. Compare acquisition costs, accumulated depreciation and net book values by asset class, and test the first depreciation run on a sample of assets.
