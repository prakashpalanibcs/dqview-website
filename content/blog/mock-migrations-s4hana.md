---
title: "Mock Migrations: Why Two Dress Rehearsals Beat One Go-Live"
excerpt: "A mock migration rehearses the full extract, transform, load sequence before cutover. Why two full-volume runs are the minimum, what to measure, and how the cutover window constrains everything."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "mock-migrations-s4hana"
---

**The short answer.** A mock migration is a full rehearsal of the extract, transform, and load sequence against a copy of the target, run before the real cutover. Practitioner guidance is consistent: run at least two, using the full production data volume rather than a sample, because volume-dependent problems only appear at full scale. Mock one finds the defects, mock two confirms they are closed. You measure elapsed time against your cutover window and reconcile every run. A migration that reaches cutover without full mock runs is operating on hope rather than evidence.

Nobody wants to perform a migration correctly for the first time on go-live weekend. Mock migrations are how you avoid that, and they are the single most reliable way to turn a risky cutover into a predictable one. Here is what they involve and why two is the working minimum.

## What a mock migration is

A mock migration, sometimes called a dress rehearsal or test cutover, is a complete run-through of the migration: extracting data from ECC, transforming it, loading it into a copy of the target, and reconciling the result, exactly as you would at cutover. It is not a component test or a sample load. The point is to rehearse the whole sequence, in order, under realistic conditions, so that the real cutover is something the team has already done rather than something they are attempting.

## Why two mocks is the working minimum

> The first mock finds the problems. The second proves you fixed them. Skip either and the defects surface on cutover weekend instead.

Guidance from practitioners converges on a minimum of two full mock migrations, and the logic is sound. The first mock run almost always surfaces a crop of defects: objects that fail validation, mappings with gaps, sequencing problems, timing that runs longer than planned. That is the first mock doing its job. But finding defects is only half the value; you also need to prove they are closed, which is what the second run does. A programme that runs one mock has found its problems but not verified its fixes. Many teams run more than two, and a useful rule of thumb is that you keep going until the last run is boring.

## Use full production volume, not a sample

An important detail: mock migrations should run against the full production data set, not a representative sample. The reason is that a whole class of problems is volume-dependent and simply does not appear at small scale. Load performance, timing, memory behaviour, and errors that only trigger on certain records are invisible when you load a fraction of the data. A mock that runs beautifully on a sample and then fails at full volume on cutover weekend has taught you nothing useful. If your environment makes full-volume mocks difficult, that difficulty is itself a finding worth escalating.

## What to measure in each mock

- **Elapsed time per phase.** How long each load phase actually takes, measured against your available cutover window. If the rehearsal consumes most of the window, you have no margin for incident response.
- **Error and rejection rates.** How many records failed, on which objects, and why, so you can drive the first-pass rate up between runs.
- **Reconciliation results.** Whether the loaded data ties back to the source, domain by domain.
- **Defect closure.** Whether issues found in the previous mock are genuinely resolved, not just logged.

## The cutover window is the constraint

One of the most valuable things a mock migration tells you is whether your cutover will physically fit in the time available. Cutover windows are typically a weekend, and every hour of the load has to fit inside it alongside the other cutover activities and some buffer for things going wrong. If your mock runs take nearly the whole window, you are heading for trouble, and you have found that out with time to act: reduce data volume, optimise the load, or extend the window. Discovering it on the night is the alternative, and it is a bad one.

## Mocks need a repeatable process

Mock migrations only deliver their value if each run is consistent with the last. If extraction is ad-hoc, or transformation rules change informally between runs, you cannot tell whether an improvement came from your fixes or from a different process. Rule-based, repeatable extraction and transformation are what make mocks comparable, so that improvement between run one and run two is real and measurable. This is a practical argument for running the data pipeline as one defined flow rather than as a series of manual steps that someone reassembles each time.

## Mock in a production-mirror environment

Where you run the mock matters as much as how. A mock in an environment that differs meaningfully from production, smaller hardware, different configuration, partial data, gives results you cannot trust for planning. The closer the mock environment mirrors production, the more reliable the timings and the more likely you are to surface the problems that will actually occur. This is not always easy to arrange, and it costs something, but the alternative is planning your cutover on numbers that do not apply. If a production-mirror environment is genuinely unavailable, be explicit about that limitation in your planning rather than treating the mock timings as reliable, and build in more buffer accordingly.

## Each mock should produce documented learning

A mock migration that runs and is not analysed has wasted most of its value. Each run should produce a documented record: what failed and why, how long each phase took, what the reconciliation showed, and what will change before the next run. This record is what makes improvement measurable across cycles and what feeds the cutover runbook with realistic timings. It also protects the team from repeating discoveries, because the reason something was changed is written down. By the final mock, this accumulated record is effectively your cutover plan, tested and annotated, which is a far stronger position than a document written from assumptions.

## How deKorvai helps

deKorvai is built for the repeatability that mock migrations depend on. Extraction is rule-based, so each run pulls the same data the same way. Profiling, validation, transformation, and reconciliation run as one defined flow, so every mock is consistent and the results are comparable between runs. Because reconciliation is built in, each mock produces the evidence of whether the data tied back, not just whether the load completed. deKorvai also supports the simulation and mock runs that precede cutover, which is exactly the rehearsal pattern this article describes. The result is that improvement across mock cycles is measurable, and cutover becomes a repeat of something already proven.

## Key takeaways

- A mock migration rehearses the full sequence, not a component or a sample.
- Two is the working minimum: one finds defects, the second proves they are closed.
- Use full production volume, because many problems only appear at scale.
- Measure elapsed time against your cutover window, and reconcile every run.

## Frequently asked questions

### What is a mock migration?

A mock migration, or dress rehearsal, is a complete run-through of the migration sequence, extracting from ECC, transforming, loading into a copy of the target, and reconciling, performed before the real cutover so the team rehearses the whole process under realistic conditions.

### How many mock migrations should you run?

At least two is the widely recommended minimum. The first surfaces defects such as failed validations, mapping gaps, and timing problems; the second proves those defects are closed. Many teams run more, continuing until a run completes without material issues.

### Should mock migrations use full production data?

Yes. Running against a sample misses volume-dependent problems such as load performance, timing, and errors that only trigger on certain records. A mock that succeeds on a sample but fails at full volume during cutover has not served its purpose.

### What should you measure during a mock migration?

Elapsed time per load phase against your available cutover window, error and rejection rates by object, reconciliation results domain by domain, and whether defects from the previous mock are genuinely closed. Timing against the window is especially important.
