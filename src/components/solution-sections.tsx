"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Award, Layers, Link2, Users, Shield } from "lucide-react";
import Link from "next/link";
import type {
  BeforeAfterContent,
  HowItWorksContent,
  EntitiesContent,
  PoweredByContent,
  RelatedSolutionsContent,
} from "@/lib/mdm-content";
import type { CustomerProofContent } from "@/lib/dqg-content";
import type { ByRegulationContent } from "@/lib/compliance-content";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

/* ------------------------------------------------------------------ */
/*  Section: Before / After Table                                      */
/* ------------------------------------------------------------------ */

export function SolutionBeforeAfter({ content }: { content: BeforeAfterContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Award className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </motion.div>

        <motion.div {...FADE_UP} className="grid md:grid-cols-2 gap-6">
          {/* Before table */}
          <div>
            <h3 className="text-sm font-bold text-red-400 mb-3">{content.before.label}</h3>
            <div className="rounded-xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-light">
                    {content.before.columns.map((column) => (
                      <th key={column} className="text-left px-4 py-3 text-xs font-bold text-white tracking-wider uppercase">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.before.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-gray-300 text-xs">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* After table */}
          <div>
            <h3 className="text-sm font-bold text-emerald-400 mb-3">{content.after.label}</h3>
            <div className="rounded-xl overflow-hidden border border-white/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-light">
                    {content.after.columns.map((column) => (
                      <th key={column} className="text-left px-4 py-3 text-xs font-bold text-white tracking-wider uppercase">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.after.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}>
                      {row.cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-4 py-3 text-xs ${
                            cellIndex === content.after.matchColumnIndex
                              ? "font-extrabold text-emerald-400"
                              : "text-gray-300"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">{content.footnote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: How It Works (flow steps)                                 */
/* ------------------------------------------------------------------ */

export function SolutionHowItWorks({ content }: { content: HowItWorksContent }) {
  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Zap className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {content.steps.map((flowStep, index) => (
            <motion.div
              key={flowStep.step}
              {...FADE_UP}
              transition={{ delay: index * 0.08 }}
              className="rounded-xl bg-surface border border-white/5 p-5 text-center"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                {flowStep.step}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{flowStep.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{flowStep.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Entities strip                                            */
/* ------------------------------------------------------------------ */

export function SolutionEntities({ content }: { content: EntitiesContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Layers className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </motion.div>
        <motion.div {...FADE_UP} className="flex flex-wrap gap-3 justify-center">
          {content.entities.map((entity) => (
            <span
              key={entity}
              className="px-5 py-2.5 rounded-lg bg-surface border border-white/5 text-sm font-semibold text-gray-300"
            >
              {entity}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Powered By (links to platform pages)                      */
/* ------------------------------------------------------------------ */

export function SolutionPoweredBy({ content }: { content: PoweredByContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 mt-3">{content.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {content.links.map((platformLink, index) => (
            <motion.div key={platformLink.href} {...FADE_UP} transition={{ delay: index * 0.08 }}>
              <Link
                href={platformLink.href}
                className="group block rounded-xl bg-surface border border-white/5 p-5 hover:border-violet-500/30 transition-all"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                  {platformLink.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">{platformLink.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Related Solutions                                         */
/* ------------------------------------------------------------------ */

export function SolutionRelatedSolutions({ content }: { content: RelatedSolutionsContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Link2 className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {content.items.map((solution, index) => (
            <motion.div key={solution.href} {...FADE_UP} transition={{ delay: index * 0.08 }}>
              <Link
                href={solution.href}
                className="group block rounded-xl bg-surface border border-white/5 p-5 hover:border-violet-500/30 transition-all"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                  {solution.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">{solution.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Customer Proof (names + descriptions, no stats)           */
/* ------------------------------------------------------------------ */

export function SolutionCustomerProof({ content }: { content: CustomerProofContent }) {
  return (
    <section id="proof" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Users className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {content.customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              {...FADE_UP}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-surface border border-white/5 p-6"
            >
              <h3 className="text-base font-bold text-white mb-2">{customer.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{customer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: By Regulation (GDPR / HIPAA / SOX anchors)                */
/* ------------------------------------------------------------------ */

export function SolutionByRegulation({ content }: { content: ByRegulationContent }) {
  return (
    <section id="byreg" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-4 border border-orange-500/20">
            <Shield className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-4">
            Jump to the regulation you need:{" "}
            {content.cards.map((card, index) => (
              <span key={card.id}>
                {index > 0 && " · "}
                <a
                  href={`#${card.id}`}
                  className="text-violet-400 font-semibold hover:text-violet-300 transition-colors"
                >
                  {card.regulation}
                </a>
              </span>
            ))}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {content.cards.map((card, index) => (
            <motion.div
              key={card.id}
              id={card.id}
              {...FADE_UP}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-surface border border-white/5 p-6 card-hover scroll-mt-24"
            >
              <div className="text-xs font-extrabold text-orange-400 tracking-wider mb-2">
                {card.regulation}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
              {card.requiresText ? (
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="font-semibold text-gray-300">What the regulation requires: </span>
                    {card.requiresText}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <span className="font-semibold text-gray-300">How deKorvai helps: </span>
                    {card.helpsText}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-gray-400 leading-relaxed">{card.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
