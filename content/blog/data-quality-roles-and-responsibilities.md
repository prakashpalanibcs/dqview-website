---
title: "Data Quality Roles and Responsibilities: Owner, Steward, Custodian"
excerpt: "Data quality depends on clear roles: the owner decides what correct means, the steward applies it, the custodian runs the systems, consumers report problems. What each does and why owners belong in the business."
metaTitle: "Data Quality Roles: Owner, Steward, Custodian"
metaDescription: "The owner decides what correct means, the steward applies it, the custodian runs the systems. What each role does and why owners belong in the business."
tag: "Data Quality"
author: "Prakash Palani"
slug: "data-quality-roles-and-responsibilities"
---

**The short answer.** Data quality depends on a few clearly separated roles. The data owner is accountable for a domain and decides what correct means. The data steward applies that standard day to day and resolves issues. The data custodian, usually IT, runs the systems and controls that store and move the data. Data consumers use it and report problems. Most data quality failures trace back to these roles being unassigned or blurred, so that nobody is clearly responsible when a record is wrong.

When a customer record is wrong, whose job is it to fix it? In many organisations the honest answer is that nobody knows, and that uncertainty is itself the cause of most persistent data quality problems. Clear roles solve it. Here is what each one does, in plain terms.

## The four roles

| Role | Responsible for | Typically held by |
| --- | --- | --- |
| Data owner | Accountable for a domain; decides what correct means and approves the standard | A senior business leader for that area, such as the head of procurement for supplier data |
| Data steward | Applies the standard day to day, resolves issues, makes judgement calls | Someone in the business who knows the data well, often part-time |
| Data custodian | Runs the systems, access, security and movement of the data | IT or the data platform team |
| Data consumer | Uses the data and reports problems they find | Everyone who relies on the data in their work |

## Owner and steward are business roles

> IT can keep data safe and moving. Only the business can say whether it is right.

The most common mistake is assigning data ownership to IT. IT teams can run systems, secure access and move data reliably, which is the custodian's job. They cannot decide whether a supplier's payment terms are correct or whether two customers are really the same company. Those are business judgements, which is why owners and stewards should sit in the business functions that use the data. Making IT the de facto owner of data quality is how organisations end up with technically sound systems full of data the business does not trust.

## Make it explicit

Roles only work when they are written down and agreed. A simple matrix per data domain, showing who is responsible, who approves, who is consulted and who is informed, removes most of the ambiguity. It does not need to be elaborate; it needs to exist, be agreed by the people named, and be easy to find when a question arises.

## What each role needs from tooling

- **Owners need a summary:** is my domain meeting the standard, and is it improving?
- **Stewards need the detail:** which records fail, why, and a way to resolve them.
- **Custodians need control:** reliable pipelines, access management and an audit trail.
- **Consumers need a way to report problems** and confidence that someone acts on them.

## Roles during a migration

A migration tests these roles hard and often exposes that they were never assigned. Scope decisions, duplicate resolution and sign-offs all need an owner with authority; cleansing and validation need stewards with time; extraction and loading need custodians. Migrations add a temporary role too, the data migration lead, who coordinates the others. The useful move is to treat the migration as the moment to assign the permanent roles properly, so they outlast the project rather than dissolving with it.

## Where to start

Start with one domain where data problems are most felt. Name its owner, find a steward who knows the data, confirm who the custodian is, and agree a short list of standards. Run that for a while before extending. Assigning roles across every domain at once tends to produce a chart that nobody acts on.

## Roles in a smaller organisation

Smaller organisations do not need a separate person for each role. One person can be owner and steward for a domain, and IT may be a small team acting as custodian for everything. What matters is not headcount but clarity: for each domain, everyone should know who decides what correct means, who fixes problems day to day, and who looks after the systems. Combining roles is fine; leaving them unassigned is what causes trouble.

## Consumers are part of the system

Data consumers are easy to overlook because they do not own anything, but they see problems first. A sales rep who notices a wrong address, or a planner who spots a material with odd settings, is the earliest warning the organisation has. Giving consumers a simple way to report problems, and showing them that reports lead to fixes, turns them into an extension of the stewardship effort rather than people who quietly work around bad data.

## Review roles when things change

Roles drift as people move jobs and organisations restructure. Reviewing the assignments once a year, and whenever a reorganisation or acquisition happens, keeps them current. An owner who left eighteen months ago is no owner at all.

## Make room for the work

Naming a steward without giving them time is the most common reason stewardship fails. If the role is added to someone's existing job with no allowance, it will lose to their day-to-day deadlines every time. Agreeing a realistic amount of time, even a few hours a week, and making it part of how their performance is judged, is what turns a name on a chart into someone who actually looks after the data.

## When roles disagree

Owners of different domains sometimes need the same data to mean different things. Clear roles make those disagreements visible and give them a route to resolution, usually a data governance forum or a senior sponsor, rather than leaving them to be settled by whoever edits the record last.

Clarity beats sophistication here. A one-page matrix that everyone has read is worth more than a detailed framework nobody follows.

## How deKorvai helps

deKorvai supports each role with what it needs. Owners get real-time scorecards showing quality and trend for their domain against the rules they approved. Stewards get configurable rules applied automatically, failing records routed to them with the reason, and approval steps for consequential changes such as merging duplicates. Custodians get reliable extraction, transformation and loading with full audit trails and execution tracking. A business glossary and lineage give everyone the same definitions and a way to trace where data came from.

## Key takeaways

- Owner decides, steward applies, custodian runs, consumer reports.
- Owners and stewards belong in the business, not IT.
- Write the roles down per domain, and get them agreed.
- Use a migration to assign permanent roles properly.

## Frequently asked questions

### What are the main data quality roles?

The data owner, accountable for a domain and deciding what correct means; the data steward, applying that standard day to day; the data custodian, usually IT, running the systems and controls; and data consumers, who use the data and report problems.

### What is the difference between a data owner and a data steward?

The owner is accountable and sets the standard, usually a senior business leader for that area. The steward applies the standard day to day, resolves issues and makes judgement calls, usually someone who knows the data well.

### Should IT own data quality?

IT should be the custodian, running systems, access and data movement. Ownership and stewardship belong in the business, because only the business can judge whether data such as payment terms or customer identities is actually correct.

### How do you assign data quality roles?

Start with one domain where problems are most felt. Name its owner, find a steward, confirm the custodian, agree a short list of standards, and write it down in a simple responsibility matrix that the people named agree to.
