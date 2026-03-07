"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  SearchCheck,
  Shuffle,
  ShieldCheck,
  Upload,
  Zap,
  TrendingUp,
  Target,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const stages = [
  { key: "extract", icon: Database, color: "from-blue-500 to-cyan-500" },
  { key: "profile", icon: SearchCheck, color: "from-emerald-500 to-teal-500" },
  { key: "transform", icon: Shuffle, color: "from-amber-500 to-orange-500" },
  { key: "validate", icon: ShieldCheck, color: "from-violet-500 to-purple-500" },
  { key: "load", icon: Upload, color: "from-rose-500 to-pink-500" },
];

const metrics = [
  { key: "accuracy", icon: Target, value: "100%", color: "text-emerald-400" },
  { key: "efficiency", icon: TrendingUp, value: "70%", color: "text-amber-400" },
  { key: "firstPass", icon: Zap, value: "95%+", color: "text-violet-400" },
  { key: "leadTime", icon: Clock, value: "3x", color: "text-cyan-400" },
];

export default function UseCaseShowcase() {
  const t = useTranslations("useCaseShowcase");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-4 border border-amber-500/20">
            <Zap className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        {/* Main showcase card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-surface border border-white/5 overflow-hidden"
        >
          {/* Scenario header */}
          <div className="px-8 py-6 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SAP S/4HANA
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {t("scenarioTag")}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t("scenarioTitle")}
            </h3>
            <p className="text-sm text-gray-400 mt-2 max-w-2xl">
              {t("scenarioDescription")}
            </p>
          </div>

          {/* ETL Flow stages */}
          <div className="px-8 py-10">
            <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
              {stages.map((stage, index) => (
                <div key={stage.key} className="flex items-center flex-1 lg:flex-row flex-col">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-1 w-full rounded-xl bg-white/[0.03] border border-white/5 p-5 hover:border-white/10 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stage.color} flex items-center justify-center mb-3`}
                    >
                      <stage.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {t(`stages.${stage.key}.title`)}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {t(`stages.${stage.key}.description`)}
                    </p>
                  </motion.div>
                  {index < stages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-600 shrink-0 mx-2 rotate-90 lg:rotate-0 my-2 lg:my-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics bar */}
          <div className="px-8 py-6 border-t border-white/5 bg-white/[0.02]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                  className="text-center"
                >
                  <metric.icon className={`w-5 h-5 ${metric.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {t(`metrics.${metric.key}`)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="px-8 py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              {t("ctaText")}
            </p>
            <Link
              href="/blog/bp-vendor-migration-s4hana-dq-differentiator"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/25 whitespace-nowrap"
            >
              {t("readFullStory")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
