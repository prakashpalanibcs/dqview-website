---
title: "Data Masking Tools: How to Compare Them, Including for SAP"
excerpt: "Data masking tools replace sensitive values with realistic ones for safe testing. Static vs dynamic masking, the criteria that matter, the SAP questions most lists skip, and how to build a shortlist."
metaTitle: "Data Masking Tools: How to Compare Them, Including for SAP"
metaDescription: "Data masking tools replace sensitive values with realistic ones for safe testing. Static vs dynamic masking, the criteria that matter, the SAP questions most lists skip, and how to build a shortlist."
tag: "Data Masking"
author: "Prakash Palani"
slug: "data-masking-tools"
---

**The short answer.** Data masking tools replace sensitive values with realistic but fictitious ones so data can be used safely for testing, development, training or sharing. They split into two kinds: static masking, which creates a permanently masked copy for non-production use, and dynamic masking, which hides values at query time based on who is asking while the stored data stays unchanged. When comparing tools, the points that matter most are whether masked data stays realistic, whether referential integrity survives across tables and systems, which sources are covered, and whether the tool handles SAP, which many lists overlook.

Most comparisons of data masking tools are long ranked lists, often written by vendors placing themselves first. A more useful approach is to know what you need first, then judge tools against it. Here is how to do that, including the questions specific to SAP landscapes.

## What data masking tools do

Data masking tools take data containing sensitive information, such as names, addresses, bank details, salaries or health information, and replace those values with alternatives that look and behave like real data but reveal nothing about real people or businesses. The point is to keep data useful for testing, development, analytics and training while removing the privacy and security risk of exposing the originals.

## Static and dynamic masking

| | Static masking | Dynamic masking |
| --- | --- | --- |
| What it does | Creates a permanently masked copy of the data | Hides values at query time based on the user's role |
| Stored data | The copy is changed | Unchanged |
| Typical use | Test, development and training environments | Restricting what users see in a live system |
| Protects against | Exposure through non-production copies | Over-broad access to live data |

For the common problem of production data being copied into test systems, static masking is usually the relevant kind, because the masked copy is what reaches the less controlled environment.

## What to compare

> The question is not which tool ranks first. It is which tool keeps your data both safe and usable.

- **Realism.** Masked data should keep the format, structure and plausibility of the original, so tests behave as they would on real data.
- **Referential integrity.** The same original value must be masked the same way everywhere it appears, across tables and systems, or relationships break.
- **Coverage.** Which databases, applications and file formats can the tool reach?
- **Masking methods.** Shuffling, substitution, character replacement, constant values and format-preserving methods suit different fields.
- **Repeatability.** Non-production systems are refreshed often; masking has to run every time.
- **Validation.** Can you test the result before committing it?
- **Compliance fit.** Support for the regulations you work under, such as GDPR or HIPAA.

## The SAP question most lists skip

Many data masking tool comparisons focus on general-purpose databases. SAP landscapes raise specific questions those lists rarely cover. Sensitive data in SAP sits in business objects such as Business Partners, employee and payroll records and bank details, spread across many related tables. A tool that masks a customer name in one table but not in the related sales, billing and finance records leaves both exposure and broken processes. And SAP rarely stands alone: the same customer or supplier usually also exists in connected non-SAP systems, which must be masked consistently for end-to-end testing to work. If SAP is part of your landscape, ask every vendor how they handle SAP business objects and cross-system consistency, specifically.

## Common evaluation mistakes

- **Testing on a clean sample.** Evaluate on a real, messy slice of your own data.
- **Ignoring integrity.** A tool that masks fields well but breaks relationships will fail in testing.
- **Masking too little.** Free-text fields and notes often contain personal data that structured masking misses.
- **Treating it as one-off.** Masking that is not part of every refresh soon stops protecting anything.

## Masking and anonymisation

Masking and anonymisation are related but not identical. Anonymisation aims to make data impossible to link back to an individual, which has a specific legal meaning under regulations such as GDPR. Masking for test environments is a practical control that greatly reduces exposure, but whether a particular masked dataset meets a legal anonymisation standard depends on the method and context, and is worth confirming with your privacy or legal team.

## How to build a shortlist

Start by listing the systems that hold sensitive data and feed non-production environments, the fields that must be protected, and the tests that must still pass afterwards. That list becomes your evaluation criteria. Narrow the field to tools that genuinely cover your systems, then run a short proof of concept on a representative, messy slice of your own data. Measure three things: whether sensitive values are fully replaced, whether end-to-end test scenarios still run, and how long a full refresh with masking takes. Those three results say more than any feature matrix.

## Who should be involved

Masking decisions touch several teams. Privacy or compliance defines what must be protected, testers define what must still work, and the system owners know where the data actually sits. Involving all three in the evaluation avoids choosing a tool that satisfies one group and frustrates the others.

## Plan for the refresh cycle

Masking is not a one-off project. Test systems are refreshed from production regularly, and each refresh brings unprotected data back unless masking runs as part of it. When evaluating tools, ask how masking fits into your refresh process: whether it can run automatically, how long it takes on a full dataset, and whether the same rules apply every time. A tool that masks well once but is hard to repeat will leave environments exposed for most of their life.

Finally, check what happens to data that is not in structured fields. Comments, notes and attachments often contain names, phone numbers or account details typed in freely. Ask how each tool handles them, because masking the structured fields while leaving the same details in a notes field protects much less than it appears to.

## How deKorvai helps

deKorvai's scrambling engine is a form of static data masking built for SAP and non-SAP landscapes. It offers scrambling functions including scramble, shuffle, reverse, constant, constant mapping, character set and bank scrambling, with field-level control and predefined profiles for customer master, vendor master, Business Partner, employee, payroll and bank and IBAN details. It applies consistent scrambling logic across multiple databases to preserve referential and functional integrity, runs in parallel at scale, and includes a test mode to validate results before committing. Its scrambling is documented as GDPR, HIPAA and SOX compliant.

## Key takeaways

- Static masking protects non-production copies; dynamic masking restricts live views.
- Compare on realism, integrity, coverage and repeatability, not rankings.
- SAP needs specific questions: business objects and cross-system consistency.
- Evaluate on your own messy data, not a clean sample.

## Data masking tools, answered

### What do data masking tools do?

They replace sensitive values such as names, bank details or salaries with realistic but fictitious ones, so data can be used for testing, development, training or sharing without exposing real people or businesses.

### What is the difference between static and dynamic data masking?

Static masking creates a permanently masked copy of the data, typically for test and development environments. Dynamic masking hides values at query time based on the user's role, leaving the stored data unchanged.

### What should I compare when choosing a data masking tool?

Realism of masked data, referential integrity across tables and systems, coverage of your sources, the masking methods available, repeatability on every refresh, the ability to validate results first, and compliance fit.

### What should SAP users ask data masking vendors?

How the tool handles SAP business objects such as Business Partners, employee and bank data spread across related tables, and how it keeps masking consistent between SAP and connected non-SAP systems.
