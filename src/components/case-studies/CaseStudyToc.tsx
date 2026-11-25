"use client";

import { useEffect, useState } from "react";
import { CASE_STUDY_PAGE as P } from "@/lib/case-studies-content";

/** "On this page" links. The section in the reading band is marked active. */
export default function CaseStudyToc({ shareUrl }: { shareUrl: string }) {
  const [active, setActive] = useState<string>(P.toc[0].id);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    P.toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <nav aria-label={P.tocTitle} className="hidden lg:block">
        <p className="mb-3 text-[13px] font-bold text-gray-400">{P.tocTitle}</p>
        {P.toc.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
            className={`block border-l-2 py-1.5 pl-3.5 text-sm leading-snug transition-colors hover:text-white ${
              active === id ? "border-accent text-white" : "border-white/10 text-gray-300"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-surface px-3.5 py-3 text-sm font-semibold text-white">
        {P.share}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          aria-label={P.shareAriaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
