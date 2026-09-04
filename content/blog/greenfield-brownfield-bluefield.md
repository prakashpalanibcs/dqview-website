---
title: "Greenfield vs Brownfield vs Bluefield: Choosing Your S/4HANA Path"
excerpt: "Greenfield rebuilds, Brownfield converts, Bluefield selectively transitions. A clear comparison of the three S/4HANA migration approaches, adoption data, and how to choose."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "greenfield-brownfield-bluefield"
---

**The short answer.** Greenfield rebuilds S/4HANA from scratch with redesigned processes. Brownfield converts your existing ECC system in place, keeping customisations and history. Bluefield, also called selective data transition, sits between the two: a new system, but with selected data and configuration carried across. The right choice depends on your goals, process complexity, and data strategy, and whichever you pick, data quality shapes the outcome.

Every S/4HANA migration starts with a choice between three approaches, and the decision shapes cost, timeline, risk, and how much you can modernise. The terms get used loosely, so here is a clear comparison, grounded in how SAP practitioners actually describe them, along with the data-quality thread that runs through all three.

## The three approaches

- **Greenfield (new implementation).** A complete reimplementation of S/4HANA from scratch. You redesign processes, adopt standard functionality, and bring across only the data worth keeping. Best for organisations wanting significant transformation and standardisation.
- **Brownfield (system conversion).** A conversion of your existing ECC system in place, retaining customisations and historical data. Lower disruption and typically faster, best for organisations that want to preserve what already works.
- **Bluefield (selective data transition).** A hybrid: a new, clean S/4HANA system, but with selected historical data, configurations, and custom objects migrated across. Best for complex landscapes that want to modernise selectively without a full reset.

## Side by side

| Aspect | Greenfield | Brownfield | Bluefield |
| --- | --- | --- | --- |
| What it is | Rebuild from scratch | Convert existing system in place | New system, selective data carried across |
| Processes | Redesigned | Retained | Selectively redesigned |
| Historical data | Only what is chosen | Retained | Selectively migrated |
| Disruption | Higher | Lower | Moderate |
| Best for | Transformation, standardisation | Continuity, speed | Complex, selective modernisation |

## What organisations are actually choosing

Industry research gives a sense of the split. An ASUG study reported in 2025 found that around 59% of companies already use S/4HANA or are in the process of migrating. Among approach choices, reported figures put brownfield at roughly 39%, bluefield at around 27%, and greenfield at about 26%, showing that no single approach dominates and that selective transition has become a serious middle path rather than a niche. The same research also notes a sobering reality: a large share of projects run over budget regardless of approach, which underlines that the approach alone does not determine success.

## How to choose

The decision is best framed around priorities rather than technical preference:

- **Lean Greenfield** if your priority is redesign, simplification, and standardisation, and your current system is highly customised or outdated.
- **Lean Brownfield** if your priority is continuity, speed, and protecting existing investments, and your current processes largely work.
- **Lean Bluefield** if you have a complex landscape and want to modernise selectively, keeping some processes intact while redesigning others.

Crucially, the choice depends on business goals, process complexity, timeline, and data strategy together, not on any one factor alone.

## The data thread through all three

> Every approach places different demands on data, but none of them succeeds on dirty data.

Whichever path you choose, data quality shapes the result. Greenfield is a natural moment for a thorough clean-up, because you choose what to bring. Brownfield carries existing data forward, so unresolved problems come with it unless fixed first. Bluefield demands careful, selective data handling, deciding what to migrate and transforming it to the new model. In every case, profiling your data early informs the decision and de-risks the execution. The approach sets the strategy; data readiness determines whether that strategy lands.

## The cost and timeline picture

Beyond the conceptual differences, the three approaches carry different cost and timeline profiles, though the details vary by organisation. Greenfield, as a full reimplementation, typically demands the most time and the deepest input from decision-makers to define new processes, but it delivers the cleanest end state. Brownfield tends to be faster and lower in upfront cost, because it converts rather than rebuilds, though it can accumulate technical debt that costs more later. Bluefield sits between the two, enabling phased investment spread across budget cycles while delivering incremental value.

Importantly, industry data suggests a large share of projects run over budget regardless of approach, which is a reminder that the approach alone does not control the outcome. Disciplined data preparation and realistic planning matter at least as much as the path chosen.

## A word on clean core

One consideration increasingly shapes the approach decision: SAP's clean core principle, which favours keeping S/4HANA close to standard with custom functionality built through modern extension rather than direct modification. The approach you choose affects how closely you can align to clean core. A greenfield build naturally lends itself to a clean, standard system, while a brownfield conversion carries existing customisations forward, which can make clean core harder to attain. Bluefield allows selective alignment. For organisations that care about future flexibility and access to newer capabilities that assume a clean core, this is worth weighing alongside cost and timeline, because the migration approach has consequences that outlast the migration itself.

## Whose advice to trust

One practical caution: much of the advice you will receive about which approach to choose comes from parties with a commercial interest in the answer. SAP's guidance reflects its strategic direction, a system integrator's reflects its preferred delivery model and deepest experience, and a tool vendor's reflects what its tool does best. None of this makes the advice wrong, but it does mean you should weigh it against your own situation rather than adopting it wholesale. The most reliable input to the decision is an honest, evidence-based understanding of your own data and processes, which is exactly what profiling provides. Ground the choice in your reality, then use outside expertise to execute it well.

## How deKorvai helps

deKorvai supports the data side of all three approaches. It profiles source data so you understand its true state before committing to an approach, cleanses and de-duplicates master data, and transforms and maps it to the S/4HANA model while preserving referential integrity. It supports Greenfield, Bluefield (selective data transition), and GROW programmes, loading into the Migration Cockpit staging tables with reconciliation built in. Because the choice of approach depends so heavily on the state of your data, the profiling deKorvai provides early is often what turns the greenfield-brownfield-bluefield decision from a guess into an informed one.

## Key takeaways

- Greenfield rebuilds, Brownfield converts, Bluefield selectively transitions.
- No approach dominates: reported adoption is split across all three.
- Choose on priorities: transformation, continuity, or selective modernisation.
- Data quality shapes every path, so profile early to inform the decision.

## Frequently asked questions

### What is the difference between greenfield, brownfield, and bluefield?

Greenfield rebuilds S/4HANA from scratch with redesigned processes. Brownfield converts your existing ECC system in place, keeping customisations and history. Bluefield, or selective data transition, builds a new system but selectively carries across chosen data and configuration.

### Which S/4HANA migration approach is most common?

Reported adoption is split across all three, with no single approach dominating. Figures reported in 2025 put brownfield at roughly 39%, bluefield around 27%, and greenfield about 26%, showing selective transition has become a serious middle path.

### How do I choose between the three approaches?

Frame it around priorities. Greenfield suits redesign and standardisation, brownfield suits continuity and speed, and bluefield suits complex landscapes wanting selective modernisation. The right choice depends on business goals, process complexity, timeline, and data strategy together.

### Does the migration approach affect data preparation?

Yes. Greenfield lets you choose what to bring, a natural clean-up moment. Brownfield carries existing data forward, so problems come too unless fixed first. Bluefield demands selective data handling. In every case, profiling data early informs the choice and de-risks execution.
