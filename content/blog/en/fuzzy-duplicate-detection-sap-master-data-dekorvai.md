---
title: "Fuzzy Duplicates in SAP Master Data: How deKorvai Detects, Reports, and Cleanses What Others Miss"
excerpt: "Fuzzy duplicates silently erode operational efficiency and derail S/4HANA migrations. Learn how deKorvai's pipeline-driven approach finds near-matches, routes them for review, and cleanses both master and transactional data — with real examples."
tag: "Data Quality"
author: "Prakash Palani"
slug: "fuzzy-duplicate-detection-sap-master-data-dekorvai"
---

## The Problem Hiding in Plain Sight

Your SAP system has duplicates. Not the obvious kind — not two records with the same material number. The dangerous kind: records that look almost the same but differ just enough to pass every exact-match check you've ever run.

A bearing listed as "Ball Bearing 6205-2RS" in one plant and "Bearing, Ball 6205 2RS" in another. A vendor entered as "Müller GmbH & Co. KG" in one company code and "Mueller GmbH Co KG" in the next. A customer recorded as "Johnson & Johnson Inc." and "Johnson and Johnson Incorporated" across two sales organizations.

These are fuzzy duplicates — and they are far more common than most organizations realize. Industry data suggests that 5–15% of master data records in mature SAP landscapes are redundant, with fuzzy duplicates making up the majority that survive conventional cleansing efforts.

The consequences split into two distinct but equally costly challenges.

![How fuzzy matching catches what exact match misses](/blog/images/fuzzy-matching-concept.svg)

## Challenge 1: Operational Disruption — Death by a Thousand Duplicates

Fuzzy duplicates don't cause a single catastrophic failure. They cause a slow, persistent erosion of operational efficiency that compounds over years.

**Consider a real-world scenario with Material Master duplicates:**

A global manufacturer maintains 120,000 material master records across 14 plants. Over a decade, different plants created materials independently, resulting in thousands of near-duplicate entries. Here's what happens downstream:

**Purchase Orders spiral out of control.** When Plant DE01 orders "Hex Bolt M10x50 SS304" and Plant DE02 orders "M10x50 Hex Bolt Stainless Steel 304" — both are the same physical item, but SAP treats them as different materials. Procurement loses volume consolidation. Instead of negotiating a single contract for 50,000 units, two separate POs go to the same supplier for 25,000 each — at higher per-unit pricing. Multiply this across hundreds of materials, and spend leakage runs into millions.

**Sales Orders reference inconsistent masters.** A customer orders "Industrial Adhesive EP-200 (25kg)" but the sales team quotes against "Adhesive, Epoxy EP200 25 KG" — a different material number with slightly different pricing conditions. The result: pricing discrepancies, billing disputes, and credit memo processing that consumes finance team bandwidth for weeks.

**Inventory becomes invisible.** The same physical item sitting in two warehouses under two material numbers means safety stock calculations are wrong, reorder points trigger too early or too late, and excess inventory accumulates while shortages occur simultaneously.

**Financial reporting fractures.** Spend analytics against a vendor split across "Siemens AG" and "SIEMENS Aktiengesellschaft" understates true supplier concentration. Compliance teams can't produce accurate single-vendor spend reports. Audit findings pile up.

## Challenge 2: S/4HANA Transformation — Migrating Duplicates Means Migrating Problems

If fuzzy duplicates are costly in day-to-day operations, they become existential risks during an S/4HANA transformation.

S/4HANA introduces simplified data models, the Business Partner concept, and real-time analytics. These architectural improvements are powerful — but they have zero tolerance for the data inconsistencies that legacy ECC systems quietly absorbed for years.

**Why S/4HANA amplifies the duplicate problem:**

- **Business Partner consolidation** requires merging Vendors and Customers into a single BP entity. Fuzzy duplicate vendors that operated independently in ECC now collide in the BP model, causing migration load failures, broken partner linkages, and corrupted financial postings.
- **Open transactional data carries the contamination forward.** An open Purchase Order referencing a duplicate material number doesn't just fail during migration — it blocks the entire PO migration stream until resolved. Open Sales Orders referencing duplicate customer records create the same downstream gridlock.
- **DMC simulation failures cascade.** Organizations report 30–40% rejection rates in first Data Migration Cockpit runs when duplicate master data hasn't been addressed. Each rework cycle adds 2–3 weeks to the migration timeline.
- **Post-go-live data quality debt.** Duplicates that survive migration into S/4HANA are harder and more expensive to fix in production than they ever were in ECC. The simplified data model means fewer places for inconsistencies to hide — but also fewer workarounds when they surface.

PwC's analysis of S/4HANA migrations highlights this directly: the risk that "duplicate records from ECC will also be duplicated in S/4" is among the top data conversion risks organizations face. Best practice guidance recommends allocating 25–30% of total migration effort to data preparation and validation — yet most organizations treat it as an afterthought.

![The impact of fuzzy duplicates — before and after deKorvai](/blog/images/fuzzy-before-after-impact.svg)

## How deKorvai Solves Fuzzy Duplicate Detection

deKorvai doesn't just find duplicates. It orchestrates the entire lifecycle: detection, reporting, stakeholder review, approval, transactional data correction, and master data cleansing — all within governed, auditable pipelines.

![deKorvai fuzzy duplicate pipeline — 5 governed stages](/blog/images/fuzzy-pipeline-flow.svg)

### Step 1: Intelligent Fuzzy Matching

deKorvai applies configurable fuzzy matching algorithms across master data records, going beyond simple exact-match checks:

- **Phonetic matching** catches "Müller" vs "Mueller" and "Meier" vs "Meyer" — common in multilingual SAP landscapes
- **Token-based similarity** recognizes that "Ball Bearing 6205-2RS" and "Bearing, Ball 6205 2RS" contain the same meaningful tokens regardless of order
- **Abbreviation normalization** resolves "GmbH & Co. KG" vs "GmbH Co KG" and "Inc." vs "Incorporated"
- **Configurable thresholds** let business teams define what constitutes a "probable duplicate" vs a "possible duplicate" — because a 95% similarity score on a vendor name means something very different than 95% on a material short text

The matching runs across all relevant fields — not just the description. Material group, base unit of measure, manufacturer part number, and plant-level data all feed into the similarity scoring, dramatically reducing false positives.

### Step 2: Duplicate Report Generation

Once fuzzy matches are identified, deKorvai generates structured duplicate reports that business stakeholders can actually act on:

- Each duplicate cluster shows the matching records side by side with similarity scores
- Field-level comparison highlights exactly where records differ
- Transactional impact analysis shows which Purchase Orders, Sales Orders, Goods Receipts, and Invoice Receipts reference each duplicate
- The report is automatically routed to the responsible data steward or functional owner via email

No one needs to open a spreadsheet, run a VLOOKUP, or manually cross-reference SAP tables. The report arrives ready for decision-making.

### Step 3: Review and Approval Workflow

Duplicate resolution requires human judgment. deKorvai provides a governed review process:

- Data stewards receive duplicate clusters with a recommended "golden record" — the record to retain
- Reviewers validate, override, or merge field values from duplicate records into the golden record
- Approval workflows ensure that no duplicate resolution executes without proper sign-off
- Every decision is logged for audit traceability — critical for regulated industries

This isn't a one-time bulk operation. The review workflow integrates into ongoing data governance, catching new duplicates as they're created.

### Step 4: Transactional Data Correction

Here is where deKorvai separates from every other duplicate detection tool on the market. Finding duplicates is only half the problem. The other half is fixing the transactional data that references them.

When a duplicate material is identified and a golden record is selected:

- Open Purchase Orders referencing the duplicate material are re-mapped to the golden record's material number
- Open Sales Orders are updated to reference the correct master
- Historical transaction linkages are preserved for reporting continuity
- Financial document references are maintained for audit integrity

This transactional correction happens within the pipeline — not as a manual post-processing step that someone remembers to do three weeks later.

### Step 5: Master Data Cleansing

After transactional data is corrected, deKorvai cleanses the master data itself:

- Duplicate records are flagged for deletion or archival
- The golden record is enriched with the best available data from all duplicate sources
- Cross-plant and cross-organizational consistency is enforced
- Cleansed data proceeds to the next pipeline stage — whether that's ongoing operational governance or S/4HANA migration loading

## Example: Fuzzy Duplicate Detection in Action

![Duplicate cluster resolution — from detection to cleansing](/blog/images/fuzzy-duplicate-cluster.svg)

### Input Data — Material Master Records (Raw)

| Material # | Description | Material Group | Base UoM | Plant | Manufacturer Part # |
|------------|-------------|---------------|----------|-------|-------------------|
| MAT-10201 | Ball Bearing 6205-2RS SKF | BEAR-001 | EA | DE01 | 6205-2RS |
| MAT-10202 | Bearing, Ball 6205 2RS (SKF) | BEAR-001 | EA | DE02 | 6205-2RS |
| MAT-10203 | SKF 6205-2RS Ball Bearing | BEAR-001 | PC | DE03 | SKF-6205-2RS |
| MAT-20450 | Hex Bolt M10x50 DIN 933 A2 | FAST-012 | EA | DE01 | HB-M10x50-A2 |
| MAT-20451 | M10x50 Hex Bolt DIN933 Stainless A2 | FAST-012 | EA | DE02 | HB-M10X50-A2 |
| MAT-30078 | Industrial Epoxy Adhesive EP-200 25kg | CHEM-005 | KG | DE01 | EP200-25 |
| MAT-30080 | Adhesive Epoxy EP200 (25 KG) Industrial | CHEM-005 | KG | DE02 | EP-200-25KG |

### Input Data — Open Purchase Orders Referencing Duplicates

| PO Number | Material # | Vendor | Quantity | Plant |
|-----------|------------|--------|----------|-------|
| PO-440012 | MAT-10201 | SKF Deutschland | 5,000 | DE01 |
| PO-440078 | MAT-10202 | SKF Deutschland | 3,000 | DE02 |
| PO-440091 | MAT-10203 | SKF Group | 2,000 | DE03 |
| PO-441200 | MAT-20450 | Würth GmbH | 10,000 | DE01 |
| PO-441215 | MAT-20451 | Wuerth GmbH | 8,000 | DE02 |

### Output — Fuzzy Duplicate Report

| Duplicate Cluster | Golden Record | Duplicate Records | Similarity | Status |
|------------------|---------------|-------------------|------------|--------|
| CLUSTER-001 | MAT-10201 | MAT-10202, MAT-10203 | 92%, 88% | Pending Review |
| CLUSTER-002 | MAT-20450 | MAT-20451 | 94% | Pending Review |
| CLUSTER-003 | MAT-30078 | MAT-30080 | 91% | Pending Review |

### Output — After Review, Approval, and Correction

**Cleansed Material Master:**

| Material # | Description (Standardized) | Base UoM | Plants | Status |
|------------|---------------------------|----------|--------|--------|
| MAT-10201 | Ball Bearing 6205-2RS SKF | EA | DE01, DE02, DE03 | Active — Golden Record |
| MAT-10202 | ~~Bearing, Ball 6205 2RS (SKF)~~ | — | — | Marked for Deletion |
| MAT-10203 | ~~SKF 6205-2RS Ball Bearing~~ | — | — | Marked for Deletion |
| MAT-20450 | Hex Bolt M10x50 DIN 933 A2 | EA | DE01, DE02 | Active — Golden Record |
| MAT-20451 | ~~M10x50 Hex Bolt DIN933 Stainless A2~~ | — | — | Marked for Deletion |
| MAT-30078 | Industrial Epoxy Adhesive EP-200 25kg | KG | DE01, DE02 | Active — Golden Record |
| MAT-30080 | ~~Adhesive Epoxy EP200 (25 KG) Industrial~~ | — | — | Marked for Deletion |

**Corrected Purchase Orders:**

| PO Number | Original Material | Corrected Material | Action Taken |
|-----------|------------------|-------------------|-------------|
| PO-440012 | MAT-10201 | MAT-10201 | No change (golden record) |
| PO-440078 | MAT-10202 | MAT-10201 | Re-mapped to golden record |
| PO-440091 | MAT-10203 | MAT-10201 | Re-mapped to golden record |
| PO-441200 | MAT-20450 | MAT-20450 | No change (golden record) |
| PO-441215 | MAT-20451 | MAT-20450 | Re-mapped to golden record |

**Immediate Impact:**
- 3 duplicate materials eliminated → consolidated procurement volumes
- 5 Purchase Orders now reference correct golden records → accurate spend reporting
- Combined bearing order volume: 10,000 units under one material → stronger negotiation leverage
- UoM inconsistency (EA vs PC) resolved across plants → correct inventory valuation

## The Pipeline Advantage

What makes deKorvai's approach fundamentally different is that fuzzy duplicate detection isn't a standalone tool — it's a stage within a governed data pipeline.

**For operational excellence**, the pipeline runs continuously. New materials, vendors, and customers are checked against existing records at the point of creation. Duplicates are caught before they propagate into Purchase Orders and Sales Orders — not after years of accumulated damage.

**For S/4HANA transformation**, the pipeline runs as a pre-migration quality gate. Every master data object passes through fuzzy duplicate detection before entering the transformation and loading stages. The result: DMC simulation pass rates that exceed 95% on the first attempt, instead of the typical 60–70% that triggers weeks of rework.

In both scenarios, the pipeline maintains a complete audit trail — every duplicate detected, every decision made, every correction applied. For regulated industries, this isn't optional. It's the difference between a clean audit and a finding.

## The Bottom Line

Fuzzy duplicates are the most expensive data quality problem most organizations don't know they have. They inflate procurement costs, fracture financial reporting, delay S/4HANA migrations, and compound silently over time.

deKorvai transforms fuzzy duplicate management from a manual, periodic cleanup exercise into an automated, governed pipeline — detecting near-matches with intelligent algorithms, routing them through structured review workflows, correcting transactional data references, and cleansing master data at the source.

Whether you're optimizing current operations or preparing for S/4HANA, the question isn't whether you have fuzzy duplicates. You do. The question is whether you'll find them before they find you.
