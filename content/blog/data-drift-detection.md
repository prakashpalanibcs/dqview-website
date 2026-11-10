---
title: "Data Drift Detection: Catching Data That Quietly Changes"
excerpt: "Data drift is a change in how data behaves over time: completeness, format, distribution, volume or consistency. Why it is dangerous, how drift detection works, and how to respond without alert fatigue."
metaTitle: "Data Drift Detection: Catching Data That Quietly Changes"
metaDescription: "Data drift is a change in how data behaves over time: completeness, format, distribution, volume or consistency. Why it is dangerous, how drift detection works, and how to respond without alert fatigue."
tag: "Data Quality"
author: "Prakash Palani"
slug: "data-drift-detection"
---

**The short answer.** Data drift is the gradual or sudden change in the characteristics of data over time: a field that starts filling differently, a jump in empty values, a new format appearing, values shifting outside their usual range. It usually follows a change somewhere upstream, such as a new process, an integration update or a different team entering data. Drift detection compares current data against its normal profile and flags meaningful changes early, before they spread into reports, decisions and downstream systems.

Most data quality problems do not arrive all at once. They creep in. A new web form starts saving phone numbers in a different format; an integration update leaves a field blank; a reorganised team uses a code differently. Each change is small and silent, and by the time a report looks wrong, weeks of data are affected. Drift detection is how you notice early.

## What data drift is

Data drift, in the data quality sense, is a change in the characteristics of data compared with its normal pattern. It is different from a one-off error: drift is a shift in how data behaves over time. The term is also used in machine learning for changes that affect model accuracy, which is a related idea; here the focus is on business data that operations, reporting and analytics depend on.

## Kinds of drift to watch for

| Drift | What changes | Typical cause |
| --- | --- | --- |
| Completeness | More empty values in a field than usual | Form or integration change |
| Format | New patterns appear in a field | New entry channel or system |
| Distribution | Values shift outside their usual range or mix | Process or business change |
| Volume | Far more or fewer records than normal | Failed or duplicated loads |
| Consistency | Related fields stop agreeing | Partial updates across systems |

## Why drift is dangerous

> Drift does not break anything on the day it starts. That is what makes it costly.

A rule that checks whether a field is filled will pass for a while after drift begins, if the field is still mostly filled. Reports keep running and nobody is alerted. Meanwhile the change spreads into downstream systems, dashboards and decisions. When the problem finally becomes visible, the cleanup covers weeks or months of records and has to trace where they went. Detecting drift early turns that into a small investigation instead.

## How drift detection works

Drift detection starts with a baseline: a profile of what normal looks like for each important dataset, covering completeness, formats, value ranges, volumes and relationships. Data is then profiled continuously or on a schedule, and each new profile is compared against the baseline. Changes beyond an agreed tolerance are flagged for review. The tolerance matters: too tight and every minor fluctuation raises an alert, too loose and real drift slips through.

## After migrations and integrations

Drift is especially likely after a system change. A migration to S/4HANA, a new integration, or a process redesign all change how data is created. Watching for drift in the weeks after such a change catches the cases where the new process is producing data differently from what was intended, while they are still easy to correct.

## Responding to drift

An alert is only useful if someone acts on it. Each important dataset should have an owner who receives drift alerts for their domain, investigates the cause, and decides whether the change is a problem or a legitimate new normal. If it is legitimate, the baseline is updated. If it is a problem, the fix should target the upstream cause, such as the form or integration, not just the affected records.

## Where to start

Start with the datasets where silent change would cost the most: customer and supplier master data, financial postings, and any data feeding critical reports or automated decisions. Build a baseline for a handful of measures on each, set tolerances with the data owner, and review alerts weekly. Extend coverage once the first datasets show the approach works and the alert volume is manageable.

## Avoid alert fatigue

Drift detection fails quietly if it produces too many alerts. Owners stop reading them, and the one that matters is missed. Tuning tolerances after the first few weeks, suppressing known seasonal patterns such as month-end volume spikes, and routing alerts only to the owner of the affected domain keeps the signal useful. A small number of trusted alerts is worth far more than a large number of ignored ones.

## Drift as evidence

Drift records also serve governance and audit. Showing that data was monitored, that changes were detected and that each was investigated is evidence of control over data quality, which auditors and regulators increasingly ask for.

## Building a useful baseline

A baseline should reflect normal operation, not an unusual period. Building it from several weeks or months of data smooths out one-off events and captures regular patterns such as month-end peaks. It also needs refreshing as the business changes: a new region, a new product line or a reorganisation can legitimately shift what normal looks like, and a stale baseline turns every legitimate change into an alert.

## Drift in practice

Typical examples are easy to recognise once named: phone numbers suddenly saved without country codes after a new web form launched; supplier records created without a payment term after a procurement process change; order volumes from one channel dropping to near zero because an integration failed silently. Each would pass a simple completeness check for a while, and each is obvious against a baseline.

## Drift detection and rules work together

Rules check whether individual records meet a standard; drift detection checks whether the data as a whole is behaving as usual. Both are needed. Rules catch individual bad records; drift detection catches the gradual shifts that rules alone miss until it is too late. Together they give owners a far more complete picture of their data's health than either provides alone.

Used together and owned by the right people, they turn data quality from something checked occasionally into something watched continuously.

That shift, from occasional checking to continuous watching, is what keeps clean data clean.

## How deKorvai helps

deKorvai continuously profiles data quality and health, discovering structure and content and applying configurable rules. Its anomaly and drift detection flags changes from the normal pattern, and real-time scorecards show quality trends by data quality dimension, so owners can see when a domain starts to move. Comprehensive reports support investigation and audit, and the same monitoring can continue after a migration to catch drift introduced by new processes.

## Key takeaways

- Drift is a change in how data behaves over time, not a one-off error.
- Watch completeness, format, distribution, volume and consistency.
- Detect it against a baseline with sensible tolerances.
- Fix the upstream cause, not just the affected records.

## Data drift detection, answered

### What is data drift?

A change in the characteristics of data over time compared with its normal pattern, such as more empty values, new formats, values shifting outside their usual range, unusual volumes, or related fields no longer agreeing.

### What causes data drift?

Usually a change upstream: a new form or entry channel, an integration update, a process redesign, a system migration, or a different team entering data differently.

### How does data drift detection work?

It builds a baseline profile of what normal looks like for a dataset, profiles the data continuously or on a schedule, compares each profile against the baseline, and flags changes beyond an agreed tolerance for review.

### How should teams respond to data drift?

The dataset owner investigates the cause and decides whether it is a problem or a legitimate new normal. Legitimate changes update the baseline; problems are fixed at the upstream cause, not just in the affected records.
