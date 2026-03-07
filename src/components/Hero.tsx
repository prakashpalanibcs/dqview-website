"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Database,
  Shield,
  Workflow,
  BarChart3,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";

const floatingIcons = [
  { Icon: Database, x: "10%", y: "20%", delay: 0 },
  { Icon: Shield, x: "85%", y: "15%", delay: 1 },
  { Icon: Workflow, x: "75%", y: "70%", delay: 2 },
  { Icon: BarChart3, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Zap, x: "90%", y: "45%", delay: 0.5 },
];

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stats.fasterResolution.value"), label: t("stats.fasterResolution.label") },
    { value: t("stats.dataErrors.value"), label: t("stats.dataErrors.label") },
    { value: t("stats.migrationOptimized.value"), label: t("stats.migrationOptimized.label") },
    { value: t("stats.auditReady.value"), label: t("stats.auditReady.label") },
  ];

  const pipelineSteps = [
    { label: t("pipeline.extract"), color: "bg-emerald-500", status: "done" },
    { label: t("pipeline.profile"), color: "bg-teal-500", status: "done" },
    { label: t("pipeline.validate"), color: "bg-amber-500", status: "done" },
    { label: t("pipeline.transform"), color: "bg-emerald-600", status: "active" },
    { label: t("pipeline.load"), color: "bg-amber-600", status: "pending" },
  ];

  const metrics = [
    { label: t("metrics.recordsProcessed.label"), value: t("metrics.recordsProcessed.value"), change: t("metrics.recordsProcessed.change") },
    { label: t("metrics.qualityScore.label"), value: t("metrics.qualityScore.value"), change: t("metrics.qualityScore.change") },
    { label: t("metrics.errorsDetected.label"), value: t("metrics.errorsDetected.value"), change: t("metrics.errorsDetected.change") },
    { label: t("metrics.fieldsScrambled.label"), value: t("metrics.fieldsScrambled.value"), change: t("metrics.fieldsScrambled.change") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-emerald-600 top-1/4 left-1/4 animate-pulse-glow" />
      <div className="hero-glow bg-amber-600 bottom-1/4 right-1/4 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15, y: [0, -15, 0] }}
          transition={{
            opacity: { delay: delay + 0.5, duration: 1 },
            y: { delay, duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon className="w-8 h-8 text-emerald-400" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-sm text-gray-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t("badge")}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">{t("headline1")}</span>
          <br />
          <span className="gradient-text">{t("headline2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("subheadline")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://calendly.com/symphonydemo/bcs"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transition-all shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40"
          >
            {t("bookDemo")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Play className="w-4 h-4" />
            {t("seeHowItWorks")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="gradient-border rounded-2xl overflow-hidden">
            <div className="bg-surface rounded-2xl p-1">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 text-center text-xs text-gray-500">
                    {t("dashboardTitle")}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    {pipelineSteps.map((step, i) => (
                      <div key={step.label} className="flex items-center gap-3">
                        <div
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                            step.status === "active"
                              ? `${step.color} text-white`
                              : step.status === "done"
                              ? "bg-white/5 text-emerald-400"
                              : "bg-white/5 text-gray-500"
                          }`}
                        >
                          {step.status === "done" && <CheckCircle2 className="w-4 h-4" />}
                          {step.status === "active" && (
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          )}
                          <span className="text-sm font-medium">{step.label}</span>
                        </div>
                        {i < 4 && (
                          <ArrowRight className="w-4 h-4 text-gray-600 hidden sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                    {metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-white/[0.03] rounded-lg p-3 border border-white/5"
                      >
                        <div className="text-xs text-gray-500">{m.label}</div>
                        <div className="text-lg font-bold text-white mt-1">{m.value}</div>
                        <div className="text-xs text-emerald-400 mt-0.5">{m.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-emerald-500/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
