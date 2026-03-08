"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Layers,
  ShieldCheck,
  Cpu,
  BarChart3,
  Workflow,
  RefreshCw,
  Server,
  Building2,
  Rocket,
  Globe,
} from "lucide-react";
import { useTranslations } from "next-intl";

const reasonMeta = [
  { key: "r1", icon: Layers, color: "from-emerald-500 to-teal-500" },
  { key: "r2", icon: Cpu, color: "from-violet-500 to-purple-500" },
  { key: "r3", icon: ShieldCheck, color: "from-teal-500 to-cyan-500" },
  { key: "r4", icon: BarChart3, color: "from-amber-500 to-orange-500" },
  { key: "r5", icon: Zap, color: "from-emerald-600 to-emerald-400" },
  { key: "r6", icon: Workflow, color: "from-rose-500 to-red-500" },
];

const programMeta = [
  { key: "p1", icon: Rocket },
  { key: "p2", icon: RefreshCw },
  { key: "p3", icon: Globe },
  { key: "p4", icon: Server },
  { key: "p5", icon: Building2 },
  { key: "p6", icon: ShieldCheck },
];

export default function WhyDQView() {
  const t = useTranslations("whyDqView");

  const reasons = reasonMeta.map((r) => ({
    ...r,
    title: t(`reasons.${r.key}.title`),
    description: t(`reasons.${r.key}.description`),
  }));

  const programs = programMeta.map((p) => ({
    ...p,
    title: t(`programs.${p.key}.title`),
    description: t(`programs.${p.key}.description`),
  }));

  return (
    <section id="why-dekorvai" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-2xl bg-surface border border-white/5 p-6 card-hover"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-4`}
              >
                <reason.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {t("programsTitle")} <span className="gradient-text">{t("programsTitleHighlight")}</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">{t("programsSubtitle")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((program, index) => (
            <motion.div
              key={program.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex items-start gap-4 rounded-xl bg-white/[0.02] border border-white/5 p-5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <program.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{program.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
