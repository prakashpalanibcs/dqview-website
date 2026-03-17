"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ScanSearch,
  GitMerge,
  Layers,
  ClipboardCheck,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const stages = [
  { key: "scan", icon: ScanSearch, color: "from-cyan-500 to-blue-500" },
  { key: "match", icon: GitMerge, color: "from-orange-500 to-amber-500" },
  { key: "cluster", icon: Layers, color: "from-violet-500 to-purple-500" },
  { key: "review", icon: ClipboardCheck, color: "from-emerald-500 to-teal-500" },
  { key: "cleanse", icon: Sparkles, color: "from-rose-500 to-pink-500" },
];

const metrics = [
  { key: "detection", icon: ScanSearch, value: "92%+", color: "text-cyan-400" },
  { key: "effort", icon: TrendingUp, value: "60%", color: "text-amber-400" },
  { key: "integrity", icon: ShieldCheck, value: "99%+", color: "text-violet-400" },
  { key: "speed", icon: Clock, value: "4x", color: "text-emerald-400" },
];

export default function FuzzyDuplicateShowcase() {
  const t = useTranslations("fuzzyDuplicateShowcase");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
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
              <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                SAP Master Data
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {t("scenarioTag")}
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                S/4HANA Readiness
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t("scenarioTitle")}
            </h3>
            <p className="text-sm text-gray-400 mt-2 max-w-3xl">
              {t("scenarioDescription")}
            </p>
          </div>

          {/* Before / After example table */}
          <div className="px-8 py-6 border-b border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Before - Duplicate records */}
              <div className="rounded-xl bg-red-500/[0.04] border border-red-500/10 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                    {t("beforeTitle")}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px]">
                    <thead>
                      <tr className="text-gray-500 border-b border-white/5">
                        <th className="text-left pb-2 pr-3 font-medium">{t("table.material")}</th>
                        <th className="text-left pb-2 pr-3 font-medium">{t("table.description")}</th>
                        <th className="text-left pb-2 font-medium">{t("table.plant")}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/[0.03]">
                        <td className="py-1.5 pr-3 font-mono text-[10px]">100001</td>
                        <td className="py-1.5 pr-3">Hexagonal Bolt M10x50 SS304</td>
                        <td className="py-1.5">1000</td>
                      </tr>
                      <tr className="border-b border-white/[0.03] bg-red-500/[0.05]">
                        <td className="py-1.5 pr-3 font-mono text-[10px]">100247</td>
                        <td className="py-1.5 pr-3">Hex Bolt M10 x 50mm Stainless Steel 304</td>
                        <td className="py-1.5">1000</td>
                      </tr>
                      <tr className="border-b border-white/[0.03] bg-red-500/[0.05]">
                        <td className="py-1.5 pr-3 font-mono text-[10px]">100512</td>
                        <td className="py-1.5 pr-3">Hex. Bolt M10*50 SS-304</td>
                        <td className="py-1.5">2000</td>
                      </tr>
                      <tr className="border-b border-white/[0.03]">
                        <td className="py-1.5 pr-3 font-mono text-[10px]">100089</td>
                        <td className="py-1.5 pr-3">Bearing Ball 6205-2RS SKF</td>
                        <td className="py-1.5">1000</td>
                      </tr>
                      <tr className="bg-red-500/[0.05]">
                        <td className="py-1.5 pr-3 font-mono text-[10px]">100634</td>
                        <td className="py-1.5 pr-3">SKF Ball Bearing 6205 2RS</td>
                        <td className="py-1.5">2000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-red-400/60 mt-3">
                  {t("beforeCaption")}
                </p>
              </div>

              {/* After - Cleansed records */}
              <div className="rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {t("afterTitle")}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[11px]">
                    <thead>
                      <tr className="text-gray-500 border-b border-white/5">
                        <th className="text-left pb-2 pr-3 font-medium">{t("table.golden")}</th>
                        <th className="text-left pb-2 pr-3 font-medium">{t("table.description")}</th>
                        <th className="text-left pb-2 pr-3 font-medium">{t("table.merged")}</th>
                        <th className="text-left pb-2 font-medium">{t("table.confidence")}</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/[0.03]">
                        <td className="py-1.5 pr-3 font-mono text-[10px] text-emerald-400">100001</td>
                        <td className="py-1.5 pr-3">Hexagonal Bolt M10x50 SS304</td>
                        <td className="py-1.5 pr-3 font-mono text-[10px] text-gray-500">100247, 100512</td>
                        <td className="py-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-medium">94.2%</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 pr-3 font-mono text-[10px] text-emerald-400">100089</td>
                        <td className="py-1.5 pr-3">Bearing Ball 6205-2RS SKF</td>
                        <td className="py-1.5 pr-3 font-mono text-[10px] text-gray-500">100634</td>
                        <td className="py-1.5">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-medium">91.7%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-emerald-400/60 mt-3">
                  {t("afterCaption")}
                </p>
              </div>
            </div>
          </div>

          {/* Pipeline Flow stages */}
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
              href="/blog/fuzzy-duplicate-detection-sap-master-data-dekorvai"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-400 hover:to-purple-400 transition-all shadow-lg shadow-violet-500/25 whitespace-nowrap"
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
