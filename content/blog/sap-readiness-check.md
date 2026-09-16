---
title: "The SAP Readiness Check, Explained: What It Tells You Before You Migrate"
excerpt: "The SAP Readiness Check (SAP Note 2290622) scans your ECC system and flags simplification items, custom code, sizing, data volume, and financial data quality before migration. What it checks, and what it leaves to you."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "sap-readiness-check"
---

**The short answer.** The SAP Readiness Check is a free SAP tool, launched via SAP Note 2290622, that you run against your existing ECC system before a migration. It produces a dashboard flagging what stands between you and S/4HANA: relevant simplification items, custom code impact, add-on compatibility, sizing, recommended Fiori apps, data volume reduction potential, and a financial data quality check. It is a planning tool, not a fix. What it flags on the data side, quality and volume, is work you still have to do, and it is best started early.

Every good S/4HANA migration starts the same way: not by picking a tool, but by finding out what you are dealing with. The SAP Readiness Check is how you do that. It scans your current system and tells you, with evidence, what the migration will actually involve. Here is what it checks, what it does not, and why two of its findings point straight at data work.

## What the Readiness Check is

The SAP Readiness Check for SAP S/4HANA is an analysis tool provided by SAP, activated through SAP Note 2290622, which runs against your source system (your ECC system for a conversion). It collects data about your system and consolidates the results into an interactive dashboard you can review internally or share with SAP. The point is to surface, early and in one place, the aspects of your system that will affect the migration, so you can plan a realistic timeline and scope rather than guessing. It is run in the planning phase, before the project is scoped, precisely so the plan is built on evidence.

## What it actually analyses

The Readiness Check covers a broad set of areas. The main ones:

- **Simplification items.** Which S/4HANA simplifications are relevant to your system, based on your actual usage, each linked to the changes it requires.
- **Custom code analysis.** A high-level view of where your custom ABAP code may not comply with S/4HANA, drawing on ABAP Test Cockpit findings.
- **Add-on and business function compatibility.** Whether your installed add-ons and active business functions are compatible with your target S/4HANA version.
- **Sizing.** The estimated memory and disk size for S/4HANA, before and after cleanup, including archiving potential.
- **Recommended Fiori apps.** Which Fiori apps could replace the transactions you use today.
- **Data volume and a financial data quality check.** Your data volume reduction potential, and a check of financial data quality.

## Two findings point straight at your data

> The Readiness Check does not just look at code and add-ons. It flags your data volume and your financial data quality, which is where migrations quietly get harder.

It is worth dwelling on two of those areas, because they are the ones people overlook. The Readiness Check reports your data volume reduction potential, in other words, how much of your data you could archive or leave behind rather than drag into S/4HANA. And it includes a financial data quality check, flagging quality problems in your financial data. Both of these are signals that data work is coming, and both are things the Readiness Check can identify but not resolve. It tells you the data volume is large or the financial data has issues; getting the data ready is a separate job.

## What the Readiness Check does not do

The Readiness Check is a planning and discovery tool, and it is important to be clear about its boundary. It identifies issues; it does not fix them. It gives a high-level custom code analysis, not the detailed remediation, which is done separately with the ABAP Test Cockpit. It flags data volume and financial data quality, but it does not cleanse your data, resolve duplicates, or reduce volume for you. And it does not, on its own, tell you everything about your data quality across every object; its financial data quality check is one focused piece, not a full profiling of all your master and transactional data. Seeing it accurately, as the map rather than the journey, keeps expectations right.

## Pair it with deeper data profiling

Because the Readiness Check flags data issues without resolving them, and because its data quality view is focused rather than comprehensive, the natural next step is deeper profiling. Where the Readiness Check says financial data quality needs attention, profiling tells you exactly which records, which fields, and how big the problem is across all your data, not just finance. Where it flags data volume, profiling helps you decide what is active, what is duplicate, and what can be archived. The Readiness Check is the alarm; profiling is the diagnosis that lets you act. Running both, in that order, turns a list of flags into a data plan you can execute.

## Reading the dashboard

The Readiness Check consolidates its findings into an interactive dashboard, and knowing how to read it turns a wall of results into a plan. The dashboard groups findings by area, simplification items, custom code, add-ons, sizing, data, so you can see at a glance where the biggest issues concentrate. The value is in prioritisation: not every finding is equally urgent, and the dashboard helps you separate the mandatory changes from the optional ones, and the large efforts from the small. Treating the dashboard as a prioritised worklist, rather than an undifferentiated list of problems, is how teams turn the Readiness Check from an alarming report into an actionable roadmap for the phases that follow.

## How deKorvai helps

deKorvai picks up where the Readiness Check leaves off on the data side. Once the Readiness Check has flagged data volume and financial data quality as areas of concern, deKorvai profiles your data in depth, across master and transactional data, not just finance, to reveal the true state: completeness, duplicates, inconsistencies, and what can be archived. It then cleanses and de-duplicates, transforms and maps to the S/4HANA model, and reconciles the result. In effect, the Readiness Check tells you data work is needed, and deKorvai is built to do that work, turning the flags into a clean, migration-ready dataset.

## Key takeaways

- The Readiness Check (SAP Note 2290622) runs against ECC and flags what the migration involves.
- It covers simplification items, custom code, add-ons, sizing, Fiori apps, data volume, and financial data quality.
- Two findings are data signals: data volume reduction potential and financial data quality.
- It flags, it does not fix: deeper profiling turns the data flags into an executable plan.

## Frequently asked questions

### What is the SAP Readiness Check?

It is a free SAP analysis tool, launched via SAP Note 2290622, that you run against your existing ECC system before migrating. It produces a dashboard flagging simplification items, custom code impact, add-on compatibility, sizing, recommended Fiori apps, data volume, and financial data quality.

### When should you run the SAP Readiness Check?

In the planning phase, before the migration project is scoped. Running it early means your timeline and scope are built on evidence about your actual system, rather than assumptions, which is why SAP and practitioners recommend it as a first step.

### Does the Readiness Check fix problems?

No. It is a planning and discovery tool that identifies issues. It flags custom code, data volume, and financial data quality concerns, but it does not remediate code, cleanse data, or reduce volume. Those are separate pieces of work that follow.

### What does the Readiness Check reveal about data?

Two things in particular: your data volume reduction potential, meaning how much you could archive or leave behind, and a financial data quality check that flags quality problems in financial data. Both signal that data work is needed, which deeper profiling then turns into an executable plan.
