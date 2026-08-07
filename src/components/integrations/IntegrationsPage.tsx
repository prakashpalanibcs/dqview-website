"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Plug, Clock, Layers } from "lucide-react";
import Link from "next/link";
import {
  PlatformAnswerFirst,
  PlatformFAQ,
  PlatformRelatedPages,
  PlatformCTA,
} from "@/components/platform-sections";
import {
  INTEGRATIONS_HERO,
  INTEGRATIONS_ANSWER_FIRST,
  INTEGRATIONS_SYSTEMS,
  INTEGRATIONS_PROTOCOLS,
  INTEGRATIONS_FORMATS,
  INTEGRATIONS_CAPABILITIES,
  INTEGRATIONS_GUIDES,
  INTEGRATIONS_FAQ,
  INTEGRATIONS_RELATED,
  INTEGRATIONS_CTA,
} from "@/lib/integrations-content";

const DEMO_URL =
  "/contact#book-a-demo";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

/* -- Hero with Connection Diagram ---------------------------------- */
function IntegrationsHero() {
  const hero = INTEGRATIONS_HERO;
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
          className="flex flex-col sm:flex-row gap-4 mb-10">
          <a href={DEMO_URL}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-2xl shadow-blue-500/25">
            Book a Demo<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
          <a href="#systems" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all">
            <Play className="w-4 h-4" />See Supported Systems</a>
        </motion.div>

        {/* Connection Diagram */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.7 }}
          className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-5 items-center max-w-4xl">
          <div className="flex flex-col gap-2">
            {hero.diagramSources.map((source) => (
              <div key={source} className="bg-white/[0.05] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-200 text-center">
                {source}
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-500 to-violet-500 rounded-2xl px-6 py-5 text-white font-extrabold text-base shadow-lg shadow-violet-500/30">
              deKorvai
              <span className="block text-[11px] font-semibold opacity-90 mt-1 tracking-wider">
                DQ · ETL · Masking · Agentic AI
              </span>
            </div>
            <div className="text-[11px] tracking-[0.08em] uppercase text-gray-500 mt-3">
              {hero.diagramProtocols}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {hero.diagramOutputs.map((output) => (
              <div key={output} className="bg-white/[0.05] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-200 text-center">
                {output}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -- Systems by Category ------------------------------------------- */
function SystemsSection() {
  const systems = INTEGRATIONS_SYSTEMS;
  return (
    <section id="systems" className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Plug className="w-3.5 h-3.5" />{systems.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {systems.title}<span className="gradient-text">{systems.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{systems.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {systems.categories.map((category, index) => (
            <motion.div key={category.title} {...FADE_UP} transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-surface border border-white/5 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.systems.map((system) => (
                  <span key={system} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-sm font-semibold text-gray-300">
                    {system}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Protocols Section --------------------------------------------- */
function ProtocolsSection() {
  const protocols = INTEGRATIONS_PROTOCOLS;
  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">{protocols.badge}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {protocols.title}<span className="gradient-text">{protocols.titleHighlight}</span>
          </h2>
          <p className="text-gray-400">{protocols.subtitle}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {protocols.items.map((protocol, index) => (
            <motion.div key={protocol.title} {...FADE_UP} transition={{ delay: index * 0.08 }}
              className="rounded-xl bg-surface border border-white/5 p-6">
              <h3 className="text-base font-bold text-white mb-2">{protocol.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{protocol.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- File Formats -------------------------------------------------- */
function FormatsSection() {
  const formats = INTEGRATIONS_FORMATS;
  return (
    <section className="relative py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">{formats.badge}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{formats.title}</h2>
          <p className="text-gray-400">{formats.subtitle}</p>
        </motion.div>
        <motion.div {...FADE_UP} className="flex flex-wrap gap-3 justify-center">
          {formats.formats.map((format) => (
            <span key={format} className="px-5 py-2.5 rounded-lg bg-surface border border-white/5 text-sm font-semibold text-gray-300">
              {format}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -- One Connection, Every Capability ------------------------------ */
function CapabilitiesSection() {
  const capabilities = INTEGRATIONS_CAPABILITIES;
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">{capabilities.badge}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {capabilities.title}<span className="gradient-text">{capabilities.titleHighlight}</span>
          </h2>
          <p className="text-gray-400">{capabilities.subtitle}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.items.map((capability, index) => (
            <motion.div key={capability.title} {...FADE_UP} transition={{ delay: index * 0.08 }}>
              <Link href={capability.href}
                className="group block rounded-xl bg-surface border border-white/5 p-6 text-center hover:border-violet-500/30 transition-all card-hover">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {capability.icon}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors mb-1">{capability.title}</h3>
                <p className="text-xs text-gray-400">{capability.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Connector Guides (Planned) ------------------------------------ */
function GuidesSection() {
  const guides = INTEGRATIONS_GUIDES;
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-4 border border-orange-500/20">
            <Clock className="w-3.5 h-3.5" />{guides.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {guides.title}<span className="gradient-text">{guides.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{guides.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.items.map((guide, index) => (
            <motion.div key={guide.title} {...FADE_UP} transition={{ delay: index * 0.06 }}
              className="rounded-2xl bg-surface/50 border border-dashed border-white/10 p-6 relative">
              <span className="absolute top-4 right-4 text-[9px] font-extrabold tracking-wider px-2 py-1 rounded-full bg-orange-500/15 text-orange-400">
                PLANNED
              </span>
              <h3 className="text-base font-bold text-white mb-2">{guide.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{guide.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -- Page Orchestrator --------------------------------------------- */
export default function IntegrationsPage() {
  return (
    <>
      <IntegrationsHero />
      <PlatformAnswerFirst content={INTEGRATIONS_ANSWER_FIRST} />
      <SystemsSection />
      <ProtocolsSection />
      <FormatsSection />
      <CapabilitiesSection />
      <GuidesSection />
      <PlatformFAQ content={INTEGRATIONS_FAQ} />
      <PlatformRelatedPages content={INTEGRATIONS_RELATED} />
      <PlatformCTA content={INTEGRATIONS_CTA} />
    </>
  );
}
