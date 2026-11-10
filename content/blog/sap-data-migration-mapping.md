---
title: "SAP Data Migration Mapping: The Decisions Business Teams Make"
excerpt: "SAP data migration mapping translates ECC company codes, plants, sales and purchasing organisations and account groups to S/4HANA. Why the Migration Cockpit makes mapping a gate, and which decisions the business owns."
metaTitle: "SAP Data Migration Mapping: The Decisions Business Teams Make"
metaDescription: "SAP data migration mapping translates ECC company codes, plants, sales and purchasing organisations and account groups to S/4HANA. Why the Migration Cockpit makes mapping a gate, and which decisions the business owns."
tag: "SAP S/4HANA Migration"
author: "Prakash Palani"
slug: "sap-data-migration-mapping"
---

**The short answer.** SAP data migration mapping connects how data is described in ECC to how S/4HANA expects it: old company codes, plants, sales organisations, account groups and other values translated to their new equivalents. The Migration Cockpit asks for these value mappings to be confirmed before data migrates. Most mapping decisions look technical but are business choices, so the people who own the data should agree them, because one wrong mapping can misroute thousands of records.

Mapping is the least glamorous part of a migration and one of the most consequential. It is where a redesigned organisation meets years of existing data, and every record that refers to an old structure has to find its place in the new one. Here is what mapping involves and which decisions belong to the business.

## What gets mapped

Mapping happens at two levels. Field mapping connects where a piece of information sits in the source to where it belongs in the target. Value mapping translates the values themselves: an old code to a new code, an old category to a new one. Field mapping is largely technical and stable. Value mapping is where business decisions concentrate, because it reflects how the organisation is structured in the new system.

## The decisions business teams make

| What is mapped | Example decision | Usually decided by |
| --- | --- | --- |
| Company codes | Two legal entities consolidated into one | Finance leadership |
| Plants and storage locations | An old storage location assigned to a new plant | Supply chain |
| Sales organisations and areas | Regional sales structures redesigned | Sales leadership |
| Purchasing organisations and groups | Purchasing centralised | Procurement |
| Account groups and Business Partner roles | How customers and suppliers are classified | Master data owners |
| Reconciliation accounts | Which receivables or payables account applies | Finance |

## Mapping in the Migration Cockpit

> The Cockpit will not migrate until mappings are confirmed, which makes mapping a gate, not a detail.

When data is loaded through the SAP S/4HANA Migration Cockpit, value mappings must be confirmed before records migrate: the Cockpit proposes mappings for the values it finds and asks for them to be reviewed and confirmed. That step is easy to treat as a technical formality and confirm in bulk. It is better treated as a business check, because a confirmed mapping is applied to every record carrying that value.

## Why one row matters

A mapping table is short, but each row can affect a large share of the data. Mapping an old storage location to the wrong plant moves every material stocked there. Mapping a sales organisation incorrectly misroutes every customer order in it. Because errors multiply, mapping tables deserve the same scrutiny as financial figures: reviewed by the owner, tested on real data, and changed only through an agreed process.

## Watch for unmapped values

Source data almost always contains values nobody expected: an obsolete plant code still referenced on a few records, a sales area that was closed years ago, a typo that became a value. These surface when mapping is tested against a full extract. Each one needs a decision: map it, correct the source records, or leave the records behind. Deciding early avoids a last-minute scramble when they block a load.

## Keep a mapping record

Every value mapping should be documented with who agreed it and when. That record answers the questions that inevitably come later, from users asking why their data moved, and from auditors asking how the new structure relates to the old one. It also makes it straightforward to apply the same mapping in later waves or rollouts.

## Test mappings on full data

Mappings should be tested on a complete extract during early mock migrations, not on a sample. Full data surfaces the rare values and edge cases a sample misses, and comparing record counts per mapped value before and after transformation confirms nothing was lost or doubled. Business owners can then review a summary, such as how many records moved from each old plant to each new one, which is far easier to sanity-check than the mapping table on its own.

## Control changes late in the project

Mappings tend to change as the organisational design is refined, sometimes late in the programme. Each change ripples through every object that uses the value. A simple change process, with the owner approving, the change logged, and the next mock migration used to verify the effect, keeps late changes from introducing errors at cutover.

## Mapping across waves

Programmes that migrate in waves, by region or entity, reuse most mappings across waves but add new values each time. Keeping a single, versioned mapping record means each wave starts from what was already agreed rather than rediscovering it, and differences between waves are deliberate rather than accidental. It also helps the business see the whole organisational design emerging wave by wave.

## Common mapping mistakes

- Confirming Cockpit mappings in bulk without business review.
- Mapping on a sample and missing rare values in the full data.
- Letting mappings change informally late in the programme.
- Mapping duplicates separately instead of resolving them first.

## Give every mapping an owner

Every mapping table should have a named business owner who approves its contents and any changes. Without one, mappings drift as different people make small adjustments, and nobody can say which version is correct. With one, a question about a mapping has a clear answer and a clear person to ask.

## Reconcile by mapped value

After each mock migration, counting records per mapped value, for example how many materials moved from each old storage location to each new plant, gives owners a simple way to confirm the mapping behaved as intended.

Treated with this level of care, mapping stops being a hidden source of risk and becomes one of the most visible, reviewable parts of the migration, with each decision traceable to the person who made it and the reason they made it.

Above all, involve the people who will live with the new structures, because they are the ones who will spot a mapping that looks right on paper but does not match how the business actually works.

## How deKorvai helps

deKorvai applies mapping as transformation rules in its migration flows, documented for company code, purchasing organisation, reconciliation account, account group and Business Partner role, and for plant, storage location and sales area. Rules are defined once and applied identically on every mock migration and at cutover, AI-enabled transformation rules make mapping easier to set up, and profiling against the target settings flags records whose values do not fit, before they reach the Migration Cockpit.

## Key takeaways

- Value mapping is where business decisions live, not field mapping.
- The Cockpit requires mappings confirmed before records migrate.
- One wrong row can misroute thousands of records.
- Document every mapping with who agreed it and when.

## SAP migration mapping, answered

### What is data mapping in an SAP migration?

Connecting how data is described in ECC to how S/4HANA expects it. Field mapping connects where information sits; value mapping translates values such as old company codes, plants or sales organisations to their new equivalents.

### Who should decide SAP migration mappings?

The business owners of each structure: finance for company codes and reconciliation accounts, supply chain for plants and storage locations, sales for sales organisations, procurement for purchasing organisations, master data owners for account groups and roles.

### Does the Migration Cockpit require mapping confirmation?

Yes. Value mappings must be reviewed and confirmed before records migrate. Because a confirmed mapping applies to every record carrying that value, it is best treated as a business check rather than a bulk formality.

### What are unmapped values in a migration?

Values in the source data nobody planned for, such as obsolete codes still on a few records or typos that became values. Each needs a decision: map it, correct the source records, or leave the records behind.
