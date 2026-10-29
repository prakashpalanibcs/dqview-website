---
title: "Business Glossary Tools: Getting the Business to Agree What Data Means"
excerpt: "Business glossary tools store agreed definitions of business terms, with owners and links to data. What a glossary is, why reports stop disagreeing, the types of tool, and why agreement is the hard part."
metaTitle: "Business Glossary Tools: Agreeing What Data Means"
metaDescription: "Business glossary tools store agreed definitions of business terms, with owners and links to data. The types of tool, and why agreement is the hard part."
tag: "Data Quality"
author: "Prakash Palani"
slug: "business-glossary-tools"
---

**The short answer.** A business glossary is the agreed list of what your business terms mean: what counts as an active customer, a net sale, a valid supplier. Business glossary tools store those definitions, assign owners, and ideally link each term to the data and rules that implement it. The tool matters less than the agreement behind it. The real work is getting finance, sales and operations to settle on one definition per term, and the real payoff is that reports stop disagreeing because everyone is finally counting the same thing.

Ask three departments how many active customers you have and you may get three numbers, all correct by their own definition. That is not a data quality problem in the usual sense; it is a definition problem. A business glossary is how organisations solve it, and the tooling question only makes sense once you understand what the glossary is for.

## What a business glossary is

A business glossary is a shared, governed list of business terms and their agreed definitions. Each entry typically records the term, its definition in plain language, who owns it, how it is calculated or determined, and which data it relates to. It is written for business users, not engineers: "active customer" defined as a customer with at least one invoice in the last twelve months, rather than a description of tables and joins.

## Why it matters to business users

> Most arguments about numbers are really arguments about definitions.

- **Reports stop disagreeing.** When sales and finance use the same definition of revenue or active customer, their figures reconcile.
- **Decisions speed up.** Meetings stop beginning with a debate about whose number is right.
- **Data quality rules get a basis.** A rule that a customer must have a valid tax number is easier to enforce when everyone agrees what a valid customer is.
- **Migrations go smoother.** Mapping old data to a new system is far easier when terms are already defined.

## The kinds of tool

| Type | Strength | Watch for |
| --- | --- | --- |
| Spreadsheet or wiki | Free and quick to start | No ownership, no link to data, quietly goes stale |
| Glossary inside a data catalog or governance platform | Broad metadata coverage and catalogue features | Can be a large investment if a glossary is all you need |
| Glossary inside a data quality platform | Definitions sit next to the rules and scores that test them | Usually not a full data catalogue |

## What to look for

- **Ownership per term.** Every definition needs a named owner who can change it and answer questions about it.
- **A link to the data.** A definition that is not connected to the fields and rules that implement it drifts away from reality.
- **Lineage.** Being able to see where a figure came from makes definitions verifiable rather than theoretical.
- **Ease for business users.** If finance and sales cannot find and read definitions easily, they will not use them.

## The hard part is agreement

No tool resolves the real obstacle, which is that departments define the same term differently for legitimate reasons. Finance may define a customer as an account with a credit relationship; sales as anyone with an open opportunity. The productive approach is to agree one definition per term where possible, and where genuine differences exist, give them different names rather than pretending they are the same. Start with the ten or twenty terms that cause the most disagreement in reporting, settle those with the people who own them, and expand from there.

## How to write a good definition

A useful definition is short, specific and testable. "Active customer" is a poor entry if it says "a customer we currently do business with", because two people can still disagree about what that means. "A customer with at least one invoice posted in the last twelve months" is better, because anyone can check it. Good entries also say who owns the term, when it was last reviewed, and any exceptions. If a definition cannot be turned into a rule that tests data, it is probably not specific enough yet.

## Keep it alive

Glossaries fail most often not at launch but a year later, when nobody has updated them and people have stopped trusting them. Assigning an owner per term, reviewing the most used terms periodically, and linking definitions to the reports that rely on them keeps the glossary current. When a definition changes, the people whose reports depend on it need to know, otherwise the glossary and the reports quietly drift apart again.

## Glossaries and migrations

A migration is a good moment to start or refresh a glossary, because mapping old data to a new system forces the business to say what its data means. The definitions agreed for the migration are worth keeping afterwards rather than losing them with the project documents.

## Terms worth defining first

Every organisation's list is different, but a few terms cause disagreement almost everywhere: active customer, active supplier, revenue and net sales, open order, on-time delivery, and inventory value. Each is used in reports across several departments and each is commonly calculated in slightly different ways. Settling these first tends to resolve a surprising share of the arguments about numbers, and it gives the glossary immediate credibility with the people who read the reports.

## Make it easy to find

A glossary only helps if people consult it at the moment they need it. Linking terms from reports and dashboards, so a reader can see the definition in one click, does more for adoption than any launch campaign.

Above all, resist the temptation to define everything before anyone uses the glossary. Twenty well-owned, well-used definitions are worth more than five hundred that nobody reads. Grow the glossary from the questions people actually ask, and it stays relevant because it reflects real use rather than an inventory exercise.

## How deKorvai helps

deKorvai maintains a business glossary and tracks data lineage as part of its data quality platform, so definitions sit alongside the data quality rules and real-time scorecards that test whether data meets them. That makes a definition something you can measure rather than just document. deKorvai is a data quality and integrity platform rather than a full data catalogue, so it suits organisations that want their glossary tied to quality, migration and governance work rather than a standalone catalogue programme.

## Key takeaways

- A glossary is agreed definitions, owned and written for business users.
- Most number disputes are really definition disputes.
- Link definitions to data and rules, or they drift from reality.
- Start with the terms that cause the most disagreement.

## Frequently asked questions

### What is a business glossary?

A shared, governed list of business terms and their agreed definitions, written for business users. Each entry typically records the term, a plain-language definition, an owner, how it is determined, and the data it relates to.

### Why do business glossaries matter?

Because most arguments about numbers are really arguments about definitions. When departments use the same definition of terms like active customer or revenue, reports reconcile, decisions speed up and data quality rules have a clear basis.

### What should I look for in a business glossary tool?

Named ownership per term, a link from each definition to the data and rules that implement it, lineage so figures can be traced, and ease of use for business users who need to find and read definitions.

### What is the hardest part of building a business glossary?

Agreement, not tooling. Departments often define the same term differently for legitimate reasons. Agree one definition where possible, give genuinely different concepts different names, and start with the terms causing the most reporting disagreement.
