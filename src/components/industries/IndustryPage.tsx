"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import {
  PlatformProblems,
  PlatformCTA,
} from "@/components/platform-sections";
import {
  SolutionRelatedSolutions,
  SolutionCustomerProof,
} from "@/components/solution-sections";
import type { IndustryPageContent } from "@/lib/industry-content";

const CALENDLY_URL =
  "https://calendly.com/gokulprasad-s-businesscoresolutions/30min";

/* ------------------------------------------------------------------ */
/*  Industry Hero (simpler — no ledger, no rating)                     */
/* ------------------------------------------------------------------ */

function IndustryHero({ content }: { content: IndustryPageContent["hero"] }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-blue-600 top-1/4 left-1/4 animate-pulse-glow" />
      <div
        className="hero-glow bg-violet-600 bottom-1/4 right-1/4 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-violet-300 font-bold tracking-[0.18em] uppercase mb-4"
        >
          {content.kick}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-200 text-xs font-semibold mb-6"
        >
          {content.badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl mb-5"
        >
          {content.title}
          <span className="gradient-text">{content.titleHighlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed"
        >
          {content.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-2xl shadow-blue-500/25"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#solutions"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Play className="w-4 h-4" />
            Relevant Solutions
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Industry Page (data-driven — used by all 3 industries)             */
/* ------------------------------------------------------------------ */

export default function IndustryPage({ content }: { content: IndustryPageContent }) {
  return (
    <>
      <IndustryHero content={content.hero} />
      <PlatformProblems content={content.challenge} />
      <SolutionCustomerProof content={content.proof} />
      <div id="solutions">
        <SolutionRelatedSolutions content={content.solutions} />
      </div>
      <PlatformCTA content={content.cta} />
    </>
  );
}
