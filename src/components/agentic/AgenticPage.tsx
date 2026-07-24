"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Cpu, Clock } from "lucide-react";
import {
  PlatformAnswerFirst,
  PlatformProblems,
  PlatformFeatures,
  PlatformWorkflows,
  PlatformBenefits,
  PlatformUseCases,
  PlatformShift,
  PlatformArchitecture,
  PlatformFAQ,
  PlatformRelatedPages,
  PlatformCTA,
} from "@/components/platform-sections";
import {
  AGENTIC_HERO,
  AGENTIC_ANSWER_FIRST,
  AGENTIC_PROBLEMS,
  AGENTIC_FEATURES,
  AGENTIC_WORKFLOWS,
  AGENTIC_AGENTS,
  AGENTIC_BENEFITS,
  AGENTIC_USE_CASES,
  AGENTIC_ROADMAP,
  AGENTIC_SHIFT,
  AGENTIC_ARCHITECTURE,
  AGENTIC_FAQ,
  AGENTIC_RELATED,
  AGENTIC_CTA,
} from "@/lib/agentic-content";

const CALENDLY_URL =
  "https://calendly.com/gokulprasad-s-businesscoresolutions/30min";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

/* -- Chat-Style Hero (unique to Agentic page) ---------------------- */
function AgenticHero() {
  const hero = AGENTIC_HERO;
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-blue-600 top-1/4 left-1/4 animate-pulse-glow" />
      <div className="hero-glow bg-violet-600 bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-xs text-violet-300 font-bold tracking-[0.18em] uppercase mb-4">{hero.kick}</motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-200 text-xs font-semibold mb-6">{hero.badge}</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl mb-5">
          {hero.title}<span className="gradient-text">{hero.titleHighlight}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed">{hero.subtitle}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-5">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-2xl shadow-blue-500/25">
            Book a Demo<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
          <a href="#how" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all">
            <Play className="w-4 h-4" />See How It Works</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="flex items-center gap-1.5 text-sm text-amber-200/70 mb-10">
          {[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />))}
          <span className="ml-1">{hero.rating}</span>
        </motion.div>

        {/* Chat-Style Ledger */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}
          className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 max-w-3xl">
          <div className="flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-gray-500 mb-4">
            <span>deKorvai co-pilot</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />LIVE</span>
          </div>
          <div className="flex flex-col gap-3">
            {hero.chatMessages.map((msg, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: msg.role === "you" ? 20 : -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.3 }}
                className={`max-w-[85%] px-4 py-3 rounded-xl text-sm ${
                  msg.role === "you"
                    ? "bg-blue-500/15 text-blue-100 self-end rounded-br-sm"
                    : "bg-violet-500/15 text-violet-100 self-start rounded-bl-sm"
                }`}>
                <span className="text-[10px] tracking-[0.1em] uppercase opacity-60 block mb-1">
                  {msg.role === "you" ? "You" : "deKorvai Co-Pilot"}
                </span>
                {msg.text}
              </motion.div>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 text-center mt-4">
            natural-language prompt → generated rules → human approval → audit-logged
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -- Agents Section (unique 2-column) ------------------------------ */
function AgentsSection() {
  const agents = AGENTIC_AGENTS;
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Cpu className="w-3.5 h-3.5" />{agents.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {agents.title}<span className="gradient-text">{agents.titleHighlight}</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {agents.items.map((agent, index) => (
            <motion.div key={agent.title} {...FADE_UP} transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-surface border border-white/5 p-7">
              <h3 className="text-lg font-bold text-white mb-3">{agent.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{agent.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Roadmap Section (dashed cards with ROADMAP badge) -------------- */
function RoadmapSection() {
  const roadmap = AGENTIC_ROADMAP;
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-4 border border-orange-500/20">
            <Clock className="w-3.5 h-3.5" />{roadmap.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {roadmap.title}<span className="gradient-text">{roadmap.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{roadmap.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {roadmap.items.map((item, index) => (
            <motion.div key={item.title} {...FADE_UP} transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-surface/50 border border-dashed border-white/10 p-6 relative">
              <span className="absolute top-4 right-4 text-[9px] font-extrabold tracking-wider px-2 py-1 rounded-full bg-orange-500/15 text-orange-400">
                ROADMAP
              </span>
              <div className="text-sm font-extrabold text-violet-400 mb-2">→</div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Page Orchestrator --------------------------------------------- */
export default function AgenticPage() {
  return (
    <>
      <AgenticHero />
      <PlatformAnswerFirst content={AGENTIC_ANSWER_FIRST} />
      <PlatformProblems content={AGENTIC_PROBLEMS} />
      <PlatformFeatures content={AGENTIC_FEATURES} />
      <PlatformWorkflows content={AGENTIC_WORKFLOWS} />
      <AgentsSection />
      <PlatformBenefits content={AGENTIC_BENEFITS} />
      <PlatformUseCases content={AGENTIC_USE_CASES} />
      <RoadmapSection />
      <PlatformShift content={AGENTIC_SHIFT} />
      <PlatformArchitecture content={AGENTIC_ARCHITECTURE} />
      <PlatformFAQ content={AGENTIC_FAQ} />
      <PlatformRelatedPages content={AGENTIC_RELATED} />
      <PlatformCTA content={AGENTIC_CTA} />
    </>
  );
}
