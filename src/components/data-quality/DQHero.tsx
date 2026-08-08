"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { DQ_HERO, DQ_LEDGER_ROWS } from "@/lib/data-quality-content";

const DEMO_URL =
  "/contact#book-a-demo";

export default function DQHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-blue-600 top-1/4 left-1/4 animate-pulse-glow" />
      <div className="hero-glow bg-violet-600 bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-violet-300 font-bold tracking-[0.18em] uppercase mb-4"
        >
          {DQ_HERO.kick}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-200 text-xs font-semibold mb-6"
        >
          {DQ_HERO.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl mb-5"
        >
          {DQ_HERO.title}
          <span className="gradient-text">{DQ_HERO.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed"
        >
          {DQ_HERO.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-5"
        >
          <a
            href={DEMO_URL}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-2xl shadow-blue-500/25"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Play className="w-4 h-4" />
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-1.5 text-sm text-amber-200/70 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1">{DQ_HERO.rating}</span>
        </motion.div>

        {/* Live Ledger Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 max-w-3xl"
        >
          <div className="flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-gray-500 mb-4">
            <span>data quality engine · live</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="space-y-2">
            {DQ_LEDGER_ROWS.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.15 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] text-sm text-gray-200"
              >
                <span className="flex-1 truncate">{row.label}</span>
                <span className="hidden sm:block text-gray-400 text-xs shrink-0">
                  {row.detail}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full shrink-0 ${row.tagStyle}`}
                >
                  {row.tag}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 text-center mt-3">
            every rule versioned · every change logged & auditable
          </p>
        </motion.div>
      </div>
    </section>
  );
}
