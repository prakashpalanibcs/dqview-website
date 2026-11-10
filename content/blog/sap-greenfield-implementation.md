---
title: "SAP Greenfield Implementation: The Data Decisions Business Teams Make"
excerpt: "An SAP greenfield implementation builds a new S/4HANA system and migrates data selectively. The data decisions it brings: scope, history, mapping, quality bar and sequence, including on an SAP GROW timeline."
metaTitle: "SAP Greenfield Implementation: The Data Decisions Business Teams Make"
metaDescription: "An SAP greenfield implementation builds a new S/4HANA system and migrates data selectively. The data decisions it brings: scope, history, mapping, quality bar and sequence, including on an SAP GROW timeline."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "sap-greenfield-implementation"
---

**The short answer.** An SAP greenfield implementation builds a new S/4HANA system from scratch rather than converting the existing ECC system. Processes are redesigned, configuration starts fresh, and data is migrated selectively rather than carried over wholesale. That makes data decisions central: which records move, how they map to the new design, and how much history comes along. SAP GROW, which runs on S/4HANA Cloud Public Edition, is greenfield only, so the same data decisions apply there, usually on a shorter timeline.

Greenfield is often described as a fresh start. For processes and configuration it is. For data it is a choice: the new system starts empty, and everything in it has to be deliberately brought across. Here are the data decisions a greenfield implementation puts in front of business teams.

## What greenfield means

A greenfield implementation creates a new S/4HANA system and migrates data into it, rather than converting the existing ECC system in place, which is the brownfield approach. Processes can be redesigned around S/4HANA's standard capabilities, configuration is rebuilt, and custom code from the old system does not come along automatically. SAP GROW, the programme for S/4HANA Cloud Public Edition, supports greenfield only.

## The data decisions greenfield brings

> An empty system is an opportunity, but only if someone decides what goes into it.

| Decision | What it involves | Owner |
| --- | --- | --- |
| Scope | Which customers, suppliers, materials and open items move | Function leads |
| History | How much transaction history migrates versus stays archived | Finance, audit |
| Mapping | How old structures and codes translate to the new design | Process owners |
| Quality bar | What data must look like before it is allowed in | Data owners |
| Sequence | Which objects load first so dependencies are met | Migration lead with owners |

## Selective by design

Because nothing comes across automatically, greenfield favours selective migration. Inactive customers and suppliers, obsolete materials and old history can simply be left out, which keeps the new system clean and reduces migration effort. The flip side is that anything left out is genuinely absent, so the selection needs to be agreed with the people who will notice if something is missing.

## Process redesign changes the data

When processes are redesigned, the data they use often has to change shape too. A new purchasing structure changes how suppliers are assigned; a simplified sales organisation changes customer setups; new plants change material data. Mapping old data to the redesigned processes is one of the largest data tasks in a greenfield project, and it depends on the redesign decisions being settled early enough for data work to follow.

## The best moment to fix quality

Greenfield offers the cleanest chance to raise data quality, because data has to pass through transformation and validation on its way into the new system anyway. Setting a clear quality bar and refusing to load data that fails it means the new system starts at a standard ECC never reached. Profiling the legacy data early shows how far it is from that bar and how much cleansing the business must plan for.

## Greenfield on a GROW timeline

SAP GROW projects use the Public Edition and aim for faster go-lives, which compresses the time available for data decisions. Practitioners consistently note that GROW success depends on thorough preparation, cleansing and reduction of the existing data footprint. The decisions are the same as in any greenfield project; there is simply less time to make them, which makes early profiling and clear ownership even more important.

## Legacy sources beyond ECC

Greenfield projects often pull data from more than one source: ECC, but also legacy systems, spreadsheets and acquired companies' platforms. Each source brings its own formats and quality issues, and the same customer or supplier may appear in several. Profiling every source against the same standard, and resolving duplicates across sources before loading, keeps the new system from inheriting the inconsistencies of all of them at once.

## Start data work early

A common greenfield mistake is treating data as a late-phase activity that follows design and build. In practice, data work should start alongside design: profiling legacy data informs what is realistic, and cleansing takes far longer than expected. Programmes that start data work early arrive at the first mock migration with clean data to test; those that start late discover their data problems at the worst possible time.

## Settling the history question

History is the decision most likely to be reopened late in a greenfield project. Finance may want prior-year comparisons, auditors may need detail for open audits, and analytics teams may want long trends. The usual answer is to migrate open items and balances, bring historical balances only where comparison reporting needs them, and keep detailed history accessible in an archive or the old system. Agreeing that with finance and audit early prevents a late request that the migration cannot absorb.

## Greenfield still needs rehearsals

A new system can make data loads feel simpler than a conversion, but greenfield migrations still benefit from several mock runs. Each rehearsal tests the selection rules, mappings and validation together, and reconciliation against the legacy source shows whether the selected data arrived complete. The final cutover then repeats something already proven.

## Name the data owners at the start

Every greenfield decision above needs someone with authority to make it. Naming data owners per domain when the project starts, rather than when the first mock migration fails, gives design and data teams someone to go to for scope, mapping and quality decisions. It also means the new system starts life with owners already in place, which is the foundation for keeping its data clean after go-live.

Handled this way, greenfield delivers on its promise for data as well as processes: a new system that starts with less, but with data that every team can trust from the first day of operation, and owners in place to keep it that way.

The earlier these decisions are made and owned, the more of the greenfield promise the business actually receives, and the less of the data work is left to the final, most pressured weeks before go-live.

## How deKorvai helps

Greenfield, including SAP GROW, is a documented deKorvai use case. deKorvai profiles legacy data to show where quality falls short of the bar, extracts selectively from the legacy system, transforms data cleanly to the S/4HANA model with mapping rules applied consistently, and validates it before load. End-to-end validation and reconciliation give business owners evidence that what arrived matches what was selected.

## Key takeaways

- Greenfield builds a new system; data is migrated selectively into it.
- Scope, history, mapping, quality bar and sequence are business decisions.
- Process redesign changes the data, so redesign decisions must come early.
- GROW is greenfield only, with less time for the same decisions.

## SAP greenfield implementation, answered

### What is an SAP greenfield implementation?

Building a new S/4HANA system and migrating data into it, rather than converting the existing ECC system in place. Processes can be redesigned, configuration is rebuilt, and data is brought across selectively.

### What data decisions does greenfield require?

Scope (which records move), history (how much migrates versus stays archived), mapping (how old structures translate to the new design), the quality bar data must meet, and the load sequence.

### Is SAP GROW greenfield?

Yes. SAP GROW runs on S/4HANA Cloud Public Edition and supports greenfield only, so the same data decisions apply, usually on a shorter timeline that makes early preparation more important.

### Why is greenfield a good time to improve data quality?

Because all data passes through transformation and validation on its way into the new system. Setting a quality bar and refusing to load data that fails it means the new system starts cleaner than the old one ever was.
