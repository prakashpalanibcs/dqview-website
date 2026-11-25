"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CASE_STUDIES,
  CASE_STUDIES_LISTING as L,
  DEMO_HREF,
  type CaseStudyFilter,
} from "@/lib/case-studies-content";
import { CaseStudyBand, CaseStudyBreadcrumb, CaseStudyCard } from "./case-study-sections";

/** The /case-studies page: hero, filter chips, card grid and closing band. */
export default function CaseStudiesListing() {
  const [active, setActive] = useState<CaseStudyFilter | "all">("all");

  return (
    <main className="pt-28">
      <section className="relative overflow-hidden pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -right-24 h-[620px] w-[760px] bg-[radial-gradient(closest-side,rgba(139,92,246,0.22),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-6">
          <CaseStudyBreadcrumb items={[{ label: "Home", href: "/" }, { label: L.breadcrumb }]} />
          <h1 className="mt-6 max-w-[16ch] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {L.title}
          </h1>
          <p className="mt-5 max-w-[60ch] text-lg text-gray-300">{L.lede}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={DEMO_HREF}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-400 hover:to-violet-400"
            >
              {L.primaryCta}
            </Link>
            <a
              href="#all"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-gray-300 transition-colors hover:border-white/30 hover:text-white"
            >
              {L.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section id="all" className="scroll-mt-28 pb-20 pt-2">
        <div className="mx-auto max-w-7xl px-6">
          <div role="group" aria-label={L.filterGroupLabel} className="mb-8 flex flex-wrap gap-2.5">
            {L.filters.map((f) => {
              const pressed = active === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => setActive(f.key)}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light ${
                    pressed
                      ? "border-accent bg-accent/15 text-white"
                      : "border-white/10 bg-surface text-gray-300 hover:text-white hover:border-white/25"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                hidden={active !== "all" && study.filter !== active}
              />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyBand title={L.bandTitle} text={L.bandText} cta={L.bandCta} />
    </main>
  );
}
