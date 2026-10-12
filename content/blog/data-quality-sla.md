---
title: "Data Quality SLAs: Standards Teams Can Be Held To"
excerpt: "A data quality SLA states the standard, the owner, the measurement and the response when it is breached. What one contains, why thresholds follow consequence, and why the response clause matters most."
metaDescription: "A data quality SLA states the standard, owner, measurement and response on breach. What one contains and why the response clause matters most."
tag: "Data Quality"
author: "Prakash Palani"
slug: "data-quality-sla"
---

**The short answer.** A data quality SLA is an agreement that states what standard a data set must meet, who is accountable for it, how it is measured, and what happens when it falls below. It turns data quality from a shared aspiration into a commitment someone owns. The practical ingredients are a defined scope, metrics tied to quality dimensions, thresholds set by business impact, an owner, a measurement cadence, and a defined response when a threshold is breached.

Most organisations agree data quality matters and almost none of them have written down what that means in terms anyone can be held to. An SLA is how you close that gap. Here is what one contains and how to make it something people actually use.

## What a data quality SLA contains

- **Scope.** Which data set, which fields, and for which use. Quality is relative to purpose, so an SLA that does not say what the data is for will be argued about.
- **Metrics.** Measures tied to quality dimensions: completeness, accuracy, consistency, validity, uniqueness, timeliness.
- **Thresholds.** The level each metric must meet, set by business impact rather than ambition.
- **Owner.** A named person or team accountable for the standard being met.
- **Cadence.** How often it is measured and reported.
- **Response.** What happens when a threshold is breached, including who is notified and what action follows.

## Thresholds are a business decision

> A threshold set by ambition gets ignored. A threshold set by consequence gets defended.

The most common mistake is setting every threshold high because high sounds responsible. It produces an SLA permanently in breach, which teaches everyone to ignore it. Thresholds should follow consequence: a field that blocks a payment, stops a migration load or carries a regulatory obligation justifies a demanding standard, while an attribute that mildly improves a report does not. Working through impact field by field is tedious and it is the part that makes the SLA credible, because each number can be explained.

## The response clause does the work

An SLA without a defined response is a dashboard with extra paperwork. The response clause is what converts a measurement into action: when completeness on this field drops below the threshold, this person is notified, this investigation happens, and this is the expected remediation window. Without it, breaches are observed and tolerated, which is the state most organisations are already in. With it, the SLA becomes a working control rather than a statement of intent.

## Internal SLAs and supplier SLAs

Data quality SLAs appear in two settings and they behave differently. Internally, between a data-producing team and the teams that consume their data, the SLA is mostly a coordination device: it makes expectations explicit and gives the consuming team a basis to escalate. With an external data supplier, it is closer to a contractual commitment, and the measurement and response clauses carry more weight because there may be commercial consequences. The structure is the same; the enforcement differs, and it is worth being clear which kind you are writing.

## Starting small is the right move

An SLA covering every data set is a document nobody maintains. The version that survives covers one or two high-impact data sets, with a handful of metrics each, owned by people who agreed to own them. Once that is running and being acted on, extending it is straightforward because the pattern is proven and the value is visible. Starting narrow also exposes whether your measurement is good enough to support an SLA at all, which is a useful thing to discover on one data set rather than twenty.

## Writing it is a negotiation, and that is the point

Drafting a data quality SLA surfaces disagreements that were previously comfortable to avoid. The consuming team wants a high standard; the producing team points out what meeting it would require. Working that out is not an obstacle to the SLA, it is the value of writing one. The conversation forces both sides to state what they actually need and what it would cost to supply, and the agreement that emerges is realistic because it was argued over. An SLA drafted by one side and circulated for acknowledgement tends to be ignored, precisely because that negotiation never happened.

## Review it on a rhythm

Business needs change, and an SLA written against last year's processes slowly stops describing anything useful. Reviewing it on a set rhythm, annually for most data sets, keeps thresholds aligned to current consequence and removes metrics that have stopped mattering. The review is also a natural moment to check whether the response clause has actually been used: if thresholds have been breached and nothing happened, the SLA is not working, and that is worth knowing before anyone relies on it. An agreement that is reviewed stays a control; one that is filed becomes documentation.

## Check you can measure before you commit

An SLA commits you to a cadence of measurement, so it is worth confirming you can actually produce the numbers before the agreement is signed. If measuring completeness on a field currently requires someone to run a manual extract and reconcile it in a spreadsheet, a monthly reporting commitment will survive about two cycles. The question to settle first is whether the metrics in the draft can be produced automatically and repeatably. Where they cannot, either narrow the SLA to what is measurable now or sort the measurement out first. Committing to a standard you cannot evidence is worse than having no SLA, because the failure is visible.

## An SLA is a cultural signal too

Beyond its mechanics, publishing a data quality SLA says something: that this data has a named owner, a defined standard, and consequences attached. That signal often changes behaviour more than the document does. Teams that create data start to understand that someone downstream depends on it to a stated level, and teams that consume it gain a legitimate basis to raise problems rather than quietly working around them. Organisations that have struggled for years to make data quality anyone's priority sometimes find that the act of writing one agreement, for one important data set, shifts the conversation more than any amount of advocacy did.

## How deKorvai helps

An SLA is only as good as the measurement behind it, which is where deKorvai fits. It profiles data and applies configurable business and technical rules, so the metrics in an SLA are tested objectively rather than estimated. Real-time scorecards with trend insight mean the standard is tracked continuously rather than sampled occasionally, which is what makes a cadence commitment realistic. Continuous monitoring supports the response clause by surfacing breaches as they occur, and full audit trails evidence what was measured and when. The agreement remains a business artefact; the platform supplies the numbers it depends on.

## Key takeaways

- An SLA names scope, metrics, thresholds, owner, cadence and response.
- Set thresholds by consequence, not ambition, or they get ignored.
- The response clause is what turns measurement into action.
- Start with one or two high-impact data sets and extend once it works.

## Frequently asked questions

### What is a data quality SLA?

An agreement stating what standard a data set must meet, who is accountable, how it is measured, how often, and what happens when it falls below the standard. It turns data quality from a shared aspiration into a commitment someone owns.

### What should a data quality SLA include?

Scope (which data, which fields, for what use), metrics tied to quality dimensions, thresholds set by business impact, a named owner, a measurement cadence, and a defined response when a threshold is breached.

### How do you set data quality thresholds?

By consequence rather than ambition. Fields that block payments, stop migration loads or carry regulatory obligations justify demanding standards; attributes that mildly improve a report do not. Thresholds set uniformly high produce an SLA permanently in breach, which teaches everyone to ignore it.

### What makes a data quality SLA work in practice?

The response clause. Without a defined action on breach, including who is notified and what remediation is expected, the SLA is a dashboard with extra paperwork. Starting with one or two high-impact data sets also helps, because a document covering everything is one nobody maintains.
