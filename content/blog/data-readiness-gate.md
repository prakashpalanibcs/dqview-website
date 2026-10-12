---
title: "Data Readiness as a Go/No-Go Gate"
excerpt: "A readiness gate means the programme cannot proceed until data meets a measured standard. What a gate needs, why authority to hold it is the hard part, and where the gates sit in a migration."
metaDescription: "A readiness gate stops a programme until data meets a measured standard. What a gate needs, why authority is the hard part, and where gates sit."
tag: "SAP Migration"
author: "Prakash Palani"
slug: "data-readiness-gate"
---

**The short answer.** Data readiness as a gate means the programme cannot proceed past defined checkpoints until the data meets an agreed, measured standard. It replaces the common pattern where readiness is asserted in a status meeting with one where it is demonstrated with numbers. The ingredients are a standard per object, a measurement that tests it, a named owner who signs, and the authority to hold the gate when the answer is no.

Every migration has a moment where someone asks whether the data is ready and the honest answer is that nobody knows. A readiness gate exists to make that moment impossible, by deciding in advance what ready means and how it will be proven.

## The problem with readiness by assertion

In the absence of a gate, readiness tends to be reported rather than measured. A workstream lead says the data looks good, a steering committee accepts it, and the programme moves on. Nobody is being dishonest; they simply have impressions rather than evidence, and impressions are optimistic under schedule pressure. The failure shows up later, during a load or after go-live, when the data turns out not to have been ready and the cost of discovering it has multiplied. A gate converts an opinion into a test.

## What a gate needs

- **A standard per object.** What completeness, validity and uniqueness must this object reach, expressed specifically enough to test.
- **A measurement.** Profiling and rule-based validation that produce a number against that standard.
- **A threshold.** The level at which the gate passes, agreed in advance rather than negotiated at the gate.
- **An owner.** A named business person who signs, not a committee that nods.
- **Authority to hold.** A gate that cannot stop the programme is a checkpoint, not a gate.

## The last ingredient is the hard one

> A gate nobody is willing to close is just a slide in the steering pack.

Standards and measurement are straightforward to put in place. What makes a gate real is whether the organisation will accept a no. Under deadline pressure the temptation is to pass a gate conditionally, with remediation promised in parallel, and that conditional pass is where readiness quietly stops meaning anything. This is not an argument for rigidity: sometimes proceeding with a known, accepted exception is the right call. The distinction is between an exception that is explicit, owned and recorded, and a gate waved through because stopping was inconvenient.

## Where the gates sit

1. **Before scope is fixed.** Profiling results confirm the plan is realistic, or change it while change is cheap.
2. **Before each mock load.** Objects meet their standard before consuming a rehearsal cycle on data that was never going to load.
3. **Between mock cycles.** First-pass rates and defect closure are improving, which is evidence preparation is working.
4. **Before cutover.** The final gate, where reconciliation and business sign-off support the go or no-go decision.

## Gates make bad news early and cheap

The real value of a gate is not control for its own sake but the timing of discovery. A gate failure three months before cutover is a planning adjustment. The same problem found during cutover weekend is a crisis, and found after go-live it is a business incident. By forcing the question at points where the answer can still change the plan, gates move problems to where they are cheapest. Programmes that resist gates usually do so because they expect to fail them, which is precisely the situation gates exist to surface.

## Set thresholds by consequence

A gate needs a number, and choosing it badly undermines the whole mechanism. Thresholds set uniformly high produce gates permanently in breach, which trains everyone to treat them as advisory. Thresholds set to whatever the data currently achieves make the gate meaningless. The workable approach is to set them by consequence per object and per field: what completeness does this object need for the target to accept it and the process to work, what duplicate rate is tolerable, what reconciliation variance can be accepted. Numbers derived that way can be explained and defended, which is what makes people willing to enforce them.

## Make exceptions explicit

Gates work better when they allow for a documented exception than when they pretend none will be needed. Sometimes proceeding with a known shortfall is genuinely the right business call, because the risk is understood and the alternative is worse. What damages a gate is not the exception but the silent one: a pass granted informally with remediation assumed. Writing the exception down, naming who accepted the risk and what the remediation commitment is, keeps the gate honest and leaves a record that is useful afterwards, including when an auditor asks how readiness was determined.

## Gates work when the organisation wants to know

The mechanics of a gate are easy; the disposition behind it is what determines whether it functions. An organisation that genuinely wants to know the state of its data will use gates to surface problems early and treat a failure as useful information. One that would rather not know will find ways to pass gates regardless, because the gate is only as strong as the willingness to act on it. If you are introducing gates into a programme where bad news has historically been unwelcome, the gate alone will not change that, and it is worth being realistic about which problem you are actually solving.

## Keep the evidence from each gate

Each gate produces something worth retaining: the profiling results, the validation output against the standard, the reconciliation figures, and the record of who signed. Kept together, these form the readiness history of the programme, which is useful well beyond the gate itself. It supports the audit expectation that migration validation was performed and evidenced, it answers later questions about why a particular decision was taken, and it gives the next programme a realistic baseline instead of starting from assumptions again.

## How deKorvai helps

A gate is only as good as the evidence behind it. deKorvai profiles data to establish its actual condition, applies configurable business and technical rules so the standard becomes an objective test rather than a judgement, and reports results on real-time scorecards so readiness is visible rather than asserted. Across mock cycles it shows whether first-pass rates are improving, which is the evidence that preparation is working. Reconciliation against the source provides the artefact the final gate rests on, and full audit trails record what was measured, when and what was decided.

## Key takeaways

- Readiness by assertion fails late; a gate converts opinion into a test.
- A gate needs a standard, a measurement, a threshold, an owner and authority to hold.
- Authority is the hard part, because conditional passes drain the meaning out.
- Gates move discovery earlier, which is where problems are cheapest.

## Frequently asked questions

### What is a data readiness gate?

A checkpoint the programme cannot pass until the data meets an agreed, measured standard. It replaces readiness being asserted in a status meeting with readiness being demonstrated through profiling and rule-based validation against a defined threshold.

### What does a readiness gate need to work?

A standard per data object expressed specifically enough to test, a measurement that produces a number against it, a threshold agreed in advance, a named business owner who signs, and genuine authority to hold the gate when the answer is no.

### Why do readiness gates fail in practice?

Usually because of conditional passes. Under deadline pressure a gate is waved through with remediation promised in parallel, and once that happens readiness stops meaning anything. An explicit, owned and recorded exception is different from a gate skipped for convenience.

### Where should gates sit in a migration?

Before scope is fixed, so profiling can still change the plan; before each mock load, so rehearsals are not spent on data that cannot load; between mock cycles to show first-pass rates improving; and before cutover, where reconciliation supports the go or no-go decision.
