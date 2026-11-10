---
title: "Bill of Materials Migration to S/4HANA: What Engineering and Production Must Check"
excerpt: "Bill of materials migration moves product structures into S/4HANA. Why every component must exist first, how duplicates break BOMs, the load sequence, and what engineering and production should check."
metaTitle: "Bill of Materials Migration to S/4HANA: What Engineering and Production Must Check"
metaDescription: "Bill of materials migration moves product structures into S/4HANA. Why every component must exist first, how duplicates break BOMs, the load sequence, and what engineering and production should check."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "bill-of-materials-migration-s4hana"
---

**The short answer.** Bill of materials (BOM) migration brings product structures into S/4HANA: the header material, its components, quantities and related settings. BOMs sit in the middle of the load sequence. They depend on every header and component material already existing, and SAP lists the material BOM as a prerequisite for migrating open production orders. For engineering and production teams, the critical checks are that every component resolves, that quantities and units are right, and that duplicate or obsolete materials have been resolved before the BOM is moved.

A bill of materials is a compact record with wide consequences. It drives component requirements in planning, reservations in production, and costing in finance. A wrong quantity or a missing component in a BOM ripples through every order built from it. Here is how BOMs move into S/4HANA and what engineering and production should check.

## What a BOM migration carries

A BOM migration carries the product structure: the header material being produced, the components that go into it, the quantity of each and its unit of measure, and the settings that determine where the BOM applies, such as the plant and the BOM usage. Where products have more than one way of being built, alternative BOMs may also need to come across.

## Where BOMs sit in the sequence

> A BOM can only load once every material it mentions already exists.

Every material named in a BOM, both the header and every component, must already exist in S/4HANA with the right plant data. That makes materials a strict prerequisite. In turn, other objects depend on BOMs: SAP's documentation for open production order migration lists the material BOM among its prerequisites. Loading BOMs too early produces errors for missing components; loading production orders before BOMs produces orders without the structure they need.

| Load before BOMs | BOMs | Load after BOMs |
| --- | --- | --- |
| Header and component materials with plant data | Product structures and quantities | Production versions, open production orders |

## Duplicates break BOMs quietly

When the same part exists as several material numbers, BOMs often reference different duplicates for the same component. Migrating them as they are carries that inconsistency into S/4HANA, where planning sees separate demand for what is physically one part. Resolving duplicate materials before the BOM migration, and updating every BOM to point at the surviving material, is the clean answer. It is also one of the reasons duplicate material cleanup has to be done in the right order: merge materials, update BOMs, then migrate.

## What engineering and production should check

- **Every component exists.** No BOM item points to a material that is missing in the target.
- **Quantities and units.** Component quantities and units of measure match the source exactly.
- **Obsolete components.** Components that are no longer used should be removed in ECC rather than migrated.
- **Active BOMs only.** BOMs for products no longer made can usually be left behind.
- **Alternatives and usage.** The right alternative and usage arrive for each plant.

## Migrate BOMs for products you still make

Most ECC systems hold BOMs for products that have not been produced in years. Migrating only BOMs for active products, or for products with open orders or recent production, keeps S/4HANA clean and reduces the components that must exist in the target. Engineering is best placed to confirm which structures are still current.

## Engineering changes during the project

Product structures change while a migration is being prepared: new components, revised quantities, retired variants. Each change in ECC after the extract has to reach S/4HANA too. Agreeing a cut-off for engineering changes before cutover, and a process for carrying across any that must happen later, keeps the migrated BOMs aligned with what the shop floor actually builds.

## Finance cares about BOMs too

BOMs feed product costing. A wrong component quantity changes the calculated cost of every unit produced. Controlling should check the costed result for a sample of key products after the BOM migration, because a cost difference is often the first visible sign of a structural error that a simple record count would never show.

## Sample the complex structures

A simple count of BOMs and items confirms nothing went missing, but it cannot show whether structures are correct. Engineering should review a sample of the most complex BOMs, multi-level structures and those with many components, side by side with the source.

## Multi-level structures

Many products are built from subassemblies that have their own BOMs, forming multi-level structures. Every level must migrate, and every subassembly material must exist before the BOMs that use it. Missing one level does not always cause a load error; it can simply leave planning blind to the components further down. Checking that complete structures arrived for key products, from the finished product down to raw materials, is one of the most valuable checks engineering can make.

## Units of measure

Component quantities only make sense with the right unit. A component recorded in kilograms in one system and in grams in another, or a component whose alternative units were not migrated correctly, produces requirements that are wrong by an order of magnitude. Checking units for a sample of components, especially those bought and consumed in different units, catches errors that look plausible at a glance.

## Configurable products

Products built to customer specifications often use configurable structures where components depend on chosen options. These structures depend on characteristic and classification data being in place first, and are among the most complex to migrate. Identifying them early, and testing a representative set in the first mock migration, avoids discovering late that a whole family of products cannot be planned.

Handled with this care, BOMs arrive in S/4HANA as a faithful description of what the business actually builds, ready for planning, production and costing from the first day.

The effort spent checking structures before go-live is small compared with the cost of planning, producing and costing against wrong ones for weeks before anyone notices the pattern.

## How deKorvai helps

deKorvai's documented material migration flow uses the existence of a BOM as one of its tests of whether a material is active, alongside stock and open documents, so only materials that matter are migrated. Its fuzzy duplicate correction flow resolves near-duplicate materials into golden records and includes updating bills of materials to reference the surviving material, with approval steps before changes are applied. Data is validated before load, references are checked so components resolve, and reconciliation confirms what arrived.

## Key takeaways

- BOMs need every header and component material to exist first.
- Open production orders need BOMs, so BOMs sit mid-sequence.
- Resolve duplicate materials first and point BOMs at the survivors.
- Migrate BOMs for products you still make, checked by engineering.

## BOM migration, answered

### What does a BOM migration include?

The product structure: the header material, its components, the quantity and unit of measure for each, and settings such as plant and BOM usage. Alternative BOMs may also need to migrate where products are built in more than one way.

### When should BOMs be loaded in an S/4HANA migration?

After every header and component material exists with plant data, and before objects that depend on them. SAP lists the material BOM as a prerequisite for migrating open production orders.

### Why do duplicate materials cause BOM problems?

Because BOMs may reference different duplicates for the same physical part, so planning sees separate demand for one item. Merge duplicate materials first, update BOMs to the surviving material, then migrate.

### Which BOMs should be migrated?

Usually only BOMs for products still made, or with open orders or recent production. Engineering is best placed to confirm which structures are current, and obsolete components should be removed in ECC first.
