---
title: "Data Quality Rules: The Categories Every Enterprise Should Check"
excerpt: "Data quality rules turn a vague standard into checkable tests. The five categories to cover, completeness, validity, consistency, uniqueness, and business rules, with examples."
tag: "Data Quality"
author: "Prakash Palani"
slug: "data-quality-rules"
---

**The short answer.** Data quality rules are checks that define what acceptable data looks like. The most useful ones fall into groups matching the quality dimensions: completeness rules (mandatory fields present), validity rules (formats and ranges), consistency rules (values agree across systems), uniqueness rules (no duplicates), and business rules (logic specific to your operation). The best rules encode business meaning, not just technical format, because that is where the costly errors hide.

A data quality rule turns a vague standard into a concrete, checkable test. "The data should be good" is not a rule; "every active customer must have a valid billing country" is. This piece lays out the categories of rule every enterprise should have, with examples, so you can build a checklist that fits your own data.

## Completeness rules

These confirm that required data is present. Examples: every customer has a name and a country; every order has a date and a value; every material has a unit of measure; mandatory fields for a migration target are populated; no critical field is null where the business requires a value. Completeness rules are often the first line of defence, because missing data blocks processes and loads.

## Validity rules

These confirm data follows the required format and range. Examples: dates are in the expected format and not in the future where that is impossible; codes belong to the allowed set; numeric values fall within permitted ranges; email addresses and identifiers match their expected pattern; currency and unit codes are valid reference values. Validity rules are the easiest to automate because the standard is explicit.

## Consistency rules

These confirm the same fact agrees wherever it appears. Examples: a customer's details match across systems; a total equals the sum of its parts; related records carry compatible values; a status in one system aligns with the corresponding status in another; the same entity is classified the same way everywhere. Consistency rules catch the contradictions that make reports fail to reconcile.

## Uniqueness rules

These confirm each real thing is represented once. Examples: no duplicate customers by matching identity attributes; no duplicate materials created under slightly different descriptions; no repeated transactions; a single golden record per entity. Because duplicates are rarely identical, effective uniqueness rules often need fuzzy matching that measures similarity rather than demanding exact matches.

## Business rules

> The rules that catch the costly errors are the ones that encode how your business actually works.

These are the rules specific to your operation, and they are where the most valuable checks live. Examples: a credit limit does not exceed an approved threshold; an active vendor has valid banking details; a product marked for sale has a price; an order's delivery date is not before its order date; a customer in a regulated category carries the required attributes. Business rules require understanding the operation, not just the schema, which is why they are best defined with the people who own the process. They catch the errors that are technically valid but operationally wrong, which are exactly the ones that cause real damage.

## Building your rule set

You do not need hundreds of rules to start. Begin with the data that carries the most business impact, and write rules across the categories above for that data: what must be present, what format it must follow, what must agree, what must be unique, and what business logic must hold. Set a threshold for each so a breach triggers action, and review the results on a scorecard. Add rules over time as you learn where problems recur. A focused set of meaningful rules beats a sprawling set of trivial ones.

## Keeping rules current

A rule set is not a one-time creation; it needs maintaining, because the business it describes keeps changing. New products, new regulations, new processes, and new systems all change what "good data" means, and rules that were right last year can become outdated or even wrong. The organisations that keep their rule sets useful review them periodically, retiring rules that no longer apply, adjusting thresholds as priorities shift, and adding rules for problems that have started to appear.

A stale rule set quietly loses value, passing data that should fail or flagging data that is actually fine. Treating rules as living definitions that evolve with the business, rather than a fixed checklist written once, is what keeps them a reliable guardrail over time.

## Speeding up rule creation

One practical barrier to good data quality is the effort of writing rules in the first place, especially across many fields and domains. Anything that lowers that effort helps a team get to a useful rule set faster. Describing a rule in plain language and having it translated into a runnable check, for example, removes some of the friction of building rules by hand, which means more of the meaningful checks actually get created rather than remaining good intentions. The goal is to make it easy enough to define rules that teams build the comprehensive coverage they need, rather than settling for a thin set because writing more was too much work. Lowering the cost of creating rules tends to raise the quality of the resulting coverage.

## Where to begin with rules

If you are starting from few or no formal rules, the best first move is to profile your most important data and let the findings suggest the rules. Profiling reveals where the actual problems are, which fields have gaps, where duplicates cluster, which values fall outside expected ranges, and each finding points to a rule worth writing. This grounds your rule set in real problems rather than hypothetical ones, so your early rules deliver visible value. From there, the set grows naturally as you address more data and learn where issues recur. Beginning with profiling rather than a blank page turns rule-writing from an abstract exercise into a targeted response to the problems your data actually has.

## How deKorvai helps

deKorvai applies configurable business and technical data quality rules to test data across completeness, accuracy, and consistency, and reports the results on real-time scorecards. Rules can encode business logic, not just technical format, so the checks catch operationally significant errors. Its duplicate detection uses fuzzy matching for uniqueness rules that need to catch near-duplicates, and it can generate DQ rules to speed up building a rule set. Because the rules run continuously through profiling, your rule set becomes an ongoing guardrail rather than a one-time audit.

## Key takeaways

- Rules turn a vague standard into concrete, checkable tests.
- Cover the categories: completeness, validity, consistency, uniqueness, business logic.
- Business rules matter most: they catch errors that are valid but wrong.
- Start focused: meaningful rules on high-impact data beat many trivial ones.

## Frequently asked questions

### What are data quality rules?

Data quality rules are concrete, checkable tests that define what acceptable data looks like. They fall into categories matching the quality dimensions: completeness, validity, consistency, uniqueness, and business rules specific to your operation. Each turns a vague standard into a specific test.

### What are examples of data quality rules?

Completeness: every customer has a country. Validity: dates follow the required format. Consistency: a total equals the sum of its parts. Uniqueness: no duplicate customers. Business rule: an active vendor has valid banking details. Each defines exactly what must be true.

### What is the most valuable kind of data quality rule?

Business rules, the ones that encode how your operation actually works, because they catch errors that are technically valid but operationally wrong. A correctly formatted but impossible delivery date passes format checks yet a business rule catches it. These are best defined with process owners.

### How many data quality rules do I need?

Start focused rather than exhaustive. Write meaningful rules across the categories for your highest-impact data, set a threshold for each, and review results on a scorecard. Add rules over time as you learn where problems recur. A focused set beats a sprawling set of trivial checks.
