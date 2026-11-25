import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CASE_STUDIES_LISTING,
  CASE_STUDY_IMAGE_SIZE,
  DEMO_HREF,
  type CaseStudy,
} from "@/lib/case-studies-content";

/* ------------------------------------------------------------------ */
/*  Shared pieces of the case study listing and detail pages           */
/* ------------------------------------------------------------------ */

export interface Crumb {
  label: string;
  href?: string;
}

export function CaseStudyBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-gray-600">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-gray-300">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CaseStudyTags({ study, className = "" }: { study: CaseStudy; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-x-3.5 gap-y-1.5 text-[13px] font-semibold ${className}`}>
      <span className="text-accent-light">{study.solutionTag}</span>
      <span className="text-gray-400">{study.industryTag}</span>
    </div>
  );
}

/** Card used on the listing grid and in "More case studies". */
export function CaseStudyCard({ study, hidden = false }: { study: CaseStudy; hidden?: boolean }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      hidden={hidden}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-[border-color,transform] duration-200 hover:border-accent/50 motion-safe:hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-light"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-[#0d0b20]">
        <img
          src={study.image}
          alt=""
          loading="lazy"
          width={CASE_STUDY_IMAGE_SIZE.width}
          height={CASE_STUDY_IMAGE_SIZE.height}
          className="h-full w-full object-cover"
        />
        {/* Dark wash behind the headline number so it stays readable on any photo. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,10,22,0.82)_0%,rgba(10,10,22,0.4)_35%,transparent_60%)]"
        />
        <div className="absolute left-5 top-4 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
          <span className="block text-3xl font-extrabold leading-none tracking-tight text-white">
            {study.metricValue}
          </span>
          <span className="mt-1 block max-w-[17ch] text-xs font-semibold text-gray-200">
            {study.metricLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <CaseStudyTags study={study} />
        <h3 className="mt-3 mb-2.5 text-lg font-bold leading-snug text-white text-balance">
          {study.title}
        </h3>
        <p className="flex-1 text-[15px] leading-relaxed text-gray-300">{study.cardSummary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-accent-light transition-colors">
          {CASE_STUDIES_LISTING.readMore}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/** Closing call-to-action band shared by both page types. */
export function CaseStudyBand({ title, text, cta }: { title: string; text: string; cta: string }) {
  return (
    <section className="border-t border-white/10 bg-[radial-gradient(800px_340px_at_50%_0%,rgba(109,91,240,0.22),transparent_65%)] py-20 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mx-auto max-w-[24ch] text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 mb-7 max-w-[56ch] text-gray-300">{text}</p>
        <Link
          href={DEMO_HREF}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-400 hover:to-violet-400"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}

/** Serialises a JSON-LD graph for a <script type="application/ld+json">. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
