import {
  CASE_STUDIES,
  CASE_STUDIES_LISTING,
  CASE_STUDIES_SITE,
  CASE_STUDY_IMAGE_SIZE,
  CASE_STUDY_PAGE as P,
  type CaseStudy,
} from "@/lib/case-studies-content";
import {
  CaseStudyBand,
  CaseStudyBreadcrumb,
  CaseStudyCard,
  CaseStudyTags,
} from "./case-study-sections";
import CaseStudyToc from "./CaseStudyToc";

const BLOCK = "scroll-mt-28 border-b border-white/10 pb-11 mb-11 last:border-b-0 last:mb-0";
const H2 = "mb-3.5 text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl";

function TickList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3.5">
      {items.map((item) => (
        <li key={item} className="relative py-2.5 pl-8 text-[16.5px] leading-relaxed text-gray-300">
          <span
            aria-hidden="true"
            className="absolute left-1 top-[1.15rem] h-[3px] w-3.5 rounded bg-gradient-to-r from-blue-500 to-violet-500"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** One case study page: hero, key results, sections with an "On this page" rail. */
export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const related = CASE_STUDIES.filter((s) => s.slug !== study.slug);
  const facts = [
    { label: P.factLabels.industry, value: study.industry },
    { label: P.factLabels.solution, value: study.solution },
    { label: P.factLabels.objective, value: study.objective },
  ];

  return (
    <main className="pt-28">
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <CaseStudyBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: CASE_STUDIES_LISTING.breadcrumb, href: "/case-studies" },
              { label: study.breadcrumb },
            ]}
          />
          <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <CaseStudyTags study={study} className="mb-4 text-sm" />
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance lg:text-[46px]">
                {study.title}
              </h1>
              <p className="mt-5 max-w-[60ch] text-lg text-gray-300">{study.lede}</p>
            </div>
            <div className="aspect-[3/2] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={study.image}
                alt=""
                width={CASE_STUDY_IMAGE_SIZE.width}
                height={CASE_STUDY_IMAGE_SIZE.height}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <dl
          aria-label={P.resultsAriaLabel}
          className="grid grid-cols-2 border-y border-white/10 bg-gradient-to-b from-violet-500/5 to-transparent lg:grid-cols-4"
        >
          {study.results.map((r, i) => (
            <div
              key={r.label}
              className={`flex flex-col-reverse justify-end px-6 py-7 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="mt-2 max-w-[22ch] text-sm text-gray-300">{r.label}</dt>
              <dd className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent lg:text-4xl">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-7 pt-16 pb-6 lg:grid-cols-[240px_1fr] lg:gap-16">
          <CaseStudyToc shareUrl={`${CASE_STUDIES_SITE}/case-studies/${study.slug}`} />
          <article className="max-w-[760px] text-[17px] leading-relaxed">
            <div id="glance" className={BLOCK}>
              <div className="rounded-xl border border-white/10 border-l-[3px] border-l-accent bg-surface px-6 py-5">
                <strong className="mb-1.5 block text-sm text-accent-light">{P.glanceLabel}</strong>
                <p className="text-gray-100">{study.glance}</p>
              </div>
            </div>

            <div id="client" className={BLOCK}>
              <h2 className={H2}>{P.clientTitle}</h2>
              <p className="text-gray-300">{study.clientAbout}</p>
              <dl className="mt-4">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="grid gap-0.5 border-t border-white/10 py-3 text-[15.5px] sm:grid-cols-[140px_1fr] sm:gap-4"
                  >
                    <dt className="font-semibold text-white">{f.label}</dt>
                    <dd className="text-gray-300">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div id="challenge" className={BLOCK}>
              <h2 className={H2}>{P.challengeTitle}</h2>
              <TickList items={study.challenges} />
            </div>

            <div id="solution" className={BLOCK}>
              <h2 className={H2}>{P.solutionTitle}</h2>
              <span className="mt-1 mb-1.5 inline-block rounded-lg border border-accent/40 bg-accent/15 px-3 py-1.5 text-[15px] font-bold text-white">
                {study.solutionModule}
              </span>
              <TickList items={study.solutionPoints} />
            </div>

            <div id="how" className={BLOCK}>
              <h2 className={H2}>{study.howTitle}</h2>
              <ol className="mt-4 grid gap-3.5">
                {study.steps.map((step, i) => (
                  <li
                    key={step.title}
                    className="grid grid-cols-[42px_1fr] items-start gap-4 rounded-xl border border-white/10 bg-surface px-4.5 py-4"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-accent text-[15px] font-extrabold text-white"
                    >
                      {i + 1}
                    </span>
                    <span>
                      <b className="block text-base text-white">{step.title}</b>
                      <span className="text-[15px] text-gray-300">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div id="results" className={BLOCK}>
              <h2 className={H2}>{P.resultsTitle}</h2>
              <p className="text-gray-300">{study.resultsText}</p>
            </div>

            <div id="faq" className={BLOCK}>
              <h2 className={H2}>{P.faqTitle}</h2>
              {study.faq.map((item) => (
                <details key={item.question} className="group border-t border-white/10 last:border-b">
                  <summary className="relative cursor-pointer list-none py-4.5 pr-10 text-[17px] font-semibold text-white [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="absolute right-1.5 top-1/2 h-[11px] w-[11px] -translate-y-[70%] rotate-45 border-r-2 border-b-2 border-accent-light transition-transform group-open:-translate-y-[30%] group-open:-rotate-[135deg]"
                    />
                  </summary>
                  <p className="pb-5 text-gray-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>
        </div>
      </div>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className={`${H2} mb-6`}>{P.relatedTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {related.map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyBand title={P.bandTitle} text={P.bandText} cta={P.bandCta} />
    </main>
  );
}
