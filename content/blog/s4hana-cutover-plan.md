---
title: "The S/4HANA Cutover Plan: Runbook, Freeze, Go/No-Go"
excerpt: "A cutover plan is the timed runbook for switching ECC to S/4HANA: freeze, final delta load, task sequence, reconciliation checkpoints, go/no-go criteria, and rollback. Why rehearsal makes it real."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "s4hana-cutover-plan"
---

**The short answer.** A cutover plan is the timed, step-by-step runbook for switching from ECC to S/4HANA. It covers the transaction freeze in ECC, the final delta data load, the sequence of technical and business tasks with named owners and durations, the reconciliation and go or no-go checkpoints, and a rollback path. The plan is drafted early, rehearsed through mock cutovers, and improved after each rehearsal. A written cutover plan that has never been rehearsed is a theory, not a plan.

Cutover is the weekend everything comes together or does not. It is also the part of a migration most often planned last and rehearsed least, which is exactly backwards. Here is what a cutover plan actually contains and how to make it something you trust.

## What a cutover plan is

A cutover plan is the detailed runbook for the switch: every task, in sequence, with an owner and a realistic duration, covering the hours from the moment you freeze the old system to the moment the new one is open for business. It is not a project plan or a high-level schedule. It is an operational document precise enough that someone can work through it at two in the morning and know exactly what to do next, who is doing it, and what should have finished before it starts.

## What it contains

1. **The freeze.** A defined point when transactions stop in ECC, communicated to the business with enough notice, so the data stops moving while you migrate it.
2. **The final delta load.** The last extract and load of data changed since your previous load, so the target reflects the true final state rather than a stale snapshot.
3. **The task sequence.** Every technical and business task in order, with dependencies, owners, and durations, down to the hour.
4. **Reconciliation checkpoints.** The checks that confirm the migrated data ties back to the source, at defined points in the sequence.
5. **Go or no-go criteria.** Defined pass and fail conditions, agreed in advance, rather than judgement calls made under pressure at three in the morning.
6. **The rollback plan.** What happens if you have to stop, including the time-boxed point by which that decision must be made.
7. **Communication.** Who is told what, when, across affected business units and leadership.

## Rehearse it, then improve it

> A cutover plan that has only been written is a theory. Rehearsing is what turns it into a plan you can rely on.

The single most valuable thing you can do with a cutover plan is run it as a rehearsal, more than once, and improve it after each run. A mock cutover reveals what the document missed: the task that takes three hours instead of one, the dependency nobody noticed, the step that assumed someone would be awake. Each rehearsal makes the runbook more accurate and the timings more realistic, and it gives the team the muscle memory that makes the real night calmer. Teams that draft the cutover plan during planning and rehearse it repeatedly consistently report smoother go-lives than teams that write it near the end.

## Fitting the window

Cutover windows are finite, usually a weekend, and everything has to fit inside with room for things to go wrong. This is where the cutover plan and mock migrations connect directly: the mocks tell you how long the data load actually takes, and the cutover plan has to accommodate that alongside every other task plus a buffer. If the measured timings do not fit the window, you have a decision to make in advance, reduce data scope, optimise the load, or negotiate a longer window, rather than discovering the problem live. The honest version of this conversation, held early, is much easier than the one held at four in the morning.

## The data tasks inside the plan

A meaningful portion of a cutover runbook is data work: the final delta extract, the load sequence in dependency order, the reconciliation checkpoints, and the sign-offs those checkpoints feed. These are not background tasks; they are often the critical path, and they are where delays cascade. Building the data tasks into the plan with realistic, mock-measured durations, and knowing who owns each check, is what keeps cutover on schedule. It also means the go or no-go decision rests on reconciliation evidence rather than a general feeling that things went alright.

## Draft it early, not at the end

One of the most consistent pieces of practitioner advice is to draft the cutover strategy during planning rather than near the end of the project, and the reasoning is practical. Writing the cutover plan early forces questions that are much cheaper to answer early: how long will the data load actually take, what is the freeze window the business can tolerate, who owns the go decision, what would trigger a rollback. Teams that leave the cutover plan until the technical build is finished discover these questions at a point where the answers are constrained rather than chosen. The plan will change as mocks refine the timings, but having a draft to refine is far better than starting from nothing under time pressure.

## The human side of cutover

A cutover runbook is a technical document, but cutover is executed by tired people at unusual hours, and good plans account for that. Realistic durations matter more than optimistic ones, because a plan that assumes everything goes quickly leaves no room for the inevitable. Named owners matter because ambiguity at three in the morning costs time. Defined go and no-go criteria matter precisely because judgement is worse when people are tired, and a pre-agreed threshold removes the debate. Handover points and rest matter for long cutovers. The teams whose cutovers go calmly are usually the ones who planned for human limits rather than assuming everyone would be sharp throughout.

## How deKorvai helps

deKorvai supports the data tasks that sit on the cutover critical path. It provides full and incremental extraction, so the final delta load captures what changed since the previous load rather than re-running everything. It transforms and maps data to the S/4HANA model while preserving referential integrity, loads into the Migration Cockpit staging tables, and reconciles the result against the source so the cutover checkpoints produce evidence rather than assurances. Because the flow is repeatable, the timings measured during mock cutovers are the timings you can plan around, which is what makes a cutover runbook realistic.

## Key takeaways

- A cutover plan is a timed runbook, with owners, durations, and dependencies.
- It includes the freeze, final delta load, reconciliation checkpoints, go/no-go criteria, and rollback.
- Rehearse it repeatedly and improve it after each run.
- Data tasks are often the critical path, so use mock-measured timings.

## Frequently asked questions

### What is a cutover plan in SAP?

A cutover plan is the step-by-step, timed runbook for switching from the old system to the new one. It covers the transaction freeze, final data loads, the sequence of tasks with owners and durations, reconciliation checkpoints, go or no-go criteria, and a rollback path.

### What is a final delta load at cutover?

It is the last extract and load of data that changed since your previous load, performed after the ECC transaction freeze. It ensures the target system reflects the true final state of the business rather than a snapshot taken days or weeks earlier.

### Why rehearse the cutover plan?

Because a written plan that has never been run is a theory. A mock cutover reveals the tasks that take longer than estimated, the dependencies nobody noticed, and the steps with unrealistic assumptions. Each rehearsal makes the runbook more accurate and the real night calmer.

### What should go or no-go criteria look like?

They should be defined pass and fail conditions agreed in advance, such as reconciliation matching within agreed tolerances, rather than judgement calls made under pressure during the cutover night. Defined criteria make the decision defensible and quick.
